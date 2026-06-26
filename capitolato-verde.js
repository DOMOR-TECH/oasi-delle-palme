// Custodi 451 — seme capitolato VERDE (verbatim dal Contratto House & Garden, capitolato pagg. 5-7)
// PRINCIPIO: nessuna voce senza fonte contrattuale. Ogni servizio cita la sua fonte e il testo del contratto.
// freq  = etichetta leggibile
// win   = tipo di FINESTRA DI VERIFICA (la verifica si chiude a fine finestra, non ogni giorno → vedi nota 18):
//         'D'=giornaliera · 'W'=settimanale · 'X10'=decade (~10gg) · 'M'=mensile · 'S'=stagionale/annuale (span di più mesi)
// mesi  = mesi in cui il servizio è attivo (null = tutto l'anno); fuori da questi mesi la voce non si mostra
// cadence = giorni indicativi tra interventi (riferimento)
// testo = clausola del contratto (verbatim/fedele) mostrata nella pagina Contratto e linkata dalla fonte del task.
window.CAPITOLATO_VERDE = [
  { id: "irrigazione",        nome: "Irrigazione aree verdi",                     freq: "giornaliera",                 win: "D",   cadence: 1,   mesi: null,                  fonte: "Capitolato HG, pag. 5",
    testo: "Irrigazione di tutte le aree verdi: giornaliera, a settori, con impianto automatico (7 centraline). Turno notturno da ottobre a maggio; doppio turno (giorno e notte) da giugno a settembre, secondo schema SPTI." },
  { id: "prato_piscina",      nome: "Pulizia prato dentro recinzione piscina",    freq: "giornaliera (giu–set)",       win: "D",   cadence: 1,   mesi: [6,7,8,9],             fonte: "Capitolato HG, pag. 5",
    testo: "Pulizia del prato dentro la recinzione della piscina: giornaliera nel periodo giugno–settembre, con raccolta foglie e svuotamento dei cesti, prima dell'apertura (ore 10:30)." },
  { id: "strade",             nome: "Spazzatura e lavaggio strade interne",       freq: "settimanale",                 win: "W",   cadence: 7,   mesi: null,                  fonte: "Capitolato HG, pag. 5",
    testo: "Spazzatura e lavaggio delle strade interne, dei passaggi pedonali, delle rampe e dei passi (bambù): settimanale." },
  { id: "tennis",             nome: "Pulizia campo da tennis e manto erboso",     freq: "settimanale",                 win: "W",   cadence: 7,   mesi: null,                  fonte: "Capitolato HG, pag. 5",
    testo: "Pulizia del campo da tennis e del relativo manto erboso: settimanale." },
  { id: "rasatura",           nome: "Rasatura del manto erboso",                  freq: "ogni 10 giorni (mar–nov)",    win: "X10", cadence: 10,  mesi: [3,4,5,6,7,8,9,10,11], fonte: "Capitolato HG, pag. 5",
    testo: "Rasatura del manto erboso: ogni circa 10 giorni (giorni 5, 15, 25 del mese), nel periodo marzo–novembre; con taglio, insaccamento e trasporto del materiale entro 48 ore. Porzioni speciali (es. sotto Pal. N): taglio ogni 3 mesi; estirpazione delle infestanti e pulizia degli aghi di pino 1 volta al mese." },
  { id: "innaffiatura_pilotis", nome: "Innaffiatura piante dei pilotis",          freq: "1–2×/sett (apr–set 2×)",      win: "W",   cadence: 4,   mesi: null,                  fonte: "Capitolato HG, pag. 5",
    testo: "Innaffiatura delle piante dei pilotis: 1 volta a settimana da ottobre a marzo, 2 volte a settimana da aprile a settembre." },
  { id: "raccolta_foglie",    nome: "Raccolta foglie cadute (complesso)",         freq: "settimanale (ott–dic)",       win: "W",   cadence: 7,   mesi: [10,11,12],            fonte: "Capitolato HG, pag. 5",
    testo: "Raccolta delle foglie cadute su tutto il complesso: durante tutto l'anno, in particolare nei mesi di ottobre, novembre e dicembre." },
  { id: "estirpazione",       nome: "Estirpazione erbe infestanti",               freq: "mensile (gen/feb/nov/dic)",   win: "M",   cadence: 30,  mesi: [1,2,11,12],           fonte: "Capitolato HG, pag. 6",
    testo: "Estirpazione delle erbe infestanti su tutto l'impianto a verde: gennaio, febbraio, novembre e dicembre." },
  { id: "ricostruzione_manto",nome: "Ricostruzione zone deteriorate (terriccio+seme)", freq: "2×/anno (mar, ott)",     win: "M",   cadence: 180, mesi: [3,10],                fonte: "Capitolato HG, pag. 5",
    testo: "Ricostruzione delle zone deteriorate del manto erboso, con terriccio e seme: 2ª decade di marzo e 2ª decade di ottobre." },
  { id: "concimazione",       nome: "Concimazione verde e fioriere pilotis",      freq: "2×/anno (mar, ott)",          win: "M",   cadence: 180, mesi: [3,10],                fonte: "Capitolato HG, pag. 6",
    testo: "Concimazione dell'impianto a verde e delle fioriere dei pilotis: marzo (POCON) e ottobre (NITROFOSCA). Vangatura e concimazione degli alberi nei casi necessari, in marzo e ottobre." },
  { id: "siepi",              nome: "Potatura di tutte le siepi",                 freq: "3×/anno (feb, giu, ott)",     win: "M",   cadence: 120, mesi: [2,6,10],              fonte: "Capitolato HG, pag. 6",
    testo: "Potatura di tutte le siepi: febbraio, giugno e ottobre (siepe perimetrale mantenuta a un'altezza non superiore a 2 metri)." },
  { id: "arieggiatura",       nome: "Arieggiatura e risemina manto erboso",       freq: "1×/anno (1ª decade mar)",     win: "M",   cadence: 365, mesi: [3],                   fonte: "Capitolato HG, pag. 5",
    testo: "Arieggiatura e rimpopolamento con seme del manto erboso: 1ª decade di marzo." },
  { id: "potatura_alberi",    nome: "Potatura piante d'alto fusto",               freq: "1×/anno (ott–dic)",           win: "S",   cadence: 365, mesi: [10,11,12],            fonte: "Capitolato HG, pag. 6",
    testo: "Potatura delle piante d'alto fusto: 1 volta l'anno (ottobre–dicembre), secondo il decalogo approvato dal Consiglio dei Delegati." },
  { id: "lampioni",           nome: "Pulizia corpi illuminanti e pali lampioni",  freq: "1×/anno (nov–dic)",           win: "S",   cadence: 365, mesi: [11,12],               fonte: "Capitolato HG, pag. 6",
    testo: "Pulizia dei corpi illuminanti e dei pali dei lampioni: annuale (novembre–dicembre)." },
  { id: "manut_irrigazione",  nome: "Manutenzione preventiva impianto irrigazione", freq: "3×/anno (mar, giu, set)",   win: "M",   cadence: 90,  mesi: [3,6,9],               fonte: "Capitolato HG, pag. 6",
    testo: "Manutenzione preventiva dell'impianto automatico di irrigazione su tutto l'impianto: 1ª decade di marzo, giugno e settembre (3 volte l'anno). Manutenzione estemporanea in caso di malfunzionamenti (verifica di centraline, elettrovalvole, irrigatori)." },
  { id: "disinfestazione",    nome: "Disinfestazione globale del complesso",      freq: "5×/anno (2 prim, 2 est, 1 aut)", win: "M", cadence: 70, mesi: [4,5,7,8,10],          fonte: "Capitolato HG, pag. 7",
    testo: "Disinfestazione globale del complesso: 5 volte l'anno (2 interventi primaverili, 2 estivi, 1 autunnale)." },
  { id: "derattizzazione",    nome: "Derattizzazione (intercapedini, garage…)",   freq: "5×/anno (2 prim, 2 est, 1 aut)", win: "M", cadence: 70, mesi: [4,5,7,8,10],          fonte: "Capitolato HG, pag. 7",
    testo: "Derattizzazione: 5 volte l'anno (intercapedini, garage, cantine, scoli, griglie)." }
];

