import React from "react";
import "./Banner.css";


function Banner({ src, alt, content="" }) {
    return (
      <header className='banner'>
        <img src={src} alt={alt} />
        <p>{content}</p>
      </header>
    );
  }

  export default Banner;