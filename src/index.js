import React from 'react';
import { createRoot } from 'react-dom/client';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import './index.css';
import App from './App';
import enTranslations from './locales/en.json';
import ptTranslations from './locales/pt.json';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      pt: { translation: ptTranslations }
    },
    lng: 'en',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);