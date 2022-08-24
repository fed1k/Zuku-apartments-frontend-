import { NavLink } from "react-router-dom";
import { BsTwitter, BsVimeo } from "react-icons/bs";
import { FaFacebookF, FaPinterestP, FaUserCircle } from "react-icons/fa";
import { TiSocialGooglePlus } from "react-icons/ti";
import PropTypes from "prop-types";
import logo from "../../181869.svg";

const Sidebar = ({ setIn }) => {
  const closeSideBar = () => {
    const something = window.document.querySelector(".sidebar");
    something.classList.remove("sidebar-active");
  };

  const signOut = () => {
    setIn(false);
    localStorage.removeItem("current_user");
    localStorage.removeItem("token");
  };

  const currentUser = JSON.parse(localStorage.getItem("current_user")).name;

  return (
    <div className="sidebar">
      <span className="close-sidebar" onClick={closeSideBar}>
        X
      </span>
      <img className="logo" src={logo} alt="logo" />
      <div>
        <span className="current-user-name">
          <FaUserCircle />
          {currentUser}
        </span>
      </div>
      <div id="links-div">
        <NavLink onClick={closeSideBar} className="nav-link" to="/">
          APARTMENTS
        </NavLink>
        <NavLink onClick={closeSideBar} className="nav-link" to="/add_house">
          ADD APARTMENT
        </NavLink>
        <NavLink onClick={closeSideBar} className="nav-link" to="/delete_house">
          DELETE APARTMENT
        </NavLink>
        <NavLink
          onClick={closeSideBar}
          className="nav-link"
          to="/my_reservations"
        >
          MY RESERVATIONS
        </NavLink>
        <NavLink
          onClick={closeSideBar}
          className="nav-link"
          to="/add_reservation"
        >
          ADD RESERVATION
        </NavLink>
        <button
          type="button"
          className="nav-link sign-out-btn"
          onClick={signOut}
        >
          SIGN OUT
        </button>
      </div>
      <div className="social-contact-container">
        <BsTwitter className="social-icon" />
        <FaFacebookF className="social-icon" />
        <TiSocialGooglePlus className="social-icon" />
        <BsVimeo className="social-icon" />
        <FaPinterestP className="social-icon" />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setIn: PropTypes.func.isRequired,
};

export default Sidebar;
