import React from "react";
import "./banner.css";


function Banner({ src, alt, content="" }) {
    return (
      <header className='banner'>
        <img src={src} alt={alt}  />
        <p className="sr-only">{content}</p>
      </header>
    );
  }

  export default Banner;