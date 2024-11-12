import { config } from "dotenv";
config();
//configuracion de las variables de entorno
export const PORT = process.env.PORT || 4005;
export const DB_HOST = process.env.DB_HOST || "bysftbxoisawsckgmc5d-mysql.services.clever-cloud.com";
export const DB_USER = process.env.DB_USER || "uviizbdb1gcuacdj";
export const DB_PASSWORD = process.env.DB_PASSWORD || "bDVMyBElbhyIrTJjiDZg";
export const DB_DATABASE = process.env.DB_DATABASE || "bysftbxoisawsckgmc5d";
export const DB_PORT = process.env.DB_PORT || 3306;
