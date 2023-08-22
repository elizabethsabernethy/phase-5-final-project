import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Facials() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Facials ~</h1>
        <div className="menu-container">
            <div className="stylist-menu">
                <StylistMenu job={"Aesthetician"}/>
            </div>
            <div className="service-menu">
                <ServiceMenu category={"Facial"}/>
            </div>
        </div>   
     </div>
    );
  }
  
  export default Facials;