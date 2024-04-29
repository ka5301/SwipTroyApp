import React from 'react';
import Swal from 'sweetalert2';
import '../assets/css/story.css';

const Story = ({ story, IsLoggedIn }) => {

  const handleShareClick = () => {
    const shareLink = `http://localhost:3000/story/${story._id}`;
    Swal.fire({
      icon: 'none',
      title: 'Copy the link',
      text: shareLink,
      showConfirmButton: false,
      timer: 3000
    });
  };

  const handleLikeClick = () => {
    console.log('Like button clicked');
    if (!IsLoggedIn) {
      Swal.fire({
        icon: 'info',
        title: 'Please log in first!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };
  };

  const handleBookmarkClick = () => {
    console.log('Bookmark button clicked');
    if (!IsLoggedIn) {
      Swal.fire({
        icon: 'info',
        title: 'Please log in first!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };
  };

  return (
    <>
      <div className="story-container">
        <div className="share-icon" onClick={handleShareClick}>
          <i className="fas fa-share"></i> Share
        </div>
        <img src={story.imageUrl} alt={story.heading} className="story-image" />
        <h5 className="story-title">{story.heading}</h5>
        <p>{story.description}</p>
        <div className="story-buttons">
          <button className="story-button" onClick={handleLikeClick}>
            {story.likes} <i className="fas fa-heart"></i> Like
          </button>
          <button className="story-button" onClick={handleBookmarkClick}>
            <i className="fas fa-bookmark"></i> Bookmark
          </button>
        </div>
      </div>
    </>
  );
};

export default Story;
