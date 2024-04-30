import React, { useState, useEffect } from 'react';
import '../assets/css/story-section.css';
import { useParams } from 'react-router-dom';
import Story from './Story';
import { testStories } from '../assets/js/staticdata';
import { getStoryById } from '../business/storyEndpoints';
import axios from 'axios';

const StoryDetails = ({ IsLoggedIn, handleLikeClick, handleBookmarkClick }) => {
  const { id } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    const fetchStory = async () => {
      //console.log(id);
      const storyResponse = await axios.get(getStoryById(id));
      //console.log(storyResponse);
      return storyResponse.data[0];

      //return testStories[0];
    };

    const fetchData = async () => {
      const storyResponse = await fetchStory();
      setStory(storyResponse);
    };

    fetchData();
    //console.log("here");
  }, []);

  return (
    <div className="modal-story-overlay">
      <div className="modal-story">
        <button type="button" className="close-button" style={{ borderRadius: '50%' }} aria-label="Close" onClick={() => window.location.href = "/"}>
          <span aria-hidden="true">&times;</span>
        </button>
        <Story handleLikeClick={handleLikeClick} handleBookmarkClick={handleBookmarkClick} story={story} IsLoggedIn={IsLoggedIn} />
      </div>
    </div>
  );
}

export default StoryDetails;
