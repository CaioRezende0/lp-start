'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState('admin@dashboard.com');
  const [password, setPassword] = useState('admin123');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const callbackUrl = searchParams.get('callbackUrl') ?? '/admin';

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const body = (await response.json()) as { message?: string };
      setError(body.message ?? 'Falha ao autenticar.');
      setLoading(false);
      return;
    }

    router.push(callbackUrl);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h1 className="mb-2 text-2xl font-bold text-zinc-900">Acesso administrativo</h1>
      <p className="mb-6 text-sm text-zinc-500">Faça login para acessar o dashboard.</p>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700">E-mail</span>
        <input
          type="email"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>

      <label className="mb-4 block">
        <span className="mb-1 block text-sm font-medium text-zinc-700">Senha</span>
        <input
          type="password"
          required
          className="w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none ring-emerald-200 focus:ring"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {error && <p className="mb-4 rounded bg-red-50 p-2 text-sm text-red-600">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-emerald-600 px-4 py-2 font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
    </form>
  );
}
