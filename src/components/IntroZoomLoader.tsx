import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroZoomLoaderProps {
  onComplete: () => void;
}

export const IntroZoomLoader: React.FC<IntroZoomLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading overlay is active
    document.body.style.overflow = 'hidden';

    // Sequence timing: 0.8s fade in + 0.5s pause + 0.8s cinematic zoom = ~2.1s total
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Re-enable scrolling when overlay fades out
      document.body.style.overflow = '';
      setTimeout(onComplete, 500);
    }, 2000);

    return () => {
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black select-none overflow-hidden"
        >
          {/* Centered Image with AAA Cinematic Keyframe Animation */}
          <motion.img
            src="https://i.postimg.cc/DZbFHF0v/player-poster.png"
            alt="Intro Logo"
            referrerPolicy="no-referrer"
            initial={{ scale: 0.8, opacity: 0, filter: 'blur(0px) brightness(1)' }}
            animate={{
              scale: [0.8, 1, 1, 5],
              opacity: [0, 1, 1, 0],
              filter: [
                'blur(0px) brightness(1)',
                'blur(0px) brightness(1)',
                'blur(0px) brightness(1)',
                'blur(10px) brightness(1.3)'
              ]
            }}
            transition={{
              duration: 2.0,
              times: [0, 0.4, 0.65, 1], // 0.8s fade-in (0->0.4), 0.5s pause (0.4->0.65), 0.7s cinematic zoom (0.65->1)
              ease: 'easeInOut'
            }}
            className="w-32 h-32 sm:w-44 sm:h-44 object-cover rounded-full shadow-[0_0_50px_rgba(255,255,255,0.25)]"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

