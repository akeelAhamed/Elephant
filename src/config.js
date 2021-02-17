/**
 * App config variable
 */
export const APP = {
  base : window.location.origin+'/',
  url  : (window.location.href).replace(/\/$/, '')+'/',
};

Object.freeze(APP);