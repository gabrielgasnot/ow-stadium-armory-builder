const basicItems = {
  normal: [
    {
      id: "00W001",
      position: 1,
      name: "Compensator",
      description: "+5% Weapon Power",
      price: 1000,
      category: "Weapon",
    },
    {
      id: "00W002",
      position: 4,
      name: "Ammo Reserves",
      description: "+20% Max Ammo",
      price: 1500,
      category: "Weapon",
    },
    {
      id: "00W003",
      position: 3,
      name: "Weapon Grease",
      description: "+5% Attack Speed",
      price: 1000,
      category: "Weapon",
    },
    {
      id: "00W004",
      position: 2,
      name: "Plasma Converter",
      description: "+10% Weapon Lifesteal",
      price: 1000,
      category: "Weapon",
    },
    {
      id: "00W005",
      position: 5,
      name: "Frenzy Amplifier",
      description:
        "Eliminations grant 10% Attack Speed and 15% Move Speed for 3s",
      price: 1500,
      category: "Weapon",
    },
    {
      id: "00A001",
      position: 2,
      name: "Power Playbook",
      description: "+10% Ability Power",
      price: 1000,
      category: "Ability",
    },
    {
      id: "00A002",
      position: 3,
      name: "Shady Spectacles",
      description: "+10% Ability Lifesteal",
      price: 1000,
      category: "Ability",
    },
    {
      id: "00A003",
      position: 1,
      name: "Charged Plating",
      description:
        "After you spend your Ultimate Charge, gain 25 Armor and 10% Ability Power for the rest of the round",
      price: 1000,
      category: "Ability",
    },
    {
      id: "00A004",
      position: 4,
      name: "Winning Attitude",
      description: "+25 Health, when you die, gain 15% Ultimate Charge",
      price: 1500,
      category: "Ability",
    },
    {
      id: "00S001",
      position: 2,
      name: "Electrolytes",
      description:
        "At the start of the round, gain 100 unrecoverable Overhealth",
      price: 1000,
      category: "Survival",
    },
    {
      id: "00S002",
      position: 3,
      name: "Field Rations",
      description: "While on the Objective, restore 8 Life every 1s",
      price: 1000,
      category: "Survival",
    },
    {
      id: "00S003",
      position: 1,
      name: "Adrenaline Shot",
      description:
        "+10 Health, Health Packs grant 20% Move Speed for 5s and 50 Overhealth",
      price: 1000,
      category: "Survival",
    },
    {
      id: "00S004",
      position: 4,
      name: "Running Shoes",
      description:
        "+10 Health, at the start of the round and when you first respawn, gain 20% Move Speed for 10s while out of combat",
      price: 1000,
      category: "Survival",
    },
    {
      id: "00S005",
      position: 7,
      name: "Heartbeat Sensor",
      description: "+5% Move Speed, Enemies below 30% Life are revealed to you",
      price: 1500,
      category: "Survival",
    },
    {
      id: "00S006",
      position: 8,
      name: "Siphon Gloves",
      description: "+25 Health, [Quick Melee] damage heals for 25 Life",
      price: 1500,
      category: "Survival",
    },
    {
      id: "00S007",
      position: 6,
      name: "First Aid Kit",
      description:
        "+25 Shields, Reduce the time before your Life begins regenerating by 33%",
      price: 1500,
      category: "Survival",
    },
    {
      id: "00S008",
      position: 5,
      name: "Armored Vest",
      description: "+25 Armor",
      price: 1500,
      category: "Survival",
    },
  ],
  rare: [
    {
      id: "00W006",
      position: 4,
      name: "Stockpile",
      description: "+5% Attack Speed, +25% Max Ammo",
      price: 4000,
      category: "Weapon",
    },
    {
      id: "00W007",
      position: 1,
      name: "Aftermarket Firing Pin",
      description: "+10% Attack Speed, +5% Move Speed",
      price: 3750,
      category: "Weapon",
    },
    {
      id: "00W008",
      position: 2,
      name: "Advanced Nanobiotics",
      description:
        "+5% Weapon Power, after healing an ally, gain 10% Attack Speed for 3s",
      price: 4000,
      category: "Weapon",
    },
    {
      id: "00W009",
      position: 3,
      name: "Shieldbuster",
      description:
        "+5% Weapon Power, after dealing damage to Shields or Armor grants 15% Attack Speed for 1s",
      price: 4000,
      category: "Weapon",
    },
    {
      id: "00W010",
      position: 5,
      name: "Technoleech",
      description: "+5% Weapon Power, +10% Weapon Lifesteal",
      price: 4500,
      category: "Weapon",
    },
    {
      id: "00W011",
      position: 6,
      name: "Icy Coolant",
      description: "+10% Weapon Power, +5% Cooldown Reduction",
      price: 5000,
      category: "Weapon",
    },
    {
      id: "00W012",
      position: 7,
      name: "Talon Modification Module",
      description: "+15% Weapon Power",
      price: 5500,
      category: "Weapon",
    },
    {
      id: "00A005",
      position: 5,
      name: "Wrist Wraps",
      description: "+5% Ability Power, +10% Attack Speed",
      price: 4000,
      category: "Ability",
    },
    {
      id: "00A006",
      position: 1,
      name: "Custom Stock",
      description: "+5% Weapon Power, +10% Ability Power",
      price: 3750,
      category: "Ability",
    },
    {
      id: "00A007",
      position: 4,
      name: "Junker Whatchamajig",
      description: "+25% Starting Ultimate Charge",
      price: 4000,
      category: "Ability",
    },
    {
      id: "00A008",
      position: 3,
      name: "Energized Bracers",
      description: "+10% Ability Power, +10% Ability Lifesteal",
      price: 4000,
      category: "Ability",
    },
    {
      id: "00A009",
      position: 2,
      name: "Biolight Overflow",
      description:
        "+25 Health, +5% Ability Power, when you spend your Ultimate Charge, grant nearby allies 50 Overhealth for 3s",
      price: 4000,
      category: "Ability",
    },
    {
      id: "00A010",
      position: 6,
      name: "Multi-tool",
      description: "+5% Ability Power, +10% Cooldown Reduction",
      price: 5000,
      category: "Ability",
    },
    {
      id: "00A011",
      position: 7,
      name: "Nano Cola",
      description: "+20% Ability Power",
      price: 5500,
      category: "Ability",
    },
    {
      id: "00S009",
      position: 1,
      name: "Reinforced Titanium",
      description:
        "+25 Shields, while you have Shields, take 15% reduced Ability Damage",
      price: 3750,
      category: "Survival",
    },
    {
      id: "00S010",
      position: 7,
      name: "Iron Eyes",
      description:
        "+25 Shields, you take 20% reduced damage from Critical Hits",
      price: 4500,
      category: "Survival",
    },
    {
      id: "00S011",
      position: 2,
      name: "Cushioned Padding",
      description:
        "+25 Shields, -40% Incoming Negative Effect Duration, when affected by Stun, Sleep, or Hinder, regenerate 10% of your Max Life over 3s",
      price: 4000,
      category: "Survival",
    },
    {
      id: "00S012",
      position: 3,
      name: "Ironclad Exhaust Ports",
      description:
        "+5% Cooldown Reduction, when you use an ability, gain 25 Overhealth for 3s",
      price: 4000,
      category: "Survival",
    },
    {
      id: "00S013",
      position: 6,
      name: "Crusader Hydraulics",
      description:
        "+25 Armor, while you have Armor, take 10% less Weapon Damage",
      price: 4500,
      category: "Survival",
    },
    {
      id: "00S014",
      position: 4,
      name: "Vishkar Converter",
      description: "+25 Shields, convert 100 Health into Shields",
      price: 4000,
      category: "Survival",
    },
    {
      id: "00S015",
      position: 5,
      name: "Vital-E-Tee",
      description: "+10 Armor, Convert 100 Health into Armor",
      price: 4000,
      category: "Survival",
    },
    {
      id: "00S016",
      position: 8,
      name: "MEKA Z-Series",
      description: "+8% Health, Armor, and Shields",
      price: 5000,
      category: "Survival",
    },
  ],
  epic: [
    {
      id: "00W013",
      position: 1,
      name: "Codebreaker",
      description: "+15% Weapon Power, Ignore 50% of Armor's damage reduction",
      price: 9000,
      category: "Weapon",
    },
    {
      id: "00W014",
      position: 2,
      name: "Salvaged Slugs",
      description:
        "+10% Attack Speed, +30% Damage to Barriers, Dealing Weapon Damage to Barriers has a 50% chance to restore 1 ammo",
      price: 9500,
      category: "Weapon",
    },
    {
      id: "00W015",
      position: 3,
      name: "Volskaya Ordnance",
      description:
        "+10% Attack Speed, deal 5% increased Weapon Damage for every 100 Max Life the target has more than you, up to 20%",
      price: 9500,
      category: "Weapon",
    },
    {
      id: "00W016",
      position: 4,
      name: "Commander's Clip",
      description:
        "+10% Attack Speed, +40% Max Ammo, when you use an ability, restore 10% of your Max Ammo",
      price: 10000,
      category: "Weapon",
    },
    {
      id: "00W017",
      position: 5,
      name: "Weapon Jammer",
      description:
        "+25 Armor, +10% Weapon Power, Dealing Weapon Damage negates 10% of target's bonus Attack Speed and increases your Attack Speed by 10% for 2s",
      price: 10000,
      category: "Weapon",
    },
    {
      id: "00W018",
      position: 6,
      name: "Amari's Antidote",
      description:
        "+25 Health, +15% Weapon Power, while healing an ally below 50% Life with your Weapon, deal 15% increased Weapon Healing",
      price: 11000,
      category: "Weapon",
    },
    {
      id: "00W019",
      position: 7,
      name: "Booster Jets",
      description:
        "+20% Attack Speed, when you use an ability, gain 20% Move Speed for 2s",
      price: 11000,
      category: "Weapon",
    },
    {
      id: "00W020",
      position: 8,
      name: "El-Sa'ka Suppressor",
      description:
        "+10% Weapon Power, Critical Hits apply 30% Healing Reduction for 2s",
      price: 11000,
      category: "Weapon",
    },
    {
      id: "00W021",
      position: 9,
      name: "Hardlight Accelerator",
      description:
        "+10% Weapon Power, +10% Cooldown Reduction, when you use an ability, gain 5% Weapon Power for 3s, stacking up to 3 times",
      price: 11000,
      category: "Weapon",
    },
    {
      id: "00W022",
      position: 11,
      name: "Eye of the Spider",
      description:
        "+25% Weapon Power, deal 10% increased damage to enemies under 30% Life",
      price: 135000,
      category: "Weapon",
    },
    {
      id: "00W023",
      position: 10,
      name: "The Closer",
      description:
        "+20% Weapon Power, +10% Critical Damage, Critical Hits reveal the target for 3s",
      price: 13000,
      category: "Weapon",
    },
    {
      id: "00A012",
      position: 1,
      name: "Three-Tap Tommygun",
      description:
        "+10% Ability Power, +10% Attack Speed, after using an ability, your next 3 instances of Weapon Damage deal additional damage equal to 3% of the target's Life",
      price: 9500,
      category: "Ability",
    },
    {
      id: "00A013",
      position: 2,
      name: "Biotech Maximizer",
      description:
        "+25 Health. +10% Ability Power, when you use an ability that heals, reduce its cooldown by 5% for each unique ally it heals",
      price: 10000,
      category: "Ability",
    },
    {
      id: "00A014",
      position: 3,
      name: "Catalytic Crystal",
      description:
        "+15% Ability Power, ability Damage and Healing grants 20% more Ultimate Charge",
      price: 10000,
      category: "Ability",
    },
    {
      id: "00A015",
      position: 5,
      name: "Superflexor",
      description:
        "+25 Health, +10% Weapon Power, when you deal Weapon Damage or Healing, gain 5% Ability Power for 3s, stacking up to 5 times",
      price: 10000,
      category: "Ability",
    },
    {
      id: "00A016",
      position: 4,
      name: "Lumérico Fusion Drive",
      description:
        "+50 Armor, +15% Ability Power, when you use an ability, restore 50 Armor or Shields over 2s",
      price: 10000,
      category: "Ability",
    },
    {
      id: "00A017",
      position: 6,
      name: "Cybervenom",
      description:
        "+10% Ability Power, +5% Cooldown Reduction, Dealing Ability Damage applies 30% Healing Reduction for 2s",
      price: 10500,
      category: "Ability",
    },
    {
      id: "00A018",
      position: 7,
      name: "Iridescent Iris",
      description:
        "+20% Ability Power, +10% Cooldown Reduction, when you spend your Ultimate Charge, gain 100 Overhealth for 3s",
      price: 11000,
      category: "Ability",
    },
    {
      id: "00A019",
      position: 8,
      name: "Liquid Nitrogen",
      description:
        "+25 Health, +10% Ability Power, Dealing Ability Damage slows the target's Move Speed by 20% for 3s",
      price: 11000,
      category: "Ability",
    },
    {
      id: "00A020",
      position: 9,
      name: "Mark of the Kitsune",
      description:
        "+10% Ability Power, after casting an ability, your next instance of Weapon Damage or Healing deals 25 bonus damage or healing",
      price: 11000,
      category: "Ability",
    },
    {
      id: "00A021",
      position: 10,
      name: "Champion's Kit",
      description: "+40% Ability Power",
      price: 13500,
      category: "Ability",
    },
    {
      id: "00S017",
      position: 1,
      name: "Geneticist's Vial",
      description:
        "+25 HP, the first time you die each round, revive at 200 Life after 3s",
      price: 9000,
      category: "Survival",
    },
    {
      id: "00S018",
      position: 2,
      name: "Bloodbound",
      description:
        "+50 Health, the last enemy to deal a final blow to you is Revealed when nearby, deal 10% more damage to them and take 10% reduced damage from them",
      price: 9500,
      category: "Survival",
    },
    {
      id: "00S019",
      position: 3,
      name: "Divine Intervention",
      description:
        "+50 Shield, when you take more than 100 damage at once, restore 15% of damage taken and start regenerating your Shields",
      price: 9500,
      category: "Survival",
    },
    {
      id: "00S020",
      position: 4,
      name: "Gloomgauntlet",
      description:
        "+50 Armor, +15% Melee Damage, [Melee] damage grants 10% Move Speed and restores 5% of max Life over 2s",
      price: 9500,
      category: "Survival",
    },
    {
      id: "00S021",
      position: 6,
      name: "Phantasmic Flux",
      description:
        "+10% Weapon Power, +10% Ability Power, +15% Weapon Lifesteal, +15% Ability Lifesteal, while at full Life, Lifesteal grants up to 100 Overhealth",
      price: 10000,
      category: "Survival",
    },
    {
      id: "00S022",
      position: 7,
      name: "Rüstung von Wilhelm",
      description:
        "+15% Health, Shields, and Armor, while below 30% Life, gain 10% Damage Reduction",
      price: 10000,
      category: "Survival",
    },
    {
      id: "00S023",
      position: 8,
      name: "Vanadium Injection",
      description:
        "+50 Shield, while at 100% Ultimate Charge, gain 50 Health, 10% Weapon Power, 10% Ability Power, 10% Attack Speed, 10% Cooldown Reduction, and 10% Move Speed",
      price: 10000,
      category: "Survival",
    },
    {
      id: "00S024",
      position: 5,
      name: "Martian Mender",
      description:
        "+25 Health, +10% Cooldown Reduction, Restore 3% of your Life every 1s",
      price: 10000,
      category: "Survival",
    },
    {
      id: "00S025",
      position: 9,
      name: "Nebula Conduit",
      description:
        "+50 Health, +10% Weapon Power, prevent 15% of incoming damage and instead take that prevented damage over 3s",
      price: 11000,
      category: "Survival",
    },
    {
      id: "00S026",
      position: 10,
      name: "Ogundimu Reduction Field",
      description:
        "+50 Armor, when you take damage, gain 0.5% Damage Reduction for 1s, stacking up to 20 times",
      price: 11000,
      category: "Survival",
    },
  ],
};

