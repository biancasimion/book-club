import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Button from './Button';

const mockedProps = {
  text: 'test button',
  dataTestId: 'testId',
  type: 'button',
};

describe('Button', () => {
  it('should show the button', () => {
    render(<Button {...mockedProps} />);
    expect(screen.getByTestId('testId')).toBeInTheDocument();
  });
});
