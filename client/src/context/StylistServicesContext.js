import React, {useState, useEffect} from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {

    const [stylistServices, setStylistServices] = useState([]);

    useEffect(()=>{
        fetch('/stylist_services')
        .then((resp) => resp.json())
        .then((stylistServices) => setStylistServices(stylistServices))
      },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <UserContext.Provider value={{stylistServices}}>{children}</UserContext.Provider>;
  }
  
  export { UserContext, UserProvider };