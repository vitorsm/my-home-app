/* eslint-disable no-prototype-builtins */
import { Platform, NativeModules } from 'react-native';
import I18n from 'i18n-js';
import pt from './ptBR';
import en from './en';

const normalizeTranslate = {
  en_US: 'en_US',
  pt_BR: 'pt_BR',
  en: 'en_US',
  pt_US: 'pt_BR',
  es_US: 'es_ES',
  es: 'es',
};

const getLanguageByDevice = () => (Platform.OS === 'ios'
  ? NativeModules.SettingsManager.settings.AppleLocale
  : NativeModules.I18nManager.localeIdentifier);

I18n.translations = {
  pt_BR: pt,
  en,
};

const setLanguageToI18n = async () => {
  const language = getLanguageByDevice();
  const translateNormalize = normalizeTranslate[language];

  const hasLanguage = I18n.translations.hasOwnProperty(translateNormalize);

  if (hasLanguage) {
    I18n.locale = translateNormalize;
  } else {
    I18n.defaultLocale = 'pt_BR';
  }
};

setLanguageToI18n();

export const translate = (key, params) => I18n.t(key, params);

export default translate;
