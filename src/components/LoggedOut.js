import React, {useState} from 'react';
import Modal from './Modal'; 
import '../assets/css/header.css';
import {register, login} from '../business/userEndpoints';
import {swip_troy_access, setCookie} from '../business/authentication';
import axios from 'axios';

const LoggedOut = ({handleIsLoggedIn}) => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const toggleRegisterModal = () => {
    setShowRegisterModal(!showRegisterModal);
  };

  const toggleLoginModal = () => {
    setShowLoginModal(!showLoginModal);
  };

  const handleRegisterClick = async (username, password) => {
    const data = {
        username: username,
        password: password
    }

    try{
        const response = await axios.post(register, data);
        console.log('Response: ', response.data);
        return response.data.message;
    }
    catch(error){
        return error.response.data;
    }
  };

  const handleLoginClick = async (username, password) => {
    const data = {
        username: username,
        password: password
    }

    try{
        const response = await axios.post(login, data);
        setCookie(swip_troy_access, response.data.token, 2*60*60*1000);
        handleIsLoggedIn(true);
        return "Logged In Successfully!";
    }
    catch(error){
        return "Something Went Wrong";
    }
  };

  return (
    <>
      <div className="right">
        <button className="btn btn-danger header-button" onClick={toggleRegisterModal}>Register Now</button>
        <button className="btn btn-primary header-button" onClick={toggleLoginModal}>Sign In</button>
      </div>
      {showRegisterModal && <Modal title="Register to SwipTory" buttonText="Register" handleButtonClick={handleRegisterClick} closeModal={toggleRegisterModal} />}
      {showLoginModal && <Modal title="Login to SwipTory" buttonText="Login" handleButtonClick={handleLoginClick} closeModal={toggleLoginModal} />}
    </>
  );
};

export default LoggedOut;