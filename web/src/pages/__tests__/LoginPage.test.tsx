import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from '../LoginPage';
import { sendMagicLink } from '@services/api';

// Mock du service API
jest.mock('@services/api', () => ({
  sendMagicLink: jest.fn()
}));

describe('LoginPage', () => {
  beforeEach(() => {
    (sendMagicLink as jest.Mock).mockClear();
  });

  it('renders login form', () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText('Votre email')).toBeInTheDocument();
    expect(screen.getByText('Envoyer le lien de connexion')).toBeInTheDocument();
  });

  it('handles form submission successfully', async () => {
    (sendMagicLink as jest.Mock).mockResolvedValueOnce({});

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Votre email');
    const submitButton = screen.getByText('Envoyer le lien de connexion');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(sendMagicLink).toHaveBeenCalledWith('test@example.com');
      expect(screen.getByText('Vérifiez votre email pour vous connecter !')).toBeInTheDocument();
    });
  });

  it('handles form submission error', async () => {
    (sendMagicLink as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText('Votre email');
    const submitButton = screen.getByText('Envoyer le lien de connexion');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Une erreur est survenue. Veuillez réessayer.')).toBeInTheDocument();
    });
  });
}); 