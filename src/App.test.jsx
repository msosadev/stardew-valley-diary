// @vitest-environment jsdom

import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import bundles from './bundles.json';
import App from './App';
import { afterEach, beforeEach, expect, test } from 'vitest';

beforeEach(() => {
  localStorage.clear();
});

afterEach(() => {
  localStorage.clear();
});

test('renders the Stardew Valley bundle logger', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: 'Stardew Valley Item Logger' })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'All Seasons' })).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: Object.keys(bundles)[0] })
  ).toBeInTheDocument();
});
