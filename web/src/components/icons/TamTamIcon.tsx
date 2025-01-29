import React from 'react';
import { colors } from '@constants/colors';

const TamTamIcon = ({ size = 60, rotation = 0, opacity = 0.1 }: { size?: number; rotation?: number; opacity?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    style={{ transform: `rotate(${rotation}deg)` }}
  >
    {/* Corps du tam-tam */}
    <circle cx="30" cy="30" r="25" fill={colors.primary} fillOpacity={opacity} />
    <circle cx="30" cy="30" r="20" fill={colors.primary} fillOpacity={opacity * 0.8} />
    <circle cx="30" cy="30" r="15" fill={colors.primary} fillOpacity={opacity * 0.6} />
    
    {/* Motifs décoratifs */}
    <path
      d="M30 5C30 5 35 15 35 30C35 45 30 55 30 55"
      stroke={colors.primary}
      strokeWidth="1"
      strokeOpacity={opacity}
    />
    <path
      d="M5 30C5 30 15 35 30 35C45 35 55 30 55 30"
      stroke={colors.primary}
      strokeWidth="1"
      strokeOpacity={opacity}
    />
  </svg>
);

export default TamTamIcon; 