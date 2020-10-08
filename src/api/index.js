import axios from 'axios';

import { BASE_URL,DEFAULT_USER_QUANTITY } from './config';


const usersAPI = {
  getUsers: async () => {
    return await axios
      .get(`${BASE_URL}/api/?results=${DEFAULT_USER_QUANTITY}`,{ headers:{
        'Access-Control-Allow-Origin': '*',
      }})
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response;
      });
  }
};

export default usersAPI;