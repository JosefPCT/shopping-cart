import { describe, it, expect } from 'vitest';
import Home from './components/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';


describe('Home Component Test Suite', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });

  it('renders', () => {
    render(
        <BrowserRouter>
            <Home title="React" />
        </BrowserRouter>);
    screen.debug();
  });
});