import axios from "axios";

export const GET_USER = "GET_USER";
export const UPLOAD_PICTURE = "UPLOAD_PICTURE"
export const UPDATE_IMG = "UPDATE_IMG"
export const UPDATE_BIO = "UPDATE_BIO";

export const getUser = (uid) => {

    console.log(uid);

    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/auth/${uid}`)
            .then((res) => {
                console.log(res.data);
                dispatch({ type: GET_USER, payload: res.data });
            })
            .catch((err) => console.log(err));
    }
};

export const addUser = (data) => {

    console.log(data);

    return () => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/auth/`, data);
    };
};

export const updatePicture = (data, id) => {

    console.log("updatePicture()");

    return () => {

        console.log(data);
        console.log(id);

        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/auth/` + id, data
        })
        .catch((err) => console.log(err));
    };
};

export const updateBio = (userId, bio) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/auth/` + userId,
            data: { bio },
        })
        .then((res) => {
            dispatch({ type: UPDATE_BIO, payload: bio });
        })
        .catch((err) => console.log(err));
    };
};