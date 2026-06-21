import React from 'react';

import Header from '@components/Header';
import ScrollBackToTop from '@components/ScrollBackToTop';
import Footer from '@components/Footer';
import AboutSection from '@components/AboutSection';

const About: React.FC = () => {
    return (
        <div className='flex flex-col bg-black min-h-screen'>
            <Header />
            <ScrollBackToTop />
            <AboutSection />
            <Footer />
        </div>
    );
};

export default About;