import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./context/UserContext";

function EditProfile(){

      const {user, setUser} = useContext(UserContext)
      const [username, setUsername] = useState(user.username);
      const [name, setName] = useState(user.name);
      const [password, setPassword] = useState("");
      const [passwordConfirmation, setPasswordConfirmation] = useState("");
      const history = useHistory();
      const [passwordChange, setPasswordChange] = useState(true)
    
      function handleProfileSubmit(e) {
        e.preventDefault();
        fetch(`/profile/${user.id}/edit`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            username: username
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => updateProfile(data));
            alert("Account successfully updated")
              history.push("/profile")
          } else {
            r.json().then((err) => err.error.map((error)=> alert(error)));
          }
        });
      }

      function updateProfile(newUser){
        const updatedUser = {
          id: user.id,
          name: newUser.name,
          username: newUser.username,
          appointments: user.appointments,
        }
        setUser(updatedUser)
      }

      function updatePassword(newUser){
        const updatedUser = {
          id: user.id,
          name: user.name,
          username: user.username,
          appointments: user.appointments,
          password_diget: newUser.password
        }
        setUser(updatedUser)
      }

      function handlePasswordSubmit(e){
        e.preventDefault();
        fetch(`/profile/${user.id}/edit`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            password: password,
            password_confirmation: passwordConfirmation
          }),
        }).then((r) => {
          if (r.ok) {
            r.json().then((data) => updatePassword(data));
            alert("Password successfully updated")
              history.push("/profile")
          } else {
            r.json().then((err) => err.error.map((error)=> alert(error)));
          }
        });
      }
  
      return (
          <div>
             {user.id?
             <div> 
              <h1 className="name-container">Edit Profile</h1>
              <div id="signup-page">
                  <form id="edit-form" onSubmit={handleProfileSubmit}>
                  <label htmlFor="name">Name</label>
                  <input
                      type="text"
                      id="name"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="username">Username</label>
                  <input
                      type="text"
                      id="username"
                      autoComplete="off"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                  />
                  <button className="form-button" type="submit">Update Profile</button>
              </form>
              <div className="edit-form-div">
              <button className="form-button" onClick={() => setPasswordChange(!passwordChange)}>{passwordChange? "Change Password" : "Don't Change Password"}</button>
              </div>
              <form id="password-form" hidden={passwordChange} onSubmit={handlePasswordSubmit}>
                <div className="edit-form-div">
                  <label htmlFor="password">New Password</label>
                </div>
                  <div className="edit-form-div">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                  />
                  </div>
                  <div className="edit-form-div">
                    <label htmlFor="password">Confirm New Password</label>
                  </div>
                  <div className="edit-form-div">
                    <input
                      type="password"
                      id="password_confirmation"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      autoComplete="current-password"
                  />
                  </div>
                  <div className="edit-form-div">
                    <button className="form-button" type="submit">Update Password</button>
                  </div>
              </form>
              </div>
              </div>: 
              <h2>Please Login to View Profile</h2>}
          </div>
        
      );
  }

export default EditProfile;