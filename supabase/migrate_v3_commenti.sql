-- Custodi 451 — aggiunge il thread di discussione sotto le segnalazioni
create table if not exists public.commenti (
  id uuid primary key default gen_random_uuid(),
  segnalazione_id uuid not null,
  autore_id uuid not null,
  autore_nome text not null,
  testo text not null,
  created_at timestamptz default now()
);
create index if not exists commenti_segn_idx on public.commenti(segnalazione_id);
alter table public.commenti enable row level security;
drop policy if exists commenti_read on public.commenti;
create policy commenti_read on public.commenti for select to authenticated using (true);
drop policy if exists commenti_insert on public.commenti;
create policy commenti_insert on public.commenti for insert to authenticated with check (auth.uid() = autore_id);
