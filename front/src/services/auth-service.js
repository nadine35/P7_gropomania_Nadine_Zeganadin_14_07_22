import axios from "axios";

// const BASE_URL = `https://eu-west-2.aws.data.mongodb-api.com/app/data-ezjau/endpoint`;  // ok: API mongo en ligne
// const BASE_URL = `127.0.0.1:27017/groupomaniaTest`;

const API_URL = `${process.env.REACT_APP_API_URL}api/auth`;

const signup = async (email, password, pseudo) => {
  return await axios
    .post(API_URL + "/signup?retryWrites=true&w=majority", {
      email,
      password,
      pseudo
    })
    .then((res) => {
      console.log(res.data);
      return res.data;
    })
    .catch((err) => console.log(err));
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login?retryWrites=true&w=majority", {
      email,
      password
    })
    .then((res) => {
        console.log(res.data);
      if (res) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    })
    .catch((err) => console.log(err));
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  signup,
  login,
  logout,
};

export default authService;
