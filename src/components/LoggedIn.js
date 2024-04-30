import React, { useState } from 'react';
import '../assets/css/header.css';
import MakeStory from './MakeStory';
import { logout } from '../business/userEndpoints';
import { swip_troy_access, getCookie, setCookie } from '../business/authentication';
import axios from 'axios';

const LoggedIn = ({ username, handleIsLoggedIn, categories }) => {
  const [showMakeStoryModal, setShowMakeStoryModal] = useState(false);
  const toggleShowMakeStoryModal = () => {
    setShowMakeStoryModal(!showMakeStoryModal);
  };

  const handleLogoutClick = async () => {
    const token = getCookie(swip_troy_access);
    if (!token) {
      console.error('JWT token not found in the cookie');
      return;
    }
    try {
      const response = await axios.post(logout, {}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      setCookie(swip_troy_access, null, 0);
      handleIsLoggedIn(false);
      return response.message;
    }
    catch (error) {
      return "Something Went Wrong";
    }
  };

  return (
    <>
      <div className="right">
        <button className="btn btn-danger header-button" onClick={() => window.location.href = "/story/bookmark"}>Bookmark</button>
        <button className="btn btn-danger header-button" onClick={toggleShowMakeStoryModal}>Add Story</button>
        <span className="btn">Hi, {username}</span>
        <button className="btn btn-danger header-button" onClick={handleLogoutClick}>Log Out</button>
      </div>
      {showMakeStoryModal && <MakeStory categories={categories} closeModal={toggleShowMakeStoryModal} />}
    </>
  );
};

export default LoggedIn;