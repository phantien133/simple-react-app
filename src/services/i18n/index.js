import i18next from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

import translationLoader from './translationLoader';

const namespaces = [
  'common',
  'login',
  'top page',
];

const i18nextOptions = {
  fallbackLng: 'en',
  ns: namespaces,
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
  react: {
    wait: true,
  },
};

i18next
  .use(languageDetector)
  .use(translationLoader)
  .use(reactI18nextModule)
  .init(i18nextOptions);

export default i18next;
