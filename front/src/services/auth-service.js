import axios from "axios";

const API_URL = `${process.env.REACT_APP_API_URL}api/auth`;

const signup = async (email, password, pseudo) => {
  return await axios
    .post(API_URL + "/signup", {
      email,
      password,
      pseudo
    })
    .then((res) => {
      return res.data;
    })
};

const login = (email, password) => {
  return axios
    .post(API_URL + "/login", {
      email,
      password,
    })
    .then((res) => {
        console.log(res);
      if (res) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    })
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
