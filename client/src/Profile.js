import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ServiceContext } from "./context/ServiceContext";
import { StylistContext } from "./context/StylistContext";

function Profile(){

    const {user, handleLogout} = useContext(UserContext);
    const {services} = useContext(ServiceContext);
    const {stylists} = useContext(StylistContext);
    const history = useHistory();

    return(
            <div id="user-container">
                {user.id? 
                    <div className="profile">
                        <h2>Hi, {user.name}</h2>
                        <h3>Upcoming Appointments</h3>
                        <div id="appointments">
                            {user.appointments.map((appointment)=>{
                                return <div id="appointment" key={appointment.id}>
                                    <h4>{((services.filter((service) => service.id === appointment.service_id))[0].name)} with {((stylists.filter((stylist) => stylist.id === appointment.stylist_id))[0].name)}</h4>
                                    <h4>For {appointment.date_format} at {appointment.time_format}</h4>
                                </div>
                            })}
                         </div>
                        <button onClick={handleLogout} className="form-button">Logout</button>
                    </div> : 
                    <div>
                        {history.push('/')}
                    </div>}
            </div>
    )
}

export default Profile;