import React from 'react';
import aboutimage from '../../images/hero.png'

function About() {
    return (
        <div className='about'>
            <div className='about-model'>
                <img src={aboutimage} alt='about image' />
            </div>
            <div className='about-text'>
                <h2>The Best <br/>Da Nang's Real Estate Website</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil debitis, 
                laboriosam labore ducimus rem quos ratione optio sint culpa obcaecati unde adipisci in repellat iste asperiores vel et suscipit illum?</p>
                <button>View more details</button>
            </div>
        </div>
    )
}

export default About;
