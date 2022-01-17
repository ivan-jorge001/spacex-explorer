import i18n from 'i18n-js';
import english from './languages/en.json';
import spanish from './languages/es.json';

i18n.translations = {
  en: english,
  es: spanish,
};

i18n.fallbacks = true;
i18n.locale = 'en';

export default i18n;