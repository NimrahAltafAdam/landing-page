import React from 'react'
import "../../App.css";
import Features from "../Features";
import Intro from "../Intro";
import Footer from "../Footer";
import Slider from '../3D_slider';



function Home() {
  return (
    <>
    <div className = "bg" ></div>
    <Features />
    <Intro />
    <Slider />
    <Footer />
    </>
  );
}

export default Home
