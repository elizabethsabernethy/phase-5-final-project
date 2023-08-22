import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Hair from "./Hair";

function App() {

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
