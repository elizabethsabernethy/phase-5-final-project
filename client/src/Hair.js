import StylistMenu from "./StylistsMenu";

function Hair() {
    
    return (
     <div className="parent-container">
        <h1 className="page-header">~ Hair ~</h1>
        <StylistMenu job={"Hairdresser"}/>
     </div>
    );
  }
  
  export default Hair;