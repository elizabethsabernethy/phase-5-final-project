import { useContext } from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Profile(){

    const {user, handleLogout} = useContext(UserContext);
    const history = useHistory();

    return(
            <div id="user-container">
                {user.id? 
                    <div className="profile">
                        <h2>Hi, {user.name}</h2>
                        <button onClick={handleLogout} className="form-button">Logout</button>
                    </div> : 
                    <div>
                        {history.push('/')}
                    </div>}
            </div>
    )
}

export default Profile;