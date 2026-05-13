import { cookies } from 'next/headers';
import { verifySessionToken } from '@/lib/auth';
import { LogoutButton } from '../components/admin/LogoutButton';

const cards = [
  { title: 'Novos usuários', value: '128', delta: '+14%' },
  { title: 'Vendas no mês', value: 'R$ 84.320', delta: '+9%' },
  { title: 'Tickets pendentes', value: '17', delta: '-3%' },
  { title: 'Uptime', value: '99,98%', delta: '+0,01%' },
];

export default async function AdminPage() {
  const token = (await cookies()).get('admin_session')?.value;
  const user = verifySessionToken(token);

  return (
    <main className="min-h-screen bg-zinc-100">
      <header className="flex items-center justify-between border-b bg-white px-6 py-4">
        <div>
          <p className="text-sm text-zinc-500">Dashboard administrativo</p>
          <h1 className="text-xl font-bold text-zinc-900">Bem-vindo, {user?.name ?? 'Administrador'}</h1>
        </div>
        <LogoutButton />
      </header>

      <section className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => (
          <article key={card.title} className="rounded-xl bg-white p-5 shadow-sm">
            <p className="text-sm text-zinc-500">{card.title}</p>
            <p className="mt-2 text-2xl font-bold text-zinc-900">{card.value}</p>
            <p className="mt-1 text-sm text-emerald-600">{card.delta}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
