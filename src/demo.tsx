import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Define your React component
const MyComponent = () => (
  <div>
    <h1>Hello, World!</h1>
    <p>This is a server-rendered React component.</p>
  </div>
);

// Render the component to an HTML string
const html = ReactDOMServer.renderToString(<MyComponent />);

console.log(html); // This will output the HTML string
