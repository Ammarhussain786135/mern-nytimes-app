import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/top-stories').then((response) => {
      console.log(response, "this is an resones");
      setStories(response.data);
    }).catch(err => {
      console.log("this is an error");
    });
  }, []);

  return (
    <div className="App">
      <h1>Top Stories from New York Times</h1>
      <div className="story-cards">
        {stories.map((story) => (
          <div key={story.title} className="story-card">
            <a href={story.url} target="_blank" rel="noopener noreferrer">
              <img src={story.multimedia[0].url} alt={story.title} />
              <h2>{story.title}</h2>
              <p>{story.abstract}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
