import React from 'react';

import { DirectionAwareHover } from "./ui/image-hover";
import { sliderData } from "./Slider/images";

const Services: React.FC = () => {
  return (
    <div className='flex flex-col justify-center min-h-screen w-full z-0 py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-black via-slate-900 to-black'>
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className='text-slate-100 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4'>
            What We <span className="text-[#d1b069]">Do</span>
          </h2>
          <p className='text-[#d1b069] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6'>
            OUR SERVICES
          </p>
          <div className="h-1 w-24 bg-[#d1b069] mx-auto rounded-full mb-6"></div>
          <p className="text-slate-300 text-base sm:text-lg md:text-xl mt-6 max-w-3xl mx-auto">
            Discover our comprehensive range of creative solutions designed to bring your vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-12 justify-items-center">
          {sliderData.map((data) => (
            <div key={data.id} className="w-full max-w-sm flex justify-center isolate">
              <DirectionAwareHover imageUrl={data.urls} alt={data.alt}>
                <div className="space-y-2">
                  <p className="font-bold text-lg sm:text-xl md:text-2xl text-white">{data.title}</p>
                  <p className="font-normal text-sm sm:text-base text-slate-200 pr-4 leading-relaxed">
                    {data.description}
                  </p>
                </div>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
