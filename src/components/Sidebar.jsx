import { NavLink } from "react-router-dom"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialGooglePlus } from "react-icons/ti"
import { BsVimeo } from "react-icons/bs"
import { FaPinterestP } from "react-icons/fa"

const Sidebar = () => {

  const closeSideBar = () => {
    const something = window.document.querySelector('.sidebar');
    something.classList.remove('sidebar-active');
  }

  return (
    <div className="sidebar">
      <span className="close-sidebar" onClick={closeSideBar}>X</span>
      <h1>Zuku Apartments</h1>
      <div id="links-div">
        <NavLink className="nav-link" to="/">APARTMENTS</NavLink>
        <NavLink className="nav-link" to="/add_house">ADD APARTMENT</NavLink>
        <NavLink className="nav-link" to="/delete_house">DELETE APARTMENT</NavLink>
        <NavLink className="nav-link" to="/my_reservations">MY RESERVATIONS</NavLink>
        <NavLink className="nav-link" to="/add_reservation">ADD RESERVATION</NavLink>
      </div>
      <div className="social-contact-container">
        <BsTwitter className="social-icon"/>
        <FaFacebookF className="social-icon"/>
        <TiSocialGooglePlus className="social-icon"/>
        <BsVimeo className="social-icon"/>
        <FaPinterestP className="social-icon"/>
        <p>We need some text here</p>
      </div>
    </div>
  );
}
 
export default Sidebar;