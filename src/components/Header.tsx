import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";

import logo1 from "../assets/Verma Creations white.png";

const Header: React.FC = () => {
    const [click, setClick] = useState<boolean>(false);
    const [navbarColor, setNavbarColor] = useState<boolean>(false);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const changeNavbarColor = () => {
            if (window.scrollY >= 80) {
                setNavbarColor(true);
            } else {
                setNavbarColor(false);
            }
        };

        window.addEventListener('scroll', changeNavbarColor);
        
        // Cleanup function to remove event listener
        return () => {
            window.removeEventListener('scroll', changeNavbarColor);
        };
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setClick(false);
    }, [location.pathname]);

    // Close mobile menu when clicking outside or on a link
    const handleLinkClick = () => {
        setClick(false);
    };

    // Handle contact link - scroll to contact section on home page
    const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else {
            const contactSection = document.getElementById('contact');
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        setClick(false);
    };

    // Helper function to render navigation text with highlighted first letter
    const renderNavText = (text: string) => {
        const firstLetter = text[0];
        const rest = text.slice(1);
        return (
            <>
                <span className="font-bold text-[#d1b069]">{firstLetter}</span>
                <span>{rest}</span>
            </>
        );
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [click]);

    return (
        <nav 
            className={`fixed top-0 left-0 w-full h-20 z-50 transition-all duration-300 ${
                navbarColor 
                    ? "bg-slate-900/95 backdrop-blur-md shadow-lg" 
                    : "bg-transparent"
            }`}
        >
            <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center flex-shrink-0">
                    <Link to="/" onClick={handleLinkClick}>
                        <img 
                            src={logo1} 
                            alt="Verma Creations Logo" 
                            className="cursor-pointer h-8 sm:h-10 md:h-12 lg:h-14 w-auto transition-transform hover:scale-105" 
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center justify-end flex-1">
                    <ul className="flex gap-6 xl:gap-8 items-center text-base xl:text-lg font-normal">
                        <li>
                            <Link 
                                to="/" 
                                className="text-white hover:text-[#d1b069] transition-colors duration-200 px-2 py-1"
                            >
                                {renderNavText("Vision")}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className="text-white hover:text-[#d1b069] transition-colors duration-200 px-2 py-1"
                            >
                                {renderNavText("Expertise")}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/services" 
                                className="text-white hover:text-[#d1b069] transition-colors duration-200 px-2 py-1"
                            >
                                {renderNavText("Resources")}
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/gallery" 
                                className="text-white hover:text-[#d1b069] transition-colors duration-200 px-2 py-1"
                            >
                                {renderNavText("Moments")}
                            </Link>
                        </li>
                        <li>
                            <a 
                                href="#contact" 
                                onClick={handleContactClick}
                                className="text-white hover:text-[#d1b069] transition-colors duration-200 px-2 py-1 cursor-pointer"
                            >
                                {renderNavText("Address")}
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="lg:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-white rounded p-2 transition-transform hover:scale-110"
                    onClick={() => setClick(!click)}
                    aria-label="Toggle menu"
                    aria-expanded={click}
                >
                    {click ? <FaTimes size={24} /> : <CiMenuFries size={28} />}
                </button>

                {/* Mobile Menu Overlay */}
                {click && (
                    <div 
                        className="lg:hidden fixed inset-0 top-20 bg-slate-900/98 backdrop-blur-lg z-40 transition-opacity duration-300 ease-in-out"
                        onClick={() => setClick(false)}
                    >
                        <ul 
                            className="flex flex-col items-center justify-start pt-8 px-4 h-full overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <li className="w-full">
                                <Link 
                                    to="/" 
                                    className="block text-center text-slate-100 text-xl py-4 px-4 border-b border-slate-800 hover:bg-slate-800 hover:text-[#d1b069] hover:rounded-lg transition-colors duration-200 active:bg-slate-700"
                                    onClick={handleLinkClick}
                                >
                                    {renderNavText("Vision")}
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link 
                                    to="/about" 
                                    className="block text-center text-slate-100 text-xl py-4 px-4 border-b border-slate-800 hover:bg-slate-800 hover:text-[#d1b069] hover:rounded-lg transition-colors duration-200 active:bg-slate-700"
                                    onClick={handleLinkClick}
                                >
                                    {renderNavText("Expertise")}
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link 
                                    to="/services" 
                                    className="block text-center text-slate-100 text-xl py-4 px-4 border-b border-slate-800 hover:bg-slate-800 hover:text-[#d1b069] hover:rounded-lg transition-colors duration-200 active:bg-slate-700"
                                    onClick={handleLinkClick}
                                >
                                    {renderNavText("Resources")}
                                </Link>
                            </li>
                            <li className="w-full">
                                <Link 
                                    to="/gallery" 
                                    className="block text-center text-slate-100 text-xl py-4 px-4 border-b border-slate-800 hover:bg-slate-800 hover:text-[#d1b069] hover:rounded-lg transition-colors duration-200 active:bg-slate-700"
                                    onClick={handleLinkClick}
                                >
                                    {renderNavText("Moments")}
                                </Link>
                            </li>
                            <li className="w-full">
                                <a 
                                    href="#contact" 
                                    onClick={handleContactClick}
                                    className="block text-center text-slate-100 text-xl py-4 px-4 border-b border-slate-800 hover:bg-slate-800 hover:text-[#d1b069] hover:rounded-lg transition-colors duration-200 active:bg-slate-700 cursor-pointer"
                                >
                                    {renderNavText("Address")}
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;