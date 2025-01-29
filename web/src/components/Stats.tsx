import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';

const StatsContainer = styled.section`
  background-color: ${colors.background.light};
  padding: 4rem 2rem;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const StatItem = styled.div`
  h3 {
    font-size: 2.5rem;
    color: ${colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    color: ${colors.text.secondary};
  }
`;

const Stats = () => {
  return (
    <StatsContainer>
      <StatsGrid>
        <StatItem>
          <h3>500M+</h3>
          <p>Apprenants actifs</p>
        </StatItem>
        <StatItem>
          <h3>40+</h3>
          <p>Cours disponibles</p>
        </StatItem>
        <StatItem>
          <h3>95%</h3>
          <p>Taux de satisfaction</p>
        </StatItem>
      </StatsGrid>
    </StatsContainer>
  );
};

export default Stats; 