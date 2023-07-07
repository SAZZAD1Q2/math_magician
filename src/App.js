import React from 'react';
// eslint-disable-next-line import/extensions
import Calculator from './components/calculator';
import Quote from './components/quotes';

function App() {
  return (
    <div className="App">
      <Calculator />
      <div className="content">
        <Quote />
      </div>
    </div>
  );
}

export default App;
