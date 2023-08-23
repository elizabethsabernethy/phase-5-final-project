import { useContext } from "react";
import { StylistServicesContext} from "./context/StylistServicesContext";

function Service({service}) {

   const {stylistServices} = useContext(StylistServicesContext);

   console.log(stylistServices)
    
    return (
     <div className="service-container">
        <h3>{service.name}</h3>
        <h5>Duration: {service.duration}</h5>
        <h5>Price: {service.price}</h5>
     </div>
    );
  }
  
  export default Service;