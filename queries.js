const pool = require("./db");
const bcrypt = require("bcrypt");

const jwtGenrator = require("./jwtGen");
const { Client } = require("pg");

const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await pool.query("SELECT * FROM product");
    res.json(getAllProducts.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const getProduct = await pool.query("SELECT * FROM product WHERE id=$1", [
      id,
    ]);
    res.json(getProduct.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
};

const getAllCategory = async (req, res) => {
  try {
    const getCategory = await pool.query("SELECT * FROM category");
    res.json(getCategory.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    const { category_id } = req.params;
    const getProductsByCategory = await pool.query(
      "select product.name, product.description,product.price from product JOIN category ON product.category_id=category.id WHERE product.category_id=$1",
      [category_id]
    );
    res.json(getProductsByCategory.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const register = async (req, res, next) => {
  try {
    const { user_name, name, password, contact_num } = req.body;

    const user = await pool.query(
      `SELECT  *  FROM account WHERE
                                        user_name=$1`,
      [user_name]
    );

    if (user.rows.length !== 0) {
      return res.status(401).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await pool.query(
      `WITH results as (INSERT INTO account(user_name,name,password,contact_num)VALUES($1,$2,$3,$4) 
  returning id as user_id)
  insert into cart(user_id)
  select user_id from results RETURNING id`,
      [user_name, name, hashedPassword, contact_num]
    );

    const token = jwtGenrator(createUser.rows[0].id);
    res.json({ token });
  } catch (err) {
    res.status(500).send("server error");
    console.log(err.message);
  }
};

const login = async (req, res) => {
  try {
    const { user_name, password } = req.body;
    const user = await pool.query(`SELECT *  FROM account WHERE user_name=$1`, [
      user_name,
    ]);

    if (user.rows.length === 0) {
      return res.status(401).json("Password or Email is incorrect");
    }

    const validPassword = await bcrypt.compare(password, user.rows[0].password);

    if (!validPassword) {
      return res.status(401).json("Password or email is incorrect");
    }
    const token = jwtGenrator(user.rows[0].id);
    res.json({ token });
  } catch (error) {
    console.error(error.message);
  }
};

const updateExistingUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, user_name, contact_num, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const updateUser = await pool.query(
      "UPDATE account SET name=$1, user_name=$2,contact_num=$3,password=$4  WHERE id=$5 RETURNING id",
      [name, user_name, contact_num, hashedPassword, id]
    );
    res.json(updateUser.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const creatingCartId = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cart = await pool.query(
      `INSERT INTO cart(user_id) VALUES($1) RETURNING id`,
      [user_id]
    );
    res.json(cart.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const addingProductsToCart = async (req, res) => {
  try {
    const cart_id = req.body.cart_id;
    const product_id = req.body.product_id;

    const cartCreate = await pool.query(
      `INSERT INTO cart_product(cart_id,product_id,quantity,status,price) 
        VALUES($1,$2,1,'current',(
          SELECT product.price*1 
        FROM product where id=$3))
        RETURNING cart_id`,
      [cart_id, product_id, product_id]
    );
    res.json(cartCreate.rows);
  } catch (error) {
    console.log(error.message);
  }
};

const gettingCartById = async (req, res) => {
  try {
    const { cart_id } = req.params;

    const gettingCart = await pool.query(
      "SELECT product.id as id ,product.name AS Name, product.description AS Description, product.img_url as img, product.price*cart_product.quantity as Price, cart_product.quantity as Quantity, product.price*cart_product.quantity as Total_Price FROM product,cart_product WHERE product.id=cart_product.product_id AND cart_product.cart_id=$1 AND cart_product.status='current'",
      [cart_id]
    );
    res.json(gettingCart.rows);
  } catch (err) {
    console.log("no products into cart");
  }
};

const changeQuantity = async (req, res) => {
  try {
    const { product_id, quantity, cart_id } = req.body;
    const removeOneProduct = await pool.query(
      "UPDATE cart_product SET quantity=$1,price=(SELECT product.price*$2 FROM product where id=$3) WHERE cart_id=$4 AND product_id=$5 AND status='current' RETURNING quantity",
      [quantity, quantity, product_id, cart_id, product_id]
    );
    res.json(removeOneProduct.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const checkout = async (req, res) => {
  try {
    console.log(req.body);
    const { cart_id } = req.params;
    const { address, user_id, time } = req.body;
    const results = await pool.query(
      `with row as (
                INSERT INTO orders(customer_id,cart_id,amount,address,order_status,time)
                VALUES($1,$2,
               (select sum(price) FROM cart_product WHERE cart_id=$3),
               $4,'purchased',$5) RETURNING id
        )
        UPDATE cart_product
        SET status='proceed',
         order_id=(select id from row limit 1)
        WHERE cart_id=$6 RETURNING cart_id as id`,
      [user_id, cart_id, cart_id, address, time, cart_id]
    );
    res.json(results.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const deleteCart = async (req, res) => {
  try {
    const { cart_id } = req.params;
    const deletedCart = await pool.query(
      "delete from cart_product where cart_id=$1 AND status='current'",
      [cart_id]
    );
    res.json("Cart removed");
  } catch (err) {
    console.log(err.message);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { cart_id, product_id } = req.body;

    const deletedCart = await pool.query(
      "delete from cart_product where cart_id=$1 and product_id=$2 and status='current'",
      [cart_id, product_id]
    );
    res.json("Cart removed");
  } catch (err) {
    console.log(err.message);
  }
};

const getAllOrders = async (req, res) => {
  try {
    const { user_id } = req.params;

    const allOrders = await pool.query(
      `select 
            cart_product.cart_id,name,description,
            product.img_url as image,
            cart_product.price,cart_product.quantity,
            orders.order_status, orders.time as time 
            from product,cart_product,orders
            where product.id=cart_product.product_id
                and 
            order_id in (select id from orders where customer_id=$1 )
            group by 
            cart_product.cart_id,name,
            product.img_url, 
            description, 
            cart_product.price,
            cart_product.quantity,
            orders.order_status,
            orders.time`,
      [user_id]
    );
    res.json(allOrders.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const getOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await pool.query(
      `select 
            cart_product.cart_id,name,description,
            cart_product.price,cart_product.quantity 
            from product,cart_product,orders
            where product.id=cart_product.product_id
                and 
            order_id in (select id from orders where cart_id=$1 )
            group by 
                cart_product.cart_id,name, 
                description, 
                cart_product.price,
                cart_product.quantity`,
      [id]
    );
    res.json(order.rows);
  } catch (err) {
    console.log(err.message);
  }
};

const dashboard = async (req, res) => {
  try {
    //res.json(req.user)
    const userData = await pool.query(
      "SELECT account.id as user_id,account.user_name as user_email, account.name as user_name,account.contact_num as contact_num, account.password as password,  cart.id as cart_id FROM account  JOIN cart ON account.id=cart.user_id WHERE user_id=$1",
      [req.user]
    );
    return res.json(userData.rows);
  } catch (error) {
    console.error(error.message);
    res.status(500).json("Server Error");
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  getAllCategory,
  getProductsByCategory,
  register,
  updateExistingUser,
  creatingCartId,
  addingProductsToCart,
  gettingCartById,
  changeQuantity,
  checkout,
  deleteCart,
  getAllOrders,
  getOrder,
  login,
  dashboard,
  deleteProduct,
};
