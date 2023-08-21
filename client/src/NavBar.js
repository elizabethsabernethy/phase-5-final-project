import {NavLink} from "react-router-dom";

function NavBar(){

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
            to="/massages"
            style={linkStyles}
            >
                Massages
            </NavLink>
            <NavLink
            to="/book"
            style={linkStyles}
            >
                Book Appt
            </NavLink>
        </div>
    )
}

export default NavBar;