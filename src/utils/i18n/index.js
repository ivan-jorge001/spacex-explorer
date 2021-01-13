import i18n from 'i18n-js';
import english from './languages/en.json';


i18n.translations = {
  en: english,
};
i18n.fallbacks = true;
i18n.locale = 'en';

export default i18n;