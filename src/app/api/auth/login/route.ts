import { NextResponse } from 'next/server';
import { authenticateUser, createSessionToken } from '@/lib/auth';

export async function POST(request: Request) {
  const body = (await request.json()) as { email?: string; password?: string };

  const user = authenticateUser(body.email ?? '', body.password ?? '');

  if (!user) {
    return NextResponse.json({ message: 'Credenciais inválidas.' }, { status: 401 });
  }

  const token = createSessionToken(user);

  const response = NextResponse.json({ ok: true });
  response.cookies.set('admin_session', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: 60 * 60 * 8,
  });

  return response;
}
