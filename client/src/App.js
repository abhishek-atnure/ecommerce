import { Fragment, useEffect } from "react";
import Cart from "./components/cart/Cart";
import { EditProfile } from "./components/editProfile/EditProfile";
import Orders from "./components/orders/Orders";
import Checkout from "./features/checkout/Checkout";
import LoginSignup from "./features/loginSignup/LoginSignup";
import { Navigation } from "./features/navigation/Navigation";
import { SearchSection } from "./features/searchSection/SearchSection";
import Signuplogin from "./features/signupLogin/SignupLogin";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { loadProducts, loadCategory } from "./slices/productSlice";
import {
  authSelector,
  authenticated,
  notAuthenticated,
} from "./slices/authSlice";

function App() {
  const { auth } = useSelector(authSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadCategory());
    dispatch(loadProducts());
  }, [dispatch]);

  useEffect(() => {
    const isAuth = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/auth/is-verify",
          {
            method: "GET",
            headers: { token: localStorage.token },
          }
        );
        const data = await response.json();
        data === true ? dispatch(authenticated()) : dispatch(notAuthenticated());
      } catch (error) {
        console.error(error.message);
      }
    };
    isAuth();
  });

  return (
    <Fragment>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/" exact component={SearchSection} />

            <Route
              path="/edit-profile"
              render={(props) =>
                auth ? <EditProfile /> : <Redirect to="/login" />
              }
            />

            <Route
              path="/cart"
              render={(props) =>
                auth ? <Cart /> : <Redirect to="/register" />
              }
            />

            <Route
              path="/orders"
              render={(props) => (auth ? <Orders /> : <Redirect to="/login" />)}
            />

            <Route
              path="/login"
              render={(props) =>
                !auth ? <LoginSignup /> : <Redirect to="/" />
              }
            />

            <Route
              path="/register"
              render={(props) =>
                !auth ? <Signuplogin /> : <Redirect to="/" />
              }
            />

            <Route
              path="/checkout"
              render={(props) =>
                auth ? <Checkout /> : <Redirect to="/login" />
              }
            />
          </Switch>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
