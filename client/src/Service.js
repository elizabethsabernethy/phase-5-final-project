function Service({service}) {
    
    return (
     <div className="service-container">
        <h3>{service.name}</h3>
        <h5>Duration: {service.duration}</h5>
        <h5>Price: {service.price}</h5>
     </div>
    );
  }
  
  export default Service;