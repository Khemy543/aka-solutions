/* import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: require('../images/image5.jpg'),
    altText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br> et dolore magna aliqua. Ut enim ad minim veniam'
  },
  {
    src: require('../images/image2.jpg'),
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src: require('../images/image3.jpg'),
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];

const CarouselView = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} style={{width:"100%", height:"575px"}}/>
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default CarouselView; */



import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/app.css';



class CarouselView extends Component {
  render(){
    return(
      <div id = "home">
       <Carousel>
  <Carousel.Item>
  <div style={{
     display:"grid",
     height:"100%"

    }}>
    <img
     
      className="d-block w-100"
      src={require("../images/image7.jpg")}
      alt="Third slide"
      style={{
        
        maxWidth:"100%",
        maxHeight:"100vh",
        margin:"auto"

      
      }}
      />
      </div>

    <Carousel.Caption>
      <h3 style={{color:"#0BA9F9" , fontSize:"70px", paddingBottom:"170px"}}>First slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <div style={{
     display:"grid",
     height:"100%"


    }}>
    <img
    
      className="d-block w-100"
      src={require("../images/image11.jpg")}
      alt="Third slide"
      style={{
        
        maxWidth:"100%",
      maxHeight:"100vh",
      margin:"auto"
      }}
      />
      </div>


     <Carousel.Caption>
      <h3 style={{color:"#0BA9F9" , fontSize:"70px", paddingBottom:"170px"}}>Second slide label</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <div style={{
      display:"grid",
      height:"100%"

    }}>
    <img
      className="d-block w-100"
      src={require("../images/image8.jpg")}
      alt="Third slide"
      style={{
        maxWidth:"100%",
      maxHeight:"100vh",
      margin:"auto"

      
      }}
      />
      </div>

    <Carousel.Caption>
      <h3 style={{color:"#0BA9F9" , fontSize:"70px", paddingBottom:"170px"}}>Third slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <div style={{
      
      display:"grid",
        height:"100%",
    }}>
    <img
     
      className="d-block w-100"
      src={require("../images/image10.jpg")}
      alt="Third slide"
      style={{
        
        maxWidth:"100%",
        maxHeight:"100vh",
        margin:"auto"
      
      }}
      />
      </div>


    <Carousel.Caption>
      <h3 style={{color:"#0BA9F9" , fontSize:"70px", paddingBottom:"170px"}}>Third slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <div style={{
      display:"grid",
      height:"100%",

    }}>
    <img
     
      className="d-block w-100"
      src={require("../images/image5.jpg")}
      alt="Third slide"
      style={{
       
        maxWidth:"100%",
        maxHeight:"100vh",
        margin:"auto"
      
      }}
      />
      </div>

    <Carousel.Caption>
      <h3 style={{color:"#0BA9F9" , fontSize:"70px", paddingBottom:"170px"}}>Third slide label</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
  }
}


export default CarouselView;