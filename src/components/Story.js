import React, { useState } from 'react';
import Swal from 'sweetalert2';
import MakeStory from './MakeStory';
import '../assets/css/story.css';
import swipToryBaseUrl from '../business/swiptoryapibaseurl';

const Story = ({ story, IsLoggedIn, handleLikeClick, handleBookmarkClick, categories, canEdit = false }) => {
  const [showMakeStoryModal, setShowMakeStoryModal] = useState(false);
  const toggleShowMakeStoryModal = () => {
    setShowMakeStoryModal(!showMakeStoryModal);
  };

  const handleShareClick = () => {
    const shareLink = `http://localhost:3000/story/${story._id}`;
    Swal.fire({
      icon: 'success',
      title: 'Copy the link',
      text: shareLink,
      showConfirmButton: false,
      timer: 4000
    });
  };

  const handleEditClick = () => {
    toggleShowMakeStoryModal();
  };

  const onLikeClick = async () => {
    if (!IsLoggedIn) {
      Swal.fire({
        icon: 'info',
        title: 'Please log in first!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };

    await handleLikeClick(story._id);
  };

  const onBookmarkClick = async () => {
    if (!IsLoggedIn) {
      Swal.fire({
        icon: 'info',
        title: 'Please log in first!',
        showConfirmButton: false,
        timer: 1500
      });
      return;
    };
    await handleBookmarkClick(story._id);
  };

  return (
    <>
      <div className="story-container" style={{ backgroundImage: `url(${swipToryBaseUrl + story.image})` }}>
        <div className="overlay" onClick={() => window.location.href = `/story/${story._id}`}></div>
        <div className="share-icon" onClick={handleShareClick}>
          <i className="fas fa-share"></i> Share
        </div>
        {
          canEdit &&
          <div className="edit-icon" onClick={handleEditClick}>
            <i className="fas fa-edit"></i> Edit
          </div>
        }
        <div className='story-content'>
          <h4 className="story-title">{story.heading}</h4>
          <p>{story.description}</p>
          <div className="story-buttons">
            <button className="story-button" onClick={onLikeClick}>
              {story.likes} <i className="fas fa-heart"></i> Like
            </button>
            <button className="story-button" onClick={onBookmarkClick}>
              <i className="fas fa-bookmark"></i> Bookmark
            </button>
          </div>
        </div>
      </div>
      {showMakeStoryModal && <MakeStory story={story} categories={categories} closeModal={toggleShowMakeStoryModal} />}
    </>
  );
};

export default Story;
