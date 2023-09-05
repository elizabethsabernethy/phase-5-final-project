import { useContext } from "react";
import Service from "./Service";
import { ServiceContext } from "./context/ServiceContext";

function ServiceMenu({category}) {

    const {services} = useContext(ServiceContext);
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