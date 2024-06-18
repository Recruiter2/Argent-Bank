import React from "react";
import "./banner.css";


function Banner({ content="" }) {
    return (
      <header className='hero'>
        <section className="hero-content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interes rates. </p>
          <p className="text">Open a savings account with Argent Bank Today!</p>
        </section>
        <p className="sr-only">{content}</p>
      </header>
    );
  }

  export default Banner;