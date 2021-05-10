import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faUser,
  faShippingFast,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./profile.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { userSelector } from "../../slices/userSlice";
import { authSelector } from "../../slices/authSlice";
import { toast } from "react-toastify";

toast.configure();
export function Profile() {
  let { user_name } = useSelector(userSelector);
  const { auth } = useSelector(authSelector);

  const showMenu = () => {
    const menu = document.getElementById("menuItems");
    menu.classList.toggle("show");
  };




  const logout = async (e) => {
    try {
      await localStorage.removeItem("token");
      toast.success("logged out successfully!");
      window.location.reload()
    } catch (error) {
      toast.error("Please try again later !");
    }
  };

  const firstname = () => {
    if (!user_name) {
      user_name = "My account";
    } else {
      const index = user_name.indexOf(" ");
      const str = user_name.slice(0, index);
      return str;
    }
  };

  return (
    <div className="profile">
      <div className="drop-btn">
        <span className="iconP">
          {" "}
          <FontAwesomeIcon icon={faUser} />
        </span>
        {!auth ? "My account" : firstname()}
        {auth ? (
          <span
            id="dropArrow"
            onClick={(e) => showMenu(e)}
          >
            {" "}
            <FontAwesomeIcon icon={faAngleDown} />
          </span>) : (<Link to="/login">
            <span id="dropArrow">
              <FontAwesomeIcon icon={faAngleDown} /></span>
          </Link>)}
      </div>

      <div id="menuItems" className="menuItems">
        <ul>
          {/*<li> <Link to="/edit-profile">
                    <div className="icon"><FontAwesomeIcon icon={faUserCircle} /></div>Edit Profile
    </Link> </li>*/}
          <li>
            <Link to="/orders">
              <div className="icon">
                <FontAwesomeIcon icon={faShippingFast} />
              </div>
              Orders
            </Link>
          </li>

          <li onClick={(e) => logout(e)}>
            <Link  >
              <div className="icon">
                <FontAwesomeIcon icon={faSignOutAlt} />
              </div>
              Log Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
