import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../../components/Button/Button';

describe('Button', () => {
  it('renders a text', () => {
    render(<Button>Test</Button>);
    const buttonElement = screen.getByRole('button');

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent('Test');
  });
});
