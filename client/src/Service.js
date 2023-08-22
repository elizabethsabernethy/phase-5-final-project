function Service({service}) {
    
    return (
     <div className="parent-container">
        <h1>{service.name}</h1>
        <h2>Duration: {service.duration}</h2>
        <h2>Price: {service.price}</h2>
     </div>
    );
  }
  
  export default Service;