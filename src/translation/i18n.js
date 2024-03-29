import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en_translation from './en/global.json'
import pl_translation from './pl/global.json'

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: en_translation
            },
            pl: {
                translation: pl_translation
            },
            // es: {
            //     translation: {
            //         description: {
            //             part1: 'espaniol',
            //             part2: 'espaniol'
            //         }
            //     }
            // },
            // de: {
            //     translation: {
            //         description: {
            //             part1: 'Niemiecki',
            //             part2: 'Niemiecki'
            //         }
            //     }
            // }
        }
    });

export default i18n;

