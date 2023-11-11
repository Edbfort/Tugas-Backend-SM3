import Sequelize from "sequelize";
import sequ from "./model.js";

const KriThre = sequ.define(
  "KriThre",
  {
    name: { type: Sequelize.STRING, allowNull: false },
    code: { type: Sequelize.STRING, allowNull: false },
    title: { type: Sequelize.STRING, allowNull: false },
    kategori: { type: Sequelize.STRING, allowNull: false },
    thread: { type: Sequelize.STRING },
  },
  {
    freezeTableName: true,
  }
);

export default KriThre;
