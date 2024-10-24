import React from 'react';
import './hero.css';
import arrow from '../../assets/images/dark-arrow.png'

const Hero = () => {
    return (
        <>
        <div className="hero container">
            <div className="hero-text">
                <h1>We Ensure better education for a better world</h1>
                <p>Our cutting-edge curriculam is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
                <a className='login lr' href="/login">
                Login</a>
              <a className='register lr' href="/register">Register</a> 
            </div>
        </div>
        </>
    )
};
export default Hero