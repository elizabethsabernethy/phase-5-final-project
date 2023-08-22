import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Massage() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Massage ~</h1>
        <div className="menu-container">
            <div className="stylist-menu">
                <StylistMenu job={"Massage Therapist"}/>
            </div>
            <div className="service-menu">
                <ServiceMenu category={"Massage"}/>
            </div>
        </div>   
     </div>
    );
  }
  
  export default Massage;