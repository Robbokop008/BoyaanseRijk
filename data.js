/*
  Alle inhoud van de site staat in dit bestand.
  Na elk hoofdstuk vul je hier aan wat de spelers al weten. Zie README.md.
  Let op: alles wat hier staat, kan iedereen lezen (ook in de broncode).
  Zet hier dus nooit iets wat nog niet gebeurd is.
*/
window.RIJK = {
  server: {
    adres: "boyaanserijk.exaroton.me",
    versie: "Java Edition",
    discord: ""            // bv. "https://discord.gg/..." (leeg laten = geen knop)
  },

  // De trailer bovenaan de site (leeg laten = geen trailer)
  trailer: "trailer.mp4",
  trailerPoster: "trailer-poster.jpg",

  // Link naar de Doodle om de startdatum te kiezen (leeg laten = geen knop)
  peiling: "",

  // Hoeveel tandwielen hangen er al in de klok (0 tot 7)
  tandwielen: 0,

  // Huidige stand. hoofdstuk 0 = het verhaal is nog niet begonnen.
  stand: {
    hoofdstuk: 0,
    titel: "Binnenkort",
    tekst: "Onder de lichttoren is het stil. Voorlopig."
  },

  // Gidstekst voor spelers (link naar het volledige document, mag leeg blijven)
  gids: "",

  // Afgeronde of lopende hoofdstukken, in volgorde.
  // { nr: 1, titel: "...", samenvatting: ["alinea", "alinea"], uitspraak: "...", vinder: "naam", documenten: ["B1"] }
  hoofdstukken: [],

  // Documenten die in het Rijksarchief liggen.
  // { code: "B1", titel: "...", ingeleverd: "naam", tekst: ["regel", "regel"] }
  archief: [],

  // Personages die de spelers al ontmoet hebben.
  // { naam: "...", rol: "...", wat: "Wat we over hem of haar weten." }
  personages: [],

  // Uitspraken die al gezegd zijn (voor "Wat zei hij ook alweer?")
  uitspraken: [],

  // Eretekens uit het verhaal
  // { naam: "speler", ereteken: "Tandwielvinder", hoofdstuk: 1 }
  eer: [],

  // De wetten van het rijk (zoals in /wetten)
  wetten: [],

  rangen: [
    { naam: "Keizer", kleur: "#e0b54b" },
    { naam: "Hertog", kleur: "#c792ea" },
    { naam: "Graaf", kleur: "#6fa8ff" },
    { naam: "Baron", kleur: "#5fd0d0" },
    { naam: "Ridder", kleur: "#b8bec4" },
    { naam: "Burger", kleur: "#f2f2f2" },
    { naam: "Horige", kleur: "#8a8f96" }
  ]
};
