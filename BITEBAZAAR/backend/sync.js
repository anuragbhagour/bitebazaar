const sequelize = require('./db/database');
const User = require('./models/User');

sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synced');
    process.exit();
  })
  .catch(err => console.error('Error syncing database:', err));
