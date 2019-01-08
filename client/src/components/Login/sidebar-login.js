import React from 'react'
import SlideTemplate from './templates/slideTemplate';
import OwlCarousel from 'react-owl-carousel2';
import './owl.carousel.min.css';
import './login.css';

const options = {
    items: 1,
    nav: false,
    rewind: true,
    autoplay: true,
    dots : true
}

const LoginSidebar = () => {

  return (
    <OwlCarousel options={options}>
        <SlideTemplate title="Something awesome should be the title" content="A paragraph describing about the fuc** title you've given" bg="images/bg1.jpg"/>
        <SlideTemplate title="Another awesome should be the title" content="A paragraph describing about the fuc** title you've given" bg="images/bg1.jpg"/>
    </OwlCarousel>
  )
}

export default LoginSidebar;
