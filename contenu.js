/* =====================================================================
   WOORDKRACHT : le contenu (vocabulaire + blagues)
   ---------------------------------------------------------------------
   C'est le seul fichier à modifier pour ajouter des mots.
   Le mode d'emploi complet est dans LISEZMOI.md.

   Un mot = une ligne entre accolades { ... }, suivie d'une virgule.
     nl     : le mot en néerlandais, SANS l'article        (obligatoire)
     art    : "de" ou "het" pour les noms                   (facultatif)
     fr     : la traduction française                       (obligatoire)
     syl    : le mot découpé en syllabes avec le point ·    (facultatif)
              (sur Mac : Option + Maj + 9 donne ·)
     img    : un emoji, OU "images/nom.png", OU "kleur:#code", OU "txt:7"
     zin    : une phrase d'exemple en néerlandais           (facultatif)
     zinFr  : sa traduction                                 (facultatif)
     accepte: d'autres orthographes acceptées, ex. ["een"]  (facultatif)
   ===================================================================== */

window.CONTENU = {

  themes: [

    /* ---------------- OP STAP – REIS 2 ---------------- */
    {
      id: "dag", groupe: "Op Stap – Reis 2",
      nl: "Mijn dag", fr: "Les routines", icone: "⏰",
      mots: [
        { nl: "wakker worden", fr: "se réveiller", syl: "wak·ker wor·den", img: "images/wakker-worden.webp", zin: "Ik word om 7 uur wakker.", zinFr: "Je me réveille à 7 heures." },
        { nl: "opstaan", fr: "se lever", syl: "op·staan", img: "images/opstaan.webp", zin: "Ik sta om 7 uur op.", zinFr: "Je me lève à 7 heures." },
        { nl: "ontbijten", fr: "prendre le petit-déjeuner", syl: "ont·bij·ten", img: "images/ontbijten.webp", zin: "Ik ontbijt in de keuken.", zinFr: "Je déjeune dans la cuisine." },
        { nl: "zich wassen", fr: "se laver", syl: "zich was·sen", img: "images/zich-wassen.webp", zin: "Ik was me in de badkamer.", zinFr: "Je me lave dans la salle de bain." },
        { nl: "tanden poetsen", fr: "se brosser les dents", syl: "tan·den poet·sen", img: "images/tanden-poetsen.webp", zin: "Ik poets mijn tanden.", zinFr: "Je me brosse les dents." },
        { nl: "zich aankleden", fr: "s'habiller", syl: "zich aan·kle·den", img: "images/aankleden.webp", zin: "Ik kleed me aan.", zinFr: "Je m'habille." },
        { nl: "een douche nemen", fr: "prendre une douche", syl: "een dou·che ne·men", img: "🚿", zin: "Ik neem een douche.", zinFr: "Je prends une douche." },
        { nl: "naar school gaan", fr: "aller à l'école", syl: "naar school gaan", img: "images/naar-school.webp", zin: "Ik ga met de fiets naar school.", zinFr: "Je vais à l'école à vélo." },
        { nl: "thuiskomen", fr: "rentrer à la maison", syl: "thuis·ko·men", img: "images/thuiskomen.webp", zin: "Ik kom om 4 uur thuis.", zinFr: "Je rentre à la maison à 4 heures." },
        { nl: "huiswerk maken", fr: "faire ses devoirs", syl: "huis·werk ma·ken", img: "images/huiswerk.webp", zin: "Ik maak mijn huiswerk.", zinFr: "Je fais mes devoirs." },
        { nl: "aan sport doen", fr: "faire du sport", syl: "aan sport doen", img: "images/sport.webp", zin: "Ik doe elke maandag aan sport.", zinFr: "Je fais du sport chaque lundi." },
        { nl: "manga's lezen", fr: "lire des mangas", syl: "man·ga's le·zen", img: "images/manga.webp", zin: "Ik lees veel manga's.", zinFr: "Je lis beaucoup de mangas." },
        { nl: "online spelen", fr: "jouer en ligne", syl: "on·line spe·len", img: "images/online-spelen.webp", zin: "Ik speel online met mijn vrienden.", zinFr: "Je joue en ligne avec mes amis." },
        { nl: "zich vervelen", fr: "s'ennuyer", syl: "zich ver·ve·len", img: "images/vervelen.webp", zin: "Ik verveel me nooit.", zinFr: "Je ne m'ennuie jamais." },
        { nl: "naar bed gaan", fr: "aller au lit", syl: "naar bed gaan", img: "images/naar-bed.webp", zin: "Ik ga om 10 uur naar bed.", zinFr: "Je vais au lit à 10 heures." },
        { nl: "in slaap vallen", fr: "s'endormir", syl: "in slaap val·len", img: "images/in-slaap.webp", zin: "Ik val snel in slaap.", zinFr: "Je m'endors vite." }
      ]
    },

    {
      id: "ontbijt", groupe: "Op Stap – Reis 2",
      nl: "Ontbijt en vieruurtje", fr: "Petit-déjeuner et goûter", icone: "🥞",
      mots: [
        { nl: "brood", art: "het", fr: "le pain", img: "🍞", zin: "Ik eet brood met kaas.", zinFr: "Je mange du pain avec du fromage." },
        { nl: "boterham", art: "de", fr: "la tartine", syl: "bo·ter·ham", img: "🥪", zin: "Ik eet twee boterhammen.", zinFr: "Je mange deux tartines." },
        { nl: "kaas", art: "de", fr: "le fromage", img: "🧀" },
        { nl: "honing", art: "de", fr: "le miel", syl: "ho·ning", img: "🍯" },
        { nl: "ei", art: "het", fr: "l'œuf", img: "🥚", zin: "Ik eet geen eieren.", zinFr: "Je ne mange pas d'œufs." },
        { nl: "pannenkoek", art: "de", fr: "la crêpe", syl: "pan·nen·koek", img: "🥞" },
        { nl: "melk", art: "de", fr: "le lait", img: "🥛" },
        { nl: "water", art: "het", fr: "l'eau", syl: "wa·ter", img: "💧", zin: "Ik drink graag water.", zinFr: "J'aime boire de l'eau." },
        { nl: "sinaasappelsap", art: "het", fr: "le jus d'orange", syl: "si·naas·ap·pel·sap", img: "🧃" },
        { nl: "koffie", art: "de", fr: "le café", syl: "kof·fie", img: "☕" },
        { nl: "thee", art: "de", fr: "le thé", img: "🍵" },
        { nl: "koekje", art: "het", fr: "le biscuit", syl: "koek·je", img: "🍪" },
        { nl: "appel", art: "de", fr: "la pomme", syl: "ap·pel", img: "🍎" },
        { nl: "banaan", art: "de", fr: "la banane", syl: "ba·naan", img: "🍌" },
        { nl: "peer", art: "de", fr: "la poire", img: "🍐" },
        { nl: "kers", art: "de", fr: "la cerise", img: "🍒" },
        { nl: "druif", art: "de", fr: "le raisin", img: "🍇" },
        { nl: "sinaasappel", art: "de", fr: "l'orange", syl: "si·naas·ap·pel", img: "🍊" }
      ]
    },

    {
      id: "avondmaal", groupe: "Op Stap – Reis 2",
      nl: "Het avondmaal", fr: "Le repas du soir", icone: "🍝",
      mots: [
        { nl: "vis", art: "de", fr: "le poisson", img: "🐟" },
        { nl: "kip", art: "de", fr: "le poulet", img: "🍗" },
        { nl: "vlees", art: "het", fr: "la viande", img: "🥩" },
        { nl: "rijst", art: "de", fr: "le riz", img: "🍚" },
        { nl: "pasta", art: "de", fr: "les pâtes", syl: "pas·ta", img: "🍝" },
        { nl: "aardappel", art: "de", fr: "la pomme de terre", syl: "aard·ap·pel", img: "🥔" },
        { nl: "tomaat", art: "de", fr: "la tomate", syl: "to·maat", img: "🍅" },
        { nl: "wortel", art: "de", fr: "la carotte", syl: "wor·tel", img: "🥕" },
        { nl: "sla", art: "de", fr: "la salade", img: "🥬" },
        { nl: "komkommer", art: "de", fr: "le concombre", syl: "kom·kom·mer", img: "🥒" },
        { nl: "broccoli", art: "de", fr: "le brocoli", syl: "broc·co·li", img: "🥦" },
        { nl: "pizza", art: "de", fr: "la pizza", syl: "piz·za", img: "🍕" },
        { nl: "friet", art: "de", fr: "les frites", img: "🍟", zin: "Ik eet friet met mayonaise.", zinFr: "Je mange des frites avec de la mayonnaise." }
      ]
    },

    {
      id: "huis", groupe: "Op Stap – Reis 2",
      nl: "Het huis", fr: "La maison", icone: "🏡",
      mots: [
        { nl: "huis", art: "het", fr: "la maison", img: "🏠", zin: "Ik woon in een groot huis.", zinFr: "J'habite dans une grande maison." },
        { nl: "keuken", art: "de", fr: "la cuisine", syl: "keu·ken", img: "🍳" },
        { nl: "slaapkamer", art: "de", fr: "la chambre", syl: "slaap·ka·mer", img: "🛏️" },
        { nl: "badkamer", art: "de", fr: "la salle de bain", syl: "bad·ka·mer", img: "🛁" },
        { nl: "woonkamer", art: "de", fr: "le salon", syl: "woon·ka·mer", img: "🛋️" },
        { nl: "toilet", art: "het", fr: "les toilettes", syl: "toi·let", img: "🚽" },
        { nl: "tuin", art: "de", fr: "le jardin", img: "🌳" },
        { nl: "deur", art: "de", fr: "la porte", img: "🚪" },
        { nl: "raam", art: "het", fr: "la fenêtre", img: "🪟" },
        { nl: "douche", art: "de", fr: "la douche", syl: "dou·che", img: "🚿" },
        { nl: "spiegel", art: "de", fr: "le miroir", syl: "spie·gel", img: "🪞" },
        { nl: "lamp", art: "de", fr: "la lampe", img: "💡" },
        { nl: "stoel", art: "de", fr: "la chaise", img: "🪑" },
        { nl: "zwembad", art: "het", fr: "la piscine", syl: "zwem·bad", img: "🏊" },
        { nl: "stad", art: "de", fr: "la ville", img: "🏙️", zin: "Ik woon in de stad.", zinFr: "J'habite en ville." },
        { nl: "dorp", art: "het", fr: "le village", img: "🏘️", zin: "Ik woon in een dorp.", zinFr: "J'habite dans un village." }
      ]
    },

    /* ---------------- RAPPELS DE PRIMAIRE ---------------- */
    {
      id: "kleuren", groupe: "Rappels de primaire",
      nl: "De kleuren", fr: "Les couleurs", icone: "🎨",
      mots: [
        { nl: "rood", fr: "rouge", img: "kleur:#D62828" },
        { nl: "blauw", fr: "bleu", img: "kleur:#1E66D0" },
        { nl: "geel", fr: "jaune", img: "kleur:#FFD60A" },
        { nl: "groen", fr: "vert", img: "kleur:#2B9348" },
        { nl: "zwart", fr: "noir", img: "kleur:#111111" },
        { nl: "wit", fr: "blanc", img: "kleur:#FFFFFF" },
        { nl: "oranje", fr: "orange", syl: "o·ran·je", img: "kleur:#F77F00" },
        { nl: "roze", fr: "rose", syl: "ro·ze", img: "kleur:#FF8FC7" },
        { nl: "grijs", fr: "gris", img: "kleur:#8D8D8D" },
        { nl: "bruin", fr: "brun", img: "kleur:#7F4F24" },
        { nl: "paars", fr: "mauve", img: "kleur:#7B2CBF" }
      ]
    },

    {
      id: "school", groupe: "Rappels de primaire",
      nl: "Mijn schoolspullen", fr: "Le matériel scolaire", icone: "🎒",
      mots: [
        { nl: "boekentas", art: "de", fr: "le cartable", syl: "boe·ken·tas", img: "🎒" },
        { nl: "schrift", art: "het", fr: "le cahier", img: "📓" },
        { nl: "potlood", art: "het", fr: "le crayon", syl: "pot·lood", img: "✏️" },
        { nl: "schaar", art: "de", fr: "les ciseaux", img: "✂️" },
        { nl: "lat", art: "de", fr: "la latte (règle)", img: "📏" },
        { nl: "boek", art: "het", fr: "le livre", img: "📕" },
        { nl: "vulpen", art: "de", fr: "le stylo-plume", syl: "vul·pen", img: "🖋️" },
        { nl: "map", art: "de", fr: "la farde", img: "📁" },
        { nl: "kleurpotlood", art: "het", fr: "le crayon de couleur", syl: "kleur·pot·lood", img: "🖍️" },
        { nl: "computer", art: "de", fr: "l'ordinateur", syl: "com·pu·ter", img: "💻" }
      ]
    },

    {
      id: "getallen", groupe: "Rappels de primaire",
      nl: "De getallen 0-20", fr: "Les nombres de 0 à 20", icone: "txt:12",
      mots: [
        { nl: "nul", fr: "zéro", img: "txt:0" },
        { nl: "één", fr: "un", img: "txt:1", accepte: ["een"] },
        { nl: "twee", fr: "deux", img: "txt:2" },
        { nl: "drie", fr: "trois", img: "txt:3" },
        { nl: "vier", fr: "quatre", img: "txt:4" },
        { nl: "vijf", fr: "cinq", img: "txt:5" },
        { nl: "zes", fr: "six", img: "txt:6" },
        { nl: "zeven", fr: "sept", syl: "ze·ven", img: "txt:7" },
        { nl: "acht", fr: "huit", img: "txt:8" },
        { nl: "negen", fr: "neuf", syl: "ne·gen", img: "txt:9" },
        { nl: "tien", fr: "dix", img: "txt:10" },
        { nl: "elf", fr: "onze", img: "txt:11" },
        { nl: "twaalf", fr: "douze", img: "txt:12" },
        { nl: "dertien", fr: "treize", syl: "der·tien", img: "txt:13" },
        { nl: "veertien", fr: "quatorze", syl: "veer·tien", img: "txt:14" },
        { nl: "vijftien", fr: "quinze", syl: "vijf·tien", img: "txt:15" },
        { nl: "zestien", fr: "seize", syl: "zes·tien", img: "txt:16" },
        { nl: "zeventien", fr: "dix-sept", syl: "ze·ven·tien", img: "txt:17" },
        { nl: "achttien", fr: "dix-huit", syl: "acht·tien", img: "txt:18" },
        { nl: "negentien", fr: "dix-neuf", syl: "ne·gen·tien", img: "txt:19" },
        { nl: "twintig", fr: "vingt", syl: "twin·tig", img: "txt:20" }
      ]
    },

    {
      id: "familie", groupe: "Rappels de primaire",
      nl: "Mijn familie", fr: "La famille", icone: "👨‍👩‍👧‍👦",
      mots: [
        { nl: "moeder", art: "de", fr: "la mère", syl: "moe·der", img: "👩", zin: "Mijn moeder heet Anna.", zinFr: "Ma mère s'appelle Anna." },
        { nl: "vader", art: "de", fr: "le père", syl: "va·der", img: "👨" },
        { nl: "broer", art: "de", fr: "le frère", img: "👦", zin: "Ik heb een broer.", zinFr: "J'ai un frère." },
        { nl: "zus", art: "de", fr: "la sœur", img: "👧", zin: "Ik heb geen zus.", zinFr: "Je n'ai pas de sœur." },
        { nl: "oma", art: "de", fr: "la grand-mère (mamy)", syl: "o·ma", img: "👵" },
        { nl: "opa", art: "de", fr: "le grand-père (papy)", syl: "o·pa", img: "👴" },
        { nl: "baby", art: "de", fr: "le bébé", syl: "ba·by", img: "👶" },
        { nl: "hond", art: "de", fr: "le chien", img: "🐕", zin: "We hebben een hond.", zinFr: "Nous avons un chien." },
        { nl: "kat", art: "de", fr: "le chat", img: "🐈" }
      ]
    }
  ],

  /* ---------------- BLAGUES (MOPPEN) ----------------
     Une blague s'affiche à la fin de chaque combat.
     uitleg = explication facultative quand il y a un jeu de mots. */
  moppen: [
    { nl: "Wat zegt een bij tegen een andere bij? Bij jou of bij mij?",
      fr: "Que dit une abeille à une autre abeille ? Chez toi ou chez moi ?",
      uitleg: "En néerlandais, « bij » veut dire « abeille » ET « chez »." },
    { nl: "Wat zegt een nul tegen een acht? Mooie riem!",
      fr: "Que dit le zéro au huit ? Jolie ceinture !" },
    { nl: "Wat zegt een slak op de rug van een schildpad? Joehoe, wat gaat dit snel!",
      fr: "Que dit un escargot sur le dos d'une tortue ? Youhou, ça va vite !" },
    { nl: "Twee koeien staan in de wei. Zegt de ene koe: 'Boe!' Zegt de andere: 'Dat wilde ik net zeggen!'",
      fr: "Deux vaches sont dans un pré. La première dit : « Meuh ! » L'autre répond : « J'allais justement le dire ! »" },
    { nl: "Wat is het lievelingseten van een computer? Chips!",
      fr: "Quel est le plat préféré d'un ordinateur ? Les chips !",
      uitleg: "« Chips », ce sont les chips… et aussi les puces électroniques." },
    { nl: "De juf vraagt: 'Noem eens vijf dieren uit Afrika.' Jantje zegt: 'Eén leeuw en vier olifanten!'",
      fr: "La maîtresse demande : « Cite cinq animaux d'Afrique. » Jantje répond : « Un lion et quatre éléphants ! »" },
    { nl: "Wat zegt de ene muur tegen de andere muur? We zien elkaar op de hoek!",
      fr: "Que dit un mur à l'autre mur ? On se retrouve au coin !" },
    { nl: "Waarom werd de tomaat rood? Omdat ze de sla zonder dressing zag!",
      fr: "Pourquoi la tomate est devenue rouge ? Parce qu'elle a vu la salade sans sa vinaigrette !" },
    { nl: "Wat is geel en kan niet zwemmen? Een graafmachine. Waarom niet? Ze heeft maar één arm!",
      fr: "Qu'est-ce qui est jaune et ne sait pas nager ? Une pelleteuse. Pourquoi ? Elle n'a qu'un seul bras !" },
    { nl: "Jantje komt te laat op school. 'Waarom ben je zo laat?' vraagt de juf. 'Er stond een bord: School, langzaam rijden!'",
      fr: "Jantje arrive en retard. « Pourquoi es-tu si en retard ? » demande la maîtresse. « Il y avait un panneau : École, roulez lentement ! »" }
  ]
};
