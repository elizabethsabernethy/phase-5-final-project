function Stylist({stylist}) {
    
    return (
     <div className="parent-container">
        <h1>{stylist.name}</h1>
        <h2>{stylist.job_title}</h2>
     </div>
    );
  }
  
  export default Stylist;