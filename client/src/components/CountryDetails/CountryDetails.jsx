import React, { useEffect } from "react";
import "./CountryDetails.css";
import { getCountryByName } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";

const CountryDetails = () => {

  const dispatch = useDispatch();
  const { name: country } = useParams();

  useEffect(() => {
    dispatch(getCountryByName(country));
  }, []);

  const countries = useSelector((state) => state.filterCountries);

  if(!countries){
    return (<h1>Please wait</h1>)
  }

  // for(let i = 0 ; i < )

  console.log("hola tengo countries", countries)

  return (

    <div className="countrydetails">
      <h2>
        <NavLink to="/home">
          <button className="btnhome">
            HOME
          </button>
        </NavLink>
      </h2>
      
      <div className="card">
        <h1>{countries[0].name}</h1>
        <img className="flag" src={countries[0].flag} alt="Not Found" />
        <h4>ID: {countries[0].id}</h4>
        <h4>CONTINENT: {countries[0].region}</h4>
        <h4>SUBREGION: {countries[0].subregion}</h4>
        <h4>CAPITAL: {countries[0].capital}</h4>
        <h4>POPULATION: {(new Intl.NumberFormat("de-DE").format(countries[0].population))}</h4>
        <h4>AREA: {countries[0].area} km²</h4>
        {console.log("dentro", countries)}
        <h4>ACTIVITY:</h4>
        {countries[0].activities?.map(e =>
          <h4>{e.name}</h4>)}

        {/* <h4>ACTIVITY:{country.activity}</h4> */}

      </div>
    </div>
      );

  
}

export default CountryDetails;