import axios from "axios";

// Messages

export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const UPDATE_POST = "UPDATE_POST";
export const DELETE_POST = "DELETE_POST";

// Likes

export const LIKE_POST = "LIKE_POST";
export const UNLIKE_POST = "UNLIKE_POST";

// Commentaires

export const ADD_COMMENT = "ADD_COMMENT";
export const EDIT_COMMENT = "EDIT_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";

export const getPosts = () => {
    
    return (dispatch) => {

        console.log("getPosts()");

        return axios
            .get(`${process.env.REACT_APP_API_URL}api/post/`)
            .then((res) => {
                console.log(res);
                dispatch({ type: GET_POSTS, payload: res.data });
            })
            .catch((err) => console.log(err));
    };
};

export const addPost = (data) => {

    console.log(data);

    return () => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/post/`, data);      
    };
};

export const updatePost = (postId, data) => {

    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/post/${postId}`, data,
        })
        .then((res) => {
            console.log(data);

            dispatch({ type: UPDATE_POST,
                payload: {
                    postId,
                    data
                } 
            });
        })
        .catch((err) => console.log(err));
    };
};

export const deletePost = (postId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/post/${postId}`,
        })
            .then((res) => {
                dispatch({ type: DELETE_POST, payload: { postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const likePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/like-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: LIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};

export const unlikePost = (postId, userId) => {
    return (dispatch) => {
        return axios({
            method: "patch",
            url: `${process.env.REACT_APP_API_URL}api/post/unlike-post/` + postId,
            data: { id: userId },
        })
            .then((res) => {
                dispatch({ type: UNLIKE_POST, payload: { postId, userId } });
            })
            .catch((err) => console.log(err));
    };
};


export const addComment = (postId, commenterId, text, commenterPseudo) => {
    return (dispatch) => {
        return axios({
            method: "post",
            url: `${process.env.REACT_APP_API_URL}api/post/comment-post/${postId}`,
            data: { commenterId, text, commenterPseudo }
        })
            .then((res) => {
                dispatch({ type: ADD_COMMENT, payload: { postId } });
            })
            .catch((err) => console.log(err));
    };
};

export const editComment = (postId, commentId, text) => {
    return (dispatch) => {
        return axios({
            method: "put",
            url: `${process.env.REACT_APP_API_URL}api/post/update-comment/${postId}`,
            data: { commentId, text },
        })
            .then((res) => {
                dispatch({ type: EDIT_COMMENT, payload: { postId, commentId, text } });
            })
            .catch((err) => console.log(err));
    };
};

export const deleteComment = (postId, commentId) => {
    return (dispatch) => {
        return axios({
            method: "delete",
            url: `${process.env.REACT_APP_API_URL}api/post/delete-comment/${postId}`,
            data: { commentId },
        })
            .then((res) => {
                dispatch({ type: DELETE_COMMENT, payload: { postId, commentId } });
            })
            .catch((err) => console.log(err));
    };
};
