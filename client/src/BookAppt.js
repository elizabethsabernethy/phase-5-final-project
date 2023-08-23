import { useContext} from "react";
import { UserContext } from "./context/UserContext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interaction from '@fullcalendar/interaction'

function BookAppt(){

 const {user} = useContext(UserContext);
 const history = useHistory();

  return (
      <div>
        {user.id? (
             <FullCalendar
             plugins={[ dayGridPlugin, timeGridPlugin, interaction ]}
             initialView="dayGridMonth"
             headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
           />
        ):(
            history.push('/login')
        )}
      </div>
  );
}

export default BookAppt;