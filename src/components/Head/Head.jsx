import React from 'react';
import './head.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from '../Navbar/Navbar';
import MainTitle from '../MainTitle/MainTitle';
import img from '../images/5.png';
import img2 from '../images/6.png';
import img3 from '../images/7.png';

const Head = () => {
  return (
    <div className='head' id='home'>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={img} className="d-block w-100" alt="slide1" />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={img2} className="d-block w-100" alt="slide2" />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={img3} className="d-block w-100" alt="slide3" />
          </div>
        </div>
      </div>
      <Navbar />
      <div className="main-title-wrapper">
        <MainTitle /> 
      </div>
    </div>
  );
};

export default Head;
