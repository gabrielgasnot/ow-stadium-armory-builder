const basicItems = {
  normal: [
    {
      name: "Compensator",
      description: "+5% Weapon Power",
      price: 1000,
      category: "Weapon",
    },
    {
      name: "Ammo Reserves",
      description: "+20% Max Ammo",
      price: 1500,
      category: "Weapon",
    },
    {
      name: "Weapon Grease",
      description: "+5% Attack Speed",
      price: 1000,
      category: "Weapon",
    },
    {
      name: "Plasma Converter",
      description: "+10% Weapon Lifesteal",
      price: 1000,
      category: "Weapon",
    },
    {
      name: "Frenzy Amplifier",
      description:
        "Eliminations grant 10% Attack Speed and 15% Move Speed for 3s",
      price: 1500,
      category: "Weapon",
    },
    {
      name: "Power Playbook",
      description: "+10% Ability Power",
      price: 1000,
      category: "Ability",
    },
    {
      name: "Shady Spectacles",
      description: "+10% Ability Lifesteal",
      price: 1000,
      category: "Ability",
    },
    {
      name: "Charged Plating",
      description:
        "After you spend your Ultimate Charge, gain 25 Armor and 10% Ability Power for the rest of the round",
      price: 1000,
      category: "Ability",
    },
    {
      name: "Winning Attitude",
      description: "+25 Health, when you die, gain 15% Ultimate Charge",
      price: 1500,
      category: "Ability",
    },
    {
      name: "Electrolytes",
      description:
        "At the start of the round, gain 100 unrecoverable Overhealth",
      price: 1000,
      category: "Survival",
    },
    {
      name: "Field Rations",
      description: "While on the Objective, restore 8 Life every 1s",
      price: 1000,
      category: "Survival",
    },
    {
      name: "Adrenaline Shot",
      description:
        "+10 Health, Health Packs grant 20% Move Speed for 5s and 50 Overhealth",
      price: 1000,
      category: "Survival",
    },
    {
      name: "Running Shoes",
      description:
        "+10 Health, at the start of the round and when you first respawn, gain 20% Move Speed for 10s while out of combat",
      price: 1000,
      category: "Survival",
    },
    {
      name: "Heartbeat Sensor",
      description: "+5% Move Speed, Enemies below 30% Life are revealed to you",
      price: 1500,
      category: "Survival",
    },
    {
      name: "Siphon Gloves",
      description: "+25 Health, [Quick Melee] damage heals for 25 Life",
      price: 1500,
      category: "Survival",
    },
    {
      name: "First Aid Kit",
      description:
        "+25 Shields, Reduce the time before your Life begins regenerating by 33%",
      price: 1500,
      category: "Survival",
    },
    {
      name: "Armored Vest",
      description: "+25 Armor",
      price: 1500,
      category: "Survival",
    },
  ],
  rare: [
    {
      name: "Stockpile",
      description: "+5% Attack Speed, +25% Max Ammo",
      price: 4000,
      category: "Weapon",
    },
    {
      name: "Aftermarket Firing Pin",
      description: "+10% Attack Speed, +5% Move Speed",
      price: 3750,
      category: "Weapon",
    },
    {
      name: "Advanced Nanobiotics",
      description:
        "+5% Weapon Power, after healing an ally, gain 10% Attack Speed for 3s",
      price: 4000,
      category: "Weapon",
    },
    {
      name: "Shieldbuster",
      description:
        "+5% Weapon Power, after dealing damage to Shields or Armor grants 15% Attack Speed for 1s",
      price: 4000,
      category: "Weapon",
    },
    {
      name: "Technoleech",
      description: "+5% Weapon Power, +10% Weapon Lifesteal",
      price: 4500,
      category: "Weapon",
    },
    {
      name: "Icy Coolant",
      description: "+10% Weapon Power, +5% Cooldown Reduction",
      price: 5000,
      category: "Weapon",
    },
    {
      name: "Talon Modification Module",
      description: "+15% Weapon Power",
      price: 5500,
      category: "Weapon",
    },
    {
      name: "Wrist Wraps",
      description: "+5% Ability Power, +10% Attack Speed",
      price: 4000,
      category: "Ability",
    },
    {
      name: "Custom Stock",
      description: "+5% Weapon Power, +10% Ability Power",
      price: 3750,
      category: "Ability",
    },
    {
      name: "Junker Whatchamajig",
      description: "+25% Starting Ultimate Charge",
      price: 4000,
      category: "Ability",
    },
    {
      name: "Energized Bracers",
      description: "+10% Ability Power, +10% Ability Lifesteal",
      price: 4000,
      category: "Ability",
    },
    {
      name: "Biolight Overflow",
      description:
        "+25 Health, +5% Ability Power, when you spend your Ultimate Charge, grant nearby allies 50 Overhealth for 3s",
      price: 4000,
      category: "Ability",
    },
    {
      name: "Multi-tool",
      description: "+5% Ability Power, +10% Cooldown Reduction",
      price: 5000,
      category: "Ability",
    },
    {
      name: "Nano Cola",
      description: "+20% Ability Power",
      price: 5500,
      category: "Ability",
    },
    {
      name: "Reinforced Titanium",
      description:
        "+25 Shields, while you have Shields, take 10% reduced Ability Damage",
      price: 3750,
      category: "Survival",
    },
    {
      name: "Iron Eyes",
      description:
        "+25 Shields, you take 15% reduced damage from Critical Hits",
      price: 4500,
      category: "Survival",
    },
    {
      name: "Cushioned Padding",
      description:
        "+25 Shields, -40% Incoming Negative Effect Duration, when affected by Stun, Sleep, or Hinder, regenerate 10% of your Max Life over 3s",
      price: 4000,
      category: "Survival",
    },
    {
      name: "Ironclad Exhaust Ports",
      description:
        "+5% Cooldown Reduction, when you use an ability, gain 25 Overhealth for 3s",
      price: 4000,
      category: "Survival",
    },
    {
      name: "Crusader Hydraulics",
      description:
        "+25 Armor, while you have Armor, take 10% less Weapon Damage",
      price: 4500,
      category: "Survival",
    },
    {
      name: "Vishkar Converter",
      description: "+25 Shields, convert 100 Health into Shields",
      price: 4000,
      category: "Survival",
    },
    {
      name: "Vital-E-Tee",
      description: "+10 Armor, Convert 100 Health into Armor",
      price: 4000,
      category: "Survival",
    },
    {
      name: "MEKA Z-Series",
      description: "+8% Health, Armor, and Shields",
      price: 5000,
      category: "Survival",
    },
  ],
  epic: [
    {
      name: "Codebreaker",
      description: "+15% Weapon Power, Ignore 50% of Armor's damage reduction",
      price: 9000,
      category: "Weapon",
    },
    {
      name: "Salvaged Slugs",
      description:
        "+10% Attack Speed, +25% Damage to Barriers, Dealing Weapon Damage to Barriers has a 40% chance to restore 1 ammo",
      price: 9500,
      category: "Weapon",
    },
    {
      name: "Volskaya Ordnance",
      description:
        "+10% Attack Speed, deal 3% increased Weapon Damage for every 100 Max Life the target has more than you, up to 15%",
      price: 9500,
      category: "Weapon",
    },
    {
      name: "Commander's Clip",
      description:
        "+10% Attack Speed, +40% Max Ammo, when you use an ability, restore 10% of your Max Ammo",
      price: 10000,
      category: "Weapon",
    },
    {
      name: "Weapon Jammer",
      description:
        "+25 Armor, +10% Weapon Power, Dealing Weapon Damage negates 10% of target's bonus Attack Speed and increases your Attack Speed by 10% for 2s",
      price: 10000,
      category: "Weapon",
    },
    {
      name: "Amari's Antidote",
      description:
        "+25 Health, +15% Weapon Power, while healing an ally below 50% Life with your Weapon, deal 15% increased Weapon Healing",
      price: 11000,
      category: "Weapon",
    },
    {
      name: "Booster Jets",
      description:
        "+20% Attack Speed, when you use an ability, gain 20% Move Speed for 2s",
      price: 11000,
      category: "Weapon",
    },
    {
      name: "El-Sa'ka Suppressor",
      description:
        "+10% Weapon Power, Critical Hits apply 30% Healing Reduction for 2s",
      price: 11000,
      category: "Weapon",
    },
    {
      name: "Hardlight Accelerator",
      description:
        "+10% Weapon Power, +10% Cooldown Reduction, when you use an ability, gain 5% Weapon Power for 3s, stacking up to 3 times",
      price: 11000,
      category: "Weapon",
    },
    {
      name: "Eye of the Spider",
      description:
        "+25% Weapon Power, deal 10% increased damage to enemies under 30% Life",
      price: 135000,
      category: "Weapon",
    },
    {
      name: "The Closer",
      description:
        "+20% Weapon Power, +10% Critical Damage, Critical Hits reveal the target for 3s",
      price: 13000,
      category: "Weapon",
    },
    {
      name: "Three-Tap Tommygun",
      description:
        "+10% Ability Power, +10% Attack Speed, after using an ability, your next 3 instances of Weapon Damage deal additional damage equal to 3% of the target's Life",
      price: 9500,
      category: "Ability",
    },
    {
      name: "Biotech Maximizer",
      description:
        "+25 Health. +10% Ability Power, when you use an ability that heals, reduce its cooldown by 5% for each unique ally it heals",
      price: 10000,
      category: "Ability",
    },
    {
      name: "Catalytic Crystal",
      description:
        "+15% Ability Power, ability Damage and Healing grants 20% more Ultimate Charge",
      price: 10000,
      category: "Ability",
    },
    {
      name: "Superflexor",
      description:
        "+25 Health, +10% Weapon Power, when you deal Weapon Damage or Healing, gain 5% Ability Power for 3s, stacking up to 5 times",
      price: 10000,
      category: "Ability",
    },
    {
      name: "Lumérico Fusion Drive",
      description:
        "+50 Armor, +15% Ability Power, when you use an ability, restore 50 Armor or Shields over 2s",
      price: 10000,
      category: "Ability",
    },
    {
      name: "Cybervenom",
      description:
        "+10% Ability Power, +5% Cooldown Reduction, Dealing Ability Damage applies 30% Healing Reduction for 2s",
      price: 10500,
      category: "Ability",
    },
    {
      name: "Iridescent Iris",
      description:
        "+20% Ability Power, +10% Cooldown Reduction, when you spend your Ultimate Charge, gain 100 Overhealth for 3s",
      price: 11000,
      category: "Ability",
    },
    {
      name: "Liquid Nitrogen",
      description:
        "+25 Health, +10% Ability Power, Dealing Ability Damage slows the target's Move Speed by 20% for 3s",
      price: 11000,
      category: "Ability",
    },
    {
      name: "Mark of the Kitsune",
      description:
        "+10% Ability Power, after casting an ability, your next instance of Weapon Damage or Healing deals 25 bonus damage or healing",
      price: 11000,
      category: "Ability",
    },
    {
      name: "Champion's Kit",
      description: "+40% Ability Power",
      price: 13500,
      category: "Ability",
    },
    {
      name: "Geneticist's Vial",
      description:
        "+25 HP, the first time you die each round, revive at 200 Life after 3s",
      price: 9000,
      category: "Survival",
    },
    {
      name: "Bloodbound",
      description:
        "+50 Health, the last enemy to deal a final blow to you is Revealed when nearby, deal 10% more damage to them and take 10% reduced damage from them",
      price: 9500,
      category: "Survival",
    },
    {
      name: "Divine Intervention",
      description:
        "+50 Shield, when you take more than 100 damage at once, restore 15% of damage taken and start regenerating your Shields",
      price: 9500,
      category: "Survival",
    },
    {
      name: "Gloomgauntlet",
      description:
        "+50 Armor, +15% Melee Damage, [Melee] damage grants 10% Move Speed and restores 5% of max Life over 2s",
      price: 9500,
      category: "Survival",
    },
    {
      name: "Phantasmic Flux",
      description:
        "+10% Weapon Power, +10% Ability Power, +15% Weapon Lifesteal, +15% Ability Lifesteal, while at full Life, Lifesteal grants up to 100 Overhealth",
      price: 10000,
      category: "Survival",
    },
    {
      name: "Rüstung von Wilhelm",
      description:
        "+15% Health, Shields, and Armor, while below 30% Life, gain 10% Damage Reduction",
      price: 10000,
      category: "Survival",
    },
    {
      name: "Vanadium Injection",
      description:
        "+50 Shield, while at 100% Ultimate Charge, gain 50 Health, 10% Weapon Power, 10% Ability Power, 10% Attack Speed, 10% Cooldown Reduction, and 10% Move Speed",
      price: 10000,
      category: "Survival",
    },
    {
      name: "Martian Mender",
      description:
        "+25 Health, +10% Cooldown Reduction, Restore 3% of your Life every 1s",
      price: 10000,
      category: "Survival",
    },
    {
      name: "Nebula Conduit",
      description:
        "+50 Health, +10% Weapon Power, prevent 15% of incoming damage and instead take that prevented damage over 3s",
      price: 11000,
      category: "Survival",
    },
    {
      name: "Ogundimu Reduction Field",
      description:
        "+50 Armor, when you take damage, gain 0.5% Damage Reduction for 1s, stacking up to 20 times",
      price: 11000,
      category: "Survival",
    },
  ],
};

