import React from 'react';
import { render, screen } from '@testing-library/react';

import Modal from '../../components/Modal/Modal';

describe('Modal', () => {
  it('renders a Modal', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'modal');

    render(<Modal isOpen />, { container: document.body.appendChild(root) });
    const modalElement = screen.getByTestId('modal-element');

    expect(modalElement).toBeInTheDocument();
  });
  it('not render a Modal', () => {
    const root = document.createElement('div');
    root.setAttribute('id', 'modal');

    render(<Modal isOpen={false} />, { container: document.body.appendChild(root) });
    const modalElement = screen.queryByTestId('modal-element');

    expect(modalElement).not.toBeInTheDocument();
  });
});
