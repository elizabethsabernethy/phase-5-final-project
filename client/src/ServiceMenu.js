import { useContext, useEffect, useState } from "react";
import Service from "./Service";
import { UserContext } from "./context/StylistServicesContext";

function ServiceMenu({category}) {

    const {stylistServices} = useContext(UserContext);
    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('/services')
        .then((resp) => resp.json())
        .then((services) => setServices(services))
    },[])

    const filteredServices = services.filter((service)=> service.category === category)
    
    return (
     <div className="parent-container">
        <h1 className="menu-header">Service Menu</h1>
        {filteredServices.map((service) => {
            return <Service key={service.id} service={service}/>
        })}
     </div>
    );
  }
  
  export default ServiceMenu;