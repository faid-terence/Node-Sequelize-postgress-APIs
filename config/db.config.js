module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Terence1340",
    DB: "demo",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  