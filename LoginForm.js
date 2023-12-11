import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  let emailid  = "saumya@gmail.com";
  let pass = "12345678";
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();
  const handleEmailChange = (event) => {
    const value = event.target.value;
    console.log(value)
    setEmail(value);
    if (value) {
      setEmailError(validateEmail(value));
    } else {
      setEmailError('Email is required');
    }
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
    if (value) {
      setPasswordError(validatePassword(value));
    } else {
      setPasswordError('Password is required');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // setEmailError(validateEmail(email));
    // setPasswordError(validatePassword(password));
    // if (!emailError && !passwordError && email  && password) {
    //   console.log(`Email: ${email}, Password: ${password}`);
    //   // Do something with the email and password
    //   Cookies.set('isLoggedIn', true);
      
    //   navigate('/dashbaord');
    
    // }
    if ( emailid===email && pass===password){
      //console.log( "emailid and password is currect")
      navigate('/dashbaord');
    } 
    else{
      setLoginError("Invalid login details");
    }
  };

  const validateEmail = (value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(value) && value!="") {
      return 'Invalid email address';
    }
    if (value==""){
      return 'Email is required';
    }
    return '';
  };

  const validatePassword = (value) => {
    if (value.length < 8) {
      return 'Password must be at least 8 characters';
    }
    return '';
  };

  return (
    <div style={{ width:"500px", margin: "auto", }} className="login_page">
      <h1>Login</h1>
    <form onSubmit={handleSubmit}>
    {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
      <label>
        Email: <br />
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
      <br />
      <label>
        Password: <br />
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      <br /><br />
      <button type="submit">Login</button>
    </form>
    </div>
  );
}

export default LoginForm;
