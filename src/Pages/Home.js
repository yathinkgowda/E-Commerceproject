import React from 'react';
import Navbar from "../components/Navbar";
import Carousel from '../components/Carousel';
import Ads from '../components/Ads';
import ProductSection from '../components/ProductSection';
import '../App.css';

function Home() {
  // You might want to fetch this dynamically from an API or Redux state
  const productArray = ['iphone', 'ipad', 'macbook', 'samsung']; 

  return (
    <>
      <Navbar />
      
      {/* Carousel Section */}
      <div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Carousel />
        </div>
      </div>

      {/* Ads Section */}
      <div className='container-fluid bg-white mt-5 pt-3'>
        <div className='row'>
          <Ads />
        </div>
      </div>
      
      {/* Product Section */}
      <div className='container-fluid bg-white'>
        <div className='row'>
          <ProductSection products={productArray} /> {/* Update productArray to actual data */}
        </div>
      </div>
    </>
  );
}

export default Home;
