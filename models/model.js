import Sequelize from "sequelize";

const sequ = new Sequelize("kri_kri", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default sequ;
