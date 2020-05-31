import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { reactRef } from '@mxro/react-components';
import App from './App';

test('Check App component render', () => {
  render(<App />);
  expect(screen.getByText('Hello from component').textContent).toBe(
    'Hello from component'
  );
  expect(screen.getByText('homepage', { exact: false })).toBeVisible();
});

test('Ensure React singleton', () => {
  expect(reactRef).toBe(React);
});
