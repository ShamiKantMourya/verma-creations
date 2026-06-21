import React from 'react';
import Lottie from 'react-lottie';
import { Link } from "react-router-dom";

import PageNotFound from "../assets/animation/PageNotFound.json";

const Error: React.FC= () => {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: PageNotFound,
      rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
      }
  };
  return (
      <div className='flex flex-col justify-center items-center'>
          <div>
              <div>
              <Lottie 
              options={defaultOptions}
              height={400}
              width={400}
              />
              </div>
              <h3 className='flex justify-center items-center pb-5 font-bold text-2xl'>Page Not Found</h3>
              <Link to="/" className="flex justify-center"><h4 className='font-semibold text-xl opacity-80 hover:opacity-100 hover:text-[#d1b069] hover:decoration-[#d1b069] hover:underline transition-colors'>Go To HomePage</h4></Link>
          </div>
      </div>
  )
}

export default Error;