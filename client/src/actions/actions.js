import axios from 'axios'


export function getCountries(){
    return async function(dispatch){
        const country = await axios.get('http://localhost:3001/countries')
        dispatch({
            type: 'GET_COUNTRIES',
            payload: country.data
        })
    }
}


export function getCountryByName(name){
    return async function(dispatch){
        const country = await axios.get(`http://localhost:3001/countries/?name=${name}`)
        dispatch({
            type: 'GET_COUNTRY_BY_NAME',
            payload: country.data
        })
    }
}


export function orderByName(type){
    return async function(dispatch){        
        dispatch({
            type: 'ORDER_BY_NAME',
            payload: type
        })
    }
}

export function orderByPopulation(type){
    return async function(dispatch){        
        dispatch({
            type: 'ORDER_BY_POPULATION',
            payload: type
        })
    }
}

export function orderByContinent(type){
    return async function(dispatch){        
        dispatch({
            type: 'ORDER_BY_CONTINENT',
            payload: type
        })
    }
}

export function orderByActivity(type){
    return async function(dispatch){        
        dispatch({
            type: 'ORDER_BY_ACTIVITY',
            payload: type
        })
    }
}

export function getActividades(){
    return async function (dispatch) {
        try{
            const request = await axios(`http://localhost:3001/search`)
            dispatch({
                type: "GET_ACTIVIDADES", 
                payload: request.data
            })
        }catch(err){
            console.log(err)
        }
    }
}

export function orderByArea(type){
    return async function(dispatch){        
        dispatch({
            type: 'ORDER_BY_AREA',
            payload: type
        })
    }
}

// export function newActivity(){
//     return async function(dispatch){
//         const search = await axios.get("http://localhost:3001/search")
//         dispatch({
//             type: "NEW_ACTIVITY",
//             payload: search
//         })
//     }
// }




// export function orderByname(){
//     return state.sort((a,b)=>{
//         if(a.name < b.name){
//           return -1;
//         }
//         if(a.name > b.name){
//           return 1;
//         }
//         return 0;
//         }
//       )
// }

// export function validate(input){

//     let errors = {};
//     if (!input.name) {
//         errors.name = 'Name is required';
//         /*}  else if (!/\d{1,2}-\d{1,2}/g.test(input.name)) {
//           errors.name = 'Name is invalid'; */
//     }
//     if (!input.difficulty) {
//         errors.difficulty = 'Difficulty is required';
//         /* } else if (!/\d{1,2}-\d{1,2}/g.test(input.height)){
//           errors.height = 'Height is invalid'; */
//     }

//     if (!input.duration) {
//         errors.duration = 'Duration is required';
//         /* } else if (!/\d{1,2}-\d{1,2}/g.test(input.weight)){
//           errors.weight = 'Weight is invalid'; */
//     }
//     if (!input.season) {
//         errors.season = 'Season is required';
//         /* } else if (!/\d{1,2}-\d{1,2}/g.test(input.life_span)){
//           errors.life_span = 'Life span is invalid'; */
//     }
//     // if (!input.temperaments) {
//     //   errors.temperaments = 'Temperament is required';
//     // /* } else if (!/\d{1,2}-\d{1,2}/g.test(input.temperaments)){
//     //   errors.temperaments = 'Temperament is invalid'; */
//     // }
//     // if (!input.image) {
//     //   errors.image = 'Image is required';
//     // /* } else if (!/\d{1,2}-\d{1,2}/g.test(input.temperaments)){
//     //   errors.temperaments = 'Temperament is invalid'; */
//     // }
//     return errors;

// };