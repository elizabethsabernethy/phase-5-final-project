import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function Profile(){

    const {user} = useContext(UserContext);

    return(
            <div id="user-container">
                {user.id? 
                    <div className="profile">
                        <h2>Hi, {user.name}</h2>
                    </div> : 
                    <div>
                        <h2>Please login to view profile</h2>
                    </div>}
            </div>
    )
}

export default Profile;