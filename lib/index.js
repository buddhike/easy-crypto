import _rng from './rng';
const secret = require('./secret');

export const rng = _rng;
export const enc = secret.enc;
export const dec = secret.dec;
