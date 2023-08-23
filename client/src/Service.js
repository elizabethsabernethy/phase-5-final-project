import Popup from "reactjs-popup"

function Service({service}) {
    
    return (
     <div className="service-container">
        <h3>{service.name}</h3>
        <h5>Duration: {service.duration} min</h5>
        <h5>Price: ${service.price}</h5>
        <Popup trigger={<button className="button">Providers</button>} position="left center">
          <div className="service-pop-up">
            {service.service_providers.map((stylist)=> <h4 key={stylist}>{stylist}</h4>)}
          </div>
        </Popup>
     </div>
    );
  }
  
  export default Service;