import React from "react";
import Navbar from "./components/navbar/Navbar"
import Hero from './components/Hero/Hero'
import Destinations from "./components/Destinations/Destinations";
import Search from "./components/Search/Search"
import Select from './components/Select/Select'
import Selectimg from "./components/Selectimg/Selectimg";
import ImgCarousel from "./components/Carousel/ImgCarousel";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Destinations/>
       <Search/>
       <Select/>
       <Selectimg/>
       <ImgCarousel/>
       <Footer/>
    </div>
  );
}

export default App;