// Aree del complesso (verde si osserva zona per zona)
window.AREE = [
  "Collina","Zona piscina","Campo tennis","Strade interne",
  "Pal. A","Pal. B","Pal. C","Pal. D","Pal. E","Pal. F","Pal. G","Pal. H",
  "Pal. I","Pal. L","Pal. M","Pal. N","Tutto il complesso"
];

// Quali servizi compaiono in ciascun TIPO di luogo (mappatura confermata da Corrado 2026-06).
// Tipi: 'palazzina' (Pal.A–N) · 'collina' · 'piscina' · 'tennis' · 'strade' · 'comune' (Tutto il complesso)
window.SERVIZIO_DOVE = {
  irrigazione:         ['palazzina','collina','piscina'],
  prato_piscina:       ['piscina'],
  strade:              ['strade'],
  tennis:              ['tennis'],
  rasatura:            ['palazzina','collina'],
  innaffiatura_pilotis:['palazzina'],
  raccolta_foglie:     ['palazzina','collina'],
  estirpazione:        ['palazzina','collina'],
  ricostruzione_manto: ['palazzina','collina'],
  concimazione:        ['palazzina','collina'],
  siepi:               ['palazzina','collina','piscina'],
  arieggiatura:        ['palazzina','collina'],
  potatura_alberi:     ['palazzina','collina','piscina'],
  lampioni:            ['strade'],
  manut_irrigazione:   ['palazzina','collina','piscina'],
  disinfestazione:     ['comune'],
  derattizzazione:     ['comune']
};
