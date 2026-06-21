import React from 'react';

import Header from '@components/Header';
import ScrollBackToTop from '@components/ScrollBackToTop';
import GalleryLayout from '@components/layout-grid';
import Footer from '@components/Footer';

const Gallery: React.FC = () => {
  return (
    <div className='flex flex-col bg-black'>
      <Header />
      <ScrollBackToTop />
      <GalleryLayout />
      <Footer />
    </div>
  )
};

export default Gallery;
