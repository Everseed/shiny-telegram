import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Déclaration des traductions directement dans le code pour simplifier
const resources = {
  fr: {
    translation: {
      welcome: 'Bienvenue',
      language: 'Langue',
      login: 'Connexion',
      register: 'Inscription'
    }
  },
  en: {
    translation: {
      welcome: 'Welcome',
      language: 'Language',
      login: 'Login',
      register: 'Register'
    }
  },
  ar: {
    translation: {
      welcome: 'مرحباً',
      language: 'اللغة',
      login: 'تسجيل الدخول',
      register: 'تسجيل'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en', 'ar'],
    interpolation: {
      escapeValue: false,
    }
  });

export default i18n; 