import React from 'react';
import styled from 'styled-components';
import { colors } from '@constants/colors';
import {
  PersonalizedLearningIcon,
  GameLearningIcon,
  ProgressTrackingIcon
} from '@components/icons/FeatureIcons';

const FeaturesContainer = styled.section`
  padding: 6rem 2rem;
  background-color: ${colors.background.white};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled.div`
  text-align: center;
  padding: 2rem;

  svg {
    margin-bottom: 1.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: ${colors.text.primary};
    margin-bottom: 1rem;
  }

  p {
    color: ${colors.text.secondary};
    line-height: 1.6;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  color: ${colors.text.primary};
  margin-bottom: 3rem;
`;

const Features = () => {
  return (
    <FeaturesContainer>
      <SectionTitle>Pourquoi choisir LearnLab ?</SectionTitle>
      <FeaturesGrid>
        <FeatureCard>
          <PersonalizedLearningIcon />
          <h3>Apprentissage personnalisé</h3>
          <p>Un parcours adapté à votre niveau et à vos objectifs</p>
        </FeatureCard>
        <FeatureCard>
          <GameLearningIcon />
          <h3>Apprentissage ludique</h3>
          <p>Des exercices interactifs et des jeux pour progresser</p>
        </FeatureCard>
        <FeatureCard>
          <ProgressTrackingIcon />
          <h3>Suivi des progrès</h3>
          <p>Visualisez vos progrès et restez motivé</p>
        </FeatureCard>
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features; 