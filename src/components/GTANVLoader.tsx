import React from 'react';
import { RockstarNVLoader } from './RockstarNVLoader';

interface GTANVLoaderProps {
  isLoading: boolean;
  onFinish?: () => void;
  targetPageName?: string;
}

export const GTANVLoader: React.FC<GTANVLoaderProps> = ({
  isLoading,
  onFinish
}) => {
  return (
    <RockstarNVLoader
      isLoading={isLoading}
      onFinish={onFinish}
      durationMs={500}
    />
  );
};
