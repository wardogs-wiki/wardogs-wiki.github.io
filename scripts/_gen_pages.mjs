import { writeFileSync } from "node:fs";

const LAST = "2026-09-21";

/** @type {import('../config/types').SeoPageDefinition[]} */
const pages = [
  {
    enabled: true,
    slug: "wardogs-mortar-calculator",
    pageType: "tool",
    toolKind: "wardogs-mortar-calculator",
    navLabel: "Mortar",
    title: "WARDOGS Mortar Calculator – Range, Azimuth & Artillery",
    description:
      "Use the WARDOGS mortar calculator for range, azimuth and artillery setup, with verified firing guidance, map workflow and practical mortar tips.",
    keywords: [
      "wardogs mortar calculator",
      "wardogs mortar",
      "wardogs artillery",
      "wardogs mortar range",
      "wardogs azimuth",
    ],
    primaryKeyword: "wardogs mortar calculator",
    secondaryKeywords: [
      "wardogs mortar",
      "wardogs artillery",
      "wardogs mortar range",
      "wardogs azimuth",
      "wardogs map mortar",
    ],
    searchIntent:
      "Players want a practical WARDOGS mortar calculator for range, azimuth and firing setup during matches.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1500,
    sourceNotes: [
      "Steam Early Access facts: BULKHEAD / Team17, FOB building, vehicles, large Control Zones.",
      "Community/IGN-style mortar workflow: build at FOB with building supplies; use map coordinates for distance and azimuth; dial range in-game.",
      "Typical working distance often discussed by players around roughly 700 meters; not an official max-range claim.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Interactive tool",
      heading: "WARDOGS Mortar Calculator",
      lead: "Get usable range and azimuth from map coordinates, then dial your in-game mortar sights with a clean firing workflow built for WARDOGS matches.",
    },
    sections: [
      {
        id: "how-to-use-the-wardogs-mortar-calculator",
        heading: "How to Use the WARDOGS Mortar Calculator",
        intro:
          "The WARDOGS mortar calculator is designed for the same loop squads already use: mark positions, measure the shot, then adjust in the mortar seat.",
        paragraphs: [
          "Start by opening the WARDOGS mortar calculator beside your map view. Pick your mortar position first, then mark the target area you want to suppress or destroy. The calculator returns distance and azimuth from those coordinates so you can set the tube without guessing from memory alone.",
          "In WARDOGS, mortars are part of the broader fortification and fire-support loop. A practical player workflow many squads follow is to establish or reinforce a Forward Operating Base, bring building supplies, and place the mortar where it has cover and a clear radio link to spotters. Exact build costs can change during Early Access, so treat supply planning as a squad checklist rather than a fixed spreadsheet.",
          "Once the tool shows range and azimuth, switch into the mortar and dial the range using the in-game sights. Keep the calculator open for corrections when your spotter calls a miss left, right, short, or long. Small azimuth adjustments matter more than large panic swings, especially when the target is near friendlies or a contested Control Zone.",
          "Use the same process for follow-up barrages. If the enemy relocates twenty to forty meters, update the target pin instead of rebuilding the entire solution from scratch. That habit keeps the WARDOGS mortar calculator useful under pressure instead of becoming a one-shot novelty.",
        ],
        steps: [
          {
            heading: "Mark mortar and target",
            description:
              "Set your firing position and the impact point on the map so both coordinates are clear to the gunner and the spotter.",
          },
          {
            heading: "Read distance and azimuth",
            description:
              "Use the WARDOGS mortar calculator output for range and direction, then communicate the numbers in a short callout.",
          },
          {
            heading: "Dial sights and fire for effect",
            description:
              "Match the in-game range dial to the calculated distance, fire a spotting round if needed, then correct and fire for effect.",
          },
        ],
        links: [
          {
            label: "WARDOGS Map Tool",
            slug: "wardogs-map",
            description: "Pick coordinates and review map layout before you calculate the shot.",
          },
        ],
      },
      {
        id: "wardogs-mortar-range-and-azimuth",
        heading: "WARDOGS Mortar Range and Azimuth",
        intro:
          "Range and azimuth are the two numbers that turn a map pin into a usable mortar solution.",
        paragraphs: [
          "Range is the ground distance between the mortar and the target. Azimuth is the direction you must face the tube so the round travels along that line. The WARDOGS mortar calculator focuses on those two values because they transfer cleanly into gameplay without inventing elevation formulas that the client may not expose the same way.",
          "Players typically work within roughly 700 meters for practical mortar support. That figure is a community working envelope, not an official published maximum, and real engagement distance still depends on terrain, cover, and whether your spotter can actually see the impact. If a requested fire mission sits far outside the distances your squad has been landing, reposition the mortar or choose a different support option.",
          "Azimuth mistakes usually come from confusing map north with the direction your character is facing, or from calling degrees in the wrong direction when correcting. Agree on a simple language: “add five degrees right” should always mean the same thing to gunner and spotter. Write the first solution down or leave the calculator visible so mid-fight panic does not wipe the baseline.",
          "When the target is on a slope, behind a ridge, or inside dense structures, expect the first round to need adjustment even if the planar distance looks perfect. Destruction and building cover in WARDOGS can hide impacts, so rely on a spotter’s voice call rather than assuming every miss is a calculator error.",
        ],
        subsections: [
          {
            heading: "What the calculator should and should not claim",
            paragraphs: [
              "A trustworthy WARDOGS mortar calculator should give distance and azimuth from coordinates and help you repeat corrections. It should not invent MIL tables, exact blast radii, or damage numbers that are not publicly confirmed.",
            ],
            bullets: [
              "Do use coordinate-based range and direction.",
              "Do dial the in-game range sight after you read the tool.",
              "Do not treat community range chatter as a hard official cap.",
              "Do not substitute the calculator for a spotter when friendlies are near the impact zone.",
            ],
          },
        ],
      },
      {
        id: "mortar-vs-artillery-in-wardogs",
        heading: "Mortar vs Artillery in WARDOGS",
        intro:
          "Players often search mortar and artillery together, but the practical jobs on the battlefield are not identical.",
        paragraphs: [
          "Mortars shine when your squad needs responsive, local fire support tied to a FOB or a forward hold. They are buildable support pieces in the fortification loop, which means logistics, builders, and defenders all share responsibility for keeping the tube alive. Artillery, in the broader sense players use the word, usually means heavier or more distant fire support and vehicle-borne pressure rather than a single emplaced tube.",
          "Choose the WARDOGS mortar calculator workflow when you already control ground near the fight and can protect the gunner. If the enemy is collapsing a flank far from your logistics chain, a mortar that cannot be resupplied or defended becomes a liability. In those moments, infantry pushes, vehicle harassment, or repositioning the whole FOB footprint may matter more than forcing a bad fire mission.",
          "Team composition matters. A mortar without a spotter wastes rounds. A spotter without a gunner wastes information. Pair fire support with a loadout plan that keeps builders and logistics players funded, because starting cash and persistent money in WARDOGS reward teams that keep support roles alive across lives.",
        ],
        links: [
          {
            label: "WARDOGS Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Build support and infantry kits that protect your fire-support loop.",
          },
        ],
      },
      {
        id: "using-the-wardogs-map-with-the-mortar-calculator",
        heading: "Using the WARDOGS Map with the Mortar Calculator",
        intro:
          "The map tool and the WARDOGS mortar calculator are strongest when used as one workflow.",
        paragraphs: [
          "Open the WARDOGS map tool to understand Control Zones, likely FOB approaches, and the terrain corridor your rounds must travel. Early Access map names players currently use include Bakurani, Ozeti, and Zestafona. Treat those as the live community map set rather than a permanent final list, and always confirm the map name in your server browser before planning long-range support.",
          "Coordinate picking is the bridge between the two tools. Drop a pin on the mortar, drop a pin on the target, then feed those positions into the WARDOGS mortar calculator. If your squad shares a common callout language for grid landmarks, add that landmark name to the radio message so infantry knows where the danger close fire is landing.",
          "Do not invent fixed FOB coordinates and memorize them as gospel. FOB placement is a match decision. Use the map to evaluate cover, supply routes, and angle to the active Control Zones, then recalculate whenever the tube moves. A calculator that is updated beats a perfect solution for a mortar that no longer exists.",
        ],
        links: [
          {
            label: "Open the WARDOGS Map",
            slug: "wardogs-map",
            description: "Review map layout and pick coordinates for your next fire mission.",
          },
          {
            label: "WARDOGS Servers Guide",
            slug: "wardogs-servers",
            description: "Find a stable server before you invest in a long mortar defense.",
          },
        ],
      },
      {
        id: "common-mortar-aiming-mistakes",
        heading: "Common Mortar Aiming Mistakes",
        intro:
          "Most missed barrages come from process errors, not from the idea of using a calculator.",
        paragraphs: [
          "The first mistake is firing without a confirmed mortar position. If the tube was rebuilt a few meters away after a raid, yesterday’s azimuth is wrong. Always refresh both pins in the WARDOGS mortar calculator after a rebuild or a redeploy.",
          "The second mistake is correcting the wrong axis. If the spotter says the round landed left, change azimuth; if it landed short or long, change range. Mixing those corrections creates a wandering impact that never settles. Keep one variable fixed while you solve the other whenever possible.",
          "The third mistake is ignoring friendly movement. WARDOGS fights shift quickly around Control Zones, vehicles, and destruction. A perfect solution on an empty ridge becomes a team-damage risk when your own squad pushes through the same compound. Call danger-close clearly, or hold fire until infantry is clear.",
          "The fourth mistake is overconfidence in maximum distance chatter. Players typically work within roughly 700 meters, but that does not mean every shot at the edge of that envelope is smart. Closer, observed fire with a living spotter usually wins more zones than speculative long shots that reveal your FOB for no gain.",
        ],
        table: {
          caption: "Quick mortar correction checklist",
          columns: ["Problem", "Likely fix", "Verify with"],
          rows: [
            ["Impact left or right", "Adjust azimuth in small steps", "Spotter call + calculator refresh"],
            ["Impact short or long", "Adjust range dial to match distance", "Updated target pin"],
            ["No impact seen", "Confirm map, cover, and that rounds are leaving the tube", "Spotter eyes and sound"],
            ["Solution suddenly wrong", "Re-mark mortar position after rebuild or move", "Map coordinates"],
          ],
        },
      },
    ],
    faq: [
      {
        question: "What does the WARDOGS mortar calculator actually calculate?",
        answer:
          "It turns mortar and target coordinates into distance and azimuth so you can dial the in-game sights. It is a firing workflow aid, not a damage simulator.",
      },
      {
        question: "How do I get mortar coordinates in WARDOGS?",
        answer:
          "Use the WARDOGS map tool to pick your firing position and the target position, then enter or transfer those points into the calculator before you shoot.",
      },
      {
        question: "Is 700 meters the official mortar max range?",
        answer:
          "No official max range is claimed here. Players typically work within roughly 700 meters, so treat that as a practical community envelope and verify what your squad can land in-match.",
      },
      {
        question: "Can I build a mortar without a FOB?",
        answer:
          "The practical workflow most players follow is to place and support mortars through the FOB and building-supply loop. Confirm the current build requirements in your match, because Early Access details can shift.",
      },
      {
        question: "Should I use the calculator without a spotter?",
        answer:
          "You can take an opening shot from coordinates alone, but a spotter makes corrections safer and faster, especially near contested Control Zones.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-map", "wardogs-best-loadouts", "wardogs-servers"],
    densityTargets: [{ term: "wardogs mortar calculator", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-map",
    pageType: "tool",
    toolKind: "wardogs-map",
    navLabel: "Map",
    title: "WARDOGS Map Tool – Interactive Maps, FOBs & Key Locations",
    description:
      "Explore the WARDOGS map tool for maps, FOBs, objectives and key locations, with quick links to coordinates and the mortar calculator.",
    keywords: [
      "wardogs map",
      "wardogs maps",
      "wardogs fob",
      "wardogs locations",
      "wardogs bakurani",
    ],
    primaryKeyword: "wardogs map",
    secondaryKeywords: [
      "wardogs maps",
      "wardogs fob map",
      "wardogs key locations",
      "wardogs bakurani",
      "wardogs ozeti",
      "wardogs zestafona",
    ],
    searchIntent:
      "Players need an interactive WARDOGS map for FOBs, objectives, coordinates and orientation across current maps.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1500,
    sourceNotes: [
      "Steam: Control Zones on roughly 2x2 km battlefields, FOB building, vehicles, helicopters, up to 100 players across 3 teams.",
      "Community map names in current tools/discussion: Bakurani, Ozeti, Zestafona.",
      "No fabricated static FOB coordinates; tool is for live coordinate picking.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Interactive tool",
      heading: "WARDOGS Map Tool",
      lead: "Orient on current WARDOGS maps, mark FOBs and objectives, and copy coordinates into your mortar and squad workflows without relying on memorized guesswork.",
    },
    sections: [
      {
        id: "how-to-use-the-wardogs-map-tool",
        heading: "How to Use the WARDOGS Map Tool",
        intro:
          "The WARDOGS map tool is a planning surface for coordinates, routes, and objective reads before you commit a squad.",
        paragraphs: [
          "Open the WARDOGS map for the battlefield your server is running, then identify the active Control Zones and the corridors that connect them. WARDOGS battles play out on large Control Zone maps measured around two by two kilometers, with up to one hundred players split across three teams racing toward one hundred points. That scale rewards teams that share a map language instead of scattering into isolated fights.",
          "Use coordinate picking whenever you need a mortar solution, a rally point, or a logistics drop. Click or mark the position, read the coordinates, and pass them in voice or text with a short landmark description. The goal is shared awareness: every player should know whether a pin means “build here,” “attack here,” or “danger close.”",
          "Keep the tool nearby during the match rather than treating it as a pre-game poster. FOBs move, zones flip, and destruction changes which approaches stay safe. A quick re-check on the WARDOGS map often saves a full squad wipe on a route that was good ten minutes earlier.",
        ],
        steps: [
          {
            heading: "Confirm the map name",
            description:
              "Match the server’s map to Bakurani, Ozeti, Zestafona, or whichever map is currently loaded before you plan routes.",
          },
          {
            heading: "Mark objectives and support positions",
            description:
              "Pin Control Zones, likely FOB ground, and overwatch or mortar positions your squad actually intends to use.",
          },
          {
            heading: "Export coordinates to the fight",
            description:
              "Share pins with gunners, drivers, and builders, then update them when the front line moves.",
          },
        ],
        links: [
          {
            label: "WARDOGS Mortar Calculator",
            slug: "wardogs-mortar-calculator",
            description: "Turn map coordinates into range and azimuth for fire support.",
          },
        ],
      },
      {
        id: "current-wardogs-maps-and-key-locations",
        heading: "Current WARDOGS Maps and Key Locations",
        intro:
          "Early Access map names used by players and community tools currently include Bakurani, Ozeti, and Zestafona.",
        paragraphs: [
          "Present those names as the live set players are navigating right now, not as a promise that the roster will never expand. When you load into a server, verify the map title in the browser or loading screen, then open the matching WARDOGS map layer so your pins land on the correct terrain.",
          "Key locations on any WARDOGS map are less about tourist landmarks and more about functional ground: Control Zone interiors, covered FOB pockets, vehicle routes, helicopter landing lanes, and sightlines for recon. Because the mode is zone control under pressure, the “important” location is whichever ground lets your team score the next points while keeping a supply line alive.",
          "Avoid memorizing fake static FOB coordinates from random screenshots. A strong FOB on one round can be a death trap on the next if the zone rotation or enemy vehicle path changed. Use the WARDOGS map to evaluate cover and distance live, then rebuild your pins for that match.",
        ],
        subsections: [
          {
            heading: "What to mark first on every map",
            paragraphs: [
              "A simple marking order keeps squads aligned even when voice chat is noisy.",
            ],
            bullets: [
              "Active Control Zones and the next likely flip targets",
              "Candidate FOB ground with cover and supply access",
              "Vehicle approaches and chokepoints",
              "Mortar or overwatch positions with clear radio contact",
            ],
          },
        ],
        table: {
          caption: "Map names players currently reference",
          columns: ["Map name", "How to treat it", "Planning focus"],
          rows: [
            ["Bakurani", "Current Early Access map name used by players", "Zones, FOB pockets, vehicle lanes"],
            ["Ozeti", "Current Early Access map name used by players", "Sightlines, logistics routes, hold ground"],
            ["Zestafona", "Current Early Access map name used by players", "Flank corridors and support positions"],
          ],
        },
      },
      {
        id: "fobs-objectives-and-coordinate-workflow",
        heading: "FOBs, Objectives and Coordinate Workflow",
        intro:
          "FOB placement and objective timing are the two map decisions that decide whether a squad can stay in the fight.",
        paragraphs: [
          "WARDOGS lets teams build Forward Operating Bases as part of the tactical loop that also includes vehicles, helicopters, destruction, and proximity voice. On the WARDOGS map, a good FOB marker balances distance to the active zones against defensibility and resupply. Too close and you get raided; too far and your infantry burns time walking while the point clock runs.",
          "Objectives are the Control Zones that feed the race to one hundred points. Read which zones your team can realistically contest with the players online, not which zones look prestigious on a static image. Three-team pressure means a two-team brawl on one point can hand the third team an easier score elsewhere.",
          "Coordinate workflow should be boring and repeatable. Builder drops a FOB pin. Logistics confirms the route. Squad lead marks the attack pin. Mortar team copies both into the calculator if fire support is coming. When everyone trusts the WARDOGS map pins, you spend less time arguing and more time executing.",
        ],
        links: [
          {
            label: "Best WARDOGS Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Equip builders, infantry and logistics roles that can hold mapped ground.",
          },
        ],
      },
      {
        id: "pairing-the-map-with-mortar-and-squad-tools",
        heading: "Pairing the Map with Mortar and Squad Tools",
        intro:
          "The WARDOGS map becomes a force multiplier when it feeds other player tools and role plans.",
        paragraphs: [
          "Mortar teams should treat the map as the source of truth for both tube and target. After a rebuild, refresh the mortar pin before you trust an old azimuth. After a zone flip, refresh the target pin before you fire into a compound your own team just entered.",
          "Infantry leads can use the same pins to stage flanks, while helicopter pilots use them to avoid landing inside a mortar corridor or a vehicle kill lane. Because proximity voice exists, a clear pin name spoken aloud often beats a long typed explanation.",
          "Server choice still matters for map practice. A stable community server lets your group rehearse the same Bakurani or Ozeti routes until the callouts become muscle memory. Check server health before you invest a full night learning one layer of the WARDOGS map.",
        ],
        links: [
          {
            label: "Mortar Calculator",
            slug: "wardogs-mortar-calculator",
            description: "Convert pins into firing data.",
          },
          {
            label: "WARDOGS Servers",
            slug: "wardogs-servers",
            description: "Find servers where your map practice can stick.",
          },
        ],
      },
      {
        id: "practical-map-tips-for-squads",
        heading: "Practical Map Tips for Squads",
        intro:
          "Small map habits compound into cleaner executes across a long WARDOGS session.",
        paragraphs: [
          "Name pins by job, not by vibes. “FOB-North-Supply,” “Attack-Zone-B,” and “Mortar-1” tell teammates what to do. Cute names create hesitation when the point is trading hands.",
          "Revisit the WARDOGS map after every major loss. If your squad wiped on the same approach twice, the route is the problem more often than individual aim. Mark an alternate corridor and assign one player to watch the old lane for vehicles.",
          "Separate recon information from attack orders. A recon pin that means “enemy seen” should not look identical to a pin that means “push now.” Color, naming, or voice context should make the difference obvious.",
          "Finally, remember that the map tool cannot replace local awareness. Destruction changes cover, smoke and debris hide lanes, and helicopters rewrite which ridges are safe. Use the WARDOGS map to plan, then let live intel finish the decision.",
        ],
      },
    ],
    faq: [
      {
        question: "Which WARDOGS maps does this tool cover?",
        answer:
          "Community tools and players currently reference Bakurani, Ozeti, and Zestafona. Always confirm the map your server loaded before you plan around a layer.",
      },
      {
        question: "Can the WARDOGS map show exact FOB coordinates for every match?",
        answer:
          "No fixed public coordinate list can replace live placement. Use coordinate picking for the FOB and objectives your team actually builds in that round.",
      },
      {
        question: "How does the map help with mortars?",
        answer:
          "Mark the mortar and the target on the WARDOGS map, then send those coordinates into the mortar calculator for distance and azimuth.",
      },
      {
        question: "What should new players mark first?",
        answer:
          "Mark active Control Zones, a candidate FOB location, and one safe approach route. Add mortar or vehicle pins only after the squad agrees on the plan.",
      },
      {
        question: "Do map layouts change during Early Access?",
        answer:
          "They can. Treat current map names and community layouts as the live reference set, and re-check after major updates.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-mortar-calculator", "wardogs-best-loadouts", "wardogs-servers"],
    densityTargets: [{ term: "wardogs map", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-best-settings",
    pageType: "guide",
    navLabel: "Settings",
    title: "WARDOGS Best Settings – FPS, Graphics & Visibility",
    description:
      "Best WARDOGS settings for FPS, graphics, visibility and performance. Use practical PC settings and troubleshooting tips for smoother gameplay.",
    keywords: [
      "wardogs best settings",
      "wardogs fps",
      "wardogs graphics settings",
      "wardogs performance",
      "wardogs visibility",
    ],
    primaryKeyword: "wardogs best settings",
    secondaryKeywords: [
      "wardogs fps settings",
      "wardogs graphics",
      "wardogs performance",
      "wardogs visibility settings",
      "wardogs pc settings",
    ],
    searchIntent:
      "Players want WARDOGS best settings for higher FPS, clearer visibility and stable performance on PC.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "Steam min/rec: Windows 10/11, 16GB RAM, GTX 1660 / RX 590 minimum, RTX 3070 / RX 6700 XT recommended, about 50GB storage.",
      "Recommendations framed as starting points; avoid inventing unconfirmed in-game setting labels.",
      "Kernel anti-cheat Elytra noted on Steam; keep overlays and background apps in mind when troubleshooting.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "PC performance guide",
      heading: "WARDOGS Best Settings for FPS and Visibility",
      lead: "Use these WARDOGS best settings as practical starting points for smoother FPS, clearer fights and fewer performance surprises on mid-range and high-end PCs.",
    },
    sections: [
      {
        id: "recommended-starting-settings-for-fps",
        heading: "Recommended Starting Settings for FPS",
        intro:
          "Treat every preset below as a recommended starting point you should verify in your own options menu.",
        paragraphs: [
          "WARDOGS is a large-scale tactical shooter with vehicles, helicopters, destruction and busy Control Zone fights, so frame time spikes are normal if your PC is already near the Steam minimum. The WARDOGS best settings approach is simple: protect resolution and visibility first, then lower the expensive effects that usually hurt FPS in chaotic multiplayer scenes.",
          "Steam lists Windows 10 or 11, 16GB of RAM, a GTX 1660 or Radeon RX 590 class GPU as the minimum, and an RTX 3070 or Radeon RX 6700 XT class GPU as recommended, with roughly 50GB of storage. If you are near the minimum, start with a competitive-leaning mix rather than ultra cosmetics. If you meet or beat the recommended GPU, you can keep more lighting polish while still capping frames for stability.",
          "Begin with a native or clean scaled resolution, a frame-rate cap your GPU can hold in a full fight, and lower shadow or effects quality if those options are available. Cap frame rate when your GPU is thermal throttling instead of chasing a peak number in an empty area. Stability during a three-team zone fight matters more than a benchmark screenshot.",
        ],
        table: {
          caption: "Practical PC starting points for WARDOGS",
          columns: ["Category", "Balanced starting point", "FPS-first starting point"],
          rows: [
            ["Resolution", "Native monitor resolution", "Native or a mild downscale if the GPU is struggling"],
            ["Frame rate", "Cap near your stable fight average", "Lower cap to stop thermal throttling"],
            ["Shadows", "Medium if available", "Low if available"],
            ["Effects / post-processing", "Moderate", "Lowest acceptable clarity"],
            ["View distance / clutter", "High enough to spot vehicles", "Reduce only after shadows and effects"],
            ["VSync", "Off if you use a working cap + adaptive sync", "Off when input delay feels high"],
          ],
        },
        links: [
          {
            label: "Helicopter Controls",
            slug: "wardogs-helicopter-controls",
            description: "After FPS is stable, tune heli sensitivity and deadzones.",
          },
        ],
      },
      {
        id: "graphics-and-visibility-tradeoffs",
        heading: "Graphics and Visibility Tradeoffs",
        intro:
          "Visibility wins fights in WARDOGS, so do not donate clarity for cosmetics.",
        paragraphs: [
          "The best WARDOGS settings for visibility usually keep contrast readable, reduce exaggerated bloom or motion blur if those toggles exist, and preserve enough draw distance to see vehicles before they crest a ridge. Lowering every option blindly can make distant players and helicopters harder to track, which costs more rounds than a few lost frames.",
          "Prioritize readability in mixed indoor and outdoor Control Zones. If a setting makes dark corners crush to black or bright exteriors blow out, adjust brightness and related graphics options until both spaces stay usable. Competitive players often accept simpler shadows if the trade buys a steadier frame pace while aiming.",
          "Because destruction and particle spam can spike during pushes, test settings in a live fight rather than the main menu. The WARDOGS best settings for your machine are the ones that hold in a contested zone with vehicles nearby, not the ones that look fine on the title screen.",
        ],
        subsections: [
          {
            heading: "Visibility checklist",
            paragraphs: [
              "Run this short checklist after any graphics change.",
            ],
            bullets: [
              "Can you distinguish infantry from background clutter at mid range?",
              "Are muzzle flashes and explosions readable without washing out the scene?",
              "Does the frame pace stay steady when a helicopter or vehicle enters the fight?",
              "Is menu latency and mouse response still acceptable after the change?",
            ],
          },
        ],
      },
      {
        id: "performance-troubleshooting-checklist",
        heading: "Performance Troubleshooting Checklist",
        intro:
          "When FPS collapses, change one layer at a time so you know what actually helped.",
        paragraphs: [
          "Close heavy overlays and background recorders first, then confirm Windows is not installing updates mid-session. WARDOGS uses Elytra kernel anti-cheat on Steam, so unexpected overlay conflicts or blocked hooks can show up as hitching, failed launches, or odd performance regressions after a driver update.",
          "Update GPU drivers cleanly, verify the game files in Steam, and make sure the title is installed on storage with enough free space headroom around the roughly 50GB footprint. If your GPU temperature climbs until clocks fall, improve airflow or lower the frame cap before you gut every quality option.",
          "Network hitching can feel like bad graphics settings. If the frame counter is fine but movement rubber-bands, check server status and connection quality before another graphics pass. Stable servers make settings tuning much easier to judge.",
        ],
        links: [
          {
            label: "WARDOGS Error Codes",
            slug: "wardogs-error-codes",
            description: "Fix launch and auth issues that get mistaken for settings problems.",
          },
          {
            label: "Servers Guide",
            slug: "wardogs-servers",
            description: "Rule out unstable servers before blaming your GPU.",
          },
        ],
      },
      {
        id: "system-requirements-context",
        heading: "System Requirements Context",
        intro:
          "Match your expectations to the Steam hardware brackets before chasing miracle presets.",
        paragraphs: [
          "If you are on a GTX 1660 or RX 590 class card with 16GB of RAM, aim for consistent competitive play rather than maximum spectacle. The WARDOGS best settings on that hardware should protect aim and awareness first. On an RTX 3070 or RX 6700 XT class card, you can usually keep more visual polish while still capping frames for a flatter frame-time graph.",
          "CPU and RAM pressure rise with player count, voice, vehicles and destruction. Keep background browsers and launchers in check during full matches. A clean desktop session is often worth more FPS than a tiny graphics tweak.",
          "Revisit your preset after major Early Access patches. A new effects path or anti-cheat update can change which option is the real bottleneck, and yesterday’s balanced mix may need a fresh pass.",
        ],
      },
      {
        id: "settings-that-help-competitive-play",
        heading: "Settings That Help Competitive Play",
        intro:
          "Competitive settings are about information and control, not only raw FPS.",
        paragraphs: [
          "Bind critical actions so you can react while looking at the WARDOGS map or communicating a mortar pin. Make sure your audio mix leaves room for proximity voice and vehicle cues. A beautiful preset that hides footsteps or rotor audio is a bad trade.",
          "If you fly, stabilize FPS before you chase perfect HOTAS curves. Helicopter micro-corrections feel worse on a hitching frame pace than on a slightly simpler image. Get the WARDOGS best settings foundation stable, then open the helicopter controls guide to finish sensitivity work.",
          "Finally, save a known-good profile. When a patch resets options or a friend “optimizes” your PC, you want a documented baseline that already survived a full Control Zone fight.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the WARDOGS best settings for low-end PCs?",
        answer:
          "Start with native or mild-scaled resolution, a realistic frame cap, and lower shadow/effects quality if available. Keep enough visibility to spot vehicles, then retest in a live fight.",
      },
      {
        question: "Should I use the Steam recommended GPU settings as ultra?",
        answer:
          "Not automatically. The RTX 3070 / RX 6700 XT recommendation means you can aim for smoother high settings, but a fight-tested cap still beats an unstable ultra preset.",
      },
      {
        question: "Why is my FPS fine in menus but bad in matches?",
        answer:
          "Large player counts, destruction, vehicles and effects spike cost during Control Zone fights. Tune settings in a live match, not only on the title screen.",
      },
      {
        question: "Can overlays cause performance problems?",
        answer:
          "Yes. Overlays and recorders can hitch frame times and occasionally conflict with anti-cheat. Disable extras temporarily while you isolate the issue.",
      },
      {
        question: "Do I need to change settings after every update?",
        answer:
          "Not every update, but after major Early Access patches you should re-check frame pace and visibility because performance bottlenecks can shift.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-helicopter-controls", "wardogs-error-codes", "wardogs-servers"],
    densityTargets: [{ term: "wardogs best settings", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-helicopter-controls",
    pageType: "guide",
    navLabel: "Helicopter",
    title: "WARDOGS Helicopter Controls – Settings, HOTAS & Tips",
    description:
      "WARDOGS helicopter controls, keybinds, sensitivity, HOTAS setup and flying tips. Learn the essential heli controls and settings in one guide.",
    keywords: [
      "wardogs helicopter controls",
      "wardogs heli controls",
      "wardogs hotas",
      "wardogs helicopter keybinds",
      "wardogs flying",
    ],
    primaryKeyword: "wardogs helicopter controls",
    secondaryKeywords: [
      "wardogs heli controls",
      "wardogs helicopter keybinds",
      "wardogs hotas",
      "wardogs helicopter sensitivity",
      "wardogs flares",
    ],
    searchIntent:
      "Players want clear WARDOGS helicopter controls, keybinds, sensitivity and HOTAS guidance they can verify in settings.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "Steam confirms vehicles and helicopters exist in WARDOGS.",
      "Community-reported binds and HOTAS starting points should be verified in Settings; Gamepad axis bindings exist.",
      "Common reported binds: Space engine/climb, Shift descend / Collective Lower, WASD pitch/roll, Q/E yaw, V flares, L lock.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Vehicles guide",
      heading: "WARDOGS Helicopter Controls and Settings",
      lead: "Learn community-reported WARDOGS helicopter controls, then verify every bind and sensitivity value in your settings before you take a bird into a live Control Zone fight.",
    },
    sections: [
      {
        id: "core-helicopter-controls-overview",
        heading: "Core Helicopter Controls Overview",
        intro:
          "Steam confirms helicopters are part of WARDOGS vehicle play, so learning the control loop is worth a dedicated practice session.",
        paragraphs: [
          "Strong WARDOGS helicopter controls feel boring in the best way: collective for climb and descent, cyclic for pitch and roll, anti-torque for yaw, plus countermeasure and lock inputs when you are being hunted. The exact labels in your options menu may vary, so treat community layouts as a checklist to verify rather than a guarantee that every bind ships identical for every input device.",
          "Before you join a full one-hundred-player match, spend time in a quieter server confirming that climb, descend, yaw and flares do what you expect. A helicopter is a logistics and assault multiplier when the pilot is calm, and a free kill when the binds are wrong. Proximity voice helps, but it cannot save a bird that cannot countermeasure or land.",
          "Pair your control setup with stable FPS. If the frame pace hitching, micro-adjustments on the cyclic feel exaggerated. Sort the WARDOGS best settings foundation first, then return here to finish the flight curve.",
        ],
        links: [
          {
            label: "WARDOGS Best Settings",
            slug: "wardogs-best-settings",
            description: "Stabilize FPS before fine-tuning heli sensitivity.",
          },
        ],
      },
      {
        id: "community-reported-keybinds",
        heading: "Community-Reported Keybinds",
        intro:
          "These binds are commonly reported by players and should be confirmed in Settings on your build.",
        paragraphs: [
          "Keyboard and mouse pilots often report Space for engine or climb behavior, Shift for descend or Collective Lower, WASD for pitch and roll or a remapped cyclic pattern, Q and E for yaw, V for flares, and L for lock. Because Early Access bindings can be renamed or moved between categories, open the control list and search for collective, yaw, flares and lock terms before you trust muscle memory from a video.",
          "If a reported bind does nothing, check for duplicate assignments and for separate aircraft versus infantry categories. Many flight problems are just an infantry jump key still owning the input you thought was collective. Rebind deliberately, then save the profile.",
          "Controller and HOTAS users should look for Gamepad axis bindings in the same settings area. Community starting points often suggest sensitivity around 1.00 with a small deadzone so the stick returns to center cleanly without killing fine aim. Those values are community starting points, not universal guarantees, so nudge them after a real landing and strafing pass.",
        ],
        table: {
          caption: "Community-reported helicopter inputs to verify",
          columns: ["Action", "Commonly reported input", "Verification note"],
          rows: [
            ["Engine / climb", "Space", "Confirm whether it starts engines, raises collective, or both in your build"],
            ["Descend / Collective Lower", "Shift", "Verify the exact Collective Lower label in Settings"],
            ["Pitch / roll", "WASD or remapped cyclic", "Check for dedicated aircraft movement category"],
            ["Yaw", "Q / E", "Confirm anti-torque or yaw bindings separately from infantry lean"],
            ["Flares", "V", "Test before you fly into a contested lane"],
            ["Lock", "L", "Verify lock behavior against the targets available in your match"],
          ],
        },
      },
      {
        id: "sensitivity-deadzone-and-hotas-setup",
        heading: "Sensitivity, Deadzone and HOTAS Setup",
        intro:
          "HOTAS and gamepad curves decide whether the helicopter feels planted or drunk.",
        paragraphs: [
          "For WARDOGS helicopter controls on HOTAS or gamepad, start with the community suggestion of sensitivity near 1.00 and a small deadzone, then adjust only one axis family at a time. If the nose wanders while you try to hold a hover, increase deadzone slightly or lower sensitivity. If precision aiming feels sluggish, reduce deadzone carefully so you do not reintroduce stick drift.",
          "Map collective to an axis you can modulate smoothly. Abrupt digital taps make altitude oscillate, especially when you are trying to crest a ridge without presenting a full silhouette. Keep yaw on an axis or buttons you can feather while your eyes stay outside the cockpit view.",
          "Once the curve feels stable in open air, practice a landing beside a FOB pin from the WARDOGS map. Landing under pressure is the real test of WARDOGS helicopter controls, because that is when players over-collect, swing yaw, and clip terrain.",
        ],
        links: [
          {
            label: "WARDOGS Map Tool",
            slug: "wardogs-map",
            description: "Mark safer landing lanes and FOB approaches before you lift off.",
          },
        ],
      },
      {
        id: "flying-tips-for-combat-and-logistics",
        heading: "Flying Tips for Combat and Logistics",
        intro:
          "Helicopters win when they deliver people, supplies or pressure without becoming the main event for enemy AA attention.",
        paragraphs: [
          "Fly terrain whenever you can. Straight-line cruising over open ground makes you easy to track from Control Zones and vehicle positions. Approach landing zones with an exit path already chosen so you are not inventing a departure while flares are popping.",
          "Coordinate with ground leads using short calls: inbound side, estimated seconds, and whether you need a hot pickup or a cold resupply. The same cash economy that funds infantry loadouts also funds the logistics chain that keeps aircraft relevant, so wasted trips hurt the whole team.",
          "Do not treat the helicopter as a solo deathmatch vehicle. A pilot who ignores squad pins and dumps teammates into the wrong compound burns more tickets than a patient logistics run. Use the map, confirm the LZ, then commit.",
        ],
        links: [
          {
            label: "Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Equip the infantry and support kits you are inserting by air.",
          },
        ],
      },
      {
        id: "common-helicopter-mistakes",
        heading: "Common Helicopter Mistakes",
        intro:
          "Most crashes are process failures that good WARDOGS helicopter controls habits can prevent.",
        paragraphs: [
          "Skipping a controls check after a patch is the classic mistake. A single rebound or category rename can turn Space into the wrong action at the worst moment. Verify flares and collective every time the game updates.",
          "Over-hovering above a contested zone is the second classic mistake. Hovering makes gunnery easy for everyone on the ground. Make the pass, drop or extract, and leave. If you must linger, change altitude and lateral position constantly.",
          "The third mistake is ignoring sensitivity until you are already in a full match. Tune WARDOGS helicopter controls on a quieter server or empty stretch of map first. Your squad would rather wait two minutes than watch the only bird cartwheel into the FOB wall.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the default WARDOGS helicopter controls?",
        answer:
          "Use community-reported starting points such as Space, Shift, WASD, Q/E, V and L as a checklist, then verify each action in Settings because labels and binds can differ by input device and patch.",
      },
      {
        question: "Does WARDOGS support HOTAS?",
        answer:
          "The game exposes Gamepad axis bindings that HOTAS users commonly map. Start around sensitivity 1.00 with a small deadzone, then refine after real landings.",
      },
      {
        question: "Why are my helicopter binds not working?",
        answer:
          "Check for duplicate infantry binds, the correct aircraft control category, and whether a recent update reset your profile.",
      },
      {
        question: "Should I learn heli controls before improving FPS settings?",
        answer:
          "Stabilize performance first. Hitching frames make good WARDOGS helicopter controls feel worse than they are.",
      },
      {
        question: "What should I practice first as a new pilot?",
        answer:
          "Practice collective smoothness, a clean landing near a FOB pin, and a flare check. Add combat passes only after those basics are reliable.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-best-settings", "wardogs-best-loadouts", "wardogs-map"],
    densityTargets: [{ term: "wardogs helicopter controls", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-servers",
    pageType: "guide",
    navLabel: "Servers",
    title: "WARDOGS Servers – Community Servers, Status & Cash Bonus",
    description:
      "WARDOGS servers guide covering community servers, server status, browser, IDs, queue issues and community server cash bonus questions.",
    keywords: [
      "wardogs servers",
      "wardogs community servers",
      "wardogs server status",
      "wardogs cash bonus",
      "wardogs server browser",
    ],
    primaryKeyword: "wardogs servers",
    secondaryKeywords: [
      "wardogs community servers",
      "wardogs server status",
      "wardogs cash bonus",
      "wardogs queue",
      "wardogs server browser",
    ],
    searchIntent:
      "Players need help choosing WARDOGS servers, checking status, understanding community cash bonuses and fixing queue or kick issues.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "No fake online/offline status lights; direct players to Steam news and Discord for outages.",
      "Community servers may advertise cash bonuses; do not invent percentage values.",
      "Steam economy basics: starting cash, persistence, Hot Zone double cash on official fantasy of rewards for play.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Multiplayer guide",
      heading: "WARDOGS Servers and Community Server Guide",
      lead: "Learn how WARDOGS servers work, how to check status without fake uptime lights, what community cash bonuses mean, and how to troubleshoot queues and kicks.",
    },
    sections: [
      {
        id: "official-vs-community-servers",
        heading: "Official vs Community Servers",
        intro:
          "Knowing the difference helps you pick WARDOGS servers that match your rules and progression goals.",
        paragraphs: [
          "Official-style play is where most players first learn Control Zones, FOB building and the three-team scramble toward one hundred points. Community WARDOGS servers often add house rules, different moderation standards, event rotations or economy tweaks that change how fast cash and kits come online. Neither option is automatically better; they serve different nights.",
          "Before you main a community host, read the server description in the browser, join the linked Discord if one exists, and watch how admins handle griefing or spawn camping. A friendly ruleset matters as much as ping when matches last long enough for logistics and mortar setups to matter.",
          "If you are practicing helicopters, mortar workflows or role loadouts with a regular squad, a stable community home can be worth more than hopping through random browsers every session. Just keep one eye on official patch notes so your habits do not drift too far from the base game.",
        ],
        links: [
          {
            label: "Leveling Guide",
            slug: "wardogs-leveling-guide",
            description: "See how server choice interacts with XP and role progression habits.",
          },
        ],
      },
      {
        id: "how-to-check-server-status",
        heading: "How to Check Server Status",
        intro:
          "This site does not show fake online or offline lights. Use primary channels when WARDOGS servers misbehave.",
        paragraphs: [
          "When the browser looks empty, friends cannot connect, or authentication errors spike, check Steam news for the WARDOGS app and any official or community Discord status posts before you reinstall half your PC. Outages and queue overload are often environmental rather than a broken local install.",
          "Inside the game, refresh the server browser, note the map name and player counts, and avoid hammering reconnect if the whole list is failing. Rapid retries during auth overload can make error codes like authentication failures more common for everyone.",
          "Record the server name and any visible ID before you ask for help. Support channels and Discord moderators can do more with a specific host name than with “the server is broken.” Keep that detail next to any screenshot of an error code.",
        ],
        links: [
          {
            label: "Error Codes and Fixes",
            slug: "wardogs-error-codes",
            description: "Work through auth, launch and kick errors after you check status channels.",
          },
        ],
      },
      {
        id: "community-server-cash-bonus-explained",
        heading: "Community Server Cash Bonus Explained",
        intro:
          "Some community WARDOGS servers advertise cash bonuses to attract players who want faster kit experimentation.",
        paragraphs: [
          "In the base Steam fantasy of WARDOGS, you start with ten thousand dollars, cash persists between matches, and Hot Zone play can double cash rewards. Community hosts sometimes advertise an extra cash bonus on top of that loop. The important part for players is to read what the bonus actually changes: buy-in speed, loadout freedom, or event weekends.",
          "This guide does not invent percentage values. If a server claims a cash bonus, treat the listing text and the in-game result as the source of truth, and ask moderators when the description is vague. A clearer economy can be great for learning loadouts, but it can also hide bad habits if you never play a tighter economy again.",
          "Pick bonus servers intentionally. Use them to practice expensive support toys or helicopter logistics, then return to standard economy WARDOGS servers when you want a more grounded fight. That rotation keeps your fundamentals honest.",
        ],
        links: [
          {
            label: "Best Settings",
            slug: "wardogs-best-settings",
            description: "Make sure performance is ready before long community sessions.",
          },
        ],
      },
      {
        id: "queue-kick-and-browser-issues",
        heading: "Queue, Kick and Browser Issues",
        intro:
          "Most connection frustration around WARDOGS servers comes from queues, auth stalls and unclear kick reasons.",
        paragraphs: [
          "If you are stuck in a queue, wait for a real slot instead of creating five launcher instances. Queues often mean the host is popular or the platform side is rate-limiting joins. Use the time to ready your loadout plan and map callouts.",
          "Kicks can come from admin moderation, connectivity drops, anti-cheat checks or server restarts. Read the message carefully. If it points to authentication or online services, follow the safe repair steps in the error-code guide rather than disabling security tools permanently or downloading unofficial clients.",
          "Browser problems such as an empty list, duplicated entries or stale player counts usually improve after a full game restart, a Steam restart, or simply waiting through a platform blip. Verify files only after status channels say the service side looks healthy.",
        ],
        table: {
          caption: "Server troubleshooting quick sheet",
          columns: ["Symptom", "First check", "Next step"],
          rows: [
            ["Empty browser", "Steam news / Discord status", "Restart game and Steam, then refresh"],
            ["Long queue", "Player count and server popularity", "Wait or choose a less full host"],
            ["Auth or online-services error", "Outage channels", "Retry later, then verify files if needed"],
            ["Kicked from match", "Kick message text", "Fix network/auth or contact server mods"],
          ],
        },
      },
      {
        id: "choosing-a-server-that-fits-your-playstyle",
        heading: "Choosing a Server That Fits Your Playstyle",
        intro:
          "The right WARDOGS servers depend on whether you want ranked-feeling grit, casual learning, or squad practice.",
        paragraphs: [
          "New players often benefit from moderated community spaces with clear rules and enough population to fill vehicles without instant stomps. Experienced squads may prefer hosts that keep map rotations predictable so mortar and heli routines stay relevant.",
          "Look at ping, population, map names like Bakurani, Ozeti or Zestafona, and whether the description mentions economy changes. Then play one full match before you declare the server your home. First impressions in the browser are not the same as late-match logistics quality.",
          "When in doubt, keep a shortlist of two or three WARDOGS servers instead of a single fragile dependency. If one host goes down for maintenance, your night does not have to end.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I check if WARDOGS servers are down?",
        answer:
          "Check Steam news for the game and any official or community Discord status posts. Do not trust third-party fake online lights.",
      },
      {
        question: "What is a community server cash bonus?",
        answer:
          "Some community hosts advertise extra cash rewards to speed up loadout access. Read the server description for details and do not assume a specific percentage.",
      },
      {
        question: "Why am I stuck in a WARDOGS queue?",
        answer:
          "The server may be full or the join pipeline may be overloaded. Wait for a slot, try another host, and avoid spam reconnecting during auth issues.",
      },
      {
        question: "Should I play official or community servers?",
        answer:
          "Play official-style servers to learn the baseline economy and rules, and use community WARDOGS servers when you want specific moderation, events or advertised bonuses.",
      },
      {
        question: "What info should I save when a server fails?",
        answer:
          "Save the server name, any ID shown in the browser, the map name, the time of the issue and the exact error or kick text.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-error-codes", "wardogs-leveling-guide", "wardogs-best-settings"],
    densityTargets: [{ term: "wardogs servers", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-best-loadouts",
    pageType: "guide",
    navLabel: "Loadouts",
    title: "WARDOGS Best Loadouts – Weapons, Attachments & Builds",
    description:
      "Best WARDOGS loadouts with weapons, attachments and builds for common roles. Compare practical setups and improve your combat loadout.",
    keywords: [
      "wardogs best loadouts",
      "wardogs loadouts",
      "wardogs weapons",
      "wardogs attachments",
      "wardogs builds",
    ],
    primaryKeyword: "wardogs best loadouts",
    secondaryKeywords: [
      "wardogs loadouts",
      "wardogs weapons",
      "wardogs attachments",
      "wardogs builds",
      "wardogs custom loadout",
    ],
    searchIntent:
      "Players want WARDOGS best loadouts and attachment guidance for common roles without fake DPS spreadsheets.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "Steam: $10,000 starting cash, buy custom loadout each life, cash persists, teamplay rewards, Hot Zone double cash.",
      "No invented weapon DPS, attachment stats, or unlock costs.",
      "Role philosophy for infantry, support/medic, builder, recon/sniper, logistics.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Gear guide",
      heading: "WARDOGS Best Loadouts and Attachments",
      lead: "Build smarter WARDOGS best loadouts around roles, cash discipline and team needs—without chasing unverified damage charts.",
    },
    sections: [
      {
        id: "how-loadouts-and-cash-work",
        heading: "How Loadouts and Cash Work",
        intro:
          "Your wallet is part of the loadout. Steam’s published loop starts you with ten thousand dollars and lets cash persist between matches.",
        paragraphs: [
          "In WARDOGS you buy a custom loadout each life, so every death is a purchasing decision as much as a tactical one. Cash that persists between matches rewards players who survive with purpose, play the Hot Zone when doubling cash matters, and avoid spending like every round is a fashion show. The WARDOGS best loadouts are the ones you can still afford after a messy fight.",
          "Teamplay is also part of the economy. Revives, logistics, zone captures and coordinated pushes feed the wider progression fantasy, which means a “meta” rifle is worthless if your squad cannot hold a FOB or move supplies. Spend first on the role your team is missing, not on the gun you saw in a highlight clip.",
          "Because Early Access can reshuffle availability and pricing, this guide stays on philosophy and checklists instead of inventing DPS numbers, attachment multipliers or unlock costs. Open the in-game purchase screen, compare what you can actually buy on that life, and keep a cheap backup kit in mind.",
        ],
        links: [
          {
            label: "Leveling Guide",
            slug: "wardogs-leveling-guide",
            description: "Align your kit choices with Support and Recon progression goals.",
          },
        ],
      },
      {
        id: "role-based-loadout-philosophy",
        heading: "Role-Based Loadout Philosophy",
        intro:
          "The WARDOGS best loadouts start with a job description, then fill weapons and attachments around that job.",
        paragraphs: [
          "Infantry kits exist to take and clear Control Zones. Support and medic-leaning kits exist to keep that infantry alive and supplied. Builders exist to create the FOB backbone. Recon and sniper-leaning kits exist to spot, delay and shape attacks. Logistics kits exist to keep the whole machine fed. If your gun is excellent but your job is empty, the loadout failed.",
          "Attachments should serve the engagement distance you actually fight. Close compound clearing wants handling and target acquisition. Ridge overwatch wants control and clean sight pictures. Do not fill every rail because the menu allows it; unused attachment budget is often better left as cash for the next life.",
          "Rewrite your kit when the map and plan change. A Bakurani city squeeze does not need the same package as a long vehicle approach on another layer. Check the WARDOGS map, agree the plan, then buy.",
        ],
        links: [
          {
            label: "WARDOGS Map",
            slug: "wardogs-map",
            description: "Match your loadout to the terrain and objectives you are actually playing.",
          },
        ],
      },
      {
        id: "infantry-support-and-medic-setups",
        heading: "Infantry, Support and Medic Setups",
        intro:
          "These are practical role packages, not ranked weapon tier lists.",
        paragraphs: [
          "Infantry: prioritize a reliable primary you can buy repeatedly, enough ammo for a full zone swing, and utilities that help entry or defense. The WARDOGS best loadouts for riflemen are boring on purpose. Consistency beats a glamorous purchase you can afford once per hour.",
          "Support and medic-leaning play: leave room in the budget for the tools that keep teammates in the fight. A support player who arrives broke because of vanity attachments cannot do the job. Think in terms of revive potential, ammo help, and staying alive beside the point rather than solo hero frags.",
          "When your squad is already infantry-heavy, switch. Three duplicate assault kits with no support plan will stall against a team that built a FOB and brought logistics. Role diversity is a loadout decision.",
        ],
        subsections: [
          {
            heading: "Infantry checklist",
            paragraphs: ["Buy in this order when cash is tight."],
            bullets: [
              "Primary you can repurchase after two quick deaths",
              "Minimum optics or attachments that truly help your lane",
              "Utility that supports the zone plan",
              "Cash reserve for a second life if the first push fails",
            ],
          },
        ],
      },
      {
        id: "builder-recon-and-logistics-builds",
        heading: "Builder, Recon and Logistics Builds",
        intro:
          "These roles create the map control that flashy infantry kits rely on.",
        paragraphs: [
          "Builder: spend on survival and tools that help you place and defend FOB infrastructure. Your value is uptime for spawn and support options, including the mortar loop when your team needs emplaced fire. A dead builder with a fancy secondary helps nobody.",
          "Recon and sniper-leaning kits: prioritize information and safe angles over greed. Spotting for teammates, watching vehicle lanes, and warning about helicopter approaches can win zones without a highlight reel. Keep a plan for relocating when your ridge gets mortared.",
          "Logistics: build around movement, cargo awareness and self-defense good enough to finish the route. Your purchases should make supply runs repeatable. If the squad needs air inserts, coordinate with pilots who already verified their helicopter controls instead of improvising on the runway.",
        ],
        links: [
          {
            label: "Helicopter Controls",
            slug: "wardogs-helicopter-controls",
            description: "Coordinate air logistics with pilots who already verified their binds.",
          },
        ],
        table: {
          caption: "Role focus for WARDOGS loadouts",
          columns: ["Role", "Spend priority", "Avoid"],
          rows: [
            ["Infantry", "Repeatable primary + zone utility", "All-in kits you cannot repurchase"],
            ["Support / medic", "Team sustain tools + survivability", "Emptying cash on vanity attachments"],
            ["Builder", "Survival and FOB utility", "Ignoring defense while building"],
            ["Recon / sniper", "Information gear and relocation plan", "Static camping with no radio value"],
            ["Logistics", "Route survivability and carry potential", "Detours that starve the FOB"],
          ],
        },
      },
      {
        id: "attachment-and-loadout-checklist",
        heading: "Attachment and Loadout Checklist",
        intro:
          "Use this checklist before you lock the WARDOGS best loadouts for your next life.",
        paragraphs: [
          "Ask what distance you will fight, who will revive you, and whether your squad still needs a builder or logistics player. If the answer is “we need supplies,” your personal dream rifle can wait. Cash persistence makes patient spending powerful across a whole session.",
          "After the match, note which purchases felt mandatory and which ones never left your inventory in a useful way. Trim the dead weight. Over time your default kits become cheaper and stronger without any fictional DPS spreadsheet.",
          "When a community server advertises a cash bonus, you can experiment more freely, but still practice a disciplined kit you could afford on a standard economy. That keeps your fundamentals transferable.",
        ],
        links: [
          {
            label: "See the WARDOGS Best Attachments Guide",
            slug: "wardogs-best-attachments",
            description: "Choose optics, grips and muzzles around the lane and role you are actually playing.",
          },
        ],
      },
    ],
    faq: [
      {
        question: "What are the WARDOGS best loadouts right now?",
        answer:
          "The best kits are role-complete builds you can repurchase with persistent cash, not a single universal weapon ranking. Choose infantry, support, builder, recon or logistics based on what your team lacks.",
      },
      {
        question: "How much starting cash do I get?",
        answer:
          "Steam’s published loop gives you $10,000 to start, and cash persists between matches. You still buy a custom loadout each life.",
      },
      {
        question: "Should I max attachments on every gun?",
        answer:
          "No. Buy attachments that help the distance and job you are playing, and keep reserve cash for the next life or a role swap.",
      },
      {
        question: "Do Hot Zones change loadout planning?",
        answer:
          "Yes. Hot Zone play can double cash rewards, so coordinated risk there can fund stronger future kits if your squad can survive the pressure.",
      },
      {
        question: "Where do mortars fit into loadouts?",
        answer:
          "Mortars are part of the FOB and support ecosystem. Builders and logistics enable them; infantry and recon help protect and spot for them.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-leveling-guide", "wardogs-map", "wardogs-helicopter-controls"],
    densityTargets: [{ term: "wardogs best loadouts", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-leveling-guide",
    pageType: "guide",
    navLabel: "Leveling",
    title: "WARDOGS Leveling Guide – XP, Support & Recon Fast",
    description:
      "WARDOGS leveling guide for XP, Support XP and Recon XP. Learn practical progression methods, role priorities and ways to level efficiently.",
    keywords: [
      "wardogs leveling guide",
      "wardogs xp",
      "wardogs support xp",
      "wardogs recon xp",
      "wardogs progression",
    ],
    primaryKeyword: "wardogs leveling guide",
    secondaryKeywords: [
      "wardogs xp",
      "wardogs support xp",
      "wardogs recon xp",
      "wardogs progression",
      "wardogs level fast",
    ],
    searchIntent:
      "Players want a WARDOGS leveling guide focused on XP, Support XP and Recon XP without exploit claims or fake numbers.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "Steam: Cash & XP progression with teamplay rewards; starting cash and persistence context.",
      "Support and Recon discussed as role XP directions players chase; no invented XP/hour values.",
      "No exploit advice.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Progression guide",
      heading: "WARDOGS Leveling Guide – XP, Support XP and Recon XP",
      lead: "Use this WARDOGS leveling guide to progress through teamplay-focused XP habits, with practical Support and Recon priorities instead of exploit routes or fake XP charts.",
    },
    sections: [
      {
        id: "how-progression-works-in-wardogs",
        heading: "How Progression Works in WARDOGS",
        intro:
          "WARDOGS combines cash progression and XP progression, and Steam’s positioning emphasizes rewards for teamplay.",
        paragraphs: [
          "A useful WARDOGS leveling guide starts with the loop you can trust: play objectives, support the squad, earn cash that persists between matches, and let XP follow meaningful participation. Starting money gives you room to take a role immediately, while Hot Zone risk can accelerate cash when your team can handle the pressure.",
          "Because exact XP values and hourly rates are not something this guide invents, think in actions rather than spreadsheets. Capturing and defending Control Zones, moving supplies, building and maintaining FOB utility, reviving teammates, spotting threats and finishing coordinated pushes are the behaviors that stay valuable even when a patch retunes numbers.",
          "Server choice affects how fast a night feels. A populated host with clean moderation lets you practice Support or Recon loops without constant grief. Check the servers guide if your progression nights keep dying to empty browsers or unstable queues.",
        ],
        links: [
          {
            label: "WARDOGS Servers",
            slug: "wardogs-servers",
            description: "Pick stable hosts so your leveling session actually lasts.",
          },
        ],
      },
      {
        id: "support-xp-priorities",
        heading: "Support XP Priorities",
        intro:
          "Players chasing Support XP usually lean into logistics, supplies, FOB work and revives.",
        paragraphs: [
          "Support progression is the backbone fantasy of WARDOGS. If you want Support XP, volunteer for the unglamorous jobs that keep a team on the scoreboard: deliver building supplies, help stand up and defend a FOB, keep ammo and teammates flowing, and revive players who are still in a useful position.",
          "Builders and logistics players should treat the map as part of the XP plan. A short, repeated supply route that actually arrives beats a heroic detour that dies in a dead-end alley. When your squad wants mortar pressure, Support play is what keeps the tube alive long enough to matter.",
          "Do not confuse Support XP with staying forever behind the front line. The best support players still understand zone timing. Arrive with the push, drop what the squad needs, and leave before you become another body to recover.",
        ],
        links: [
          {
            label: "Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Build support, builder and logistics kits that you can repurchase.",
          },
          {
            label: "Mortar Calculator",
            slug: "wardogs-mortar-calculator",
            description: "Support fire missions once your FOB loop is online.",
          },
          {
            label: "WARDOGS Support XP Guide",
            slug: "wardogs-support-xp",
            description: "Use a dedicated Support progression plan for logistics, revives and squad sustain.",
          },
        ],
      },
      {
        id: "recon-xp-priorities",
        heading: "Recon XP Priorities",
        intro:
          "Recon XP rewards players who turn information into team action.",
        paragraphs: [
          "If your WARDOGS leveling guide goal is Recon XP, prioritize spotting, early warning and shaping fights rather than isolated sniper duels. Call vehicle routes, helicopter inbound paths and undefended flanks while your squad still has time to react. Information that arrives after the wipe does not help.",
          "Use the WARDOGS map to choose ridges and compounds with an exit. Recon players who never relocate become mortar bait. Share pins that distinguish “enemy seen” from “push now,” and stay on voice long enough to confirm the squad understood the threat.",
          "Recon still benefits from teamplay rewards. A spot that enables a zone capture or saves a logistics run is progression-relevant even if you never top the kill list. Measure your night by useful calls and survived rotations.",
        ],
        links: [
          {
            label: "WARDOGS Recon XP Guide",
            slug: "wardogs-recon-xp",
            description: "Follow a Recon-focused route built around timely information and clean rotations.",
          },
        ],
      },
      {
        id: "efficient-leveling-habits",
        heading: "Efficient Leveling Habits",
        intro:
          "Efficiency in this WARDOGS leveling guide means fewer wasted lives and clearer role focus.",
        paragraphs: [
          "Pick one progression lane for a session. Mixing half-built Support habits with half-hearted Recon peeks usually produces average results in both. Tell your squad what you are practicing so they can feed you the right jobs.",
          "Cash discipline accelerates everything around XP. A cheap repurchase kit keeps you in the fight after a bad spawn, which means more objectives and more support actions per hour without quoting a fake XP-per-hour number. Hot Zone plays are optional accelerants, not mandatory suicide rituals.",
          "Avoid exploit hunting. Unofficial shortcuts get patched, create account risk, and teach nothing transferable. The durable way to level in WARDOGS is competent role play on real servers.",
        ],
        table: {
          caption: "Session focus ideas",
          columns: ["If you want...", "Do more of this", "Buy toward this"],
          rows: [
            ["Support XP", "Supplies, FOB help, revives, defense", "Survivable support/builder/logistics kits"],
            ["Recon XP", "Spotting, early warns, safe overwatch", "Mobile recon kits with relocation utility"],
            ["General XP momentum", "Zone plays with a full squad plan", "Repeatable kits tied to the plan"],
          ],
        },
      },
      {
        id: "role-rotation-and-teamplay-rewards",
        heading: "Role Rotation and Teamplay Rewards",
        intro:
          "Rotating roles keeps both the team and your progression healthy across a long Early Access career.",
        paragraphs: [
          "Spend some nights as pure Support, some as Recon, and some as the infantry finisher who converts the work those roles create. That rotation teaches the whole loop and prevents burnout from one stubborn grind plan.",
          "Squad up when you can. A coordinated trio completes more supply runs, mortar shoots and recon-to-push sequences than three solo players who never share pins. The WARDOGS leveling guide advantage is social as much as mechanical.",
          "After patches, reassess. If a role feels weaker, shift effort toward whatever team actions still clearly move cash, zones and match outcomes. Flexible players outpace stubborn ones in Early Access.",
        ],
      },
    ],
    faq: [
      {
        question: "What is the fastest WARDOGS leveling method?",
        answer:
          "There is no exploit route recommended here. The fastest durable method is focused teamplay on objectives with a clear Support or Recon session goal.",
      },
      {
        question: "How do I earn Support XP?",
        answer:
          "Lean into logistics, supplies, FOB work, defense and revives. Track whether your actions actually kept teammates fighting on the zone.",
      },
      {
        question: "How do I earn Recon XP?",
        answer:
          "Prioritize spotting and early warning that your squad can use, not only long-range eliminations from a static ridge.",
      },
      {
        question: "Do cash bonuses help leveling?",
        answer:
          "Community cash bonuses can make kit experimentation easier, which indirectly helps you stay useful. They are not a substitute for objective play.",
      },
      {
        question: "Should I solo level or play with a squad?",
        answer:
          "A squad usually completes more Support and Recon loops per session because pins, revives and logistics land more reliably.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-best-loadouts", "wardogs-servers", "wardogs-mortar-calculator"],
    densityTargets: [{ term: "wardogs leveling guide", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-error-codes",
    pageType: "guide",
    navLabel: "Errors",
    title: "WARDOGS Error Codes – 1147405308, Launch & Auth Fixes",
    description:
      "Fix WARDOGS error codes including 1147405308, launch failures, authentication problems, kicked-from-match errors and common connection issues.",
    keywords: [
      "wardogs error codes",
      "wardogs 1147405308",
      "wardogs launch error",
      "wardogs authentication",
      "wardogs kicked from match",
    ],
    primaryKeyword: "wardogs error codes",
    secondaryKeywords: [
      "wardogs 1147405308",
      "wardogs launch error",
      "wardogs authentication failed",
      "wardogs connection issues",
      "wardogs kicked",
    ],
    searchIntent:
      "Players need safe fixes for WARDOGS error codes, especially 1147405308, launch failures and auth or kick problems.",
    priority: "P0",
    navVisible: true,
    parentSlug: "",
    wordCountTarget: 1300,
    sourceNotes: [
      "1147405308 associated with failed authenticate with online services; often queue/auth overload.",
      "Safe steps only: status check, wait/retry, restart Steam/game, verify files, network checks.",
      "Never advise permanently disabling AV or using cracks. Elytra anti-cheat context.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Troubleshooting guide",
      heading: "WARDOGS Error Codes and Fixes",
      lead: "Resolve common WARDOGS error codes with safe launch, authentication and connection fixes—starting with 1147405308 and the online-services failures players hit during busy queues.",
    },
    sections: [
      {
        id: "error-1147405308-and-authentication-failures",
        heading: "Error 1147405308 and Authentication Failures",
        intro:
          "Error 1147405308 is associated with a failed authenticate with online services message and often appears when queues or auth pipelines are overloaded.",
        paragraphs: [
          "When WARDOGS error codes point at online services, assume the platform side may be struggling before you tear apart a healthy PC. Check Steam news and community status channels, wait a few minutes, and retry once or twice instead of launching a reconnect storm that makes the overload worse.",
          "If the error persists after a short wait, restart WARDOGS, then restart Steam, then try again. Many authentication failures clear when the client refreshes its session tokens. Keep Elytra anti-cheat and Steam overlays in mind as part of the stack, but do not jump straight to disabling security tools permanently.",
          "Only after status looks healthy and restarts fail should you verify game files or dig into local network issues. That order saves time when the real problem is a busy auth service rather than a corrupted install.",
        ],
        steps: [
          {
            heading: "Check status channels",
            description:
              "Look at Steam news and relevant Discord status posts for WARDOGS or platform outages before changing local settings.",
          },
          {
            heading: "Wait and retry calmly",
            description:
              "Because 1147405308 often lines up with queue or auth overload, give the service a few minutes and avoid spam reconnecting.",
          },
          {
            heading: "Restart game and Steam",
            description:
              "Fully close WARDOGS, restart Steam, then launch again to refresh the authentication session.",
          },
          {
            heading: "Verify files and network",
            description:
              "If the error remains, verify integrity on Steam and test another network path such as a wired connection or a temporary phone-hotspot check.",
          },
        ],
        links: [
          {
            label: "Servers Guide",
            slug: "wardogs-servers",
            description: "Confirm whether the problem is one host or a wider outage pattern.",
          },
        ],
      },
      {
        id: "launch-and-startup-fixes",
        heading: "Launch and Startup Fixes",
        intro:
          "Launch failures sit beside WARDOGS error codes even when no numeric code appears.",
        paragraphs: [
          "If the game will not start, confirm Steam is online, your system meets the published Windows 10/11 and hardware guidance, and you have headroom around the roughly 50GB install. A disk that is completely full can fail updates and launches in confusing ways.",
          "Run Steam as your normal authenticated user, install pending Redistributables if Steam prompts for them, and avoid unofficial launchers. WARDOGS uses Elytra kernel anti-cheat; cracked or replaced binaries are unsafe, unsupported, and outside the scope of any legitimate fix guide.",
          "GPU driver crashes on launch are a different branch. Update drivers cleanly, temporarily disable optional overlays to test, and restore a known-good graphics preset if you recently changed everything at once. The settings guide helps you rebuild a stable baseline afterward.",
        ],
        links: [
          {
            label: "Best Settings",
            slug: "wardogs-best-settings",
            description: "Rebuild a stable graphics baseline after a messy troubleshooting pass.",
          },
        ],
      },
      {
        id: "connection-queue-and-kick-errors",
        heading: "Connection, Queue and Kick Errors",
        intro:
          "Not every disconnect is the same WARDOGS error codes family, so read the message before you apply a fix.",
        paragraphs: [
          "Queue stalls and join failures often share DNA with authentication overload. If many players are hammering a popular community host, wait for a real slot and keep your retries spaced. Switching to another healthy server can save the night when one browser entry is melting.",
          "Kicked-from-match messages may mean admin action, a network drop, a server restart or an anti-cheat check. Copy the exact text. Moderators and support channels can interpret a precise kick string; they cannot interpret “it kicked me.”",
          "If kicks cluster whenever you fly or fight for a long session, also check thermals and network stability. A laptop that thermal-throttles and Wi-Fi that drops under load can look like a game-specific punishment when it is really a local reliability issue. Helicopter sessions are a common place players notice those drops.",
        ],
        links: [
          {
            label: "Helicopter Controls",
            slug: "wardogs-helicopter-controls",
            description: "After you are stable online again, re-verify flight binds before a long air session.",
          },
        ],
      },
      {
        id: "safe-troubleshooting-checklist",
        heading: "Safe Troubleshooting Checklist",
        intro:
          "Use safe, reversible steps for WARDOGS error codes. Skip permanent security disablement and anything that involves unofficial downloads.",
        paragraphs: [
          "Safe list: check status, wait/retry, restart game, restart Steam, reboot the PC, verify files, test wired networking, temporarily remove overlays for isolation, and reinstall only as a last resort. Document what changed after each step so you do not lose the fix.",
          "Unsafe list: permanently turning off antivirus, downloading cracks or replacement anti-cheat files, using random “error fixer” executables from unverified sites, or sharing account credentials with strangers who promise a queue bypass. Those paths create worse problems than 1147405308.",
          "If your account authenticates on one network path but not another, the clue is local routing or filtering. Try a wired connection or a temporary hotspot test, then adjust router QoS or VPN experiments carefully. A VPN can help some networks and hurt others, so test both ways.",
        ],
        table: {
          caption: "Safe repair order for common failures",
          columns: ["Order", "Action", "Why it helps"],
          rows: [
            ["1", "Check Steam news / Discord status", "Avoid local fixes during a platform outage"],
            ["2", "Wait and retry", "Clears transient auth and queue overload"],
            ["3", "Restart game and Steam", "Refreshes sessions and stuck browser state"],
            ["4", "Verify game files", "Repairs corrupted or partial updates"],
            ["5", "Network isolation tests", "Separates PC issues from routing or Wi-Fi drops"],
            ["6", "Reinstall as last resort", "Only after safer steps fail on a healthy service day"],
          ],
        },
      },
      {
        id: "when-to-verify-files-or-reinstall",
        heading: "When to Verify Files or Reinstall",
        intro:
          "File repair is powerful, but it is not the first answer to every WARDOGS error codes report.",
        paragraphs: [
          "Verify integrity when launches fail after an update, when files are missing, or when authentication errors continue on a day when other players are online without issue. Steam will replace broken files while leaving your settings alone in most cases.",
          "Reinstall when verification loops, when multiple repair attempts fail, or when you suspect manual file edits from an unsafe guide. Back up any notes about your keybinds and graphics preferences first so you can rebuild quickly.",
          "After you are back in, take five minutes to confirm settings, helicopter binds and a quiet server join before entering a full contested match. Recovering from WARDOGS error codes only counts if the next session stays stable.",
        ],
      },
    ],
    faq: [
      {
        question: "What does WARDOGS error 1147405308 mean?",
        answer:
          "It is associated with failing to authenticate with online services and often shows up during queue or auth overload. Check status, wait, restart Steam and the game, then verify files if needed.",
      },
      {
        question: "How do I fix WARDOGS authentication failed messages?",
        answer:
          "Confirm there is no outage, retry after a short wait, restart the game and Steam, and only then move on to network tests or file verification.",
      },
      {
        question: "Should I disable antivirus to fix WARDOGS error codes?",
        answer:
          "Do not permanently disable antivirus. Temporary isolation for testing is different from leaving your PC unprotected, and unofficial bypass tools are never recommended.",
      },
      {
        question: "Why do I get kicked from WARDOGS matches?",
        answer:
          "Kicks can come from admins, disconnects, server restarts or anti-cheat checks. Save the exact message and correlate it with server status before changing system settings.",
      },
      {
        question: "When should I reinstall WARDOGS?",
        answer:
          "Reinstall only after status checks, restarts and file verification fail on a day when services otherwise look healthy.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-servers", "wardogs-best-settings", "wardogs-helicopter-controls"],
    densityTargets: [{ term: "wardogs error codes", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-recon-xp",
    pageType: "guide",
    navLabel: "Recon XP",
    title: "WARDOGS Recon XP Guide – Level Recon Fast",
    description:
      "Learn how to earn Recon XP in WARDOGS, level Recon faster, prioritize useful actions, and avoid common progression mistakes.",
    keywords: ["wardogs recon xp", "wardogs recon leveling", "wardogs recon progression", "wardogs fast recon xp"],
    primaryKeyword: "wardogs recon xp",
    secondaryKeywords: [
      "wardogs recon leveling",
      "wardogs recon xp guide",
      "how to level recon fast wardogs",
      "wardogs fast recon xp",
      "wardogs recon progression",
    ],
    searchIntent:
      "Players want practical, non-exploit advice for earning WARDOGS Recon XP and progressing through useful Recon play.",
    priority: "P0",
    navVisible: false,
    globalVisible: true,
    parentSlug: "wardogs-leveling-guide",
    wordCountTarget: 1200,
    sourceNotes: [
      "Steam describes a teamplay-focused progression loop with cash and XP rewards.",
      "No unverified XP values, multipliers, unlock requirements or XP-per-hour claims.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Recon progression guide",
      heading: "WARDOGS Recon XP and Leveling Guide",
      lead: "Earn WARDOGS Recon XP by turning observation into useful squad decisions: spot early, call clean routes, survive long enough to update the picture, and move when the fight moves.",
    },
    sections: [
      {
        id: "how-recon-xp-works-in-wardogs",
        heading: "How WARDOGS Recon XP Works",
        intro:
          "The useful path to Recon XP is not passive hill camping. It is repeated information that changes what your team does next.",
        paragraphs: [
          "WARDOGS Recon XP is best approached as a teamplay loop. Take an angle that can see a likely approach, identify what is actually moving through it, and pass the call to teammates before they commit to a bad push. A vehicle warning, a flank call, or a confirmed safe route has value because it helps the squad choose where to spend lives and cash.",
          "Start each life with one clear information job. You might watch a road into the Control Zone, cover a logistics route, or check a ridge before friendly infantry crosses open ground. Once that job is complete, update your squad and choose the next one. This keeps Recon work tied to the active match instead of becoming a distant kill hunt.",
          "Exact action rewards can change as Early Access systems evolve, so build habits around outcomes rather than a pretend scorecard. Good Recon play creates earlier decisions, safer rotations and cleaner pushes. Those habits remain useful whether your squad is defending, preparing a counterattack or trying to keep a FOB route alive.",
        ],
        links: [
          {
            label: "WARDOGS Leveling Guide",
            slug: "wardogs-leveling-guide",
            description: "See how Recon focus fits with the wider XP and role-progression loop.",
          },
        ],
      },
      {
        id: "fastest-ways-to-earn-recon-xp",
        heading: "Fastest Ways to Earn Recon XP",
        intro:
          "The fastest Recon progression comes from being relevant to the next fight, not from chasing the longest possible sightline.",
        paragraphs: [
          "Arrive ahead of the squad’s intended movement and answer one question they cannot answer safely themselves: which entrance is watched, where is the vehicle route, or whether the next compound has an enemy hold. Give the call in short, usable language, then mark the direction or landmark if your team uses pins. A call that can be acted on immediately is more valuable than a long narration after the opportunity has passed.",
          "Keep an exit route. Recon players often lose momentum by staying on the same rooftop or ridge until the enemy notices them. After you have delivered the first useful read, shift to an adjacent angle or regroup with the squad. Survival lets you continue reporting changes, while a predictable position turns the role into an easy trade.",
          "Work with the squad’s timing. Watch the road before logistics moves, check the flank before the zone push, and stay available after the capture when a counterattack is likely. Recon XP follows a better match contribution when your observations are attached to those moments rather than to isolated shots.",
        ],
      },
      {
        id: "best-recon-actions-for-consistent-xp",
        heading: "Best Recon Actions for Consistent XP",
        intro:
          "Consistency comes from repeating a small set of useful actions under pressure.",
        paragraphs: [
          "Prioritize early warning. Watch routes that lead into the active objective and report movement before it reaches your team’s last line. If you see a vehicle, say where it is headed; if you see infantry, say whether it is pushing, holding, or rotating. Direction and timing make a sighting useful.",
          "Use the map as part of the role. Before taking overwatch, look for the next Control Zone approach, a protected fallback and the route your own logistics players need. A position with a good first view but no way to relocate is usually a short-lived choice. Map awareness keeps your Recon progression connected to the whole team rather than one window.",
          "Confirm changes instead of repeating stale information. Once a flank goes quiet, check whether the threat moved, died, or simply took a different path. A short update clears uncertainty for the squad and gives you a reason to reposition instead of staring at an empty lane.",
        ],
        links: [
          {
            label: "Open the WARDOGS Map",
            slug: "wardogs-map",
            description: "Plan overwatch, fallback routes and the next objective approach before you commit to an angle.",
          },
        ],
      },
      {
        id: "how-to-level-recon-faster",
        heading: "How to Level Recon Faster",
        intro:
          "Give every Recon session a simple sequence: observe, communicate, relocate, then observe again.",
        paragraphs: [
          "At the start of a round, tell the squad which lane you will watch and what call they should expect from you. That prevents duplicate angles and makes it easier for a leader to send you where information is missing. A Recon player who is integrated into the plan gets more chances to make useful calls than one who quietly wanders toward a distant hill.",
          "Buy for repeatability. Choose a kit that supports your actual distance, leaves you able to move, and does not drain the cash you need for a later role change. The ideal purchase is not a universal build; it is the one that lets you survive the angle, help on the rotate, and remain useful when the zone shifts.",
          "When the squad pushes, close the distance enough to keep reporting. The role does not end after the first entry. Watch the next exterior lane, protect a revive, or scout the route to the next hold. That continuity is a more reliable way to level Recon fast than resetting to a far-off perch after every fight.",
        ],
        links: [
          {
            label: "WARDOGS Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Build a repeatable Recon kit around mobility, information and the role your squad needs.",
          },
          {
            label: "WARDOGS Support XP Guide",
            slug: "wardogs-support-xp",
            description: "Coordinate Recon calls with the Support players keeping routes and teammates alive.",
          },
        ],
      },
      {
        id: "recon-progression-priorities",
        heading: "Recon Progression Priorities",
        intro:
          "A strong Recon player makes the team harder to surprise and easier to coordinate.",
        paragraphs: [
          "First, prioritize information that is perishable: an incoming vehicle, a fresh flank, an exposed route, or a defending position that can be bypassed. Second, prioritize the information that enables a teammate’s next move. A useful call often gives a destination or a warning, not just an enemy count.",
          "Third, preserve your own uptime. Avoid taking fights that reveal your position when the squad needs your eyes more than another long-range duel. If the engagement is necessary, take it with a relocation plan and tell the team when your coverage will be offline. Recon is most valuable when its information stays current.",
          "Finally, review the end of each life. Ask whether your calls changed a rotation, saved a supply run or opened a push. That is a better practice metric than a single lucky elimination, and it naturally improves WARDOGS Recon XP over a full session.",
        ],
      },
      {
        id: "common-recon-xp-mistakes",
        heading: "Common Recon XP Mistakes",
        intro:
          "Most slow Recon progression comes from good intentions that never reach the squad.",
        paragraphs: [
          "Do not treat spotting as an end in itself. A vague call without direction, timing or follow-up makes teammates guess. Do not stay silent after the enemy changes route, either; stale information can pull your team into the exact trap you first helped identify.",
          "Avoid static pride. Holding the same angle for too long may feel safe, but it stops producing information once the enemy has adapted. Move after a useful report, vary your lines of sight and keep a route back to friendly players. The goal is steady contribution, not a personal tower-defense match.",
          "Do not force an exploit-style grind. Reliable Recon XP comes from meaningful participation in live fights and a squad that can use your calls. If the server is empty or the team is not communicating, change your approach or find a coordinated group instead of repeating low-value peeks.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I get Recon XP in WARDOGS?",
        answer:
          "Play Recon around information your team can act on: early warnings, route checks, timely spotting and calls that support objective pushes, defenses or logistics movement.",
      },
      {
        question: "What is the fastest way to level Recon in WARDOGS?",
        answer:
          "Stay attached to the active squad plan. Observe before a push, communicate a clear call, relocate when the lane changes and keep covering the next decision instead of camping one angle.",
      },
      {
        question: "Should Recon players only use long-range positions?",
        answer:
          "No. Use the distance that lets you see the relevant route and still update or regroup with teammates. A closer, mobile angle can be more useful than a distant sightline with no follow-up.",
      },
      {
        question: "Do kills matter more than spotting for Recon progression?",
        answer:
          "A useful role balances both, but information that enables the squad is the core of Recon play. Prioritize the calls and positions that improve the team’s next move.",
      },
      {
        question: "How can I avoid wasting a Recon life?",
        answer:
          "Take an angle with a fallback, announce the lane you are watching, move after you are discovered, and avoid fights that leave the squad without current information.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-support-xp", "wardogs-leveling-guide", "wardogs-best-loadouts", "wardogs-map"],
    densityTargets: [{ term: "wardogs recon xp", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-support-xp",
    pageType: "guide",
    navLabel: "Support XP",
    title: "WARDOGS Support XP Guide – Level Support Fast",
    description:
      "Learn how to earn Support XP in WARDOGS, level Support faster, focus on useful team actions, and avoid inefficient progression habits.",
    keywords: ["wardogs support xp", "wardogs support leveling", "wardogs support exp", "wardogs level support fast"],
    primaryKeyword: "wardogs support xp",
    secondaryKeywords: [
      "wardogs support leveling",
      "wardogs support xp guide",
      "best way to level support wardogs",
      "wardogs support exp",
      "how to farm support xp wardogs",
      "wardogs level support fast",
    ],
    searchIntent:
      "Players want practical, non-exploit advice for earning WARDOGS Support XP through useful team actions and efficient role play.",
    priority: "P0",
    navVisible: false,
    globalVisible: true,
    parentSlug: "wardogs-leveling-guide",
    wordCountTarget: 1200,
    sourceNotes: [
      "Steam describes a teamplay-focused progression loop with cash and XP rewards.",
      "No unverified XP values, multipliers, unlock requirements or XP-per-hour claims.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Support progression guide",
      heading: "WARDOGS Support XP and Leveling Guide",
      lead: "Earn WARDOGS Support XP by keeping the squad moving: support the active objective, deliver what the team needs, help teammates recover, and make every trip serve the next fight.",
    },
    sections: [
      {
        id: "how-support-xp-works-in-wardogs",
        heading: "How WARDOGS Support XP Works",
        intro:
          "Support progression rewards the player who keeps a team functional when the fight becomes expensive.",
        paragraphs: [
          "WARDOGS Support XP is best earned through actions that keep teammates supplied, alive, positioned and able to contest the objective. Think of the role as a chain: a squad needs a safe route, useful equipment, a place to regroup and people who can stay in the fight. Your job is to strengthen the weak link that is slowing the next push.",
          "Open each life by asking what the team is missing. It might be a supply run, help setting up or defending a forward position, a revive-capable teammate near the point, or a player who can stay with a logistics move. Choosing one real need is more effective than hovering behind the line and hoping support actions appear.",
          "The exact rewards and role details can move with updates, so this guide avoids invented XP values and fixed hourly claims. The durable route is simple: make practical contributions to the active fight, stay close enough for teammates to use your help, and repeat the actions that keep the squad’s momentum alive.",
        ],
        links: [
          {
            label: "WARDOGS Leveling Guide",
            slug: "wardogs-leveling-guide",
            description: "Place Support progression inside the wider XP and teamplay loop.",
          },
        ],
      },
      {
        id: "fastest-ways-to-earn-support-xp",
        heading: "Fastest Ways to Earn Support XP",
        intro:
          "The fastest Support progression is an efficient loop of useful work, not a series of long solo detours.",
        paragraphs: [
          "Follow the active objective. A supply run or support task has more impact when it arrives before the push needs it, not after the fight has already moved. Check the map, choose the safer route, and tell the squad when you are on the way so they can plan around the timing.",
          "Stay within reach of the people you are supporting. A support player positioned too far from the action cannot respond to a revive, a defense problem or a sudden shortage. You do not need to lead every entry, but you should be close enough to reinforce a successful push and leave before the position collapses.",
          "Use a repeatable route rather than a heroic one. A short run that consistently reaches the team, followed by a quick return or reposition, creates more useful work across a match than a risky cross-map trip that ends with a lost vehicle or an isolated death.",
        ],
      },
      {
        id: "best-support-actions-for-reliable-xp",
        heading: "Best Support Actions for Reliable XP",
        intro:
          "Reliable Support XP comes from actions that solve a clear squad problem.",
        paragraphs: [
          "Prioritize logistics that arrive. Carry supplies or equipment only when there is a receiver and a plan for them; otherwise, your route is just a long walk with expensive cargo. Coordinate with builders, defenders and squad leaders so a delivery becomes a stronger position instead of an unattended pile of resources.",
          "Prioritize recovery near a live fight. Help teammates return to useful positions, defend the people doing the work and call when the area is too dangerous to continue. Support is not just reacting after a disaster; it is reducing the number of times the squad has to rebuild from one.",
          "Prioritize objective timing. If your team is preparing to hold or retake a Control Zone, shift support toward that effort rather than continuing an old task out of habit. The best support actions are the ones that give the team one more chance to keep pressure where it matters.",
        ],
        links: [
          {
            label: "WARDOGS Servers Guide",
            slug: "wardogs-servers",
            description: "Find a stable match where coordinated logistics and teamplay can actually develop.",
          },
        ],
      },
      {
        id: "how-to-level-support-faster",
        heading: "How to Level Support Faster",
        intro:
          "Use a clear order of operations: identify the need, deliver safely, stay for the handoff, then move to the next need.",
        paragraphs: [
          "Before leaving base or a safe position, decide who benefits from the trip and where the handoff happens. That small check prevents wasted purchases and makes it easier to recover if the route changes. Support players level faster when their actions are tied to a teammate, a location and a moment in the round.",
          "Keep a kit you can repurchase. The role only helps when you can return after a bad life, so avoid spending everything on extras that do not improve your route, survival or ability to help the squad. A modest, repeatable Support setup gives you more useful decisions over a session than a single expensive attempt.",
          "Pair up when possible. One player can watch the route or cover a handoff while the other completes the support task. That coordination reduces dead time, makes a stalled route easier to adjust and turns Support XP into shared match momentum rather than lone grinding.",
        ],
        links: [
          {
            label: "WARDOGS Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Build a repurchase-friendly kit for logistics, recovery and objective support.",
          },
          {
            label: "WARDOGS Recon XP Guide",
            slug: "wardogs-recon-xp",
            description: "Use Recon calls to make supply routes and support moves safer.",
          },
        ],
      },
      {
        id: "support-progression-priorities",
        heading: "Support Progression Priorities",
        intro:
          "The best Support players work from the team’s next bottleneck backward.",
        paragraphs: [
          "First, support the active objective: the team that cannot reach, hold or recover the current fight will not benefit from distant preparation. Second, protect repeatable routes and positions. A sustainable support loop is more valuable than a one-time delivery that leaves no path back.",
          "Third, communicate the state of the job. Tell the squad when supplies are moving, when a route is unsafe, when a teammate needs cover or when the task is complete. Clear updates let the next player make a useful decision instead of duplicating your work.",
          "Finally, stay flexible. Switch from a delivery to a defensive role, a recovery task or a new route when the match changes. Support progression improves when your work follows the team’s need rather than a rigid checklist from the first spawn.",
        ],
      },
      {
        id: "common-support-xp-mistakes",
        heading: "Common Support XP Mistakes",
        intro:
          "Slow Support leveling usually means effort is going somewhere the squad cannot use.",
        paragraphs: [
          "Do not run logistics without a destination, a receiver or a fallback. A good route can still fail, but a route without a handoff was never a support plan. Check the map and communicate before you commit resources.",
          "Do not remain behind the fight for too long. Support work that never reaches the active objective becomes invisible to the match. Move with the team’s timing, reinforce the successful push, and back out when the position is lost instead of feeding a broken route.",
          "Avoid exploit hunting and fixed XP-per-hour promises. The durable way to level Support is reliable teamplay: keep a useful kit, make safe deliveries, help people stay in the fight and change tasks when the squad’s priorities change.",
        ],
      },
    ],
    faq: [
      {
        question: "How do I get Support XP in WARDOGS?",
        answer:
          "Focus on team actions that keep the active fight working: useful logistics, recovery, defense, revives and objective support that arrives when teammates need it.",
      },
      {
        question: "What is the fastest way to level Support in WARDOGS?",
        answer:
          "Run repeatable support loops tied to the objective. Identify a real need, use a safe route, complete the handoff and move to the next need instead of taking disconnected solo trips.",
      },
      {
        question: "Should Support players stay far behind the front line?",
        answer:
          "No. Stay safe, but remain close enough to reinforce the objective, help teammates recover and adjust when the squad’s route changes.",
      },
      {
        question: "How do I make logistics runs more useful?",
        answer:
          "Confirm who needs the delivery, where it will be handed off and what route is safest. Communicate the move so the squad can protect or use it.",
      },
      {
        question: "Can I level Support without exploits?",
        answer:
          "Yes. A coordinated squad creates constant useful Support work through logistics, recovery, defense and objective timing; those habits remain valuable beyond any short-lived shortcut.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-recon-xp", "wardogs-leveling-guide", "wardogs-best-loadouts", "wardogs-servers"],
    densityTargets: [{ term: "wardogs support xp", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
  {
    enabled: true,
    slug: "wardogs-best-attachments",
    pageType: "guide",
    navLabel: "Attachments",
    title: "WARDOGS Best Attachments – Optics, Grips & Muzzles",
    description:
      "Find the best WARDOGS attachments for common weapons and roles, including optics, grips, muzzles and practical build tradeoffs.",
    keywords: ["wardogs best attachments", "wardogs attachments", "wardogs weapon attachments", "wardogs best optic", "wardogs best grip"],
    primaryKeyword: "wardogs best attachments",
    secondaryKeywords: [
      "wardogs attachments",
      "best attachments wardogs",
      "wardogs weapon attachments",
      "wardogs best optic",
      "wardogs best grip",
      "wardogs best muzzle",
      "wardogs weapon builds",
    ],
    searchIntent:
      "Players want practical WARDOGS attachment choices by range, weapon role and playstyle without invented stat charts or a single fake meta build.",
    priority: "P1",
    navVisible: false,
    globalVisible: true,
    parentSlug: "wardogs-best-loadouts",
    wordCountTarget: 1250,
    sourceNotes: [
      "Attachment names, stat values, unlocks and costs are not claimed without a current in-game or official confirmation.",
      "Advice uses durable qualitative tradeoffs: sight picture, target acquisition, control, mobility and engagement distance.",
    ],
    factsStatus: "verified",
    hero: {
      eyebrow: "Weapon setup guide",
      heading: "WARDOGS Best Attachments Guide",
      lead: "The best WARDOGS attachments match your weapon, distance and role. Start with a clear sight picture, add only what helps your lane, and keep enough flexibility for the next life.",
    },
    sections: [
      {
        id: "best-wardogs-attachments-at-a-glance",
        heading: "Best WARDOGS Attachments at a Glance",
        intro:
          "There is no one attachment package that is best for every gun and every objective. Build for the fights you expect to take.",
        table: {
          caption: "Attachment choice by situation",
          columns: ["Situation", "Prioritize", "Tradeoff to watch"],
          rows: [
            ["Close objective pushes", "Fast target acquisition and a clean close-range sight picture", "Do not add weight or clutter that slows rapid transitions"],
            ["Mixed lanes and compounds", "A flexible optic and handling that stays useful indoors", "Avoid overbuilding for one long sightline"],
            ["Long approach or overwatch", "Clear target identification and controlled follow-up shots", "Keep a route and a plan for closer fights"],
            ["Support or logistics defense", "Simple, repeatable setup you can use under pressure", "Do not spend the whole kit budget on a niche gun build"],
          ],
        },
        paragraphs: [
          "WARDOGS best attachments begin with the question, “Where will this gun be used?” An optic that helps you find targets across an open approach may be awkward inside a Control Zone building. A setup that feels quick during an entry can be harder to place precisely from a ridge. Pick the job first, then choose attachments that make that job easier.",
          "Use the in-game attachment menu as the final check for availability on your weapon. Rather than copying a universal list, compare the choices in front of you and keep the build focused. A lean setup with a clear purpose is easier to repurchase, easier to learn and easier to adjust when the squad changes plans.",
        ],
        links: [
          {
            label: "WARDOGS Best Loadouts",
            slug: "wardogs-best-loadouts",
            description: "Put attachment choices inside a complete, repurchase-friendly role build.",
          },
        ],
      },
      {
        id: "best-optics",
        heading: "Best Optics for WARDOGS",
        intro:
          "Choose an optic for the distance at which you must first identify and engage a target.",
        paragraphs: [
          "For close objective work, favor an optic or sight picture that lets you acquire targets quickly without blocking the doors, corners and movement cues around you. The key test is practical: can you transition from one nearby threat to the next without losing the space around the reticle? If not, the setup is too narrow for your lane.",
          "For mixed terrain, a flexible sight picture is often more valuable than an extreme magnification choice. Most matches move between open approaches and hard cover, so a setup that stays usable when the range closes can save you from rebuilding after every rotation.",
          "For long observation or a deliberate overwatch role, prioritize target identification and a stable view—but keep the weapon’s role honest. If your squad is about to breach a compact objective, a long-range view may be less useful than a simple, fast option you can carry into the next phase.",
        ],
      },
      {
        id: "best-grips-and-control-choices",
        heading: "Best Grips and Control Choices",
        intro:
          "A grip or control-focused attachment is worth taking only when it improves the shots you actually miss.",
        paragraphs: [
          "If follow-up shots drift during the sustained fights you commonly take, choose the option that makes the weapon feel easier to hold on target. If the problem is finding the target or moving between cover, a control attachment alone may not solve it. Diagnose the lane before adding parts.",
          "Keep the role in view. A player holding a stable exterior line may value a composed firing feel, while a player moving through rooms may care more about a setup that stays comfortable during quick transitions. Neither choice is universally best; the better choice is the one that supports the role for that life.",
          "Test one change at a time. Use the same weapon on a comparable route, then ask whether the attachment made it easier to track, recover between shots or maintain awareness. Small, repeatable tests beat copying a build you never adapt to your own play.",
        ],
      },
      {
        id: "best-muzzles-and-barrel-choices",
        heading: "Best Muzzles and Barrel Choices",
        intro:
          "Muzzle and barrel choices should support your intended engagement pattern, not turn every weapon into the same build.",
        paragraphs: [
          "When you expect repeated mid-range exchanges, prioritize a configuration that feels manageable through a full burst or several quick shots. When the match is mostly close entries, make sure a muzzle choice does not make the gun feel clumsy for the distances that decide the room.",
          "Avoid treating a single community recommendation as permanent. Weapon availability and balance can move, and different guns have different starting behavior. The useful rule is to choose the attachment that makes the gun more predictable for its current job, then reassess after a patch or a change in squad role.",
          "If a build begins to feel over-specialized, remove the least useful piece first. A simpler weapon that works on both the approach and the objective is often a stronger match choice than a perfect setup for a sightline you only see once.",
        ],
      },
      {
        id: "attachments-by-playstyle",
        heading: "Attachments by Playstyle",
        intro:
          "Use attachment choices to reinforce the way you contribute to the team.",
        paragraphs: [
          "Frontline players should build for the transition from the approach to the objective: quick reads, clean corners and enough control to stay useful when several targets appear. Avoid giving up all close-range awareness just to win a distant exchange before the push starts.",
          "Recon-oriented players should favor clarity for the lanes they are assigned to, while preserving the ability to relocate. A setup that supports a good call or a protected retreat is more valuable than one designed only for a highlight shot. Recon also benefits from keeping the weapon simple enough to rejoin the squad after the first observation.",
          "Support, builder and logistics players should choose reliable, repeatable attachments that suit self-defense around the route or position they are protecting. Their primary job may not be to chase long-range duels, so keeping the setup practical and affordable leaves room for the rest of the team’s needs.",
        ],
        links: [
          {
            label: "WARDOGS Leveling Guide",
            slug: "wardogs-leveling-guide",
            description: "Match a role-focused weapon setup with Support and Recon progression priorities.",
          },
        ],
      },
      {
        id: "long-range-vs-close-range-attachment-choices",
        heading: "Long-Range vs Close-Range Attachment Choices",
        intro:
          "Range is the deciding tradeoff: improve the first shot at your expected distance without making the next phase of the fight unplayable.",
        paragraphs: [
          "Long-range choices should make targets easier to read and follow at the distances your squad is actually covering. They work best when you have room to observe, a lane worth holding and a plan to move when the objective shifts. Do not carry a specialized overwatch setup into a close push without considering the cost to target acquisition and awareness.",
          "Close-range choices should help you process doors, windows and sudden movement quickly. They matter most when the objective turns into a chain of short, contested fights. If you will also cross open ground, choose a compromise that remains usable outside instead of optimizing exclusively for the room.",
          "For most mixed matches, a balanced setup is the safest starting point. Play a few lives with the same general configuration, note where it breaks down, and make the next change around that specific problem. That is how WARDOGS attachments become a practical tool rather than a permanent checklist.",
        ],
      },
      {
        id: "how-attachments-fit-into-a-full-loadout",
        heading: "How Attachments Fit Into a Full Loadout",
        intro:
          "Attachments complete a loadout; they do not replace a plan for the role, route and next purchase.",
        paragraphs: [
          "Start with the role your team needs, then select the primary weapon and attachment package that suits its usual distance. Leave enough flexibility for utility, survival and the next life. A fully decorated weapon does not make a complete loadout if it leaves the squad without the tools or cash needed for the objective.",
          "Revisit attachments whenever your role changes. A player who was watching a long route may need a more flexible setup after becoming the spare rifle in a building push. The best WARDOGS attachments are the ones you can justify in the current match, not the ones you saved from an old situation.",
          "Keep one straightforward default build and one alternate build for a different range or role. This makes the buy decision faster and helps you learn exactly what each change does for your own aim and movement without relying on unverified stat sheets.",
        ],
        links: [
          {
            label: "WARDOGS Best Settings",
            slug: "wardogs-best-settings",
            description: "Tune visibility and controls so your attachment choices are easier to evaluate in real fights.",
          },
        ],
      },
      {
        id: "common-attachment-mistakes",
        heading: "Common Attachment Mistakes",
        intro:
          "The biggest attachment mistake is adding parts without knowing what problem they solve.",
        paragraphs: [
          "Do not build around a single “best” answer for every weapon. Your role, range, map route and current squad composition all change what is useful. A simple, adaptable configuration usually produces better decisions than a rigid build copied from someone else’s preferred lane.",
          "Do not judge a choice after one unlucky gunfight. Test it across comparable situations and look for a consistent effect on sight picture, comfort and the distances you can cover. If it does not solve a repeat problem, remove it and preserve a cleaner setup.",
          "Finally, do not let attachments consume the whole buying decision. A weapon build should serve the squad plan alongside utility, movement and the ability to repurchase. The best attachment is rarely worth more than staying useful for the next objective.",
        ],
      },
    ],
    faq: [
      {
        question: "What are the best attachments in WARDOGS?",
        answer:
          "The best choice depends on the weapon, expected range and role. Start with a clear sight picture, add control only when it solves a real problem, and keep the build usable for the next phase of the match.",
      },
      {
        question: "What is the best optic for WARDOGS?",
        answer:
          "Choose an optic for the distance where you need to identify targets first. Close objective work favors fast awareness, while long lanes need a view that makes target identification easier without trapping you in one role.",
      },
      {
        question: "Should I use the same attachments on every weapon?",
        answer:
          "No. Different weapons and roles create different needs. Use one simple default as a baseline, then create an alternate setup for a distinct range or job.",
      },
      {
        question: "How do attachments fit into a WARDOGS loadout?",
        answer:
          "Attachments should reinforce the role you bought the weapon for while leaving room for utility, movement and a repurchase-friendly overall kit.",
      },
      {
        question: "Should I copy a single best attachment build?",
        answer:
          "Use other builds as ideas, then test them in the lanes you actually play. A configuration that works for a long overwatch route may be poor for a close Control Zone push.",
      },
    ],
    screenshots: [],
    relatedSlugs: ["wardogs-best-loadouts", "wardogs-best-settings", "wardogs-leveling-guide"],
    densityTargets: [{ term: "wardogs best attachments", min: 1.5, max: 3.5 }],
    lastReviewed: LAST,
  },
];

function pagePlainText(page) {
  const parts = [page.title, page.description, page.hero.heading, page.hero.lead];
  for (const section of page.sections) {
    parts.push(section.heading, section.intro, ...(section.paragraphs ?? []));
    for (const subsection of section.subsections ?? []) {
      parts.push(subsection.heading, ...subsection.paragraphs, ...(subsection.bullets ?? []));
    }
    for (const step of section.steps ?? []) parts.push(step.heading, step.description);
    if (section.table) {
      parts.push(section.table.caption, ...section.table.columns, ...section.table.rows.flat());
    }
    for (const link of section.links ?? []) {
      parts.push(link.label, link.description ?? "");
    }
  }
  for (const item of page.faq ?? []) parts.push(item.question, item.answer);
  return parts.filter(Boolean).join("\n");
}

function wc(text) {
  return text.toLowerCase().match(/[a-z0-9]+(?:['-][a-z0-9]+)*/g)?.length ?? 0;
}

function tc(text, term) {
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return (text.match(new RegExp(`\\b${escaped}\\b`, "gi")) ?? []).length;
}

const outPath = new URL("../content/generated/pages.json", import.meta.url);
writeFileSync(outPath, JSON.stringify(pages, null, 2) + "\n");

for (const page of pages) {
  const text = pagePlainText(page);
  const words = wc(text);
  const count = tc(text, page.primaryKeyword);
  const density = words ? (count / words) * 100 : 0;
  console.log(
    `${page.slug}: title=${page.title.length} desc=${page.description.length} words≈${words} kw=${count} density=${density.toFixed(2)}% links=${page.sections.reduce((n, s) => n + (s.links?.length ?? 0), 0)} faq=${page.faq.length}`,
  );
  if (page.title.length > 65) throw new Error(`title too long: ${page.slug}`);
  if (page.description.length < 80 || page.description.length > 170) throw new Error(`desc length: ${page.slug}`);
  if ((page.faq?.length ?? 0) < 4 || (page.faq?.length ?? 0) > 6) throw new Error(`faq count: ${page.slug}`);
}

console.log(`Wrote ${pages.length} pages to ${outPath.pathname}`);
