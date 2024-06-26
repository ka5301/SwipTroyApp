import React from 'react';
import '../assets/css/body.css';
import StorySection from './StorySection'
import CategorySection from './CategorySection';

const Body = ({ IsLoggedIn, categories, stories, userStories, handleLikeClick, handleBookmarkClick }) => {
  return (
    <div>
      <CategorySection key="cskey" categories={categories} />
      {IsLoggedIn && userStories?.createdStories && <StorySection handleLikeClick={handleLikeClick} categories={categories} handleBookmarkClick={handleBookmarkClick} title='Your Stories' stories={userStories.createdStories.slice(0, 4)} handleSeeMore={() => window.location.href = "/story/created"} IsLoggedIn={IsLoggedIn} />}
      {categories?.map(category => (
        <StorySection handleLikeClick={handleLikeClick} handleBookmarkClick={handleBookmarkClick} categories={categories} key={category._id} IsLoggedIn={IsLoggedIn} title={'Top Stories About ' + category.name} stories={stories.filter(story => story.category === category.name).slice(0, 4)} handleSeeMore={() => window.location.href = `/story/category/${category.name}`} />
      ))}
    </div>
  );
};

export default Body;
