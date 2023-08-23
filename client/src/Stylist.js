import Popup from "reactjs-popup";

function Stylist({stylist}) {

    return (
     <div className="stylist-container">
        <h3>{stylist.name}</h3>
        <h5>{stylist.job_title}</h5>
        <Popup trigger={<button className="button">Services Offered</button>} position="right center">
          <div className="stylist-pop-up">
            {stylist.provider_services.map((service)=> <h4 key={service}>{service}</h4>)}
          </div>
        </Popup>
     </div>
    );
  }
  
  export default Stylist;