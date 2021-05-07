module.exports = function (req, res, next) {
  const { user_name, name, password } = req.body;

  function validuser_name(useruser_name) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(useruser_name);
  }

  if (req.path === "/register") {
    console.log(!user_name.length);
    if (![user_name, name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validuser_name(user_name)) {
      return res.json("Invalid user_name");
    }
  } else if (req.path === "/login") {
    if (![user_name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validuser_name(user_name)) {
      return res.json("Invalid user_name");
    }
  }

  next();
};
