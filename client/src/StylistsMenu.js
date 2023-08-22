import { useEffect, useState } from "react";
import Stylist from "./Stylist";

function StylistMenu({job}) {

    const [stylists, setStylists] = useState([])

    useEffect(()=>{
        fetch('/stylists')
        .then((resp) => resp.json())
        .then((stylists) => setStylists(stylists))
    },[])

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