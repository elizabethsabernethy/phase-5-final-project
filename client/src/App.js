import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import StylistMenu from "./StylistsMenu";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <div id="ruby-spa-header">
          <img id="ruby-icon" src="https://clipart-library.com/image_gallery2/Ruby-Stone-Free-PNG-Image.png"
            width="100px"
            height="50px"></img>
        </div>
      
        <NavBar/>
        <Switch>
          <Route path="/">
            <Home/>
            <StylistMenu/>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
