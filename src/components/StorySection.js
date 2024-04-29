import React, { useState } from 'react';
import Story from './Story';
import '../assets/css/story-section.css';

const StorySection = ({ title, stories, showmore = true, handleSeeMore, IsLoggedIn }) => {

  const [selectedStory, setSelectedStory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (story) => {
    setSelectedStory(story);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedStory(null);
    setIsModalOpen(false);
  };

  return (
    <section className='story-section'>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <div className="story-list-container">
        {stories.map((story) => (
          <div key={story._id} className="story-item">
            <Story story={story} IsLoggedIn={IsLoggedIn} />
          </div>
        ))}
      </div>
      {showmore && <div style={{ textAlign: 'center', margin: '20px' }}>
        <button className='btn btn-outline-warning' onClick={handleSeeMore}>See More</button>
      </div>}
      {isModalOpen && (
        <div className="modal-story-overlay" onClick={closeModal}>
          <div className="modal-story">
            <Story story={selectedStory} IsLoggedIn={IsLoggedIn} />
            {/* Additional modal content can go here */}
          </div>
        </div>
      )}
    </section>
  );
};

export default StorySection;
