import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Facials() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Facials ~</h1>
        <StylistMenu job={"Aesthetician"}/>
        <ServiceMenu category={"Facial"}/>
     </div>
    );
  }
  
  export default Facials;