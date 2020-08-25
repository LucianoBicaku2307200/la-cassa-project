import React from 'react';
import './css/App.css';
import { HomePage, MenuPage, PageNotFound, ShowAlldrinks } from './Pages';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/la-cassa-project/" component={HomePage}></Route>
        <Route exact path="/la-cassa-project/menu" component={MenuPage}></Route>
        <Route exact path="/la-cassa-project/deladd" component={ShowAlldrinks}></Route>
        <Route >
          <PageNotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

