import React from "react";
import "./App.css";
//Componentes
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//reac router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route path="/" exact component={ItemListContainer} />
            <Route
              path="/category/:categoryName"
              component={ItemListContainer}
            />
            <Route path="/item/:id" component={ItemDetailContainer} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
