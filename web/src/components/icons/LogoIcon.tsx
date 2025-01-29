import React from 'react';
import { colors } from '@constants/colors';

const LogoIcon = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Support frames */}
    <path
      d="M4 28C4 26.8954 4.89543 26 6 26H34C35.1046 26 36 26.8954 36 28V30C36 31.1046 35.1046 32 34 32H6C4.89543 32 4 31.1046 4 30V28Z"
      fill={colors.primaryDark}
    />
    
    {/* Resonators */}
    <path
      d="M6 26C6 26 7 22 7 20C7 18 6 14 6 14M10 26C10 26 11 22 11 20C11 18 10 14 10 14M14 26C14 26 15 22 15 20C15 18 14 14 14 14M18 26C18 26 19 22 19 20C19 18 18 14 18 14M22 26C22 26 23 22 23 20C23 18 22 14 22 14M26 26C26 26 27 22 27 20C27 18 26 14 26 14M30 26C30 26 31 22 31 20C31 18 30 14 30 14M34 26C34 26 35 22 35 20C35 18 34 14 34 14"
      stroke={colors.primaryLight}
      strokeWidth="1"
      strokeLinecap="round"
    />

    {/* Keys (lames) */}
    <rect x="5" y="12" width="4" height="14" rx="1" fill={colors.primary} />
    <rect x="10" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="14" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="18" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="22" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="26" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="30" y="12" width="3" height="14" rx="1" fill={colors.primary} />
    <rect x="34" y="12" width="2" height="14" rx="1" fill={colors.primary} />

    {/* Decorative lines on keys */}
    <path
      d="M6 16H8M11 16H12M15 16H16M19 16H20M23 16H24M27 16H28M31 16H32M35 16H35.5"
      stroke={colors.primaryLight}
      strokeWidth="0.5"
      strokeLinecap="round"
    />

    {/* Support cords */}
    <path
      d="M4 14H36M4 24H36"
      stroke={colors.primaryDark}
      strokeWidth="0.5"
      strokeLinecap="round"
    />
  </svg>
);

export default LogoIcon; 