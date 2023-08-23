import { useContext} from "react";
import { UserContext } from "./context/UserContext";
import LoginOrSignupPage from "./LoginOrSignup";

function BookAppt(){

 const {user} = useContext(UserContext);

  return (
      <div>
        {user.id? (
            <p>Book appoinemnt now</p>
        ):(
            <LoginOrSignupPage/>
        )}
      </div>
  );
}

export default BookAppt;