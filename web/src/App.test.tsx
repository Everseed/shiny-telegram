import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { I18nextProvider } from 'react-i18next';

test('renders learn react link', () => {
  render(
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
