# Custodi 451 — MVP (verde)

App web (PWA) di controllo civico del capitolato verde. Ogni condòmino verifica il *fatto/non-fatto* delle lavorazioni dovute; ogni segnalazione è firmata, con foto e data; la mappa del complesso si colora; il dossier è pronto per legale/assemblea.

## Stato
**MVP funzionante**, dati salvati in locale (localStorage) — niente account ancora. Verificato end-to-end (login → segnalazione con foto → bacheca → dossier).

## File
- `index.html` — l'app (3 viste: La mia zona · Bacheca · Dossier)
- `capitolato-verde.js` — il seme: capitolato verde VERBATIM dal contratto HG (ogni voce cita la fonte). **Non aggiungere voci senza fonte contrattuale.**
- `manifest.webmanifest`, `icon.svg`, `sw.js` — per "installa in home" e uso offline base

## Come provarla in locale
```
cd ~/CLAUDE/VC451/App/custodi451
python3 -m http.server 8451
# poi apri http://localhost:8451 nel browser del telefono (stessa rete) o del computer
```
(NB: va servita via http, non aprendo il file: il service worker e il caricamento del capitolato richiedono un server.)

## Cosa fa già
- Login col nome del condòmino (placeholder dell'identità verificata).
- "La mia zona": scegli l'area, vedi cosa è dovuto **oggi** secondo capitolato, con la fonte (es. "Capitolato HG, pag. 5"). Tocca *Segnala* → Fatto / Problema + foto + nota → salvato e firmato.
- "Bacheca": mappa di tutte le aree, verde/rosso secondo le segnalazioni reali.
- "Dossier": ogni inadempienza = *dovuto* (capitolato) vs *constatato* (segnalazioni firmate con foto/date).

## Prossimi passi (build vera)
1. **Supabase**: sostituire localStorage con DB Postgres + Auth (OTP email/telefono = condòmino verificato) + Storage foto + Row-Level Security.
2. **Hosting**: pubblicare la cartella su Vercel/Netlify/Cloudflare Pages (statico, gratis) → link condivisibile via WhatsApp.
3. **Export PDF** del dossier (firmato, con foto e date).
4. **GDPR**: informativa, foto delle parti comuni (non persone), minimizzazione.
5. Estendere oltre il verde (scale/piscina/impianti) — **solo dopo** aver estratto i rispettivi capitolati verbatim dai contratti (vedi `../CAPITOLATO_SEED.md`).


## TEST
