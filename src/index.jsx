import ReactDOM from 'react-dom';
import React from 'react';

function App() {
  const name = 'mihye';

  return <h1>Hello {name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<App />);
