import { useContext, useState } from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";
import { ServiceContext } from "./context/ServiceContext";
import { StylistContext } from "./context/StylistContext";

function EditAppointment({appointment}){

    const {user, setUser} = useContext(UserContext);
    const history = useHistory();

    const {services} = useContext(ServiceContext);
    const {stylists} = useContext(StylistContext);

    const defaultStylist = stylists.filter((stylist)=> stylist.id === appointment.stylist_id)[0]
    const defaultService = defaultStylist.services.filter((service)=> service.id === appointment.service_id)
    const defaultCategory = defaultStylist.job_title
   
    const [time, setTime] = useState(appointment.form_time)
    const [date, setDate] = useState(appointment.form_date)
    const [stylist, setStylist] = useState(defaultStylist)
    const [service, setService] = useState(defaultService)
    const [category, setCategory] = useState(defaultCategory)
   
    const filteredStylists = stylists.filter((stylist)=> stylist.job_title === category)
   
    function selectStylist(e){
       const selected = stylists.filter((stylist)=> (stylist.id).toString() === (e.target.value))
       selected.map((stylist)=> setStylist(stylist))
    }
   
    function selectCategory(e){
       setCategory(e.target.value)
    }
   
    function selectService(e){
       const selected = services.filter((service)=> (service.id).toString() === (e.target.value))
       selected.map((service)=> setService(service))
    }
   
    function selectDate(value){
       setDate(value)
    }
   
    function selectTime(value){
       setTime(value)
    }

    function onEditAppointment(editedAppointment){
        const updatedAppointments = user.appointments.map((appointment) => {
          if (appointment.id === editedAppointment.id) {
            return editedAppointment;
          } else {
            return appointment;
          }
        });
        const updatedUser = {
          id: user.id,
          name: user.name,
          username: user.username,
          appointments: [...updatedAppointments],
        }
        setUser(updatedUser)
      }
  
    function handleSave(e) {
      e.preventDefault();
      fetch(`/profile/${user.id}/appointments/${appointment.id}/edit`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            date: date,
            service_id: service.id,
            stylist_id: stylist.id,
            time: time
        }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => onEditAppointment(data));
          history.push(`/profile`)
        } else {
          resp.json().then((err) => alert(err.error));
        }
      });
    }

    return(
        <div>
          {user.id? 
          <div>
          {appointment.id ? 
          <div>
          <h1 className="name-container">Edit Appointment</h1>
            <form id="edit-form" onSubmit={handleSave}>
              <p>If you would like to change your appointment type, please make a new appointment with the correct department.</p>
            <div>
                <label htmlFor="category">Category</label>
                    <select disabled={true} id="category" name="category" defaultValue={category} onChange={(e) => selectCategory(e)}>
                        <option>---</option>
                        <option value={"Hairdresser"}>Hair</option>
                        <option value={"Nail Technician"}>Nails</option>
                        <option value={"Aesthetician"}>Facial</option>
                        <option value={"Massage Therapist"}>Massage</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="stylist">Provider</label>
                    <select id="stylist" name="stylist" defaultValue={defaultStylist.id} onChange={(e) => selectStylist(e)}>
                    <option>---</option>
                        {filteredStylists.map((stylist)=>{
                            return <option key={stylist.id} value={stylist.id}>{stylist.name}</option>
                        })}
                    </select>
                </div>
                <div>            
                    <label htmlFor="service">Service</label>
                    <select id="service" name="service" defaultValue={appointment.service_id} onChange={(e) => selectService(e)}>
                    <option>---</option>
                        {stylist.services.map((service)=>{
                            return <option key={service.id} value={service.id}>{service.name}</option>
                        })}
                    </select>
                </div>
                <div>
                    <DatePicker onChange={(value)=> selectDate(value)} value={date} required={true}/>
                </div>
                <div>
                    <TimePicker onChange={(value)=> selectTime(value)} value={time} disableClock={true} required={true} minTime="8:00" maxTime="20:00"/>
                </div>
                <button id="book-button" type="submit">{"Update Appointment"}</button>
            </form>
            </div> : history.push('/profile')}
            </div> :
            <div>
              <h2>Please login to edit your appointment</h2>
            </div>}
        </div>
    )
}

export default EditAppointment;