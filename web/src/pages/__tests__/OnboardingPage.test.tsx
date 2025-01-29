import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import OnboardingPage from '../OnboardingPage';

describe('OnboardingPage', () => {
  it('renders first step initially', () => {
    render(
      <BrowserRouter>
        <OnboardingPage />
      </BrowserRouter>
    );

    expect(screen.getByText('Bienvenue ! Commençons par les bases')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Votre nom')).toBeInTheDocument();
  });

  it('navigates through steps', () => {
    render(
      <BrowserRouter>
        <OnboardingPage />
      </BrowserRouter>
    );

    // Premier pas
    fireEvent.click(screen.getByText('Suivant'));
    expect(screen.getByText('Vos centres d'intérêt')).toBeInTheDocument();

    // Deuxième pas
    fireEvent.click(screen.getByText('Suivant'));
    expect(screen.getByText('Vos objectifs')).toBeInTheDocument();

    // Retour
    fireEvent.click(screen.getByText('Retour'));
    expect(screen.getByText('Vos centres d'intérêt')).toBeInTheDocument();
  });

  it('updates form data', () => {
    render(
      <BrowserRouter>
        <OnboardingPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText('Votre nom');
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(nameInput).toHaveValue('John Doe');

    const levelSelect = screen.getByRole('combobox');
    fireEvent.change(levelSelect, { target: { value: 'beginner' } });
    expect(levelSelect).toHaveValue('beginner');
  });
}); 