import crypto from 'crypto';

export default function(size, encoding) {
  size = size || 16;
  const buf = crypto.randomBytes(size);
  return buf.toString(encoding || 'hex');
}
