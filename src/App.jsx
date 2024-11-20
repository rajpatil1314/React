import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap styles are loaded
import './App.css'

// Placeholder ExampleCarouselImage Component
const ExampleCarouselImage = ({ text }) => (
  <div
    style={{
      height: '400px',
      backgroundColor: 'lightgray',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <h1>{text}</h1>
  </div>
);

function App() {
  return (
    <>
    <div className='box1'>
      <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Ducimus, nisi. Rerum voluptatum amet impedit expedita maiores optio reiciendis laboriosam</h4>

    </div>
    <Carousel>
      <Carousel.Item>
        <ExampleCarouselImage text="red" />
        <Carousel.Caption>
          <h2>red</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="and" />
        <Carousel.Caption>
          <h2>and</h2>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="" />
        <Carousel.Caption>
          <h2>white</h2>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='box1'>
    <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br> Ducimus, nisi. Rerum voluptatum amet impedit expedita maiores optio reiciendis laboriosam</h4>

    </div>
    </>
  );
}

export default App;
