import '../App.css';
import React from 'react';
import Header from './Header';
import StorySection from './StorySection'

const StoryBookmark = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            {IsLoggedIn && userStories?.bookmarkedStories && <StorySection key="Bookmarks" title="Your Bookmarked Stories" stories={userStories.bookmarkedStories} showmore={false} IsLoggedIn={IsLoggedIn} />}
        </div>
    );
}

export default StoryBookmark;
