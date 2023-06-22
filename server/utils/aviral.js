const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const BASE_URL = 'https://aviral.iiita.ac.in/api/';

const getAviralData = async (username, password) => {
  const data = await axios
    .post(BASE_URL + 'login/', { username: username?.toLowerCase(), password })
    .then((res) => {
      if (res.data['user_group']) {
        return {
          Authorization: res.data['jwt_token'],
          Session: process.env['AVIRAL_SESSION'],
        };
      }
    })
    .then((auth) => {
      return axios.get(BASE_URL + 'student/dashboard/', {
        headers: auth,
      });
    })
    .then((res) => {
      return {
        name:
          res.data['first_name'] +
          ' ' +
          res.data['middle_name'] +
          ' ' +
          res.data['last_name'],

        
        rollNumber: res.data['student_id'],
        program: res.data['program'],
        admissionYear: res.data['admission_year'],
      };
    })
    .catch((err) => console.log(err.message));
  return data;
};

const verifyAviralPassword = async (username, password) => {
  let res = await axios.post(BASE_URL + 'login/', {
    username: username?.toLowerCase(),
    password,
  });
  return res.data['user_group'] ? true : false;
};

module.exports = { getAviralData, verifyAviralPassword };
