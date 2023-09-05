import { useContext, useState} from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import DatePicker from "react-date-picker";
import TimePicker from "react-time-picker";

function BookAppt(){
 const [time, setTime] = useState('8:00')
 const [date, setDate] = useState(new Date())
 const [provider, setProvider] = useState('')
 const [service, setService] = useState('')

 const {user} = useContext(UserContext);
 const history = useHistory();

 function selectDate(value){
  console.log(value)
 }

 function selectTime(value){
  console.log(value)
 }

  return (
      <div>
        {user.id? (
          <div>
          <h2>Book Appointment</h2>
            <form>
            <label htmlFor="provider">Provider</label>
                <input
                    type="text"
                    id="provider"
                    autoComplete="off"
                    value={provider}
                    onChange={(e) => setProvider(e.target.value)}
                />
                <label htmlFor="service">Service</label>
                <input
                    type="text"
                    id="service"
                    autoComplete="off"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                />
            </form>
            <DatePicker onChange={(value)=> selectDate(value)} value={date} required={true} minDate={new Date()}/>
            <TimePicker onChange={(value)=> selectTime(value)} value={time} disableClock={true} required={true}/>
            </div>
        ):(
            history.push('/login')
        )}
      </div>
  );
}

export default BookAppt;