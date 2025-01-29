import React, { useState } from 'react';
import styled from 'styled-components';
import { sendMagicLink } from '@services/api';
import { colors } from '@constants/colors';

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background-color: ${colors.background.light};
`;

const LoginForm = styled.form`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const Title = styled.h1`
  color: ${colors.text.primary};
  margin-bottom: 2rem;
  text-align: center;
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

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: ${colors.primary};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 0 ${colors.primaryDark};
  transition: transform 0.1s;

  &:hover {
    transform: translateY(2px);
    box-shadow: 0 2px 0 ${colors.primaryDark};
  }
`;

const Message = styled.p<{ error?: boolean }>`
  color: ${props => props.error ? 'red' : colors.primary};
  text-align: center;
  margin-top: 1rem;
`;

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendMagicLink(email);
      setMessage('Vérifiez votre email pour vous connecter !');
      setError('');
    } catch (err) {
      setError('Une erreur est survenue. Veuillez réessayer.');
      setMessage('');
    }
  };

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Title>Connexion</Title>
        <Input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button type="submit">Envoyer le lien de connexion</Button>
        {message && <Message>{message}</Message>}
        {error && <Message error>{error}</Message>}
      </LoginForm>
    </Container>
  );
};

export default LoginPage; 