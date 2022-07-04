import { configure, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

configure({
  testIdAttribute: 'data-qa',
});

const TestProvider = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

const customRender = (ui, options) =>
  render(ui, { wrapper: TestProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
