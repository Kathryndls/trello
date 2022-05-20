import axios from "axios";

const BASE_URL = 'https://radiant-temple-07706.herokuapp.com/';

class Authorization {
    register(username, email, password) {
        return axios
          .post(BASE_URL + "auth/local/register", {
            username: username,
            email: email,
            password: password
          })
          .then((response) => {
            if (response.data.accessToken) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
      
            return response.data;
          });
    };

    login(identifier, password) {
        return axios
          .post(BASE_URL + "auth/local", {
            identifier: identifier,
            password: password
          })
          .then((response) => {
            if (response.data.jwt) {
              localStorage.setItem("user", JSON.stringify(response.data.jwt));
            }
      
            return response.data;
          });
    };

    logout() {
      localStorage.removeItem("user");
    };

    getCurrentUser() {
      return JSON.parse(localStorage.getItem("user"));
    };  
}

export default new Authorization();