const Address = () => {
  return (
    <address className="min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-16 md:py-20 bg-gradient-to-b from-black via-slate-900 to-black">
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-slate-100 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold py-6">
            Want to Work <span className="text-[#d1b069]">With Us?</span>
          </h1>
          <div className="h-1 w-24 bg-[#d1b069] mx-auto rounded-full"></div>
        </div>

        {/* Content Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 lg:p-10 border border-slate-700/50 shadow-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-white font-bold mb-8 text-center lg:text-left">
              Contact <span className="text-[#d1b069]">Information</span>
            </h2>
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <div className="text-2xl">📞</div>
                <div className="text-center lg:text-left">
                  <p className="text-slate-300 text-sm sm:text-base mb-1">Phone</p>
                  <a 
                    href="tel:+919754103802" 
                    className="text-white text-base sm:text-lg md:text-xl font-semibold hover:text-[#d1b069] transition-colors"
                  >
                    +91-9754103802
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
                <div className="text-2xl">✉️</div>
                <div className="text-center lg:text-left">
                  <p className="text-slate-300 text-sm sm:text-base mb-1">Email</p>
                  <a 
                    href="mailto:info@vermacreations.com" 
                    className="text-white text-base sm:text-lg md:text-xl font-semibold hover:text-[#d1b069] transition-colors break-all"
                  >
                    info@vermacreations.com
                  </a>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start gap-3 pt-4">
                <div className="text-2xl">📍</div>
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-slate-300 text-sm sm:text-base mb-2">Address</p>
                  <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed">
                    Block A, Vishwakarma Colony,<br />
                    Pul Pehaladpur, New Delhi, 110044
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h3 className="text-white font-semibold text-lg mb-4 text-center lg:text-left">Business Hours</h3>
              <div className="space-y-2 text-slate-300 text-sm sm:text-base text-center lg:text-left">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
            <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
              <iframe
                className="w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.262689776535!2d77.2848467!3d28.501743299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1908781c223%3A0x69c9de4ef3d8501f!2sVerma%20Creations!5e0!3m2!1sen!2sin!4v1710995464417!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Verma Creations Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </address>
  );
};

export default Address;
