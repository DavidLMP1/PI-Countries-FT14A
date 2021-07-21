const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRouter = require("./country");
const activityRouter = require("./activity");
const searchActivity = require("./searchActivity")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/countries", countryRouter)
router.use("/activity", activityRouter)
router.use("/search", searchActivity)


module.exports = router;
