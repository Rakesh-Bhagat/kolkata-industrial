export interface Product {
  id: string
  name: string
  category: string
  description: string
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
    image: "/products/chain-link.png",
  },

  {
    id: "eye-hook",
    name: "Eye Hook",
    category: "Rigging Hardware",
    description:
      "Eye hoist lifting hooks for attaching wire rope slings to crane hooks. Complete with safety latch. Electric galvanized, hot-dip galvanized, or powder-coated finish.",
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
    image: "/products/turnbuckle.png",
  },

  // ─── LIFTING ACCESSORIES ──────────────────────────────────────────────────

  {
    id: "magnetic-lifter",
    name: "Magnetic Lifter",
    category: "Lifting Accessories",
    description:
      "Permanent magnetic lifter with high-performance Neodymium (NdFeB) core. Requires no electricity during lifting. High-permeability steel casing and forged steel hook. 3:1 – 3.5:1 safety factor for ferrous materials.",
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
    image: "/products/beam-clamp.png",
  },

  {
    id: "cable-drum-jack",
    name: "Cable Drum Jack",
    category: "Lifting Accessories",
    description:
      "JAG-PRO Brand heavy-duty steel cable drum jacks for lifting and positioning cable drums. Frame in Mild Steel or EN-24 steel, cast steel / SG iron lifting nest, high-tensile tempered main screw.",
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
    image: "/products/crane-scale.png",
  },

  // ─── CRANE COMPONENTS ─────────────────────────────────────────────────────

  {
    id: "thruster-brake",
    name: "Thruster Brake",
    category: "Crane Components",
    description:
      "Industrial electro-hydraulic thruster brake for EOT cranes and hoists. Cast iron / steel body with non-asbestos brake shoes. Operates on 3-phase 415V/440V AC, transformer oil (BS 148) hydraulic fluid.",
    image: "/products/thruster-brake.png",
  },

  {
    id: "dsl-busbars",
    name: "DSL Busbars",
    category: "Crane Components",
    description:
      "High-conductivity copper (99.99% ETP) and aluminium alloy busbars for power distribution in switchgear, panel boards, and crane busways. Available bare, tinned (6 µm), or silver-plated.",
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
    image: "/products/pendant.png",
  },

  {
    id: "cable-trolley",
    name: "Cable Trolley",
    category: "Crane Components",
    description:
      "High-quality metal cable trolley for supporting and guiding crane cables. Manufactured using best-in-class materials. Available in various specifications per customer requirements.",
    image: "/products/cable-trolley.png",
  },

  // ─── PPE / SAFETY ─────────────────────────────────────────────────────────

  {
    id: "safety-belts",
    name: "Safety Belts & Full Body Harness",
    category: "Safety Equipment",
    description:
      "Fall-protection safety belts and full-body harnesses constructed from high-tenacity polyester or nylon webbing with alloy steel / forged steel metal components for maximum strength and shock absorption.",
    image: "/products/safety-belt.png",
  },

  {
    id: "safety-shoe",
    name: "Safety Shoes",
    category: "Safety Equipment",
    description:
      "Safety footwear conforming to EN ISO 20345. Protects against bumps, crushing, falling objects, sharp objects, heat, cold, and hot substances. Brands: Karam, Acme (Atom), Khadim, Udyogi.",
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
    image: "/products/safety-helmet.png",
  },

  {
    id: "safety-gloves",
    name: "Safety Gloves",
    category: "Safety Equipment",
    description:
      "Industrial safety gloves for protection against chemical burns, abrasions, cuts, and other job-site injuries. Available in multiple types suited for different applications.",
    image: "/products/safety-gloves.png",
  },

  // ─── CONSTRUCTION EQUIPMENT ───────────────────────────────────────────────

  {
    id: "scaffolding-prop",
    name: "Adjustable Scaffolding Props / Jacks",
    category: "Construction Equipment",
    description:
      "2-inch adjustable scaffolding props providing reliable support and stability for construction and renovation projects. Durable material ensures long-lasting performance.",
    image: "/products/scaffolding-prop.png",
  },

  {
    id: "pipe-clamp",
    name: "Pipe Clamps (Fixed & Swivel)",
    category: "Construction Equipment",
    description:
      "JAG-PRO Brand fixed right-angle couplers and swivel clamps for scaffolding systems. Heavy-duty steel for load-bearing connections at any angle including staircases, ramps, and bracings.",
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
    image: "/products/cutter-grinder.png",
  },

  {
    id: "drill-machine",
    name: "Drill Machine",
    category: "Power Tools",
    description:
      "Electrically driven drill for making round holes or driving fasteners in woodworking, metalworking, construction, and utility projects. Available as corded or cordless battery-powered with optional hammer function.",
    image: "/products/drill-machine.png",
  },

  {
    id: "marble-cutter-machine",
    name: "Marble / Stone Cutter Machine",
    category: "Power Tools",
    description:
      "Tile and marble cutting machine for constructing strong and visually beautiful structures. Wide range of specifications for cutting marble, stone, and tiles.",
    image: "/products/marble-cutter.png",
  },

  {
    id: "blower-machine",
    name: "Blower Machine",
    category: "Power Tools",
    description:
      "Handheld electric blower for cleaning dust and debris in workshops. High-impact ABS plastic housing with copper, steel, and aluminium internal components.",
    image: "/products/blower.png",
  },

  {
    id: "chain-saw-machine",
    name: "Chain Saw Machine",
    category: "Power Tools",
    description:
      "Industrial chain saw for firewood cutting (boiler/brick houses), paper roll cutting, and sandstone cutting. Fast, efficient, and economical for demanding cutting tasks.",
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
    image: "/products/welding-machine.png",
  },

  {
    id: "welding-electrodes",
    name: "Welding Electrodes",
    category: "Power Tools",
    description:
      "Flux-coated welding rods (electrodes) that conduct current to form a welding arc. The flux coating protects the weld from atmospheric contamination, ensuring strong, durable bonds.",
    image: "/products/welding-electrodes.png",
  },
]