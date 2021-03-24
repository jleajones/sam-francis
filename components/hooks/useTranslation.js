import { useContext } from 'react';

import { LanguageContext, defaultLocale } from '../context/LanguageProvider';
import Lang from '../../lang';

export default function useTranslation() {
  const [locale] = useContext(LanguageContext);

  function t(key) {
    if (!Lang[key][locale]) {
      console.warn(`No string '${key}' for locale '${locale}'`);
    }

    return Lang[key][locale] || Lang[key][defaultLocale] || '';
  }

  return { t, locale };
}
