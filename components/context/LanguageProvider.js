import { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { LANGUAGES } from '../../constants';

export const defaultLocale = LANGUAGES.EN;
export const locales = [LANGUAGES.ES, LANGUAGES.EN];
export const LanguageContext = createContext([]);

export const LanguageProvider = ({ language, children }) => {
  const [locale, setLocale] = useState(language || defaultLocale);

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
  language: PropTypes.string
};
