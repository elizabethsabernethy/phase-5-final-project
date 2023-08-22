import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Nails() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Nails ~</h1>
        <div className="menu-container">
            <div className="stylist-menu">
                <StylistMenu job={"Nail Technician"}/>
            </div>
            <div className="service-menu">
                <ServiceMenu category={"Nails"}/>
            </div>
        </div>   
     </div>
    );
  }
  
  export default Nails;

 