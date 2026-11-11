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
      vinder: "Superbol_XL",
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
  wetten: [
    "Wie de zaadcode van de wereld gebruikt om ertsen, bouwwerken of andere schatten te vinden (Seedmapper, Chunkbase of dergelijke), pleegt bedrog. (Zwaar)",
    "Wie door muren en grond kijkt, met X-ray, ertsfinders of trucs met texturen, pleegt bedrog. Wat zo gevonden werd, behoort de Kroon toe. (Zwaar)",
    "Hackclients en vals spel zijn verboden: vliegen, snelheid, killaura, autoclickers, macro's, freecam, wezens- of spelersradar en het dupliceren van voorwerpen. (Hoogverraad)",
    "Elke onderdaan speelt met één account, en enkel met het zijne. Tweede accounts en het lenen van accounts zijn verboden. (Hoogverraad)",
    "Toegelaten zijn enkel mods voor prestaties en beeld (Sodium, OptiFine, Iris, shaders, zoom) en texturen zonder voordeel. Minimaps, bouwhulpen en al het andere: verboden, tenzij de keizer het toestaat.",
    "Wie een fout vindt in de winkel, de schatkist of de scripts van het rijk, meldt die aan de keizer en misbruikt ze niet. Melders worden beloond, misbruikers bestraft. (Zwaar)",
    "Niemand breekt, verandert of bebouwt het werk van een ander zonder diens toestemming. (Zwaar)",
    "Niemand neemt uit de kisten, vaten of bouwwerken van een ander zonder diens toestemming. Wie stal, geeft alles terug. (Zwaar)",
    "Strijd tussen onderdanen mag enkel als beide partijen akkoord gaan. Vallen, lavaputten en hinderlagen tegen spelers zijn verboden. (Zwaar)",
    "De dieren en dorpelingen van een ander zijn onschendbaar: honden, katten, paarden, papegaaien en alle tamme wezens. (Licht tot zwaar)",
    "Wie zich vestigt, blijft minstens 500 blokken verwijderd van de basis van een ander, tenzij die het toestaat. (Licht)",
    "Binnen 500 blokken van de spawn en de lichttoren ligt het Kroondomein. Daar bouwt niemand zonder toestemming van de keizer. (Licht)",
    "Wie dicht bij anderen bomen kapt of graaft, ruimt op: geen zwevende boomkruinen, geen open kraters. (Licht)",
    "Farms zijn toegelaten. Bouwwerken die de server doen haperen zijn verboden; de keizer mag ze laten aanpassen of afbreken. (Licht tot zwaar)",
    "De sporen van het verhaal zijn heilig: tekens, bouwwerken, borden en kisten breekt, verplaatst of verandert niemand. Zoeken en graven naar aanwijzingen mag, ook in het Kroondomein. (Zwaar)",
    "Wat een speurder vindt, mag hij delen, ruilen of geheimhouden. Ook zwijgen is een recht.",
    "Wie de keizer beledigt of bespot, pleegt majesteitsschennis. Grappen over de keizer zijn toegestaan, mits werkelijk grappig. Daarover oordeelt de keizer. (Licht)",
    "Wie een aanklacht indient of getuigt, spreekt de waarheid. Een valse aanklacht wordt bestraft met de straf die de beschuldigde had kunnen krijgen.",
    "Lichte vergrijpen: een waarschuwing, een boete tot 100 kronen of de schandpaal.",
    "Zware vergrijpen: een boete van 100 tot 500 kronen, de kerker, verlies van rang, en altijd: teruggeven en herstellen wat men nam of brak.",
    "Hoogverraad: verlies van alles wat men zo verkreeg, vogelvrijverklaring, of verbanning uit het rijk, tijdelijk of voorgoed.",
    "Over elke straf beslist de keizer. Wie herhaalt, wordt zwaarder gestraft. Wie zelf bekent, lichter."
  ],

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
