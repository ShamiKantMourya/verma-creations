import { motion } from "framer-motion";

import { Carousel } from "./image-slider";
import { images } from "./images";

const ImageSlider = () => {
    return (
        <Carousel className="h-screen sm:h-[80vh] md:h-screen w-full" images={images}>
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                }}
                className="z-50 flex flex-col justify-center items-center px-4 sm:px-6 md:px-8"
            >
                <motion.h1 
                    className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center text-white py-4 sm:py-6 md:py-8 leading-tight mb-6 sm:mb-8 md:mb-10"
                >
                    Signage Boards and 3D Wallpaper <br className="hidden sm:block" /> 
                    <span className="text-[#d1b069]">
                        Manufacturer
                    </span>
                </motion.h1>
                <motion.a 
                    href="#contact" 
                    className="group relative px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-[#d1b069] text-white mx-auto text-center rounded-full font-semibold text-base sm:text-lg md:text-xl lg:text-2xl flex items-center justify-center gap-2 shadow-2xl hover:shadow-[#d1b069]/50 hover:bg-[#b8985a] transition-all duration-300 hover:scale-110 active:scale-95 overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        Contact now
                        <span className="group-hover:translate-x-1 transition-transform duration-300">&rarr;</span>
                    </span>
                    <div className="absolute inset-0 bg-[#b8985a] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
            </motion.div>
        </Carousel>
    );
}

export default ImageSlider;