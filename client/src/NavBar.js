import { useContext } from "react";
import {NavLink} from "react-router-dom";
import { UserContext } from "./context/UserContext";

function NavBar(){

    const {user} = useContext(UserContext);

    const linkStyles = {
        display: "inline-block",
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        color: "antiquewhite",
        borderRadius: "5px",
        textAlign: "center",
        fontSize: "20px",
        textDecoration:"none",
        background: "rgb(145, 8, 8)"
      };

    return(
        <div className="navbar">
            <NavLink
            to="/"
            style={linkStyles}
            >
                Home
            </NavLink>
            <NavLink
            to="/hair"
            style={linkStyles}
            >
                Hair
            </NavLink>
            <NavLink
            to="/nails"
            style={linkStyles}
            >
                Nails
            </NavLink>
            <NavLink
            to="/facials"
            style={linkStyles}
            >
                Facials
            </NavLink>
            <NavLink
            to="/massage"
            style={linkStyles}
            >
                Massage
            </NavLink>
            {user.id? 
            <NavLink
            to="/book"
            style={linkStyles}
            >
                Book Appt
            </NavLink> : <NavLink
            to="/login"
            style={linkStyles}
            >
                Login
            </NavLink>}
            {user.id? 
            <NavLink to="/profile"
            style={linkStyles}>
                Profile
            </NavLink> : null}
        </div>
    )
}

export default NavBar;