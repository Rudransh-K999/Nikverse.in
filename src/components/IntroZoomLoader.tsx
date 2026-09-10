import React, { useEffect, useState } from 'react';
import { RockstarNVLoader } from './RockstarNVLoader';
import { preloadAllAppAssets } from '../utils/imagePreloader';

interface IntroZoomLoaderProps {
  onComplete: () => void;
}

export const IntroZoomLoader: React.FC<IntroZoomLoaderProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    preloadAllAppAssets();
  }, []);

  return (
    <RockstarNVLoader
      isLoading={isVisible}
      durationMs={1300}
      onFinish={() => {
        setIsVisible(false);
        onComplete();
      }}
    />
  );
};
