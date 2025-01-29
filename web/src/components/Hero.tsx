import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 2rem;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
`;

const Content = styled.div`
  flex: 1;
  padding-right: 4rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #4b4b4b;
  margin-bottom: 1.5rem;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #777;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const StartButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: #58cc02;
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 0 #58a700;
  transition: transform 0.1s;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 #58a700;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const CharacterImage = styled.div`
  width: 400px;
  height: 400px;
  background-color: #1cb0f6;
  border-radius: 50%;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 80%;
    background-image: url('/character.png'); // Vous devrez ajouter votre propre image
    background-size: contain;
    background-repeat: no-repeat;
    background-position: bottom;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <Content>
        <Title>L'apprentissage amusant et efficace.</Title>
        <Subtitle>
          Apprenez avec des leçons courtes et amusantes. Avec nous, c'est gratuit, amusant et scientifiquement prouvé.
        </Subtitle>
        <StartButton>COMMENCER MAINTENANT</StartButton>
      </Content>
      <ImageContainer>
        <CharacterImage />
      </ImageContainer>
    </HeroContainer>
  );
};

export default Hero;
