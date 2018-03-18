const { I18n } = require('react-i18nify');


// import object of language
import EnglishLangObj from './En';
import FrenshLangObj from './Fr';

I18n.setLocale('fr');
// give to I18n object definition of language
I18n.setTranslations({
  en: Object.assign({}, EnglishLangObj),
  fr: Object.assign({}, FrenshLangObj)
});

// we only need one method from I18n to translate string
export default function(keyToTranslate: string) {
  return I18n.t(keyToTranslate);
}
