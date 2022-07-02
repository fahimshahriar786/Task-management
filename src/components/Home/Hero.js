import React from 'react';

const Hero = () => {
    return (
        <div  className='flex justify-center bg-lime-200 text-black'>
            <div className="hero min-h-screen" style="background-image: url(https://placeimg.com/1000/800/arch); " >
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div classNames="max-w-md">
      <h1 classNames="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;