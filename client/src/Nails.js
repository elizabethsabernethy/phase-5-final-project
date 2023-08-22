import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Nails() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Nails ~</h1>
        <StylistMenu job={"Nail Technician"}/>
        <ServiceMenu category={"Nails"}/>
     </div>
    );
  }
  
  export default Nails;