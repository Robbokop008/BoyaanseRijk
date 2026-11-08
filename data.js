window.RIJK = {
  server: {
    adres: "boyaanserijk.exaroton.me",
    versie: "Java Edition",
    discord: ""            // bv. "https://discord.gg/..."
  },

  // De trailer bovenaan de site
  trailer: "trailer.mp4",
  trailerPoster: "trailer-poster.jpg",

  // Link naar de Doodle om de startdatum te kiezen
  peiling: "",

  // Hoeveel tandwielen hangen er al in de klok
  tandwielen: 1,

  // Huidige stand. hoofdstuk 0 = het verhaal is nog niet begonnen.
  stand: {
    hoofdstuk: 1,
    titel: "Een stem uit de diepte",
    tekst: "Onder de lichttoren klinkt geklop. De kerker is heropend."
  },

  // Gidstekst voor spelers
  gids: "",

  // Afgeronde of lopende hoofdstukken, in volgorde.
  // { nr: 1, titel: "...", samenvatting: ["alinea", "alinea"], uitspraak: "...", vinder: "naam", documenten: ["B1"] }
  hoofdstukken: [
    {
      nr: 1,
      titel: "Een stem uit de diepte",
      samenvatting: [
        "Al dagenlang meldden de arbeiders van de lichttoren een vreemd geklop onder de vloer. Bij keizerlijk decreet werd de oude kerker heropend. Wat de onderdanen er vonden, had niemand verwacht: een gevangene. Levend. En erg spraakzaam.",
        "Hij noemt zichzelf Baron Bartholomeus Wafelaer, voormalig hofmeester van Keizerin Machteld de Waakzame. Volgens de legende stal hij eeuwen geleden de tandwielen van de grote klok. Hij zweert dat hij onschuldig is, en biedt aan te helpen de zeven tandwielen terug te vinden.",
        "Het eerste tandwiel werd teruggevonden en door de keizer plechtig in de klok geplaatst. Zes zijn er nog zoek."
      ],
      uitspraak: "Diefstal, zeggen ze? Hm. Nou ja. Laten we het daarop houden.",
      vinder: "NAAM",
      documenten: ["B1"]
    }
  ],

  // Documenten die in het Rijksarchief liggen.
  // { code: "B1", titel: "...", ingeleverd: "naam", tekst: ["regel", "regel"] }
  archief: [],

  // Personages die de spelers al ontmoet hebben.
  // { naam: "...", rol: "...", wat: "Wat we over hem of haar weten." }
  personages: [
    {
      naam: "Baron Bartholomeus Wafelaer",
      rol: "Gevangene in de kerker onder de lichttoren",
      wat: "Zegt dat hij hofmeester was van Keizerin Machteld de Waakzame. Volgens de legende stal hij de tandwielen van de grote klok. Hij zweert dat hij onschuldig is en wil helpen ze terug te vinden. Houdt van wafels."
    }
  ],

  // Uitspraken die al gezegd zijn (voor "Wat zei hij ook alweer?")
  uitspraken: [
    "Na driehonderd jaar stilte hoor ik eindelijk voetstappen!",
    "Kenner van wijnen, liefhebber van wafels, en het onschuldigste slachtoffer van de geschiedenis.",
    "Ik heb eens een spin getemd. Ze heette Griselda. Ze is me ontvlucht. Zelfs Griselda.",
    "U kijkt naar die tralies alsof ze sterk zijn. Dat zijn ze ook. Ik heb het geprobeerd. Vierduizend keer.",
    "Diefstal, zeggen ze? Hm. Nou ja. Laten we het daarop houden."
  ],

  // Eretekens uit het verhaal
  // { naam: "speler", ereteken: "Tandwielvinder", hoofdstuk: 1 }
  eer: [
    { naam: "Superbol_XL", ereteken: "Tandwielvinder", hoofdstuk: 1 }
  ],

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
