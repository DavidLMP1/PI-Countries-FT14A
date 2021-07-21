const {Router} = require("express");
require("dotenv").config();
const router = Router();
const { Activity } = require("../db")

// router.get("/", async(res,sen)=>{
//     try {
//         const acty = await Activity.findAll()
//         res.send(acty)        
//     } catch (error) {
//         return res.json(error.message)
//     }
// })
router.get("/", async (req, res, next) => {
    try{
        const db = await Activity.findAll()
        return res.send(db).status(200)
    } catch (e) {
        return res.json(e.message).status(409)
    }
})

module.exports=router