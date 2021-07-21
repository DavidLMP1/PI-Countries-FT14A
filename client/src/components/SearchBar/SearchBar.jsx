import "./SearchBar.css"
import React, { useState } from "react";
import { getCountryByName } from "../../actions/actions";
import { useDispatch } from "react-redux";



const SearchBar = ()=>{

  const [search, setSearch]=useState("")
  // const [countries, setCountries]=useState([])
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(getCountryByName(search));
        
  }

  const handleChange = (e)=>{
    setSearch(e.target.value)
    dispatch(getCountryByName(e.target.value));    
  }
  
      return (
        <div className ="searchbar">
          <input type= "text" placeholder= "Country..." value={search} onChange={(e)=>handleChange(e)} />
          <button type="submit" className ="btnsearch" onClick={e=>handleClick(e)} >Search</button>
        </div>
      );
}
export default SearchBar;