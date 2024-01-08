const router = require('express').Router();
const User = require("../models/user")

router.post('/login', async (req, res) => {
    try{
        const userData = await User.findOne({
            where: {
                email: req.body.email,
            }
        })
        if (!userData) {
            res.status(400).json({ message: "Incorrect email or password, please try again." });
            return;
        }
        const validPassword =  userData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({ message: "Incorrect email or password, please try again." });
            return;
        }
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;