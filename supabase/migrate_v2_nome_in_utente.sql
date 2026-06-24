-- Custodi 451 — migrazione al modello "nome nell'utente"
-- Esegui UNA volta nel SQL Editor del DB già creato.
-- Toglie il vincolo verso profiles (così le segnalazioni si salvano senza riga profilo) e assicura le regole.

alter table public.segnalazioni drop constraint if exists segnalazioni_autore_id_fkey;

alter table public.segnalazioni enable row level security;
drop policy if exists segn_read on public.segnalazioni;
drop policy if exists segn_insert on public.segnalazioni;
create policy segn_read on public.segnalazioni for select to authenticated using (true);
create policy segn_insert on public.segnalazioni for insert to authenticated with check (auth.uid() = autore_id);
