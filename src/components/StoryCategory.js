import '../App.css';
import React from 'react';
import Header from './Header';
import StorySection from './StorySection'
import { useParams } from 'react-router-dom';
import CategorySection from './CategorySection';

const StoryCategory = ({ IsLoggedIn, username, handleIsLoggedIn, categories, stories, userStories, handleLikeClick, handleBookmarkClick }) => {
    const { category } = useParams();

    return (
        <div className="App">
            <Header IsLoggedIn={IsLoggedIn} categories={categories} username={username} handleIsLoggedIn={handleIsLoggedIn} />
            <CategorySection key="cskey" categories={categories} />
            <StorySection
                handleLikeClick={handleLikeClick}
                categories={categories}
                handleBookmarkClick={handleBookmarkClick}
                key="category"
                title={'All Stories About ' + category}
                stories={stories.filter(story => story.category === category)}
                showmore={false}
                IsLoggedIn={IsLoggedIn} />
        </div>
    );
}

export default StoryCategory;
