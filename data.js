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
  tandwielen: 2,

  // Huidige stand. hoofdstuk 0 = het verhaal is nog niet begonnen.
  stand: {
    hoofdstuk: 2,
    titel: "De hongerige baron",
    tekst: "De baron is in hongerstaking. Het rijk brengt hem een feestmaal."
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
    },
    {
      nr: 2,
      titel: "De hongerige baron",
      samenvatting: [
        "De baron verklaarde zich in hongerstaking, na driehonderd jaar niet eten, maar nu met opzet. Pas na een behoorlijke maaltijd zou hij zich herinneren waar het tweede tandwiel lag.",
        "Het volk bracht hem een feestmaal: 128 koekjes, 32 broden, 16 pompoentaarten en 8 cakes. De grootste bijdrager was NAAM. Na een boer die tot boven in de toren te horen was, wees de baron de weg: tweehonderd passen naar de ondergaande zon, onder een steen die geen steen is.",
        "Het tweede tandwiel werd teruggevonden en door de keizer in de klok geplaatst. Vijf zijn er nog zoek.",
        "Bij de spawn opende een handelaarster een kraampje, alleen 's nachts: Rosalinde Rook. Ze beweert de kleindochter te zijn van de Rosalinde Rook van het oude opsporingsbericht."
      ],
      uitspraak: "Hoe ik dat weet, als ik hier al driehonderd jaar vastzit? Euh. Dat heb ik in een droom gezien.",
      vinder: "Kabroen",
      documenten: ["B2"]
    }
  ],

  // Documenten die in het Rijksarchief liggen.
  // { code: "B1", titel: "...", ingeleverd: "naam", tekst: ["regel", "regel"] }
  archief: [
    {
      code: "B1",
      titel: "Vonnis (verscheurd)",
      ingeleverd: "NAAM",
      tekst: [
        "In naam van Hare Majesteit Machteld de Waakzame, Keizerin van het Oude Rijk.",
        "Het Keizerlijk Gerecht, in zitting bijeen in de lichttoren, verklaart de beklaagde:",
        "BARTHOLOMEUS WAFELAER, Baron, Hofmeester",
        "schuldig aan HOOGVERRAAD en SAMENZWERING tegen de Kroon,",
        "met name het beramen van een aanval op de toren in de nacht van",
        "[hier is het papier gescheurd]",
        "...daarom veroordeelt het Gerecht hem tot opsluiting in de diepste cel van de toren, zolang de klok stilstaat.",
        "Gezegeld en getekend, M."
      ]
    },
    {
      code: "B2",
      titel: "Kokslijst van de Kerker",
      ingeleverd: "NAAM",
      tekst: [
        "Leveringen aan de diepe cel, op bevel en voor rekening van R.",
        "Maandag: fazant, drie wafels met room",
        "Woensdag: gebraden zwijn, een vat wijn",
        "Vrijdag: zes wafels, een taart, meer wijn",
        "Notitie van de kok:",
        "Een gevangene die eet als een koning. Ik stel geen vragen. R. betaalt goed en op tijd. Maar het is vreemd: wie betaalt er feestmalen voor een verrader?",
        "Lijst van het hofpersoneel dat in de keuken mag eten:",
        "Wachter Odo, Meester Tibbe (uurwerkmaker), Margriet (kamenier), Gijs (stalknecht), Hendrik (schildknaap), Aleid (keukenmeid)"
      ]
    }
  ],

  // Personages die de spelers al ontmoet hebben.
  // { naam: "...", rol: "...", wat: "Wat we over hem of haar weten." }
  personages: [
    {
      naam: "Baron Bartholomeus Wafelaer",
      rol: "Gevangene in de kerker onder de lichttoren",
      wat: "Zegt dat hij hofmeester was van Keizerin Machteld de Waakzame. Volgens de legende stal hij de tandwielen van de grote klok. Hij zweert dat hij onschuldig is en wil helpen ze terug te vinden. Houdt van wafels."
    },
    {
      naam: "Rosalinde Rook",
      rol: "Handelaarster bij de spawn, alleen 's nachts",
      wat: "Verkoopt spullen, tips en geruchten. De geruchten zijn gratis, en daarom ook het minst waard, zegt ze zelf. Haar grootmoeder heette ook Rosalinde Rook. Ze zegt de baron niet te kennen."
    }
  ],

  // Uitspraken die al gezegd zijn (voor "Wat zei hij ook alweer?")
  uitspraken: [
    "Na driehonderd jaar stilte hoor ik eindelijk voetstappen!",
    "Kenner van wijnen, liefhebber van wafels, en het onschuldigste slachtoffer van de geschiedenis.",
    "Ik heb eens een spin getemd. Ze heette Griselda. Ze is me ontvlucht. Zelfs Griselda.",
    "U kijkt naar die tralies alsof ze sterk zijn. Dat zijn ze ook. Ik heb het geprobeerd. Vierduizend keer.",
    "Diefstal, zeggen ze? Hm. Nou ja. Laten we het daarop houden.",
    "Ik verklaar mij in HONGERSTAKING.",
    "Cake. Ik droom van cake. En van wraak. Maar vooral van cake.",
    "Excuseer. Dat was driehonderd jaar honger die vertrok.",
    "Hoe ik dat weet, als ik hier al driehonderd jaar vastzit? Euh. Dat heb ik in een droom gezien."
  ],

  // Eretekens uit het verhaal
  // { naam: "speler", ereteken: "Tandwielvinder", hoofdstuk: 1 }
  eer: [
    { naam: "Superbol_XL", ereteken: "Tandwielvinder", hoofdstuk: 1 },
    { naam: "DrDynam1t3", ereteken: "Speurneus", hoofdstuk: 1 },
    { naam: "Kabroen", ereteken: "Tandwielvinder", hoofdstuk: 2 },
    { naam: "HaxlBrustem1", ereteken: "Speurneus", hoofdstuk: 2 },
  ],

  // De wetten van het rijk (zoals in /wetten)
  wetten: [
    "Het volledige wetboek lees je in het spel met /wetten.",
    "Elke wet geldt voor iedereen, altijd. Twijfel je? Vraag het eerst aan de keizer.",
    "Een overtreding gezien? Meld ze met /aanklacht <speler> <reden>. De keizer spreekt het vonnis."
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
