import React, {useState, useEffect} from "react";

const StylistContext = React.createContext();

function StylistProvider({ children }) {

    const [stylists, setStylists] = useState([]);

    useEffect(()=>{
      fetch('/stylists')
      .then((resp) => resp.json())
      .then((stylists) => setStylists(stylists))
  },[])

    // the value prop of the provider will be our context data
    // this value will be available to child components of this provider
    return <StylistContext.Provider value={{stylists, setStylists}}>{children}</StylistContext.Provider>;
  }
  
  export { StylistContext, StylistProvider };