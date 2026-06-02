const sites = [
  {
    id: "wignacourt",
    title: "Wignacourt Museum",
    location: "Rabat",
    subtitle: "Pauline complex",
    summary:
      "A museum route connecting St Paul's Grotto, the crypt, wartime shelters and the Wignacourt collection.",
    tags: ["Museum", "Grotto", "Order"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Wignacourt%20Museum%20Rabat%20Malta.jpg",
    stops: [
      "Introduction to The Wignacourt Museum - Facade and Entrance Hall",
      "St Paul's Grotto",
      "The Crypt and the Altars of St Luke - St Paul - St Trophimus",
      "World War II Shelters",
      "The Ground Floor [stores - kitchen - stable - garden]",
      "Staircase - Portrait of GM Wignacourt - the Landing to the piano nobile [Notary Francesco Catania - Sicilian organ - Maltese Clock]",
      "The Early Saints of the Order and The Chapter Hall",
      "Liturgical Vestments and Silver Room",
      "The altar of the repose and the portable altar Room",
      "Replica of the Holy Shroud of Turin Room",
      "The Treasurer's Room",
      "The Private Chapel used by the Chaplains - the Inner Corridor [later] Saints of the Order [Blessed Gerard - The Female Saints of the Order]",
      "Maps Coins and Archaeological Items Room",
      "The Baroque Pinacoteca Room",
      "The 19th C Room",
      "The 20th C Room"
    ]
  },
  {
    id: "catacombs",
    title: "St Paul's Catacombs",
    location: "Rabat",
    subtitle: "Underground burial complex",
    summary:
      "A late Roman underground route for burial customs, funerary meals, tomb types and early Christian reuse.",
    tags: ["Late Roman", "Burial", "Christianity"],
    image:
      "https://commons.wikimedia.org/wiki/Special:FilePath/St._Paul%E2%80%99s_catacombs_Rabat_Malta_2014_3.jpg",
    stops: [
      "General Introduction to the Catacombs",
      "An elite man's funeral procession",
      "Inhumations and Cremations",
      "Garden, Social Pavilion and Archaeology Pavilion",
      "Main Complex - loculi - staircase",
      "Tables and Apses: Funerary Triclinia",
      "Burials and different types of tombs found in Malta",
      "Baldacchino and Saddleback Tombs",
      "The crypt and Christianity in Malta",
      "Jewish Hypogea, Rituals, Conservation and Architecture Pavilions"
    ]
  },
  {
    id: "domus",
    title: "Domus Romana",
    location: "Rabat",
    subtitle: "Roman townhouse",
    summary:
      "A Roman house and museum route for domestic life, status, mosaics, family identity and ancient Melite.",
    tags: ["Roman", "Mosaics", "Domestic life"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Domus%20Romana%2C%20Rabat%200628.jpg",
    stops: [
      "Entrance 1920s portico - Introduction to Roman Malta and urban life",
      "Islamic Section",
      "Ashtart-Isis or Fortuna-Juno Statue and Coinage Section",
      "Roman families and Roman life",
      "Emperor Claudius and his family members",
      "The domus: floor plan, courtyard and mosaics",
      "Outdoor section: olive press and remains of subordinate houses",
      "Islamic Cemetery"
    ]
  },
  {
    id: "streets",
    title: "Streets of Mdina",
    location: "Mdina",
    subtitle: "The Silent City",
    summary:
      "A walking route through gates, squares, noble palaces, ramparts and enclosed streets.",
    tags: ["Medieval", "Baroque", "Nobility"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Mdina%20Main%20Gate.jpg",
    stops: [
      "Introduction",
      "Bridge, Ditch, Old Gate and Main Gate",
      "St Publius Square: Interior Gate, Torre dello Standardo and St Peter's Monastery",
      "Vilhena Palace",
      "Villegaignon Street: St Agatha's Chapel and Palazzo Inguanez",
      "Villegaignon Street: Palazzo Testaferrata, Agatha Formosa Gauci Palazzo and Banca Giuratale",
      "St Paul Square: Palazzo del Prelato, Casa Gourgion, Casa del Magistrato and St Paul's Cathedral",
      "Archbishop's Square: Archbishop's Palace and Old Seminary",
      "St Dorothy's Convent, Casa Depiro and Palazzo Sant Manduca",
      "Ramparts and Bastion Square",
      "Casa del Tesoriere and Palazzo Falson",
      "Carmelite Priory and Church - Statue of Madonna of Mount Carmel",
      "Chapel of St Roque and Palazzo Santa Sophia",
      "Curvilinear street plan and rear views of noble houses",
      "Mesquita Square",
      "Magazine Gate and Chapel of St Publius",
      "Greeks Square, Fortification Wall and Greeks Gate",
      "The Three Gate System: Outer Baroque Gate, Ditch and Gharreqin/Mtarfa/British Gate"
    ]
  },
  {
    id: "cathedral",
    title: "St Paul's Cathedral, Mdina",
    location: "Mdina",
    subtitle: "Metropolitan cathedral",
    summary:
      "A cathedral route through the facade, nave, chapels, transept, chancel, choir and St Paul narrative.",
    tags: ["Baroque", "St Paul", "Chapels"],
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/St%20Paul%27s%20Cathedral%2C%20Mdina.jpg",
    stops: [
      "Facade of St Paul's Metropolitan Cathedral",
      "Introduction to St Paul's Cathedral interior and historical overview",
      "The Main Nave - Manno Brothers Vault",
      "Victor Gesta's stained glass windows",
      "The North Transept - Chapel of the Blessed Sacrament",
      "Chapel of the Annunciation",
      "Original Door of the Old Cathedral, Sacristy and Chapter Hall",
      "Chapel Maria Melitae Patrona",
      "Chapel of the Descent of the Holy Spirit on the Blessed Virgin and the Apostles",
      "Antonio Gagini's Baptismal Font and Valenti's St Publius Monument",
      "Tomb tablets in the main nave and crypt",
      "The Chancel: mosaics, lecterns, coats of arms and Glory of St Peter and St Paul",
      "The Choir: stalls, Charles V coat of arms and marble from Carthage",
      "Mattia Preti: Shipwreck of St Paul, Miracle of the Viper and Healing of Publius's Father",
      "Chapel of the Holy Crucifix",
      "Chapel of St Publius",
      "Chapel of St Cajetan",
      "Chapel of St Luke"
    ]
  }
];

const appView = document.querySelector("#appView");
const navItems = document.querySelectorAll(".nav-item");
const shell = document.querySelector(".shell");
const sidebarToggle = document.querySelector("[data-sidebar-toggle]");

const mediaFolders = {
  wignacourt: "media/wignacourt",
  catacombs: "media/catacombs",
  domus: "media/domus-romana",
  streets: "media/streets-mdina",
  cathedral: "media/cathedral-mdina"
};

// Edit notes here. Each key is a location id, then a zero-based stop number.
// Example: domus[0] is stop 1, domus[5] is stop 6.
const stopNotes = {
  domus: {
  0: {
    notice: "Stand to the side of the entrance so the group does not block the passage. Use this as the introduction to Melite, the meaning of domus, and the route inside.",
    background:
      "Domus means townhouse. The Rabat domus was discovered by A. A. Caruana on 3 February 1881 and is one of the best surviving testimonies of ancient Melite. It was constructed before the beginning of the 1st century BCE and functioned as an aristocratic Roman townhouse with fine mosaics, a colonnaded peristyle and water systems.",
    script:
      "Introduce the site as a rare surviving fragment of Roman town life: Roman Malta begins in 218 BCE after the Second Punic War, the house belongs to elite Melite, and the museum later became the place where visitors can read Roman domestic life through objects, mosaics and architecture.",
    exam:
      "Key dates: Roman conquest of Malta in 218 BCE; domus built before the start of the 1st century BCE; discovered on 3 February 1881; officially opened as a museum in 1882; later excavations included 1920-1925; museum closed during WWII and reopened in 1945."
  },
  1: {
    notice: "Focus on the Islamic display cases, map of Melite, tomb orientation and the burial reconstruction.",
    background:
      "The Islamic section explains the later reuse of the area as a Muslim cemetery. Recent Heritage Malta material notes over 245 burials, some marked by tombstones with Naskh and Kufic inscriptions, showing the site's long life after the Roman house.",
    script:
      "Explain the site as layered history: Roman elite house first, later Muslim cemetery. Use the burial reconstruction to explain shroud burial, no coffin, and the body positioned towards Mecca, while avoiding certainty where the evidence is debated.",
    exam:
      "Key dates: Arab conquest of Malta in 870 CE; Norman takeover traditionally placed in 1091 CE. Remember Kufic and Naskh scripts, the Muslim cemetery, and the Maymunah stone/coin hoard as comparison points, but do not imply all were found here."
  },
  2: {
    notice: "Use the statue and coin display to show cultural overlap: Punic, Roman, Sicilian and Egyptian influences.",
    background:
      "The statue's identity is debated, often discussed in relation to Ashtart-Isis or Fortuna-Juno. The safest interpretation is cultural overlap: Punic, Egyptian and Roman religious languages could coexist in Roman Malta.",
    script:
      "Use this stop to show that Romanisation did not erase earlier influences. Then move to coinage as evidence of trade, identity and imperial communication.",
    exam:
      "Do not present the statue identification as certain. For coins, remember Malta's long coinage tradition and the idea that coins can act as propaganda because rulers, symbols and civic identity circulate through them."
  },
  3: {
    notice: "Point out objects linked with family, beauty, writing, food, dining and domestic management.",
    background:
      "The current Heritage Malta display is designed around the life of a Roman aristocratic household: family roles, fashion, education, entertainment, food and drink. The pater familias headed the household, while domestic management also involved women, servants and specialised labour.",
    script:
      "Present the cases as everyday life made visible: writing tools, children's objects, masks, oils, perfume vessels, kitchen items and dining equipment help visitors imagine the people rather than only the ruin.",
    exam:
      "Useful comparisons: elite versus ordinary households, public male authority versus domestic administration, fashion/beauty objects, food culture, education and entertainment."
  },
  4: {
    notice: "Link the statue to Claudius' family group and the political status of the house owner.",
    background:
      "Heritage Malta identifies the museum highlight as the only set of marble statues portraying Emperor Claudius and his family in a private house. The Julio-Claudian sculptures are datable to the 1st century CE and suggest an owner of high social standing.",
    script:
      "Use the 'Roman soap opera' angle carefully: Claudius, Messalina, Agrippina, Britannicus and Nero make the statues memorable, but bring the story back to why imperial family imagery appears in a private elite house.",
    exam:
      "Correct date anchor: Claudius was born in 10 BCE, ruled as emperor 41-54 CE, and died in 54 CE. Do not use any note that places him in the 4th/5th century. Nero ruled after him, 54-68 CE."
  },
  5: {
    notice: "Position visitors where they can see the floor plan, peristyle and mosaics clearly.",
    background:
      "The house plan is difficult because walls and excavation records are limited. Scholarship on the mosaics treats them as evidence for movement, room function and social space. The peristyle and mosaic floors are therefore key to explaining layout.",
    script:
      "Explain the domus as an elite inward-looking house. Use the mosaics to guide visitors through the idea of reception space, movement, display and social status, then define the key mosaic techniques.",
    exam:
      "Key terms: peristyle, atrium, tablinum, triclinium, opus tessellatum, opus vermiculatum, emblema/emblemata, impluvium. Key caution: room functions are interpretive, not certain."
  },
  6: {
    notice: "Use the outdoor area to explain ongoing excavation, subordinate houses and what survives of Roman Malta.",
    background:
      "The outdoor areas and surrounding fields are important because research into Melite's urban fabric is still developing. The Melite Civitas Romana project and related work study the Domvs and its surroundings to understand Roman town planning and nearby houses.",
    script:
      "Use this stop to widen the story from one house to the Roman town: subordinate houses, possible working areas and nearby discoveries help visitors imagine Melite as an urban place rather than a single isolated ruin.",
    exam:
      "Useful comparison: town life = Domvs Romana; afterlife = catacombs; country/rural production = sites such as San Pawl Milqi. Interpretation may change with ongoing excavation."
  },
  7: {
    notice: "Discuss the cemetery, amphorae, column types and decoration fragments.",
    background:
      "This final section brings together the site's later cemetery phase and the architectural evidence for a wealthy Roman residence: reused amphorae, column fragments, capitals and frieze decoration.",
    script:
      "Use the fragments as a recap: the house was elite, richly decorated, later altered and then overwritten by other uses. Move from objects to the bigger idea of a multi-layered archaeological site.",
    exam:
      "Remember Doric, Ionic, Corinthian and composite orders. Link architectural decoration to status, and the Muslim cemetery to the site's later medieval reuse; Heritage Malta notes over 245 burials in this later cemetery phase."
  }
  }
};

let activeView = "home";
let activeSiteId = "streets";
let activeStopIndex = 0;
let activeImageIndex = 0;
let activeTab = "stops";
let isImageZoomOpen = false;
let activeFlashcardIndex = 0;
let isFlashcardRevealed = false;
let notesSearchQuery = "";
let isSidebarCollapsed = false;

function activeSite() {
  return sites.find((site) => site.id === activeSiteId) ?? sites[0];
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function stopTitle(stop) {
  return stop.split(/[-:–]/).map((part) => part.trim()).filter(Boolean)[0] ?? stop;
}

function stopContent(site, index) {
  const externalSummaries = {
    catacombs: window.catacombsSummaries,
    wignacourt: window.wignacourtSummaries
  };
  const summary = stopNotes[site.id]?.[index] ?? externalSummaries[site.id]?.[index];
  const fullNotes = {
    catacombs: window.catacombsFullNotes,
    domus: window.domusFullNotes,
    wignacourt: window.wignacourtFullNotes
  };
  const full = fullNotes[site.id]?.stops?.[index] ?? null;
  if (!summary && !full) {
    return null;
  }
  return { ...summary, full };
}

function hasStudyContent(site) {
  return site.stops.some((_stop, index) => stopContent(site, index));
}

function studySites() {
  return sites.filter(hasStudyContent);
}

function activeStudySite() {
  const current = activeSite();
  if (hasStudyContent(current)) {
    return current;
  }

  const firstReadySite = studySites()[0] ?? sites[0];
  activeSiteId = firstReadySite.id;
  return firstReadySite;
}

function stopSummarySections(content) {
  if (!content) {
    return [];
  }

  return [
    ["What to notice", content.notice],
    ["Historical background", content.background],
    ["Guide script", content.script],
    ["Exam notes", content.exam]
  ].filter((section) => section[1]);
}

function fallbackNoteText(content) {
  return content?.full?.paragraphs?.slice(0, 2).join(" ") ?? "";
}

function compactText(text, limit = 260) {
  const clean = String(text ?? "").replace(/\s+/g, " ").trim();
  if (clean.length <= limit) {
    return clean;
  }
  return `${clean.slice(0, limit).replace(/\s+\S*$/, "")}...`;
}

function updateSidebarState() {
  shell?.classList.toggle("nav-collapsed", isSidebarCollapsed);
  if (sidebarToggle) {
    sidebarToggle.setAttribute("aria-label", isSidebarCollapsed ? "Expand menu" : "Collapse menu");
    sidebarToggle.setAttribute("aria-expanded", String(!isSidebarCollapsed));
  }
}

function noteSearchText(site, stop, index, content) {
  return [
    site.title,
    site.location,
    stop,
    content?.notice,
    content?.background,
    content?.script,
    content?.exam,
    ...(content?.full?.paragraphs ?? [])
  ]
    .filter(Boolean)
    .join(" ");
}

function noteSearchEntries() {
  return sites.flatMap((site) =>
    site.stops.map((stop, index) => {
      const content = stopContent(site, index);
      return {
        site,
        stop,
        stopIndex: index,
        content,
        searchText: noteSearchText(site, stop, index, content)
      };
    })
  );
}

function noteSearchResults(query) {
  const terms = query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);

  const entries = noteSearchEntries().filter((entry) => entry.content);
  if (!terms.length) {
    return entries;
  }

  return entries.filter((entry) => {
    const haystack = entry.searchText.toLowerCase();
    return terms.every((term) => haystack.includes(term));
  });
}

function buildFlashcards(site) {
  return site.stops
    .map((stop, index) => {
      const content = stopContent(site, index);
      const answer = content?.exam || content?.script || content?.background || fallbackNoteText(content);
      if (!answer) {
        return null;
      }

      return {
        stopIndex: index,
        front: `Stop ${index + 1}: ${stopTitle(stop)}`,
        prompt: "Recall the key date, name, object or explanation for this stop.",
        answer
      };
    })
    .filter(Boolean);
}

function ensureFlashcardIndex(cards) {
  if (!cards.length) {
    activeFlashcardIndex = 0;
    return;
  }
  activeFlashcardIndex = Math.min(Math.max(activeFlashcardIndex, 0), cards.length - 1);
}

function renderToolSiteSelector(currentSite) {
  const readySites = studySites();
  return `
    <div class="tool-site-switcher" aria-label="Choose study location">
      ${readySites
        .map(
          (site) => `
            <button class="${site.id === currentSite.id ? "active" : ""}" data-tool-site="${site.id}" type="button">
              <strong>${site.title}</strong>
              <span>${site.stops.length} stops</span>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderOpenStopButton(site, stopIndex, label = "Open full stop") {
  return `<button class="secondary-action" data-open-stop="${stopIndex}" data-open-site="${site.id}" type="button">${label}</button>`;
}

function renderInlineStudyPanel(site) {
  const readyCount = site.stops.filter((_stop, index) => stopContent(site, index)).length;
  const rows = site.stops
    .map((stop, index) => {
      const content = stopContent(site, index);
      return `
        <article class="compact-stop-card">
          <span>${index + 1}</span>
          <div>
            <strong>${stopTitle(stop)}</strong>
            <p>${compactText(content?.exam || content?.background || "Notes will appear here once added.", 180)}</p>
          </div>
          ${renderOpenStopButton(site, index, "View")}
        </article>
      `;
    })
    .join("");

  return `
    <section class="content-panel">
      <div class="panel-heading-row">
        <div>
          <h2>Study Mode</h2>
          <p>${readyCount} of ${site.stops.length} stops currently have study notes.</p>
        </div>
        <button class="primary-action" data-jump-view="study" type="button">Open Study Mode</button>
      </div>
      <div class="compact-stop-list">${rows}</div>
    </section>
  `;
}

function renderInlinePracticePanel(site) {
  const content = stopContent(site, activeStopIndex);
  return `
    <section class="content-panel">
      <div class="panel-heading-row">
        <div>
          <h2>Practice Tools</h2>
          <p>Practise the current stop as a spoken guide moment.</p>
        </div>
        <button class="primary-action" data-jump-view="guide" type="button">Open Guide Mode</button>
      </div>
      <article class="guide-prompt">
        <p class="eyebrow">Stop ${activeStopIndex + 1}</p>
        <h3>${stopTitle(site.stops[activeStopIndex])}</h3>
        <div class="prompt-block">
          <strong>Say this clearly</strong>
          <p>${compactText(content?.script || content?.background || fallbackNoteText(content) || "Guide script will appear here once notes are added.", 420)}</p>
        </div>
      </article>
    </section>
  `;
}

function renderFlashcardsView() {
  const site = activeStudySite();
  const cards = buildFlashcards(site);
  ensureFlashcardIndex(cards);
  const card = cards[activeFlashcardIndex];

  if (!card) {
    return `
      <section class="tool-view">
        <div class="tool-header">
          <p class="eyebrow">Flashcards</p>
          <h1>No flashcards yet</h1>
          <p>Add stop summaries first and this page will build recall cards from them.</p>
        </div>
      </section>
    `;
  }

  return `
    <section class="tool-view">
      <div class="tool-header">
        <div>
          <p class="eyebrow">Flashcards</p>
          <h1>Recall Practice</h1>
          <p>Use these to test whether you can remember the strongest point for each stop without reading the notes first.</p>
        </div>
        <div class="tool-counter">${activeFlashcardIndex + 1} / ${cards.length}</div>
      </div>
      ${renderToolSiteSelector(site)}
      <section class="flashcard-layout">
        <aside class="flashcard-list">
          ${cards
            .map(
              (item, index) => `
                <button class="${index === activeFlashcardIndex ? "active" : ""}" data-flash-go="${index}" type="button">
                  <span>${item.stopIndex + 1}</span>
                  <strong>${stopTitle(site.stops[item.stopIndex])}</strong>
                </button>
              `
            )
            .join("")}
        </aside>
        <article class="flashcard-card">
          <p class="eyebrow">${site.title}</p>
          <h2>${escapeHtml(card.front)}</h2>
          <p>${escapeHtml(card.prompt)}</p>
          <div class="flashcard-answer${isFlashcardRevealed ? " revealed" : ""}">
            <strong>${isFlashcardRevealed ? "Answer" : "Answer hidden"}</strong>
            <p>${isFlashcardRevealed ? escapeHtml(card.answer) : "Try saying it out loud, then reveal the answer."}</p>
          </div>
          <div class="tool-actions">
            <button class="secondary-action" data-flash-action="prev" type="button">Previous</button>
            <button class="primary-action" data-flash-action="reveal" type="button">${isFlashcardRevealed ? "Hide answer" : "Reveal answer"}</button>
            <button class="secondary-action" data-flash-action="next" type="button">Next</button>
            ${renderOpenStopButton(site, card.stopIndex)}
          </div>
        </article>
      </section>
    </section>
  `;
}

function renderStudyModeView() {
  const site = activeStudySite();
  const readyStops = site.stops.filter((_stop, index) => stopContent(site, index)).length;

  return `
    <section class="tool-view">
      <div class="tool-header">
        <div>
          <p class="eyebrow">Study Mode</p>
          <h1>${site.title}</h1>
          <p>A structured revision board: route order, visual cues, and exam anchors in one place.</p>
        </div>
        <div class="tool-counter">${readyStops} / ${site.stops.length} ready</div>
      </div>
      ${renderToolSiteSelector(site)}
      <div class="study-dashboard">
        <article><strong>Route</strong><span>${site.stops.length} stops</span></article>
        <article><strong>Images</strong><span>${Object.keys(window.studyMedia?.[site.id] ?? {}).length} stop sets</span></article>
        <article><strong>Notes</strong><span>${readyStops} stop summaries</span></article>
      </div>
      <section class="study-board">
        <div class="study-column">
          <h2>Route Order</h2>
          ${site.stops
            .map(
              (stop, index) => `
                <button class="study-row" data-open-stop="${index}" data-open-site="${site.id}" type="button">
                  <span>${index + 1}</span>
                  <strong>${stopTitle(stop)}</strong>
                </button>
              `
            )
            .join("")}
        </div>
        <div class="study-column">
          <h2>What To Notice</h2>
          ${site.stops
            .map((stop, index) => {
              const content = stopContent(site, index);
              return `
                <article class="revision-note">
                  <span>${index + 1}</span>
                  <div>
                    <strong>${stopTitle(stop)}</strong>
                    <p>${compactText(content?.notice || content?.background || "Add visual cues for this stop.", 190)}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        <div class="study-column">
          <h2>Exam Anchors</h2>
          ${site.stops
            .map((stop, index) => {
              const content = stopContent(site, index);
              return `
                <article class="revision-note">
                  <span>${index + 1}</span>
                  <div>
                    <strong>${stopTitle(stop)}</strong>
                    <p>${compactText(content?.exam || fallbackNoteText(content) || "Add dates, names and comparisons here.", 220)}</p>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      </section>
    </section>
  `;
}

function renderGuideModeView() {
  const site = activeStudySite();
  activeStopIndex = Math.min(activeStopIndex, site.stops.length - 1);
  const content = stopContent(site, activeStopIndex);
  const nextStop = site.stops[activeStopIndex + 1];
  const leadImage = stopLeadImage(site, activeStopIndex);

  return `
    <section class="tool-view">
      <div class="tool-header">
        <div>
          <p class="eyebrow">Guide Mode</p>
          <h1>${site.title}</h1>
          <p>Practise the stop as if you are standing there: look, explain, then move the group onward.</p>
        </div>
        <div class="tool-counter">Stop ${activeStopIndex + 1} / ${site.stops.length}</div>
      </div>
      ${renderToolSiteSelector(site)}
      <section class="guide-layout">
        <aside class="guide-stop-list">
          ${site.stops
            .map(
              (stop, index) => `
                <button class="${index === activeStopIndex ? "active" : ""}" data-guide-stop="${index}" type="button">
                  <span>${index + 1}</span>
                  <strong>${stopTitle(stop)}</strong>
                </button>
              `
            )
            .join("")}
        </aside>
        <article class="guide-stage">
          <figure>
            <img src="${leadImage}" onerror="this.src='${site.image}'" alt="${site.title} stop ${activeStopIndex + 1}" />
          </figure>
          <div class="guide-prompt">
            <p class="eyebrow">Stop ${activeStopIndex + 1}</p>
            <h2>${stopTitle(site.stops[activeStopIndex])}</h2>
            <div class="prompt-grid">
              <div class="prompt-block">
                <strong>Look first</strong>
                <p>${compactText(content?.notice || "Add what to notice for this stop.", 360)}</p>
              </div>
              <div class="prompt-block">
                <strong>Say next</strong>
                <p>${compactText(content?.script || content?.background || fallbackNoteText(content) || "Add your spoken guide version here.", 520)}</p>
              </div>
              <div class="prompt-block">
                <strong>Remember</strong>
                <p>${compactText(content?.exam || "Add dates, names and must-remember points here.", 360)}</p>
              </div>
              <div class="prompt-block">
                <strong>Transition</strong>
                <p>${nextStop ? `Move to stop ${activeStopIndex + 2}: ${stopTitle(nextStop)}.` : "This is the final stop. Close by tying the route back to the main story."}</p>
              </div>
            </div>
            <div class="tool-actions">
              ${renderOpenStopButton(site, activeStopIndex)}
              <button class="primary-action" data-guide-next type="button">${nextStop ? "Next stop" : "Back to first stop"}</button>
            </div>
          </div>
        </article>
      </section>
    </section>
  `;
}

function renderNotesView() {
  const query = notesSearchQuery.trim();
  const results = noteSearchResults(query);
  const totalEntries = noteSearchEntries().filter((entry) => entry.content).length;

  return `
    <section class="tool-view notes-search-view">
      <div class="tool-header">
        <div>
          <p class="eyebrow">Notes</p>
          <h1>Search the Route</h1>
          <p>Find names, dates, objects or themes when you remember the detail but not the stop.</p>
        </div>
        <div class="tool-counter" data-notes-counter>${results.length} / ${totalEntries}</div>
      </div>
      <section class="search-panel">
        <label for="notesSearch">Search notes</label>
        <input id="notesSearch" type="search" value="${escapeHtml(notesSearchQuery)}" placeholder="Try menorah, Claudius, agape, Muslim cemetery..." autocomplete="off" autofocus />
      </section>
      <section class="search-results" aria-live="polite">${renderNoteSearchResults(results)}</section>
    </section>
  `;
}

function renderNoteSearchResults(results) {
  return results.length
    ? results
        .map(({ site, stop, stopIndex, content }) => {
          const summary = compactText(content?.exam || content?.background || content?.script || fallbackNoteText(content), 260);
          return `
            <article class="search-result-card">
              <div>
                <p class="eyebrow">${escapeHtml(site.title)} - Stop ${stopIndex + 1}</p>
                <h2>${escapeHtml(stopTitle(stop))}</h2>
                <p>${escapeHtml(summary)}</p>
              </div>
              <button class="secondary-action" data-open-stop="${stopIndex}" data-open-site="${site.id}" type="button">Open</button>
            </article>
          `;
        })
        .join("")
    : `<article class="empty-search-result"><h2>No matches</h2><p>Try a shorter word, a date, a person, or an object name.</p></article>`;
}

function updateNotesSearchResults() {
  const results = noteSearchResults(notesSearchQuery.trim());
  const totalEntries = noteSearchEntries().filter((entry) => entry.content).length;
  const resultsPanel = document.querySelector(".search-results");
  const counter = document.querySelector("[data-notes-counter]");

  if (resultsPanel) {
    resultsPanel.innerHTML = renderNoteSearchResults(results);
  }

  if (counter) {
    counter.textContent = `${results.length} / ${totalEntries}`;
  }
}

function stopImages(site, index) {
  const manifestImages = window.studyMedia?.[site.id]?.[String(index + 1)];
  if (manifestImages?.length) {
    return manifestImages;
  }

  const folder = mediaFolders[site.id];
  if (!folder) {
    return [site.image];
  }

  const stopNumber = index + 1;
  const extensions = ["jpg", "jpeg", "png", "webp"];
  const orders = [1, "01", 0, "00", ...Array.from({ length: 19 }, (_item, orderIndex) => orderIndex + 2)];
  return orders.flatMap((order) => extensions.map((extension) => `${folder}/${stopNumber}.${order}.${extension}`));
}

function stopLeadImage(site, index) {
  const images = stopImages(site, index);
  if (images.length) {
    return images[0];
  }
  return `${mediaFolders[site.id] ?? ""}/${index + 1}.1.jpg`;
}

function routePoint(index, total) {
  const columns = Math.min(4, Math.max(3, Math.ceil(Math.sqrt(total))));
  const rows = Math.ceil(total / columns);
  const row = Math.floor(index / columns);
  const column = index % columns;
  const visualColumn = row % 2 ? columns - 1 - column : column;
  return {
    x: 10 + (visualColumn * 80) / Math.max(1, columns - 1),
    y: 16 + (row * 68) / Math.max(1, rows - 1)
  };
}

function setView(view) {
  activeView = view;
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.view === view));
  render();
}

function openSite(siteId) {
  activeSiteId = siteId;
  activeStopIndex = 0;
  activeImageIndex = 0;
  isImageZoomOpen = false;
  activeTab = "stops";
  setView("locations");
}

function renderHome() {
  appView.innerHTML = `
    <section class="home-view">
      <div class="section-heading">
        <p class="eyebrow">Tour revision library</p>
        <h1>5 Iconic Locations</h1>
        <p>Study. Explore. Remember.</p>
      </div>
      <div class="location-grid">
        ${sites
          .map(
            (site, index) => `
              <button class="location-card" style="--image:url('${site.image}')" data-site="${site.id}" type="button">
                <span class="card-image"></span>
                <span class="card-body">
                  <span class="number-badge">${index + 1}</span>
                  <strong>${site.title}</strong>
                  <small>${site.subtitle}</small>
                  <span class="micro-row">${site.stops.length} stops</span>
                  <span class="tag-row">${site.tags.map((tag) => `<em>${tag}</em>`).join("")}</span>
                </span>
              </button>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderRouteMap(site) {
  return site.stops
    .map((stop, index) => {
      const point = routePoint(index, site.stops.length);
      return `
        <button class="route-node${index === activeStopIndex ? " active" : ""}" style="--x:${point.x}%;--y:${point.y}%" data-stop="${index}" type="button">
          ${index + 1}
        </button>
      `;
    })
    .join("");
}

function renderStopMedia(site) {
  const images = stopImages(site, activeStopIndex);
  const safeImageIndex = Math.min(activeImageIndex, images.length - 1);
  const mainImage = images[safeImageIndex];
  const candidates = images.join("|");

  return `
    <div class="stop-media-gallery">
      <figure class="media-viewer">
        <button class="zoom-trigger" data-zoom-image type="button" aria-label="Zoom selected image">
          <img src="${mainImage}" data-candidates="${candidates}" data-candidate-index="${safeImageIndex}" onerror="window.tryNextStudyImage(this)" alt="${site.title} stop ${activeStopIndex + 1} image ${safeImageIndex + 1}" />
        </button>
        <figcaption>
          <span>Image ${safeImageIndex + 1} of ${images.length}</span>
          <button data-zoom-image type="button">Zoom image</button>
        </figcaption>
      </figure>
      <div class="media-strip">${images
        .map(
          (image, index) => `
            <button class="${index === safeImageIndex ? "active" : ""}" data-image="${index}" type="button">
              <img src="${image}" onerror="this.closest('button').remove()" alt="${site.title} stop ${activeStopIndex + 1} thumbnail ${index + 1}" />
            </button>
          `
        )
        .join("")}</div>
    </div>
  `;
}

function renderImageZoom(site) {
  if (!isImageZoomOpen) {
    return "";
  }

  const images = stopImages(site, activeStopIndex);
  const safeImageIndex = Math.min(activeImageIndex, images.length - 1);
  const image = images[safeImageIndex];

  return `
    <div class="image-modal" role="dialog" aria-modal="true" aria-label="Zoomed image">
      <div class="image-modal-bar">
        <strong>${stopTitle(site.stops[activeStopIndex])}</strong>
        <span data-zoom-counter>Image ${safeImageIndex + 1} of ${images.length}</span>
        <div class="image-modal-actions">
          <button data-zoom-prev type="button">Previous</button>
          <button data-zoom-next type="button">Next</button>
          <button data-close-zoom type="button">Close</button>
        </div>
      </div>
      <div class="image-modal-stage">
        <img src="${image}" data-candidates="${images.join("|")}" data-candidate-index="${safeImageIndex}" onerror="window.tryNextStudyImage(this)" alt="${site.title} stop ${activeStopIndex + 1} enlarged image ${safeImageIndex + 1}" />
      </div>
    </div>
  `;
}

function updateSelectedStopImage() {
  const site = activeSite();
  const images = stopImages(site, activeStopIndex);
  if (!images.length) {
    return;
  }

  const safeImageIndex = Math.min(activeImageIndex, images.length - 1);
  const image = images[safeImageIndex];
  const candidates = images.join("|");
  const altText = `${site.title} stop ${activeStopIndex + 1} image ${safeImageIndex + 1}`;
  const mainImage = document.querySelector(".media-viewer img");
  const imageCounter = document.querySelector(".media-viewer figcaption span");
  const zoomCounter = document.querySelector("[data-zoom-counter]");

  if (mainImage) {
    mainImage.onerror = () => window.tryNextStudyImage(mainImage);
    mainImage.dataset.candidates = candidates;
    mainImage.dataset.candidateIndex = String(safeImageIndex);
    mainImage.alt = altText;
    mainImage.src = image;
  }

  if (imageCounter) {
    imageCounter.textContent = `Image ${safeImageIndex + 1} of ${images.length}`;
  }

  if (zoomCounter) {
    zoomCounter.textContent = `Image ${safeImageIndex + 1} of ${images.length}`;
  }

  document.querySelectorAll("[data-image]").forEach((button) => {
    button.classList.toggle("active", Number(button.dataset.image) === safeImageIndex);
  });

  const zoomImage = document.querySelector(".image-modal-stage img");
  if (zoomImage) {
    zoomImage.onerror = () => window.tryNextStudyImage(zoomImage);
    zoomImage.dataset.candidates = candidates;
    zoomImage.dataset.candidateIndex = String(safeImageIndex);
    zoomImage.alt = `${site.title} stop ${activeStopIndex + 1} enlarged image ${safeImageIndex + 1}`;
    zoomImage.src = image;
  }
}

function openImageZoom() {
  isImageZoomOpen = true;
  if (!document.querySelector(".image-modal")) {
    document.querySelector(".stops-layout")?.insertAdjacentHTML("beforeend", renderImageZoom(activeSite()));
  }
  updateSelectedStopImage();
}

function closeImageZoom() {
  isImageZoomOpen = false;
  document.querySelector(".image-modal")?.remove();
}

function changeZoomImage(step) {
  const images = stopImages(activeSite(), activeStopIndex);
  if (!images.length) {
    return;
  }

  activeImageIndex = (activeImageIndex + step + images.length) % images.length;
  updateSelectedStopImage();
}

function renderStopDetails(site) {
  const content = stopContent(site, activeStopIndex);
  if (!content) {
    return `
      <details open><summary>What to notice</summary><p>Add visual cues for this exact place.</p></details>
      <details><summary>Historical background</summary><p>Add the historical notes you will send me.</p></details>
      <details><summary>Guide script</summary><p>Add your spoken tour version here.</p></details>
      <details><summary>Exam notes</summary><p>Add dates, names, comparisons and must-remember facts.</p></details>
    `;
  }

  const fullParagraphs = content.full?.paragraphs ?? [];
  const summarySections = [
    ["What to notice", content.notice],
    ["Historical background", content.background],
    ["Guide script", content.script],
    ["Exam notes", content.exam]
  ].filter((section) => section[1]);

  return `
    ${summarySections
      .map(
        ([title, text], index) =>
          `<details ${index === 0 ? "open" : ""}><summary>${escapeHtml(title)}</summary><p>${escapeHtml(text)}</p></details>`
      )
      .join("")}
    ${
      fullParagraphs.length
        ? `<details open class="full-notes"><summary>Full source notes</summary>${fullParagraphs
            .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
            .join("")}</details>`
        : ""
    }
  `;
}

function renderStopRows(site) {
  return site.stops
    .map(
      (stop, index) => `
        <button class="stop-row${index === activeStopIndex ? " active" : ""}" data-stop="${index}" type="button">
          <span>${index + 1}</span>
          <img src="${stopLeadImage(site, index)}" onerror="this.src='${site.image}'" alt="" />
          <strong>${stopTitle(stop)}</strong>
          <small>${index === activeStopIndex ? "Open" : "View"}</small>
        </button>
      `
    )
    .join("");
}

function renderRouteStrip(site) {
  return `
    <div class="route-strip" aria-label="${site.title} stop sequence">
      ${site.stops
        .map(
          (_stop, index) => `
            <button class="${index === activeStopIndex ? "active" : ""}" data-stop="${index}" type="button">
              ${index + 1}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderTab(site) {
  if (activeTab === "overview") {
    return `
      <section class="content-panel">
        <h2>Overview</h2>
        <p>${site.summary}</p>
        <div class="theme-grid">
          <article>Route sequence is ready.</article>
          <article>Detailed notes can be added stop by stop.</article>
          <article>Photos and video slots can be attached later.</article>
        </div>
      </section>
    `;
  }

  if (activeTab === "themes") {
    return `
      <section class="content-panel">
        <h2>Key Themes</h2>
        <div class="theme-icons">
          ${site.tags.map((tag) => `<article><span>${tag[0]}</span><strong>${tag}</strong></article>`).join("")}
        </div>
      </section>
    `;
  }

  if (activeTab === "study") {
    return renderInlineStudyPanel(site);
  }

  if (activeTab === "practice") {
    return renderInlinePracticePanel(site);
  }

  return `
    <section class="stops-layout">
      <div class="stop-list-card">
        <h2>Tour Stops</h2>
        <p>Follow the route and open each stop.</p>
        <div class="stop-list">${renderStopRows(site)}</div>
      </div>
      <article class="selected-stop-card">
        ${renderRouteStrip(site)}
        <div class="stop-detail-heading">
          <div>
            <p class="eyebrow">Stop ${activeStopIndex + 1} of ${site.stops.length}</p>
            <h2>${stopTitle(site.stops[activeStopIndex])}</h2>
            <p>${site.stops[activeStopIndex]}</p>
          </div>
        </div>
        <div class="study-columns">
          ${renderStopMedia(site)}
          <div class="accordion-list notes-panel">
            ${renderStopDetails(site)}
          </div>
        </div>
      </article>
      ${renderImageZoom(site)}
    </section>
  `;
}

function renderLocation() {
  const site = activeSite();
  appView.innerHTML = `
    <section class="location-view ${activeTab === "stops" ? "stops-mode" : ""}">
      <button class="back-link" type="button" data-home>Back to Locations</button>
      <section class="hero-panel" style="--image:url('${site.image}')">
        <div class="hero-copy">
          <h1>${site.title}</h1>
          <p>${site.subtitle}</p>
          <span>${site.summary}</span>
          <div class="hero-stats">
            <strong>${site.stops.length} stops</strong>
            <strong>Study route</strong>
            <strong>Guide mode</strong>
          </div>
        </div>
        <div class="hero-image"></div>
      </section>
      <nav class="tab-bar" aria-label="Location sections">
        ${["overview", "stops", "themes", "study", "practice"]
          .map((tab) => `<button class="${tab === activeTab ? "active" : ""}" data-tab="${tab}" type="button">${tab}</button>`)
          .join("")}
      </nav>
      ${renderTab(site)}
    </section>
  `;
}

function renderPlaceholder() {
  appView.innerHTML = `
    <section class="empty-mode">
      <h1>${activeView}</h1>
      <p>This section will use the same stop-by-stop structure once we decide what belongs here.</p>
    </section>
  `;
}

function render() {
  if (activeView === "home") {
    renderHome();
    return;
  }

  if (activeView === "locations") {
    renderLocation();
    return;
  }

  if (activeView === "flashcards") {
    appView.innerHTML = renderFlashcardsView();
    return;
  }

  if (activeView === "study") {
    appView.innerHTML = renderStudyModeView();
    return;
  }

  if (activeView === "guide") {
    appView.innerHTML = renderGuideModeView();
    return;
  }

  if (activeView === "notes") {
    appView.innerHTML = renderNotesView();
    return;
  }

  renderPlaceholder();
}

document.addEventListener("input", (event) => {
  if (event.target.id === "notesSearch") {
    notesSearchQuery = event.target.value;
    updateNotesSearchResults();
  }
});

document.addEventListener("click", (event) => {
  const toolSiteButton = event.target.closest("[data-tool-site]");
  const flashGoButton = event.target.closest("[data-flash-go]");
  const flashActionButton = event.target.closest("[data-flash-action]");
  const guideStopButton = event.target.closest("[data-guide-stop]");
  const openStopButton = event.target.closest("[data-open-stop]");
  const jumpViewButton = event.target.closest("[data-jump-view]");
  const siteButton = event.target.closest("[data-site]");
  const stopButton = event.target.closest("[data-stop]");
  const tabButton = event.target.closest("[data-tab]");

  if (event.target.closest("[data-sidebar-toggle]")) {
    isSidebarCollapsed = !isSidebarCollapsed;
    updateSidebarState();
    return;
  }

  if (event.target.closest("[data-home]")) {
    setView("home");
    return;
  }

  if (toolSiteButton) {
    activeSiteId = toolSiteButton.dataset.toolSite;
    activeStopIndex = 0;
    activeImageIndex = 0;
    activeFlashcardIndex = 0;
    isFlashcardRevealed = false;
    isImageZoomOpen = false;
    render();
    return;
  }

  if (jumpViewButton) {
    setView(jumpViewButton.dataset.jumpView);
    return;
  }

  if (openStopButton) {
    activeSiteId = openStopButton.dataset.openSite ?? activeSiteId;
    activeStopIndex = Number(openStopButton.dataset.openStop);
    activeImageIndex = 0;
    activeTab = "stops";
    isImageZoomOpen = false;
    setView("locations");
    return;
  }

  if (flashGoButton) {
    activeFlashcardIndex = Number(flashGoButton.dataset.flashGo);
    isFlashcardRevealed = false;
    render();
    return;
  }

  if (flashActionButton) {
    const cards = buildFlashcards(activeStudySite());
    ensureFlashcardIndex(cards);
    if (flashActionButton.dataset.flashAction === "prev") {
      activeFlashcardIndex = (activeFlashcardIndex - 1 + cards.length) % cards.length;
      isFlashcardRevealed = false;
    }
    if (flashActionButton.dataset.flashAction === "next") {
      activeFlashcardIndex = (activeFlashcardIndex + 1) % cards.length;
      isFlashcardRevealed = false;
    }
    if (flashActionButton.dataset.flashAction === "reveal") {
      isFlashcardRevealed = !isFlashcardRevealed;
    }
    render();
    return;
  }

  if (guideStopButton) {
    activeStopIndex = Number(guideStopButton.dataset.guideStop);
    activeImageIndex = 0;
    isImageZoomOpen = false;
    render();
    return;
  }

  if (event.target.closest("[data-guide-next]")) {
    const site = activeStudySite();
    activeStopIndex = (activeStopIndex + 1) % site.stops.length;
    activeImageIndex = 0;
    render();
    return;
  }

  if (siteButton) {
    openSite(siteButton.dataset.site);
    return;
  }

  if (stopButton) {
    activeStopIndex = Number(stopButton.dataset.stop);
    activeImageIndex = 0;
    isImageZoomOpen = false;
    activeTab = "stops";
    renderLocation();
    return;
  }

  const imageButton = event.target.closest("[data-image]");
  if (imageButton) {
    activeImageIndex = Number(imageButton.dataset.image);
    updateSelectedStopImage();
    return;
  }

  if (event.target.closest("[data-zoom-image]")) {
    openImageZoom();
    return;
  }

  if (event.target.closest("[data-zoom-prev]")) {
    changeZoomImage(-1);
    return;
  }

  if (event.target.closest("[data-zoom-next]")) {
    changeZoomImage(1);
    return;
  }

  if (event.target.closest("[data-close-zoom]")) {
    closeImageZoom();
    return;
  }

  if (tabButton) {
    activeTab = tabButton.dataset.tab;
    renderLocation();
  }
});

navItems.forEach((item) => item.addEventListener("click", () => setView(item.dataset.view)));
updateSidebarState();

window.tryNextStudyImage = (image) => {
  const candidates = image.dataset.candidates?.split("|") ?? [];
  const currentIndex = Number(image.dataset.candidateIndex ?? 0);
  const nextIndex = currentIndex + 1;

  if (nextIndex < candidates.length) {
    image.dataset.candidateIndex = String(nextIndex);
    image.src = candidates[nextIndex];
    return;
  }

  image.onerror = null;
  image.src = activeSite().image;
};

render();
