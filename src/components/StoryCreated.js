import '../App.css';
import React from 'react';
import Header from './Header';
import StorySection from './StorySection'

const StoryCreated = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories, handleLikeClick, handleBookmarkClick }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} categories={categories} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            {IsLoggedIn &&
                userStories?.createdStories &&
                <StorySection
                    categories={categories}
                    handleLikeClick={handleLikeClick}
                    handleBookmarkClick={handleBookmarkClick}
                    key="Bookmarks"
                    title="Your Created Stories"
                    stories={userStories.createdStories}
                    showmore={false}
                    sLoggedIn={IsLoggedIn}
                    canEdit={IsLoggedIn} />}
        </div>
    );
}

export default StoryCreated;
