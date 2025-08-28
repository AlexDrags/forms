import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
const domRoot = document.getElementById('root');

if (domRoot) createRoot(domRoot).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
