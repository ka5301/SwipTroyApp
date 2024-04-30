import '../App.css';
import React from 'react';
import Header from './Header';
import StorySection from './StorySection'

const StoryBookmark = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories, handleLikeClick, handleBookmarkClick }) => {
    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} categories={categories} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            {IsLoggedIn &&
                userStories?.bookmarkedStories &&
                <StorySection
                    categories={categories}
                    handleLikeClick={handleLikeClick}
                    handleBookmarkClick={handleBookmarkClick}
                    key="Bookmarks"
                    title="Your Bookmarked Stories"
                    stories={userStories.bookmarkedStories}
                    showmore={false}
                    IsLoggedIn={IsLoggedIn} />}
        </div>
    );
}

export default StoryBookmark;
