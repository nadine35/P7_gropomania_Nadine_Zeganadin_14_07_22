import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, updatePost } from '../../actions/post.actions';
import { dateParser, isEmpty } from '../../Utils/Utils';
import CardComments from './CardComments';
import DeleteCard from './DeleteCard';
import LikeButton from './LikeButton';

const Card = ({ post }) => {

    // *** page loading:
    const [isLoading, setIsLoading] = useState(true);
    // *** post update:
    const [isUpdating, setIsUpdating] = useState(false);
    const [isValidatingImage, setIsValidatingImage] = useState(false);
   
    const [textUpdate, setTextUpdate] = useState(null);
    const [showComments, setShowComments] = useState(false);

    const [postPicture, setPostPicture] = useState({ myFile : ""});
    const [file, setFile] = useState("");

    const usersData = useSelector((state) => state.usersReducer);
    const userData = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const updateItem = async () => {

        const data = new FormData();

        if (textUpdate || file) {

            await data.append('posterId', userData._id);
            if (textUpdate) await data.append('message', textUpdate);

            if (file) {
                await data.append('file', file);

                console.log(file.name);
                const imageUpdateUrl = file.name;

                if (imageUpdateUrl) data.append('imageUrl', imageUpdateUrl);
            }

            console.log(data);

            await dispatch(updatePost(post._id, data))

            dispatch(getPosts());
            cancelPost();
        }
        setIsUpdating(false);
        setIsValidatingImage(false);

    };


    const handlePicture = async (e) => {

        // *** Permet de ne plus afficher l'image du post entre la sélection d'une nouvelle et la validation de celle-ci
        setIsValidatingImage(true);

        // e.preventDefault(); // *** ajout: intérêt ??

        const originalFile = e.target.files[0];
        setFile(originalFile); // *** définit le fichier image appelé ensuite à la validation du formulaire

        // *** si on veut le fichier converti en base64 pour affichage miniature avant validation:
        const base64 = await convertToBase64(originalFile);
        setPostPicture({ ...postPicture, myFile : base64 })
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
        setTextUpdate('');
        setPostPicture('');
        setFile('');
    };

    useEffect(() => {
        !isEmpty(usersData[0]) && setIsLoading(false);
    }, [usersData])


    return (
        <li className='card-container' key={post._id}>
            {isLoading ? (
                <i className='fas fa-spinner fa-spin'></i>
            ) : (
                <>
                    <div className="card-left">
                    <img
                        src={
                            !isEmpty(usersData[0]) &&
                            usersData
                                .map((user) => {
                                    if (user._id === post.posterId) return "./userProfilImages/"+ user.imageUrl;

                                    else return null;                       
                                })
                                
                                .join("")
                        }
                        alt="poster-picture"
                    />
                    </div>
                    <div className='card-right'>
                        <div className='card-header'>
                            <div className='pseudo'>
                                <h3>
                                    {
                                        !isEmpty(usersData[0]) &&
                                        usersData
                                            .map((user) => {
                                                if (user._id === post.posterId) return user.pseudo;
                                                else return null;
                                            })
                                            .join("")
                                    }
                                </h3>
                            </div>
                            <span>{dateParser(post.createdAt)}</span>
                        </div>
                        {isUpdating === false && <p>{post.message}</p>}
                        {isUpdating && (
                            <div className="update-post">
                                <textarea
                                    defaultValue={post.message}
                                    onChange={(e) => setTextUpdate(e.target.value)}
                                />
                                {/* *** Bouton pour inclure une image avec le message (post) 
                                Test CSS avec width limitee pour les grandes images */}
                                <div className='icon'>
                                    <img src={ postPicture.myFile || "./img/icons/picture.svg" } alt="pic" 
                                    width = "25px" height= "25px"/>
                                    <input type="file" id="file-upload" name="file" accept=".jpg, .jpeg, .png" 
                                        onChange={(e) => handlePicture(e)}
                                    />
                                </div>
                                <div className="button-container">
                                    <button className="btn" onClick={updateItem}>
                                        Valider modification
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* *** Affichage si l'image n'est pas en état de modification par une autre dans le post */}
                        {/* *** Affichage de la div seulement si l'image n'est pas vide */}
                        {isValidatingImage === false && !isEmpty(post.imageUrl) && (
                            <div className='icon'>
                                <img src={ "./images/"+ post.imageUrl } alt="card-pic" className="card-pic" />
                            </div>
                        )}

                        {(userData._id === post.posterId || userData.isAdmin) && (
                            <div className='button-container'>
                                <div onClick={() => setIsUpdating(true)}>
                                    <img src="./img/icons/edit.svg" alt="edit-message" />
                                </div>
                                <DeleteCard id={post._id} />
                            </div>
                        )}
                        <div className='card-footer'>
                            <div className='comment-icon'>
                                <img onClick={() => setShowComments(!showComments)} src="./img/icons/message1.svg" alt="comment" />
                                <span>{post.comments.length}</span>
                            </div>
                            < LikeButton post={post} />
                        </div>
                        {showComments && <CardComments post={post} />}
                    </div>
                </>
            )}
        </li>
    );
};

export default Card;