import React from 'react';

import Header from "@components/Header";
import Footer from '@components/Footer';
import Address from '@components/Address';
import ContactForm from '@components/ContactForm';
import ScrollBackToTop from '@components/ScrollBackToTop';
import Services from '@components/Services';
import ImageSlider from '@components/Slider/ImageSlider';

const Homepage: React.FC = () => {
    return (
        <div className='bg-black'>
            <Header />
            <ScrollBackToTop />
            <div className='z-[-1]'>
                <ImageSlider />
            </div>
            <Services />
            <ContactForm />
            <Address />
            <Footer />
        </div>
    )
}

export default Homepage;