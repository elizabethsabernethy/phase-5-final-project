import { useContext, useState} from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ServiceContext } from "./context/ServiceContext";
import { StylistContext } from "./context/StylistContext";
import Logout from "./Logout";

function Profile({onEditAppointment}){

    const {user, setUser, handleLogout} = useContext(UserContext);
    const {services} = useContext(ServiceContext);
    const {stylists} = useContext(StylistContext);
    const history = useHistory();

    const[hideDelete, setHideDelete] = useState(false)

    function handleEditProfile(){
        history.push(`profile/${user.id}/edit`)
    }

    function editAppointment(appointment){
        onEditAppointment(appointment)
        history.push(`profile/${user.id}/appointments/${appointment.id}/edit`)
    }

    function deleteAppointment(appointment){
        fetch(`profile/${user.id}/appointments/${appointment.id}`, {
            method: "DELETE",
            })
              .then(() => onDeleteAppointment(appointment));
    }

    function onDeleteAppointment(deletedAppointment){
        const updatedAppointments= user.appointments.filter((appointment) => appointment.id !== deletedAppointment.id);
        const updatedUser = {
          id: user.id,
          name: user.name,
          username: user.username,
          appointments: [...updatedAppointments]
        }
        setUser(updatedUser)
    }

    function deleteAccount(){
        fetch(`/profile/${user.id}`, {
            method: "DELETE",
            })
              .then(() => {
                setUser({})
                history.push("/logout")
            });
    }

    function deleteAlert(){
        alert("Deleting your account is non-reversible. If you would like to continue please double click 'Continue Account Deletion' button...")
        setHideDelete(!hideDelete)
    }

    return(
            <div id="user-container">
                {user.id? 
                    <div className="profile">
                        <h2 className="name-container">Hi, {user.name}</h2>
                        <button onClick={handleEditProfile} className="form-button">Edit Profile</button>
                        <button onClick={handleLogout} className="form-button">Logout</button>
                        <h3>{user.appointments.length > 0? 'Upcoming Appointments' : null}</h3>
                        <div id="appointments">
                            {user.appointments.map((appointment)=>{
                                return <div id="appointment" key={appointment.id}>
                                    <h4>{((services.filter((service) => service.id === appointment.service_id))[0].name)} with {((stylists.filter((stylist) => stylist.id === appointment.stylist_id))[0].name)}</h4>
                                    <h4>For {appointment.date_format} at {appointment.time_format}</h4>
                                    <button className="app-button" onClick={()=> editAppointment(appointment)}> Edit Appointment</button>
                                    <button className="app-button" onClick={()=> deleteAppointment(appointment)}> Delete Appointment</button>
                                </div>
                            })}
                         </div>
                         <button hidden={hideDelete} onClick={deleteAlert} className="form-button">Delete Account</button>
                         <button hidden={!hideDelete} onDoubleClick={deleteAccount} className="form-button">Continue Account Deletion</button>
                    </div> : 
                    <div>
                        <Logout/>
                    </div>}
            </div>
    )
}

export default Profile;