import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, getUser, uploadPicture, updatePicture } from '../../actions/user.actions';
import { isEmpty, timestampParser } from '../../Utils/Utils';


import { updatePost } from '../../actions/post.actions';


// *** cf: UpdateProfil():
const UploadImg = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [imageUrl, setImageUrl] = useState("");
    const [updateForm, setUpdateForm] = useState(false);

    // *** upload profile image en fichier:
    const [userProfilPicture, setUserProfilPicture] = useState({ myUserProfilPicture : ""});
    const [userProfilFile, setUserProfilFile] = useState("");


    const userData = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();

    const handleImgUpdate = async () => {

        if (userProfilPicture && userProfilFile) {

            const data = new FormData();

            data.append('_id', userData._id);

            if (userProfilFile) await data.append('file', userProfilFile);
            console.log(userProfilFile.name);

            setImageUrl(userProfilFile.name);
            data.append('imageUrl', imageUrl);

            console.log(data);

            // ** modif: img par url, pas fichier
            await dispatch(updatePicture(data, userData._id));
            dispatch(getUser(userData._id));

            cancelUserProfil();

        } else {
            alert("Image non sélectionnée...");
        }
    };

    const handlePicture = async (e) => {

        e.preventDefault(); // utile ??

        // *** UPDATE PICTURE AVEC IMAGE URL:
        // *** pour avoir le fichier converti en base64 pour affichage avant validation:
        const originalFile = e.target.files[0];
        setUserProfilFile(originalFile); // *** définit le fichier image appelé ensuite à la validation du formulaire


        const base64 = await convertToBase64(originalFile);
        setUserProfilPicture({ ...userProfilPicture, myUserProfilPicture : base64 })
        console.log(userProfilPicture.myUserProfilPicture);
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

    const cancelUserProfil = () => {
        setUserProfilPicture('');
        setUserProfilFile('');
    };

    useEffect(() => {
        if (!isEmpty(userData)) setIsLoading(false);
    }, [userData]);

    return (
        <div className='image-container' encType="multipart/form">

            <img src={ userProfilPicture.myUserProfilPicture || "./userProfilImages/"+ userData.imageUrl ||"./img/icons/user.svg" } alt="img-pic" />

            <br/> <br/> <br/> <br/>
            <form action="" onSubmit={handlePicture} className="upload-pic">
                <label htmlFor="file">Changer d'image</label>
                <input type="file" id="file" name="file" accept=".jpg, .jpeg, .png"
                    onChange={ (e) => handlePicture(e)
                        // (e) => setImageUrl("./uploads/profil/"+e.target.value.split("\\").splice(2))   
                    }
                    // onClick={ () => setUpdateForm(true) }
                />
            </form>    

            <br />
            <div className='btn-send'>
                <button className='send' onClick={handleImgUpdate}>Envoyer</button>
            </div>
        
        </div>
    );
};

export default UploadImg;