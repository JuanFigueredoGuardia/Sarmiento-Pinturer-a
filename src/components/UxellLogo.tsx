import React from 'react';
import { SarmientoLogo } from './SarmientoLogo';

interface UxellLogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'auto';
  showSubtitle?: boolean;
}

export const UxellLogo: React.FC<UxellLogoProps> = (props) => {
  return <SarmientoLogo {...props} />;
};
