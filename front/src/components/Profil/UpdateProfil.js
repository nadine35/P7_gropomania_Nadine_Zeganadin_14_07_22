import { React, useState } from "react";
import LeftNav from "../LeftNav";
import { useDispatch, useSelector } from "react-redux";
import UploadImg from "./UploadImg";
import { updateBio } from "../../actions/user.actions";
import { dateParser } from "../../Utils/Utils";


const UpdateProfil = () => {
    const [bio, setBio] = useState("");
    const [updateForm, setUpdateForm] = useState(false);

    const usersData = useSelector((state) => state.usersReducer);

    const userData = useSelector((state) => state.userReducer);
    const dispatch = useDispatch();

    const handleUpdate = () => {

        console.log(userData);

        dispatch(updateBio(userData._id, bio));
        setUpdateForm(false);
    };

    return (
        <div className='profil-container'>
            <LeftNav />
            <h1> Profil de {userData.pseudo} </h1>
            <div className='update-container'>
                <div className="left-part">
                    <h3>Photo de profil</h3>
                    {/* modif 15/08 j'ai le jpeg ou png mais pas l'image */}
                    {/* <input id="file-upload"type="file" name="file" accept=".jpg, .jpeg, .png"/> */}
                    <br/> <br/> <br/> <br/>
                    <UploadImg />
                </div>
                <div className='right-part'>
                    <div className='bio-update'>
                        <h3>Bio</h3>
                        {updateForm === false && (
                            <>
                                <p onClick={() => setUpdateForm(!updateForm)}>{userData.bio}</p>
                                <button onClick={() => setUpdateForm(!updateForm)}>Modifier bio</button>
                            </>
                        )}
                        {updateForm && (
                            <>
                                <textarea type="text" defaultValue={userData.bio} onChange={(e) =>
                                    setBio(e.target.value)}></textarea>
                                <button onClick={handleUpdate}>Valider modifications</button>
                            </>
                        )}
                    </div>
                    <h4>Membre depuis le : {dateParser(userData.createdAt)}</h4>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfil;