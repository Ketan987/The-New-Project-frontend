// import dotenv from 'dotenv';
// dotenv.config();

export default {
    professionalURL: process.env.API_URL_PROFESSION ?? 'localhost:5000/api/professions',
    storiesURL: process.env.API_URL,
    pathURL: process.env.API_URL,
    usersURL: process.env.API_URL
};