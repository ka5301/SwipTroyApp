import './App.css';
import React, { useState, useEffect } from 'react';
import { user } from './business/userEndpoints';
import { swip_troy_access, getCookie } from './business/authentication';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Index from './components/Index';
import StoryCategory from './components/StoryCategory';
import StoryDetails from './components/StoryDetails';
import { testStories, testUserStories } from './assets/js/staticdata';
import StoryBookmark from './components/StoryBookmark';
import StoryCreated from './components/StoryCreated';

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUser] = useState('');
  const handleIsLoggedIn = value => setIsLoggedIn(value);

  const categories = [
    { _id: 21, name: 'Medical', imageUrl: '/images/medicine.jpeg' },
    { _id: 22, name: 'Fruits', imageUrl: '/images/fruits.jpeg' },
    { _id: 23, name: 'World', imageUrl: '/images/world.jpeg' },
    { _id: 24, name: 'India', imageUrl: '/images/india.jpeg' }
  ];
  const [stories, setStories] = useState([]);
  const [userStories, setUserStories] = useState({});

  useEffect(() => {
    const checkLoggedIn = async () => {
      const token = getCookie(swip_troy_access);
      if (token) {
        try {
          const response = await axios.get(user, {
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json'
            }
          });
          if (response.data) {
            setUser(response.data);
            return true;
          }
        }
        catch (error) {
          return "Something Went Wrong";
        }
      }
      return false;
    }

    const fetchStories = async () => {
      //const storiesResponse = await axios.get(getStories);
      //console.log(storiesResponse);
      //return storiesResponse.data;

      return testStories;
    };

    const fetchData = async () => {
      const loggedInPromise = checkLoggedIn();
      const storiesPromise = fetchStories();

      const [loggedInResponse, storiesResponse] = await Promise.all([
        loggedInPromise,
        storiesPromise
      ]);
      setIsLoggedIn(loggedInResponse);
      setStories(storiesResponse);
    };

    fetchData();
  }, []);

  useEffect(() => {
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
      const userStories = await fetchUserStories();
      setUserStories(userStories);
    };

    fetchData();

  }, [IsLoggedIn]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={
          <Index
            IsLoggedIn={IsLoggedIn}
            username={username}
            handleIsLoggedIn={handleIsLoggedIn}
            stories={stories}
            userStories={userStories}
            categories={categories}
          />
        } />
        <Route path="/story/category/:category" element={
          <StoryCategory
            IsLoggedIn={IsLoggedIn}
            username={username}
            handleIsLoggedIn={handleIsLoggedIn}
            stories={stories}
            userStories={userStories}
            categories={categories}
          />
        } />
        <Route path="/story/bookmark" element={
          <StoryBookmark
            IsLoggedIn={IsLoggedIn}
            username={username}
            handleIsLoggedIn={handleIsLoggedIn}
            stories={stories}
            userStories={userStories}
            categories={categories}
          />
        } />
        <Route path="/story/created" element={
          <StoryCreated
            IsLoggedIn={IsLoggedIn}
            username={username}
            handleIsLoggedIn={handleIsLoggedIn}
            stories={stories}
            userStories={userStories}
            categories={categories}
          />
        } />
        <Route path="/story/:id" element={<StoryDetails IsLoggedIn={IsLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
