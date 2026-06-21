import React from 'react';

const AboutSection: React.FC = () => {
    return (
        <div className='min-h-screen pt-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-16 bg-gradient-to-b from-black via-slate-900 to-black'>
            <div className='max-w-6xl mx-auto'>
                {/* Main Heading */}
                <div className='text-center mb-12 md:mb-16'>
                    <h1 className='text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4'>
                        About <span className="text-[#d1b069]">Us</span>
                    </h1>
                    <div className='h-1 w-24 bg-[#d1b069] mx-auto rounded-full'></div>
                </div>

                {/* Welcome Section */}
                <section className='mb-12 md:mb-16'>
                    <div className='bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-700/50 shadow-xl'>
                        <p className='text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-center md:text-left'>
                            Welcome to <span className='font-bold text-[#d1b069]'>Verma Creations</span>, your premier destination for top-quality signage boards, customized wallpaper, flex printing, hoardings, and mesmerizing neon texts and logos. At Verma Creations, we blend innovation with craftsmanship to bring your vision to life, enhancing your brand identity and leaving a lasting impression.
                        </p>
                        <p className='text-slate-300 text-base sm:text-lg md:text-xl mt-6 leading-relaxed text-center md:text-left'>
                            With years of experience in the industry, Verma Creations has established itself as a trusted name synonymous with excellence. Our team of skilled artisans and designers are passionate about delivering stunning creations that exceed expectations.
                        </p>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className='mb-12 md:mb-16'>
                    <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12 text-center md:text-left'>
                        Why Choose <span className='text-[#d1b069]'>Verma Creations</span>?
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                        {[
                            {
                                title: 'Unparalleled Creativity',
                                description: 'We understand the power of visual communication. Our creative experts employ cutting-edge techniques to craft signage boards, wallpapers, flex prints, hoardings, and neon creations that captivate your audience.',
                                icon: '🎨'
                            },
                            {
                                title: 'Customization at Its Best',
                                description: 'Your brand is unique, and so should be your signage. We offer tailor-made solutions to match your specific requirements, ensuring that every piece reflects your brand\'s personality and message.',
                                icon: '✨'
                            },
                            {
                                title: 'Premium Quality',
                                description: 'Quality is non-negotiable at Verma Creations. We use only the finest materials and employ stringent quality control measures to deliver products that stand the test of time.',
                                icon: '🏆'
                            },
                            {
                                title: 'Client-Centric Approach',
                                description: 'Your satisfaction is our priority. We believe in building long-lasting relationships with our clients by providing exceptional service, prompt delivery, and a hassle-free experience.',
                                icon: '🤝'
                            },
                            {
                                title: 'Innovative Solutions',
                                description: 'Stay ahead of the curve with our innovative solutions. Whether you\'re looking for a striking neon logo or eye-catching hoarding, we\'ve got you covered with the latest trends and technologies.',
                                icon: '💡'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className='bg-gradient-to-br from-slate-800/70 to-slate-900/70 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-slate-700/50 hover:border-[#d1b069]/50 transition-all duration-300 hover:shadow-2xl hover:shadow-[#d1b069]/20 hover:-translate-y-1'
                            >
                                <div className='flex items-start gap-4'>
                                    <span className='text-3xl md:text-4xl'>{item.icon}</span>
                                    <div className='flex-1'>
                                        <h3 className='text-white font-bold text-lg sm:text-xl md:text-2xl mb-3 text-[#d1b069]'>
                                            {item.title}
                                        </h3>
                                        <p className='text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed'>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className='mt-12 md:mt-16'>
                    <div className='bg-[#d1b069]/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-[#d1b069]/30 shadow-2xl text-center'>
                        <h2 className='text-white font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8'>
                            Let's <span className='text-[#d1b069]'>Create Together</span>
                        </h2>
                        <p className='text-slate-200 text-base sm:text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto'>
                            Whether you're a small business looking to make a big impact or a corporation aiming to enhance your brand presence, Verma Creations is here to turn your ideas into reality. Explore our portfolio and discover the endless possibilities.
                        </p>
                        <p className='text-slate-300 text-base sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto'>
                            Let's embark on a creative journey together and make your vision shine brighter than ever before. Elevate your brand with Verma Creations – where creativity knows no bounds.
                        </p>
                        <a
                            href='#contact'
                            className='inline-block px-8 py-4 bg-[#d1b069] text-white font-bold text-lg md:text-xl rounded-full hover:shadow-2xl hover:shadow-[#d1b069]/50 hover:bg-[#b8985a] transition-all duration-300 hover:scale-105 mt-4'
                        >
                            Contact Us Today
                        </a>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default AboutSection;