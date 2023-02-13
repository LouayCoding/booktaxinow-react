import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import nl from './locales/nl'
import en from './locales/en'



const resources = {
    nl: {
        translation: nl
    },
    en: {
        translation: en
    }
}


i18n.use(initReactI18next)
.init({
    resources,
    lng: 'nl',
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n;