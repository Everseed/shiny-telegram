import React from 'react';
import styled from 'styled-components';
import Header from '@components/Header';
import Hero from '@components/Hero';
import Stats from '@components/Stats';
import Features from '@components/Features';
import Background from '@components/Background';
import { colors } from '@constants/colors';

const Container = styled.div`
  min-height: 100vh;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 2;
  background-color: rgba(255, 255, 255, 0.85);
`;

const MainContent = styled.main`
  padding-top: 80px; // Pour compenser le header fixe
`;

const CTASection = styled.section`
  background-color: white;
  color: ${colors.text.primary};
  text-align: center;
  padding: 4rem 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    font-weight: bold;
  }
`;

const CTAButton = styled.button`
  padding: 1rem 2.5rem;
  font-size: 1.25rem;
  font-weight: bold;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 4px 0 ${colors.primaryDark};
  transition: transform 0.1s;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 ${colors.primaryDark};
  }
`;

const Footer = styled.footer`  background-color: ${colors.background.light};
  padding: 4rem 2rem;
  text-align: center;
  color: ${colors.text.secondary};

  p {
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }
`;

const HomePage = () => {
  return (
    <Container>
      <Background />
      <ContentWrapper>
        <Header />
        <MainContent>
          <Hero />
          <Stats />
          <Features />
          <CTASection>
            <h2>Prêt à commencer votre voyage d'apprentissage ?</h2>
            <CTAButton>COMMENCER GRATUITEMENT</CTAButton>
          </CTASection>
          <Footer>
            <p>
              LearnLab © 2024. Notre mission est de rendre l'éducation accessible à tous.
              Rejoignez notre communauté de millions d'apprenants aujourd'hui.
            </p>
          </Footer>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

export default HomePage;

