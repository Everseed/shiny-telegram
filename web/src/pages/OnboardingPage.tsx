import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@constants/colors';

const Container = styled.div`
  min-height: 100vh;
  background-color: ${colors.background.light};
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Step = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  color: ${colors.text.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const Progress = styled.div`
  background: ${colors.background.light};
  height: 8px;
  border-radius: 4px;
  margin-bottom: 2rem;
  overflow: hidden;
`;

const ProgressBar = styled.div<{ progress: number }>`
  background: ${colors.primary};
  height: 100%;
  width: ${props => props.progress}%;
  transition: width 0.3s ease;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${colors.text.light};
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${colors.text.light};
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1rem;
  background: white;

  &:focus {
    border-color: ${colors.primary};
    outline: none;
  }
`;

const Button = styled.button<{ secondary?: boolean }>`
  padding: 1rem 2rem;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.secondary ? 'white' : colors.primary};
  color: ${props => props.secondary ? colors.primary : 'white'};
  box-shadow: ${props => props.secondary ? 'none' : `0 4px 0 ${colors.primaryDark}`};
  margin: 0 0.5rem;

  &:hover {
    transform: ${props => props.secondary ? 'none' : 'translateY(2px)'};
    box-shadow: ${props => props.secondary ? 'none' : `0 2px 0 ${colors.primaryDark}`};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const OnboardingPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    interests: [],
    goals: '',
  });

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Sauvegarder les données et rediriger vers le dashboard
      navigate('/dashboard');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <Container>
      <Content>
        <Progress>
          <ProgressBar progress={progress} />
        </Progress>
        
        {step === 1 && (
          <Step>
            <Title>Bienvenue ! Commençons par les bases</Title>
            <Input
              type="text"
              placeholder="Votre nom"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Select
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
            >
              <option value="">Sélectionnez votre niveau</option>
              <option value="beginner">Débutant</option>
              <option value="intermediate">Intermédiaire</option>
              <option value="advanced">Avancé</option>
            </Select>
          </Step>
        )}

        {step === 2 && (
          <Step>
            <Title>Vos centres d'intérêt</Title>
            {/* Ajouter des checkboxes pour les intérêts */}
          </Step>
        )}

        {step === 3 && (
          <Step>
            <Title>Vos objectifs</Title>
            <Input
              as="textarea"
              placeholder="Quels sont vos objectifs d'apprentissage ?"
              value={formData.goals}
              onChange={(e) => setFormData({ ...formData, goals: e.target.value })}
            />
          </Step>
        )}

        <ButtonGroup>
          {step > 1 && (
            <Button secondary onClick={handleBack}>Retour</Button>
          )}
          <Button onClick={handleNext}>
            {step === totalSteps ? 'Terminer' : 'Suivant'}
          </Button>
        </ButtonGroup>
      </Content>
    </Container>
  );
};

export default OnboardingPage; 