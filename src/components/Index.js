import '../App.css';
import React from 'react';
import Body from './Body';
import Header from './Header';

const Index = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories, handleLikeClick, handleBookmarkClick }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} categories={categories} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            <Body handleLikeClick={handleLikeClick} handleBookmarkClick={handleBookmarkClick} IsLoggedIn={IsLoggedIn} categories={categories} stories={stories} userStories={userStories} />
        </div>
    );
}

export default Index;
