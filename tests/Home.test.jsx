import { describe, it, expect } from 'vitest';
import Home from '../src/components/Home';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter, Route, createMemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import routes from '../src/routes';
import { RouterProvider } from 'react-router-dom';

describe('Home Component Test Suite', () => {

  it('renders the correct button', () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/']});
    render (<RouterProvider router={router} />);

    expect(screen.getByRole("button").textContent).toMatch(/find a product now/i);
  });

  it('Nav link to shop should render shop page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/']});
    render (<RouterProvider router={router} />);

    const link = screen.getByText(/shop/i);
    await userEvent.click(link);
    const heading = await screen.findByRole('heading');
    expect(heading).toHaveTextContent(/this is the shop page!/i);
    // expect(screen.getByText(/shop here/i)).toBeInTheDocument();
    // expect(screen.getByText(/find a product now/i)).toBeInTheDocument();
  });

  it('Nav link to shop should render shop page with fetched products', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/']});
    render (<RouterProvider router={router} />);

    const link = screen.getByText(/shop/i);
    await userEvent.click(link);
    // const awaitedElem = await  screen.findByText(/this is the shop page!/i);
    const awaitedElem = await  screen.findByText(/Fjallraven/i);
    expect(awaitedElem).toBeInTheDocument();
  });
});
