import { useContext} from "react";
import { UserContext } from "./context/UserContext";
import LoginOrSignupPage from "./LoginOrSignup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BookAppt(){

 const {user} = useContext(UserContext);
 const history = useHistory();

  return (
      <div>
        {user.id? (
            <p>Book appoinemnt now</p>
        ):(
            history.push('/login')
        )}
      </div>
  );
}

export default BookAppt;