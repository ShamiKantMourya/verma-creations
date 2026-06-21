import React from "react";
import LightGallery from "lightgallery/react";
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import { Images } from "../assets/gallery/gallery";

const GalleryLayout: React.FC = () => {
    return (
        <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-black via-slate-900 to-black">
            <div className="max-w-7xl mx-auto">
                {/* Gallery Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h1 className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                        Our <span className="text-[#d1b069]">Gallery</span>
                    </h1>
                    <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
                        Explore our stunning collection of signage boards, 3D wallpapers, flex prints, and neon creations
                    </p>
                    <div className="h-1 w-24 bg-[#d1b069] mx-auto rounded-full"></div>
                </div>

                {/* Gallery Grid */}
                <LightGallery
                    speed={500}
                    plugins={[lgThumbnail, lgZoom]}
                    elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
                >
                    {Images.map((data, index) => (
                        <a 
                            href={data.route} 
                            key={index}
                            className="group relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-[#d1b069]/20 transition-all duration-300 hover:-translate-y-2"
                        >
                            <img 
                                alt={data.alt} 
                                src={data.imgSrc} 
                                className="block w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-4 left-4 right-4 text-white">
                                    <p className="text-sm sm:text-base font-semibold">{data.alt}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </LightGallery>
            </div>
        </div>
    );
};

export default GalleryLayout;
