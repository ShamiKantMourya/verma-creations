import React from 'react';

import Header from '@components/Header';
import { StickyScroll } from "../../components/ui/sticky-scroll";
import ScrollBackToTop from '@components/ScrollBackToTop';
import { content } from '@components/Slider/images';
import Footer from '@components/Footer';



const Service: React.FC = () => {
    return (
        <div>
            <Header />
            <ScrollBackToTop />
            <StickyScroll content={content} />
            <Footer />
        </div>
    )
}

export default Service;