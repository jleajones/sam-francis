import { setCookie, parseCookies } from 'nookies';

export const setLanguageCookie = (ctx, language) => {
  setCookie(ctx, 'language', language, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/'
  });
};

export const getLanguageCookie = (ctx) => {
  return parseCookies(ctx).language;
};
