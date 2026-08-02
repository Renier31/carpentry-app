export const modules = [
  {
    id: 1,
    title: 'Personal Protective Equipment (PPE)',
    icon: '🦺',
    description: 'Learn about essential safety gear required in carpentry and woodworking.',
    color: '#e67e22',
    intro: `Personal Protective Equipment (PPE) is any gear worn to minimize exposure to hazards that cause workplace injuries. In carpentry, PPE is your first line of defense against cuts, dust, noise, and eye injuries.

Wearing the correct PPE is not optional — it is a professional and legal requirement in any woodworking environment. Understanding when and how to use each piece of equipment can prevent life-altering injuries.`,
    lessons: [
      {
        id: 'l1_1',
        title: 'Eye and Face Protection',
        content: `**Safety Glasses and Face Shields**

Eye injuries are among the most common in woodworking. Flying wood chips, sawdust, and tool fragments can cause permanent damage.

**Types of Eye Protection:**
- **Safety glasses** — basic protection for general work
- **Safety goggles** — sealed protection against dust and fine particles
- **Face shield** — full-face protection for grinding and turning operations

**When to wear eye protection:**
- Any cutting or sawing operation
- Using power tools
- Chiseling or hammering
- Sanding and finishing

Always choose eyewear marked with ANSI Z87.1 or equivalent safety standard.`,
        videoUrl: 'https://www.youtube.com/embed/0Lyb0NZNBVY',
        videoTitle: 'Eye Protection in Woodworking'
      },
      {
        id: 'l1_2',
        title: 'Hearing, Respiratory and Body Protection',
        content: `**Hearing Protection**

Power tools generate noise levels above 85 decibels — prolonged exposure causes permanent hearing loss.

- **Earplugs** — disposable foam plugs, reduce noise by 25-33 dB
- **Earmuffs** — cover the entire ear, good for extended use
- Rule: If you have to shout to be heard, wear hearing protection

**Respiratory Protection**

Wood dust is classified as a carcinogen. Never work without dust protection.

- **Dust mask (N95)** — filters fine particles from sanding and sawing
- **Respirator** — for finishing work with chemicals, stains, and varnishes
- Always check the filter rating matches the hazard

**Body Protection**

- **Workshop apron** — protects against cuts and splinters
- **Work gloves** — for handling rough lumber, NOT for operating spinning tools
- **Steel-toed boots** — protect feet from dropped lumber and tools
- **Avoid loose clothing** — can catch in rotating machinery`,
        videoUrl: 'https://www.youtube.com/embed/8HlqAb2RkCk',
        videoTitle: 'PPE in Woodworking Shop'
      }
    ],
    preTest: [
      {
        id: 'pre1_1',
        question: 'What does PPE stand for?',
        options: ['Personal Power Equipment', 'Personal Protective Equipment', 'Professional Power Equipment', 'Professional Protective Ensemble'],
        correct: 1
      },
      {
        id: 'pre1_2',
        question: 'Which PPE protects your eyes from flying wood chips?',
        options: ['Earmuffs', 'Face shield', 'Work gloves', 'Dust mask'],
        correct: 1
      },
      {
        id: 'pre1_3',
        question: 'At what noise level should hearing protection be worn?',
        options: ['Above 50 dB', 'Above 70 dB', 'Above 85 dB', 'Above 100 dB'],
        correct: 2
      },
      {
        id: 'pre1_4',
        question: 'Should gloves be worn when operating a spinning power tool?',
        options: ['Yes, always', 'No, gloves can get caught in the tool', 'Only thick gloves', 'Only when cutting metal'],
        correct: 1
      },
      {
        id: 'pre1_5',
        question: 'What type of mask filters fine wood dust particles?',
        options: ['Surgical mask', 'N95 dust mask', 'Cloth mask', 'Gas mask'],
        correct: 1
      }
    ],
    postTest: [
      {
        id: 'post1_1',
        question: 'Why is wood dust considered dangerous?',
        options: ['It is flammable only', 'It is classified as a carcinogen', 'It dulls tool edges', 'It causes rust'],
        correct: 1
      },
      {
        id: 'post1_2',
        question: 'Which safety standard marking should you look for on safety glasses?',
        options: ['ISO 9001', 'ANSI Z87.1', 'CE Mark only', 'OSHA 1910'],
        correct: 1
      },
      {
        id: 'post1_3',
        question: 'What is the difference between safety goggles and safety glasses?',
        options: [
          'No difference',
          'Goggles are sealed and protect against dust; glasses give basic protection',
          'Glasses are sealed; goggles are open',
          'Goggles are only for chemicals'
        ],
        correct: 1
      },
      {
        id: 'post1_4',
        question: 'What should you wear to protect your body from splinters when handling lumber?',
        options: ['Lab coat', 'Workshop apron', 'Rain jacket', 'Vest'],
        correct: 1
      },
      {
        id: 'post1_5',
        question: 'A face shield provides protection for:',
        options: ['Eyes only', 'Ears only', 'The entire face', 'The neck only'],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    title: 'Hand Tools',
    icon: '🔨',
    description: 'Identify and properly use essential hand tools in carpentry.',
    color: '#2980b9',
    intro: `Hand tools are the foundation of carpentry. Before power tools existed, all woodworking was done by hand. Understanding hand tools improves your skill, precision, and safety when working with wood.

Proper use, maintenance, and storage of hand tools ensures they last longer and perform better. A sharp, well-maintained tool is always safer than a dull or damaged one.`,
    lessons: [
      {
        id: 'l2_1',
        title: 'Measuring and Marking Tools',
        content: `**Tape Measure**
- Most essential tool in carpentry
- Read measurements carefully — fractions matter
- Rule: Measure twice, cut once

**Try Square and Combination Square**
- Used to mark perpendicular and 45° lines
- Check that your square is actually square before trusting it

**Marking Gauge**
- Sets a consistent parallel line from an edge
- Used for joinery layout and ripping lines

**Marking Knife**
- Scores a crisp line across wood grain
- Gives cleaner cuts than a pencil line

**Chalk Line**
- Snaps a straight reference line over long distances
- Essential for flooring and framing work

**Tips:**
- Always mark on the waste side of the line
- Use a sharp pencil (not a thick marker) for accuracy
- Keep measuring tools clean and stored flat`,
        videoUrl: 'https://www.youtube.com/embed/ZSHqpCMDLnk',
        videoTitle: 'Measuring and Marking Tools'
      },
      {
        id: 'l2_2',
        title: 'Cutting and Shaping Tools',
        content: `**Hand Saw**
- Crosscut saw — cuts across the grain
- Rip saw — cuts along the grain
- Technique: Let the saw do the work, use long smooth strokes

**Back Saw and Miter Box**
- Fine-toothed saw for accurate joinery cuts
- Miter box guides the saw at 45° or 90°

**Chisels**
- Used for paring, chopping mortises, and cleaning joints
- Always cut AWAY from your body
- Keep chisels razor sharp — dull chisels are dangerous

**Block Plane**
- Smooths end grain and removes thin shavings
- Set the blade depth shallow for best results

**Rasp and File**
- Rasp — aggressive shaping of wood
- File — smoother finishing after the rasp

**Mallet**
- Used with chisels — softer than a steel hammer
- Prevents damage to chisel handles`,
        videoUrl: 'https://www.youtube.com/embed/HNmSLCBxHKI',
        videoTitle: 'Hand Cutting Tools for Carpentry'
      }
    ],
    preTest: [
      {
        id: 'pre2_1',
        question: 'What is the golden rule of measuring in carpentry?',
        options: ['Cut once, measure once', 'Measure twice, cut once', 'Always use a ruler', 'Mark with a marker'],
        correct: 1
      },
      {
        id: 'pre2_2',
        question: 'Which saw is designed to cut along the grain of wood?',
        options: ['Crosscut saw', 'Back saw', 'Rip saw', 'Hacksaw'],
        correct: 2
      },
      {
        id: 'pre2_3',
        question: 'What tool creates a consistent parallel line from an edge?',
        options: ['Try square', 'Marking gauge', 'Tape measure', 'Chalk line'],
        correct: 1
      },
      {
        id: 'pre2_4',
        question: 'When using a chisel, you should always cut:',
        options: ['Toward your body', 'Away from your body', 'Upward', 'In a circular motion'],
        correct: 1
      },
      {
        id: 'pre2_5',
        question: 'What is a mallet used for?',
        options: ['Driving nails', 'Driving chisels without damaging handles', 'Breaking wood', 'Measuring angles'],
        correct: 1
      }
    ],
    postTest: [
      {
        id: 'post2_1',
        question: 'What is the difference between a crosscut saw and a rip saw?',
        options: [
          'No difference',
          'Crosscut cuts across grain; rip saw cuts along grain',
          'Rip saw cuts across grain; crosscut cuts along grain',
          'Both cut at 45 degrees'
        ],
        correct: 1
      },
      {
        id: 'post2_2',
        question: 'Why should chisels be kept sharp?',
        options: [
          'Sharp chisels look professional',
          'Sharp chisels are safer and more accurate than dull ones',
          'Dull chisels cut faster',
          'Sharpness does not matter for chisels'
        ],
        correct: 1
      },
      {
        id: 'post2_3',
        question: 'What does a marking knife do that a pencil cannot?',
        options: [
          'Makes thicker lines',
          'Scores the wood fiber for cleaner, tear-out free cuts',
          'Measures distance',
          'Marks curves only'
        ],
        correct: 1
      },
      {
        id: 'post2_4',
        question: 'A block plane is best used for:',
        options: ['Ripping long boards', 'Smoothing end grain and removing thin shavings', 'Cutting mortises', 'Marking parallel lines'],
        correct: 1
      },
      {
        id: 'post2_5',
        question: 'What guides a back saw at precise angles like 45° and 90°?',
        options: ['Marking gauge', 'Try square', 'Miter box', 'Combination square'],
        correct: 2
      }
    ]
  },
  {
    id: 3,
    title: 'Power Tools and Equipment',
    icon: '⚡',
    description: 'Learn to safely operate power tools used in modern carpentry.',
    color: '#c0392b',
    intro: `Power tools dramatically increase productivity in carpentry but come with significantly higher risks than hand tools. A power tool can cause severe injury in a fraction of a second if used improperly.

Before operating any power tool, you must understand its parts, safe operating procedures, and emergency shutoff. Always inspect tools before use and never operate a damaged tool.`,
    lessons: [
      {
        id: 'l3_1',
        title: 'Drills and Circular Saws',
        content: `**Electric Drill / Driver**
- Used for drilling holes and driving screws
- Choose the correct bit for the material
- Secure the workpiece — never hold it in your hand while drilling
- Start slow, increase speed gradually
- Pull the bit back frequently when drilling deep holes

**Circular Saw**
- Most common power saw for cutting lumber to length
- Always let the blade reach full speed before cutting
- Support both sides of the cut
- Never reach under the workpiece
- Let the blade stop completely before setting the saw down
- Keep the blade guard in place at all times

**Jigsaw**
- Cuts curves and irregular shapes
- Start the blade before contacting the wood
- Use the correct blade for the material thickness

**Safety Rules for All Power Tools:**
1. Inspect before use — check cord, guard, blade
2. Wear safety glasses and hearing protection
3. Secure workpiece with clamps
4. Disconnect power before changing blades or bits
5. Never use a wet power tool`,
        videoUrl: 'https://www.youtube.com/embed/QLvqkMDsZoA',
        videoTitle: 'Power Tool Safety for Beginners'
      },
      {
        id: 'l3_2',
        title: 'Sanders and Routers',
        content: `**Random Orbital Sander**
- Best general-purpose sander for flat surfaces
- Moves in random elliptical pattern — no swirl marks
- Start with coarse grit, finish with fine grit
- Always sand with dust collection or wear N95 mask

**Belt Sander**
- Aggressive material removal — use carefully
- Keep moving — stopping in one place gouges the surface
- Good for flattening large surfaces

**Detail Sander (Mouse Sander)**
- Gets into corners and tight spaces
- Low power — not for heavy material removal

**Router**
- Cuts profiles, dadoes, rabbets, and decorative edges
- Always move the router AGAINST the bit rotation (climb cutting is dangerous)
- Take shallow passes — never try to remove too much in one pass
- Use sharp bits — dull bits cause burning and tear-out
- Secure workpiece firmly before routing

**Biscuit Joiner**
- Cuts slots for oval biscuits that align and strengthen joints
- Simple to use — great for panel glue-ups`,
        videoUrl: 'https://www.youtube.com/embed/Y7EUjFn3BBc',
        videoTitle: 'Sanders and Routers Guide'
      }
    ],
    preTest: [
      {
        id: 'pre3_1',
        question: 'Before changing a blade on a circular saw, you must:',
        options: ['Put on gloves', 'Disconnect the power source', 'Let the blade spin down', 'Ask for help'],
        correct: 1
      },
      {
        id: 'pre3_2',
        question: 'When should the circular saw blade guard be removed?',
        options: ['For every cut', 'When cutting thin wood', 'Never — it must stay in place', 'When making curved cuts'],
        correct: 2
      },
      {
        id: 'pre3_3',
        question: 'What PPE should always be worn when using power tools?',
        options: ['Only gloves', 'Safety glasses and hearing protection', 'Only a dust mask', 'No PPE needed for power tools'],
        correct: 1
      },
      {
        id: 'pre3_4',
        question: 'How should a workpiece be secured when using a drill?',
        options: ['Hold it with your hand', 'Have someone else hold it', 'Clamp it to a workbench', 'Place it on the floor'],
        correct: 2
      },
      {
        id: 'pre3_5',
        question: 'Which sander is best for general flat surface finishing?',
        options: ['Belt sander', 'Random orbital sander', 'Detail sander', 'Disc sander'],
        correct: 1
      }
    ],
    postTest: [
      {
        id: 'post3_1',
        question: 'When using a circular saw, when should you start the cut?',
        options: [
          'As soon as the blade touches the wood',
          'After the blade reaches full speed',
          'While the blade is still accelerating',
          'It does not matter'
        ],
        correct: 1
      },
      {
        id: 'post3_2',
        question: 'What does a random orbital sander prevent compared to other sanders?',
        options: ['Dust production', 'Swirl marks on the surface', 'Noise', 'Overheating'],
        correct: 1
      },
      {
        id: 'post3_3',
        question: 'When using a router, you should move it:',
        options: ['With the bit rotation', 'Against the bit rotation', 'In circles only', 'Direction does not matter'],
        correct: 1
      },
      {
        id: 'post3_4',
        question: 'Why should you never use a wet power tool?',
        options: ['It damages the wood', 'Risk of electric shock', 'It slows the motor', 'It rusts the blade'],
        correct: 1
      },
      {
        id: 'post3_5',
        question: 'What is the purpose of a biscuit joiner?',
        options: [
          'Cuts decorative profiles on edges',
          'Cuts slots for oval biscuits that align and strengthen joints',
          'Joins metal pieces',
          'Sands curved surfaces'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 4,
    title: 'Woodworking Machines',
    icon: '🏭',
    description: 'Understand stationary woodworking machines and their safe operation.',
    color: '#27ae60',
    intro: `Woodworking machines are stationary power tools found in professional shops and school workshops. They are capable of processing large volumes of material quickly and precisely.

These machines are more powerful and more dangerous than handheld power tools. Strict safety procedures, proper setup, and adequate training are required before operating any woodworking machine.`,
    lessons: [
      {
        id: 'l4_1',
        title: 'Table Saw and Band Saw',
        content: `**Table Saw**
- Most versatile and most dangerous machine in the shop
- Used for ripping (along grain) and crosscutting (across grain)
- Always use the rip fence for rip cuts
- Always use the miter gauge for crosscuts — never both at the same time
- Keep the blade guard and riving knife in place
- Use a push stick when ripping narrow pieces (less than 6 inches)
- Never reach over or behind the spinning blade
- Stand to the side, not directly behind the blade (kickback danger)

**Band Saw**
- Used for curved cuts and resawing thick lumber
- Safer than the table saw for most operations
- Adjust blade tension and guides before use
- Keep fingers at least 2 inches from the blade
- Feed rate: slow and steady
- Let the blade stop before removing cut-off pieces`,
        videoUrl: 'https://www.youtube.com/embed/6PQO2sXLk_s',
        videoTitle: 'Table Saw and Band Saw Safety'
      },
      {
        id: 'l4_2',
        title: 'Planer, Jointer and Drill Press',
        content: `**Thickness Planer**
- Makes boards a uniform thickness
- Never plane end grain
- Maximum depth of cut: 1/16" per pass
- Always feed boards with the grain direction
- Stand to the side — boards can be ejected at high speed

**Jointer**
- Flattens one face and one edge of a board
- Creates a reference surface for subsequent operations
- Keep fingers away from the cutter head — use push blocks
- Take light passes (1/32" to 1/16")
- Never joint pieces shorter than 12 inches

**Drill Press**
- Drills perfectly perpendicular holes at consistent depth
- Clamp workpiece — never hold by hand
- Set depth stop before drilling
- Use correct speed for bit size and material:
  - Large bits = slow speed
  - Small bits = high speed
- Lower the quill slowly and smoothly

**Scroll Saw**
- For intricate curved cuts and patterns
- Light cuts only — not for thick stock
- Keep fingers clear of the blade path`,
        videoUrl: 'https://www.youtube.com/embed/8Q4sPLLnMcM',
        videoTitle: 'Workshop Machines: Planer, Jointer, Drill Press'
      }
    ],
    preTest: [
      {
        id: 'pre4_1',
        question: 'What is the most dangerous machine in a woodworking shop?',
        options: ['Band saw', 'Drill press', 'Table saw', 'Scroll saw'],
        correct: 2
      },
      {
        id: 'pre4_2',
        question: 'When ripping a narrow piece on the table saw, you should use:',
        options: ['Your bare hand to guide it', 'A push stick', 'The miter gauge', 'A clamp'],
        correct: 1
      },
      {
        id: 'pre4_3',
        question: 'What does a thickness planer do?',
        options: ['Cuts curves', 'Makes boards a uniform thickness', 'Drills holes', 'Cuts joints'],
        correct: 1
      },
      {
        id: 'pre4_4',
        question: 'Where should you stand when operating a table saw?',
        options: ['Directly behind the blade', 'To the side of the blade', 'In front of the blade', 'Position does not matter'],
        correct: 1
      },
      {
        id: 'pre4_5',
        question: 'What is the jointer used for?',
        options: [
          'Cutting curves',
          'Drilling holes',
          'Flattening one face and edge of a board',
          'Sanding surfaces'
        ],
        correct: 2
      }
    ],
    postTest: [
      {
        id: 'post4_1',
        question: 'Why should you never use the rip fence and miter gauge at the same time on a table saw?',
        options: [
          'It is fine to use both',
          'It can cause kickback and binding',
          'It dulls the blade',
          'It wastes wood'
        ],
        correct: 1
      },
      {
        id: 'post4_2',
        question: 'What is the maximum recommended depth of cut per pass on a thickness planer?',
        options: ['1/4 inch', '1/8 inch', '1/16 inch', '1/2 inch'],
        correct: 2
      },
      {
        id: 'post4_3',
        question: 'For a drill press, large drill bits require:',
        options: ['High speed', 'Low speed', 'Maximum speed', 'Speed does not matter'],
        correct: 1
      },
      {
        id: 'post4_4',
        question: 'What is the minimum length of a board that should be jointed?',
        options: ['6 inches', '8 inches', '12 inches', '18 inches'],
        correct: 2
      },
      {
        id: 'post4_5',
        question: 'On a band saw, when should you remove a cut-off piece?',
        options: [
          'While the blade is still moving',
          'After the blade has completely stopped',
          'As soon as the cut is finished',
          'After turning off the machine but before it stops'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 5,
    title: 'Wood Joints',
    icon: '🪵',
    description: 'Learn how to create strong, accurate wood joints for quality carpentry.',
    color: '#8e44ad',
    intro: `Wood joinery is the art and craft of connecting pieces of wood together. The strength, appearance, and durability of any woodworking project depends heavily on the quality of its joints.

Different joints are suited to different applications — from simple butt joints in rough construction to elegant dovetails in fine furniture. Understanding the purpose, method, and appropriate use of each joint is a core carpentry skill.`,
    lessons: [
      {
        id: 'l5_1',
        title: 'Basic Wood Joints',
        content: `**Butt Joint**
- Simplest joint — end of one piece meets the face of another
- Weak without reinforcement
- Reinforced with nails, screws, dowels, or glue
- Used in: rough framing, box construction

**Lap Joint**
- Half the thickness is removed from each piece so they sit flush
- Much stronger than a butt joint
- Types: full lap, half lap, cross lap
- Used in: frames, grids, light furniture

**Rabbet Joint**
- An L-shaped notch along the edge or end of a board
- Stronger than a butt joint, easy to cut
- Used in: drawer backs, cabinet backs, box corners
- Cut with: table saw, router, or rabbet plane

**Dado Joint**
- A channel cut across the grain of a board
- Another board fits into the channel
- Very strong for shelving applications
- Cut with: dado blade on table saw or router

**Groove Joint**
- Same as a dado but cut WITH the grain
- Used for: drawer bottoms, cabinet backs sliding into frames`,
        videoUrl: 'https://www.youtube.com/embed/j9lQzFJSFCQ',
        videoTitle: 'Basic Wood Joints Explained'
      },
      {
        id: 'l5_2',
        title: 'Advanced Wood Joints',
        content: `**Mortise and Tenon Joint**
- One of the strongest traditional joints
- Tenon (rectangular tongue) fits into the mortise (rectangular pocket)
- Used in: furniture legs, door frames, timber framing
- Can be reinforced with wooden pegs or wedges

**Dovetail Joint**
- Interlocking fan-shaped tails and pins
- Mechanically locks together — resists pulling apart
- Used in: drawer construction, box corners, fine furniture
- Hand-cut dovetails are the mark of fine craftsmanship

**Finger Joint (Box Joint)**
- Interlocking square fingers cut with a table saw jig
- Very strong glue surface area
- Used in: boxes, light drawers, cabinet corners
- Easier to cut than dovetails

**Pocket Screw Joint**
- Modern fast joinery using a jig (e.g. Kreg Jig) and special screws
- Fast and strong for face frames and furniture assembly
- Not as traditional but very practical

**Biscuit Joint**
- Oval compressed wood biscuits in matching slots
- Primarily for alignment, adds some strength
- Good for panel glue-ups and edge joints`,
        videoUrl: 'https://www.youtube.com/embed/5QsUs0lSXPo',
        videoTitle: 'Advanced Wood Joinery Techniques'
      }
    ],
    preTest: [
      {
        id: 'pre5_1',
        question: 'Which joint is the simplest but weakest without reinforcement?',
        options: ['Dovetail joint', 'Mortise and tenon', 'Butt joint', 'Dado joint'],
        correct: 2
      },
      {
        id: 'pre5_2',
        question: 'A dado joint is a channel cut in which direction relative to the grain?',
        options: ['With the grain', 'Across the grain', 'At 45 degrees', 'Diagonally'],
        correct: 1
      },
      {
        id: 'pre5_3',
        question: 'Which joint is known as the mark of fine craftsmanship in drawer making?',
        options: ['Butt joint', 'Pocket screw joint', 'Dovetail joint', 'Lap joint'],
        correct: 2
      },
      {
        id: 'pre5_4',
        question: 'In a mortise and tenon joint, what is the tenon?',
        options: ['The pocket cut into one piece', 'The rectangular tongue that fits into the mortise', 'The glue used', 'The peg that locks the joint'],
        correct: 1
      },
      {
        id: 'pre5_5',
        question: 'What is the difference between a dado and a groove?',
        options: [
          'No difference',
          'Dado is cut across the grain; groove is cut with the grain',
          'Groove is cut across the grain; dado is cut with the grain',
          'Both are cut at 45 degrees'
        ],
        correct: 1
      }
    ],
    postTest: [
      {
        id: 'post5_1',
        question: 'What makes the dovetail joint resist pulling apart?',
        options: [
          'The glue used',
          'The interlocking fan-shaped tails and pins',
          'Metal fasteners inside',
          'The wood species used'
        ],
        correct: 1
      },
      {
        id: 'post5_2',
        question: 'A rabbet joint has what shape?',
        options: ['T-shape', 'L-shape', 'Square channel', 'Diagonal cut'],
        correct: 1
      },
      {
        id: 'post5_3',
        question: 'What is the main advantage of a pocket screw joint?',
        options: [
          'It is the strongest joint',
          'It is the most decorative',
          'It is fast and practical for assembly',
          'It needs no fasteners'
        ],
        correct: 2
      },
      {
        id: 'post5_4',
        question: 'Biscuit joints are primarily used for:',
        options: ['Heavy structural connections', 'Alignment and panel glue-ups', 'Outdoor furniture', 'Cutting curves'],
        correct: 1
      },
      {
        id: 'post5_5',
        question: 'Which joint uses interlocking square fingers cut with a table saw jig?',
        options: ['Dovetail joint', 'Mortise and tenon', 'Finger joint', 'Lap joint'],
        correct: 2
      }
    ]
  }
];
