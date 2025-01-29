import React from 'react';
import { render, screen } from '@testing-library/react';
import DashboardPage from '../DashboardPage';

describe('DashboardPage', () => {
  it('renders dashboard components', () => {
    render(<DashboardPage />);

    expect(screen.getByText('Progression')).toBeInTheDocument();
    expect(screen.getByText('Statistiques')).toBeInTheDocument();
    expect(screen.getByText('Prochaine leçon')).toBeInTheDocument();
    expect(screen.getByText('Mes cours')).toBeInTheDocument();
  });

  it('displays correct progress values', () => {
    render(<DashboardPage />);

    expect(screen.getByText('75% des objectifs atteints')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument(); // Leçons complétées
    expect(screen.getByText('5')).toBeInTheDocument(); // Jours consécutifs
  });

  it('displays course list', () => {
    render(<DashboardPage />);

    expect(screen.getByText('Bases de la langue')).toBeInTheDocument();
    expect(screen.getByText('Prononciation')).toBeInTheDocument();
    expect(screen.getByText('Vocabulaire')).toBeInTheDocument();
  });
}); 