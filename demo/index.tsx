import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';


const App = () => {
  return (
    <h1>
      Hello mundooooo!
    </h1>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />)