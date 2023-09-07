import { useContext} from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ServiceContext } from "./context/ServiceContext";
import { StylistContext } from "./context/StylistContext";

function Profile({onEditAppointment}){

    const {user, handleLogout} = useContext(UserContext);
    const {services} = useContext(ServiceContext);
    const {stylists} = useContext(StylistContext);
    const history = useHistory();

    function handleEdit(){
        console.log("gonna edit")
    }

    function editAppointment(appointment){
        {console.log(appointment)}
        onEditAppointment(appointment)
        history.push(`/profile/${user.id}/appointments/${appointment.id}/edit`)
    }

    function deleteAppointment(){
        console.log("delete appointment")
    }

    return(
            <div id="user-container">
                {user.id? 
                    <div className="profile">
                        <h2>Hi, {user.name}</h2>
                        <button onClick={handleEdit} className="form-button">Edit Profile</button>
                        <button onClick={handleLogout} className="form-button">Logout</button>
                        <h3>Upcoming Appointments</h3>
                        <div id="appointments">
                            {user.appointments.map((appointment)=>{
                                return <div id="appointment" key={appointment.id}>
                                    <h4>{((services.filter((service) => service.id === appointment.service_id))[0].name)} with {((stylists.filter((stylist) => stylist.id === appointment.stylist_id))[0].name)}</h4>
                                    <h4>For {appointment.date_format} at {appointment.time_format}</h4>
                                    <button className="app-button" onClick={()=> editAppointment(appointment)}> Edit Appointment</button>
                                    <button className="app-button" onClick={deleteAppointment}> Delete Appointment</button>
                                </div>
                            })}
                         </div>
                    </div> : 
                    <div>
                        {history.push('/')}
                    </div>}
            </div>
    )
}

export default Profile;