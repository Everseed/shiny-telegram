import React from 'react';
import styled from 'styled-components';
import TamTamIcon from '@components/icons/TamTamIcon';
import { colors } from '@constants/colors';

const BackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.background.white};
  pointer-events: none;
`;

const TamTamWrapper = styled.div<{ top: number; left: number; rotation: number }>`
  position: absolute;
  top: ${props => props.top}%;
  left: ${props => props.left}%;
  transform: translate(-50%, -50%) rotate(${props => props.rotation}deg);
`;

const Background = () => {
  const tamTams = [
    { size: 200, top: 15, left: 10, rotation: 45, opacity: 0.3 },
    { size: 150, top: 70, left: 85, rotation: -20, opacity: 0.25 },
    { size: 180, top: 85, left: 15, rotation: 15, opacity: 0.3 },
    { size: 120, top: 25, left: 90, rotation: 30, opacity: 0.25 },
    { size: 160, top: 45, left: 5, rotation: -45, opacity: 0.3 },
    { size: 140, top: 60, left: 95, rotation: 25, opacity: 0.25 }
  ];

  return (
    <BackgroundContainer>
      {tamTams.map((tamTam, index) => (
        <TamTamWrapper
          key={index}
          top={tamTam.top}
          left={tamTam.left}
          rotation={tamTam.rotation}
        >
          <TamTamIcon
            size={tamTam.size}
            rotation={0}
            opacity={tamTam.opacity}
          />
        </TamTamWrapper>
      ))}
    </BackgroundContainer>
  );
};

export default Background; 