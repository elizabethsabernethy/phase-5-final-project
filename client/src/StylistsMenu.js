import { useEffect, useState } from "react";
import Stylist from "./Stylist";

function StylistMenu() {

    const [stylists, setStylists] = useState([])

    useEffect(()=>{
        fetch('/stylists')
        .then((resp) => resp.json())
        .then((stylists) => setStylists(stylists))
    },[])
    
    return (
     <div className="parent-container">
        <h1>Stylist Menu</h1>
        {stylists.map((stylist) => {
            return <Stylist key={stylist.id} stylist={stylist}/>
        })}
     </div>
    );
  }
  
  export default StylistMenu;