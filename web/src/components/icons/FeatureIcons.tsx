import React from 'react';
import { colors } from '@constants/colors';

export const PersonalizedLearningIcon = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill={colors.primaryLight} opacity="0.1" />
    <path
      d="M45 40C45 37.2386 47.2386 35 50 35H70C72.7614 35 75 37.2386 75 40V80C75 82.7614 72.7614 85 70 85H50C47.2386 85 45 82.7614 45 80V40Z"
      fill={colors.primary}
    />
    <rect x="50" y="45" width="20" height="4" rx="2" fill="white" />
    <rect x="50" y="55" width="20" height="4" rx="2" fill="white" />
    <rect x="50" y="65" width="12" height="4" rx="2" fill="white" />
  </svg>
);

export const GameLearningIcon = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill={colors.primaryLight} opacity="0.1" />
    <path
      d="M35 50C35 47.2386 37.2386 45 40 45H80C82.7614 45 85 47.2386 85 50V70C85 72.7614 82.7614 75 80 75H40C37.2386 75 35 72.7614 35 70V50Z"
      fill={colors.primary}
    />
    <circle cx="50" cy="60" r="5" fill="white" />
    <circle cx="70" cy="60" r="5" fill="white" />
    <path d="M60 55V65" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M55 60H65" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const ProgressTrackingIcon = ({ size = 120 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="60" cy="60" r="50" fill={colors.primaryLight} opacity="0.1" />
    <rect x="40" y="40" width="10" height="40" rx="2" fill={colors.primary} />
    <rect x="55" y="50" width="10" height="30" rx="2" fill={colors.primary} />
    <rect x="70" y="30" width="10" height="50" rx="2" fill={colors.primary} />
  </svg>
); 