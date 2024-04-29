import '../App.css';
import React from 'react';
import Body from './Body';
import Header from './Header';

const Index = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            <Body IsLoggedIn={IsLoggedIn} categories={categories} stories={stories} userStories={userStories} />
        </div>
    );
}

export default Index;
