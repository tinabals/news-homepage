import {News} from './News';

import HeroImage from '../assets/images/image-web-3-desktop.jpg';

export const Hero = () => {
  return (
    <div className='flex flex-col space-y-4 md:space-x-8 md:flex-row'>
      <div className='md:w-3/4'>
        <img
          className='bg-cover bg-no-repeat bg-center'
          src={HeroImage}
          alt='hero-image'
        />
        <div className='flex flex-col md:justify-between md:space-x-8 md:flex-row'>
          <div className='font-extrabold tracking-wider capitalize text-4xl md:w-1/2 py-4'>
            <div className='w-4/5 flex flex-col md:2/5'>
              <span>The Bright </span>
              <span>Future of web</span>
              <span> 3.0?</span>
            </div>
          </div>
          <div className=' tracking-wider space-y-4 md:w-3/5 md:p-4'>
            <p>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </p>
            <button className=' bg-red-400 md:bg-black text-white px-5 py-3 uppercase font-bold tracking-wide'>
              read more
            </button>
          </div>
        </div>
      </div>
      <div className='md:w-1/4'>
        <News />
      </div>
    </div>
  );
};
