import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./view/Home";
import "./css/App.css";



function App() {
  return (
<BrowserRouter>
    <div className= "navbar">
        <ul className= "rowMenu">

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
