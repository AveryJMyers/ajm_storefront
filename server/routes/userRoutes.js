const router = require('express').Router();
const User = require("../models/user")


router.get('/all', async (req, res) => {
    try {
        const usersData = await User.findAll({
            attributes: ['id', 'email', 'password' /* other attributes */],
        });

        const users = usersData.map(user => user.get({ plain: true }));

        res.json(users);
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


//create user



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
        res.status(200).json({ message: 'Login Succesful'})
    }catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})

module.exports = router;