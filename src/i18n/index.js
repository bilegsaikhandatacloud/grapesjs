/**
 * You can customize the initial state of the module from the editor initialization
 * ```js
 * const editor = grapesjs.init({
 *  i18n: {
 *    locale: 'en',
 *    messages: {
 *      en: {
 *       hello: 'Hello',
 *      },
 *      ...
 *    }
 *  }
 * })
 * ```
 *
 * Once the editor is instantiated you can use its API. Before using these methods you should get the module from the instance
 *
 * ```js
 * const i18n = editor.I18n;
 * ```
 *
 * @module I18n
 */
import { keys } from 'underscore';
import messages from './messages';

export default () => {
  const { language } = window.navigator || {};
  const localeDef = language ? language.split('-')[0] : 'en';
  const config = {
    locale: localeDef,
    localeFallback: 'en',
    counter: 'n',
    messages
  };

  return {
    name: 'I18n',

    config,

    /**
     * Get module configurations
     * @returns {Object} Configuration object
     */
    getConfig() {
      return this.config;
    },

    /**
     * Update current locale
     * @param {String} locale Locale value
     * @returns {this}
     * @example
     * i18n.setLocale('it');
     */
    setLocale(locale) {
      this.config.locale = locale;
      return this;
    },

    /**
     * Get current locale
     * @returns {String} Current locale value
     */
    getLocale() {
      return this.config.locale;
    },

    /**
     * Initialize module
     * @param {Object} config Configurations
     * @private
     */
    init(opts = {}) {
      this.em = opts.em;
      return this;
    },

    /**
     * Get all messages
     * @param {String} [lang] Specify the language of messages to return
     * @returns {Object}
     * @example
     * i18n.getMessages();
     * // -> { en: { hello: '...' }, ... }
     * i18n.getMessages('en');
     * // -> { hello: '...' }
     */
    getMessages(lang) {
      const { messages } = this.config;
      return lang ? messages[lang] : messages;
    },

    /**
     * Set new set of messages
     * @param {Object} msg Set of messages
     * @returns {this}
     * @example
     * i18n.getMessages();
     * // -> { en: { msg1: 'Msg 1', msg2: 'Msg 2', } }
     * i18n.setMessages({ en: { msg2: 'Msg 2 up', msg3: 'Msg 3', } });
     * // Set replaced
     * i18n.getMessages();
     * // -> { en: { msg2: 'Msg 2 up', msg3: 'Msg 3', } }
     */
    setMessages(msg) {
      this.config.messages = msg;
      return this;
    },

    /**
     * Update messages
     * @param {Object} msg Set of messages to add
     * @returns {this}
     * @example
     * i18n.getMessages();
     * // -> { en: { msg1: 'Msg 1', msg2: 'Msg 2', } }
     * i18n.addMessages({ en: { msg2: 'Msg 2 up', msg3: 'Msg 3', } });
     * // Set updated
     * i18n.getMessages();
     * // -> { en: { msg1: 'Msg 1', msg2: 'Msg 2 up', msg3: 'Msg 3', } }
     */
    addMessages(msg) {
      const { messages } = this.config;
      keys(msg).forEach(lang => {
        const langSet = msg[lang];
        const currentSet = messages[lang];

        if (!currentSet) {
          messages[lang] = langSet;
        } else {
          keys(langSet).forEach(key => {
            currentSet[key] = langSet[key];
          });
        }
      });
      return this;
    },

    /**
     * Translate the locale message
     * @param {String} key Label to translate
     * @param {Object} [params] Params for the translation
     * @param {Object} [opts] Options for the translation
     * @returns {String}
     * @example
     * obj.setMessages({
     *  en: { msg: 'Msg', msg2: 'Msg {test}'},
     *  it: { msg2: 'Msg {test} it'},
     * });
     * obj.t('msg');
     * // -> outputs `Msg`
     * obj.t('msg2', { test: 'hello' });  // use params
     * // -> outputs `Msg hello`
     * obj.t('msg2', { test: 'hello' }, { l: 'it' });  // custom local
     * // -> outputs `Msg hello it`
     */
    t(key, params, opts = {}) {
      const { em } = this;
      const param = params || {};
      const locale = opts.l || this.getLocale();
      const msgSet = this.getMessages(locale) || {};
      const reg = new RegExp(`\{([\\w\\d-]*)\}`, 'g');
      let result = msgSet[key];
      !result && em && em.logWarning(`'${key}' i18n key not found`);
      result = result
        ? result.replace(reg, (m, val) => param[val] || '').trim()
        : result;

      return result;
    }
  };
};
