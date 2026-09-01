import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Developer credit banner in console
console.log(
  '%c⚡ Developed and Managed By rudra01.is-a.dev',
  'color: #facc15; font-size: 14px; font-weight: 800; background: #09090b; padding: 10px 18px; border: 2px solid #facc15; border-radius: 8px; font-family: monospace; text-shadow: 0 0 8px rgba(250, 204, 21, 0.4);'
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
