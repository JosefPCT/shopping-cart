import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { createMemoryRouter } from 'react-router-dom';
import routes from '../src/routes';
import userEvent from '@testing-library/user-event';

describe('Shop Component Test Suite', () => {

  it('Shop page links to home correctly', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});
    render (<RouterProvider router={router} />);

    const link = screen.getByText(/home/i);
    await userEvent.click(link);
    expect(screen.getByText(/find a product now/i)).toBeInTheDocument();
  });

  it('Renders fetched products', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});
    render (<RouterProvider router={router} />);

    const waitedElement = await screen.findByText(/Fjallraven/i);
    expect(waitedElement).toBeInTheDocument();
  });

  it('When clicking add to cart button, shows the correct number of items', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});
    render (<RouterProvider router={router} />);

    const buttons = await screen.findAllByText(/add to cart/i);
    const inputs = await screen.findAllByTestId('my-input');

    await userEvent.type(inputs[0], '1');
    await userEvent.click(buttons[0]);
    const span = await screen.findByTestId('numCartItems');
    // const spanel = screen.getByRole('span');
    expect(span).toHaveTextContent('1');
  })

  it('When clicking add to cart button, shows the correct number of items if value inputted is more than 1', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});
    render (<RouterProvider router={router} />);

    const buttons = await screen.findAllByText(/add to cart/i);
    const inputs = await screen.findAllByTestId('my-input');

    await userEvent.type(inputs[0], '3');
    await userEvent.click(buttons[0]);
    const span = await screen.findByTestId('numCartItems');
    // const spanel = screen.getByRole('span');
    expect(span).toHaveTextContent('3');
  })

  it('When clicking cart link, renders cart page', async () => {
    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});  
    render (<RouterProvider router={router} />);

    const cartLink = screen.getByText(/Cart/);
    const buttons = await screen.findAllByText(/add to cart/i);
    const inputs = await screen.findAllByTestId('my-input');

    await userEvent.type(inputs[1], '1');
    await userEvent.click(buttons[1]);
    await userEvent.click(cartLink);

    const heading = await screen.findAllByRole("heading");
    expect(heading[0]).toHaveTextContent(/This is the cart page!/i);
  });

  it('When adding cart items, renders the cart item in the cart page', async () => {
    // Have some user event to add to cart
    // Check cart page if rendered the cart items

    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});  
    render (<RouterProvider router={router} />);

    const cartLink = screen.getByText(/Cart/);
    const buttons = await screen.findAllByText(/add to cart/i);
    const inputs = await screen.findAllByTestId('my-input');    

    await userEvent.type(inputs[1], '1');
    await userEvent.type(inputs[0], '1');
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await userEvent.click(cartLink);

    const listitems = await screen.findAllByRole('listitem');
    expect(listitems).toHaveLength(2);

    // const list = await screen.findByRole('list');
    // expect(list).toBeInTheDocument();
  
  });

  it('When removing cart items, must not have a list item', async () => {
    // Have some user event to add to cart
    // Check cart page if rendered the cart items

    const router = createMemoryRouter(routes, { initialEntries: ['/shop']});  
    render (<RouterProvider router={router} />);

    const cartLink = screen.getByText(/Cart/);
    const buttons = await screen.findAllByText(/add to cart/i);
    const inputs = await screen.findAllByTestId('my-input');    

    await userEvent.type(inputs[1], '1');
    await userEvent.type(inputs[0], '1');
    await userEvent.click(buttons[0]);
    await userEvent.click(buttons[1]);
    await userEvent.click(cartLink);

    const listitems = await screen.findAllByRole('listitem');
    expect(listitems).toHaveLength(2);

    const removeItem = await screen.findAllByText(/remove item/i);

    await userEvent.click(removeItem[0]);

    const newListitems = await screen.findAllByRole('listitem');
    expect(newListitems).toHaveLength(1);



    // const list = await screen.findByRole('list');
    // expect(list).toBeInTheDocument();
  
  });
});