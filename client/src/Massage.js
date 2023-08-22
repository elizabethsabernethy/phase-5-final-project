import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Massage() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Massage ~</h1>
        <StylistMenu job={"Massage Therapist"}/>
        <ServiceMenu category={"Massage"}/>
     </div>
    );
  }
  
  export default Massage;