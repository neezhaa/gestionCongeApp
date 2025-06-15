import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import ar from '../lang/ar.json';
import fr from '../lang/fr.json';
import en from '../lang/en.json';

i18n.use(initReactI18next).init({
    resources: {
        fr: { translation: fr },
        ar: { translation: ar },
        en: { translation: en },
    },
    lng: 'fr', // default language
    fallbackLng: 'fr',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
