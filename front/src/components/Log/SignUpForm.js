import React, { useState } from 'react';
import AuthService from "../../services/auth-service";
import SignInForm from "./SignInForm";

const SignUpForm = () => {
  const [formSubmit, setFormSubmit] = useState(false);
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    const error = document.querySelector(".error");
    try {
      await AuthService.signup(email, password, pseudo).then((res) => {
        console.log(res);
        if (res.error) {
          error.innerHTML = res.error;
        } 
        else {
          setFormSubmit(true);
        }
      })
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
    {formSubmit ? (
      <>
      <SignInForm />
      <span></span>
      <h4 className='success'>Enregistrement réussi, veuillez-vous connecter</h4>
      </>
    ) : (
    <form action="" onSubmit={handleSignup} id="sign-up-form">
      <label htmlFor='pseudo'>Pseudo</label>
      <br />
      <input type="text" name="pseudo" id="pseudo" onChange={(e) => setPseudo(e.target.value)} value={pseudo} />
      <br />
      <label htmlFor='email'>Email</label>
      <br />
      <input type="text" name="email" id="email" onChange={(e) => setEmail(e.target.value)} value={email} />
      <br />
      <label htmlFor='password'>Mot de passe</label>
      <br />
      <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} value={password} />
      <br />
      <input type="submit" value="Valider inscription" />
      <br />
      <div className='error'></div>
      <br />
    </form>
    )}
    </>
  );
};

export default SignUpForm;