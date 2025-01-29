import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import VerifyPage from '../VerifyPage';
import { verifyMagicLink } from '@services/api';

// Mock des hooks de react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [new URLSearchParams({ token: 'test-token' })],
  useNavigate: () => jest.fn()
}));

// Mock du service API
jest.mock('@services/api', () => ({
  verifyMagicLink: jest.fn()
}));

describe('VerifyPage', () => {
  beforeEach(() => {
    (verifyMagicLink as jest.Mock).mockClear();
  });

  it('shows loading state initially', () => {
    render(
      <BrowserRouter>
        <VerifyPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Vérification de votre lien...')).toBeInTheDocument();
  });

  it('handles successful verification', async () => {
    (verifyMagicLink as jest.Mock).mockResolvedValueOnce({ data: { id: 1, email: 'test@example.com' } });

    render(
      <BrowserRouter>
        <VerifyPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Connexion réussie !')).toBeInTheDocument();
    });
  });

  it('handles verification error', async () => {
    (verifyMagicLink as jest.Mock).mockRejectedValueOnce(new Error('Invalid token'));

    render(
      <BrowserRouter>
        <VerifyPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Le lien est invalide ou a expiré. Veuillez réessayer.')).toBeInTheDocument();
    });
  });
}); 