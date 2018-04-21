import * as _ from 'lodash';
const { I18n } = require('react-i18nify');

// import object of language
import EnglishLangObj from './En';
import FrenshLangObj from './Fr';

// give to I18n object definition of language
I18n.setTranslations({
  en: Object.assign({}, EnglishLangObj),
  fr: Object.assign({}, FrenshLangObj)
});

function translateNumber(oneNumber: number) {
  return oneNumber.toLocaleString(I18n._locale);
  console.log(I18n._locale);
}

// we only need one method from I18n to translate string
export default function(keyOrNumberToTranslate: string | number) {
  if (_.isString(keyOrNumberToTranslate)) {
    return I18n.t(keyOrNumberToTranslate);
  } else if (_.isNumber(keyOrNumberToTranslate)) {
    return translateNumber(<number>keyOrNumberToTranslate);
  }
}
