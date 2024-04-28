import React from 'react';
import '../assets/css/story.css';

const Story = ({ story }) => {
  return (
    <div className="story-container"> 
      <div className="share-icon">
        <i className="fas fa-share"></i> Share
      </div>
      <img src={story.imageUrl} alt={story.heading} className="story-image" />
      <h5 className="story-title">{story.heading}</h5>
      <p>{story.description}</p>
      <div className="story-buttons">
        <button className="story-button">
        {story.likes} <i className="fas fa-heart"></i> Like 
        </button>
        <button className="story-button">
          <i className="fas fa-bookmark"></i> Bookmark
        </button>
      </div>
    </div>
  );
};

export default Story;
