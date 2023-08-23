import React, {useState, useEffect} from "react";

const StylistServicesContext = React.createContext();

function StylistServicesProvider({ children }) {

    const [stylistServices, setStylistServices] = useState([]);

    useEffect(()=>{
        fetch('/stylist_services')
        .then((resp) => resp.json())
        .then((stylistServices) => setStylistServices(stylistServices))
      },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <StylistServicesContext.Provider value={{stylistServices}}>{children}</StylistServicesContext.Provider>;
  }
  
  export { StylistServicesContext, StylistServicesProvider};