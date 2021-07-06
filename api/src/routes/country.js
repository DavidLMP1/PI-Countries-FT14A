const {Router} = require("express");
require("dotenv").config();
const axios = require("axios");
const router = Router();
const { Country } = require("../db")
const { BASE_URL, COUNTRIES_NAME_URL } = require("../../constants")
const { Sequelize, Op } = require("sequelize");

router.get("/", async (req, res, next) => {
    try {
      const { name } = req.query;
      if (!name) {
        let database = await Country.findAll();
  
        let api = await axios.get(`${BASE_URL}`);
  
        Promise.all([database, api])
          .then((results) => {
            const [resDB, resAPI] = results;
            const response = resDB.concat(resAPI.data);
            res.send(response);
          })
          .catch((e) => next(e));
      } else {
        let database = await Country.findAll({
          where: {
            name: { [Op.iLike]: `%${name}%` },
          },
        });
        let api = await axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  
        Promise.all([database, api])
          .then((results) => {
            const [resDB, resAPI] = results;
            const response = resDB.concat(resAPI.data);
            res.send(response);
          })
          .catch((e) => next(e));
      }
    } catch {
      res.send("hubo un error");
    }
  });

module.exports = router;