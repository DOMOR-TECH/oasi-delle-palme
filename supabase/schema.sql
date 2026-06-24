-- Custodi 451 — schema Supabase (MVP verde) — modello "nome nell'utente"
-- Il nome del condòmino sta nei metadati dell'utente (auth) → niente tabella profili, niente problemi di RLS.
-- Nel DB sta solo: segnalazioni + foto.

-- ---------- SEGNALAZIONI ----------
create table if not exists public.segnalazioni (
  id uuid primary key default gen_random_uuid(),
  area text not null,
  servizio text not null,           -- id servizio dal capitolato (frontend)
  servizio_nome text not null,      -- denormalizzato per il dossier
  fonte text not null,              -- fonte contrattuale (es. "Capitolato HG, pag. 5")
  stato text not null check (stato in ('ok','problema')),
  nota text,
  foto_url text,
  autore_id uuid not null,          -- = auth.uid() (nessun FK a profiles)
  autore_nome text not null,
  created_at timestamptz default now()
);
create index if not exists segnalazioni_area_idx on public.segnalazioni(area);
create index if not exists segnalazioni_servizio_idx on public.segnalazioni(servizio);

-- ---------- RLS segnalazioni ----------
alter table public.segnalazioni enable row level security;
drop policy if exists segn_read on public.segnalazioni;
create policy segn_read on public.segnalazioni for select to authenticated using (true);
drop policy if exists segn_insert on public.segnalazioni;
create policy segn_insert on public.segnalazioni for insert to authenticated with check (auth.uid() = autore_id);

-- ---------- COMMENTI (thread di discussione sotto le segnalazioni) ----------
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

-- ---------- STORAGE: bucket foto ----------
insert into storage.buckets (id, name, public) values ('foto','foto', true)
on conflict (id) do nothing;
drop policy if exists foto_read on storage.objects;
create policy foto_read on storage.objects for select using (bucket_id = 'foto');
drop policy if exists foto_insert on storage.objects;
create policy foto_insert on storage.objects for insert to authenticated with check (bucket_id = 'foto');
