import React, { useEffect, useState, componentDidMount } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../actions/post.actions';
import { getUsers } from '../actions/users.actions';
import { isEmpty } from "../Utils/Utils";
import Card from './Post/Card';

const Thread = () => {
    const [loadPost, setLoadPost] = useState(true);

    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);
    const posts = useSelector((state) => state.postReducer);

    const reloadPage = () => {
        document.getElementById("submit").click();
    }

    const loadPage = () => {
        dispatch(getPosts());
    }
    
    useEffect(() => {

        // *** NÉCESSAIRE D'APPELER AUSSI GETUSERS() POUR REACTUALISER L'IMG DE PROFIL DANS LE FIL DE MESSAGES APRES UN CHANGEMENT D'IMAGE DANS LE PROFIL 
        dispatch(getUsers());
        dispatch(getPosts());

        console.log("useEffect !!");
        console.log(loadPost);
        if (loadPost) {
            setLoadPost(false);
        }
    }, [loadPost, dispatch])

    return (
       <div className="thread-container">            
            <ul>
                {!isEmpty(posts[0]) &&
                    posts.map((post) => {
                        return <Card post={post} key={post._id} />;
                    })}
            </ul>
        </div>
    );
};

export default Thread;