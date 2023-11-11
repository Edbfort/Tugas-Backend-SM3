import Sequelize from "sequelize";
import sequ from "./model.js";

const KriUser = sequ.define(
  "KriUser",
  {
    name: { type: Sequelize.STRING, allowNull: false },
    password: { type: Sequelize.STRING, allowNull: false },
    admin: { type: Sequelize.TINYINT, allowNull: false },
    active: { type: Sequelize.TINYINT, allowNull: false },
  },
  {
    freezeTableName: true,
  }
);

export default KriUser;