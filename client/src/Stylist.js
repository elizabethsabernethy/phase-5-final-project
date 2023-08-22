function Stylist({stylist}) {
    
    return (
     <div className="stylist-container">
        <h3>{stylist.name}</h3>
        <h5>{stylist.job_title}</h5>
        <button className="services-button">Services Offered</button>
     </div>
    );
  }
  
  export default Stylist;