import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPost, getPosts } from '../../actions/post.actions';
import { isEmpty, timestampParser } from '../../Utils/Utils';

const NewPostForm = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");
    const [postPicture, setPostPicture] = useState(null);
    const [file, setFile] = useState();
    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handlePost = async () => {
        if (message || postPicture) {
            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', message);
            if (file) data.append('file', file)

            await dispatch(addPost(data));
            dispatch(getPosts());
            cancelPost();

        } else {
            alert("Veuillez écrire un message");
        }
    };

    const handlePicture = (e) => {
        console.log(e.target.files);
        setPostPicture(URL.createObjectURL(e.target.files[0]));
        setFile(e.target.files[0]);
    };

    const cancelPost = () => {
        setMessage('');
        setPostPicture('');
        setFile('');
    };

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);
    }, [userData]);


    return (
        <div className='post-container'>
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <NavLink to="/profil">
                        <div className="user-info">
                            <img src={userData.picture} alt="user-img" />
                        </div>
                    </NavLink>
                    < div className='post-form'>
                        <textarea name="message" id="message" placeholder='Quoi de neuf ?'
                            onChange={(e) => setMessage(e.target.value)} value={message} />
                        {message || postPicture ? (
                            <li className='card-container'>
                                <div className='card-left'>
                                    <img src={userData.picture} alt="user-pic" />
                                </div>
                                <div className='card-right'>
                                    <div className='card-header'>
                                        <div className='pseudo'>
                                            <h3>{userData.pseudo}</h3>
                                        </div>
                                        <span>{timestampParser(Date.now())}</span>
                                    </div>
                                    <div className='content'>
                                        <p>{message}</p>
                                        <img src={postPicture} alt="" />
                                    </div>
                                </div>
                            </li>
                        ) : null}

                        <div className='footer-form'>
                            <div className='icon'>
                                <img src="./img/icons/picture.svg" alt="pic" />
                                <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" onChange={(e) => handlePicture(e)} />
                            </div>
                            <div className='btn-send'>
                                {message || postPicture ? (
                                    <button className='cancel' onClick={cancelPost}>Annuler Message</button>
                                ) : null}
                                <button className='send' onClick={handlePost}>Envoyer</button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default NewPostForm;