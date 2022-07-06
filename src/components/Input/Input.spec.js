import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Input from './Input';

const mockedProps = {
  labelText: 'text label',
  dataTestId: 'testId',
  type: 'text',
  id: 'inputId',
  name: 'inputName',
};

describe('Input', () => {
  it('should have input', () => {
    render(<Input {...mockedProps} />);
    expect(screen.getByTestId('input-testId')).toBeInTheDocument();
  });
});
