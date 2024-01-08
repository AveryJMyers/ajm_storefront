const express = require('express')
const app = express();
const routes = require('./routes');

app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use("/login", require("./routes/userRoutes"));
app.use(routes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});