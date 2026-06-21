import React from 'react';
import Lottie from 'react-lottie';

import LoaderAnimation from "../assets/animation/Loader.json";

const Loader: React.FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoaderAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div className='flex justify-center items-start'>
      <Lottie
        options={defaultOptions}
        height={200}
        width={200}
      />
    </div>
  )
}

export default Loader;