export interface Product {
  id: string
  name: string
  category: string
  description: string
  /** Longer, unique descriptive paragraph shown on the product page (improves SEO depth). */
  overview?: string
  /** Typical use-cases / industries for this product. */
  applications?: string[]
  features?: string[]
  specifications?: { label: string; value: string }[]
  image: string
}

export const products: Product[] = [

  // ─── HOISTING EQUIPMENT ───────────────────────────────────────────────────

  {
    id: "chain-pulley-block",
    name: "Chain Pulley Block",
    category: "Hoists",
    description:
      "JAG-PRO Brand precision-engineered manual chain hoist built with heavy-duty alloy steel body and high-grade load chain. Ideal for workshops, warehouses, and construction sites.",
    overview:
      "The Chain Pulley Block is a hand-operated lifting device that uses a compact gear train to multiply manual effort, letting a single operator raise loads of up to 20 tonnes with minimal force. Its triple-spur-gear arrangement and double-pawl brake system hold the load securely at any height, while the powder-coated mild-steel body and G80 alloy load chain stand up to daily use in dusty, high-traffic environments. Because it needs no electricity, it is the dependable choice for sites and workshops where a power supply is unreliable or unavailable.",
    applications: [
      "Lifting engines and machinery in automobile and repair workshops",
      "Loading and unloading goods in warehouses and godowns",
      "Erection and maintenance work on construction sites",
      "Positioning dies and moulds in fabrication units",
      "General-purpose lifting where no power supply is available",
    ],
    image: "/products/chain-pulley-block.png",
    specifications: [
      { label: "Capacity", value: "1 Ton – 20 Ton" },
      { label: "Body Material", value: "Heavy-Duty Mild Steel" },
      { label: "Chain Grade", value: "G80 Alloy Load Chain" },
      { label: "Lift Height", value: "3m (custom available)" },
      { label: "Safety", value: "Double Pawl Brake System" },
      { label: "Finishing", value: "Powder Coating" },
      { label: "Gear Arrangement", value: "Triple Spur Gear System" },
      { label: "Hand Chain", value: "5mm" },
    ],
  },

  {
    id: "electric-chain-hoist",
    name: "Electric Chain Hoist",
    category: "Hoists",
    description:
      "JAG-PRO Brand heavy-duty electric chain hoist designed for demanding industrial applications. Can be equipped with a trolley for parallel beam movement. Bridges larger traversing distances for loads up to 5 tonnes.",
    overview:
      "The Electric Chain Hoist automates repetitive vertical lifting with a copper-wound motor and G80 alloy chain, delivering smooth 3–7 m/min lifting speeds for loads up to 5 tonnes. Paired with a trolley it traverses along a beam, making it ideal for production lines and assembly stations where loads must be moved quickly and accurately throughout the shift. Optional pendant or remote control lets the operator position loads precisely while standing clear of the load path.",
    applications: [
      "Repetitive lifting on assembly and production lines",
      "Feeding material to CNC machines and presses",
      "Overhead handling in fabrication and engineering workshops",
      "Loading bays and dispatch areas",
      "Maintenance of heavy plant and equipment",
    ],
    image: "/products/electric-chain-hoist.png",
    specifications: [
      { label: "Capacity", value: "1 Ton – 5 Ton" },
      { label: "Motor", value: "Copper Winding Heavy-Duty Motor" },
      { label: "Chain", value: "G80 Alloy Chain" },
      { label: "Lifting Speed", value: "3–7 m/min" },
      { label: "Power Supply", value: "Three Phase" },
      { label: "Control", value: "Pendant / Remote Control (Optional)" },
      { label: "Finishing", value: "Powder Coating" },
      { label: "Packing", value: "Wooden Box" },
    ],
  },

  {
    id: "electric-wire-rope-hoist",
    name: "Electric Wire Rope Hoist",
    category: "Hoists",
    description:
      "JAG-PRO Brand electric wire rope hoist engineered for heavy-duty lifting requiring strength, precision, and durability. Delivers smooth operation and high efficiency across a wide range of industrial uses.",
    overview:
      "Built around a heavy-duty induction motor and steel wire rope, the Electric Wire Rope Hoist is engineered for high-frequency, heavy-duty lifting up to 10 tonnes. The wire rope construction gives precise load control and a long service life, while trolley mounting allows the hoist to travel the full span of an EOT or gantry crane. It is the workhorse for plants that lift heavy loads many times a day and need dependable, low-maintenance performance.",
    applications: [
      "Lifting and traversing on EOT and gantry cranes",
      "Steel plants and heavy fabrication shops",
      "Cement, power and process plants",
      "Foundries and forging units",
      "Stockyards and material storage facilities",
    ],
    image: "/products/electric-wire-rope-hoist.png",
    specifications: [
      { label: "Capacity", value: "1 Ton – 10 Ton" },
      { label: "Rope", value: "Steel Wire Rope" },
      { label: "Motor", value: "Heavy Duty Induction Motor" },
      { label: "Speed", value: "3–5 m/min" },
      { label: "Mounting", value: "Trolley" },
    ],
  },

  {
    id: "mini-electric-wire-rope-hoist",
    name: "Mini Electric Wire Rope Hoist",
    category: "Hoists",
    description:
      "Compact electric wire rope hoist designed for smaller-scale lifting and material handling. Suitable for workshops, garages, and small industrial settings.",
    overview:
      "The Mini Electric Wire Rope Hoist packs single-phase electric lifting into a compact frame for loads from 500 kg to 2 tonnes, making it perfect where three-phase power isn't available. Auto cut-off and an emergency stop protect both the operator and the load, while the forged steel hook and 12–20 m rope handle everyday workshop and light-construction tasks. Its small footprint lets it work in confined spaces that larger hoists cannot reach.",
    applications: [
      "Small workshops, garages and service centres",
      "Lifting building materials on low-rise construction",
      "Loft and mezzanine material handling",
      "Shutter and signage installation",
      "Light-duty repair and maintenance work",
    ],
    image: "/products/mini-wire-rope-hoist.png",
    features: [
      "Electric operation for efficiency",
      "Wire rope for strength and durability",
      "Compact miniature size for confined spaces",
      "Auto cut-off and emergency stop safety",
      "Forged steel hook",
    ],
    specifications: [
      { label: "Capacity", value: "500 kg – 2000 kg" },
      { label: "Power", value: "Single Phase" },
      { label: "Rope Length", value: "12 – 20 Meter" },
      { label: "Safety", value: "Auto Cut-off, Emergency Stop" },
      { label: "Hook", value: "Forged Steel Hook" },
    ],
  },

  {
    id: "construction-winch-machine",
    name: "Construction Winch Machine with Stand",
    category: "Winches",
    description:
      "JAG-PRO Brand construction winch – a mechanical device providing resistance or torque to lift and pull loads. Features grooved drum for rope protection, adjustable clutch for smooth control. Also available as JAG-PRO Crane Stand.",
    overview:
      "The Construction Winch Machine combines a grooved drum and adjustable clutch to lift and pull loads vertically up storeyed buildings with smooth, controlled motion. Supplied with a sturdy stand (also available as the JAG-PRO Crane Stand), it mounts safely at the edge of a slab to hoist bricks, concrete and tools to upper floors. The grooved drum minimises rope wear and the fairlead guide keeps the rope tracking correctly under load.",
    applications: [
      "Lifting building materials to upper floors on construction sites",
      "Hoisting concrete, bricks and sand on multi-storey projects",
      "Pulling loads horizontally across a site",
      "Well and borehole servicing",
      "Temporary material lifts during renovation",
    ],
    image: "/products/construction-winch.png",
    features: [
      "Grooved drum minimizes rope wear",
      "Adjustable clutch for smooth control",
      "Fairlead rope guide at termination point",
      "Inclined plane worm screw design",
    ],
    specifications: [
      { label: "Capacity", value: "1000 kg" },
      { label: "Power", value: "Single Phase" },
      { label: "Rope Length", value: "40 – 50 Meter" },
      { label: "Safety", value: "Auto Cut-off, Emergency Stop" },
      { label: "Hook", value: "Forged Steel Hook" },
    ],
  },

  {
    id: "kcd-winch-machine",
    name: "KCD Electric Winch Machine",
    category: "Winches",
    description:
      "JAG-PRO Brand KCD three-phase electric winch – a versatile lifting device for industrial, warehouse, and construction use. Efficiently handles both lifting and pulling tasks.",
    overview:
      "The KCD Electric Winch is a three-phase, heavy-duty copper-motor winch carrying up to 100 m of wire rope for both lifting and long-distance pulling. With speeds of 6–11 m/min and a choice of fixed or portable mounting, it suits continuous-duty industrial hauling where a manual winch would be too slow. The robust copper motor keeps running cool through repeated lift-and-pull cycles.",
    applications: [
      "Material hoisting on construction and infrastructure projects",
      "Pulling and dragging heavy loads across yards",
      "Erection of structures and towers",
      "Mining and tunnelling haulage",
      "Workshop and warehouse handling",
    ],
    image: "/products/kcd-winch.png",
    specifications: [
      { label: "Capacity", value: "1 – 5 Ton" },
      { label: "Wire Rope Length", value: "100 Meter" },
      { label: "Speed", value: "6–11 m/min" },
      { label: "Motor", value: "Heavy Duty Copper Motor" },
      { label: "Mounting", value: "Fixed / Portable" },
    ],
  },

  {
    id: "crab-winch-machine",
    name: "Crab Winch Machine (Hand Operated)",
    category: "Winches",
    description:
      "JAG-PRO Brand manual crab winch used for pulling heavy loads, erecting pillars and poles, and tensioning electric lines. Multi-geared machine mounted on ball bearings.",
    overview:
      "The hand-operated Crab Winch is a multi-geared manual machine—driver, reduction, pinion and main load gears—mounted on ball bearings for low-effort pulling of very heavy loads. Fabricated from tested steel with hob-cut teeth and an MS pipe rope drum welded to its flanges, it is the tool of choice for erecting poles and pillars and tensioning overhead electric lines where no power is available. The gear reduction lets one or two operators move loads far heavier than they could by hand alone.",
    applications: [
      "Erecting electric and transmission poles",
      "Tensioning overhead power and railway lines",
      "Pulling heavy loads on construction sites",
      "Pillar and column erection",
      "Cable laying and stringing operations",
    ],
    image: "/products/crab-winch.png",
    features: [
      "Multi-geared: Driver, Reduction, Pinion & Main Load Gears",
      "Fabricated from tested steel with hob-cut teeth",
      "MS pipe rope drum welded with flanges",
      "Mounted on ball bearings",
      "Used for lifting, pulling, and tensioning",
    ],
  },

  {
    id: "wall-mounted-winch",
    name: "Wall Mounted Winch Machine (Hand Operated)",
    category: "Winches",
    description:
      "JAG-PRO Brand compact gear-driven wall winch designed to lift or pull heavy loads. Features manual crank handle, wall-mounting capability, and automatic brakes for safe, controlled operation.",
    overview:
      "The Wall Mounted Winch is a compact, gear-driven hand winch that bolts directly to a wall or column to lift or pull loads with a simple crank handle. An automatic brake and ratchet hold the load safely in position the moment cranking stops, and the maintenance-free design makes it a reliable fixture for repetitive vertical or horizontal tasks. Its fixed mounting frees up floor space in busy workshops and stores.",
    applications: [
      "Fixed lifting points in workshops and stores",
      "Boat, trailer and equipment pulling",
      "Shutter and gate operation",
      "Loft and storage hoisting",
      "Tensioning and positioning tasks",
    ],
    image: "/products/wall-winch.png",
    features: [
      "Compact gear-driven design",
      "Manual crank handle",
      "Automatic brake / ratchet for safety",
      "Wall-mountable for vertical or horizontal tasks",
      "Maintenance-free operation",
    ],
  },

  {
    id: "geared-trolley",
    name: "Geared Trolley",
    category: "Hoist Accessories",
    description:
      "JAG-PRO Brand geared trolley for precise traversing up to 10 tonnes parallel to the beam. Hardened heat-treated steel wheels with sealed ball bearings. Adjustable for tapered and flat-flanged beams.",
    overview:
      "The Geared Trolley lets an operator traverse a hoist and its load—up to 10 tonnes—precisely along an I-beam by turning a hand chain. Hardened, heat-treated steel wheels on sealed, maintenance-free bearings roll smoothly on both tapered and flat-flanged beams, while integrated rubber bumpers and protective lugs keep the trolley secure against collision and accidental drop-off. Combined with a chain hoist, it forms a simple, cost-effective overhead crane.",
    applications: [
      "Traversing chain or lever hoists along a beam",
      "Workshop and assembly-line load positioning",
      "Monorail material handling systems",
      "Maintenance bays and service centres",
      "Combining with hoists for a simple overhead crane",
    ],
    image: "/products/geared-trolley.png",
    features: [
      "Hardened heat-treated steel wheels",
      "Sealed ball bearings – maintenance-free",
      "Adjustable for tapered and flat-flanged beams",
      "Integrated rubber bumpers against collision damage",
      "Protective lugs hold trolley securely on beam",
      "Optional hook or suspender configurations",
    ],
  },

  {
    id: "pulling-lifting-machine",
    name: "Pulling & Lifting Machine",
    category: "Hoists",
    description:
      "JAG-PRO Brand versatile portable tool for horizontal and vertical load handling. Used in fabrication, shipyards, and infrastructure projects. Models up to 5 tonnes.",
    overview:
      "Often called a 'Tirfor' or wire-rope puller, the Pulling & Lifting Machine is a portable tool that lifts and drags loads up to 5 tonnes in any direction using a length of wire rope. Its pressed galvanised steel body, special double-safety device and built-in overload protection make it dependable for fabrication, shipyard and infrastructure work far from a power source. Lightweight and compact, it can be carried to the load rather than the load brought to it.",
    applications: [
      "Tensioning and pulling on fabrication and erection sites",
      "Shipyard and offshore rigging",
      "Pole and structure erection",
      "Vehicle and equipment recovery",
      "Cable pulling and load positioning",
    ],
    image: "/products/pulling-machine.png",
    features: [
      "Three models up to 5 tonnes",
      "Overload protection",
      "Pressed galvanised steel body (no aluminium components)",
      "Special double-safety device",
      "Cable safety rating 6",
      "Compact and lightweight",
      "Individual quality control",
    ],
  },

  {
    id: "ratchet-lever-hoist",
    name: "Ratchet Lever Hoist",
    category: "Hoists",
    description:
      "JAG-PRO Brand lever hoist (come-along) used for hoisting, pulling, tensioning, and positioning loads, often horizontally. Includes anti-drop straps and ergonomic grip.",
    overview:
      "The Ratchet Lever Hoist (come-along) uses a short ratchet handle and disc-type load brake to hoist, pull, tension and position loads—often horizontally—in tight spaces. Its enclosed design keeps dirt and moisture out of the mechanism, while drop-forged hooks with safety latches and a free-chaining device speed up rigging. The compact body and ergonomic rubber grip make it easy to operate one-handed in awkward positions.",
    applications: [
      "Tensioning and pulling in confined spaces",
      "Load binding and securing on trucks",
      "Construction and maintenance rigging",
      "Pipe and structure alignment",
      "Agricultural and utility tasks",
    ],
    image: "/products/lever-hoist.png",
    features: [
      "Enclosed design protects internals from contamination",
      "Ergonomic rubber grip on short handle",
      "Disc-type load brake from high-quality corrosion-protected materials",
      "Standard free chaining device",
      "Alloyed steel link chain with zinc-plated / yellow chromated finish",
      "Drop-forged suspension and load hooks with safety latches",
    ],
  },

  // ─── MATERIAL HANDLING ────────────────────────────────────────────────────

  {
    id: "hand-pallet-truck",
    name: "Hand Pallet Truck",
    category: "Material Handling",
    description:
      "JAG-PRO Brand manual pallet jack with hydraulic mechanism. Designed for lifting and transporting palletized loads in warehouses, distribution centres, and retail environments.",
    overview:
      "The Hand Pallet Truck is a manual hydraulic jack that slides under a pallet and raises it just enough to wheel loads of up to 5 tonnes across a flat floor. A leak-proof hydraulic pump and tough PU/nylon wheels make it the everyday workhorse for moving palletised goods without the cost or training of a forklift. Its simple three-position lever—raise, lower, neutral—keeps operation quick and intuitive.",
    applications: [
      "Moving palletised goods in warehouses and godowns",
      "Loading and unloading delivery trucks",
      "Order picking in distribution centres",
      "Retail and supermarket back-of-store handling",
      "Shop-floor material movement in factories",
    ],
    image: "/products/hand-pallet-truck.png",
    specifications: [
      { label: "Capacity", value: "2.5 – 5 Ton" },
      { label: "Fork Size", value: "550×1220 mm & 685×1200 mm" },
      { label: "Pump", value: "Leak-Proof Hydraulic Pump" },
      { label: "Wheels", value: "PU / Nylon" },
      { label: "Lift Height", value: "85 – 200 mm" },
    ],
  },

  {
    id: "manual-hand-stacker",
    name: "Manual Hand Stacker",
    category: "Material Handling",
    description:
      "JAG-PRO Brand manually operated lifting device for warehouses and factories. Bridges the gap between pallet jacks and forklifts for loads of 600 kg to 2000 kg.",
    overview:
      "The Manual Hand Stacker bridges the gap between a pallet jack and a forklift, using a hand-pump or foot-pedal hydraulic system to lift loads of 600–2000 kg up to 3 metres high. With a single or telescopic mast and adjustable forks, it stacks and retrieves pallets from racking without the expense of a powered truck. A protective mesh screen and overload protection keep the operator safe during elevated lifts.",
    applications: [
      "Stacking pallets onto racking in warehouses",
      "Loading and unloading without a forklift",
      "Machine and die feeding in workshops",
      "Order picking from elevated shelves",
      "General factory and storeroom handling",
    ],
    image: "/products/manual-stacker.png",
    features: [
      "Hand-pumped or foot-pedal hydraulic system",
      "Single or telescopic mast up to 3 metres",
      "Adjustable or fixed forks (~1150 mm length)",
      "Ergonomic steering and control handle with release lever",
      "Protective mesh screen and overload protection",
    ],
  },

  {
    id: "manual-scissor-table",
    name: "Manual Scissor Lift Table",
    category: "Material Handling",
    description:
      "JAG-PRO Brand scissor mechanism lifting table for raising, lowering, and short-distance transport of goods. Used in vehicle loading, docking, work positioning, and wheelchair lifts.",
    overview:
      "The Manual Scissor Lift Table uses a foot-pedal hydraulic scissor mechanism to raise and lower goods to a comfortable working height, reducing operator strain and back injury. Built from high-strength steel with a built-in safety valve and sealed cylinder, it doubles as a mobile work platform and short-distance transporter. Single, double or triple scissor options extend the lifting height for taller working positions.",
    applications: [
      "Ergonomic work positioning on assembly lines",
      "Loading and unloading at docks and vehicles",
      "Die, mould and tool handling in workshops",
      "Goods movement between workstations",
      "Wheelchair and accessibility lifting",
    ],
    image: "/products/scissor-lift-table.png",
    features: [
      "Foot pedal operated hydraulic lifting",
      "High-strength steel construction",
      "Built-in safety valve and sealed cylinder",
      "Single, double, or triple scissor options",
      "Easy-to-operate brake unit",
    ],
    specifications: [
      { label: "Capacity", value: "500 kg – 1000 kg" },
      { label: "Max Lifting Height", value: "900 mm – 1700 mm" },
      { label: "Min Lower Height", value: "280 mm – 500 mm" },
      { label: "Top Platform Size", value: "800×500 mm / 1200×600 mm" },
      { label: "Wheel", value: "125×50 mm / 150×50 mm" },
    ],
  },

  {
    id: "platform-hand-trolley",
    name: "Platform Hand Trolley",
    category: "Material Handling",
    description:
      "JAG-PRO Brand flat-bed platform trolley with four casters designed for moving heavy goods in warehouses, factories, and commercial spaces.",
    overview:
      "The Platform Hand Trolley is a flat-bed, four-caster cart with a metal body and fibre cover for moving boxed and loose goods of up to 500 kg around a facility. Its low deck and smooth-rolling wheels make repetitive transport quick and effortless, while the sturdy steel frame shrugs off the knocks of daily use. The four-caster layout keeps the load stable and easy to steer around tight corners.",
    applications: [
      "Moving stock in warehouses and stores",
      "Goods transport in factories and workshops",
      "Office, hospital and hotel logistics",
      "Retail restocking and deliveries",
      "General-purpose material movement",
    ],
    image: "/products/platform-trolley.png",
    specifications: [
      { label: "Capacity", value: "150 kg – 500 kg" },
      { label: "Platform Size", value: "1.5 ft × 3 ft / 2 ft × 3.5 ft" },
      { label: "Wheel", value: "50 mm × 100 mm" },
      { label: "Material", value: "Metal Body with Fibre Cover" },
    ],
  },

  {
    id: "wheel-barrow-trolley",
    name: "Wheelbarrow Trolley",
    category: "Material Handling",
    description:
      "JAG-PRO Brand single or double-wheeled hand-propelled vehicle for transporting soil, gravel, or construction debris. Widely used in gardening, construction, and manual labour activities.",
    overview:
      "The Wheelbarrow Trolley is a single- or double-wheeled, mild-steel hand cart for carrying soil, sand, gravel and construction debris over rough ground. The double-wheel version offers extra stability for heavier loads, while pneumatic or rubber tyres absorb shocks on uneven sites. Its tough steel body handles the abrasive, dirty materials that quickly wear out lighter carts.",
    applications: [
      "Carrying sand, cement and debris on construction sites",
      "Gardening and landscaping work",
      "Brick and aggregate movement",
      "Farm and nursery material handling",
      "General site and yard transport",
    ],
    image: "/products/wheelbarrow.png",
    specifications: [
      { label: "Capacity", value: "100 kg – 300 kg" },
      { label: "Type", value: "Single & Double Wheel" },
      { label: "Body Material", value: "Mild Steel" },
      {
        label: "Wheel",
        value: '12"×3" Rubber / 3.50×8 Pneumatic',
      },
      { label: "Usage", value: "Multi-Purpose" },
    ],
  },

  // ─── WIRE ROPES & SLINGS ──────────────────────────────────────────────────

  {
    id: "steel-wire-ropes",
    name: "Steel Wire Ropes",
    category: "Wire Ropes & Slings",
    description:
      "High-performance steel wire ropes from 0.7 mm to 64 mm, covering all constructions including non-compacted, compacted, plasticated, flattened strand, and locked coil. Usha Martin manufactured. ISO 9001:2015, ABS, DNV-GL, and Lloyds certified.",
    overview:
      "Manufactured by Usha Martin, these Steel Wire Ropes span 0.7 mm to 64 mm across every major construction—from standard 6×19 and 6×36 to compacted, plasticated, flattened-strand and locked-coil ropes. Six decades of crane-rope expertise and ISO 9001:2015, ABS, DNV-GL and Lloyds certification make them dependable for the most demanding lifting and hauling duties. Rotation-resistant and plastic-impregnated-core options are available for applications where rope spin or internal wear is a concern.",
    applications: [
      "Crane and hoist hoisting ropes",
      "Elevators, lifts and winders",
      "Mining, drilling and excavation",
      "Bridges, structures and suspension systems",
      "Marine, fishing and offshore rigging",
    ],
    image: "/products/steel-wire-rope.png",
    features: [
      "Six decades of crane rope manufacturing excellence",
      "Next-generation compacted ropes with plastic-impregnated cores",
      "Rotation-resistant rope options",
      "Stringent quality testing procedures",
      "Wide variety of hoist ropes for diverse industrial applications",
    ],
    specifications: [
      { label: "Sizes", value: "0.7 mm – 64 mm" },
      { label: "Construction", value: "7×7, 6×19, 6×36, 18×7, 8×19, 35×7" },
      { label: "Core", value: "IWRC & FMC" },
      { label: "Material", value: "High-Tensile Steel / Stainless Steel" },
      { label: "Wire Finish", value: "Galvanized & Ungalvanized" },
      { label: "Grade", value: "1770 – 2160 N/mm²" },
    ],
  },

  {
    id: "steel-wire-rope-slings",
    name: "Steel Wire Rope Slings",
    category: "Wire Ropes & Slings",
    description:
      "Engineered lifting tools constructed from high-carbon steel wire with 6×19 or 6×37 classification. Feature IWRC or FC cores, mechanical aluminium ferrule or hand-spliced terminations. Conform to IS 2762 / BS EN 13414-1.",
    overview:
      "Steel Wire Rope Slings are engineered lifting tools made from 6×19 or 6×37 high-carbon wire rope with IWRC or fibre cores and either mechanical aluminium-ferrule or hand-spliced eyes. Conforming to IS 2762 / BS EN 13414-1 with a 5:1 safety factor, they are configured as single or multi-leg slings to match the shape and weight of the load. The 6×19 construction suits general-purpose lifting while the more flexible 6×37 is preferred for larger-diameter, frequently-handled slings.",
    applications: [
      "General-purpose crane and hoist lifting",
      "Single and multi-leg load rigging",
      "Steel, fabrication and shipping yards",
      "Heavy machinery and structure lifting",
      "Construction and erection work",
    ],
    image: "/products/wire-rope-sling.png",
    specifications: [
      {
        label: "Material",
        value: "High-Tensile Steel (ungalvanized or galvanized)",
      },
      { label: "Construction", value: "6×19 (general purpose) / 6×37 (high flexibility)" },
      { label: "Core", value: "IWRC / FC" },
      { label: "Tensile Grade", value: "1770 N/mm² (Grade 110) / 1960 N/mm² (Grade 120)" },
      { label: "Diameter", value: "6 mm – 76 mm" },
      { label: "Safety Factor", value: "5:1" },
      {
        label: "Termination",
        value: "Mechanical aluminium ferrule (IS 5245 Pt.2) / Hand-spliced",
      },
    ],
  },

  {
    id: "pvc-coated-wire-ropes",
    name: "PVC Coated Wire Ropes",
    category: "Wire Ropes & Slings",
    description:
      "High-strength steel core wire ropes with protective PVC coating for enhanced corrosion resistance. Available in various colours. Suitable for marine, construction, and security applications.",
    overview:
      "PVC Coated Wire Ropes pair a high-strength steel core with a protective, colour-coded PVC jacket that resists corrosion, abrasion and weathering. Available in GI, stainless and mild-steel cores from 1–13 mm, they suit applications where appearance, hand-safety and rust protection all matter. The smooth coating prevents the rope from snagging or marking the surfaces it touches, making it popular for architectural and safety fittings.",
    applications: [
      "Safety barriers, railings and balustrades",
      "Architectural and decorative cabling",
      "Gym and fitness equipment",
      "Marine and outdoor fixtures",
      "Security and anti-theft fastening",
    ],
    image: "/products/pvc-wire-rope.png",
    specifications: [
      {
        label: "Core Material",
        value: "GI Wire / Stainless Steel (304/316) / Mild Steel",
      },
      {
        label: "Coating Material",
        value: "PVC (IS 5831 Type A, UV-stabilized available)",
      },
      { label: "Construction", value: "1×19, 7×7, or 7×19" },
      { label: "Diameter", value: "1 mm – 13 mm" },
      { label: "Diameter Tolerance", value: "+10% / –5%" },
    ],
  },

  {
    id: "webbing-sling",
    name: "Webbing Sling",
    category: "Webbing Slings",
    description:
      "JAG-PRO Brand lightweight, durable polyester webbing slings. Unaffected by oil and grease, with good chemical resistance. Color-coded by WLL capacity from 1 to 10 tonnes.",
    overview:
      "JAG-PRO Webbing Slings are flat polyester slings, colour-coded by working load limit from 1 to 10 tonnes, that cradle a load without scratching its surface. Unaffected by oil and grease and offering good chemical resistance, they provide a 7:1 safety factor and spread the load over a wide area to prevent damage to delicate finishes. Lightweight and easy to store, they are the go-to sling for handling painted, polished and packaged goods.",
    applications: [
      "Lifting painted, polished or fragile loads",
      "General industrial and warehouse lifting",
      "Machinery and equipment handling",
      "Construction and erection rigging",
      "Shipping and logistics",
    ],
    image: "/products/webbing-sling.png",
    features: [
      "High-strength polyester material",
      "Evenly distributes weight to reduce load damage",
      "Color-coded for quick capacity identification",
      "Available as flat webbing or round slings",
      "Conforms to industrial standards",
    ],
    specifications: [
      { label: "Width", value: "25 mm – 300 mm" },
      { label: "Length", value: "Custom-made" },
      { label: "Load Capacity", value: "1 Ton – 20 Ton (color coded)" },
      { label: "Safety Factor", value: "7:1" },
      {
        label: "Color Code",
        value:
          "Purple-1T, Green-2T, Yellow-3T, Grey-4T, Red-5T, Brown-6T, Blue-8T, Orange-10T",
      },
    ],
  },

  {
    id: "polyester-round-sling",
    name: "Polyester Round Sling",
    category: "Webbing Slings",
    description:
      "JAG-PRO Brand heavy-duty continuous-loop polyester round slings for lifting delicate, finished, or irregular loads. Color-coded per EN 1492-2 with 5:1 – 7:1 safety factors.",
    overview:
      "The Polyester Round Sling is a continuous-loop sling with a load-bearing PES yarn core inside a seamless double-wall sleeve, giving a very high strength-to-weight ratio and low elongation. Colour-coded to EN 1492-2 with optional RFID tags and overload-indicator yarns, it lifts delicate and irregular loads safely up to 20+ tonnes. Because the load-bearing core is fully protected inside the sleeve, the sling stays soft and flexible while resisting cuts and abrasion.",
    applications: [
      "Lifting finished, delicate and irregular loads",
      "Choke, basket and vertical hitches",
      "Heavy machinery and component handling",
      "Wind-energy and infrastructure projects",
      "General industrial rigging",
    ],
    image: "/products/round-sling.png",
    features: [
      "Continuous loop PES yarn core",
      "Woven double-thickness seamless tubular sleeve",
      "High strength-to-weight ratio",
      "Low elongation – stretches half as much as nylon",
      "Optional RFID tagging and overload indicator yarns",
    ],
    specifications: [
      { label: "Material", value: "High-Tenacity Polyester (PES) / HMPE" },
      { label: "Capacity", value: "1 Ton – 20+ Ton (color coded)" },
      { label: "Safety Factor", value: "7:1 (5:1 also available)" },
      { label: "Temperature Range", value: "Up to 80°C" },
      { label: "Standards", value: "EN 1492-2:2000, ASME B30.9" },
    ],
  },

  {
    id: "ratchet-lashing-belt",
    name: "Ratchet Lashing Belt",
    category: "Webbing Slings",
    description:
      "Industrial ratchet belt for securing cargo during transportation. Available in 25 mm, 35 mm, and 50 mm widths. Heat-treated steel ratchet and hooks with zinc coating.",
    overview:
      "The Ratchet Lashing Belt secures cargo during transport using a heat-treated steel ratchet and hooks on a high-tenacity polyester strap. Available from 25 mm to 75 mm wide with capacities up to 10 tonnes, the ratchet delivers high, controlled tension that keeps loads from shifting in transit. The zinc-coated hardware resists corrosion through repeated outdoor use on trucks and trailers.",
    applications: [
      "Securing cargo on trucks, trailers and containers",
      "Palletised and machinery load restraint",
      "Construction equipment transport",
      "Logistics and freight forwarding",
      "Bundling and tie-down tasks",
    ],
    image: "/products/ratchet-belt.png",
    specifications: [
      { label: "Belt Material", value: "100% High Tenacity Polyester (PES)" },
      { label: "Width", value: "25 mm, 35 mm, 50 mm, 75 mm" },
      { label: "Thickness", value: "2 mm – 5 mm" },
      { label: "Capacity", value: "1 Ton – 10 Ton" },
      {
        label: "Ratchet & Hook Material",
        value: "Heat-Treated Steel / Stainless Steel (zinc coated)",
      },
    ],
  },

  {
    id: "polypropylene-ropes",
    name: "Polypropylene (PP) Ropes",
    category: "Safety Equipment",
    description:
      "High-strength lightweight synthetic ropes made from virgin PP multifilament or monofilament. Float on water. Excellent abrasion resistance, UV stabilized. Conform to IS 5175:2022.",
    overview:
      "Polypropylene (PP) Ropes are lightweight, high-strength synthetic ropes made from virgin multifilament or monofilament that float on water and resist rot, abrasion and UV. Conforming to IS 5175:2022 in twisted or braided constructions from 4 mm upwards, they are an economical choice wherever a non-conductive, water-resistant rope is needed. Being electrically non-conductive and buoyant, they are especially suited to marine and electrical-safety uses.",
    applications: [
      "Marine, fishing and boating use",
      "Packaging, bundling and tying",
      "Agriculture and general utility",
      "Safety barriers and cordoning",
      "Camping, rescue and recreation",
    ],
    image: "/products/pp-rope.png",
    specifications: [
      { label: "Material", value: "Virgin Polypropylene (PP)" },
      { label: "Structure", value: "3/4-strand twisted or 8/12-strand braided" },
      { label: "Specific Gravity", value: "~0.91 kg/dm³ (floats)" },
      { label: "Melting Point", value: "~165°C" },
      { label: "Standard", value: "IS 5175:2022, ISO 1346" },
      {
        label: "Diameter Range",
        value: "4 mm – 48 mm+ (breaking strength 286–28560 kgf)",
      },
    ],
  },

  // ─── CHAINS & CHAIN SLINGS ────────────────────────────────────────────────

  {
    id: "chain-and-chain-slings",
    name: "Chain & Chain Slings",
    category: "Rigging Equipment",
    description:
      "High-tensile alloy steel lifting chains in Grades 80, 100, and 120. Also available as Mild Steel (MS) and Stainless Steel (SS) chains for general-purpose applications. Conform to IS 2760 with a 5:1 design factor.",
    overview:
      "These Chain & Chain Slings are high-tensile alloy lifting chains in Grades 80, 100 and 120, with mild-steel and stainless options for lighter duties. Conforming to IS 2760 with a 5:1 design factor, they withstand heat, abrasion and rough handling far better than wire or webbing, making them the standard for repeated heavy overhead lifting. Multi-leg assemblies with master links and hooks can be built to match almost any load configuration.",
    applications: [
      "Overhead lifting in foundries and forges",
      "Single and multi-leg load rigging",
      "Steel plants and heavy engineering",
      "Towing, recovery and lashing",
      "Hot and abrasive environments",
    ],
    image: "/products/chain-sling.png",
    features: [
      "Grade 80 – general lifting, towing, and recovery",
      "Grade 100 – 25% higher WLL than Grade 80, preferred for overhead lifting",
      "Grade 120 – highest strength-to-weight ratio, square links",
      "Mild Steel (Grade 30) – general-purpose, non-overhead use, galvanized",
      "Stainless Steel (304/316) – marine and corrosion-resistant applications",
    ],
  },

  // ─── RIGGING HARDWARE ─────────────────────────────────────────────────────

  {
    id: "chain-connecting-link",
    name: "Chain Connecting Link",
    category: "Rigging Hardware",
    description:
      "High-strength alloy steel (Grade 80/100) or stainless steel (AISI 316L) connecting links for joining chain segments. Heat-treated forged design. Comply with EN 1677-1. Capacities 1.5 T – 32 T.",
    overview:
      "Chain Connecting Links join chain segments and components into a complete sling assembly using a heat-treated, forged alloy-steel (Grade 80/100) or AISI 316L stainless body. Conforming to EN 1677-1 with capacities from 1.5 to 32 tonnes, each link is rated to match the working load limit of the chain it connects. They make it quick to assemble, extend or repair chain slings in the field without specialist tools.",
    applications: [
      "Joining chain segments in sling assemblies",
      "Connecting hooks, rings and master links",
      "Repairing and extending chain slings",
      "Marine and corrosion-prone rigging",
      "General overhead lifting",
    ],
    image: "/products/chain-link.png",
  },

  {
    id: "eye-hook",
    name: "Eye Hook",
    category: "Rigging Hardware",
    description:
      "Eye hoist lifting hooks for attaching wire rope slings to crane hooks. Complete with safety latch. Electric galvanized, hot-dip galvanized, or powder-coated finish.",
    overview:
      "The Eye Hook attaches a wire-rope or chain sling to a crane hook through a forged steel eye, and comes fitted with a safety latch to stop the load slipping off. Made from high-tensile C1045 or alloy steel with galvanized or powder-coated finishes, it handles working loads from 0.5 to 32 tonnes. The forged construction and self-closing latch make it a safe, reliable termination for everyday lifting.",
    applications: [
      "Connecting slings to crane and hoist hooks",
      "Wire-rope and chain sling assemblies",
      "General workshop and yard lifting",
      "Construction and erection rigging",
      "Marine and outdoor handling",
    ],
    image: "/products/eye-hook.png",
    specifications: [
      { label: "Capacity (WLL)", value: "0.5 Ton – 32 Ton" },
      { label: "Material", value: "High Tensile Steel C1045 / Alloy Steel" },
      {
        label: "Surface",
        value: "Electric Galvanized / Hot Dip Galvanized / Powder Coating",
      },
    ],
  },

  {
    id: "dee-shackle",
    name: "Dee Shackle",
    category: "Rigging Hardware",
    description:
      "Forged alloy or carbon steel dee-shackle, quenched and tempered. Hot-dip galvanized for corrosion resistance. Comply with ISO 2415, EN 13889, or IS 6132. Safety factor 6:1.",
    overview:
      "The Dee (D) Shackle is a forged, quenched-and-tempered alloy or carbon-steel shackle with a narrow D-shaped body suited to straight, in-line loads. Hot-dip galvanized and conforming to ISO 2415, EN 13889 or IS 6132 with a 6:1 safety factor, it handles working loads from 0.5 to over 85 tonnes. Its slim profile makes it the preferred shackle for single-leg, in-line connections where side loading is not expected.",
    applications: [
      "In-line connection of slings and chains",
      "Crane, hoist and winch rigging",
      "Marine mooring and towing",
      "Construction and structural erection",
      "General lifting and pulling",
    ],
    image: "/products/dee-shackle.png",
    specifications: [
      { label: "WLL", value: "0.5 Ton – 85+ Ton" },
      { label: "Safety Factor", value: "6:1" },
      { label: "Material", value: "Forged Alloy / Carbon Steel (Q&T)" },
      { label: "Finish", value: "Hot-Dip Galvanized" },
      { label: "Standards", value: "ISO 2415, EN 13889, IS 6132" },
    ],
  },

  {
    id: "bow-shackle",
    name: "Bow Shackle",
    category: "Rigging Hardware",
    description:
      "Forged high-tensile carbon or alloy steel bow (anchor) shackle, quenched and tempered with hot-dip galvanized finish. Grade 6 or Grade 8. Comply with RR-C-271D, EN 13889, or ISO.",
    overview:
      "The Bow (Anchor) Shackle has a wider, rounded body than a D-shackle, letting it take loads from multiple directions and accommodate several sling legs at once. Forged from high-tensile carbon or alloy steel, quenched, tempered and hot-dip galvanized to a 6:1 safety factor, it suits multi-leg and side-loaded rigging up to 85+ tonnes. The generous bow makes it the right choice whenever loads are applied at an angle.",
    applications: [
      "Multi-leg sling connections",
      "Side-loaded and multi-directional rigging",
      "Marine anchoring and towing",
      "Heavy lifting and erection",
      "Recovery and pulling operations",
    ],
    image: "/products/bow-shackle.png",
    specifications: [
      { label: "WLL", value: "0.5 Ton – 85+ Ton" },
      { label: "Safety Factor", value: "6:1" },
      { label: "Material", value: "High-Tensile Carbon / Alloy Steel" },
      { label: "Finish", value: "Hot-Dip Galvanized" },
      { label: "Standards", value: "RR-C-271D, EN 13889, ISO" },
    ],
  },

  {
    id: "wire-rope-clamp",
    name: "Wire Rope Clamp",
    category: "Rigging Hardware",
    description:
      "Forged U-bolt or fist-grip wire rope clips in carbon steel, stainless steel (SS304/SS316), or malleable iron with hot-dip galvanized finish. Used for securing wire rope ends in rigging applications.",
    overview:
      "Wire Rope Clamps (clips) form a secure eye or termination at the end of a wire rope by clamping the dead end against the live rope. Available as U-bolt or fist-grip styles in carbon steel, SS304, SS316 or galvanized malleable iron, they are the quick, field-installable way to terminate rope on site without splicing or swaging. Correctly fitted with the U-bolt on the dead end, they provide a strong, inspectable termination.",
    applications: [
      "Forming eyes and loops in wire rope",
      "Securing rope ends in rigging",
      "Guy-wire and tower anchoring",
      "Fencing and barrier cabling",
      "Marine and outdoor terminations",
    ],
    image: "/products/rope-clamp.png",
    features: [
      "U-bolt or fist-grip styles available",
      "Hot-dip galvanized for corrosion resistance",
      "Base of clip bears on live rope end – U-bolt on dead end",
      "Available in carbon steel, SS304, and SS316",
    ],
  },

  {
    id: "turn-buckle",
    name: "Turn Buckle",
    category: "Rigging Hardware",
    description:
      "Forged or cast stainless steel / low-carbon steel turnbuckles for tensioning wire rope and cable. Quenched and tempered, zinc plated or hot-galvanized. Available in 304/316 SS and 1030 carbon steel.",
    overview:
      "The Turnbuckle adjusts the tension or length of a wire rope or cable by turning a central body that draws two threaded end fittings together. Forged or cast in 304/316 stainless or 1030 carbon steel and quenched, tempered and galvanized, it is the standard device for tensioning rigging, guy-wires and structural ties. End fittings in eye, jaw and hook combinations let it connect to almost any rigging arrangement.",
    applications: [
      "Tensioning wire rope and cable",
      "Guy-wire and tower stays",
      "Structural bracing and tie rods",
      "Fencing, railings and barriers",
      "Marine rigging and stays",
    ],
    image: "/products/turnbuckle.png",
  },

  // ─── LIFTING ACCESSORIES ──────────────────────────────────────────────────

  {
    id: "magnetic-lifter",
    name: "Magnetic Lifter",
    category: "Lifting Accessories",
    description:
      "Permanent magnetic lifter with high-performance Neodymium (NdFeB) core. Requires no electricity during lifting. High-permeability steel casing and forged steel hook. 3:1 – 3.5:1 safety factor for ferrous materials.",
    overview:
      "The Magnetic Lifter uses a powerful permanent Neodymium (NdFeB) magnet to grip flat or round ferrous loads at the flick of a lever—no electricity is needed during lifting, so there is no risk of a power-failure drop. A high-permeability steel casing and forged hook give a 3:1–3.5:1 safety factor for moving steel plate, sheet and blocks. Being maintenance-free and instantly engaged, it dramatically speeds up repetitive steel handling.",
    applications: [
      "Lifting steel plate, sheet and blocks",
      "Loading machine tools and CNC beds",
      "Die, mould and fabrication handling",
      "Scrap and stockyard movement",
      "Workshop and warehouse steel handling",
    ],
    image: "/products/magnetic-lifter.png",
    features: [
      "No electricity required during operation",
      "NdFeB permanent magnet core",
      "Durable high-permeability steel casing",
      "Forged steel hook",
      "3:1 to 3.5:1 safety factor",
      "Maintenance-free",
    ],
  },

  {
    id: "plate-lifting-clamps",
    name: "Plate Lifting Clamps",
    category: "Lifting Accessories",
    description:
      "JAG-PRO Brand plate lifting clamps manufactured from high-strength heat-treated alloy steel or drop-forged steel. Safety factor ≥5× WLL for reliable plate handling in demanding environments.",
    overview:
      "Plate Lifting Clamps grip steel plate by cam action so it can be lifted vertically or horizontally without drilling holes or slinging. Drop-forged from heat-treated alloy steel with a safety factor of at least 5× the working load limit, they make repetitive plate handling fast and secure. The self-tightening cam holds harder as the load increases, giving a positive grip throughout the lift.",
    applications: [
      "Vertical and horizontal steel-plate lifting",
      "Fabrication and structural steel shops",
      "Shipbuilding and heavy engineering",
      "Loading plate onto machines and trucks",
      "Stockyard and warehouse steel handling",
    ],
    image: "/products/plate-clamp.png",
    features: [
      "High-strength heat-treated alloy steel",
      "Drop-forged for durability",
      "Safety factor minimum 5× WLL",
      "Wear-resistant design",
    ],
  },

  {
    id: "beam-clamps",
    name: "Beam Clamps",
    category: "Lifting Accessories",
    description:
      "JAG-PRO Brand beam clamps for firmly affixing load-bearing elements to I-beams or H-beams in industrial, rigging, and construction applications.",
    overview:
      "Beam Clamps provide a quick, bolt-free anchor point on an I-beam or H-beam for suspending hoists, slings and other load-bearing fixtures. Built from heavy-duty steel, they fix securely to the beam flange and are easily repositioned, making them invaluable for rigging, maintenance and construction work. They turn any suitable structural beam into a temporary lifting point in seconds.",
    applications: [
      "Creating fixed lifting points on beams",
      "Suspending chain and lever hoists",
      "Temporary rigging and maintenance",
      "Structural and erection work",
      "Workshop overhead handling",
    ],
    image: "/products/beam-clamp.png",
  },

  {
    id: "cable-drum-jack",
    name: "Cable Drum Jack",
    category: "Lifting Accessories",
    description:
      "JAG-PRO Brand heavy-duty steel cable drum jacks for lifting and positioning cable drums. Frame in Mild Steel or EN-24 steel, cast steel / SG iron lifting nest, high-tensile tempered main screw.",
    overview:
      "Cable Drum Jacks are heavy-duty stands that raise a cable drum clear of the ground so it can spin freely while cable is paid out. With a Mild Steel or EN-24 frame, a cast-steel or SG-iron lifting nest and a high-tensile tempered screw, they lift drums from 5 to 20+ tonnes for controlled, tangle-free cable laying. Used in pairs with a spindle, they make heavy drums easy and safe to dispense.",
    applications: [
      "Cable laying and stringing operations",
      "Power and telecom installation",
      "Drum storage and dispensing",
      "Electrical contracting sites",
      "Workshop and warehouse cable handling",
    ],
    image: "/products/cable-drum-jack.png",
    specifications: [
      { label: "Capacity", value: "5 Ton – 20+ Ton" },
      { label: "Frame Material", value: "Mild Steel / EN-24 Steel" },
      { label: "Lifting Nest Material", value: "Cast Steel / SG Iron" },
      { label: "Screw Material", value: "High-Tensile Tempered Steel" },
    ],
  },

  {
    id: "crane-scale",
    name: "Crane Scale",
    category: "Lifting Accessories",
    description:
      "Industrial crane scale with heavy-duty steel or aluminum housing, high-strength alloy steel load cell, and stainless steel corrosion-resistant body. IP68 rated option available.",
    overview:
      "The Crane Scale hangs between a crane hook and the load to weigh it in mid-air, combining a high-strength alloy-steel load cell with a rugged steel or aluminium housing and a clear digital display. Corrosion-resistant and available with an IP68-rated body, it brings accurate weighing right to the lifting point—no separate weighbridge needed. Wireless remote display options let the operator read weights from a safe distance.",
    applications: [
      "Weighing loads during lifting",
      "Steel, scrap and recycling yards",
      "Warehouse and logistics weighing",
      "Foundries and fabrication shops",
      "Ports and shipping operations",
    ],
    image: "/products/crane-scale.png",
  },

  // ─── CRANE COMPONENTS ─────────────────────────────────────────────────────

  {
    id: "thruster-brake",
    name: "Thruster Brake",
    category: "Crane Components",
    description:
      "Industrial electro-hydraulic thruster brake for EOT cranes and hoists. Cast iron / steel body with non-asbestos brake shoes. Operates on 3-phase 415V/440V AC, transformer oil (BS 148) hydraulic fluid.",
    overview:
      "The Thruster Brake is an electro-hydraulic brake that stops and holds the motions of EOT cranes and hoists smoothly and reliably. A cast-iron or steel body with non-asbestos shoes runs on 3-phase 415/440 V AC using transformer oil as the hydraulic fluid, delivering shock-free braking for travel and hoist drives. Its self-adjusting action keeps braking consistent as the shoes wear, reducing maintenance downtime.",
    applications: [
      "Braking on EOT and gantry cranes",
      "Hoist and travel-drive control",
      "Conveyors and material-handling drives",
      "Rolling mills and process plants",
      "Heavy industrial machinery",
    ],
    image: "/products/thruster-brake.png",
  },

  {
    id: "dsl-busbars",
    name: "DSL Busbars",
    category: "Crane Components",
    description:
      "High-conductivity copper (99.99% ETP) and aluminium alloy busbars for power distribution in switchgear, panel boards, and crane busways. Available bare, tinned (6 µm), or silver-plated.",
    overview:
      "DSL (Downshop Lead) Busbars distribute electrical power along a crane runway through shrouded conductor bars that a current collector slides against. Made from 99.99% ETP copper or lightweight 6063/6101 aluminium alloy and available bare, tinned or silver-plated, they provide safe, continuous power to moving cranes and machinery. The enclosed design protects both operators and the conductors from accidental contact and contamination.",
    applications: [
      "Power distribution on crane runways",
      "EOT and gantry crane busways",
      "Switchgear and panel-board bus systems",
      "Automated production lines",
      "Material-handling and conveyor systems",
    ],
    image: "/products/dsl-busbar.png",
    features: [
      "Copper: Grade A ETP, 99.99% pure, ~58 MS/m conductivity",
      "Aluminium: 6063/6101 alloy, ~60–62% copper conductivity, 70% lighter",
      "Tinned (6 µm) or silver-plated finish for corrosion resistance",
      "Complies with ASTM B339, ASTM, and BSS standards",
    ],
  },

  {
    id: "current-collector",
    name: "Current Collector",
    category: "Crane Components",
    description:
      "Spring-loaded, self-aligning current collectors for EOT cranes with sintered copper-graphite shoes gliding within shrouded busbars. 125 A – 250 A, 4-pole, 440 V, suitable for DSL systems.",
    overview:
      "The Current Collector is the spring-loaded, self-aligning contact assembly that picks up power from DSL busbars as a crane travels. Sintered copper-graphite shoes glide inside the shrouded bars to deliver 125–250 A at 440 V across four poles with low wear and reliable contact. The spring loading keeps the shoes pressed firmly against the bars even as the crane moves and the track flexes.",
    applications: [
      "Power pick-up on DSL crane busbars",
      "EOT and gantry crane systems",
      "Monorail and transfer-car power",
      "Automated material-handling lines",
      "Industrial machinery power supply",
    ],
    image: "/products/current-collector.png",
    specifications: [
      { label: "Capacity", value: "125 A – 250 A" },
      { label: "Configuration", value: "4-Pole" },
      { label: "Voltage Rating", value: "440 V" },
      { label: "Shoe Material", value: "99.9% Sintered Copper-Graphite" },
    ],
  },

  {
    id: "cable-carrier",
    name: "Cable Carrier",
    category: "Crane Components",
    description:
      "Galvanized or stainless steel cable carrier for guiding and protecting cables and hoses in EOT cranes, gantry cranes, and automated machinery. Modular design, low-noise, minimal maintenance.",
    overview:
      "The Cable Carrier (drag chain) guides and protects moving cables and hoses on cranes and machinery, preventing tangling, abrasion and premature failure. Its modular galvanized or stainless-steel construction handles high mechanical stress and extreme conditions with smooth, low-noise operation. Because links can be added or removed, the carrier can be tailored to almost any travel length and cable bundle.",
    applications: [
      "Protecting cables on EOT and gantry cranes",
      "CNC machines and automated equipment",
      "Robotics and transfer systems",
      "Conveyors and material handling",
      "Harsh and high-stress environments",
    ],
    image: "/products/cable-carrier.png",
    features: [
      "Galvanized or stainless steel construction",
      "Superior strength and heat resistance",
      "Modular design for flexible installation",
      "Smooth low-noise operation",
      "Suitable for high mechanical stress and extreme conditions",
    ],
  },

  {
    id: "push-button-pendant",
    name: "Push Button Pendant Station",
    category: "Crane Components",
    description:
      "Giovanna brand push button pendant stations for single and dual speed crane operations. Functions include emergency stop, rotary selector, key switch, hoist UP/DOWN, cross-travel LEFT/RIGHT, and long-travel FORWARD/REVERSE.",
    overview:
      "The Push Button Pendant Station gives the operator hand-held control of a crane or hoist, with clearly marked buttons for hoist up/down, cross-travel, long-travel and emergency stop. Giovanna-brand stations support single- and dual-speed operation and add rotary selectors and key switches for safe, intuitive control. The rugged enclosure and tactile buttons stand up to constant use on the shop floor.",
    applications: [
      "Controlling EOT and gantry cranes",
      "Electric hoist and winch operation",
      "Single and dual-speed crane motions",
      "Material-handling machinery",
      "Industrial process equipment",
    ],
    image: "/products/pendant.png",
  },

  {
    id: "cable-trolley",
    name: "Cable Trolley",
    category: "Crane Components",
    description:
      "High-quality metal cable trolley for supporting and guiding crane cables. Manufactured using best-in-class materials. Available in various specifications per customer requirements.",
    overview:
      "The Cable Trolley runs along a track or wire to support the festooned power cable that feeds a moving crane or hoist, keeping it clear of the work area and free to extend and retract. Made from high-quality metal and built to customer specifications, it ensures smooth cable travel and long cable life. Properly spaced trolleys prevent the cable from sagging, snagging or being crushed during crane movement.",
    applications: [
      "Supporting festoon cables on cranes",
      "Hoist and trolley power feeds",
      "Gantry and overhead crane systems",
      "Material-handling installations",
      "Custom industrial cable management",
    ],
    image: "/products/cable-trolley.png",
  },

  // ─── PPE / SAFETY ─────────────────────────────────────────────────────────

  {
    id: "safety-belts",
    name: "Safety Belts & Full Body Harness",
    category: "Safety Equipment",
    description:
      "Fall-protection safety belts and full-body harnesses constructed from high-tenacity polyester or nylon webbing with alloy steel / forged steel metal components for maximum strength and shock absorption.",
    overview:
      "Safety Belts and Full-Body Harnesses arrest falls and distribute shock loads across the body using high-tenacity polyester or nylon webbing and forged-steel hardware. They are essential personal protective equipment for anyone working at height in construction, maintenance and industrial settings. A full-body harness spreads arrest forces across the thighs, chest and shoulders to reduce injury in the event of a fall.",
    applications: [
      "Working at height on construction sites",
      "Tower, scaffold and roof work",
      "Maintenance and inspection at elevation",
      "Telecom and power-line work",
      "Confined-space and rescue operations",
    ],
    image: "/products/safety-belt.png",
  },

  {
    id: "safety-shoe",
    name: "Safety Shoes",
    category: "Safety Equipment",
    description:
      "Safety footwear conforming to EN ISO 20345. Protects against bumps, crushing, falling objects, sharp objects, heat, cold, and hot substances. Brands: Karam, Acme (Atom), Khadim, Udyogi.",
    overview:
      "Safety Shoes protect the feet against impact, crushing, punctures, heat and slipping in line with EN ISO 20345. Available from trusted brands such as Karam, Acme (Atom), Khadim and Udyogi, with options for electrical insulation and chemical resistance to suit different worksites. Steel or composite toe caps and slip-resistant soles guard against the most common foot injuries on industrial floors.",
    applications: [
      "Foot protection on construction sites",
      "Factory and warehouse floors",
      "Foundries and hot-work areas",
      "Chemical and processing plants",
      "General industrial PPE",
    ],
    image: "/products/safety-shoe.png",
    features: [
      "Mechanical risk protection (EN ISO 20345)",
      "Slip resistance",
      "Thermal risk protection",
      "Options for electrical insulation and chemical resistance",
      "Available brands: Karam, Acme, Khadim, Udyogi",
    ],
  },

  {
    id: "safety-jackets",
    name: "Safety Jackets",
    category: "Safety Equipment",
    description:
      "High-visibility fluorescent polyester / polyester mesh safety jackets (70–130 GSM) with 2-inch high-intensity reflective tape. Conform to IS-15809:2017 / EN 471.",
    overview:
      "High-visibility Safety Jackets make workers clearly visible in low light and busy areas using fluorescent polyester or mesh fabric with high-intensity reflective tape. Conforming to IS-15809:2017 / EN 471 with 360° visibility and a convenient velcro closure, they are essential wherever vehicles and pedestrians share a worksite. The breathable mesh option keeps workers comfortable through long shifts in warm conditions.",
    applications: [
      "Road and highway construction",
      "Traffic and parking management",
      "Warehouse and yard operations",
      "Night-time and low-light work",
      "Site visitor and supervisor PPE",
    ],
    image: "/products/safety-jacket.png",
    features: [
      "100% fluorescent polyester or mesh",
      "2-inch high-intensity glass bead or micro-prismatic reflective tape",
      "360° high visibility",
      "Velcro closure",
      "Conforms to IS-15809:2017 / EN 471",
    ],
  },

  {
    id: "safety-helmet",
    name: "Safety Helmet",
    category: "Safety Equipment",
    description:
      "Industrial safety helmets offering exceptional comfort and head protection for challenging environments. Designed for easy integration of additional PPE accessories.",
    overview:
      "Safety Helmets shield the head from falling objects and impact while staying comfortable through long shifts thanks to an adjustable harness and ventilation. Designed to integrate easily with visors, ear-muffs and other PPE accessories, they are fundamental head protection across industrial and construction environments. A secure chin-strap option keeps the helmet in place during work at height.",
    applications: [
      "Head protection on construction sites",
      "Factories and manufacturing plants",
      "Mining and tunnelling",
      "Electrical and utility work",
      "Warehouse and logistics operations",
    ],
    image: "/products/safety-helmet.png",
  },

  {
    id: "safety-gloves",
    name: "Safety Gloves",
    category: "Safety Equipment",
    description:
      "Industrial safety gloves for protection against chemical burns, abrasions, cuts, and other job-site injuries. Available in multiple types suited for different applications.",
    overview:
      "Safety Gloves protect the hands against cuts, abrasion, chemical burns and other job-site hazards, with different materials suited to different tasks. From general handling and assembly to chemical and cut-resistant work, choosing the right glove keeps workers safe and productive. Leather, nitrile, cotton and cut-resistant options are available to match the specific hazard.",
    applications: [
      "General material handling",
      "Chemical and oil handling",
      "Cut and abrasion protection",
      "Welding and hot work",
      "Assembly and maintenance tasks",
    ],
    image: "/products/safety-gloves.png",
  },

  // ─── CONSTRUCTION EQUIPMENT ───────────────────────────────────────────────

  {
    id: "scaffolding-prop",
    name: "Adjustable Scaffolding Props / Jacks",
    category: "Construction Equipment",
    description:
      "2-inch adjustable scaffolding props providing reliable support and stability for construction and renovation projects. Durable material ensures long-lasting performance.",
    overview:
      "Adjustable Scaffolding Props (jacks) are telescopic steel supports that hold up formwork, slabs and beams during construction and renovation. The 2-inch adjustable design lets the height be set precisely with a threaded collar, while durable steel ensures stable, long-lasting support under heavy load. Quick to install and reusable across many pours, they are a site staple for temporary vertical support.",
    applications: [
      "Supporting slab and beam formwork",
      "Shoring during construction and repair",
      "Temporary load support in renovation",
      "Propping walls and ceilings",
      "General site support work",
    ],
    image: "/products/scaffolding-prop.png",
  },

  {
    id: "pipe-clamp",
    name: "Pipe Clamps (Fixed & Swivel)",
    category: "Construction Equipment",
    description:
      "JAG-PRO Brand fixed right-angle couplers and swivel clamps for scaffolding systems. Heavy-duty steel for load-bearing connections at any angle including staircases, ramps, and bracings.",
    overview:
      "Pipe Clamps connect scaffolding tubes into a rigid structure—fixed clamps lock tubes at a right angle while swivel clamps allow any angle for braces, staircases and ramps. Made from heavy-duty steel, they form the load-bearing joints that hold a scaffold together safely. Choosing the correct fixed or swivel clamp for each junction is key to building a stable, code-compliant scaffold.",
    applications: [
      "Connecting scaffolding tubes and frames",
      "Right-angle and angled tube joints",
      "Bracing, ramps and staircases",
      "Formwork and shoring structures",
      "Temporary structures and supports",
    ],
    image: "/products/pipe-clamp.png",
    features: [
      "Fixed clamp – right-angle load-bearing coupler",
      "Swivel clamp – accommodates varying angles",
      "Heavy-duty steel construction",
      "Suitable for complex scaffolding structures",
    ],
  },

  // ─── LUBRICANTS & COMPOUNDS ───────────────────────────────────────────────

  {
    id: "bitumen-compound",
    name: "Bitumen Compound",
    category: "Lubricants",
    description:
      "Natural bitumen blended with mineral oils for wire rope lubrication and protection against corrosion and wear. Viscous, tacky, and stringy – resists water wash-off.",
    overview:
      "Bitumen Compound is a viscous, tacky lubricant of natural bitumen blended with mineral oils that coats and penetrates wire rope to cut friction and lock out moisture. Its stringy, water-resistant film prevents rust and internal wear, extending rope life economically. Applied during manufacture or in service, it keeps the rope's strands moving freely and shields the core from corrosion.",
    applications: [
      "Lubricating and protecting wire rope",
      "Crane and hoist rope maintenance",
      "Mining and drilling rope care",
      "Marine and offshore rope protection",
      "Long-term rope storage",
    ],
    image: "/products/bitumen-compound.png",
    features: [
      "Friction reduction",
      "Rust prevention",
      "Water resistance",
      "Enhanced rope strength and longevity",
      "Long lasting and economical",
    ],
  },

  // ─── POWER TOOLS ──────────────────────────────────────────────────────────

  {
    id: "cutter-grinder-machine",
    name: "Cutter Grinder Machine",
    category: "Power Tools",
    description:
      "Universal tool and cutter grinder for precision sharpening and tool fabrication. High-grade cast iron body with alloy steel components for stability and longevity.",
    overview:
      "The Universal Cutter Grinder sharpens and shapes cutting tools—milling cutters, drills, reamers and more—to precise angles. A high-grade cast-iron body with alloy-steel components gives the rigidity and stability needed for accurate, repeatable tool grinding. Its versatility makes it a central machine in any well-equipped tool room.",
    applications: [
      "Sharpening milling cutters and drills",
      "Tool-room and die-shop work",
      "Precision tool fabrication",
      "Maintenance of cutting tools",
      "Engineering and manufacturing units",
    ],
    image: "/products/cutter-grinder.png",
  },

  {
    id: "drill-machine",
    name: "Drill Machine",
    category: "Power Tools",
    description:
      "Electrically driven drill for making round holes or driving fasteners in woodworking, metalworking, construction, and utility projects. Available as corded or cordless battery-powered with optional hammer function.",
    overview:
      "The Drill Machine bores round holes and drives fasteners across wood, metal and masonry, available as corded or cordless battery models with an optional hammer action for concrete. It is an everyday essential for fabrication, construction, maintenance and utility work. Variable speed and a keyed or keyless chuck let one tool handle a wide range of bits and tasks.",
    applications: [
      "Drilling in wood, metal and masonry",
      "Fastening and assembly work",
      "Construction and renovation",
      "Fabrication and workshop tasks",
      "Maintenance and repair jobs",
    ],
    image: "/products/drill-machine.png",
  },

  {
    id: "marble-cutter-machine",
    name: "Marble / Stone Cutter Machine",
    category: "Power Tools",
    description:
      "Tile and marble cutting machine for constructing strong and visually beautiful structures. Wide range of specifications for cutting marble, stone, and tiles.",
    overview:
      "The Marble / Stone Cutter Machine makes clean, accurate cuts in marble, granite, stone and tile for flooring and cladding work. A range of specifications covers everything from fine tile trimming to heavier stone cutting, helping create strong and attractive finishes. Paired with the right blade, it delivers chip-free edges that speed up installation and reduce waste.",
    applications: [
      "Cutting marble, granite and stone",
      "Tile trimming and shaping",
      "Flooring and cladding installation",
      "Construction and interior finishing",
      "Stone fabrication workshops",
    ],
    image: "/products/marble-cutter.png",
  },

  {
    id: "blower-machine",
    name: "Blower Machine",
    category: "Power Tools",
    description:
      "Handheld electric blower for cleaning dust and debris in workshops. High-impact ABS plastic housing with copper, steel, and aluminium internal components.",
    overview:
      "The Blower Machine is a handheld electric blower that clears dust, chips and debris from workbenches, machines and floors. A high-impact ABS housing with copper, steel and aluminium internals delivers a strong, reliable air stream for everyday workshop cleaning. Lightweight and easy to handle, it makes quick work of housekeeping in hard-to-reach corners.",
    applications: [
      "Cleaning dust and debris in workshops",
      "Clearing machines and workbenches",
      "Drying surfaces after cleaning",
      "Garden and outdoor clean-up",
      "General industrial housekeeping",
    ],
    image: "/products/blower.png",
  },

  {
    id: "chain-saw-machine",
    name: "Chain Saw Machine",
    category: "Power Tools",
    description:
      "Industrial chain saw for firewood cutting (boiler/brick houses), paper roll cutting, and sandstone cutting. Fast, efficient, and economical for demanding cutting tasks.",
    overview:
      "The industrial Chain Saw delivers fast, economical cutting of firewood, paper rolls, sandstone and graphite for boiler houses, brick manufacturers and paper mills. Built for demanding, repetitive cutting, it keeps high-volume operations moving efficiently. Its rugged build stands up to the dust and continuous duty of industrial cutting lines.",
    applications: [
      "Cutting firewood for boilers and brick kilns",
      "Paper-roll cutting in mills",
      "Sandstone and graphite cutting",
      "Timber and wood processing",
      "Heavy-duty industrial cutting",
    ],
    image: "/products/chainsaw.png",
    features: [
      "Fast cutting of firewood for boilers and brick manufacturers",
      "Reliable paper roll cutting",
      "Suitable for sandstone and graphite cutting",
    ],
  },

  {
    id: "welding-machine",
    name: "Welding Machine",
    category: "Power Tools",
    description:
      "Industrial welding machines for manufacturing, construction, and repair. Enables creation of strong, durable metal joints for automotive, aerospace, and infrastructure applications.",
    overview:
      "Welding Machines join metal by fusing parts into strong, durable joints for manufacturing, construction and repair. Suited to automotive, aerospace and infrastructure work, they produce the reliable bonds that hold fabricated and structural assemblies together. A range of capacities is available to match light fabrication through to heavy structural welding.",
    applications: [
      "Fabrication and structural welding",
      "Automotive and machinery repair",
      "Construction and infrastructure work",
      "Pipe and plate joining",
      "Maintenance and engineering shops",
    ],
    image: "/products/welding-machine.png",
  },

  {
    id: "welding-electrodes",
    name: "Welding Electrodes",
    category: "Power Tools",
    description:
      "Flux-coated welding rods (electrodes) that conduct current to form a welding arc. The flux coating protects the weld from atmospheric contamination, ensuring strong, durable bonds.",
    overview:
      "Welding Electrodes are flux-coated rods that carry the current to strike a welding arc, while their coating shields the molten weld pool from atmospheric contamination. The result is a clean, strong and durable bond suited to a wide range of mild-steel and structural welding. Different coatings and grades are available to match the base metal, position and finish required.",
    applications: [
      "Arc welding of mild and structural steel",
      "Fabrication and erection work",
      "Pipe and plate welding",
      "Repair and maintenance welding",
      "General engineering jobs",
    ],
    image: "/products/welding-electrodes.png",
  },
]
