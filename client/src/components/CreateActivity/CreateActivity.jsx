import React, { Fragment, useEffect, useState } from "react";
import "./CreateActivity.css";
import { NavLink } from "react-router-dom";
import axios from "axios"
// import { validate } from "../../actions/actions";
import { getCountries } from "../../actions/actions";
import { useDispatch, useSelector } from "react-redux";

const CreateActivity = () => {

    const dispatch = useDispatch();

    const [errors, setErrors] = useState([])

    const countries = useSelector((state) => state.countries) || [];

    const [activity, setActivity] = useState({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
        
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setActivity({
            ...activity,            
            [e.target.name]: e.target.value
            
          
        })
        
    }

    const handleInputCountries = (e) => {        
        setActivity({
            ...activity,            
            [e.target.name]:             
            [...activity.countries,
                e.target.value]
        })
        
    }

    const sendData = (e) => {
        e.preventDefault();
        console.log(activity.name + " " + activity.duration)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!errors.name && !errors.difficulty && !errors.duration && !errors.season) {
            await axios.post("http://localhost:3001/activity", activity);
            setActivity({
                name: "",
                difficulty: "",
                duration: "",
                season: "",
                countries: []

            })
            alert("Activity has been created succesfully")
        } else {
            alert("Something wrong, please try again")
        }
    }

    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const act = useSelector((state=>state.actividades))

    function getActivities(arr) {
        let names = [];
        countries?.forEach((t) => {
          arr.forEach((id) => {
            if (id === t.id) {
              names.push(t.name);
            }
          });
        });
        return names;
      }

    

    return (
        <Fragment>
            <div className="concreate">
                <h1>
                    <NavLink to="/home">
                        <button className="btnhome">
                            HOME
                        </button>
                    </NavLink>
                   <h1 className="title">Create Activity</h1>
                </h1>
                <form onSubmit={sendData} className="form">

                    <input placeholder="Name..." type="text" name="name" onChange={handleInputChange}></input>

                    <input placeholder="Difficulty..." type="number" name="difficulty" onChange={handleInputChange}></input>

                    <input placeholder="Duration..." type="number" name="duration" onChange={handleInputChange}></input>

                    <select name="season" onChange={handleInputChange}>
                        <option disabled>Season</option>
                        <option>Summer</option>
                        <option>Winter</option>
                        <option>Spring</option>
                        <option>Autumn</option>
                    </select>

                    <select onChange={handleInputCountries} name="countries" multiple>
                        <option disabled>
                            country
                        </option>
                        {countries.map((country) => {
                            return (
                                <option value={country.id}>
                                   {country.name}
                                </option>
                            )
                        })}
                    </select>
                    <div >
                    {
                        activity.countries?.map(e=>(
                            <p className="paisessel" id={e}>
                                {getActivities([e])}
                            </p>
                        ))
                    }
                    </div>                    
                    <div>
                        <button type="submit" onClick={handleSubmit}>Send</button>
                    </div>
                </form>
            </div>
        </Fragment>

    )

}

export default CreateActivity
