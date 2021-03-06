import path from 'path';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const data = dotenv.config({
  path: path.resolve(__dirname, `../environments/.env.${process.env.NODE_ENV}`),
});

console.log.apply(process.env.USER);

export const db = {
    user: data.parsed.USERS,
    host: data.parsed.HOST,
    database: data.parsed.DATABASE,
    password: data.parsed.PASSWORD,
};

export const api = {
    port: data.parsed.PORT,
};