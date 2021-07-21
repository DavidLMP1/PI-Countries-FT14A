const {Router} = require("express");
require("dotenv").config();
const router = Router();
const { Activity } = require("../db")

// router.post("/", async (req , res, next)=>{
//     let { name, difficulty, duration, season, countries} = req.body
    
//     if(!req.body){
//         return res.status(400).json({msg: "Must be an tourist activity"})
//     }
//     try {
       
//         createNewActivity =  await Activity.create({ name, difficulty, duration, season})
//         // return res.send(newActivity) 
//         await createNewActivity.setCountries(countries)       
//     } catch (error) {
//         next(error)
//     }
// });


router.post('/', async (req, res) => {
    const activity = req.body
    console.log(req.body)
    // name, difficulty, duration, seasons, countries:[names]
    try {
        //Se crea la actividad sin los paises        
        let [act, created] = await Activity.findOrCreate({
            where: {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
            }
        });
        //Nos muestra si se creo o no
        console.log(created)
        //Seteo la relacion actividad-paises
        await act.setCountries(activity.countries)
        return res.json(act)
    } catch (error) {
        console.log(error)
    }
});

// const { name,
//     height,
//     weight,
//     life_span,
//     temperaments } = req.body;

// console.log(req.body);
// try {
//     let id = uuidv4()
//     createNewDog = await Dog.create({ name, height, weight, life_span, id })
//     await createNewDog.setTemperaments(temperaments)
// } catch (error) {
//     next(error)
// };

module.exports = router;