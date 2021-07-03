import React from "react";
import "./App.css";
//Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
//reac router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Views
import Pc from "./views/Pc/Pc";
import Accessories from "./views/Accessories/Accessories";
import Lcd from "./views/Lcd/Lcd";
import Notebooks from "./views/Notebooks/Notebooks";
import VideoCard from "./views/VideoCard/VideoCard";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/pc" component={Pc} />
            <Route path="/notebooks" component={Notebooks} />
            <Route path="/lcd" component={Lcd} />
            <Route path="/accessories" component={Accessories} />
            <Route path="/videocard" component={VideoCard} />
            <Route path="/detail/:id" component = {ItemDetailContainer} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
