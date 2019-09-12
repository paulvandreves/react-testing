import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// What kind of testing framwork or assertion libirary is this test based on? 

// Jest test runner

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  expect(div.innerHTML).toContain('Hi there!'); 
  ReactDOM.unmountComponentAtNode(div);
});
