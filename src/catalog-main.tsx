import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CatalogPage from './CatalogPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CatalogPage />
  </StrictMode>,
);

