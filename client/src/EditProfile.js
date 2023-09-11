import { useContext, useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { UserContext } from "./context/UserContext";

function EditProfile(){

      const {user} = useContext(UserContext)
      const [username, setUsername] = useState(user.username);
      const [name, setName] = useState(user.name);
      const [password, setPassword] = useState("");
      const [passwordConfirmation, setPasswordConfirmation] = useState("");
      const history = useHistory();
      const [passwordChange, setPasswordChange] = useState(true)
    
      function handleSubmit(e) {
        e.preventDefault();
        // setIsLoading(true);
        // fetch("/signup", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify({
        //       name,
        //     username,
        //     password,
        //     password_confirmation: passwordConfirmation
        //   }),
        // }).then((r) => {
        //   setIsLoading(false);
        //   if (r.ok) {
        //     r.json().then((user) => setUser(user));
        //     alert("Account successfully created")
        //       history.push("/profile")
        //   } else {
        //     r.json().then((err) => {err.errors.map((error)=>alert(error))});
        //   }
        // });
      }
  
      return (
          <div>
             {user.id?
             <div> 
              <h1 className="name-container">Edit Profile</h1>
              <div id="signup-page">
                  <form id="signup-form" onSubmit={handleSubmit}>
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
              <button className="form-button" onClick={() => setPasswordChange(!passwordChange)}>Change Password</button>
              <form hidden={passwordChange}>
              <label htmlFor="password">Password</label>
                  <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      autoComplete="current-password"
                  />
                  <label htmlFor="password">Password Confirmation</label>
                  <input
                      type="password"
                      id="password_confirmation"
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
                      autoComplete="current-password"
                  />
                  <button className="form-button" type="submit">Update Password</button>
              </form>
              </div>
              </div>: 
              <h2>Please Login to View Profile</h2>}
          </div>
        
      );
  }

export default EditProfile;