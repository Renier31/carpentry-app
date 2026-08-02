export const modules = [
  {
    id: 1,
    title: 'Measurement & Marking',
    icon: '📐',
    description: 'Learn to read tape measures, use marking gauges, and achieve precise cuts.',
    color: '#e67e22',
    lessons: [
      {
        id: 'l1',
        title: 'Reading a Tape Measure',
        content: `A tape measure is your most important tool in carpentry. Understanding every mark on the blade is essential for accurate work.

**Imperial System (inches & fractions):**
- Each inch is divided into fractions: 1/2, 1/4, 1/8, 1/16
- The longest line after an inch mark = 1/2 inch
- The next longest = 1/4 inch
- Smaller lines = 1/8 and 1/16 inch

**Tips for accuracy:**
- Always hook the end of the tape on the material edge
- Read the measurement at eye level to avoid parallax error
- Double-check every measurement before cutting — "Measure twice, cut once"
- Use a sharp pencil, not a marker, for precise marks`,
        videoUrl: 'https://www.youtube.com/embed/ZSHqpCMDLnk',
        videoTitle: 'How to Read a Tape Measure'
      },
      {
        id: 'l2',
        title: 'Marking Techniques',
        content: `Accurate marking is what separates clean professional cuts from rough ones.

**Tools for marking:**
- **Pencil** — most common, easy to see and sand off
- **Marking knife** — scores the wood fiber for tear-out free cuts
- **Marking gauge** — sets a consistent distance from an edge
- **Square** — ensures your mark is perfectly perpendicular

**Technique:**
1. Hook your square firmly against the reference edge
2. Hold the pencil at a consistent angle
3. Pull the pencil along the square's blade in one smooth stroke
4. For rip cuts, use a marking gauge set to the width needed

**Important:** Always mark on the waste side of the line — the material you will cut away.`,
        videoUrl: 'https://www.youtube.com/embed/4jznMnMuTsk',
        videoTitle: 'Marking Wood for Accurate Cuts'
      }
    ],
    quiz: [
      {
        id: 'q1',
        question: 'What does "measure twice, cut once" mean?',
        options: [
          'Cut the wood in two pieces',
          'Always verify measurements before cutting to avoid mistakes',
          'Use two tape measures at once',
          'Make two cuts on every board'
        ],
        correct: 1
      },
      {
        id: 'q2',
        question: 'Which mark on a tape measure represents 1/2 inch?',
        options: [
          'The shortest line between inch marks',
          'The second longest line between inch marks',
          'The longest line between inch marks',
          'There is no 1/2 inch mark'
        ],
        correct: 2
      },
      {
        id: 'q3',
        question: 'What tool gives you a consistent parallel line from an edge?',
        options: ['Pencil', 'Try Square', 'Marking Gauge', 'Tape Measure'],
        correct: 2
      }
    ]
  },
  {
    id: 2,
    title: 'Tool Handling & Safety',
    icon: '🔨',
    description: 'Master hand tools and power tools with proper technique and safety habits.',
    color: '#2980b9',
    lessons: [
      {
        id: 'l3',
        title: 'Hand Tools Fundamentals',
        content: `Knowing your hand tools and how to use them correctly builds the foundation for all carpentry work.

**Essential Hand Tools:**
- **Claw Hammer** — driving and pulling nails. Grip near the end of the handle for max power.
- **Hand Saw** — cutting wood to length. Let the saw do the work; don't force it.
- **Chisels** — paring wood, cleaning joints. Always cut away from your body.
- **Screwdrivers** — use the correct tip size to avoid damaging screw heads.
- **Mallet** — used with chisels; softer impact than a steel hammer.

**Maintenance:**
- Keep cutting edges sharp — a sharp tool is safer than a dull one
- Clean tools after use and store them dry to prevent rust
- Regularly oil moving parts on planes and braces`,
        videoUrl: 'https://www.youtube.com/embed/HNmSLCBxHKI',
        videoTitle: 'Essential Hand Tools for Beginners'
      },
      {
        id: 'l4',
        title: 'Power Tool Safety',
        content: `Power tools dramatically speed up work but require strict safety discipline.

**General Safety Rules:**
1. Always wear safety glasses — no exceptions
2. Wear hearing protection with loud tools
3. Never wear loose clothing or jewelry
4. Keep guards in place at all times
5. Disconnect power before changing blades or bits
6. Keep your work area clean and well lit
7. Never use a tool you haven't been trained on

**Circular Saw Safety:**
- Let the blade reach full speed before cutting
- Support the workpiece on both sides of the cut
- Never reach under the workpiece while cutting
- Let the blade stop completely before setting the saw down

**Drill Safety:**
- Secure the workpiece with clamps, not your hand
- Start at low speed, increase gradually
- Pull the bit back frequently when drilling deep holes to clear chips`,
        videoUrl: 'https://www.youtube.com/embed/QLvqkMDsZoA',
        videoTitle: 'Power Tool Safety Rules'
      }
    ],
    quiz: [
      {
        id: 'q4',
        question: 'When using a chisel, which direction should you cut?',
        options: [
          'Toward your body for better control',
          'Away from your body for safety',
          'It does not matter',
          'Upward only'
        ],
        correct: 1
      },
      {
        id: 'q5',
        question: 'When should you remove a circular saw guard?',
        options: [
          'For every cut to see the blade clearly',
          'When making freehand cuts',
          'Never — guards must stay in place',
          'When cutting thin materials'
        ],
        correct: 2
      },
      {
        id: 'q6',
        question: 'Before changing a blade on a power tool, what must you do first?',
        options: [
          'Put on gloves',
          'Disconnect the power source',
          'Let the blade spin to a stop naturally',
          'Call for assistance'
        ],
        correct: 1
      }
    ]
  },
  {
    id: 3,
    title: 'Joinery',
    icon: '🪵',
    description: 'Learn classic wood joints that make strong, lasting connections.',
    color: '#27ae60',
    lessons: [
      {
        id: 'l5',
        title: 'Basic Joints',
        content: `Joinery is the art of connecting pieces of wood. The right joint determines the strength and appearance of your project.

**Butt Joint:**
- Simplest joint — one piece butts against another
- Weak on its own; reinforce with screws, nails, or dowels
- Used in rough construction and box-making

**Lap Joint:**
- Half the thickness is removed from each piece so they sit flush
- Much stronger than a butt joint
- Great for frames and grids

**Rabbet Joint:**
- An L-shaped notch cut along an edge
- Used for drawer backs and cabinet backs
- Easy to cut with a table saw or router

**Dado Joint:**
- A channel cut across the grain
- Perfect for shelves in a bookcase
- Cut with a dado blade or router`,
        videoUrl: 'https://www.youtube.com/embed/j9lQzFJSFCQ',
        videoTitle: 'Introduction to Wood Joints'
      },
      {
        id: 'l6',
        title: 'Advanced Joints',
        content: `Advanced joints take more skill but produce stronger and more attractive results.

**Mortise & Tenon:**
- The strongest traditional joint for frame construction
- The tenon (tongue) fits into the mortise (pocket)
- Used in furniture legs, door frames, timber framing
- Can be wedged, pinned, or glued

**Dovetail Joint:**
- Interlocking fan-shaped tails and pins
- Exceptional resistance to pulling apart
- The hallmark of quality furniture and drawer construction
- Requires careful layout and precise cutting

**Pocket Screw Joint:**
- Modern fast method using a jig and special screws
- Not as elegant as traditional joints but very practical
- Great for face frames, cabinets, and furniture assembly

**Box Joint (Finger Joint):**
- Interlocking rectangular fingers
- Strong and decorative
- Used in boxes and light-duty drawers`,
        videoUrl: 'https://www.youtube.com/embed/5QsUs0lSXPo',
        videoTitle: 'Mortise & Tenon and Dovetail Joints'
      }
    ],
    quiz: [
      {
        id: 'q7',
        question: 'Which joint is best known for drawer construction and resists pulling apart?',
        options: ['Butt Joint', 'Lap Joint', 'Dovetail Joint', 'Dado Joint'],
        correct: 2
      },
      {
        id: 'q8',
        question: 'A dado joint is a channel cut in which direction relative to the grain?',
        options: ['With the grain', 'Across the grain', 'At 45 degrees', 'Diagonally'],
        correct: 1
      },
      {
        id: 'q9',
        question: 'What does the tenon refer to in a mortise and tenon joint?',
        options: [
          'The pocket or hole cut in one piece',
          'The glue used to bond the pieces',
          'The tongue that fits into the mortise',
          'The wedge that locks the joint'
        ],
        correct: 2
      }
    ]
  },
  {
    id: 4,
    title: 'Assembly',
    icon: '🏗️',
    description: 'Put it all together — gluing, clamping, squaring, and finishing.',
    color: '#8e44ad',
    lessons: [
      {
        id: 'l7',
        title: 'Gluing & Clamping',
        content: `A good glue-up makes or breaks your project. Preparation is everything.

**Choosing the right glue:**
- **PVA (Wood Glue / Titebond)** — most common, strong, sandable, cleans up with water
- **Epoxy** — gap-filling, waterproof, good for outdoor or oily woods
- **Polyurethane (Gorilla Glue)** — expands, waterproof, stains badly if it gets on surfaces
- **CA Glue (Super Glue)** — fast set, great for small pieces and repairs

**Gluing process:**
1. Dry-fit all pieces before applying glue
2. Apply an even thin coat to both mating surfaces
3. Assemble quickly — open time is usually 5-10 minutes
4. Apply clamp pressure evenly across the joint
5. Check for square immediately after clamping
6. Wipe off squeeze-out with a damp cloth before it dries

**Clamping rules:**
- Use enough clamps — roughly one every 6-8 inches along a glue line
- Cauls distribute pressure evenly
- Don't over-clamp — it squeezes out too much glue and starves the joint`,
        videoUrl: 'https://www.youtube.com/embed/RYoMlOzIFoE',
        videoTitle: 'Wood Gluing and Clamping Techniques'
      },
      {
        id: 'l8',
        title: 'Squaring Up & Finishing',
        content: `A project that is out of square will never look right and doors won't fit.

**Checking for square:**
- Measure diagonals corner to corner — if they're equal, it's square
- Use a large try square or framing square on corners
- A reliable trick: 3-4-5 triangle method for large assemblies

**Correcting out-of-square:**
- Apply clamp pressure diagonally across the longer diagonal
- Pull with a clamp or push with a wedge until diagonals match
- Work quickly before glue sets

**Finishing:**
1. **Sand progressively** — start at 80 or 120 grit, finish at 180-220
2. Always sand with the grain, never across it
3. **Raise the grain** — wipe with a damp cloth, let dry, then sand with 220
4. Apply finish in thin coats:
   - Oil finishes: wipe on, wipe off
   - Varnish/polyurethane: thin brush coats, sand between coats
   - Paint: primer first, then 2 coats of top coat
5. Light sand between every coat with 320 grit for smooth results`,
        videoUrl: 'https://www.youtube.com/embed/xvNR5jEFPCY',
        videoTitle: 'Assembly, Squaring, and Finishing Wood'
      }
    ],
    quiz: [
      {
        id: 'q10',
        question: 'How do you check if a box or frame is square?',
        options: [
          'Use a ruler to check all four sides are equal',
          'Measure diagonals corner to corner — equal diagonals = square',
          'Press all corners with your hands',
          'Check with a level'
        ],
        correct: 1
      },
      {
        id: 'q11',
        question: 'What should you do with glue squeeze-out immediately after clamping?',
        options: [
          'Leave it to harden and sand it later',
          'Use a scraper to remove it after it dries',
          'Wipe it off with a damp cloth before it dries',
          'Apply more glue on top'
        ],
        correct: 2
      },
      {
        id: 'q12',
        question: 'What is the correct sanding sequence for finishing?',
        options: [
          'Start with fine grit and work to coarse grit',
          'Only use one grit for consistency',
          'Start with coarse grit and progress to finer grits',
          'Sand across the grain for a textured look'
        ],
        correct: 2
      }
    ]
  }
];