// Identifiers:
// - heroes from: https://overwatch.judgehype.com/article/personnages/
const heroes = [
  {
    id: 5,
    name: "Reinhardt",
    role: "Tank",
    hp: 550,
    powers: [
      {
        position: 12,
        id: "5P009",
        name: "Smashing!",
        description: "When you deal damage with [Rocket Hammer], gain 5% Move Speed and 4% Weapon Lifesteal for 3s, stacking up to 5 times."
      },
      {
        position: 11,
        id: "5P012",
        name: "Feeling The Burn",
        description: "Every 3rd [Rocket Hammer] swing applies Burn, dealing 30% [Rocket Hammer] damage over 2s."
      },
      {
        position: 4,
        id: "5P010",
        name: "Wilhelmwagen",
        description: "While [Barrier Field] is deployed, you heal for 15% of the damage it mitigates and gain 30% Move Speed."
      },
      {
        position: 3,
        id: "5P007",
        name: "To Me, My Friends!",
        description: "While [Barrier Field] is deployed, allies within 5m are healed equal to 3% of your max Life every 1s."
      },
      {
        position: 1,
        id: "5P001",
        name: "Amplification Barrier",
        description: "Friendly projectiles that pass through your [Barrier Field] deal 15% more damage."
      },
      {
        position: 2,
        id: "5P004",
        name: "Barrier Reconstruction",
        description: "When you deal damage with [Rocket Hammer] or [Fire Strike], restore health to [Barrier Field] equal to 10% of its max Health."
      },
      {
        position: 6,
        id: "5P002",
        name: "Vanguard",
        description: "[Charge] grants nearby allies Overhealth equal to 10% of your max Life and 20% Move Speed for 3s."
      },
      {
        position: 5,
        id: "5P005",
        name: "Shield Stampede",
        description: "+50% [Charge] Knockback Power During [Charge], automatically deploy [Barrier Field]."
      },
      {
        position: 7,
        id: "5P008",
        name: "Vroom Boom Boom",
        description: "During [Charge], colliding with a wall triggers an explosion that deals 30% of [Charge]'s pin damage."
      },
      {
        position: 9,
        id: "5P006",
        name: "Impact Burst",
        description: "[Fire Strike] triggers an explosion the first time it hits an enemy, dealing 20% of its damage in a 3m radius."
      },
      {
        position: 10,
        id: "5P003",
        name: "Magma Strike",
        description: "If [Fire Strike] is cast twice within 2s, the second strike leaves a trail of lava that Burns enemies for 50% of [Fire Strike] damage."
      },
      {
        position: 8,
        id: "5P011",
        name: "Blazing Blitz",
        description: "After using [Earthshatter], every [Rocket Hammer] swing launches a [Fire Strike] for 4s."
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "5W001",
          name: "Ironclad Cleats",
          description: "+25 Armor, +5% Weapon Power, +40% Knockback Resist",
          price: 3750,
          category: "Weapon"
        },
        {
          position: 3,
          id: "5S003",
          name: "Rocket Boots",
          description: "+25 Health, holding crouch increases the height of your next jump by up to 200%",
          price: 4000,
          category: "Survival"
        },
        {
          id: "5A001",
          name: "Boost Recycler",
          description: "+10% Ability Power, if [Charge] is interrupted by the enemy, refund 50% of [Charge]'s cooldown",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "5S001",
          name: "Crusader's Cure",
          description: "+25 Health, using [Charge] cleanses all negative effects",
          price: 3750,
          category: "Survival"
        },
        {
          position: 2,
          id: "5S002",
          name: "Overclocked Barrier",
          description: "+25 Health, +20% Barrier Field Health, +20% [Barrier Field] Size",
          price: 4000,
          category: "Survival"
        },
        {
          position: 1,
          id: "5A002",
          name: "Chimera's Maw",
          description: "+10% Ability Power, +50% Fire Strike Radius",
          price: 4000,
          category: "Ability"
        }
      ],
      epic: [
        {
          position: 1,
          id: "5W002",
          name: "Dampener Grip",
          description: "+10% Ability Power, +10% Attack Speed, when you deal damage with [Rocket Hammer], reduce the cooldown of your abilities by 1s",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "5W003",
          name: "Plan Z",
          description: "+10% Weapon Power, Gain 3% Attack Speed for every 100 missing Life, up to 30%",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "5A004",
          name: "Gryphon Glider",
          description: "+25 Health, +10% Ability Lifesteal, you can now fly during [Charge]",
          price: 10000,
          category: "Ability"
        },
        {
          position: 3,
          id: "5S003",
          name: "Infusion Generator",
          description: "+25 Health, Increase [Barrier Field] Health by 100% of your max Life",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "5S004",
          name: "Phoenix Protocol",
          description: "+25 Health, [Barrier Field] regenerates 50% faster and begins regenerating 50% sooner after being destroyed",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "5A005",
          name: "Rocket Strike",
          description: "+20% Ability Power, +50% Fire Strike Projectile Speed",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 2,
    name: "Reaper",
    role: "Damage",
    hp: 300,
    powers: [
      {
        position: 3,
        id: "2P001",
        name: "Revolving Ruin",
        description: "Close-range (7m) [Hellfire Shotgun] hits grant 5% Attack Speed for 1s, stacking up to 8 times"
      },
      {
        position: 5,
        id: "2P002",
        name: "Shrouded Shrapnel",
        description: "Using [Wraith Form] increases the number of pellets per shot in your next magazine by 25% and its spread by 50%"
      },
      {
        position: 8,
        id: "2P003",
        name: "Death Step",
        description: "After using [Shadow Step], cast [Death Blossom] for 1.5s with 50% reduced damage"
      },
      {
        position: 10,
        id: "2P004",
        name: "Strangle Step",
        description: "After using [Shadow Step], double your Lifesteal for 3s"
      },
      {
        position: 6,
        id: "2P005",
        name: "Spirited To Slay",
        description: "Eliminations reset your cooldowns"
      },
      {
        position: 1,
        id: "2P006",
        name: "Backstabber",
        description: "After using an ability, your next shot deals 50% additional damage over 3s to enemies struck from behind"
      },
      {
        position: 12,
        id: "2P007",
        name: "Wraith Renewal",
        description: "While in [Wraith Form], restore 10% of your Life every 1s. Double this while below 50% Life."
      },
      {
        position: 11,
        id: "2P008",
        name: "Ghosted",
        description: "While in [Wraith Form], passing through enemies slows their Move Speed and Attack Speed by 30% for 3s"
      },
      {
        position: 9,
        id: "2P009",
        name: "Silent As The Grave",
        description: "Your footsteps and [Shadow Step] are significantly quieter"
      },
      {
        position: 4,
        id: "2P010",
        name: "Shared Siphon",
        description: "[The Reaping] also heals the nearest ally within 10m for 30% of Reaper's damage dealt"
      },
      {
        position: 2,
        id: "2P011",
        name: "Harvest Fest",
        description: "[Hellfire Shotgun] hits have a 10% chance to spawn a Soul Globe. When picked up, restore 25% Life, 25% Ammo, and gain 25% Move Speed for 3s"
      },
      {
        position: 7,
        id: "2P012",
        name: "Vampiric Touch",
        description: "Hits with [Quick Melee] mark enemies for 5s. Allies gain 20% Lifesteal against marked enemies"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "2W001",
          name: "Spectral Slugs",
          description: "+5% Attack Speed, +25% Magazine Size, using [Shadow Step] restores 100% of your ammo",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "2S001",
          name: "Neverfrost",
          description: "+25 Health, +5% Weapon Power, reduce effectiveness of enemy slows by 50%",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "2S002",
          name: "Pocket Mist",
          description: "+25 Health, while below 50% Life, gain 20% Move Speed",
          price: 4000,
          category: "Survival"
        },
        {
          position: 1,
          id: "2S003",
          name: "Devastation",
          description: "+15% Ability Lifesteal, each [Death Blossom] elimination increases your Health by 25 until the end of the round, up to 100 Health",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "2S004",
          name: "Wretched Wings",
          description: "+25 Health, While in Wraith Form, gain the ability to fly and gain 20% Move Speed",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "2S005",
          name: "Dauntless Draught",
          description: "+50 Health, +15% Move Speed during Wraith Form, +33% Wraith Form Duration",
          price: 10000,
          category: "Survival"
        },
        {
          position: 1,
          id: "2A001",
          name: "Nightcreeper",
          description: "+10% Move Speed, +30% [Shadow Step] Cast Speed, using [Wraith Form] reduces the cooldown of [Shadow Step] by 2s",
          price: 9500,
          category: "Ability"
        },
        {
          position: 3,
          id: "2S006",
          name: "Crimson Cloak",
          description: "+25 Health, +10% Ability Power, gain 15% of max Health as Overhealth while using [Death Blossom]",
          price: 11000,
          category: "Survival"
        },
        {
          position: 3,
          id: "2A002",
          name: "Crowd Control",
          description: "+15% Ability Power, [Death Blossom] gains 5% Ability Power for each enemy within its range",
          price: 11000,
          category: "Ability"
        },
        {
          position: 2,
          id: "2A003",
          name: "Wreath Of Ruin",
          description: "+20% Ability Power, +25% Death Blossom Radius, +20% Move Speed during Death Blossom",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "2W002",
          name: "Onslaught",
          description: "+25% Max Ammo, every 3rd shot fires both of your [Hellfire Shotguns]. The extra shot does not consume ammo but deals 80% reduced damage",
          price: 10000,
          category: "Weapon"
        }
      ]
    }
  },
  {
    id: 15,
    name: "Soldier 76",
    role: "Damage",
    hp: 250,
    powers: [
      {
        position: 2,
        id: "15P001",
        name: "Super Visor",
        description: "After using [Helix Rocket], activate [Tactical Visor] for 0.75s"
      },
      {
        position: 3,
        id: "15P002",
        name: "Chaingun",
        description: "While continuously shooting [Pulse Rifle], each shot grants 0.5% Weapon Power, stacking up to 100 times"
      },
      {
        position: 9,
        id: "15P003",
        name: "Biotic Bullseye",
        description: "While in [Biotic Field], critical hits restore 5% Max Ammo and extend the field's duration by 0.5s (up to 5s)"
      },
      {
        position: 8,
        id: "15P004",
        name: "Back Off",
        description: "Enemies within your [Biotic Field] take damage equal to 100% of its healing output"
      },
      {
        position: 11,
        id: "15P005",
        name: "On Me!",
        description: "[Biotic Field] moves with you and grants you 20% increased max Health while active"
      },
      {
        position: 10,
        id: "15P006",
        name: "Frontliners",
        description: "Allies in range of your [Biotic Field] when it spawns gain Overhealth equal to 30% of your max Life for 3s"
      },
      {
        position: 7,
        id: "15P007",
        name: "Hunker Down",
        description: "When [Helix Rocket] deals damage, creates a [Biotic Field] with a 70% reduced duration at your position"
      },
      {
        position: 5,
        id: "15P008",
        name: "Cratered",
        description: "Increase [Helix Rocket] explosion radius by 40% and explosion damage by 25%"
      },
      {
        position: 6,
        id: "15P009",
        name: "Double Helix",
        description: "[Helix Rocket] fires a second homing [Helix Rocket] that deals 70% reduced damage"
      },
      {
        position: 4,
        id: "15P010",
        name: "Man On The Run",
        description: "During [Sprint], restore 10% of your Ammo every 1s and increase your Max Ammo by 10% until you reload, stacking up to 10 times"
      },
      {
        position: 12,
        id: "15P011",
        name: "Track and Field",
        description: "During [Sprint], [Biotic Field] cooldown refreshes 150% faster"
      },
      {
        position: 1,
        id: "15P012",
        name: "Peripheral Pulse",
        description: "During [Tactical Visor], [Pulse Rifle] shoots at 1 additional enemy, dealing 50% damage"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "15W001",
          name: "Pulse Converter",
          description: "+5% Attack Speed, +5% Cooldown Reduction, [Helix Rocket] damage restores 20% of your ammo",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "15A001",
          name: "Battery Pack",
          description: "+10% Ability Power, +30% Biotic Field Duration",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "15A002",
          name: "Bomb Diffusal Boots",
          description: "+25 Health, +5% Weapon Power, 90% Reduced [Helix Rocket] Self-Damage, When you damage yourself with [Helix Rocket], it knocks you back 200% further",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "15S001",
          name: "Compression Fatigues",
          description: "+25 Health, +5% Attack Speed, +25% [Sprint] Move Speed",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 2,
          id: "15A003",
          name: "Rapid Response Radius",
          description: "+10% Ability Power, +30% Biotic Field Radius, [Biotic Field] heals allies below 50% Life for 10% more",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "15S002",
          name: "Iron Lung",
          description: "+25 Health, while using [Sprint], gain Overhealth equal to 5% of your max Life every 1s, up to 25%, for 5s",
          price: 10000,
          category: "Survival"
        },
        {
          position: 1,
          id: "15A004",
          name: "Endgame Equalizer",
          description: "+25 Health, +15% Ability Power, when you spend your Ultimate Charge, reset all ability cooldowns. While [Tactical Visor] is active, gain 20% Cooldown Reduction",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 6,
    name: "Mercy",
    role: "Support",
    hp: 225,
    powers: [
      {
        position: 6,
        id: "6P001",
        name: "Battle Medic",
        description: "Every 1s your Staff is attached, [Caduceus Blaster] gains +4% Attack Speed (stacks 10 times) until you reload or swap to your Staff"
      },
      {
        position: 8,
        id: "6P002",
        name: "First Responder",
        description: "When you [Resurrect] an ally, you both gain 250 Overhealth for 6s"
      },
      {
        position: 10,
        id: "6P003",
        name: "The Whambulance",
        description: "When [Guardian Angel] ends, heal your target for 4 Life for every 1m you traveled"
      },
      {
        position: 9,
        id: "6P004",
        name: "Renaissance",
        description: "After successfully [Resurrect], gain [Valkyrie] for 5 seconds"
      },
      {
        position: 7,
        id: "6P005",
        name: "Equivalent Exchange",
        description: "You have 3 charges of [Resurrect] with 33% reduced cast time, but their cooldowns only reset at the start of the round"
      },
      {
        position: 11,
        id: "6P006",
        name: "Triage Unit",
        description: "When using [Guardian Angel] on allies below 50% HP, your [Caduceus Staff] heals them for 30% more for 3 sec"
      },
      {
        position: 5,
        id: "6P007",
        name: "Threads of Fate",
        description: "[Caduceus Staff] chains to your previous target for 3 sec at 50% effectiveness"
      },
      {
        position: 3,
        id: "6P008",
        name: "Protective Beam",
        description: "[Caduceus Staff] targets above 80% Life gain 10% damage reduction"
      },
      {
        position: 4,
        id: "6P009",
        name: "Serenity",
        description: "[Sympathetic Recovery] heals for 20% more and heals you even while healing a full health ally"
      },
      {
        position: 1,
        id: "6P010",
        name: "Distortion",
        description: "Allies boosted by your [Caduceus Staff] gain +20% Lifesteal"
      },
      {
        position: 12,
        id: "6P011",
        name: "Crepuscular Circle",
        description: "While [Valkyrie] is active, the healing and damage boost of [Caduceus Staff] are automatically applied to nearby allies"
      },
      {
        position: 2,
        id: "6P012",
        name: "Glass Extra Full",
        description: "Healing from [Caduceus Staff] targeting full health allies is converted to Overhealth, up to 50"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "6W001",
          name: "Mid-Air Mobilizer",
          description: "While airborne, gain : +5% Weapon Power, 10% Attack Speed",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "6A001",
          name: "Long Distance Wings",
          description: "+10% Ability Power, +33% [Guardian Angel] Range",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "6S001",
          name: "Aerodynamic Feathers",
          description: "+25 Health, while affected by [Angelic Descent], continuously gain 10% Move Speed every 1s up to 60%",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "6S002",
          name: "Angeleisure Wear",
          description: "+25 Health, while affected by [Angelic Descent] or [Guardian Angel], heal 3% of your Life every 1s",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 2,
          id: "6A002",
          name: "Angelic Acrobatics",
          description: "+15% Guardian Angel Move Speed, [Guardian Angel]'s cooldown starts as soon as you jump or crouch",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "6S003",
          name: "Blessed Boosters",
          description: "+50 Health, Your launch velocity is increased by 25% when canceling [Guardian Angel] with crouch or jump",
          price: 9000,
          category: "Survival"
        },
        {
          position: 2,
          id: "6S004",
          name: "Chain Evoker",
          description: "+50 Armor, +5% [Caduceus Staff] damage boost, +15% Ultimate Charge gained from damage boost",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "6W003",
          name: "Celestial Clip",
          description: "+10% Weapon Power, +33% Max Ammo, [Caduceus Blaster] has a 10% chance to fire an extra shot that doesn't consume additional ammo",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "6W004",
          name: "Caduceus EX",
          description: "+10% Weapon Power, +33% [Caduceus Staff] Range",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "6A003",
          name: "Resurrection Rangefinder",
          description: "+10% Cooldown Reduction, +75% [Resurrection] Range",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 26,
    name: "Moira",
    role: "Support",
    hp: 225,
    powers: [
      {
        position: 5,
        id: "26P001",
        name: "Optimal Overflow",
        description: "After you spend 50 [Biotic Energy], launch the last selected [Biotic Orb] with 75% reduced duration"
      },
      {
        position: 6,
        id: "26P002",
        name: "Precarious Potency",
        description: "Allies healed by your [Biotic Grasp] are healed for an additional 20% of [Biotic Grasp]'s healing over 5s"
      },
      {
        position: 2,
        id: "26P003",
        name: "Deconstruction",
        description: "After you spend 50 [Biotic Energy], deal 20% increased damage for 6s"
      },
      {
        position: 4,
        id: "26P004",
        name: "Ethereal Excision",
        description: "While aiming at an enemy's head with [Biotic Grasp]'s secondary fire, gain 30% Lifesteal, 30% Move Speed, and restore 100% increased Biotic Energy"
      },
      {
        position: 1,
        id: "26P005",
        name: "Chain Grasp",
        description: "After using [Biotic Orb], [Biotic Grasp]'s secondary fire chains to 2 additional targets within 10m for 3s"
      },
      {
        position: 3,
        id: "26P006",
        name: "Empowering You",
        description: "[Biotic Grasp]'s secondary fire can target allies, increasing their damage by 15%"
      },
      {
        position: 7,
        id: "26P007",
        name: "Cross-Orbal",
        description: "[Biotic Orb] launches an additional [Biotic Orb] of the other type with 50% reduced capacity"
      },
      {
        position: 8,
        id: "26P008",
        name: "Multiball",
        description: "[Biotic Orb] launches 2 additional orbs of the chosen type with 85% reduced effectiveness"
      },
      {
        position: 9,
        id: "26P009",
        name: "Phantasm",
        description: "When you use [Fade], spawn a stationary copy of the last selected [Biotic Orb] with 50% reduced duration"
      },
      {
        position: 10,
        id: "26P010",
        name: "Scientific Deathod",
        description: "While using [Fade], passing through enemies grants 5% Ultimate Charge and Overhealth equal to 15% of your max Life"
      },
      {
        position: 11,
        id: "26P011",
        name: "Voidhoppers",
        description: "[Fade] phases other allies within 8m for 0.25s and grants them Overhealth equal to 20% of your max Life"
      },
      {
        position: 12,
        id: "26P012",
        name: "Destruction's Divide",
        description: "[Coalescence] can be toggled between pure healing or pure damage, with 25% greater effect"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "26W001",
          name: "Bio-Needles",
          description: "+10% Attack Speed, [Biotic Grasp]'s secondary fire restores 50% more [Biotic Energy]",
          price: 4000,
          category: "Weapon"
        },
        {
          name: "High Capacity Tubing",
          description: "+10% Weapon Power, +50 Max [Biotic Energy]",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "26A001",
          name: "Smart Orbs",
          description: "+5% Ability Power, [Biotic Orb] moves 50% slower while it is healing or dealing damage",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "26A002",
          name: "Levitation Shawl",
          description: "+10% Ability Power, During [Coalescence] gains free flight",
          price: 4500,
          category: "Ability"
        },
        {
          position: 1,
          id: "26S001",
          name: "Abyss Boots",
          description: "+25 Health, while using [Fade], you jump 30% higher",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 2,
          id: "26W003",
          name: "Subatomic Splitter",
          description: "+10% Weapon Power, +15% [Biotic Grasp] Secondary Fire Range",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "26A003",
          name: "Extendrils",
          description: "+15% Ability Power, +30% [Biotic Orb] Tendril Range",
          price: 11000,
          category: "Ability"
        },
        {
          position: 1,
          id: "26W004",
          name: "Alternative Energy",
          description: "+10% Ability Power, +15% Attack Speed, when you use [Fade], refill your [Biotic Energy]",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "26A004",
          name: "Coalegion",
          description: "+25 Health, +15% Ability Power, allies healed by [Coalescence] deal 15% increased damage",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 19,
    name: "D.Va",
    role: "Tank",
    hp: 550,
    powers: [
      {
        position: 1,
        id: "19P001",
        name: "Focused Fusion",
        description: "[Fusion Cannon]'s spread is reduced by 66% and damage falloff range is 20m farther"
      },
      {
        position: 2,
        id: "19P004",
        name: "Legendary Loadout",
        description: "[Micro Missiles] are replaced with 6 Heavy Rockets, which deal 350% more explosive damage and have 100% increased radius"
      },
      {
        position: 3,
        id: "19P007",
        name: "Overstocked",
        description: "Gain 1 extra charge of [Micro Missiles]"
      },
      {
        position: 4,
        id: "19P010",
        name: "Countermeasures",
        description: "When you mitigate 150 damage with [Defense Matrix], automatically fire 2 [Micro Missiles]"
      },
      {
        position: 7,
        id: "19P008",
        name: "Ignition Burst",
        description: "[Boosters] leave a trail of lava that deals 30 damage every 1s"
      },
      {
        position: 8,
        id: "19P006",
        name: "MEKA Punch",
        description: "While using [Boosters], [Quick Melee] deals 75% more damage. [Quick Melee] eliminations reset the cooldown of [Boosters]"
      },
      {
        position: 10,
        id: "19P003",
        name: "Tokki Slam",
        description: "During [Boosters], use crouch to slam the ground, dealing damage equal to 20% of your max Armor and knocking up enemies hit"
      },
      {
        position: 5,
        id: "19P005",
        name: "Facetanking",
        description: "[Defense Matrix] heals you for 30% of the damage it blocks"
      },
      {
        position: 6,
        id: "19P002",
        name: "Ultrawide Matrix",
        description: "Increase the size of Defense Matrix by 50% and its duration by 20%"
      },
      {
        position: 9,
        id: "19P011",
        name: "Stat Boost",
        description: "During the first 2s of [Boosters], [Defense Matrix] recovers 100% faster"
      },
      {
        position: 12,
        id: "19P012",
        name: "Party Protector",
        description: "When you use [Self-Destruct], allies within [Self-Destruct] radius gains 250 Overhealth for 8s"
      },
      {
        position: 11,
        id: "19P009",
        name: "Express Detonation",
        description: "Self-Destruct explosion is triggered 15% faster"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "19A001",
          name: "Dae-hyun's Detonator",
          description: "+15% Ability Lifesteal, if your [Mech] detonates while mid-air, increase [Self-Destruct] explosion damage and range by 200%",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "19A002",
          name: "Mastermind's Mitigator",
          description: "Every 300 damage you mitigate with [Defense Matrix] reduces [Micro Missiles] cooldown by 1s",
          price: 4000,
          category: "Ability"
        },
        {
          position: 3,
          id: "19A003",
          name: "Vesuvius Protocol",
          description: "+10% Ability Power, using [Self-Destruct] drops lava nearby that deals 30 damage every 1s",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "19S001",
          name: "Galvanized Core",
          description: "+25 Health, 25% [Boosters] Duration",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "19S002",
          name: "Plot Armor",
          description: "+25 Armor, while [Defense Matrix] is active, gain 65% damage reduction against beams",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "19S003",
          name: "Solo Spec",
          description: "+25 Health, when you mitigate damage with [Defense Matrix], gain Shields equal to 10% of the damage mitigated, up to 100. Resets when your [Mech] is destroyed",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "19A004",
          name: "Busan Blaster",
          description: "+20% Ability Power, [Light Gun] gains a secondary fire, which charges up to fire a piercing shot that deals 80 piercing damage",
          price: 10000,
          category: "Ability"
        },
        {
          position: 4,
          id: "19S004",
          name: "Nano Cola™ Nitrous",
          description: "+50 Health, when you eject from your Mech, gain 25% increased max Health and gain [Nano Boost] for 8s",
          price: 11000,
          category: "Survival"
        },
        {
          position: 2,
          id: "19S005",
          name: "Chip-Damage Diverter",
          description: "+50 Health, when you deal damage to Barriers while in your [Mech], gain Shields equal to 10% of the damage dealt, up to 200. Resets when your [Mech] is destroyed",
          price: 10000,
          category: "Survival"
        },
        {
          position: 1,
          id: "19S006",
          name: "Multi-Task Mod",
          description: "+10% Weapon Power, [Fusion Cannons] can now be fired while using [Defense Matrix]",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "19S007",
          name: "Singijeon's Pulse Plating",
          description: "+50 Health, gain 5% of damage mitigated by [Defense Matrix] as Ultimate Charge",
          price: 10000,
          category: "Survival"
        },
        {
          position: 1,
          id: "19S008",
          name: "APM AMP",
          description: "+50 Shield, when you use [Boosters], allies within 16m gain 25% Move Speed for 2s",
          price: 9000,
          category: "Survival"
        },
        {
          position: 3,
          id: "19A005",
          name: "Onslaught Ordinance",
          description: "+15% Ability Power, the quantity and duration of [Micro Missiles] is increased by 20%",
          price: 12000,
          category: "Ability"
        },
        {
          position: 2,
          id: "19A006",
          name: "Macro Missiles",
          description: "[Micro Missiles] deal 25% increased damage and have significantly increased knockback",
          price: 12000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 21,
    name: "Genji",
    role: "Damage",
    hp: 250,
    powers: [
      {
        position: 7,
        id: "21P001",
        name: "Wyrm's Maw",
        description: "Targets hit by your [Shurikens] take 10% more damage from [Swift Strike] for 4s, stacking up to 5 times"
      },
      {
        position: 6,
        id: "21P002",
        name: "Laceration",
        description: "[Swift Strike] deals 25% additional damage over 3s to enemies hit"
      },
      {
        position: 9,
        id: "21P003",
        name: "Iaido Strike",
        description: "After [Deflect] ends, you quickly swing your [Dragonblade] once"
      },
      {
        position: 5,
        id: "21P004",
        name: "Hidden Blade",
        description: "Gain 50% Melee Lifesteal and +25 Quick Melee Damage"
      },
      {
        position: 8,
        id: "21P005",
        name: "Forged Under Fire",
        description: "While [Deflect] is active, heal for 60% of the damage it prevents"
      },
      {
        position: 3,
        id: "21P006",
        name: "Sacred Shuriken",
        description: "[Shuriken]'s primary fire throws 2 additional [Shuriken] that don't consume any extra ammo"
      },
      {
        position: 4,
        id: "21P007",
        name: "Hanamura Healing",
        description: "Critical hits and [Swift Strike] grant Overhealth equal to 25% of their damage dealt for 5s"
      },
      {
        position: 10,
        id: "21P008",
        name: "Spirit of Sojiro",
        description: "When [Deflect] stops incoming damage, reduce the cooldown of [Swift Strike] by 1s, up to 5s"
      },
      {
        position: 11,
        id: "21P009",
        name: "Dragon's Breath",
        description: "[Dragonblade] swings also fire a large piercing projectile that deals 50% of [Dragonblade]'s damage"
      },
      {
        position: 1,
        id: "21P010",
        name: "Cybernetic Speed",
        description: "Dealing damage with [Shuriken] grants 2% [Shuriken] Attack Speed for 3s, stacking up to 15 times"
      },
      {
        position: 2,
        id: "21P011",
        name: "Hashimoto's Bane",
        description: "After using an ability, your next secondary fire throws 2 extra [Shuriken] that seek enemies but deal 50% less damage"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "21W001",
          name: "Spiked Grip",
          description: "+30% Max Ammo, while climbing restore 20% of your ammo every 1s",
          price: 3750,
          category: "Weapon"
        },
        {
          position: 1,
          id: "21A001",
          name: "Traversal Kinetics",
          description: "[Swift Strike] cooldown is reduced by 50% if it deals no damage",
          price: 3750,
          category: "Ability"
        },
        {
          position: 2,
          id: "21A002",
          name: "Ninja Soles",
          description: "+5% Cooldown Reduction, +15% Move Speed during [Deflect]",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "21S001",
          name: "Anti-Beam Coating",
          description: "+25 Armor, +5% Attack Speed, [Deflect] blocks Beam attacks",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "21S002",
          name: "Equilibrium Gear",
          description: "+25 Health, while climbing, heal 5% of your Life every 1s",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "21S003",
          name: "Sparrowhawk Feather",
          description: "+25 Health, Gain an additional jump",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "21W002",
          name: "Ambusher Optics",
          description: "+25% Quick Melee damage, [Quick Melee] can critically hit when hitting enemies from behind, dealing 50% increased damage",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "21W003",
          name: "Enduring Edge",
          description: "+10% Weapon Power, 4s [Dragonblade] Duration",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "21W004",
          name: "Swift-Loader",
          description: "+10% Attack Speed, +30% Max Ammo, damaging an enemy with [Swift Strike] restores 20% of your ammo",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "21A003",
          name: "Clean Sweep",
          description: "+10% Ability Power, +15% Ability Lifesteal, +50% [Swift Strike] Width",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "21A004",
          name: "Deflecting Dash",
          description: "+15% Ability Power, during [Swift Strike], deflect incoming projectiles toward your reticle",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "21S004",
          name: "Slicy Coolant",
          description: "+50 Armor, +5% Cooldown Reduction, +1s Deflect Duration",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "21S005",
          name: "Transference Delta",
          description: "15% Ultimate Cost Reduction, convert 100 Health to Armor, when you use Dragonblade, heal your Armor fully",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 24,
    name: "Orisa",
    role: "Tank",
    hp: 475,
    powers: [
      {
        position: 1,
        id: "24P004",
        name: "Scorched Earth",
        description: "When you [Overheat], apply Burning to enemies within 6m, dealing damage equal to 10% of your max Life over 5s"
      },
      {
        position: 2,
        id: "24P001",
        name: "Shield Divergence",
        description: "When you [Overheat], deploy a Barrier with 600 Health in front"
      },
      {
        position: 3,
        id: "24P007",
        name: "Advanced Throwbotics",
        description: "When you use [Javelin Spin], launch an [Energy Javelin] with 50% less damage"
      },
      {
        position: 5,
        id: "24P010",
        name: "Spynstem Update",
        description: "[Javelin Spin] now deflects projectiles and grants 20% of damage dealt from deflecting as Ultimate Charge"
      },
      {
        position: 4,
        id: "24P002",
        name: "Hot Rotate-O",
        description: "[Javelin Spin] gains 35% Cooldown Reduction but now generates [Heat]"
      },
      {
        position: 6,
        id: "24P011",
        name: "Factory Reset",
        description: "While [Fortify] is active, [Javelin Spin] and [Energy Javelin] gain 25% Cooldown Reduction"
      },
      {
        position: 10,
        id: "24P006",
        name: "Lassoed",
        description: "On impact, [Energy Javelin] will pull enemies within 4m towards itself"
      },
      {
        position: 9,
        id: "24P008",
        name: "Ride With Me",
        description: "While [Fortify] is active, grant allies in line of sight 30% Move Speed and Overhealth equal to 10% of your max Life"
      },
      {
        position: 7,
        id: "24P003",
        name: "Hooves of Steel",
        description: "After [Fortify] ends, gain Shields equal to 50% of the damage received during [Fortify]. Resets when you next use [Fortify]"
      },
      {
        position: 8,
        id: "24P005",
        name: "Restortify",
        description: "While [Fortify] is active, heal for 10% of your max Life every 1s"
      },
      {
        position: 11,
        id: "24P009",
        name: "Centripetal Charge",
        description: "25% Ultimate Cost Reduction. After using [Terra Surge], reset your ability cooldowns"
      },
      {
        position: 12,
        id: "24P012",
        name: "Supercharger",
        description: "When you use [Terra Surge], drop a [Supercharger] that increases the damage of nearby allies by 25% for 15s"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "24W001",
          name: "Electro Lights",
          description: "+10% Attack Speed, recover from being [Overheated] 25% faster",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "24W002",
          name: "Enhanced Target Sensors",
          description: "Deal 25% more damage to enemies farther than 12m away",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "24W003",
          name: "Optimized Energy",
          description: "+10% Weapon Power, Critical Hits reduce your [Heat] by 5%",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "24A001",
          name: "Arcfinder",
          description: "[Energy Javelin] deals 25% increased damage to enemies farther than 12m away",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "24A002",
          name: "Elite Rotator Cuff",
          description: "+10% Ability Power, 35% [Javelin Spin] Duration",
          price: 4000,
          category: "Ability"
        },
        {
          position: 3,
          id: "24A003",
          name: "Refraction Tiles",
          description: "+25 Armor, while [Javelin Spin] is active, gain 50% damage reduction to beams",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "24S001",
          name: "Charged Chassis",
          description: "+25 Health, [Fortify] grants additional Overhealth equal to 10% of your Max Life",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "24S002",
          name: "Siphonic Spear",
          description: "When you deal damage with [Energy Javelin], heal 10% of your max Life over 3s",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "24S003",
          name: "Solar Regenergy",
          description: "+25 Health, after using an ability, restore your Armor equal to 5% of your Max Life",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "24A004",
          name: "Efi's Theorem",
          description: "+20% Ability Lifesteal, +50% Fortify Duration",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "24A005",
          name: "3D-Printed Lance",
          description: "+15% Ability Power, [Energy Javelin] cooldown is reduced by 15%, but each use generates 25 [Heat]",
          price: 11000,
          category: "Ability"
        },
        {
          position: 3,
          id: "24A006",
          name: "Oladele-copter Blades",
          description: "+15% Ability Power, while using [Javelin Spin], gain free flight and 20% Move Speed",
          price: 12000,
          category: "Ability"
        },
        {
          position: 1,
          id: "24S004",
          name: "HollaGram Helmet",
          description: "+50 Armor, when you use [Fortify], all allies within line of sight gains unstoppable for 2s",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 34,
    name: "Junker Queen",
    role: "Tank",
    hp: 375,
    powers: [
      {
        position: 1,
        id: "34P001",
        name: "Thrill of Battle",
        description: "[Adrenalin Rush] also heals allies within 12m for 50% of the amount it heals you"
      },
      {
        position: 2,
        id: "34P004",
        name: "Royal Bullets",
        description: "[Scatter Gun] critical hits against targets within 12m applies [Wound] for 30 damage over 3s"
      },
      {
        position: 3,
        id: "34P007",
        name: "Twist the Knife",
        description: "[Scatter Gun] critical hits extend the duration of all [Wounds] on the target by 0.5s"
      },
      {
        position: 4,
        id: "34P002",
        name: "Blade Parade",
        description: "Holding [Jagged Blade] charges it, increasing its damage by up to 35% and causing it to knockback"
      },
      {
        position: 5,
        id: "34P010",
        name: "Cut'em, Gracie!",
        description: "Each enemy hit by [Jagged Blade] while it returns to you reduces its cooldown by 1s"
      },
      {
        position: 6,
        id: "34P005",
        name: "Let's go Win",
        description: "Eliminations reset the cooldown of [Commanding Shout]"
      },
      {
        position: 7,
        id: "34P008",
        name: "Merciless Magnetism",
        description: "Using [Commanding Shout] causes your [Jagged Blade] to home to a target"
      },
      {
        position: 8,
        id: "34P011",
        name: "Reckoner's Roar",
        description: "Using [Commanding Shout] [Wounds] enemies within 10m for 30 damage over 3s"
      },
      {
        position: 9,
        id: "34P006",
        name: "Chop chop",
        description: "[Carnage] gains an additional charge but its cooldown reduction per hit is reduced to 1s"
      },
      {
        position: 10,
        id: "34P003",
        name: "Soaring Stone",
        description: "[Carnage] becomes a leaping strike if ou jump during its cast time"
      },
      {
        position: 11,
        id: "34P009",
        name: "Bloodcrazed",
        description: "[Carnage] and [Rampage] gives 15% of Max Life as Overhealth per hit"
      },
      {
        position: 12,
        id: "34P012",
        name: "Bow down",
        description: "[Rampage] now also knocks down enemy hit for 1.5s"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "34W001",
          name: "Gutpunch Gauntlet",
          description: "+10% Weapon Power, while not holding [Jagged Blade], [Quick Melee] deals 75% more damage and knocks back",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "34W002",
          name: "Monarch's Decree",
          description: "+5% Weapon Power, [Commanding Shout] grants you +15% Attack Speed",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "34A001",
          name: "Bigger Magnet",
          description: "+10% Ability Power, [Jagged Blade]'s pull strength is increased by 35%",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "34S001",
          name: "Dez's Damage Dampener",
          description: "+25 Health, +50% Knockback Resistance, When knockback, gain 25%  increased Move Speed for 3s",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "34S002",
          name: "Rebellious Spirit",
          description: "+25 Health, When [Wound] gets removed instead of expiring, gain 10% of Max Life as Overhealth, up to 150",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "34S003",
          name: "Slicing Spree",
          description: "+10% Move Speed, While within 12m of an enemy with a [Wound], gain 10% Move Speed and 5% Attack Speed",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "34W003",
          name: "Shred and Lead",
          description: "+33% Max Ammo, +10% Weapon Lifesteal, When you [Wound] an enemy, gain 10% Attack Speed for 4s, stacking up to 3 times",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "34W004",
          name: "Bloodhound Mask",
          description: "+15% Weapon Power, Gain 5% Weapon Power for each enemy with a [Wound] within 12m",
          price: 12000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "34A002",
          name: "Tinker Tracksuit",
          description: "+5% Cooldown Reduction, +10% Ability Lifesteal, [Rampage] and [Carnage] hits grant 10% Attack Speed for 4s",
          price: 9500,
          category: "Ability"
        },
        {
          position: 2,
          id: "34A003",
          name: "Booming Voice",
          description: "+25% Ability Power, +50% [Commanding Shout] Radius, [Commanding Shout] will affect allies that are out of line of sight",
          price: 11000,
          category: "Ability"
        },
        {
          position: 1,
          id: "34S004",
          name: "Scav Scraps",
          description: "+50 Health, +5% Cooldown Reduction, [Carnage] and [Jagged Blade] impacts damage grants Overhealth equal to 40% of damage dealt",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "34S005",
          name: "Thick Skull",
          description: "+50 Armor, While casting [Rampage] or [Carnage], gain 50% damage reduction",
          price: 10000,
          category: "Survival"
        },
        {
          position: 3,
          id: "34S006",
          name: "Undying Loyalty",
          description: "+50 Health, +30% [Commanding Shout] Overhealth, Allies affected by [Commanding Shout] are healed for 5% of Junker Queen 's life every second",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 13,
    name: "Zarya",
    role: "Tank",
    hp: 400,
    powers: [
      {
        id: "13P001",
        name: "No Limits",
        description: "Maximum [Energy] increased to 150. [Energy] always decays above 100 [Energy] at a 150% faster rate"
      },
      {
        id: "13P002",
        name: "Particle Accelerator",
        description: "Gain 15% Attack Speed for [Particle Cannon]'s secondary fire. After using an ability, quadruple this bonus for 5s"
      },
      {
        id: "13P003",
        name: "Piercing Beam",
        description: "Above 80 [Energy], [Particle Cannon]'s Primary Fire will pierce enemies"
      },
      {
        id: "13P004",
        name: "Pre-Workout",
        description: "Gain Weapon Lifesteal and Ability Lifesteal equal to 20% of [Energy]"
      },
      {
        id: "13P005",
        name: "Barrier Benefits",
        description: "When [Barrier] expires, grand Overhealth equal to 50% if remaining  [Barrier] Health to the target for 3s"
      },
      {
        id: "13P006",
        name: "Containment Field",
        description: "[Barrier] heals 25 Life, increased by [Energy], and grants 20% Move Speed while active"
      },
      {
        id: "13P007",
        name: "Fission Field",
        description: "[Projected Barrier] also applies to 1 additional ally within 10m, but has 20% reduced duration"
      },
      {
        id: "13P008",
        name: "Here to Spot You",
        description: "[Projected Barrier] pulls you to the targeted ally and heals you for 15% of Max Life over 3s"
      },
      {
        id: "13P009",
        name: "Lifelift",
        description: "+50% [Particle Barrier] size. Increase [Particle Barrier] Health by 100% of Bonus Max Life."
      },
      {
        id: "13P010",
        name: "Major Flex",
        description: "[Barrier] knocks back and deal 25 damage, increased by [Energy], to enemies within 5m every 1s"
      },
      {
        id: "13P011",
        name: "Volskaya Vortex",
        description: "After a [Barrier] is cast, [Particle Cannon]'s next secondary fire spawns a slowing vortex tat deals 100 damage over 2s"
      },
      {
        id: "13P012",
        name: "Graviton Anomaly",
        description: "25% Ultimate Cost Reduction [Graviton Surge] base damage is increased to 30 and increased by [Energy], but has 50% reduced duration"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          id: "13W001",
          name: "Hybrid Battery",
          description: "+5% Weapon Power, [Energy] cannot be reduced below 20.",
          price: 4000,
          category: "Weapon"
        },
        {
          id: "13A001",
          name: "Beyond Barrier",
          description: "+10% Ability Power, +20% [Porjected Barrier] range",
          price: 4000,
          category: "Ability"
        },
        {
          id: "13S001",
          name: "Blastproof Boots",
          description: "+25 Health, +5% Move Speed, [Particle Cannon]'s secondary fire self knockback is increased by 100% and no longer damages yourself.",
          price: 3750,
          category: "Survival"
        },
        {
          id: "13S002",
          name: "Jumper Cables",
          description: "+25 Shields, +5% Ability Power, After using a [Barrier], start regenerating Shields instantly",
          price: 4000,
          category: "Survival"
        },
        {
          id: "13S003",
          name: "Protein Shake",
          description: "+25 Health, +15% Melee Damage, While [Particle Barrier] is active, become unstoppable and [Quick Melee] knocks back enemies.",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          id: "13W002",
          name: "Light Launcher",
          description: "+15% Weapon Power, Consecutive [Particle Cannon] secondary fire sots consume 20% less Ammo, up to 60% for your current magazine",
          price: 10000,
          category: "Weapon"
        },
        {
          id: "13W003",
          name: "Bigger Beam",
          description: "+10% Weapon Power, [Particle Cannon]'s primary fire range is increased by 20%",
          price: 11000,
          category: "Weapon"
        },
        {
          id: "13A002",
          name: "Lynx's Datadrive",
          description: "+25 Health, +15% Ability Power, Casting [Projected Barrier] on an refunds 20% of [Barrier] cooldown",
          price: 10000,
          category: "Ability"
        },
        {
          id: "13A003",
          name: "Superconductor",
          description: "+25 Health, +15% Ability Power, +40% [Barrier] Duration",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 35,
    name: "Kiriko",
    role: "Support",
    hp: 225,
    powers: [
      {
        position: 1,
        id: "35P001",
        name: "Foxy Fireworks",
        description: "After reloading, your next 3 thrown [Kunai] explode on contact, dealing 20 damage to nearby enemies"
      },
      {
        position: 2,
        id: "35P002",
        name: "Keen Kunai",
        description: "Kunai critical hits decreases active ability cooldowns by 15% and refund 3 ammo"
      },
      {
        position: 3,
        id: "35P003",
        name: "Triple Threat",
        description: "After using [Swift Step], for 4s, your secondary fire throws 2 additional [Kunai] in a spread that deal 50% less damage"
      },
      {
        position: 4,
        id: "35P004",
        name: "Leaf On The Wind",
        description: "[Healing Ofuda] bounces to another ally up to 2 times, healing for 30% of the normal amount"
      },
      {
        position: 5,
        id: "35P005",
        name: "Self-Care",
        description: "When you use [Healing Ofuda], heal yourself for 5% of your max Life"
      },
      {
        position: 6,
        id: "35P006",
        name: "Supported Shooting",
        description: "When [Healing Ofuda] heals allies, grant them 20% increased Attack Speed for 3s"
      },
      {
        position: 8,
        id: "35P007",
        name: "Fleet Foot",
        description: "[Swift Step] can be used directionally without a target"
      },
      {
        position: 7,
        id: "35P008",
        name: "Clone Conjuration",
        description: "After using [Swift Step], create a clone of yourself that lasts for 5s"
      },
      {
        position: 10,
        id: "35P009",
        name: "Two-Zu",
        description: "[Protection Suzu] gains an additional charge"
      },
      {
        position: 9,
        id: "35P010",
        name: "Cleansing Charge",
        description: "When you cleanse negative effects with [Protection Suzu], gain 5% Ultimate Charge for each hero cleansed"
      },
      {
        position: 11,
        id: "35P011",
        name: "Crossing Guard",
        description: "[Kitsune Rush] now also reduces enemies Move Speed by 50% for 2s"
      },
      {
        position: 12,
        id: "35P012",
        name: "Spirit Veil",
        description: "Using [Kitsune Rush] cleanses Kiriko of negative effects and make her invulnerable for 4s"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "35W001",
          name: "Asa's Armaments",
          description: "+10% Attack Speed, [Kunai] bounce off surfaces 1 time",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "35W002",
          name: "Farsight Focus Sash",
          description: "+10% Weapon Power, when you deal damage, gain 200% [Healing Ofuda] Projectile Speed for 5s",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "35W003",
          name: "Teamwork Toolkit",
          description: "+10% Weapon Power, when you heal an ally, grant them 10% increased Move Speed for 3s",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "35A001",
          name: "Eye Of The Yokai",
          description: "+10% Ability Power, 35% [Kitsune Rush] Duration",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "35A002",
          name: "Cyclist Gloves",
          description: "When you use an ability gain 20% Attack Speed for 3s",
          price: 5000,
          category: "Ability"
        },
        {
          position: 1,
          id: "35S001",
          name: "Kitsune Kicks",
          description: "+10% Move Speed, gain the ability to [Double Jump]",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "35W004",
          name: "Ryōta's Reloader",
          description: "+35% Reload Speed, after casting an ability, restore 100% of your ammo",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "35W005",
          name: "Spirits' Guidance",
          description: "+15% Weapon Power, 100% [Healing Ofuda] Projectile Speed",
          price: 12000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "35A003",
          name: "Donut Delivery",
          description: "+10% Ability Power, [Swift Step] heals nearby allies by 80 Life over 2s",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "35A004",
          name: "Our Bikes",
          description: "+25 Health, +15% Ability Power, allies affected by [Kitsune Rush] are healed for 80 every 1s",
          price: 10000,
          category: "Ability"
        },
        {
          position: 3,
          id: "35A005",
          name: "Talisman of Velocity",
          description: "+15% Ability Power, [Protection Suzu] grants 25% Attack Speed and 25% Move Speed for 4s",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "35S002",
          name: "Goddess's Aura",
          description: "+25 Health, after using [Swift Step], you gain 100 Overhealth for 4s",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "35S003",
          name: "Talisman of Life",
          description: "+20% Ability Power, [Protection Suzu] grants 100 Overhealth for 5s",
          price: 11000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 22,
    name: "Ana",
    role: "Support",
    hp: 250,
    powers: [
      {
        position: 1,
        id: "22P001",
        name: "No Scope Needed",
        description: "Landing unscoped shots with [Biotic Rifle] grants 10% Attack Speed for 2s, stacking up to 3 times"
      },
      {
        position: 3,
        id: "22P002",
        name: "Tactical Rifle",
        description: "While scoped, [Biotic Rifle] will lock-on to allies for guaranteed hits"
      },
      {
        position: 2,
        id: "22P003",
        name: "Pinpoint Prescription",
        description: "[Biotic Rifle] can now critically hit both allies and enemies"
      },
      {
        position: 5,
        id: "22P004",
        name: "Dreamy",
        description: "[Sleep Dart] can hit allies, healing 100% of their max Life over 8s instead of putting them to sleep"
      },
      {
        position: 4,
        id: "22P005",
        name: "Comfy Cloud",
        description: "[Sleep Dart] explodes on contact, hitting targets within 3m, but Sleep has a 50% reduced duration"
      },
      {
        position: 6,
        id: "22P006",
        name: "Sleep Regimen",
        description: "Gain 50 Health. When you apply Sleep to an enemy, gain 10 Health, up to 150"
      },
      {
        position: 7,
        id: "22P007",
        name: "Home Remedy",
        description: "[Biotic Grenade] applies Overhealth equal to 100% of its healing"
      },
      {
        position: 9,
        id: "22P008",
        name: "Venomous",
        description: "[Biotic Grenade] deals an additional 30 damage over its duration to enemies affected by it"
      },
      {
        position: 8,
        id: "22P009",
        name: "Time Out",
        description: "[Biotic Grenade] now knocks enemies back and reduces their Move Speed by 50% for 1.5s"
      },
      {
        position: 12,
        id: "22P010",
        name: "Your Full Potential",
        description: "[Nano Boost] also grants the target 20% Ultimate Charge and 200 Overhealth"
      },
      {
        position: 10,
        id: "22P011",
        name: "My Turn",
        description: "[Nano Boost] also applies to yourself for 50% of its duration"
      },
      {
        position: 11,
        id: "22P012",
        name: "Our Turn",
        description: "[Nano Boost] also affects other visible allies, but it has a 50% reduced duration on them"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "22W001",
          name: "Target Tracker",
          description: "+15% Biotic Grenade Duration, for each enemy or ally affected by [Biotic Grenade], gain 5% Attack Speed, up to 25%",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "22W002",
          name: "Potent Projectiles",
          description: "+10% Weapon Power, Unscoped [Biotic Rifle] projectiles are 100% larger",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "22W003",
          name: "Quick Scope",
          description: "+5% Weapon Power, +200% Faster Scope Speed, Deal 20% more damage to airborne enemies",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "22A001",
          name: "Double Dosage",
          description: "+25 Health, landing a [Sleep Dart] on target affected by [Biotic Grenade] reduces its cooldown by 35%",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "22S001",
          name: "Dash Boots",
          description: "+5% Movement Speed, jumping in mid-air will dash you a short distance",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "22S002",
          name: "Perfected Formula",
          description: "+25 Shields, +15% Nano Boost Duration",
          price: 4000,
          category: "Survival"
        },
        {
          position: 3,
          id: "22S003",
          name: "I.V. Drip",
          description: "+25 Health, while affected by [Biotic Grenade], Ana gains 100 Overhealth",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "22W004",
          name: "Unscoped Resources",
          description: "+4 Max Ammo, Unscoped [Biotic Rifle] shots have a 50% chance not to consume Ammo",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "22A002",
          name: "Tranquilizer",
          description: "[Sleep Dart] gains: 500% Collision Size, 100% Projectile Speed, 20% Sleep Duration",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "22A003",
          name: "Lethal Dose",
          description: "+50% Ability Lifesteal, [Sleep Dart] direct hit deals 100 bonus damage",
          price: 9000,
          category: "Ability"
        },
        {
          position: 4,
          id: "22A004",
          name: "Grenadius Pin",
          description: "+30% Biotic Grenade Radius, +20% Ability Power",
          price: 12000,
          category: "Ability"
        },
        {
          position: 2,
          id: "22A005",
          name: "Cluster Core",
          description: "+25% Ability Lifesteal, [Biotic Grenade] cooldown is reduced by 1s for each target it hits",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "22S004",
          name: "Eye of Horus",
          description: "+50 Shields, [Nano Boost] can target allies through walls and its range is increased to 60m",
          price: 9000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 14,
    name: "Cassidy",
    role: "Damage",
    hp: 275,
    powers: [
      {
        position: 4,
        id: "14P001",
        name: "Quick Draw",
        description: "After using [Combat Roll], [Peacekeeper]'s next primary fire can auto-aim within 9m while under cooldown"
      },
      {
        position: 2,
        id: "14P002",
        name: "Dead Man Walking",
        description: "Eliminating an enemy you've recently critically hit grants 1 Max Ammo for the round"
      },
      {
        position: 3,
        id: "14P003",
        name: "Full House",
        description: "For each Ammo available, [Peacekeeper]'s primary fire gains 1% increased damage, up to 25%"
      },
      {
        position: 7,
        id: "14P004",
        name: "Just Roll With It",
        description: "During [Combat Roll], prevent all incoming damage, after [Combat Roll] ends, heal 30% of your Life over 3s"
      },
      {
        position: 1,
        id: "14P005",
        name: "Bullseye",
        description: "Critical hit reduces [Combat Roll]'s cooldown by 2s"
      },
      {
        position: 6,
        id: "14P006",
        name: "Barrel Roll",
        description: "[Combat Roll] takes you 50% further and deals 65 damage to enemies"
      },
      {
        position: 8,
        id: "14P007",
        name: "Flash In The Pan",
        description: "Eliminating an enemy recently damaged by [Flashbang] grants 15% Ultimate Charge"
      },
      {
        position: 5,
        id: "14P008",
        name: "Think Flasht",
        description: "When you start a [Combat Roll], leave a [Flashbang] behind"
      },
      {
        position: 9,
        id: "14P009",
        name: "Hot Potato",
        description: "[Flashbang] adds 3 extra Ammo on hit until [Peacekeeper] is reloaded"
      },
      {
        position: 10,
        id: "14P010",
        name: "Easy Rider",
        description: "While using [Deadeye], gain 100 Overhealth and 25% Movement Speed"
      },
      {
        position: 11,
        id: "14P011",
        name: "Sunrise",
        description: "Using [Deadeye] slows all visible enemies by 35% for 1.5s"
      },
      {
        position: 12,
        id: "14P012",
        name: "Sunset",
        description: "[Deadeye] eliminations grant 15% Ultimate Charge each"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "14W001",
          name: "Quickload Chamber",
          description: "+20% Reload Speed, reloading within 6m of an enemy adds 20% of Max Ammo as extra Ammo",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "14A001",
          name: "Blackwatch Tech",
          description: "+10% Ability Power, [Deadeye] eliminations reduce [Flashbang] max cooldown by 10%, up to 40% for the round",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "14A002",
          name: "Streamlined Poncho",
          description: "+10% Cooldown Reduction, [Combat Roll] reduces [Flashbang] cooldown",
          price: 5000,
          category: "Ability"
        },
        {
          position: 1,
          id: "14S001",
          name: "Wanted Poster",
          description: "+25 Health, [Deadeye] eliminations reward extra 500 Stadium Cash each",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "14W002",
          name: "Competitive Analysis",
          description: "+20% Weapon Lifesteal, deal 15% increased primary fire damage to enemies in the Damage role",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "14A003",
          name: "Improvised Dynamite",
          description: "+20% Ability Power, +10% Cooldown Reduction, [Flashbang] explosion radius is increased by 50%",
          price: 11000,
          category: "Ability"
        },
        {
          position: 2,
          id: "14S002",
          name: "Eagle Eye",
          description: "+50 Health, Receives 25% less damage from enemy farther than 12m",
          price: 12000,
          category: "Survival"
        },
        {
          position: 1,
          id: "14S003",
          name: "Frankie's Fixer",
          description: "+50 Health, Heal 10 Life for each Ammo loaded using [Combat Roll]",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 29,
    name: "Ashe",
    role: "Damage",
    hp: 250,
    powers: [
      {
        position: 4,
        id: "29P001",
        name: "Reload Therapy",
        description: "When you reload a shot, heal 3% of your Life"
      },
      {
        position: 1,
        id: "29P002",
        name: "Head Honcho",
        description: "Each unscoped shot you land increases the damage of the next scoped shot you land by 3%, up to 30%. Resets on reload"
      },
      {
        position: 3,
        id: "29P003",
        name: "My Business, My Rules",
        description: "When you deal damage to a Burning enemy with [The Viper], reduce the cooldown of your abilities by 10%"
      },
      {
        position: 2,
        id: "29P004",
        name: "Incendiary Rounds",
        description: "While scoped, hitting the same target without missing deals 30 extra damage"
      },
      {
        position: 7,
        id: "29P005",
        name: "Incendiary Blast",
        description: "[Coach Gun] applies Burning, dealing 100 damage over 5s. If target was burning, deal extra 75 additional Ability Damage instantly"
      },
      {
        position: 5,
        id: "29P006",
        name: "Calamity",
        description: "Using [Coach Gun] reloads 2 Ammo. [The Viper]'s next 2 hits deal 40 additional damage over 3s"
      },
      {
        position: 6,
        id: "29P007",
        name: "Double Barreled",
        description: "[Coach Gun] gains an additional charge"
      },
      {
        position: 8,
        id: "29P008",
        name: "Early Detonation",
        description: "Shooting [Dynamite] reloads 5 Ammo and reduces the cooldown of [Dynamite] by 3s"
      },
      {
        position: 9,
        id: "29P009",
        name: "Molten Munitions",
        description: "When [Dynamite] explodes on the ground, it leaves lava that Burns enemies for 50 every 1s"
      },
      {
        position: 10,
        id: "29P010",
        name: "Out with a Bang",
        description: "When [Dynamite] explodes, it spawns 3 sticky explosives that deal 66% reduced damage"
      },
      {
        position: 12,
        id: "29P011",
        name: "Partners in Crime",
        description: "You are healed for 100% of [B.O.B.]'s damage dealt and [B.O.B.] is healed for 100% of your damage dealt"
      },
      {
        position: 11,
        id: "29P012",
        name: "B.O.B. Jr.",
        description: "[B.O.B.] costs 50% less Ultimate Charge but has reduced Life, 50% reduced Attack Speed, and is significantly smaller"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "29W001",
          name: "Maxed Mag",
          description: "+5% Attack Speed, Gain 3% Attack Speed for each remaining Ammo above 50% of your Max Ammo",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "29W002",
          name: "Tripod",
          description: "+5% Weapon Power, [The Viper], [Coach Gun], and [Dynamite] deal 10% more damage to enemies that are below you",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "29W003",
          name: "Greased Loader",
          description: "25% Max Ammo, +15% Reload Speed",
          price: 5000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "29A001",
          name: "Furnace Fuel",
          description: "+25 Health, +5% Ability Power, When Burn gets removed instead of expiring, gain 3% Ultimate Charge",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "29A002",
          name: "Silver Lighter",
          description: "+10% Ability Power, Damage dealt to Burning targets grants 20% more Ultimate Charge",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "29S001",
          name: "Silver Spurs",
          description: "+25 Health, after using [Coach Gun], gain 20% Move Speed for 3s",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "29W004",
          name: "Ironsights",
          description: "+10% Attack Speed, when the target is further than 10m, scoped shot gains 1% damage for each meter",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "29W005",
          name: "Sidewinder",
          description: "+10% Attack Speed, when the target is within 10m, unscoped shot gains 15% increased damage",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "29A003",
          name: "Infrared Lenses",
          description: "+15% Ability Power, deal 25% increased damage to Burning enemies",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "29A004",
          name: "Stacked Sticks",
          description: "+15% Ability Power, 40% [Dynamite] Explosion Radius",
          price: 10000,
          category: "Ability"
        },
        {
          position: 3,
          id: "29A005",
          name: "Build-A-Blast Buckshot",
          description: "+10% Cooldown Reduction, [Coach Gun] has 50% increased self-knockback",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "29S002",
          name: "B.O.B. Wire Defense",
          description: "+50 Health, +25 Armor, when [B.O.B.] finishes charging, [B.O.B.] gains 300 Armor",
          price: 10000,
          category: "Survival"
        },
        {
          position: 2,
          id: "29S003",
          name: "Firestarter",
          description: "+50 Health, Your Burning effects gain 35% Lifesteal",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 41,
    name: "Juno",
    hp: 225,
    role: "Support",
    powers: [
      {
        position: 1,
        id: "41P001",
        name: "MediMaster",
        description: "[Mediblaster] can now critically hit both allies and enemies"
      },
      {
        position: 2,
        id: "41P002",
        name: "Stinger",
        description: "[Mediblaster] deals an additional 10 damage to enemies over 1s. (Does not stack)"
      },
      {
        position: 3,
        id: "41P003",
        name: "Cosmic Coolant",
        description: "[Pulsar Torpedoes] cooldown is reduced by 1s for each target it hits"
      },
      {
        position: 4,
        id: "41P004",
        name: "Medicinal Missiles",
        description: "[Pulsar Torpedoes] heal for an extra 30 life and causes allies hit to receive 50% more healing for 3s"
      },
      {
        position: 5,
        id: "41P005",
        name: "Pulsar Plus",
        description: "[Pulsar Torpedoes] gains 1 additional charge"
      },
      {
        position: 7,
        id: "41P006",
        name: "Torpedo Glide",
        description: "During [Glide Boost], every 50 damage you deal reduces the cooldown of [Pulsar Torpedoes] by 1s"
      },
      {
        position: 6,
        id: "41P007",
        name: "Blink Boosts",
        description: "[Glide Boost] gains 2 additional charges and has a 65% reduced cooldown, but has 75% reduced duration"
      },
      {
        position: 10,
        id: "41P008",
        name: "Rally Ring",
        description: "Reduce [Hyper Ring]'s cooldown by 1s when an ally passes through it"
      },
      {
        position: 8,
        id: "41P009",
        name: "Black Hole",
        description: "[Hyper Ring] slows the Move Speed of enemies who pass through it by 35% for 1s"
      },
      {
        position: 9,
        id: "41P010",
        name: "Hyper Healer",
        description: "Allies affected by [Hyper Ring] gain 50 Overhealth"
      },
      {
        position: 12,
        id: "41P011",
        name: "Stellar Focus",
        description: "[Orbital Ray] now follows you and its duration is increased by 35%"
      },
      {
        position: 11,
        id: "41P012",
        name: "Orbital Alignment",
        description: "Enemies inside of [Orbital Ray] lose 35% Move Speed. Allies inside of it gain 25% Move Speed"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "41W001",
          name: "Vantage Shot",
          description: "+5% Weapon Power, while airborne, [Mediblaster] deals 15% more damage",
          price: 4000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "41A001",
          name: "Lock-On Shield",
          description: "+10% Ability Power, while aiming [Pulsar Torpedoes], gain Overhealth equal to 50% of your max Shields",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "41A002",
          name: "Lux Loop",
          description: "+10% Ability Power, +25% Hyper Ring Duration",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "41S001",
          name: "Boosted Rockets",
          description: "+25 Shield, +25% [Glide Boost] Duration",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 2,
          id: "41W002",
          name: "Long Range Blaster",
          description: "+15% Weapon Power, [Mediblaster] deals 15% increased damage and healing to targets farther than 12m away",
          price: 12000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "41A003",
          name: "PulStar Destroyers",
          description: "+15% Ability Power, [Pulsar Torpedoes] explode on hit, deal 20 damage to nearby enemies",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "41W003",
          name: "Pulse Spike",
          description: "+10% Attack Speed, +35% [Pulsar Torpedoes] Projectile Speed, after using [Pulsar Torpedoes], gain 25% Attack Speed for 4s",
          price: 11000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "41S002",
          name: "Forti-Glide",
          description: "+75 Shield, during [Glide Boost], gain 10% Damage Reduction",
          price: 10000,
          category: "Survival"
        },
        {
          position: 3,
          id: "41W004",
          name: "Gravitational Push",
          description: "+15% Weapon Power, during [Glide Boost], gain 20% Attack Speed and your [Quick Melee] knocks enemies back",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "41A004",
          name: "Solar Shielding",
          description: "+25% Ability Power, allies affected by [Hyper Ring] restore 25 Shields every 1s",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "41S003",
          name: "Sunburst Serum",
          description: "+75 Shield, [Orbital Ray] gains 25% increased healing",
          price: 10000,
          category: "Survival"
        },
        {
          position: 3,
          id: "41A005",
          name: "Red Promise Regulator",
          description: "+50 Shield, +15% Ability Power, when you use [Orbital Ray], reset your cooldowns",
          price: 10000,
          category: "Ability"
        }
      ]
    }
  },
  {
    id: 20,
    name: "Mei",
    role: "Damage",
    hp: 300,
    powers: [
      {
        position: 3,
        id: "20P001",
        name: "Permafrost",
        description: "Increase your Max Health by 50% of your Ability Power"
      },
      {
        position: 4,
        id: "20P002",
        name: "Slowball",
        description: "[Endothermic Blaster]'s secondary fire now shoots a snowball that applies 30% slow for 1s on critical hit"
      },
      {
        position: 1,
        id: "20P003",
        name: "Extendothermics",
        description: "[Endothermic Blaster]'s primary fire range is increased by 6m"
      },
      {
        position: 2,
        id: "20P004",
        name: "Frost Armor",
        description: "Gain Armor equal to 5% of the primary fire damage you deal, up to 100, until the end of the round"
      },
      {
        position: 6,
        id: "20P005",
        name: "Snowball Flight",
        description: "Jumping while mid-air creates a large [Ice Wall] pillar under you. (12s Cooldown)"
      },
      {
        position: 7,
        id: "20P006",
        name: "Twice As Ice",
        description: "When you use [Cryo-Freeze], reset the next cooldown of [Ice Wall]"
      },
      {
        position: 5,
        id: "20P007",
        name: "Iceberg",
        description: "[Ice Wall] spawns a mini [Blizzard] that slows enemies"
      },
      {
        position: 9,
        id: "20P008",
        name: "Cryclone",
        description: "[Cryo-Freeze] spawns a mini [Blizzard] that slows enemies"
      },
      {
        position: 8,
        id: "20P009",
        name: "Coulder",
        description: "[Cryo-Freeze] now encases you in a rolling iceball that can knock back enemies and deal 10 damage"
      },
      {
        position: 10,
        id: "20P010",
        name: "Frost Nova",
        description: "When [Cryo-Freeze] ends, knock back nearby enemies, dealing 60 damage"
      },
      {
        position: 12,
        id: "20P011",
        name: "Blizznado",
        description: "While within [Blizzard], heal 5% of your Life every 1s"
      },
      {
        position: 11,
        id: "20P012",
        name: "Avalanche",
        description: "Visible enemies within 20m of the Blizzard are slowed by 25%"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "20S001",
          name: "Coldspot",
          description: "+25 Health, Primary Fire and [Blizzard] can remove burn",
          price: 4000,
          category: "Survival"
        },
        {
          position: 2,
          id: "20S002",
          name: "Meicicle",
          description: "+25 Health, [Cryo-Freeze] duration is increased by 25%",
          price: 4000,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "20W001",
          name: "Focused Flurries",
          description: "+15% Attack Speed, Max Ammo is increased by 75% but reloading takes 50% longer",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "20W002",
          name: "Snowboot",
          description: "+15% Attack Speed, Frozen ground increases Mei's Movement Speed by 35%",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 3,
          id: "20W003",
          name: "Himalayan Hat",
          description: "+10% Attack Speed, while within [Blizzard], gain 10% Attack Speed",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "20A001",
          name: "Sturdy Snowfort",
          description: "+15% Ability Power, Ability Power is increased by 5% per each spawned Ice Pillars",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "20A002",
          name: "Ecopoint Cryobed",
          description: "On near death, go into [Cryo-Freeze] and gain 15% Ultimate Charge. Can happen once every round",
          price: 10000,
          category: "Ability"
        },
        {
          position: 3,
          id: "20A003",
          name: "Icy Veins",
          description: "+10% Ability Power, [Blizzard] deals 100% increased damage",
          price: 10000,
          category: "Ability"
        },
        {
          position: 1,
          id: "20S003",
          name: "Ice Sheet",
          description: "+25 Health, [Ice Wall] Duration is increased by 1 second and health is increased by 100%",
          price: 10000,
          category: "Survival"
        }
      ]
    }
  },
  {
    id: 16,
    name: "Lucio",
    hp: 225,
    role: "Support",
    powers: [
      {
        position: 1,
        id: "16P001",
        name: "Fast Forward",
        description: "While above 50% Move Speed, increase damage by 25%"
      },
      {
        position: 2,
        id: "16P002",
        name: "Signature Shift",
        description: "After using an ability, your next [Sonic Amplifier] shot shoots a volley of 6 ammo with 20% increased projectile size"
      },
      {
        position: 3,
        id: "16P003",
        name: "Sonic Boom",
        description: "[Sonic Amplifier] Damage heals all allies affected by [Crossfade] equal to 20% of damage dealt"
      },
      {
        position: 4,
        id: "16P004",
        name: "Mixtape",
        description: "When switching to [Healing Boost], [Crossfade] heals for 50% of [Crossfade] healing for every 1s [Speed Boost] was active"
      },
      {
        position: 5,
        id: "16P005",
        name: "Megaphone",
        description: "+20% [Amp It Up] Duration. While [Amp It Up] is active, [Crossfade] radius is increased by 150%"
      },
      {
        position: 6,
        id: "16P006",
        name: "Radio Edit",
        description: "After using [Amp It Up], trigger [Sound Barrier] with 85% reduced Overhealth"
      },
      {
        position: 7,
        id: "16P007",
        name: "Vivace",
        description: "While [Wallriding] or airborne, [Soundwave] cooldown refreshes 25% faster and adds 1 Max Ammo per 1s until you reload"
      },
      {
        position: 8,
        id: "16P008",
        name: "Wallvibing",
        description: "While [Wallriding] or airborne, gain temporary Overhealth equal to 3% of your life every 1s up to 30%"
      },
      {
        position: 9,
        id: "16P009",
        name: "Crowd Pleaser",
        description: "After using [Soundwave], heal all allies affected by [Crossfade] for 200% of [Crossfade] healing."
      },
      {
        position: 10,
        id: "16P010",
        name: "Let's Bounce",
        description: "[Soundwave] has 30% increased knockback and deals 40 bonus damage if the target hits a wall"
      },
      {
        position: 11,
        id: "16P011",
        name: "Reverb",
        description: "Gain 1 extra charge of [Soundwave]"
      },
      {
        position: 12,
        id: "16P012",
        name: "Beat Drop",
        description: "20% Ultimate Cost Reduction. Landing on an enemy with [Sound Barrier] deals up to 200 damage"
      }
    ],
    items: {
      normal: [],
      rare: [
        {
          position: 1,
          id: "16A001",
          name: "#1 Single",
          description: "+10% Ability Power, When allies leave your [Crossfade] area, the effect lingers for 2s",
          price: 4000,
          category: "Ability"
        },
        {
          position: 2,
          id: "16A002",
          name: "Lofly Beats",
          description: "+5% Weapon Power, +5% Ability Power, While in [Speed Boost], [Soundwave] also knocks you back",
          price: 4000,
          category: "Ability"
        },
        {
          position: 3,
          id: "16A003",
          name: "Nano Boop",
          description: "+5% Cooldown Reduction, Environmental kills grant [Nano Boost] for 5s",
          price: 4000,
          category: "Ability"
        },
        {
          position: 1,
          id: "16S001",
          name: "Speed Skates",
          description: "+25 Health, After [Wallriding], gain 30% Move Speed for 2s",
          price: 3750,
          category: "Survival"
        }
      ],
      epic: [
        {
          position: 1,
          id: "16W001",
          name: "B-Side Bop",
          description: "+25 Health, +25% Melee Damage, After using [Soundwave], your next [Quick Melee] grants decaying Overhealth equal to 200% of damage dealt",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 2,
          id: "16W002",
          name: "Riff Repeater",
          description: "+15% Weapon Power, [Sonic Amplifier] projectiles ricochet off walls 3 times",
          price: 10000,
          category: "Weapon"
        },
        {
          position: 1,
          id: "16A004",
          name: "Airwaves",
          description: "+25 Health, +15% Ability Power, [Sound Barrier] effectiveness is increased by 25% for every 1s [Sound Barrier] is channeled, up to 50%",
          price: 10000,
          category: "Ability"
        },
        {
          position: 2,
          id: "16A005",
          name: "All-Out Auditiva",
          description: "+20% Ability Power, +33% [Amp It Up] Duration",
          price: 11000,
          category: "Ability"
        },
        {
          position: 1,
          id: "16S002",
          name: "Hip Hop",
          description: "+25 Health, After [Wallriding], gain an additonal jump while airborne",
          price: 9000,
          category: "Survival"
        }
      ]
    }
  }
];

const heroesOrder = [
  // Tank
  19, // D.Va
  24, // Orisa
  34, // Junker Queen
  5, // Reinhardt
  13, // Zarya

  // DPS
  29, // Ashe
  14, // Cassidy
  2, // Reaper
  21, // Genji
  20, // Mei
  15, // Soldier 76

  // Support
  22, // Ana
  6, // Mercy
  41, // Juno
  35, // Kiriko
  16, // Lucio
  26, // Moira
];

export { basicItems, heroes, heroesOrder };
