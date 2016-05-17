import crypto from 'crypto';
import ensure from 'easy-ensure';

const delimiter = '~';

export function enc(values, password) {
  ensure(password, 'password is required');

  if (!Array.isArray(values)) {
    values = [values];
  }

  const joined = values.join(delimiter);
  const cipher = crypto.createCipher('aes256', Buffer.from(password));
  return cipher.update(joined, 'utf8', 'base64') + cipher.final('base64');
}

export function dec(input, password) {
  ensure(input, 'input is required');
  ensure(password, 'password is required');

  const decipher = crypto.createDecipher('aes256', Buffer.from(password));
  const t = decipher.update(input, 'base64', 'utf8') + decipher.final('utf8');
  return t.split(delimiter);
}
