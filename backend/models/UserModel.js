import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('mahasiswa', {
    nama: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    gender: DataTypes.STRING
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();