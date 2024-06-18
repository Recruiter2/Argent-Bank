import React from "react";
import "./banner.css";


function Banner({ content="" }) {
    return (
      <header className='hero'>
        
        <p className="sr-only">{content}</p>
      </header>
    );
  }

  export default Banner;