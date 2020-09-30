import React from 'react';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { cleanup, render } from '@testing-library/react';
import combineReducers from './store/root-reducer';

import App from './App';

const store = createStore(combineReducers);
describe('App Component', () => {
  let UI: React.ReactElement;

  beforeEach(() => {
    UI = <Provider store={store}><App /></Provider>
  });
  afterEach(() => {
    cleanup();
  });
  
  it('should render App component', () => {
    const { getByText } = render(UI);
    expect(getByText('Square Root Form')).toBeInTheDocument();
  });
  
}) 