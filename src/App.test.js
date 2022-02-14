import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders sign in', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByText(/Sign in/g)).toBeInTheDocument();

});
test('get notes list', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  fireEvent.click(screen.getByText("Let's Go"));

  await screen.findByText('notes-list-test');

  expect(screen.getByText('notes-list-test')).toBeInTheDocument();
});

