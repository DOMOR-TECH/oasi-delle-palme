// Custodi 451 — seme capitolato VERDE (verbatim dal Contratto House & Garden, capitolato pagg. 5-7)
// PRINCIPIO: nessuna voce senza fonte contrattuale. Ogni servizio cita la sua fonte.
// freq = etichetta leggibile; cadence = giorni indicativi tra interventi (per stimare "in ritardo"); mesi = quando si applica (null = tutto l'anno)
window.CAPITOLATO_VERDE = [
  { id: "irrigazione",        nome: "Irrigazione aree verdi",                     freq: "giornaliera",                 cadence: 1,   mesi: null,                  fonte: "Capitolato HG, pag. 5" },
  { id: "prato_piscina",      nome: "Pulizia prato dentro recinzione piscina",    freq: "giornaliera (giu–set)",       cadence: 1,   mesi: [6,7,8,9],             fonte: "Capitolato HG, pag. 5" },
  { id: "strade",             nome: "Spazzatura e lavaggio strade interne",       freq: "settimanale",                 cadence: 7,   mesi: null,                  fonte: "Capitolato HG, pag. 5" },
  { id: "tennis",             nome: "Pulizia campo da tennis e manto erboso",     freq: "settimanale",                 cadence: 7,   mesi: null,                  fonte: "Capitolato HG, pag. 5" },
  { id: "rasatura",           nome: "Rasatura del manto erboso",                  freq: "ogni 10 giorni (mar–nov)",    cadence: 10,  mesi: [3,4,5,6,7,8,9,10,11], fonte: "Capitolato HG, pag. 5" },
  { id: "innaffiatura_pilotis", nome: "Innaffiatura piante dei pilotis",          freq: "1–2×/sett (apr–set 2×)",      cadence: 4,   mesi: null,                  fonte: "Capitolato HG, pag. 5" },
  { id: "raccolta_foglie",    nome: "Raccolta foglie cadute (complesso)",         freq: "ott/nov/dic",                 cadence: 7,   mesi: [10,11,12],            fonte: "Capitolato HG, pag. 5" },
  { id: "estirpazione",       nome: "Estirpazione erbe infestanti",               freq: "gen/feb/nov/dic",             cadence: 30,  mesi: [1,2,11,12],           fonte: "Capitolato HG, pag. 6" },
  { id: "ricostruzione_manto",nome: "Ricostruzione zone deteriorate (terriccio+seme)", freq: "2×/anno (mar, ott)",     cadence: 180, mesi: [3,10],                fonte: "Capitolato HG, pag. 5" },
  { id: "concimazione",       nome: "Concimazione verde e fioriere pilotis",      freq: "2×/anno (mar, ott)",          cadence: 180, mesi: [3,10],                fonte: "Capitolato HG, pag. 6" },
  { id: "siepi",              nome: "Potatura di tutte le siepi",                 freq: "3×/anno (feb, giu, ott)",     cadence: 120, mesi: [2,6,10],              fonte: "Capitolato HG, pag. 6" },
  { id: "arieggiatura",       nome: "Arieggiatura e risemina manto erboso",       freq: "1×/anno (1ª decade mar)",     cadence: 365, mesi: [3],                   fonte: "Capitolato HG, pag. 5" },
  { id: "potatura_alberi",    nome: "Potatura piante d'alto fusto",               freq: "1×/anno (ott–dic)",           cadence: 365, mesi: [10,11,12],            fonte: "Capitolato HG, pag. 6" },
  { id: "lampioni",           nome: "Pulizia corpi illuminanti e pali lampioni",  freq: "1×/anno (nov–dic)",           cadence: 365, mesi: [11,12],               fonte: "Capitolato HG, pag. 6" },
  { id: "manut_irrigazione",  nome: "Manutenzione preventiva impianto irrigazione", freq: "3×/anno (mar, giu, set)",   cadence: 90,  mesi: [3,6,9],               fonte: "Capitolato HG, pag. 6" },
  { id: "disinfestazione",    nome: "Disinfestazione globale del complesso",      freq: "5×/anno",                     cadence: 70,  mesi: null,                  fonte: "Capitolato HG, pag. 7" },
  { id: "derattizzazione",    nome: "Derattizzazione (intercapedini, garage…)",   freq: "5×/anno",                     cadence: 70,  mesi: null,                  fonte: "Capitolato HG, pag. 7" }
];

// Aree del complesso (verde si osserva zona per zona)
window.AREE = [
  "Pal. A","Pal. B","Pal. C","Pal. D","Pal. E","Pal. F","Pal. G","Pal. H",
  "Pal. I","Pal. L","Pal. M","Pal. N","Zona piscina","Campo tennis","Strade interne","Collina"
];
