import { useContext} from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function BookAppt(){

 const {user} = useContext(UserContext);
 const history = useHistory();

  return (
      <div>
        {user.id? (
            <h1>BYYYEEE</h1>
        ):(
            history.push('/login')
        )}
      </div>
  );
}

export default BookAppt;