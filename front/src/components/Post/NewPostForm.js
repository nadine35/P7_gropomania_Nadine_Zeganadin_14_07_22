import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addPost, getPosts } from '../../actions/post.actions';
import { isEmpty, timestampParser } from '../../Utils/Utils';

const NewPostForm = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    const [postPicture, setPostPicture] = useState({ myFile : ""});
    const [file, setFile] = useState("");
    
    const userData = useSelector((state) => state.userReducer);
    
    const dispatch = useDispatch();

    const handlePost = async () => {

        if (message || file) {

            const data = new FormData();
            data.append('posterId', userData._id);
            data.append('message', message);

            if (file) await data.append('file', file);

            const imageUrl = file.name;
            data.append('imageUrl', imageUrl);

            console.log(data);

            await dispatch(addPost(data));

            dispatch(getPosts());
            cancelPost();

        } else {
            alert("Veuillez écrire un message");
        }
    };

    const handlePicture = async (e) => {

        e.preventDefault(); // *** ajout nécessaire ?

        const originalFile = e.target.files[0];
        setFile(originalFile); // *** définit le fichier image appelé ensuite à la validation du formulaire

        // *** pour avoir le fichier converti en base64 pour affichage miniature avant validation:
        const base64 = await convertToBase64(originalFile);
        setPostPicture({ ...postPicture, myFile : base64 });
    };


    function convertToBase64(file){

        return new Promise((resolve, reject) => {
            
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                resolve(fileReader.result)
            };
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }


    const cancelPost = () => {
        setMessage('');
        setPostPicture('');
        setFile('');
    };

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);
    }, [userData]);


    return (
        <div className='post-container' encType="multipart/form">
            {isLoading ? (
                <i className="fas fa-spinner fa-pulse"></i>
            ) : (
                <>
                    <NavLink to="/profil">
                        <div className="user-info">
                            <img src={"./userProfilImages/"+ userData.imageUrl} alt="user-img" />
                        </div>
                    </NavLink>
                    < div className='post-form'>
                        <textarea name="message" id="message" placeholder='Quoi de neuf ?'
                            onChange={(e) => setMessage(e.target.value)} value={message} />
                        {message || postPicture ? (
                            <li className='card-container'>
                                <div className='card-left'>
                                    <img src={"./userProfilImages/"+ userData.imageUrl} alt="user-pic" />
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
                                    </div>
                                </div>
                            </li>
                        ) : null}

                        <div className='footer-form'>
                            {/* *** Bouton pour inclure une image avec le message (post) */}
                            <div className='icon'>
                                <img src={ postPicture.myFile || "./img/icons/picture.svg" } alt="pic" />
                                <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" 
                                    onChange={(e) => handlePicture(e)}
                                />
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