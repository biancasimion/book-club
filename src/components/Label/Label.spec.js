import React from 'react';
import { render, screen } from '../../tests/test-utils';
import Label from './Label';

const mockedProps = {
  labelText: 'text label',
  dataTestId: 'testId',
  htmlFor: 'inputId',
};

describe('Label', () => {
  it('should have a label', () => {
    render(<Label {...mockedProps} />);
    expect(screen.getByTestId('testId')).toBeInTheDocument();
  });
});
