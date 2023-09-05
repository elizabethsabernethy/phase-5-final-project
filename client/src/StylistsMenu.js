import { useContext } from "react";
import Stylist from "./Stylist";
import { StylistContext } from "./context/StylistContext";

function StylistMenu({job}) {

    const {stylists} = useContext(StylistContext);
    const filteredStylists = stylists.filter((stylist)=> stylist.job_title === job)
    
    return (
     <div className="parent-container">
        <h1 className="menu-header">Providers</h1>
        {filteredStylists.map((stylist) => {
            return <Stylist key={stylist.id} stylist={stylist}/>
        })}
     </div>
    );
  }
  
  export default StylistMenu;