const heroes = [
  {
    name: "Reinhardt",
    role: "Tank",
    hp: 550,
    powers: [
      {
        name: "Smashing!",
        description:
          "When you deal damage with [Rocket Hammer], gain 5% Move Speed and 4% Weapon Lifesteal for 3s, stacking up to 5 times.",
      },
      {
        name: "Feeling The Burn",
        description:
          "Every 3rd [Rocket Hammer] swing applies Burn, dealing 30% [Rocket Hammer] damage over 2s.",
      },
      {
        name: "Wilhelmwagen",
        description:
          "While [Barrier Field] is deployed, you heal for 15% of the damage it mitigates and gain 30% Move Speed.",
      },
      {
        name: "To Me, My Friends!",
        description:
          "While [Barrier Field] is deployed, allies within 5m are healed equal to 3% of your max Life every 1s.",
      },
      {
        name: "Amplification Barrier",
        description:
          "Friendly projectiles that pass through your [Barrier Field] deal 15% more damage.",
      },
      {
        name: "Barrier Reconstruction",
        description:
          "When you deal damage with [Rocket Hammer] or [Fire Strike], restore health to [Barrier Field] equal to 10% of its max Health.",
      },
      {
        name: "Vanguard",
        description:
          "[Charge] grants nearby allies Overhealth equal to 10% of your max Life and 20% Move Speed for 3s.",
      },
      {
        name: "Shield Stampede",
        description:
          "+50% [Charge] Knockback Power During [Charge], automatically deploy [Barrier Field].",
      },
      {
        name: "Vroom Boom Boom",
        description:
          "During [Charge], colliding with a wall triggers an explosion that deals 30% of [Charge]'s pin damage.",
      },
      {
        name: "Impact Burst",
        description:
          "[Fire Strike] triggers an explosion the first time it hits an enemy, dealing 20% of its damage in a 3m radius.",
      },
      {
        name: "Magma Strike",
        description:
          "If [Fire Strike] is cast twice within 2s, the second strike leaves a trail of lava that Burns enemies for 50% of [Fire Strike] damage.",
      },
      {
        name: "Blazing Blitz",
        description:
          "After using [Earthshatter], every [Rocket Hammer] swing launches a [Fire Strike] for 4s.",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Ironclad Cleats",
          description: "+25 Armor, +5% Weapon Power, +40% Knockback Resist",
          price: 3750,
          category: "Weapon",
        },
        {
          name: "Rocket Boots",
          description:
            "+25 Health, holding crouch increases the height of your next jump by up to 200%",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Boost Recycler",
          description:
            "+10% Ability Power, if [Charge] is interrupted by the enemy, refund 50% of [Charge]'s cooldown",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Crusader's Cure",
          description:
            "+25 Health, using [Charge] cleanses all negative effects",
          price: 3750,
          category: "Survival",
        },
        {
          name: "Overclocked Barrier",
          description:
            "+25 Health, +20% Barrier Field Health, +20% [Barrier Field] Size",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Chimera's Maw",
          description: "+10% Ability Power, +50% Fire Strike Radius",
          price: 4000,
          category: "Ability",
        },
      ],
      epic: [
        {
          name: "Dampener Grip",
          description:
            "+10% Ability Power, +10% Attack Speed, when you deal damage with [Rocket Hammer], reduce the cooldown of your abilities by 1s",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Plan Z",
          description:
            "+10% Weapon Power, Gain 3% Attack Speed for every 100 missing Life, up to 30%",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Gryphon Glider",
          description:
            "+25 Health, +10% Ability Lifesteal, you can now fly during [Charge]",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Infusion Generator",
          description:
            "+25 Health, Increase [Barrier Field] Health by 100% of your max Life",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Phoenix Protocol",
          description:
            "+25 Health, [Barrier Field] regenerates 50% faster and begins regenerating 50% sooner after being destroyed",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Rocket Strike",
          description: "+20% Ability Power, +50% Fire Strike Projectile Speed",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Reaper",
    role: "Damage",
    hp: 300,
    powers: [
      {
        name: "Revolving Ruin",
        description:
          "Close-range (7m) [Hellfire Shotgun] hits grant 5% Attack Speed for 1s, stacking up to 8 times",
      },
      {
        name: "Shrouded Shrapnel",
        description:
          "Using [Wraith Form] increases the number of pellets per shot in your next magazine by 25% and its spread by 50%",
      },
      {
        name: "Death Step",
        description:
          "After using [Shadow Step], cast [Death Blossom] for 1.5s with 50% reduced damage",
      },
      {
        name: "Strangle Step",
        description: "After using [Shadow Step], double your Lifesteal for 3s",
      },
      {
        name: "Spirited To Slay",
        description: "Eliminations reset your cooldowns",
      },
      {
        name: "Backstabber",
        description:
          "After using an ability, your next shot deals 50% additional damage over 3s to enemies struck from behind",
      },
      {
        name: "Wraith Renewal",
        description:
          "While in [Wraith Form], restore 10% of your Life every 1s. Double this while below 50% Life.",
      },
      {
        name: "Ghosted",
        description:
          "While in [Wraith Form], passing through enemies slows their Move Speed and Attack Speed by 30% for 3s",
      },
      {
        name: "Silent As The Grave",
        description:
          "Your footsteps and [Shadow Step] are significantly quieter",
      },
      {
        name: "Shared Siphon",
        description:
          "[The Reaping] also heals the nearest ally within 10m for 30% of Reaper's damage dealt",
      },
      {
        name: "Harvest Fest",
        description:
          "[Hellfire Shotgun] hits have a 10% chance to spawn a Soul Globe. When picked up, restore 25% Life, 25% Ammo, and gain 25% Move Speed for 3s",
      },
      {
        name: "Vampiric Touch",
        description:
          "Hits with [Quick Melee] mark enemies for 5s. Allies gain 20% Lifesteal against marked enemies",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Spectral Slugs",
          description:
            "+5% Attack Speed, +25% Magazine Size, using [Shadow Step] restores 100% of your ammo",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Neverfrost",
          description:
            "+25 Health, +5% Weapon Power, reduce effectiveness of enemy slows by 50%",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Pocket Mist",
          description: "+25 Health, while below 50% Life, gain 20% Move Speed",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Devastation",
          description:
            "+15% Ability Lifesteal, each [Death Blossom] elimination increases your Health by 25 until the end of the round, up to 100 Health",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Wretched Wings",
          description:
            "+25 Health, While in Wraith Form, gain the ability to fly and gain 20% Move Speed",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Dauntless Draught",
          description:
            "+50 Health, +15% Move Speed during Wraith Form, +33% Wraith Form Duration",
          price: 10000,
          category: "Survival",
        },

        {
          name: "Nightcreeper",
          description:
            "+10% Move Speed, +30% [Shadow Step] Cast Speed, using [Wraith Form] reduces the cooldown of [Shadow Step] by 2s",
          price: 9500,
          category: "Ability",
        },

        {
          name: "Crimson Cloak",
          description:
            "+25 Health, +10% Ability Power, gain 15% of max Health as Overhealth while using [Death Blossom]",
          price: 11000,
          category: "Survival",
        },
        {
          name: "Crowd Control",
          description:
            "+15% Ability Power, [Death Blossom] gains 5% Ability Power for each enemy within its range",
          price: 11000,
          category: "Ability",
        },
        {
          name: "Wreath Of Ruin",
          description:
            "+20% Ability Power, +25% Death Blossom Radius, +20% Move Speed during Death Blossom",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Onslaught",
          description:
            "+25% Max Ammo, every 3rd shot fires both of your [Hellfire Shotguns]. The extra shot does not consume ammo but deals 80% reduced damage",
          price: 10000,
          category: "Weapon",
        },
      ],
    },
  },
  {
    name: "Soldier 76",
    role: "Damage",
    hp: 250,
    powers: [
      {
        name: "Super Visor",
        description:
          "After using [Helix Rocket], activate [Tactical Visor] for 0.75s",
      },
      {
        name: "Chaingun",
        description:
          "While continuously shooting [Pulse Rifle], each shot grants 0.5% Weapon Power, stacking up to 100 times",
      },
      {
        name: "Biotic Bullseye",
        description:
          "While in [Biotic Field], critical hits restore 5% Max Ammo and extend the field's duration by 0.5s (up to 5s)",
      },
      {
        name: "Back Off",
        description:
          "Enemies within your [Biotic Field] take damage equal to 100% of its healing output",
      },
      {
        name: "On Me!",
        description:
          "[Biotic Field] moves with you and grants you 20% increased max Health while active",
      },
      {
        name: "Frontliners",
        description:
          "Allies in range of your [Biotic Field] when it spawns gain Overhealth equal to 30% of your max Life for 3s",
      },
      {
        name: "Hunker Down",
        description:
          "When [Helix Rocket] deals damage, creates a [Biotic Field] with a 70% reduced duration at your position",
      },
      {
        name: "Cratered",
        description:
          "Increase [Helix Rocket] explosion radius by 40% and explosion damage by 25%",
      },
      {
        name: "Double Helix",
        description:
          "[Helix Rocket] fires a second homing [Helix Rocket] that deals 70% reduced damage",
      },
      {
        name: "Man On The Run",
        description:
          "During [Sprint], restore 10% of your Ammo every 1s and increase your Max Ammo by 10% until you reload, stacking up to 10 times",
      },
      {
        name: "Track and Field",
        description:
          "During [Sprint], [Biotic Field] cooldown refreshes 150% faster",
      },
      {
        name: "Peripheral Pulse",
        description:
          "During [Tactical Visor], [Pulse Rifle] shoots at 1 additional enemy, dealing 50% damage",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Pulse Converter",
          description:
            "+5% Attack Speed, +5% Cooldown Reduction, [Helix Rocket] damage restores 20% of your ammo",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Battery Pack",
          description: "+10% Ability Power, +30% Biotic Field Duration",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Bomb Diffusal Boots",
          description:
            "+25 Health, +5% Weapon Power, 90% Reduced [Helix Rocket] Self-Damage, When you damage yourself with [Helix Rocket], it knocks you back 200% further",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Compression Fatigues",
          description: "+25 Health, +5% Attack Speed, +25% [Sprint] Move Speed",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Rapid Response Radius",
          description:
            "+10% Ability Power, +30% Biotic Field Radius, [Biotic Field] heals allies below 50% Life for 10% more",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Iron Lung",
          description:
            "+25 Health, while using [Sprint], gain Overhealth equal to 5% of your max Life every 1s, up to 25%, for 5s",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Endgame Equalizer",
          description:
            "+25 Health, +15% Ability Power, when you spend your Ultimate Charge, reset all ability cooldowns. While [Tactical Visor] is active, gain 20% Cooldown Reduction",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Mercy",
    role: "Support",
    hp: 225,
    powers: [
      {
        name: "Battle Medic",
        description:
          "Every 1s your Staff is attached, [Caduceus Blaster] gains +4% Attack Speed (stacks 10 times) until you reload or swap to your Staff",
      },
      {
        name: "First Responder",
        description:
          "When you [Resurrect] an ally, you both gain 250 Overhealth for 6s",
      },
      {
        name: "The Whambulance",
        description:
          "When [Guardian Angel] ends, heal your target for 4 Life for every 1m you traveled",
      },
      {
        name: "Renaissance",
        description:
          "After successfully [Resurrect], gain [Valkyrie] for 5 seconds",
      },
      {
        name: "Equivalent Exchange",
        description:
          "You have 3 charges of [Resurrect] with 33% reduced cast time, but their cooldowns only reset at the start of the round",
      },
      {
        name: "Triage Unit",
        description:
          "When using [Guardian Angel] on allies below 50% HP, your [Caduceus Staff] heals them for 30% more for 3 sec",
      },
      {
        name: "Threads of Fate",
        description:
          "[Caduceus Staff] chains to your previous target for 3 sec at 50% effectiveness",
      },
      {
        name: "Protective Beam",
        description:
          "[Caduceus Staff] targets above 80% Life gain 10% damage reduction",
      },
      {
        name: "Serenity",
        description:
          "[Sympathetic Recovery] heals for 20% more and heals you even while healing a full health ally",
      },
      {
        name: "Distortion",
        description:
          "Allies boosted by your [Caduceus Staff] gain +20% Lifesteal",
      },
      {
        name: "Crepuscular Circle",
        description:
          "While [Valkyrie] is active, the healing and damage boost of [Caduceus Staff] are automatically applied to nearby allies",
      },
      {
        name: "Glass Extra Full",
        description:
          "Healing from [Caduceus Staff] targeting full health allies is converted to Overhealth, up to 50",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Mid-Air Mobilizer",
          description:
            "While airborne, gain : +5% Weapon Power, 10% Attack Speed",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Long Distance Wings",
          description: "+10% Ability Power, +33% [Guardian Angel] Range",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Aerodynamic Feathers",
          description:
            "+25 Health, while affected by [Angelic Descent], continuously gain 10% Move Speed every 1s up to 60%",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Angeleisure Wear",
          description:
            "+25 Health, while affected by [Angelic Descent] or [Guardian Angel], heal 3% of your Life every 1s",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Angelic Acrobatics",
          description:
            "+15% Guardian Angel Move Speed, [Guardian Angel]'s cooldown starts as soon as you jump or crouch",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Blessed Boosters",
          description:
            "+50 Health, Your launch velocity is increased by 25% when canceling [Guardian Angel] with crouch or jump",
          price: 9000,
          category: "Survival",
        },
        {
          name: "Chain Evoker",
          description:
            "+50 Armor, +5% [Caduceus Staff] damage boost, +15% Ultimate Charge gained from damage boost",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Celestial Clip",
          description:
            "+10% Weapon Power, +33% Max Ammo, [Caduceus Blaster] has a 10% chance to fire an extra shot that doesn't consume additional ammo",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Caduceus EX",
          description: "+10% Weapon Power, +33% [Caduceus Staff] Range",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Resurrection Rangefinder",
          description: "+10% Cooldown Reduction, +75% [Resurrection] Range",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Moira",
    role: "Support",
    hp: 225,
    powers: [
      {
        name: "Optimal Overflow",
        description:
          "After you spend 50 [Biotic Energy], launch the last selected [Biotic Orb] with 75% reduced duration",
      },
      {
        name: "Precarious Potency",
        description:
          "Allies healed by your [Biotic Grasp] are healed for an additional 20% of [Biotic Grasp]'s healing over 5s",
      },
      {
        name: "Deconstruction",
        description:
          "After you spend 50 [Biotic Energy], deal 20% increased damage for 6s",
      },
      {
        name: "Ethereal Excision",
        description:
          "While aiming at an enemy's head with [Biotic Grasp]'s secondary fire, gain 30% Lifesteal, 30% Move Speed, and restore 100% increased Biotic Energy",
      },
      {
        name: "Chain Grasp",
        description:
          "After using [Biotic Orb], [Biotic Grasp]'s secondary fire chains to 2 additional targets within 10m for 3s",
      },
      {
        name: "Empowering You",
        description:
          "[Biotic Grasp]'s secondary fire can target allies, increasing their damage by 15%",
      },
      {
        name: "Cross-Orbal",
        description:
          "[Biotic Orb] launches an additional [Biotic Orb] of the other type with 50% reduced capacity",
      },
      {
        name: "Multiball",
        description:
          "[Biotic Orb] launches 2 additional orbs of the chosen type with 85% reduced effectiveness",
      },
      {
        name: "Phantasm",
        description:
          "When you use [Fade], spawn a stationary copy of the last selected [Biotic Orb] with 50% reduced duration",
      },
      {
        name: "Scientific Deathod",
        description:
          "While using [Fade], passing through enemies grants 5% Ultimate Charge and Overhealth equal to 15% of your max Life",
      },
      {
        name: "Voidhoppers",
        description:
          "[Fade] phases other allies within 8m for 0.25s and grants them Overhealth equal to 20% of your max Life",
      },
      {
        name: "Destruction's Divide",
        description:
          "[Coalescence] can be toggled between pure healing or pure damage, with 25% greater effect",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Bio-Needles",
          description:
            "+10% Attack Speed, [Biotic Grasp]'s secondary fire restores 50% more [Biotic Energy]",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "High Capacity Tubing",
          description: "+10% Weapon Power, +50 Max [Biotic Energy]",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Smart Orbs",
          description:
            "+5% Ability Power, [Biotic Orb] moves 50% slower while it is healing or dealing damage",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Levitation Shawl",
          description:
            "+10% Ability Power, During [Coalescence] gains free flight",
          price: 4500,
          category: "Ability",
        },
        {
          name: "Abyss Boots",
          description: "+25 Health, while using [Fade], you jump 30% higher",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Subatomic Splitter",
          description:
            "+10% Weapon Power, +15% [Biotic Grasp] Secondary Fire Range",
          price: 11000,
          category: "Weapon",
        },

        {
          name: "Extendrils",
          description: "+15% Ability Power, +30% [Biotic Orb] Tendril Range",
          price: 11000,
          category: "Ability",
        },

        {
          name: "Alternative Energy",
          description:
            "+10% Ability Power, +15% Attack Speed, when you use [Fade], refill your [Biotic Energy]",
          price: 10000,
          category: "Weapon",
        },

        {
          name: "Coalegion",
          description:
            "+25 Health, +15% Ability Power, allies healed by [Coalescence] deal 15% increased damage",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "D.Va",
    role: "Tank",
    hp: 550,
    powers: [
      {
        name: "Focused Fusion",
        description:
          "[Fusion Cannon]'s spread is reduced by 66% and damage falloff range is 20m farther",
      },
      {
        name: "Legendary Loadout",
        description:
          "[Micro Missiles] are replaced with 6 Heavy Rockets, which deal 350% more explosive damage and have 100% increased radius",
      },
      {
        name: "Overstocked",
        description: "Gain 1 extra charge of [Micro Missiles]",
      },
      {
        name: "Countermeasures",
        description:
          "When you mitigate 150 damage with [Defense Matrix], automatically fire 2 [Micro Missiles]",
      },
      {
        name: "Ignition Burst",
        description:
          "[Boosters] leave a trail of lava that deals 30 damage every 1s",
      },
      {
        name: "MEKA Punch",
        description:
          "While using [Boosters], [Quick Melee] deals 75% more damage. [Quick Melee] eliminations reset the cooldown of [Boosters]",
      },
      {
        name: "Tokki Slam",
        description:
          "During [Boosters], use crouch to slam the ground, dealing damage equal to 20% of your max Armor and knocking up enemies hit",
      },
      {
        name: "Facetanking",
        description:
          "[Defense Matrix] heals you for 30% of the damage it blocks",
      },
      {
        name: "Ultrawide Matrix",
        description:
          "Increase the size of Defense Matrix by 50% and its duration by 20%",
      },
      {
        name: "Stat Boost",
        description:
          "During the first 2s of [Boosters], [Defense Matrix] recovers 100% faster",
      },
      {
        name: "Party Protector",
        description:
          "When you use [Self-Destruct], allies within [Self-Destruct] radius gains 250 Overhealth for 8s",
      },
      {
        name: "Express Detonation",
        description: "Self-Destruct explosion is triggered 15% faster",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Dae-hyun's Detonator",
          description:
            "+15% Ability Lifesteal, if your [Mech] detonates while mid-air, increase [Self-Destruct] explosion damage and range by 200%",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Mastermind's Mitigator",
          description:
            "Every 300 damage you mitigate with [Defense Matrix] reduces [Micro Missiles] cooldown by 1s",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Vesuvius Protocol",
          description:
            "+10% Ability Power, using [Self-Destruct] drops lava nearby that deals 30 damage every 1s",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Galvanized Core",
          description: "+25 Health, 25% [Boosters] Duration",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Plot Armor",
          description:
            "+25 Armor, while [Defense Matrix] is active, gain 30% damage reduction against beams",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Solo Spec",
          description:
            "+25 Health, when you mitigate damage with [Defense Matrix], gain Shields equal to 10% of the damage mitigated, up to 100. Resets when your [Mech] is destroyed",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Busan Blaster",
          description:
            "+20% Ability Power, [Light Gun] gains a secondary fire, which charges up to fire a piercing shot that deals 80 piercing damage",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Nano Cola™ Nitrous",
          description:
            "+50 Health, when you eject from your Mech, gain 25% increased max Health and gain [Nano Boost] for 8s",
          price: 11000,
          category: "Survival",
        },
        {
          name: "Chip-Damage Diverter",
          description:
            "+50 Health, when you deal damage to Barriers while in your [Mech], gain Shields equal to 10% of the damage dealt, up to 200. Resets when your [Mech] is destroyed",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Multi-Task Mod",
          description:
            "+10% Weapon Power, [Fusion Cannons] can now be fired while using [Defense Matrix]",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Singijeon's Pulse Plating",
          description:
            "+50 Health, gain 5% of damage mitigated by [Defense Matrix] as Ultimate Charge",
          price: 10000,
          category: "Survival",
        },
        {
          name: "APM AMP",
          description:
            "+50 Shield, when you use [Boosters], allies within 16m gain 25% Move Speed for 2s",
          price: 9000,
          category: "Survival",
        },
        {
          name: "Onslaught Ordinance",
          description:
            "+15% Ability Power, the quantity and duration of [Micro Missiles] is increased by 20%",
          price: 12000,
          category: "Ability",
        },
        {
          name: "Macro Missiles",
          description:
            "[Micro Missiles] deal 25% increased damage and have significantly increased knockback",
          price: 12000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Genji",
    role: "Damage",
    hp: 250,
    powers: [
      {
        name: "Wyrm's Maw",
        description:
          "Targets hit by your [Shurikens] take 10% more damage from [Swift Strike] for 4s, stacking up to 5 times",
      },
      {
        name: "Laceration",
        description:
          "[Swift Strike] deals 25% additional damage over 3s to enemies hit",
      },
      {
        name: "Iaido Strike",
        description:
          "After [Deflect] ends, you quickly swing your [Dragonblade] once",
      },
      {
        name: "Hidden Blade",
        description: "Gain 50% Melee Lifesteal and +25 Quick Melee Damage",
      },
      {
        name: "Forged Under Fire",
        description:
          "While [Deflect] is active, heal for 60% of the damage it prevents",
      },
      {
        name: "Sacred Shuriken",
        description:
          "[Shuriken]'s primary fire throws 2 additional [Shuriken] that don't consume any extra ammo",
      },
      {
        name: "Hanamura Healing",
        description:
          "Critical hits and [Swift Strike] grant Overhealth equal to 25% of their damage dealt for 5s",
      },
      {
        name: "Spirit of Sojiro",
        description:
          "When [Deflect] stops incoming damage, reduce the cooldown of [Swift Strike] by 1s, up to 5s",
      },
      {
        name: "Dragon's Breath",
        description:
          "[Dragonblade] swings also fire a large piercing projectile that deals 50% of [Dragonblade]'s damage",
      },
      {
        name: "Cybernetic Speed",
        description:
          "Dealing damage with [Shuriken] grants 2% [Shuriken] Attack Speed for 3s, stacking up to 15 times",
      },
      {
        name: "Hashimoto's Bane",
        description:
          "After using an ability, your next secondary fire throws 2 extra [Shuriken] that seek enemies but deal 50% less damage",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Spiked Grip",
          description:
            "+30% Max Ammo, while climbing restore 20% of your ammo every 1s",
          price: 3750,
          category: "Weapon",
        },
        {
          name: "Traversal Kinetics",
          description:
            "[Swift Strike] cooldown is reduced by 50% if it deals no damage",
          price: 3750,
          category: "Ability",
        },
        {
          name: "Ninja Soles",
          description:
            "+5% Cooldown Reduction, +15% Move Speed during [Deflect]",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Anti-Beam Coating",
          description:
            "+25 Armor, +5% Attack Speed, [Deflect] blocks Beam attacks",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Equilibrium Gear",
          description:
            "+25 Health, while climbing, heal 5% of your Life every 1s",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Sparrowhawk Feather",
          description: "+25 Health, Gain an additional jump",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Ambusher Optics",
          description:
            "+25% Quick Melee damage, [Quick Melee] can critically hit when hitting enemies from behind, dealing 50% increased damage",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Enduring Edge",
          description: "+10% Weapon Power, 4s [Dragonblade] Duration",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Swift-Loader",
          description:
            "+10% Attack Speed, +30% Max Ammo, damaging an enemy with [Swift Strike] restores 20% of your ammo",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Clean Sweep",
          description:
            "+10% Ability Power, +15% Ability Lifesteal, +50% [Swift Strike] Width",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Deflecting Dash",
          description:
            "+15% Ability Power, during [Swift Strike], deflect incoming projectiles toward your reticle",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Slicy Coolant",
          description:
            "+50 Armor, +5% Cooldown Reduction, +1s Deflect Duration",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Transference Delta",
          description:
            "15% Ultimate Cost Reduction, convert 100 Health to Armor, when you use Dragonblade, heal your Armor fully",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Orisa",
    role: "Tank",
    hp: 475,
    powers: [
      {
        name: "Scorched Earth",
        description:
          "When you [Overheat], apply Burning to enemies within 6m, dealing damage equal to 10% of your max Life over 5s",
      },
      {
        name: "Shield Divergence",
        description:
          "When you [Overheat], deploy a Barrier with 600 Health in front",
      },
      {
        name: "Advanced Throwbotics",
        description:
          "When you use [Javelin Spin], launch an [Energy Javelin] with 50% less damage",
      },
      {
        name: "Spynstem Update",
        description:
          "[Javelin Spin] now deflects projectiles and grants 20% of damage dealt from deflecting as Ultimate Charge",
      },
      {
        name: "Hot Rotate-O",
        description:
          "[Javelin Spin] gains 35% Cooldown Reduction but now generates [Heat]",
      },
      {
        name: "Factory Reset",
        description:
          "While [Fortify] is active, [Javelin Spin] and [Energy Javelin] gain 25% Cooldown Reduction",
      },
      {
        name: "Lassoed",
        description:
          "On impact, [Energy Javelin] will pull enemies within 4m towards itself",
      },
      {
        name: "Ride With Me",
        description:
          "While [Fortify] is active, grant allies in line of sight 30% Move Speed and Overhealth equal to 10% of your max Life",
      },
      {
        name: "Hooves of Steel",
        description:
          "After [Fortify] ends, gain Shields equal to 50% of the damage received during [Fortify]. Resets when you next use [Fortify]",
      },
      {
        name: "Restortify",
        description:
          "While [Fortify] is active, heal for 10% of your max Life every 1s",
      },
      {
        name: "Centripetal Charge",
        description:
          "25% Ultimate Cost Reduction. After using [Terra Surge], reset your ability cooldowns",
      },
      {
        name: "Supercharger",
        description:
          "When you use [Terra Surge], drop a [Supercharger] that increases the damage of nearby allies by 25% for 15s",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Electro Lights",
          description:
            "+10% Attack Speed, recover from being [Overheated] 25% faster",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Enhanced Target Sensors",
          description: "Deal 25% more damage to enemies farther than 12m away",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Optimized Energy",
          description:
            "+10% Weapon Power, Critical Hits reduce your [Heat] by 5%",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Arcfinder",
          description:
            "[Energy Javelin] deals 25% increased damage to enemies farther than 12m away",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Elite Rotator Cuff",
          description: "+10% Ability Power, 35% [Javelin Spin] Duration",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Refraction Tiles",
          description:
            "+25 Armor, while [Javelin Spin] is active, gain 50% damage reduction to beams",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Charged Chassis",
          description:
            "+25 Health, [Fortify] grants additional Overhealth equal to 10% of your Max Life",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Siphonic Spear",
          description:
            "When you deal damage with [Energy Javelin], heal 10% of your max Life over 3s",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Solar Regenergy",
          description:
            "+25 Health, after using an ability, restore your Armor equal to 5% of your Max Life",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Efi's Theorem",
          description: "+20% Ability Lifesteal, +50% Fortify Duration",
          price: 10000,
          category: "Ability",
        },
        {
          name: "3D-Printed Lance",
          description:
            "+15% Ability Power, [Energy Javelin] cooldown is reduced by 15%, but each use generates 25 [Heat]",
          price: 11000,
          category: "Ability",
        },
        {
          name: "Oladele-copter Blades",
          description:
            "+15% Ability Power, while using [Javelin Spin], gain free flight and 20% Move Speed",
          price: 12000,
          category: "Ability",
        },
        {
          name: "HollaGram Helmet",
          description:
            "+50 Armor, when you use [Fortify], all allies within line of sight gains unstoppable for 2s",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Junker Queen",
    role: "Tank",
    hp: 375,
    powers: [
      {
        name: "Thrill of Battle",
        description:
          "[Adrenalin Rush] also heals allies within 12m for 50% of the amount it heals you",
      },
      {
        name: "Royal Bullets",
        description:
          "[Scatter Gun] critical hits against targets within 12m applies [Wound] for 30 damage over 3s",
      },
      {
        name: "Twist the Knife",
        description:
          "[Scatter Gun] critical hits extend the duration of all [Wounds] on the target by 0.5s",
      },
      {
        name: "Blade Parade",
        description:
          "Holding [Jagged Blade] charges it, increasing its damage by up to 35% and causing it to knockback",
      },
      {
        name: "Cut'em, Gracie!",
        description:
          "Each enemy hit by [Jagged Blade] while it returns to you reduces its cooldown by 1s",
      },
      {
        name: "Let's go Win",
        description: "Eliminations reset the cooldown of [Commanding Shout]",
      },
      {
        name: "Merciless Magnetism",
        description:
          "Using [Commanding Shout] causes your [Jagged Blade] to home to a target",
      },
      {
        name: "Reckoner's Roar",
        description:
          "Using [Commanding Shout] [Wounds] enemies within 10m for 30 damage over 3s",
      },
      {
        name: "Chop chop",
        description:
          "[Carnage] gains an additional charge but its cooldown reduction per hit is reduced to 1s",
      },
      {
        name: "Soaring Stone",
        description:
          "[Carnage] becomes a leaping strike if ou jump during its cast time",
      },
      {
        name: "Bloodcrazed",
        description:
          "[Carnage] and [Rampage] gives 15% of Max Life as Overhealth per hit",
      },
      {
        name: "Bow down",
        description: "[Rampage] now also knocks down enemy hit for 1.5s",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Gutpunch Gauntlet",
          description:
            "+10% Weapon Power, while not holding [Jagged Blade], [Quick Melee] deals 75% more damage and knocks back",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Monarch's Decree",
          description:
            "+5% Weapon Power, [Commanding Shout] grants you +15% Attack Speed",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Bigger Magnet",
          description:
            "+10% Ability Power, [Jagged Blade]'s pull strength is increased by 35%",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Dew's Damage Dampener",
          description:
            "+25 Health, +50% Knockback Resistance, When knockback, gain 25%  increased Move Speed for 3s",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Rebellious Spirit",
          description:
            "+25 Health, When [Wound] gets removed instead of expiring, gain 10% of Max Life as Overhealth, up to 150",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Slicing Spree",
          description:
            "+10% Move Speed, While within 12m of an enemy with a [Wound], gain 10% Move Speed and 5% Attack Speed",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Shred and Lead",
          description:
            "+33% Max Ammo, +10% Weapon Lifesteal, When you [Wound] an enemy, gain 10% Attack Speed for 4s, stacking up to 3 times",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Bloodhound Mask",
          description:
            "+15% Weapon Power, Gain 5% Weapon Power for each enemy with a [Wound] within 12m",
          price: 12000,
          category: "Weapon",
        },
        {
          name: "Tinker Tracksuit",
          description:
            "+5% Cooldown Reduction, +10% Ability Lifesteal, [Rampage] and [Carnage] hits grant 10% Attack Speed for 4s",
          price: 9500,
          category: "Ability",
        },
        {
          name: "Booming Voice",
          description:
            "+25% Ability Power, +50% [Commanding Shout] Radius, [Commanding Shout] will affect allies that are out of line of sight",
          price: 11000,
          category: "Ability",
        },
        {
          name: "Scav Scraps",
          description:
            "+50 Health, +5% Cooldown Reduction, [Carnage] and [Jagged Blade] impacts damage grants Overhealth equal to 40% of damage dealt",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Thick Skull",
          description:
            "+50 Armor, While casting [Rampage] or [Carnage], gain 50% damage reduction",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Undying Loyalty",
          description:
            "+50 Health, +30% [Commanding Shout] Overhealth, Allies affected by [Commanding Shout] are healed for 5% of Junker Queen 's life every second",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Zarya",
    role: "Tank",
    hp: 400,
    powers: [
      {
        name: "No Limits",
        description:
          "Maximum [Energy] increased to 150. [Energy] always decays above 100 [Energy] at a 150% faster rate",
      },
      {
        name: "Particle Accelerator",
        description:
          "Gain 15% Attack Speed for [Particle Cannon]'s secondary fire. After using an ability, quadruple this bonus for 5s",
      },
      {
        name: "Piercing Beam",
        description:
          "Above 80 [Energy], [Particle Cannon]'s Primary Fire will pierce enemies",
      },
      {
        name: "Pre-Workout",
        description:
          "Gain Weapon Lifesteal and Ability Lifesteal equal to 20% of [Energy]",
      },
      {
        name: "Barrier Benefits",
        description:
          "When [Barrier] expires, grand Overhealth equal to 50% if remaining  [Barrier] Health to the target for 3s",
      },
      {
        name: "Containment Field",
        description:
          "[Barrier] heals 25 Life, increased by [Energy], and grants 20% Move Speed while active",
      },
      {
        name: "Fission Field",
        description:
          "[Projected Barrier] also applies to 1 additional ally within 10m, but has 20% reduced duration",
      },
      {
        name: "Here to Spot You",
        description:
          "[Projected Barrier] pulls you to the targeted ally and heals you for 15% of Max Life over 3s",
      },
      {
        name: "Lifelift",
        description:
          "+50% [Particle Barrier] size. Increase [Particle Barrier] Health by 100% of Bonus Max Life.",
      },
      {
        name: "Major Flex",
        description:
          "[Barrier] knocks back and deal 25 damage, increased by [Energy], to enemies within 5m every 1s",
      },
      {
        name: "Volskaya Vortex",
        description:
          "After a [Barrier] is cast, [Particle Cannon]'s next secondary fire spawns a slowing vortex tat deals 100 damage over 2s",
      },
      {
        name: "Graviton Anomaly",
        description:
          "25% Ultimate Cost Reduction [Graviton Surge] base damage is increased to 30 and increased by [Energy], but has 50% reduced duration",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Hybrid Battery",
          description: "+5% Weapon Power, [Energy] cannot be reduced below 20.",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Beyond Barrier",
          description: "+10% Ability Power, +20% [Porjected Barrier] range",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Blastproof Boots",
          description:
            "+25 Health, +5% Move Speed, [Particle Cannon]'s secondary fire self knockback is increased by 100% and no longer damages yourself.",
          price: 3750,
          category: "Survival",
        },
        {
          name: "Jumper Cables",
          description:
            "+25 Shields, +5% Ability Power, After using a [Barrier], start regenerating Shields instantly",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Protein Shake",
          description:
            "+25 Health, +15% Melee Damage, While [Particle Barrier] is active, become unstoppable and [Quick Melee] knocks back enemies.",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Light Launcher",
          description:
            "+15% Weapon Power, Consecutive [Particle Cannon] secondary fire sots consume 20% less Ammo, up to 60% for your current magazine",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Bigger Beam",
          description:
            "+10% Weapon Power, [Particle Cannon]'s primary fire range is increased by 20%",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Lynx's Datadrive",
          description:
            "+25 Health, +15% Ability Power, Casting [Projected Barrier] on an refunds 20% of [Barrier] cooldown",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Superconductor",
          description:
            "+25 Health, +15% Ability Power, +40% [Barrier] Duration",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Kiriko",
    role: "Support",
    hp: 225,
    powers: [
      {
        name: "Foxy Fireworks",
        description:
          "After reloading, your next 3 thrown [Kunai] explode on contact, dealing 20 damage to nearby enemies",
      },
      {
        name: "Keen Kunai",
        description:
          "Kunai critical hits decreases active ability cooldowns by 15% and refund 3 ammo",
      },
      {
        name: "Triple Threat",
        description:
          "After using [Swift Step], for 4s, your secondary fire throws 2 additional [Kunai] in a spread that deal 50% less damage",
      },
      {
        name: "Leaf On The Wind",
        description:
          "[Healing Ofuda] bounces to another ally up to 2 times, healing for 30% of the normal amount",
      },
      {
        name: "Self-Care",
        description:
          "When you use [Healing Ofuda], heal yourself for 5% of your max Life",
      },
      {
        name: "Supported Shooting",
        description:
          "When [Healing Ofuda] heals allies, grant them 20% increased Attack Speed for 3s",
      },
      {
        name: "Fleet Foot",
        description: "[Swift Step] can be used directionally without a target",
      },
      {
        name: "Clone Conjuration",
        description:
          "After using [Swift Step], create a clone of yourself that lasts for 5s",
      },
      {
        name: "Two-Zu",
        description: "[Protection Suzu] gains an additional charge",
      },
      {
        name: "Cleansing Charge",
        description:
          "When you cleanse negative effects with [Protection Suzu], gain 5% Ultimate Charge for each hero cleansed",
      },
      {
        name: "Crossing Guard",
        description:
          "[Kitsune Rush] now also reduces enemies Move Speed by 50% for 2s",
      },
      {
        name: "Spirit Veil",
        description:
          "Using [Kitsune Rush] cleanses Kiriko of negative effects and make her invulnerable for 4s",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Asa's Armaments",
          description: "+10% Attack Speed, [Kunai] bounce off surfaces 1 time",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Farsight Focus Sash",
          description:
            "+10% Weapon Power, when you deal damage, gain 200% [Healing Ofuda] Projectile Speed for 5s",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Teamwork Toolkit",
          description:
            "+10% Weapon Power, when you heal an ally, grant them 10% increased Move Speed for 3s",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Eye Of The Yokai",
          description: "+10% Ability Power, 35% [Kitsune Rush] Duration",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Cyclist Gloves",
          description: "When you use an ability gain 20% Attack Speed for 3s",
          price: 5000,
          category: "Ability",
        },
        {
          name: "Kitsune Kicks",
          description: "+10% Move Speed, gain the ability to [Double Jump]",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Ryōta's Reloader",
          description:
            "+35% Reload Speed, after casting an ability, restore 100% of your ammo",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Spirits' Guidance",
          description:
            "+15% Weapon Power, 100% [Healing Ofuda] Projectile Speed",
          price: 12000,
          category: "Weapon",
        },
        {
          name: "Donut Delivery",
          description:
            "+10% Ability Power, [Swift Step] heals nearby allies by 80 Life over 2s",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Our Bikes",
          description:
            "+25 Health, +15% Ability Power, allies affected by [Kitsune Rush] are healed for 80 every 1s",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Talisman of Velocity",
          description:
            "+15% Ability Power, [Protection Suzu] grants 25% Attack Speed and 25% Move Speed for 4s",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Goddess's Aura",
          description:
            "+25 Health, after using [Swift Step], you gain 100 Overhealth for 4s",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Talisman of Life",
          description:
            "+20% Ability Power, [Protection Suzu] grants 100 Overhealth for 5s",
          price: 11000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Ana",
    role: "Support",
    hp: 250,
    powers: [
      {
        name: "No Scope Needed",
        description:
          "Landing unscoped shots with [Biotic Rifle] grants 10% Attack Speed for 2s, stacking up to 3 times",
      },
      {
        name: "Tactical Rifle",
        description:
          "While scoped, [Biotic Rifle] will lock-on to allies for guaranteed hits",
      },
      {
        name: "Pinpoint Prescription",
        description:
          "[Biotic Rifle] can now critically hit both allies and enemies",
      },
      {
        name: "Dreamy",
        description:
          "[Sleep Dart] can hit allies, healing 100% of their max Life over 8s instead of putting them to sleep",
      },
      {
        name: "Comfy Cloud",
        description:
          "[Sleep Dart] explodes on contact, hitting targets within 3m, but Sleep has a 50% reduced duration",
      },
      {
        name: "Sleep Regimen",
        description:
          "Gain 50 Health. When you apply Sleep to an enemy, gain 10 Health, up to 150",
      },
      {
        name: "Home Remedy",
        description:
          "[Biotic Grenade] applies Overhealth equal to 100% of its healing",
      },
      {
        name: "Venomous",
        description:
          "[Biotic Grenade] deals an additional 30 damage over its duration to enemies affected by it",
      },
      {
        name: "Time Out",
        description:
          "[Biotic Grenade] now knocks enemies back and reduces their Move Speed by 50% for 1.5s",
      },
      {
        name: "Your Full Potential",
        description:
          "[Nano Boost] also grants the target 20% Ultimate Charge and 200 Overhealth",
      },
      {
        name: "My Turn",
        description:
          "[Nano Boost] also applies to yourself for 50% of its duration",
      },
      {
        name: "Our Turn",
        description:
          "[Nano Boost] also affects other visible allies, but it has a 50% reduced duration on them",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Target Tracker",
          description:
            "+15% Biotic Grenade Duration, for each enemy or ally affected by [Biotic Grenade], gain 5% Attack Speed, up to 25%",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Potent Projectiles",
          description:
            "+10% Weapon Power, Unscoped [Biotic Rifle] projectiles are 100% larger",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Quick Scope",
          description:
            "+5% Weapon Power, +200% Faster Scope Speed, Deal 20% more damage to airborne enemies",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Double Dosage",
          description:
            "+25 Health, landing a [Sleep Dart] on target affected by [Biotic Grenade] reduces its cooldown by 35%",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Dash Boots",
          description:
            "+5% Movement Speed, jumping in mid-air will dash you a short distance",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Perfected Formula",
          description: "+25 Shields, +15% Nano Boost Duration",
          price: 4000,
          category: "Survival",
        },
        {
          name: "I.V. Drip",
          description:
            "+25 Health, while affected by [Biotic Grenade], Ana gains 100 Overhealth",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Unscoped Resources",
          description:
            "+4 Max Ammo, Unscoped [Biotic Rifle] shots have a 50% chance not to consume Ammo",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Tranquilizer",
          description:
            "[Sleep Dart] gains: 500% Collision Size, 100% Projectile Speed, 20% Sleep Duration",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Lethal Dose",
          description:
            "+50% Ability Lifesteal, [Sleep Dart] direct hit deals 100 bonus damage",
          price: 9000,
          category: "Ability",
        },
        {
          name: "Grenadius Pin",
          description: "+30% Biotic Grenade Radius, +20% Ability Power",
          price: 12000,
          category: "Ability",
        },

        {
          name: "Cluster Core",
          description:
            "+25% Ability Lifesteal, [Biotic Grenade] cooldown is reduced by 1s for each target it hits",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Eye of Horus",
          description:
            "+50 Shields, [Nano Boost] can target allies through walls and its range is increased to 60m",
          price: 9000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Cassidy",
    role: "Damage",
    hp: 275,
    powers: [
      {
        name: "Quick Draw",
        description:
          "After using [Combat Roll], [Peacekeeper]'s next primary fire can auto-aim within 9m while under cooldown",
      },
      {
        name: "Dead Man Walking",
        description:
          "Eliminating an enemy you've recently critically hit grants 1 Max Ammo for the round",
      },
      {
        name: "Full House",
        description:
          "For each Ammo available, [Peacekeeper]'s primary fire gains 1% increased damage, up to 25%",
      },
      {
        name: "Just Roll With It",
        description:
          "During [Combat Roll], prevent all incoming damage, after [Combat Roll] ends, heal 30% of your Life over 3s",
      },
      {
        name: "Bullseye",
        description: "Critical hit reduces [Combat Roll]'s cooldown by 2s",
      },
      {
        name: "Barrel Roll",
        description:
          "[Combat Roll] takes you 50% further and deals 65 damage to enemies",
      },
      {
        name: "Flash In The Pan",
        description:
          "Eliminating an enemy recently damaged by [Flashbang] grants 15% Ultimate Charge",
      },
      {
        name: "Think Flasht",
        description:
          "When you start a [Combat Roll], leave a [Flashbang] behind",
      },
      {
        name: "Hot Potato",
        description:
          "[Flashbang] adds 3 extra Ammo on hit until [Peacekeeper] is reloaded",
      },
      {
        name: "Easy Rider",
        description:
          "While using [Deadeye], gain 100 Overhealth and 25% Movement Speed",
      },
      {
        name: "Sunrise",
        description:
          "Using [Deadeye] slows all visible enemies by 35% for 1.5s",
      },
      {
        name: "Sunset",
        description: "[Deadeye] eliminations grant 15% Ultimate Charge each",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Quickload Chamber",
          description:
            "+20% Reload Speed, reloading within 6m of an enemy adds 20% of Max Ammo as extra Ammo",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Blackwatch Tech",
          description:
            "+10% Ability Power, [Deadeye] eliminations reduce [Flashbang] max cooldown by 10%, up to 40% for the round",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Streamlined Poncho",
          description:
            "+10% Cooldown Reduction, [Combat Roll] reduces [Flashbang] cooldown",
          price: 5000,
          category: "Ability",
        },
        {
          name: "Wanted Poster",
          description:
            "+25 Health, [Deadeye] eliminations reward extra 500 Stadium Cash each",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Competitive Analysis",
          description:
            "+20% Weapon Lifesteal, deal 15% increased primary fire damage to enemies in the Damage role",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Improvised Dynamite",
          description:
            "+20% Ability Power, +10% Cooldown Reduction, [Flashbang] explosion radius is increased by 50%",
          price: 11000,
          category: "Ability",
        },
        {
          name: "Eagle Eye",
          description:
            "+50 Health, Receives 25% less damage from enemy farther than 12m",
          price: 12000,
          category: "Survival",
        },
        {
          name: "Frankie's Fixer",
          description:
            "+50 Health, Heal 10 Life for each Ammo loaded using [Combat Roll]",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Ashe",
    role: "Damage",
    hp: 250,
    powers: [
      {
        name: "Reload Therapy",
        description: "When you reload a shot, heal 3% of your Life",
      },
      {
        name: "Head Honcho",
        description:
          "Each unscoped shot you land increases the damage of the next scoped shot you land by 3%, up to 30%. Resets on reload",
      },
      {
        name: "My Business, My Rules",
        description:
          "When you deal damage to a Burning enemy with [The Viper], reduce the cooldown of your abilities by 10%",
      },
      {
        name: "Incendiary Rounds",
        description:
          "While scoped, hitting the same target without missing deals 30 extra damage",
      },
      {
        name: "Incendiary Blast",
        description:
          "[Coach Gun] applies Burning, dealing 100 damage over 5s. If target was burning, deal extra 75 additional Ability Damage instantly",
      },
      {
        name: "Calamity",
        description:
          "Using [Coach Gun] reloads 2 Ammo. [The Viper]'s next 2 hits deal 40 additional damage over 3s",
      },
      {
        name: "Double Barreled",
        description: "[Coach Gun] gains an additional charge",
      },
      {
        name: "Early Detonation",
        description:
          "Shooting [Dynamite] reloads 5 Ammo and reduces the cooldown of [Dynamite] by 3s",
      },
      {
        name: "Molten Munitions",
        description:
          "When [Dynamite] explodes on the ground, it leaves lava that Burns enemies for 50 every 1s",
      },
      {
        name: "Out with a Bang",
        description:
          "When [Dynamite] explodes, it spawns 3 sticky explosives that deal 66% reduced damage",
      },
      {
        name: "Partners in Crime",
        description:
          "You are healed for 100% of [B.O.B.]'s damage dealt and [B.O.B.] is healed for 100% of your damage dealt",
      },
      {
        name: "B.O.B. Jr.",
        description:
          "[B.O.B.] costs 50% less Ultimate Charge but has reduced Life, 50% reduced Attack Speed, and is significantly smaller",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Maxed Mag",
          description:
            "+5% Attack Speed, Gain 3% Attack Speed for each remaining Ammo above 50% of your Max Ammo",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Tripod",
          description:
            "+5% Weapon Power, [The Viper], [Coach Gun], and [Dynamite] deal 10% more damage to enemies that are below you",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Greased Loader",
          description: "25% Max Ammo, +15% Reload Speed",
          price: 5000,
          category: "Weapon",
        },
        {
          name: "Furnace Fuel",
          description:
            "+25 Health, +5% Ability Power, When Burn gets removed instead of expiring, gain 3% Ultimate Charge",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Silver Lighter",
          description:
            "+10% Ability Power, Damage dealt to Burning targets grants 20% more Ultimate Charge",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Silver Spurs",
          description:
            "+25 Health, after using [Coach Gun], gain 20% Move Speed for 3s",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Ironsights",
          description:
            "+10% Attack Speed, when the target is further than 10m, scoped shot gains 1% damage for each meter",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Sidewinder",
          description:
            "+10% Attack Speed, when the target is within 10m, unscoped shot gains 15% increased damage",
          price: 11000,
          category: "Weapon",
        },
        {
          name: "Infrared Lenses",
          description:
            "+15% Ability Power, deal 25% increased damage to Burning enemies",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Stacked Sticks",
          description: "+15% Ability Power, 40% [Dynamite] Explosion Radius",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Build-A-Blast Buckshot",
          description:
            "+10% Cooldown Reduction, [Coach Gun] has 50% increased self-knockback",
          price: 10000,
          category: "Ability",
        },
        {
          name: "B.O.B. Wire Defense",
          description:
            "+50 Health, +25 Armor, when [B.O.B.] finishes charging, [B.O.B.] gains 300 Armor",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Firestarter",
          description: "+50 Health, Your Burning effects gain 35% Lifesteal",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Juno",
    hp: 225,
    role: "Support",
    powers: [
      {
        name: "MediMaster",
        description:
          "[Mediblaster] can now critically hit both allies and enemies",
      },
      {
        name: "Stinger",
        description:
          "[Mediblaster] deals an additional 10 damage to enemies over 1s. (Does not stack)",
      },
      {
        name: "Cosmic Coolant",
        description:
          "[Pulsar Torpedoes] cooldown is reduced by 1s for each target it hits",
      },
      {
        name: "Medicinal Missiles",
        description:
          "[Pulsar Torpedoes] heal for an extra 30 life and causes allies hit to receive 50% more healing for 3s",
      },
      {
        name: "Pulsar Plus",
        description: "[Pulsar Torpedoes] gains 1 additional charge",
      },
      {
        name: "Torpedo Glide",
        description:
          "During [Glide Boost], every 50 damage you deal reduces the cooldown of [Pulsar Torpedoes] by 1s",
      },
      {
        name: "Blink Boosts",
        description:
          "[Glide Boost] gains 2 additional charges and has a 65% reduced cooldown, but has 75% reduced duration",
      },
      {
        name: "Rally Ring",
        description:
          "Reduce [Hyper Ring]'s cooldown by 1s when an ally passes through it",
      },
      {
        name: "Black Hole",
        description:
          "[Hyper Ring] slows the Move Speed of enemies who pass through it by 35% for 1s",
      },
      {
        name: "Hyper Healer",
        description: "Allies affected by [Hyper Ring] gain 50 Overhealth",
      },
      {
        name: "Stellar Focus",
        description:
          "[Orbital Ray] now follows you and its duration is increased by 35%",
      },
      {
        name: "Orbital Alignment",
        description:
          "Enemies inside of [Orbital Ray] lose 35% Move Speed. Allies inside of it gain 25% Move Speed",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Vantage Shot",
          description:
            "+5% Weapon Power, while airborne, [Mediblaster] deals 15% more damage",
          price: 4000,
          category: "Weapon",
        },
        {
          name: "Lock-On Shield",
          description:
            "+10% Ability Power, while aiming [Pulsar Torpedoes], gain Overhealth equal to 50% of your max Shields",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Lux Loop",
          description: "+10% Ability Power, +25% Hyper Ring Duration",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Boosted Rockets",
          description: "+25 Shield, +25% [Glide Boost] Duration",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Long Range Blaster",
          description:
            "+15% Weapon Power, [Mediblaster] deals 15% increased damage and healing to targets farther than 12m away",
          price: 12000,
          category: "Weapon",
        },

        {
          name: "PulStar Destroyers",
          description:
            "+15% Ability Power, [Pulsar Torpedoes] explode on hit, deal 20 damage to nearby enemies",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Pulse Spike",
          description:
            "+10% Attack Speed, +35% [Pulsar Torpedoes] Projectile Speed, after using [Pulsar Torpedoes], gain 25% Attack Speed for 4s",
          price: 11000,
          category: "Weapon",
        },

        {
          name: "Forti-Glide",
          description:
            "+75 Shield, during [Glide Boost], gain 10% Damage Reduction",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Gravitational Push",
          description:
            "+15% Weapon Power, during [Glide Boost], gain 20% Attack Speed and your [Quick Melee] knocks enemies back",
          price: 10000,
          category: "Weapon",
        },

        {
          name: "Solar Shielding",
          description:
            "+25% Ability Power, allies affected by [Hyper Ring] restore 25 Shields every 1s",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Sunburst Serum",
          description: "+75 Shield, [Orbital Ray] gains 25% increased healing",
          price: 10000,
          category: "Survival",
        },
        {
          name: "Red Promise Regulator",
          description:
            "+50 Shield, +15% Ability Power, when you use [Orbital Ray], reset your cooldowns",
          price: 10000,
          category: "Ability",
        },
      ],
    },
  },
  {
    name: "Mei",
    role: "Damage",
    hp: 300,
    powers: [
      {
        name: "Permafrost",
        description: "Increase your Max Health by 50% of your Ability Power",
      },
      {
        name: "Slowball",
        description:
          "[Endothermic Blaster]'s secondary fire now shoots a snowball that applies 30% slow for 1s on critical hit",
      },
      {
        name: "Extendothermics",
        description:
          "[Endothermic Blaster]'s primary fire range is increased by 6m",
      },
      {
        name: "Frost Armor",
        description:
          "Gain Armor equal to 5% of the primary fire damage you deal, up to 100, until the end of the round",
      },
      {
        name: "Snowball Flight",
        description:
          "Jumping while mid-air creates a large [Ice Wall] pillar under you. (12s Cooldown)",
      },
      {
        name: "Twice As Ice",
        description:
          "When you use [Cryo-Freeze], reset the next cooldown of [Ice Wall]",
      },
      {
        name: "Iceberg",
        description: "[Ice Wall] spawns a mini [Blizzard] that slows enemies",
      },
      {
        name: "Cryclone",
        description:
          "[Cryo-Freeze] spawns a mini [Blizzard] that slows enemies",
      },
      {
        name: "Coulder",
        description:
          "[Cryo-Freeze] now encases you in a rolling iceball that can knock back enemies and deal 10 damage",
      },
      {
        name: "Frost Nova",
        description:
          "When [Cryo-Freeze] ends, knock back nearby enemies, dealing 60 damage",
      },
      {
        name: "Blizznado",
        description: "While within [Blizzard], heal 5% of your Life every 1s",
      },
      {
        name: "Avalanche",
        description:
          "Visible enemies within 20m of the Blizzard are slowed by 25%",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "Coldspot",
          description:
            "+25 Health, Primary Fire and [Blizzard] can remove burn",
          price: 4000,
          category: "Survival",
        },
        {
          name: "Meicicle",
          description: "+25 Health, [Cryo-Freeze] duration is increased by 25%",
          price: 4000,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "Focused Flurries",
          description:
            "+15% Attack Speed, Max Ammo is increased by 75% but reloading takes 50% longer",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Snowboot",
          description:
            "+15% Attack Speed, Frozen ground increases Mei's Movement Speed by 35%",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Himalayan Hat",
          description:
            "+10% Attack Speed, while within [Blizzard], gain 10% Attack Speed",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Sturdy Snowfort",
          description:
            "+15% Ability Power, Ability Power is increased by 5% per each spawned Ice Pillars",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Ecopoint Cryobed",
          description:
            "On near death, go into [Cryo-Freeze] and gain 15% Ultimate Charge. Can happen once every round",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Icy Veins",
          description:
            "+10% Ability Power, [Blizzard] deals 100% increased damage",
          price: 10000,
          category: "Ability",
        },
        {
          name: "Ice Sheet",
          description:
            "+25 Health, [Ice Wall] Duration is increased by 1 second and health is increased by 100%",
          price: 10000,
          category: "Survival",
        },
      ],
    },
  },
  {
    name: "Lucio",
    hp: 225,
    role: "Support",
    powers: [
      {
        name: "Fast Forward",
        description: "While above 50% Move Speed, increase damage by 25%",
      },
      {
        name: "Signature Shift",
        description:
          "After using an ability, your next [Sonic Amplifier] shot shoots a volley of 6 ammo with 20% increased projectile size",
      },
      {
        name: "Sonic Boom",
        description:
          "[Sonic Amplifier] Damage heals all allies affected by [Crossfade] equal to 20% of damage dealt",
      },
      {
        name: "Mixtape",
        description:
          "When switching to [Healing Boost], [Crossfade] heals for 50% of [Crossfade] healing for every 1s [Speed Boost] was active",
      },
      {
        name: "Megaphone",
        description:
          "+20% [Amp It Up] Duration. While [Amp It Up] is active, [Crossfade] radius is increased by 150%",
      },
      {
        name: "Radio Edit",
        description:
          "After using [Amp It Up], trigger [Sound Barrier] with 85% reduced Overhealth",
      },
      {
        name: "Vivace",
        description:
          "While [Wallriding] or airborne, [Soundwave] cooldown refreshes 25% faster and adds 1 Max Ammo per 1s until you reload",
      },
      {
        name: "Wallvibing",
        description:
          "While [Wallriding] or airborne, gain temporary Overhealth equal to 3% of your life every 1s up to 30%",
      },
      {
        name: "Crowd Pleaser",
        description:
          "After using [Soundwave], heal all allies affected by [Crossfade] for 200% of [Crossfade] healing.",
      },
      {
        name: "Let's Bounce",
        description:
          "[Soundwave] has 30% increased knockback and deals 40 bonus damage if the target hits a wall",
      },
      {
        name: "Reverb",
        description: "Gain 1 extra charge of [Soundwave]",
      },
      {
        name: "Beat Drop",
        description:
          "20% Ultimate Cost Reduction. Landing on an enemy with [Sound Barrier] deals up to 200 damage",
      },
    ],
    items: {
      normal: [],
      rare: [
        {
          name: "#1 Single",
          description:
            "+10% Ability Power, When allies leave your [Crossfade] area, the effect lingers for 2s",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Lofly Beats",
          description:
            "+5% Weapon Power, +5% Ability Power, While in [Speed Boost], [Soundwave] also knocks you back",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Nano Boop",
          description:
            "+5% Cooldown Reduction, Environmental kills grant [Nano Boost] for 5s",
          price: 4000,
          category: "Ability",
        },
        {
          name: "Speed Skates",
          description:
            "+25 Health, After [Wallriding], gain 30% Move Speed for 2s",
          price: 3750,
          category: "Survival",
        },
      ],
      epic: [
        {
          name: "B-Side Bop",
          description:
            "+25 Health, +25% Melee Damage, After using [Soundwave], your next [Quick Melee] grants decaying Overhealth equal to 200% of damage dealt",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Riff Repeater",
          description:
            "+15% Weapon Power, [Sonic Amplifier] projectiles ricochet off walls 3 times",
          price: 10000,
          category: "Weapon",
        },
        {
          name: "Airwaves",
          description:
            "+25 Health, +15% Ability Power, [Sound Barrier] effectiveness is increased by 25% for every 1s [Sound Barrier] is channeled, up to 50%",
          price: 10000,
          category: "Ability",
        },

        {
          name: "All-Out Auditiva",
          description: "+20% Ability Power, +33% [Amp It Up] Duration",
          price: 11000,
          category: "Ability",
        },
        {
          name: "Hip Hop",
          description:
            "+25 Health, After [Wallriding], gain an additonal jump while airborne",
          price: 9000,
          category: "Survival",
        },
      ],
    },
  },
];

export { basicItems, heroes };
