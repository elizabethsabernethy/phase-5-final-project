import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Logout(){

    const history = useHistory();

    useEffect(() => {
        const timer = setTimeout(() => {
        return history.push("/")
        }, 2000);
        return () => clearTimeout(timer);
      }, []);

  return (
      <div>
        <h1>Thanks for visiting, come back soon!</h1>
      </div>
  );
}

export default Logout;