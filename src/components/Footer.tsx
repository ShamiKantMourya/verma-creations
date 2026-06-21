import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineMailOutline, MdLocationPin } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter, FaFacebookF } from "react-icons/fa6";

import logo1 from "../assets/Verma Creations white.png";

const Footer: React.FC = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            alert(`Thank you for subscribing with ${email}!`);
            setEmail('');
        }
    };

    return (
        <footer className="bg-gradient-to-b from-slate-900 via-black to-black border-t border-slate-800/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-8">
                    {/* Company Info */}
                    <div className="flex flex-col items-center sm:items-start">
                        <img 
                            src={logo1} 
                            alt="Verma Creations Logo" 
                            className="cursor-pointer h-12 sm:h-14 md:h-16 w-auto mb-4 transition-transform hover:scale-105" 
                        />
                        <p className="text-slate-400 text-xs sm:text-sm md:text-base mb-2 text-center sm:text-left">
                            © 2024 Verma Creations
                        </p>
                        <span className="text-slate-500 text-xs sm:text-sm text-center sm:text-left">
                            All rights reserved
                        </span>
                        <p className="text-slate-400 text-xs sm:text-sm mt-4 text-center sm:text-left leading-relaxed">
                            Your premier destination for top-quality signage boards, customized wallpaper, flex printing, and neon creations.
                        </p>
                    </div>

                    {/* Useful Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-white font-bold text-lg md:text-xl mb-4 sm:mb-6">Useful Links</h2>
                        <ul className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                            <li>
                                <Link 
                                    to="/" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/services" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/gallery" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/about" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    About
                                </Link>
                            </li>
                            <li>
                                <a 
                                    href="#contact" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-white font-bold text-lg md:text-xl mb-4 sm:mb-6">Legal</h2>
                        <ul className="flex flex-col gap-3 sm:gap-4 text-center sm:text-left">
                            <li>
                                <a 
                                    href="#" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a 
                                    href="#" 
                                    className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-sm sm:text-base"
                                >
                                    Terms of Sales
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Subscribe & Social */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h2 className="text-white font-bold text-lg md:text-xl mb-4 sm:mb-6">Subscribe</h2>
                        <p className="text-slate-400 text-xs sm:text-sm mb-4 text-center sm:text-left">
                            Get updates on our latest projects and offers
                        </p>
                        <form onSubmit={handleSubscribe} className="w-full mb-6">
                            <div className="flex items-center gap-2 w-full bg-slate-800/50 rounded-lg border border-slate-700/50 p-2 hover:border-[#d1b069]/50 transition-colors">
                                <MdOutlineMailOutline className="text-slate-400 text-xl flex-shrink-0" />
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-transparent outline-none text-slate-100 placeholder-slate-500 w-full text-sm sm:text-base px-2"
                                    required
                                />
                                <button 
                                    type="submit"
                                    className="flex-shrink-0 p-2 hover:bg-[#d1b069]/20 rounded-lg transition-colors"
                                    aria-label="Subscribe"
                                >
                                    <GrSend className="text-[#d1b069] text-lg hover:text-[#b8985a] transition-colors" />
                                </button>
                            </div>
                        </form>

                        {/* Social Media */}
                        <div className="flex items-center gap-4 sm:gap-6">
                            <a 
                                href="https://www.instagram.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-pink-500 transition-colors duration-200 text-2xl"
                                aria-label="Instagram"
                            >
                                <IoLogoInstagram />
                            </a>
                            <a 
                                href="https://www.twitter.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-xl"
                                aria-label="Twitter"
                            >
                                <FaXTwitter />
                            </a>
                            <a 
                                href="https://www.facebook.com" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-[#d1b069] transition-colors duration-200 text-xl"
                                aria-label="Facebook"
                            >
                                <FaFacebookF />
                            </a>
                            <a 
                                href="https://www.google.com/maps" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-slate-400 hover:text-red-600 transition-colors duration-200 text-2xl"
                                aria-label="Location"
                            >
                                <MdLocationPin />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Copyright Bar */}
            <div className="border-t border-slate-800/50 bg-black/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
                    <p className="text-center text-slate-400 text-xs sm:text-sm md:text-base">
                        © {new Date().getFullYear()}, <span className="text-[#d1b069] font-semibold">VERMA CREATIONS</span> - All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
