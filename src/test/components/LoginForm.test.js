import React from 'react';
import { render, screen } from '@testing-library/react';

import LoginForm from '../../components/LoginForm/LoginForm';

beforeEach(() => {
  render(<LoginForm />);
});

describe('LoginForm', () => {
  it('renders', () => {
    const titleElement = screen.getByRole('heading');

    expect(titleElement).toBeInTheDocument();
  });
});
