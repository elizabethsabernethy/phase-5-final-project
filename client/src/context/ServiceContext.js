import React, {useState, useEffect} from "react";

const ServiceContext = React.createContext();

function ServiceProvider({ children }) {

    const [services, setServices] = useState([]);

    useEffect(()=>{
      fetch('/services')
      .then((resp) => resp.json())
      .then((services) => setServices(services))
  },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <ServiceContext.Provider value={{services, setServices}}>{children}</ServiceContext.Provider>;
  }
  
  export { ServiceContext, ServiceProvider };