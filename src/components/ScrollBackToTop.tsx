import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollBackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const showScrollbar = () => {
      if (window.scrollY >= 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", showScrollbar);
    
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", showScrollbar);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      {showScroll && (
        <button
          onClick={goToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10 z-50 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 bg-[#d1b069] text-white rounded-full shadow-2xl hover:shadow-[#d1b069]/50 hover:bg-[#b8985a] transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#d1b069] focus:ring-offset-2 focus:ring-offset-slate-900"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-lg sm:text-xl md:text-2xl" />
        </button>
      )}
    </>
  );
};

export default ScrollBackToTop;
