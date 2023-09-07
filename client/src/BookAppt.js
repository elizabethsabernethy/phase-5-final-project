import { useContext, useState} from "react";
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

function BookAppt(){
 const {services} = useContext(ServiceContext);
 const {stylists} = useContext(StylistContext);

 const [time, setTime] = useState('8:00')
 const [date, setDate] = useState(new Date())
 const [stylist, setStylist] = useState(stylists[0])
 const [service, setService] = useState(services[0])
 const [category, setCategory] = useState('')

 const [hideStylist, setHideStylist] = useState(true)
 const [hideService, setHideService] = useState(true)
 const [hideDate, setHideDate] = useState(true)
 const [hideTime, setHideTime] = useState(true)
 const [hideSubmit, setHideSubmit] = useState(true)

 const filteredStylists = stylists.filter((stylist)=> stylist.job_title === category)

 const {user, setUser} = useContext(UserContext);
 const history = useHistory();

 function selectStylist(e){
    const selected = stylists.filter((stylist)=> (stylist.id).toString() === (e.target.value))
    selected.map((stylist)=> setStylist(stylist))
    setHideService(false)
 }

 function selectCategory(e){
    setCategory(e.target.value)
    setHideStylist(false)
 }

 function selectService(e){
    const selected = services.filter((service)=> (service.id).toString() === (e.target.value))
    selected.map((service)=> setService(service))
    setHideDate(false)
 }

 function selectDate(value){
    setDate(value)
    setHideTime(false)
 }

 function selectTime(value){
    setTime(value)
    setHideSubmit(false)
 }

function addAppointment(appointment){
    const updatedAppointments = [...user.appointments, appointment]
    const updatedUser = {
      id: user.id,
      name: user.name,
      username: user.username,
      appointments: updatedAppointments,
    }
    setUser(updatedUser)
  }

 function handleSubmit(e){
    e.preventDefault();
    fetch(`/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ stylist_id: stylist.id, client_id: user.id, service_id: service.id, date, time }),
      }).then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => addAppointment(data));
          alert("Appointment has been made!")
          history.push("/profile")
        } else {
          resp.json().then((err) => ((err.error.map((error)=> alert(error)))));
        }
      });
 }

  return (
      <div>
        {user.id? (
          <div id="booking-div">
          <h2>Book Appointment</h2>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div>
                <label htmlFor="category">Category</label>
                    <select id="category" name="category" defaultValue={category} onChange={(e) => selectCategory(e)}>
                        <option>---</option>
                        <option value={"Hairdresser"}>Hair</option>
                        <option value={"Nail Technician"}>Nails</option>
                        <option value={"Aesthetician"}>Facial</option>
                        <option value={"Massage Therapist"}>Massage</option>
                    </select>
                </div>
                <div hidden={hideStylist}>
                    <label htmlFor="stylist">Provider</label>
                    <select id="stylist" name="stylist" defaultValue={stylist} onChange={(e) => selectStylist(e)}>
                    <option>---</option>
                        {filteredStylists.map((stylist)=>{
                            return <option key={stylist.id} value={stylist.id}>{stylist.name}</option>
                        })}
                    </select>
                </div>
                <div hidden={hideService}>            
                    <label htmlFor="service">Service</label>
                    <select id="service" name="service" defaultValue={service} onChange={(e) => selectService(e)}>
                    <option>---</option>
                        {stylist.services.map((service)=>{
                            return <option key={service.id} value={service.id}>{service.name}</option>
                        })}
                    </select>
                </div>
                <div hidden={hideDate}>
                    <DatePicker onChange={(value)=> selectDate(value)} value={date} required={true} minDate={new Date()}/>
                </div>
                <div hidden={hideTime}>
                    <TimePicker onChange={(value)=> selectTime(value)} value={time} disableClock={true} required={true} minTime="8:00" maxTime="20:00"/>
                </div>
                <button id="book-button" hidden={hideSubmit} type="submit">{"Book Appointment"}</button>
            </form>
            </div>
        ):(
            history.push('/login')
        )}
      </div>
  );
}

export default BookAppt;