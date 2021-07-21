import './App.css';
import React from "react"
import { Route } from "react-router-dom";
import Landing from './components/Landing/Landing';
import Countries from './components/Countries/Countries';
import Navbar from './components/NavBar/NavBar';
import CountryDetails from "./components/CountryDetails/CountryDetails"
import CreateActivity from './components/CreateActivity/CreateActivity';

function App() {
  return (
    <React.Fragment>
      <Route exact path="/" component={Landing} />
      <Route exact path="/home/countryDetail/:name" component={CountryDetails} />
      <Route exact path="/home/createActivity" component={CreateActivity} />
      <Route exact path="/home" component={Countries} />
    </React.Fragment>
  );
}

export default App;
