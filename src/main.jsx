// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { CardProvider } from "./CardContext"; 
// import "./index.css"; 

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <CardProvider> 
//       <App />
//     </CardProvider>
//   </React.StrictMode>
// );
 
import React from 'react';
import ReactDOM from 'react-dom/client';
import RecipeApp from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecipeApp />
  </React.StrictMode>
);