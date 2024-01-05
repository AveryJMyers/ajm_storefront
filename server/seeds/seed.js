const sequelize = require("../config/connection");
const User = require("../models/user")

const userData = require("./user.json")

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    try {
        const users = []
        for (const userDataItem of userData){
            const user = await User.create(userDataItem);
            users.push(user)
        }
        console.log('users seeded')
    } catch (error) {
    console.error({error});
    } finally {
        await sequelize.close()
    }
}

seedDatabase()