import '../App.css';
import React from 'react';
import Header from './Header';
import StorySection from './StorySection'

const StoryCreated = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            {IsLoggedIn && userStories?.createdStories && <StorySection key="Bookmarks" title="Your Created Stories" stories={userStories.createdStories} showmore={false} IsLoggedIn={IsLoggedIn} />}
        </div>
    );
}

export default StoryCreated;
