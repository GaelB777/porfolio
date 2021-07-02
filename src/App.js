import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./view/Home";
import "./css/App.css";



function App() {
  return (
<BrowserRouter>
    <div className= "navbar">
        <ul className= "rowMenu">
            <li>
                <a href="">A propos</a>
            </li>
            <li>
                <a href="#encrage">Projet</a>
            </li>
        </ul>
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
