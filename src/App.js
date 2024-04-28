import './App.css';
import Header from './components/Header';
import React, {useState, useEffect} from 'react';
import {user} from './business/userEndpoints';
import {swip_troy_access, getCookie} from './business/authentication';
import axios from 'axios';
import Body from './components/Body';

function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUser] = useState('');
  const handleIsLoggedIn = value => setIsLoggedIn(value);
  
  const checkLoggedIn = async () => {
    const token = getCookie(swip_troy_access);
    if (token) {
        try{
            const response = await axios.get(user, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            if(response.data) {
              setUser(response.data);
              return true;
            }
        }
        catch(error){
            return "Something Went Wrong";
        }
    }
    return false;
  }

  useEffect(() => {
    checkLoggedIn().then((response) => {
        setIsLoggedIn(response);
    }).catch((err)=>{
        console.log(err);
    })
  }, []);

  return (
    <div className="App">
      <Header IsLoggedIn={IsLoggedIn} username={username} handleIsLoggedIn={handleIsLoggedIn}/>
      <Body IsLoggedIn={IsLoggedIn}/>
    </div>
  );
}

export default App;
