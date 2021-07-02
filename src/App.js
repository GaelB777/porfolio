import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./view/Home";
import "./css/App.css";



function App() {
  return (
<BrowserRouter>
    <div className= "navbar">
   
    </div>


    <Switch>
        <Route exact path = "/">
            <Home />
        </Route>
    </Switch>

    <div className= "footerBotom">
        Footer
    </div>

</BrowserRouter>
  );
}

export default App;
