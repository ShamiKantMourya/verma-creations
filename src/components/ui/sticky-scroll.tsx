"use client";
import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../../Utils/cn";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
    imageUrl?: string;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  // Extract image src from content
  const extractImageSrc = (contentNode: React.ReactNode): string | null => {
    if (!contentNode) return null;
    
    try {
      const element = contentNode as React.ReactElement;
      
      if (element?.props?.children) {
        const children = element.props.children;
        
        if (Array.isArray(children)) {
          const imgChild = children.find((child: any) => {
            return React.isValidElement(child) && 
                   (child.type === 'img' || child?.props?.src);
          });
          if (imgChild && React.isValidElement(imgChild)) {
            return imgChild.props.src || null;
          }
        }
        
        if (React.isValidElement(children)) {
          if (children.type === 'img' && children.props?.src) {
            return children.props.src;
          }
          
          if (children.props?.children) {
            const nestedChildren = children.props.children;
            
            if (Array.isArray(nestedChildren)) {
              const imgChild = nestedChildren.find((child: any) => {
                return React.isValidElement(child) && 
                       (child.type === 'img' || child?.props?.src);
              });
              if (imgChild && React.isValidElement(imgChild) && imgChild.props?.src) {
                return imgChild.props.src;
              }
            }
            
            if (React.isValidElement(nestedChildren) && nestedChildren.type === 'img') {
              return nestedChildren.props?.src || null;
            }
          }
        }
      }
    } catch (e) {
      console.error("Error extracting image:", e);
    }
    return null;
  };

  // Ensure we always have valid content
  const currentContent = content[activeCard] || content[0];
  const currentImageSrc = currentContent?.imageUrl || extractImageSrc(currentContent?.content);

  return (
    <div 
      className="relative bg-black min-h-screen"
      ref={ref}
    >
      {/* Sticky Section - Visible immediately and stays in view while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-black z-10">
        {/* Background Image - Changes based on active card */}
        {currentImageSrc && (
          <motion.div
            key={`bg-${activeCard}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 w-full h-full z-0"
          >
            <img
              src={currentImageSrc}
              alt={currentContent?.title || "Background"}
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                opacity: 0.7,
              }}
              loading="lazy"
            />
            {/* Dark overlay for text readability */}
            <div 
              className="absolute inset-0 w-full h-full bg-black"
              style={{
                opacity: 0.8,
              }}
            />
          </motion.div>
        )}

        {/* Text Content - Centered, changes on scroll */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 z-10">
          {currentContent ? (
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeCard}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-4xl mx-auto text-center"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight drop-shadow-2xl">
                  {currentContent.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-200 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                  {currentContent.description}
                </p>
              </motion.div>
            </AnimatePresence>
          ) : (
            <div className="w-full max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                No Content Available
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* Spacers - Create scroll space for each content item - AFTER sticky section */}
      {content.map((_, index) => (
        <div key={`spacer-${index}`} className="h-screen bg-transparent" />
      ))}
    </div>
  );
};
