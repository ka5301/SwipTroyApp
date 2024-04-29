import React, { useState, useEffect } from 'react';
import '../assets/css/story-section.css';
import { useParams } from 'react-router-dom';
import Story from './Story';
import { testStories } from '../assets/js/staticdata';
import { getStoryById } from '../business/storyEndpoints';
import axios from 'axios';

const StoryDetails = ({ IsLoggedIn }) => {
  const { id } = useParams();
  const [story, setStory] = useState({});

  useEffect(() => {
    const fetchStory = async () => {
      console.log(id);
      // const storyResponse = await axios.get(getStoryById(id));
      // console.log(storyResponse);
      // return storyResponse.data;

      return testStories[0];
    };

    const fetchData = async () => {
      const storyResponse = await fetchStory();
      setStory(storyResponse);
    };

    fetchData();
  }, [id]);

  return (
    <div className="modal-story-overlay">
      <div className="modal-story">
        <Story story={story} IsLoggedIn={IsLoggedIn} />
      </div>
    </div>
  );
}

export default StoryDetails;
