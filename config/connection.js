const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize('mysql://eixqdxyyc83uwzm6:vjjzf6zeu6wdn3e8@grp6m5lz95d9exiz.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/uar42p958h2tqakc');
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}

module.exports = sequelize;
