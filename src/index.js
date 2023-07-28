import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import i18next from "i18next"
// import { I18nextProvider } from 'react-i18next';
import global_en from "./translations/en/global.json"
import global_es from "./translations/es/global.json"
import translation from "./translations/en/global.json"


// i18next.init({
//   interpolation: { escapeValue: true },
//   lng: "en",
//   resource: {
//     en: {
//       global: global_en
//     },
//     es: {
//       global: global_es
//     }
//   }
// }
// )

i18next.init({
  lng: 'en', // Default language
  resources: {  
    en: {
      translation: translation
    },
    // Add more languages and their translations as needed
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
