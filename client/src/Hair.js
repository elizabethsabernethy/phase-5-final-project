import ServiceMenu from "./ServiceMenu";
import StylistMenu from "./StylistsMenu";

function Hair() {

    return (
     <div className="parent-container">
        <h1 className="page-header">~ Hair ~</h1>
        <div className="menu-container">
            <div className="stylist-menu">
               <StylistMenu job={"Hairdresser"}/> 
            </div>
            <div className="service-menu">
                <ServiceMenu category={"Hair"}/>
            </div>
        </div>
        
     </div>
    );
  }
  
  export default Hair;