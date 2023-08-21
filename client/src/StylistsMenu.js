import { useEffect, useState } from "react";

function StylistMenu() {

    const [stylists, setStylists] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/stylists')
        .then((resp) => resp.json())
        .then((stylists) => setStylists(stylists))
    },[])
    
    return (
     <div className="parent-container">
        console.log({stylists})
     </div>
    );
  }
  
  export default StylistMenu;