const app = require('./index')
const sequelize = require('./config/db.js')
const PORT = process.env.PORT || 3001

app.listen(PORT, async () => {

    await sequelize.sync();
    console.log(`Server running on http://localhost:${PORT}`);
})