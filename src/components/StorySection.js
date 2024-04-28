import React from 'react';
import Story from './Story';
import '../assets/css/story-section.css';

const StorySection = ({title, stories}) => {
   return (
    <section className='story-section'>
      <h3 style={{ textAlign: 'center' }}>{title}</h3>
      <div className="story-list-container">
        {stories.map((story) => (
          <div key={story._id} className="story-item">
            <Story story={story} />
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
        <button className='btn btn-outline-warning'>See More</button>
      </div>
    </section>
  );
};

export default StorySection;
