import React, {useState, useEffect}  from 'react';
import '../assets/css/body.css';
import StorySection from './StorySection'
import CategorySection from './CategorySection';
import { testStories, testUserStories } from '../assets/js/staticdata';
import {swip_troy_access, getCookie} from '../business/authentication';
import {stories as userStoriesEndpoint} from '../business/userEndpoints';
import {getStories} from '../business/storyEndpoints';
import axios from 'axios';

const Body = ({IsLoggedIn}) => {

    const categories = [
        { _id: 21, name: 'Medical', imageUrl: './images/medicine.jpeg' },
        { _id: 22, name: 'Fruits', imageUrl: './images/fruits.jpeg' },
        { _id: 23, name: 'World', imageUrl: './images/world.jpeg' },
        { _id: 24, name: 'India', imageUrl: './images/india.jpeg' }
    ];
    const [stories, setStories] = useState([]);
    const [userStories, setUserStories] = useState({});

  useEffect(() => {
    const fetchStories = async () => {
        //const storiesResponse = await axios.get(getStories);
        //console.log(storiesResponse);
        //return storiesResponse.data;

        return testStories;
    };
    const fetchUserStories = async () => {
        // if(IsLoggedIn) {
        //     const token = getCookie(swip_troy_access);
        //     if (token) {
        //         try{
        //             const userStoriesResponse = await axios.get(userStoriesEndpoint, {
        //                 headers: {
        //                     'Authorization': `Bearer ${token}`,
        //                     'Content-Type': 'application/json'
        //                 }
        //             });
        //             return userStoriesResponse.data.stories;
        //         }
        //         catch(error){
        //             return "Something Went Wrong";
        //         }
        //     }
        // }
        // return {};
        
        return (IsLoggedIn ? testUserStories : {});
    }
    const fetchData = async () => {
      const storiesPromise = fetchStories();
      const userStoriesPromise = fetchUserStories();

      const [storiesResponse, userStoriesResponse] = await Promise.all([
        storiesPromise,
        userStoriesPromise
      ]);

      setStories(storiesResponse);
      setUserStories(userStoriesResponse);
    };

    fetchData();
  }, [IsLoggedIn]);

  return (
    <div> 
        <CategorySection key = "cskey" categories={categories}/>
        {IsLoggedIn && userStories?.createdStories && <StorySection title='Your Stories' stories={userStories.createdStories}/>}
        {categories.map(category => (
            <StorySection key={category._id} title={'Top Stories About ' + category.name} stories={stories.filter(story => story.category === category.name)}/>
        ))}
    </div>
  );
};

export default Body;
