// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './App.css';

// The REST API endpoint
const API_URL = 'https://reqres.in/api/users/';

const App = () => {
  // At the beginning, posts is an empty array
  const [posts, setPosts] = useState([]);

  // Define the function that fetches the data from API
  const fetchData = async () => {
    const { data } = await axios.get(API_URL).then(response=>response.data);
    setPosts(data);
    console.log(data);
  };

  // Trigger the fetchData after the initial render by using the useEffect hook
  useEffect(() => {
    fetchData();
  }, []);


  //Kindy set the css for the same
  return (
    <div className="wrapper">
      {posts.length > 0 ? (
        <div className="content">
          {posts.map((user,index) => (
            <div key={index} className='userBorder'>
            <img className='imgStyle' src={user.avatar} alt={user.first_name + ' ' + user.last_name}/>
            <p className='emailStyle'>{user.email}</p>
            <p className='userNameStyle'>{ user.first_name + ' ' + user.last_name}</p>
          </div>
          ))}
        </div>
      ) : (
        <p className="loading">Loading... </p>
      )}
    </div>
  );
};

export default App;