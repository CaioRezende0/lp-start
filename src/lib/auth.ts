import crypto from 'node:crypto';

const SESSION_SECRET = process.env.SESSION_SECRET ?? 'troque-esta-chave-em-producao';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'admin@dashboard.com';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? 'admin123';

export type AdminUser = {
  id: string;
  name: string;
  email: string;
  role: 'admin';
};

type SessionPayload = {
  sub: string;
  name: string;
  email: string;
  role: 'admin';
  exp: number;
};

const TOKEN_TTL_SECONDS = 60 * 60 * 8;

function base64UrlEncode(value: string) {
  return Buffer.from(value)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function base64UrlDecode(value: string) {
  const base64 = value.replace(/-/g, '+').replace(/_/g, '/');
  const padded = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=');
  return Buffer.from(padded, 'base64').toString('utf-8');
}

function sign(payloadBase64: string) {
  return crypto.createHmac('sha256', SESSION_SECRET).update(payloadBase64).digest('hex');
}

export function authenticateUser(email: string, password: string): AdminUser | null {
  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) return null;

  return {
    id: 'admin-1',
    name: 'Administrador',
    email,
    role: 'admin',
  };
}

export function createSessionToken(user: AdminUser) {
  const payload: SessionPayload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
    exp: Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS,
  };

  const encoded = base64UrlEncode(JSON.stringify(payload));
  const signature = sign(encoded);

  return `${encoded}.${signature}`;
}

export function verifySessionToken(token: string | undefined): AdminUser | null {
  if (!token || !token.includes('.')) return null;
  const [encoded, signature] = token.split('.');

  if (!encoded || !signature) return null;

  const expected = sign(encoded);
  if (!crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected))) return null;

  try {
    const payload = JSON.parse(base64UrlDecode(encoded)) as SessionPayload;

    if (payload.exp <= Math.floor(Date.now() / 1000)) return null;

    return {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      role: payload.role,
    };
  } catch {
    return null;
  }
}
