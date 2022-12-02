import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { AppDispatchContext, AppStateContext } from '../context';
import { BrowserRouter } from 'react-router-dom';
import AppErrorBoundary from './ErrorBoundary';
import { mockData } from "./mockData";

function render(ui, { theme = 'light', ...options } = {}) {
  /** Wrapper For Test Case. Wrap All Test Case With Error Boundary ANd Context */
  const Wrapper = ({ children }) => (
    <AppErrorBoundary><BrowserRouter><AppDispatchContext.Provider value={jest.fn((value) => { })} > <AppStateContext.Provider value={mockData}>{children}</AppStateContext.Provider></AppDispatchContext.Provider></BrowserRouter></AppErrorBoundary>
  );

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react';
// override React Testing Library's render with our own
export { render };
