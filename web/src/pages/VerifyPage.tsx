import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { verifyMagicLink } from '@services/api';
import { colors } from '@constants/colors';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.background.light};
`;

const Card = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  color: ${colors.text.primary};
  margin-bottom: 1rem;
`;

const Message = styled.p<{ error?: boolean }>`
  color: ${props => props.error ? 'red' : colors.text.secondary};
  margin-bottom: 2rem;
`;

const Spinner = styled.div`
  border: 4px solid ${colors.background.light};
  border-top: 4px solid ${colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 0 auto;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [message, setMessage] = useState('Vérification de votre lien...');

  useEffect(() => {
    const token = searchParams.get('token');
    
    if (!token) {
      setStatus('error');
      setMessage('Lien invalide. Veuillez réessayer.');
      return;
    }

    const verifyToken = async () => {
      try {
        const response = await verifyMagicLink(token);
        const user = response.data;
        
        setStatus('success');
        setMessage('Connexion réussie !');
        
        // Stocker les informations utilisateur
        localStorage.setItem('user', JSON.stringify(user));
        
        // Rediriger en fonction du statut d'onboarding
        setTimeout(() => {
          if (!user.onboardingCompleted) {
            navigate('/onboarding');
          } else {
            navigate('/dashboard');
          }
        }, 1500);
      } catch (error) {
        setStatus('error');
        setMessage('Le lien est invalide ou a expiré. Veuillez réessayer.');
      }
    };

    verifyToken();
  }, [searchParams, navigate]);

  return (
    <Container>
      <Card>
        <Title>Vérification</Title>
        {status === 'loading' && <Spinner />}
        <Message error={status === 'error'}>{message}</Message>
      </Card>
    </Container>
  );
};

export default VerifyPage; 