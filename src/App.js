import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./App.css"
import { Container, Row, Col } from 'react-bootstrap';
import StoryCard from './components/StoryCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
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
    <Container className="App">
      <h1 className='mb-4'>Top Stories from New York Times!</h1>
      <Row>
        {stories.map((story) => {
          return (
            <Col key={story.title} sm={12} md={6} lg={4}>
              <StoryCard story={story} />
            </Col>
          )
        })}
      </Row>
    </Container>
  );
}

export default App;
