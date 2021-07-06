const {Router} = require("express");

const router = Router();

router.get("/", (req , res)=>{
    res.send("Hello I am a Activity");
});

module.exports = router;