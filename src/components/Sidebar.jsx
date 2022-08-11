import { NavLink } from "react-router-dom"
import { BsTwitter } from "react-icons/bs"
import { FaFacebookF } from "react-icons/fa"
import { TiSocialGooglePlus } from "react-icons/ti"
import { BsVimeo } from "react-icons/bs"
import { FaPinterestP } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1>Zuku Apartments</h1>
      <div id="links-div">
        <NavLink className="nav-link" to="/">HOUSES</NavLink>
        <NavLink className="nav-link" to="/add_house">ADD HOUSE</NavLink>
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