const { Router } = require("express");
require("dotenv").config();
const axios = require("axios");
const router = Router();
const { Country, Activity } = require("../db")
const { BASE_URL } = require("../../constants")
const { Sequelize, Op } = require("sequelize");

router.get("/", async (req, res, next) => {
  try {
    const { name } = req.query;
    if (!name) {
      // let database = await Country.findAll();

      // let api = await axios.get(`${BASE_URL}`);
      // const response = database.concat(api.data);
      // res.send(response);

      const database = await Country.findAll({include: {
        model: Activity,
        attributes: ["name", "id"],
        through: {
          attributes: []
        }
      }})     
      //Si no esta cargada se carga
      if (!database.length) {
        const api = await axios.get("https://restcountries.eu/rest/v2/all");
        
        api.data.forEach(async (country) => {
          await Country.create({
            name: country.name,
            id: country.alpha3Code,
            flag: country.flag,
            region: country.region,
            capital: country.capital,
            population: country.population,
            area: Math.round(country.area)
          })
        })
        var dataApi = await Country.findAll({include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }})  
        console.log(dataApi)   

        return res.send(dataApi)
      }else{
        console.log(database)
        return res.send(database)
    }

      // Promise.all([database, api])
      //           .then((response) => {
      //               console.log(countries2)
      //               const [dbResponse, apiResponse] = response;
      //               const countries2 = dbResponse.concat(apiResponse.data);
      //               res.send(countries2);
      //           });
      // const response = database.concat(api.data);
      // console.log(response)
      // res.send(response);


    } else {
      
      let database = await Country.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      });
      // let api = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
      console.log(database)
      return res.send(database);


    }
  } catch {
    res.send([]);
  }
});

// router.get("/:id", async (req, res, next) => {
//   const { id } = req.params;

//   if (!id.lenght) {
//      axios
//       .get(`https://restcountries.eu/rest/v2/alpha/${id}`)
//       .then((country) => res.send(country.data))
//       .catch((e) => next(e));
//   } else {
//     Country.findOne({ where: { id: id } })
//       .then((resp) => res.send(resp))
//       .catch((e) => next(e));
//   }
// });

router.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  if (id) {
    try {
      const paises = await axios.get(`${BASE_URL}`)
      const pais = paises.data.find(e => e.alpha3Code == id)
      res.json(pais)
    } catch (error) {
      next(error)
    }

  } else {
    try {
      Country.findAll({
        
        include: {
          model: Activity,
          attributes: ["name"],
          through: {
            attributes: []
          }
        }
      })
        .then(resp => res.send(resp))

    } catch (error) {
      next(error)
    }
  }
})

module.exports = router;