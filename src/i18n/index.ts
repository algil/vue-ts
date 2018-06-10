import Vue from 'vue';
import VueI18n from 'vue-i18n';
import enUS from './en-US';
import esES from './es-ES';

Vue.use(VueI18n);

const messages = {
  'en-US': enUS,
  'es-ES': esES,
};

const i18n = new VueI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
});

export default i18n;
