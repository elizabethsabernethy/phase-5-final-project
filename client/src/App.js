import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Hair from "./Hair";
import Nails from "./Nails";
import Facials from "./Facials";
import Massage from "./Massage";
import BookAppt from "./BookAppt";
import LoginOrSignupPage from "./LoginOrSignup";
import Profile from "./Profile";
import EditAppointment from "./EditAppointment";
import { useState } from "react";

function App() {

  const[appointment, setAppointment] = useState({})

  function onEditAppointment(appointment){
    setAppointment(appointment)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <div id="ruby-spa-header">
          <img id="ruby-icon" alt="ruby icon" src="https://clipart-library.com/image_gallery2/Ruby-Stone-Free-PNG-Image.png"
            width="100px"
            height="50px"></img>
        </div>
        <NavBar/>
        <Switch>
        <Route path="/profile">
            <Profile onEditAppointment={onEditAppointment}/>
          </Route>
        <Route path="/profile/:id/appointments/:id/edit">
            <EditAppointment appointment={appointment}/>
        </Route>
        <Route path="/login">
            <LoginOrSignupPage/>
          </Route>
        <Route path="/book">
            <BookAppt/>
          </Route>
        <Route path="/facials">
            <Facials/>
          </Route>
        <Route path="/massage">
            <Massage/>
          </Route>
        <Route path="/nails">
            <Nails/>
          </Route>
        <Route path="/hair">
            <Hair/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
