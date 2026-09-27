export const modules = [
  {
    id: 1,
    title: 'Personal Protective Equipment (PPE)',
    icon: '🦺',
    description: 'Learn about essential safety gear required in carpentry and woodworking.',
    color: '#e67e22',
    intro: `Personal Protective Equipment (PPE) is any gear worn to minimize exposure to hazards that cause workplace injuries. In carpentry, PPE is your first line of defense against cuts, dust, noise, and eye injuries.\n\nWearing the correct PPE is not optional — it is a professional and legal requirement in any woodworking environment. Understanding when and how to use each piece of equipment can prevent life-altering injuries.`,
    lessons: [
      {
        id: 'l1_1',
        title: 'Eye and Face Protection',
        content: `**Safety Glasses and Face Shields**\n\nEye injuries are among the most common in woodworking. Flying wood chips, sawdust, and tool fragments can cause permanent damage.\n\n**Types of Eye Protection:**\n- **Safety glasses** — basic protection for general work\n- **Safety goggles** — sealed protection against dust and fine particles\n- **Face shield** — full-face protection for grinding and turning\n\n**When to wear:**\n- Any cutting or sawing operation\n- Using power tools\n- Chiseling or hammering\n- Sanding and finishing\n\nAlways choose eyewear marked with ANSI Z87.1 or equivalent safety standard.`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'Eye Protection in Woodworking'
      },
      {
        id: 'l1_2',
        title: 'Hearing and Respiratory Protection',
        content: `**Hearing Protection**\n\nPower tools generate noise above 85 decibels — prolonged exposure causes permanent hearing loss.\n\n- **Earplugs** — disposable foam, reduce noise 25-33 dB\n- **Earmuffs** — cover entire ear, good for extended use\n- Rule: If you must shout to be heard, wear hearing protection\n\n**Respiratory Protection**\n\nWood dust is classified as a carcinogen.\n\n- **N95 dust mask** — filters fine particles from sanding and sawing\n- **Respirator** — for finishing work with chemicals, stains, varnishes\n- Always check the filter rating matches the hazard`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'Hearing and Respiratory PPE'
      },
      {
        id: 'l1_3',
        title: 'Body and Hand Protection',
        content: `**Body Protection**\n\n- **Workshop apron** — protects against cuts and splinters\n- **Work gloves** — for handling rough lumber, NOT for operating spinning tools\n- **Steel-toed boots** — protect feet from dropped lumber and tools\n- **Avoid loose clothing** — can catch in rotating machinery\n- **Remove jewelry** — rings, bracelets, and watches can catch on tools\n\n**Important Rules:**\n1. Never wear gloves when operating a drill press, lathe, or table saw\n2. Long hair must be tied back or covered\n3. Always wear closed-toe shoes in the shop — sandals are prohibited`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'Body Protection in the Workshop'
      },
      {
        id: 'l1_4',
        title: 'PPE Inspection and Maintenance',
        content: `**Inspecting PPE Before Use**\n\nPPE that is damaged provides false security and may fail when needed most.\n\n**Safety Glasses/Goggles:**\n- Check for cracks, scratches, and loose frames\n- Replace if lenses are heavily scratched — visibility is reduced\n- Clean with lens-safe wipes only\n\n**Dust Masks/Respirators:**\n- Check for tears, damaged straps, and bent nose pieces\n- Replace N95 masks when breathing becomes difficult\n- Store in a clean dry place away from dust\n\n**Hearing Protection:**\n- Earplugs: replace if compressed and won't spring back\n- Earmuffs: check cushions for cracks and proper seal\n\n**General Rules:**\n- Never share PPE between workers without sanitizing\n- Store PPE in designated clean areas\n- Report damaged PPE to your supervisor immediately`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'PPE Inspection and Maintenance'
      },
      {
        id: 'l1_5',
        title: 'PPE Standards and Regulations',
        content: `**Why Standards Matter**\n\nPPE standards ensure equipment provides consistent, tested levels of protection.\n\n**Key Standards:**\n- **ANSI Z87.1** — Eye and face protection\n- **ANSI S3.19** — Hearing protection noise reduction rating\n- **NIOSH N95** — Respiratory particle filtration\n- **ASTM F2413** — Safety footwear\n\n**Workplace Requirements:**\n- Employers must provide PPE at no cost to workers\n- Workers must be trained on correct use and limitations\n- PPE must be properly maintained and replaced when worn\n\n**Hierarchy of Controls:**\n1. Elimination — remove the hazard entirely\n2. Substitution — replace with less hazardous option\n3. Engineering controls — guards and ventilation\n4. Administrative controls — training and procedures\n5. PPE — last line of defense\n\nPPE should always be the LAST resort, not the first solution.`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'PPE Standards and Workplace Safety'
      },
      {
        id: 'l1_6',
        title: 'Emergency Procedures and First Aid',
        content: `**What to Do When PPE Fails**\n\n**Eye Injury:**\n- Do NOT rub the eye\n- Flush immediately with clean water for 15 minutes\n- Seek medical attention even if pain subsides\n\n**Hearing Damage:**\n- Remove from noisy environment immediately\n- Ringing after exposure indicates damage — see a doctor\n\n**Respiratory Exposure:**\n- Move to fresh air immediately\n- If breathing difficulty persists, call emergency services\n\n**Cut or Laceration:**\n- Apply firm pressure with clean cloth\n- Elevate the injured limb\n- Seek medical attention for deep cuts\n\n**First Aid Kit Contents for a Workshop:**\n- Bandages and sterile gauze\n- Eye wash station or saline solution\n- Burn treatment gel\n- Emergency contact numbers posted visibly\n- First aider must be designated in every workshop`,
        videoUrl: 'https://www.youtube.com/embed/E_URVDwGKpM',
        videoTitle: 'Workshop First Aid and Emergency Procedures'
      }
    ],
    preTest: [
      { id: 'pre1_1', question: 'What does PPE stand for?', options: ['Personal Power Equipment', 'Personal Protective Equipment', 'Professional Power Equipment', 'Professional Protective Ensemble'], correct: 1 },
      { id: 'pre1_2', question: 'Which PPE protects your eyes from flying wood chips?', options: ['Earmuffs', 'Face shield', 'Work gloves', 'Dust mask'], correct: 1 },
      { id: 'pre1_3', question: 'At what noise level should hearing protection be worn?', options: ['Above 50 dB', 'Above 70 dB', 'Above 85 dB', 'Above 100 dB'], correct: 2 },
      { id: 'pre1_4', question: 'Should gloves be worn when operating a spinning power tool?', options: ['Yes, always', 'No, gloves can get caught', 'Only thick gloves', 'Only when cutting metal'], correct: 1 },
      { id: 'pre1_5', question: 'What type of mask filters fine wood dust?', options: ['Surgical mask', 'N95 dust mask', 'Cloth mask', 'Gas mask'], correct: 1 },
      { id: 'pre1_6', question: 'What footwear is required in a woodworking shop?', options: ['Sandals', 'Running shoes', 'Steel-toed boots', 'Bare feet'], correct: 2 },
      { id: 'pre1_7', question: 'Why should loose clothing be avoided in the shop?', options: ['It looks unprofessional', 'It can catch in rotating machinery', 'It causes sweating', 'It absorbs sawdust'], correct: 1 },
      { id: 'pre1_8', question: 'What safety standard marking should eye protection carry?', options: ['ISO 9001', 'ANSI Z87.1', 'CE only', 'OSHA 1910'], correct: 1 },
      { id: 'pre1_9', question: 'Which is the last resort in the hierarchy of controls?', options: ['Elimination', 'Engineering controls', 'PPE', 'Substitution'], correct: 2 },
      { id: 'pre1_10', question: 'What should you do immediately after an eye injury?', options: ['Rub the eye', 'Flush with water for 15 minutes', 'Apply eye drops', 'Wait and see'], correct: 1 },
      { id: 'pre1_11', question: 'A face shield protects:', options: ['Eyes only', 'Ears only', 'The entire face', 'The neck only'], correct: 2 },
      { id: 'pre1_12', question: 'When should N95 masks be replaced?', options: ['Every day', 'When breathing becomes difficult', 'After one use only', 'Never'], correct: 1 },
      { id: 'pre1_13', question: 'What is the difference between safety goggles and safety glasses?', options: ['No difference', 'Goggles are sealed; glasses give basic protection', 'Glasses are sealed', 'Goggles are only for chemicals'], correct: 1 },
      { id: 'pre1_14', question: 'Why should jewelry be removed in the workshop?', options: ['It looks unprofessional', 'It can catch on tools and cause injury', 'It rusts near sawdust', 'No reason'], correct: 1 },
      { id: 'pre1_15', question: 'Who is responsible for providing PPE to workers?', options: ['Workers buy their own', 'Employers must provide it at no cost', 'The government provides it', 'PPE is optional'], correct: 1 }
    ],
    postTest: [
      { id: 'post1_1', question: 'Why is wood dust considered dangerous?', options: ['It is flammable only', 'It is classified as a carcinogen', 'It dulls tools', 'It causes rust'], correct: 1 },
      { id: 'post1_2', question: 'What ANSI standard applies to eye protection?', options: ['ANSI Z87.1', 'ANSI S3.19', 'ANSI A10.1', 'ANSI B11'], correct: 0 },
      { id: 'post1_3', question: 'Earplugs reduce noise by approximately:', options: ['5-10 dB', '15-20 dB', '25-33 dB', '40-50 dB'], correct: 2 },
      { id: 'post1_4', question: 'What should you wear to protect from splinters when handling lumber?', options: ['Lab coat', 'Workshop apron', 'Rain jacket', 'Vest'], correct: 1 },
      { id: 'post1_5', question: 'When inspecting safety glasses, you should replace them if:', options: ['They are clean', 'Lenses are heavily scratched', 'They are one year old', 'The color fades'], correct: 1 },
      { id: 'post1_6', question: 'What does NIOSH N95 certification mean for a mask?', options: ['It is waterproof', 'It filters 95% of airborne particles', 'It prevents chemical vapors', 'It is reusable for 95 days'], correct: 1 },
      { id: 'post1_7', question: 'How long should you flush an eye injury with water?', options: ['2 minutes', '5 minutes', '10 minutes', '15 minutes'], correct: 3 },
      { id: 'post1_8', question: 'What is the first step in the hierarchy of controls?', options: ['PPE', 'Engineering controls', 'Elimination of the hazard', 'Administrative controls'], correct: 2 },
      { id: 'post1_9', question: 'Which PPE should NOT be worn while operating a drill press?', options: ['Safety glasses', 'Hearing protection', 'Work gloves', 'Dust mask'], correct: 2 },
      { id: 'post1_10', question: 'Steel-toed boots protect against:', options: ['Dust exposure', 'Dropped lumber and tools', 'Electrical shock only', 'Chemical spills'], correct: 1 },
      { id: 'post1_11', question: 'What indicates hearing damage after loud tool exposure?', options: ['Headache', 'Ringing in the ears (tinnitus)', 'Dizziness only', 'Eye strain'], correct: 1 },
      { id: 'post1_12', question: 'A respirator (vs N95 mask) is needed when:', options: ['Doing light sanding', 'Working with chemical finishes and stains', 'Sweeping the floor', 'Using hand tools only'], correct: 1 },
      { id: 'post1_13', question: 'What must a workshop always have posted visibly?', options: ['Tool prices', 'Emergency contact numbers', 'Work schedules', 'Material lists'], correct: 1 },
      { id: 'post1_14', question: 'Engineering controls in a workshop include:', options: ['PPE only', 'Guards and ventilation systems', 'Training programs', 'Rules and procedures'], correct: 1 },
      { id: 'post1_15', question: 'Earmuffs are better than earplugs for:', options: ['Swimming', 'Extended use over long periods', 'Very loud environments only', 'Light work'], correct: 1 },
      { id: 'post1_16', question: 'PPE should be stored:', options: ['Anywhere convenient', 'In clean, designated areas away from dust', 'On the workbench', 'In your pocket'], correct: 1 },
      { id: 'post1_17', question: 'When should you seek medical attention after a cut?', options: ['Never — bandage it yourself', 'Only for deep cuts', 'For any cut in the workshop', 'Only if bleeding continues for an hour'], correct: 1 },
      { id: 'post1_18', question: 'The ASTM F2413 standard applies to:', options: ['Eye protection', 'Hearing protection', 'Safety footwear', 'Respiratory protection'], correct: 2 },
      { id: 'post1_19', question: 'Long hair in a workshop must be:', options: ['Cut short', 'Tied back or covered', 'Left loose if clean', 'Hidden under a hat only'], correct: 1 },
      { id: 'post1_20', question: 'What is a designated first aider in a workshop?', options: ['Anyone who volunteers', 'A trained person responsible for first aid response', 'The shop owner only', 'The most experienced worker'], correct: 1 },
      { id: 'post1_21', question: 'Which action is correct after respiratory chemical exposure?', options: ['Stay in the area', 'Move to fresh air immediately', 'Drink water', 'Lie down in the shop'], correct: 1 },
      { id: 'post1_22', question: 'PPE is considered the last resort because:', options: ['It is expensive', 'It only protects the wearer, not others, and can fail', 'It is uncomfortable', 'It slows down work'], correct: 1 },
      { id: 'post1_23', question: 'How often should earplugs be replaced?', options: ['Never', 'When they no longer spring back after compression', 'Daily always', 'Monthly always'], correct: 1 },
      { id: 'post1_24', question: 'What is the purpose of an eye wash station in a workshop?', options: ['General face washing', 'Emergency eye flushing after chemical or debris exposure', 'Cleaning tools', 'Washing hands'], correct: 1 },
      { id: 'post1_25', question: 'Which statement about PPE is TRUE?', options: ['PPE eliminates all hazards', 'PPE reduces the risk but does not eliminate it', 'PPE is only needed for power tools', 'PPE is optional for experienced workers'], correct: 1 }
    ]
  },
  {
    id: 2,
    title: 'Hand Tools',
    icon: '🔨',
    description: 'Identify and properly use essential hand tools in carpentry.',
    color: '#2980b9',
    intro: `Hand tools are the foundation of carpentry. Before power tools existed, all woodworking was done by hand. Understanding hand tools improves your skill, precision, and safety.\n\nProper use, maintenance, and storage of hand tools ensures they last longer and perform better. A sharp, well-maintained tool is always safer than a dull or damaged one.`,
    lessons: [
      {
        id: 'l2_1',
        title: 'Measuring and Marking Tools',
        content: `**Tape Measure**\n- Most essential carpentry tool\n- Read fractions carefully — measure twice, cut once\n- Hook the end on the material edge before measuring\n\n**Try Square and Combination Square**\n- Marks perpendicular (90°) and 45° lines\n- Check your square is actually square before trusting it\n\n**Marking Gauge**\n- Sets a consistent parallel line from an edge\n- Used for joinery layout and ripping lines\n\n**Marking Knife**\n- Scores a crisp line across wood grain\n- Gives cleaner cuts than a pencil\n\n**Chalk Line**\n- Snaps a straight reference line over long distances\n- Essential for flooring and framing`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Measuring and Marking Tools'
      },
      {
        id: 'l2_2',
        title: 'Cutting Tools — Saws',
        content: `**Hand Saw**\n- **Crosscut saw** — cuts across the grain (most common)\n- **Rip saw** — cuts along the grain (fewer, larger teeth)\n- Technique: Let the saw do the work, use long smooth strokes\n- Start the cut with a backstroke to create a kerf\n\n**Back Saw and Miter Box**\n- Fine-toothed saw for accurate joinery cuts\n- Miter box guides at 45° or 90°\n- Tenon saw is a type of back saw for larger joints\n\n**Coping Saw**\n- Thin blade for cutting curves and internal cutouts\n- Blade can be rotated to cut at any angle\n- Used for decorative work and fitting moldings\n\n**Hacksaw**\n- Cuts metal hardware like bolts and screws\n- Fine-toothed blade, cuts on the push stroke`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Hand Saws for Carpentry'
      },
      {
        id: 'l2_3',
        title: 'Chisels and Planes',
        content: `**Chisels**\n- Used for paring wood, cutting mortises, and cleaning joints\n- Types: bench chisel, mortise chisel, paring chisel\n- Always cut AWAY from your body\n- Keep razor sharp — a dull chisel is more dangerous than a sharp one\n- Drive with a mallet, not a steel hammer (damages handles)\n\n**Block Plane**\n- Smooths end grain and removes thin shavings\n- Set blade depth shallow for best results\n- Essential for fitting joints and trimming doors\n\n**Jack Plane**\n- Flattens rough sawn lumber\n- Used before the smoothing plane\n- Set for a heavier cut\n\n**Smoothing Plane**\n- Final surface preparation before finishing\n- Set for very thin shavings\n- Sharp iron (blade) is critical for glass-smooth results`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Chisels and Hand Planes'
      },
      {
        id: 'l2_4',
        title: 'Shaping and Finishing Tools',
        content: `**Rasp and File**\n- **Rasp** — aggressive shaping with coarse teeth\n- **File** — smoother finishing after the rasp\n- Always use a handle on a file — the tang can stab your palm\n- Move in one direction only — lift on the return stroke\n\n**Spokeshave**\n- Shapes curved surfaces and chair legs\n- Two handles for controlled two-hand operation\n- Can be used with or against the grain depending on curve direction\n\n**Cabinet Scraper**\n- Removes thin shavings with a burr edge\n- Superior to sandpaper for hardwoods — no clogging\n- Produces glass-smooth surfaces without scratches\n\n**Scratch Awl**\n- Marks starting points for screws and nails\n- Creates a small dimple that prevents bit wandering`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Shaping and Finishing Hand Tools'
      },
      {
        id: 'l2_5',
        title: 'Fastening Tools',
        content: `**Hammers**\n- **Claw hammer** — most common; driving nails and pulling them\n- Grip near the end of handle for maximum power\n- Keep face clean — a dirty face causes glancing blows\n- **Framing hammer** — heavier, for structural work\n- **Tack hammer** — light, for upholstery and small nails\n\n**Screwdrivers**\n- Match the tip exactly to the screw head — prevents cam-out\n- Types: Phillips, flat, Torx, Robertson (square)\n- Use the correct length — short screwdrivers strip heads more easily\n\n**Mallet**\n- Used with chisels to prevent handle damage\n- Also used for driving wooden joints together without marking\n- Types: wooden, rubber, dead-blow\n\n**Hand Drill (Brace)**\n- Manual drill for boring holes without electricity\n- Still useful for controlled, quiet drilling in fieldwork`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Fastening Hand Tools'
      },
      {
        id: 'l2_6',
        title: 'Tool Care and Storage',
        content: `**Sharpening Hand Tools**\n\nSharp tools are safer, more accurate, and less tiring to use.\n\n**Sharpening Process:**\n1. Flatten the back of the blade on a sharpening stone\n2. Hone the bevel at the correct angle (25-30° for chisels and plane irons)\n3. Strop on leather to remove the wire edge\n4. Test — a sharp blade shaves arm hair cleanly\n\n**Preventing Rust:**\n- Wipe metal surfaces with a light coat of oil after use\n- Store tools in a dry environment\n- Use a tool roll or wooden toolbox — not a metal box that promotes condensation\n\n**Storage Best Practices:**\n- Hang saws so teeth don't contact other tools\n- Store chisels in a roll or rack with edge protection\n- Never throw tools into a pile — edges chip and workers get cut\n- Label and organize tools — missing tools cause accidents`,
        videoUrl: 'https://www.youtube.com/embed/sBnRbPvpgQU',
        videoTitle: 'Hand Tool Care and Storage'
      }
    ],
    preTest: [
      { id: 'pre2_1', question: 'What is the golden rule of measuring?', options: ['Cut once measure once', 'Measure twice cut once', 'Always use a ruler', 'Mark with a marker'], correct: 1 },
      { id: 'pre2_2', question: 'Which saw cuts along the grain?', options: ['Crosscut saw', 'Back saw', 'Rip saw', 'Hacksaw'], correct: 2 },
      { id: 'pre2_3', question: 'What tool creates a consistent parallel line from an edge?', options: ['Try square', 'Marking gauge', 'Tape measure', 'Chalk line'], correct: 1 },
      { id: 'pre2_4', question: 'When using a chisel, you should always cut:', options: ['Toward your body', 'Away from your body', 'Upward', 'In a circle'], correct: 1 },
      { id: 'pre2_5', question: 'What is a mallet used for?', options: ['Driving nails', 'Driving chisels without damaging handles', 'Breaking wood', 'Measuring angles'], correct: 1 },
      { id: 'pre2_6', question: 'A coping saw is used for:', options: ['Ripping long boards', 'Cutting curves and internal cutouts', 'Cutting metal', 'Making straight cuts only'], correct: 1 },
      { id: 'pre2_7', question: 'Which plane is used for final surface preparation?', options: ['Jack plane', 'Block plane', 'Smoothing plane', 'Router plane'], correct: 2 },
      { id: 'pre2_8', question: 'What should you always use with a file?', options: ['Gloves', 'A handle', 'Oil', 'A vise'], correct: 1 },
      { id: 'pre2_9', question: 'Which hammer is most common in carpentry?', options: ['Framing hammer', 'Tack hammer', 'Claw hammer', 'Dead-blow hammer'], correct: 2 },
      { id: 'pre2_10', question: 'Why should tools not be stored in a pile?', options: ['It wastes space', 'Edges chip and workers can be cut', 'It looks messy', 'Tools get lost'], correct: 1 },
      { id: 'pre2_11', question: 'A marking knife is better than a pencil because:', options: ['It is cheaper', 'It scores wood fiber for cleaner cuts', 'It is more visible', 'It lasts longer'], correct: 1 },
      { id: 'pre2_12', question: 'What angle is correct for sharpening a chisel bevel?', options: ['10-15 degrees', '25-30 degrees', '45 degrees', '60 degrees'], correct: 1 },
      { id: 'pre2_13', question: 'A hacksaw is designed to cut:', options: ['Wood along grain', 'Curves in wood', 'Metal hardware', 'Joints'], correct: 2 },
      { id: 'pre2_14', question: 'A cabinet scraper is superior to sandpaper because:', options: ['It is faster', 'It produces smooth surfaces without scratches or clogging', 'It is cheaper', 'It works on all materials'], correct: 1 },
      { id: 'pre2_15', question: 'How should a saw be stored?', options: ['Teeth down in a box', 'Hanging so teeth do not contact other tools', 'In a drawer with other tools', 'Wrapped in cloth always'], correct: 1 }
    ],
    postTest: [
      { id: 'post2_1', question: 'What is the difference between a crosscut saw and a rip saw?', options: ['No difference', 'Crosscut cuts across grain; rip cuts along grain', 'Rip cuts across grain', 'Both cut at 45 degrees'], correct: 1 },
      { id: 'post2_2', question: 'Why should chisels be kept sharp?', options: ['They look professional', 'Sharp chisels are safer and more accurate', 'Dull chisels cut faster', 'Sharpness does not matter'], correct: 1 },
      { id: 'post2_3', question: 'What guides a back saw at precise angles?', options: ['Marking gauge', 'Try square', 'Miter box', 'Combination square'], correct: 2 },
      { id: 'post2_4', question: 'A block plane is best used for:', options: ['Ripping long boards', 'Smoothing end grain', 'Cutting mortises', 'Marking lines'], correct: 1 },
      { id: 'post2_5', question: 'What is the purpose of a scratch awl?', options: ['Marking deep lines', 'Creating dimples that prevent bit wandering', 'Carving decorative patterns', 'Measuring depth'], correct: 1 },
      { id: 'post2_6', question: 'Which chisel type is used for cutting deep mortise pockets?', options: ['Paring chisel', 'Bench chisel', 'Mortise chisel', 'Skew chisel'], correct: 2 },
      { id: 'post2_7', question: 'A spokeshave is used for:', options: ['Straight surfaces only', 'Shaping curved surfaces and chair legs', 'Cutting dovetails', 'Marking measurements'], correct: 1 },
      { id: 'post2_8', question: 'What prevents rust on hand tools?', options: ['Storing them wet', 'Wiping with light oil after use and storing dry', 'Keeping them in a metal box', 'Washing with water'], correct: 1 },
      { id: 'post2_9', question: 'A Phillips screwdriver should only be used with:', options: ['Any screw type', 'Phillips head screws specifically', 'Flat head screws', 'Torx screws'], correct: 1 },
      { id: 'post2_10', question: 'The jack plane is used:', options: ['For final finishing', 'To flatten rough sawn lumber before smoothing', 'For end grain only', 'For curved surfaces'], correct: 1 },
      { id: 'post2_11', question: 'Why is a rasp used before a file?', options: ['Rasps are cheaper', 'Rasps are more aggressive for rough shaping; files finish the surface', 'Files are less common', 'Order does not matter'], correct: 1 },
      { id: 'post2_12', question: 'How do you test if a blade is truly sharp?', options: ['Press it against metal', 'It shaves arm hair cleanly', 'It reflects light', 'It makes a ringing sound'], correct: 1 },
      { id: 'post2_13', question: 'A dead-blow mallet contains:', options: ['A metal head', 'Shot or sand inside that prevents bounce', 'A rubber tip only', 'Nothing — it is solid wood'], correct: 1 },
      { id: 'post2_14', question: 'When using a file, you should:', options: ['Push and pull with equal force', 'Move in one direction and lift on return', 'Press harder on the return stroke', 'Use circular motion'], correct: 1 },
      { id: 'post2_15', question: 'What is "cam-out" when using a screwdriver?', options: ['Stripping the screw head when the bit slips', 'Driving the screw too deep', 'Losing the screw', 'Using too much force'], correct: 0 },
      { id: 'post2_16', question: 'The back of a chisel blade should be:', options: ['Curved for strength', 'Flat — honed flat on a sharpening stone', 'Rough for grip', 'Polished but not flat'], correct: 1 },
      { id: 'post2_17', question: 'A brace is a type of:', options: ['Power drill', 'Manual hand drill for boring holes', 'Measuring tool', 'Clamp'], correct: 1 },
      { id: 'post2_18', question: 'Chalk lines are used for:', options: ['Marking short measurements', 'Snapping straight reference lines over long distances', 'Marking curves', 'Checking level'], correct: 1 },
      { id: 'post2_19', question: 'What is stropping after sharpening used for?', options: ['Removing material', 'Removing the wire edge for a refined sharp edge', 'Adding an edge bevel', 'Cleaning the stone'], correct: 1 },
      { id: 'post2_20', question: 'A combination square can mark at:', options: ['90 degrees only', '45 degrees only', 'Both 90 and 45 degrees', 'Any angle freely'], correct: 2 },
      { id: 'post2_21', question: 'Why use a wooden or fabric toolbox rather than metal?', options: ['Wood is cheaper', 'Metal promotes condensation which causes rust', 'Wood is lighter', 'Metal damages tools'], correct: 1 },
      { id: 'post2_22', question: 'A tenon saw is a type of:', options: ['Rip saw', 'Back saw', 'Coping saw', 'Crosscut saw'], correct: 1 },
      { id: 'post2_23', question: 'The correct grip for maximum hammer power is:', options: ['Near the head', 'In the middle', 'Near the end of the handle', 'Overhand grip only'], correct: 2 },
      { id: 'post2_24', question: 'A cabinet scraper removes material using:', options: ['Abrasive particles', 'A burr edge that shaves thin ribbons', 'Chemical softening', 'Heat'], correct: 1 },
      { id: 'post2_25', question: 'Edge protection on stored chisels prevents:', options: ['Rust only', 'Chipping of the cutting edge and injury to workers', 'Handle damage', 'Measurement errors'], correct: 1 }
    ]
  },
  {
    id: 3,
    title: 'Power Tools and Equipment',
    icon: '⚡',
    description: 'Learn to safely operate power tools used in modern carpentry.',
    color: '#c0392b',
    intro: `Power tools dramatically increase productivity in carpentry but come with significantly higher risks than hand tools. A power tool can cause severe injury in a fraction of a second if used improperly.\n\nBefore operating any power tool, you must understand its parts, safe operating procedures, and emergency shutoff. Always inspect tools before use and never operate a damaged tool.`,
    lessons: [
      {
        id: 'l3_1',
        title: 'Drills and Drivers',
        content: `**Electric Drill / Driver**\n- Used for drilling holes and driving screws\n- Choose the correct bit for the material\n- Secure the workpiece with clamps — never hold it by hand\n- Start slow, increase speed gradually\n- Pull the bit back frequently when drilling deep holes to clear chips\n\n**Drill Bit Types:**\n- **Twist bit** — general purpose for wood and metal\n- **Spade bit** — fast, rough holes in wood\n- **Forstner bit** — clean flat-bottomed holes\n- **Brad-point bit** — precise holes with center point\n- **Auger bit** — deep holes in thick timber\n\n**Impact Driver**\n- Delivers rotational impact force for driving large screws\n- Significantly more torque than a regular drill\n- Not suitable for drilling clean holes\n- Use with hex-shank bits only`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Drills and Drivers Guide'
      },
      {
        id: 'l3_2',
        title: 'Circular Saw and Jigsaw',
        content: `**Circular Saw**\n- Most common power saw for cutting lumber\n- Always let blade reach full speed before cutting\n- Support both sides of the cut\n- Never reach under workpiece while cutting\n- Let blade stop completely before setting saw down\n- Keep blade guard in place at all times\n- Depth: set blade 1/4" deeper than material thickness\n\n**Jigsaw**\n- Cuts curves and irregular shapes\n- Start blade before contacting wood\n- Use correct blade for material thickness\n- Support the workpiece close to the cut line\n- Slower feed rate = cleaner cut\n\n**Reciprocating Saw**\n- For demolition and rough cuts\n- Can cut in tight spaces\n- Not suitable for precision work`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Circular Saw and Jigsaw Safety'
      },
      {
        id: 'l3_3',
        title: 'Sanders',
        content: `**Random Orbital Sander**\n- Best general-purpose sander for flat surfaces\n- Moves in random elliptical pattern — no swirl marks\n- Start coarse, finish fine (80 → 120 → 180 → 220 grit)\n- Always use dust collection or wear N95 mask\n\n**Belt Sander**\n- Aggressive material removal\n- Keep moving — stopping gouges the surface\n- Good for flattening large surfaces and removing paint\n\n**Detail Sander (Mouse Sander)**\n- Gets into corners and tight spaces\n- Low power — not for heavy material removal\n\n**Disc Sander**\n- Stationary sander for end grain and small parts\n- Only use the downward half of the disc\n- Upward half throws workpiece toward user`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Power Sanders Guide'
      },
      {
        id: 'l3_4',
        title: 'Router',
        content: `**What is a Router?**\n- Cuts profiles, dadoes, rabbets, and decorative edges\n- One of the most versatile power tools in woodworking\n\n**Types:**\n- **Fixed base** — depth set before use, stable for edge work\n- **Plunge base** — bit plunges into material mid-cut, for grooves\n- **Trim router** — compact, lightweight for light edge work\n\n**Safe Operation:**\n- Always move router AGAINST the bit rotation (climb cutting is dangerous)\n- Take shallow passes — never remove too much in one pass\n- Use sharp bits — dull bits cause burning and tear-out\n- Secure workpiece firmly before routing\n- Use a router table for better control on small pieces\n\n**Common Router Profiles:**\n- Roundover, chamfer, cove, ogee, rabbet, straight`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Router Basics and Safety'
      },
      {
        id: 'l3_5',
        title: 'Nail Guns and Staplers',
        content: `**Pneumatic Nail Gun (Nailer)**\n- Drives nails rapidly using compressed air\n- Types: framing nailer, finish nailer, brad nailer, pin nailer\n- Always point away from people when loaded\n- Never carry with finger on trigger\n- Disconnect air before clearing jams\n- Use the correct nail gauge and length for the application\n\n**Finish Nailer**\n- Drives 15-16 gauge nails for trim and molding\n- Leaves small hole easily filled with putty\n\n**Brad Nailer**\n- Drives 18 gauge brads for light trim and thin stock\n- Minimal splitting risk on delicate pieces\n\n**Stapler**\n- Drives staples for upholstery, underlayment, and sheathing\n- Compressed air or electric versions available\n\n**Safety:**\n- Never point at yourself or others\n- Keep non-trigger hand clear of the muzzle\n- Use safety glasses — nails can ricochet`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Nail Guns and Pneumatic Tools'
      },
      {
        id: 'l3_6',
        title: 'General Power Tool Safety',
        content: `**Universal Safety Rules:**\n1. Inspect every tool before use — check cord, guard, blade/bit\n2. Wear appropriate PPE for every operation\n3. Secure workpiece with clamps — never hold with hands\n4. Disconnect power before changing blades or bits\n5. Never use a wet or damaged power tool\n6. Keep guards in place at all times\n7. Allow rotating parts to stop completely before setting tool down\n8. Keep cords away from cutting paths\n9. Never leave a running tool unattended\n10. Know the location of the power shutoff\n\n**Electrical Safety:**\n- Use GFCI outlets near water sources\n- Inspect cords for cracks and damage before use\n- Never carry a tool by its cord\n- Do not use extension cords that are too light for the tool\n\n**First Response to Power Tool Injury:**\n- Shut off the tool immediately\n- Apply pressure to bleeding wounds\n- Do not remove embedded objects\n- Call for emergency help`,
        videoUrl: 'https://www.youtube.com/embed/vcBq5rTbpWI',
        videoTitle: 'Power Tool Safety Rules'
      }
    ],
    preTest: [
      { id: 'pre3_1', question: 'Before changing a blade, you must:', options: ['Put on gloves', 'Disconnect power source', 'Let it spin down', 'Ask for help'], correct: 1 },
      { id: 'pre3_2', question: 'When should the circular saw guard be removed?', options: ['For every cut', 'When cutting thin wood', 'Never', 'For curved cuts'], correct: 2 },
      { id: 'pre3_3', question: 'What PPE is always required for power tools?', options: ['Gloves only', 'Safety glasses and hearing protection', 'Dust mask only', 'No PPE needed'], correct: 1 },
      { id: 'pre3_4', question: 'How should a workpiece be secured for drilling?', options: ['Hold by hand', 'Have someone hold it', 'Clamp to workbench', 'Place on floor'], correct: 2 },
      { id: 'pre3_5', question: 'Which sander prevents swirl marks?', options: ['Belt sander', 'Random orbital sander', 'Detail sander', 'Disc sander'], correct: 1 },
      { id: 'pre3_6', question: 'A router should be moved:', options: ['With bit rotation', 'Against bit rotation', 'In circles only', 'Direction does not matter'], correct: 1 },
      { id: 'pre3_7', question: 'What drill bit creates clean flat-bottomed holes?', options: ['Twist bit', 'Spade bit', 'Forstner bit', 'Brad-point bit'], correct: 2 },
      { id: 'pre3_8', question: 'A jigsaw is designed for:', options: ['Straight cuts only', 'Curves and irregular shapes', 'Metal only', 'Ripping lumber'], correct: 1 },
      { id: 'pre3_9', question: 'An impact driver provides:', options: ['Less torque than a drill', 'Rotational impact force for large screws', 'Precise hole drilling', 'Sanding function'], correct: 1 },
      { id: 'pre3_10', question: 'Why should cords be kept away from the cutting path?', options: ['Cords cause inaccuracy', 'Blade can cut the cord causing shock or fire', 'Cords get dirty', 'No real reason'], correct: 1 },
      { id: 'pre3_11', question: 'A pneumatic nail gun uses:', options: ['Electric power', 'Compressed air', 'Battery power', 'Manual force'], correct: 1 },
      { id: 'pre3_12', question: 'Which nailer is used for fine trim and molding?', options: ['Framing nailer', 'Roofing nailer', 'Finish nailer', 'Pin nailer'], correct: 2 },
      { id: 'pre3_13', question: 'GFCI outlets protect against:', options: ['Overvoltage', 'Electrical shock near water', 'Overloading circuits', 'Power surges'], correct: 1 },
      { id: 'pre3_14', question: 'What is the correct blade depth for a circular saw?', options: ['Same as material thickness', '1/4 inch deeper than material', '1 inch deeper than material', 'Half the material thickness'], correct: 1 },
      { id: 'pre3_15', question: 'What should you do first if a power tool is injured someone?', options: ['Continue working', 'Shut off the tool immediately', 'Remove the blade', 'Call the manufacturer'], correct: 1 }
    ],
    postTest: [
      { id: 'post3_1', question: 'When should a circular saw start the cut?', options: ['As soon as it touches wood', 'After blade reaches full speed', 'While still accelerating', 'Any time'], correct: 1 },
      { id: 'post3_2', question: 'What does a random orbital sander prevent?', options: ['Dust', 'Swirl marks', 'Noise', 'Overheating'], correct: 1 },
      { id: 'post3_3', question: 'A router should move against bit rotation to prevent:', options: ['Blade dulling', 'Climb cutting which is dangerous and uncontrolled', 'Vibration', 'Cord tangling'], correct: 1 },
      { id: 'post3_4', question: 'Why never use a wet power tool?', options: ['It damages wood', 'Risk of electric shock', 'It slows the motor', 'It rusts the blade'], correct: 1 },
      { id: 'post3_5', question: 'A biscuit joiner cuts slots for:', options: ['Decorative profiles', 'Oval biscuits that align and strengthen joints', 'Metal fasteners', 'Curved cuts'], correct: 1 },
      { id: 'post3_6', question: 'The disc sander — which half of the disc should you use?', options: ['Upper half', 'Downward half only', 'Either half equally', 'The center only'], correct: 1 },
      { id: 'post3_7', question: 'Forstner bits are chosen when you need:', options: ['Fast rough holes', 'Clean flat-bottomed holes', 'Deep holes in timber', 'General purpose holes'], correct: 1 },
      { id: 'post3_8', question: 'Why pull a drill bit back frequently during deep drilling?', options: ['To cool the bit', 'To clear chips and prevent binding', 'To measure depth', 'To change speed'], correct: 1 },
      { id: 'post3_9', question: 'A plunge router base allows:', options: ['Only edge work', 'The bit to plunge into material mid-cut', 'Faster rotation speed', 'Built-in dust collection'], correct: 1 },
      { id: 'post3_10', question: 'An 18-gauge brad nailer is best for:', options: ['Framing walls', 'Light trim and thin delicate stock', 'Roofing shingles', 'Heavy furniture joints'], correct: 1 },
      { id: 'post3_11', question: 'A belt sander must keep moving because:', options: ['It overheats quickly', 'Stopping in one place gouges the surface', 'It is less accurate when still', 'The motor requires movement'], correct: 1 },
      { id: 'post3_12', question: 'What is the purpose of GFCI protection?', options: ['Prevents overvoltage', 'Cuts power if current leak detected — prevents shock near water', 'Boosts power output', 'Protects tool motor'], correct: 1 },
      { id: 'post3_13', question: 'Dull router bits cause:', options: ['Faster cuts', 'Burning and tear-out on wood', 'Smoother profiles', 'Less vibration'], correct: 1 },
      { id: 'post3_14', question: 'Never carry a power tool by:', options: ['The handle', 'Its cord', 'The base', 'With two hands'], correct: 1 },
      { id: 'post3_15', question: 'A reciprocating saw is primarily used for:', options: ['Fine joinery', 'Demolition and rough cuts in tight spaces', 'Precision dadoes', 'Sanding curves'], correct: 1 },
      { id: 'post3_16', question: 'What grit sequence is correct for sanding?', options: ['220 → 120 → 80', '80 → 120 → 180 → 220', '180 → 80 → 220', 'Any order works'], correct: 1 },
      { id: 'post3_17', question: 'An impact driver differs from a drill because:', options: ['It has less torque', 'It delivers rotational impact for high-torque applications', 'It drills cleaner holes', 'It is battery-free'], correct: 1 },
      { id: 'post3_18', question: 'When clearing a nail gun jam, first:', options: ['Use fingers to clear it', 'Disconnect the air supply', 'Pull the trigger repeatedly', 'Shake the gun'], correct: 1 },
      { id: 'post3_19', question: 'The correct extension cord for a power tool must:', options: ['Be as long as possible', 'Match or exceed the tool\'s power rating', 'Be any available cord', 'Be a flat cord type'], correct: 1 },
      { id: 'post3_20', question: 'A detail sander (mouse sander) is designed for:', options: ['Heavy material removal', 'Corners and tight spaces', 'Large flat surfaces', 'Metal sanding'], correct: 1 },
      { id: 'post3_21', question: 'What prevents cord damage during power tool use?', options: ['Using longer cords', 'Keeping cords away from cutting paths and sharp edges', 'Wrapping cords tightly', 'Running cords under rugs'], correct: 1 },
      { id: 'post3_22', question: 'A trim router is:', options: ['The largest router type', 'Compact and lightweight for light edge work', 'Only for plunge cuts', 'Battery-powered always'], correct: 1 },
      { id: 'post3_23', question: 'Framing nailers drive nails for:', options: ['Fine trim work', 'Structural framing applications', 'Upholstery', 'Cabinet assembly'], correct: 1 },
      { id: 'post3_24', question: 'When should a power tool never be left running?', options: ['During breaks only', 'It should never be left running unattended', 'Only when unsupervised by students', 'Only near water'], correct: 1 },
      { id: 'post3_25', question: 'Inspect a power tool cord before use for:', options: ['Correct color', 'Cracks, damage, and exposed wires', 'Length only', 'Brand marking'], correct: 1 }
    ]
  },
  {
    id: 4,
    title: 'Woodworking Machines',
    icon: '🏭',
    description: 'Understand stationary woodworking machines and their safe operation.',
    color: '#27ae60',
    intro: `Woodworking machines are stationary power tools found in professional shops and school workshops. They process large volumes of material quickly and precisely.\n\nThese machines are more powerful and more dangerous than handheld power tools. Strict safety procedures, proper setup, and adequate training are required before operating any woodworking machine.`,
    lessons: [
      {
        id: 'l4_1',
        title: 'Table Saw',
        content: `**The Table Saw — Most Versatile and Most Dangerous**\n\n- Used for ripping (along grain) and crosscutting (across grain)\n- Always use the rip fence for rip cuts\n- Always use the miter gauge for crosscuts\n- Never use both fence and miter gauge simultaneously — causes kickback\n\n**Safety Rules:**\n- Keep blade guard and riving knife in place\n- Use a push stick for pieces narrower than 6 inches\n- Never reach over or behind the spinning blade\n- Stand to the side — never directly behind the blade (kickback)\n- Let blade come to complete stop before adjusting\n- Never leave the saw running unattended\n\n**Kickback:**\n- Most dangerous table saw hazard\n- Occurs when wood pinches the blade and is thrown back\n- Prevention: use riving knife, stand to the side, keep wood flat on table`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Table Saw Safety and Operation'
      },
      {
        id: 'l4_2',
        title: 'Band Saw',
        content: `**Band Saw — Curved Cuts and Resawing**\n\n- Continuous blade loop around two wheels\n- Safer than the table saw for most curved operations\n- Used for: curved cuts, resawing thick lumber, cutting irregular shapes\n\n**Setup:**\n- Adjust blade tension before use\n- Set blade guides close to the material\n- Adjust upper guide post to just above the material\n\n**Operation:**\n- Keep fingers at least 2 inches from blade\n- Feed rate: slow and steady\n- Let blade stop before removing cut-off pieces\n- Do not back out of a cut while blade is moving\n\n**Blade Selection:**\n- Wide blades for straight/gentle curves\n- Narrow blades for tight curves\n- More teeth per inch = smoother cut but slower`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Band Saw Operation and Safety'
      },
      {
        id: 'l4_3',
        title: 'Thickness Planer and Jointer',
        content: `**Thickness Planer**\n- Makes boards a uniform thickness\n- Never plane end grain\n- Maximum depth per pass: 1/16 inch\n- Feed boards with the grain direction\n- Stand to the side — boards can be ejected at high speed\n- Keep hands away from infeed and outfeed tables while board is in machine\n\n**Jointer**\n- Flattens one face and one edge of a board\n- Creates the reference surface for all subsequent operations\n- Keep fingers away from cutter head — use push blocks\n- Take light passes (1/32 to 1/16 inch)\n- Never joint pieces shorter than 12 inches\n- Sequence: joint face → joint edge → plane to thickness → rip to width`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Planer and Jointer Operation'
      },
      {
        id: 'l4_4',
        title: 'Drill Press and Scroll Saw',
        content: `**Drill Press**\n- Drills perfectly perpendicular holes at consistent depth\n- Clamp workpiece — NEVER hold by hand\n- Set depth stop before drilling\n- Speed selection:\n  - Large bits = slow speed\n  - Small bits = high speed\n  - Hard materials = slow speed\n- Lower the quill slowly and smoothly\n- Clear chips frequently\n\n**Scroll Saw**\n- For intricate curved cuts and decorative patterns\n- Light cuts only — not for thick stock\n- Keep fingers clear of blade path\n- Blade should be tensioned correctly\n- Blade teeth point downward\n- Feed rate: very slow for tight curves`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Drill Press and Scroll Saw'
      },
      {
        id: 'l4_5',
        title: 'Lathe',
        content: `**Wood Lathe — Turning Cylindrical Forms**\n\n- Rotates wood against a stationary cutting tool\n- Used for: table legs, bowls, spindles, handles, decorative turnings\n\n**Setup:**\n- Mount workpiece securely between centers or in a chuck\n- Check workpiece is balanced — irregular pieces can fly off\n- Start at slow speed and increase only when balanced\n- Adjust tool rest close to workpiece before starting\n\n**Safety Rules:**\n- Never wear loose clothing or gloves near a lathe\n- Stand to the side during startup in case workpiece flies off\n- Remove tool rest before sanding on the lathe\n- Use a face shield (not just glasses) for turning\n- Keep tools sharp — dull tools catch and cause dig-ins\n\n**Basic Cuts:**\n- Roughing gouge — rapid material removal\n- Spindle gouge — shaping details\n- Skew chisel — smooth finishing cuts`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Wood Lathe Basics and Safety'
      },
      {
        id: 'l4_6',
        title: 'Workshop Layout and Machine Maintenance',
        content: `**Safe Workshop Layout**\n\n- Machines should have adequate outfeed space (at least the length of longest boards)\n- Walkways must be clear and marked\n- Adequate lighting above each machine\n- Dust collection connected to each machine\n- Fire extinguisher within reach of all machines\n- Emergency stop buttons accessible\n\n**Preventive Maintenance:**\n- **Daily:** Clean sawdust from tables and guards, check blade/bit for damage\n- **Weekly:** Lubricate moving parts, check blade tension and alignment\n- **Monthly:** Inspect electrical cords and connections, calibrate fences and miter gauges\n- **Annually:** Have machines professionally serviced\n\n**Blade and Bit Care:**\n- Dull blades require more force — increasing injury risk\n- Clean resin buildup with blade cleaner\n- Replace when teeth are chipped, missing, or heavily worn\n- Never use a cracked blade`,
        videoUrl: 'https://www.youtube.com/embed/pXnfuSHLx0A',
        videoTitle: 'Workshop Layout and Machine Maintenance'
      }
    ],
    preTest: [
      { id: 'pre4_1', question: 'The most dangerous machine in a woodworking shop is:', options: ['Band saw', 'Drill press', 'Table saw', 'Scroll saw'], correct: 2 },
      { id: 'pre4_2', question: 'When ripping a narrow piece on the table saw use:', options: ['Bare hand', 'Push stick', 'Miter gauge', 'Clamp'], correct: 1 },
      { id: 'pre4_3', question: 'A thickness planer makes boards:', options: ['Curved', 'Uniform thickness', 'Perfectly flat on one face', 'Shorter'], correct: 1 },
      { id: 'pre4_4', question: 'Where should you stand when using a table saw?', options: ['Behind the blade', 'To the side', 'In front', 'Position does not matter'], correct: 1 },
      { id: 'pre4_5', question: 'The jointer is used for:', options: ['Cutting curves', 'Drilling holes', 'Flattening one face and edge', 'Sanding surfaces'], correct: 2 },
      { id: 'pre4_6', question: 'Maximum depth per pass on a thickness planer:', options: ['1/4 inch', '1/8 inch', '1/16 inch', '1/2 inch'], correct: 2 },
      { id: 'pre4_7', question: 'On a drill press, large bits require:', options: ['High speed', 'Low speed', 'Maximum speed', 'Speed does not matter'], correct: 1 },
      { id: 'pre4_8', question: 'Minimum length for jointing a board:', options: ['6 inches', '8 inches', '12 inches', '18 inches'], correct: 2 },
      { id: 'pre4_9', question: 'Band saw cut-off pieces should be removed:', options: ['While blade moves', 'After blade fully stops', 'As cut finishes', 'After turning off but before stopping'], correct: 1 },
      { id: 'pre4_10', question: 'A lathe rotates wood against:', options: ['Another rotating bit', 'A stationary cutting tool', 'A moving blade', 'An abrasive wheel'], correct: 1 },
      { id: 'pre4_11', question: 'Why should you never use rip fence and miter gauge together?', options: ['Both are fine to use', 'Can cause kickback and binding', 'It dulls the blade', 'It wastes wood'], correct: 1 },
      { id: 'pre4_12', question: 'A scroll saw is used for:', options: ['Heavy structural cuts', 'Intricate curved decorative cuts', 'Resawing thick lumber', 'Flattening surfaces'], correct: 1 },
      { id: 'pre4_13', question: 'Kickback on a table saw is caused by:', options: ['Blade being too sharp', 'Wood pinching the blade and being thrown back', 'Standing to the side', 'Using a push stick'], correct: 1 },
      { id: 'pre4_14', question: 'On a lathe, you should start at:', options: ['Highest speed', 'Low speed increasing as balanced', 'Medium speed always', 'Speed does not matter'], correct: 1 },
      { id: 'pre4_15', question: 'Workshop machines need outfeed space of at least:', options: ['2 feet', '4 feet', 'The length of the longest boards worked', '10 feet always'], correct: 2 }
    ],
    postTest: [
      { id: 'post4_1', question: 'Why is the riving knife important on a table saw?', options: ['It measures cut depth', 'It prevents wood from pinching the blade and causing kickback', 'It guides the fence', 'It catches sawdust'], correct: 1 },
      { id: 'post4_2', question: 'Band saw blade width: narrow blades are for:', options: ['Straight cuts', 'Tight curves', 'Resawing only', 'Large diameter curves'], correct: 1 },
      { id: 'post4_3', question: 'The correct milling sequence using machines is:', options: ['Rip → plane → joint → crosscut', 'Joint face → joint edge → plane → rip to width', 'Plane → joint → rip → joint', 'Any order is fine'], correct: 1 },
      { id: 'post4_4', question: 'Why stand to the side of a lathe at startup?', options: ['Better visibility', 'In case unbalanced workpiece flies off', 'To avoid chips', 'To reach the controls'], correct: 1 },
      { id: 'post4_5', question: 'A roughing gouge on a lathe is used for:', options: ['Smooth finishing cuts', 'Rapid material removal', 'Detailed shaping', 'Cutting off the end'], correct: 1 },
      { id: 'post4_6', question: 'Drill press speed: hard materials require:', options: ['High speed', 'Low speed', 'Maximum speed', 'Speed does not matter'], correct: 1 },
      { id: 'post4_7', question: 'What prevents workpiece ejection on the jointer?', options: ['Faster feed rate', 'Push blocks keeping fingers from cutter head', 'Heavier cuts', 'Using the fence only'], correct: 1 },
      { id: 'post4_8', question: 'Band saw blade guides should be set:', options: ['Far from material', 'Close to the material being cut', 'At maximum height always', 'Below the table'], correct: 1 },
      { id: 'post4_9', question: 'Dust collection on machines is important because:', options: ['It keeps the shop tidy only', 'Wood dust is a carcinogen and reduces visibility', 'It is optional for experienced workers', 'It improves machine speed'], correct: 1 },
      { id: 'post4_10', question: 'Never plane end grain on a thickness planer because:', options: ['It wastes material', 'It can cause kickback and machine damage', 'End grain is too hard', 'It produces uneven results only'], correct: 1 },
      { id: 'post4_11', question: 'The tool rest on a lathe must be removed before:', options: ['Starting the lathe', 'Sanding on the lathe', 'Making roughing cuts', 'Turning thin spindles'], correct: 1 },
      { id: 'post4_12', question: 'A skew chisel on a lathe produces:', options: ['Rough removal cuts', 'Smooth finishing cuts', 'Deep grooves', 'Parting cuts only'], correct: 1 },
      { id: 'post4_13', question: 'Table saw blade should be set to:', options: ['Same height as material', '1/4 inch above the material', '1 inch above the material', 'Maximum height'], correct: 1 },
      { id: 'post4_14', question: 'Machine maintenance should include daily:', options: ['Full disassembly', 'Cleaning sawdust and checking blades for damage', 'Lubrication of all parts', 'Calibration of all fences'], correct: 1 },
      { id: 'post4_15', question: 'Why should you never back out of a band saw cut while blade moves?', options: ['It wastes the kerf', 'The blade can deflect and cause loss of control', 'It dulls the blade faster', 'It is not a safety concern'], correct: 1 },
      { id: 'post4_16', question: 'Scroll saw blade teeth should point:', options: ['Upward', 'Downward', 'To the left', 'Any direction'], correct: 1 },
      { id: 'post4_17', question: 'A chipped table saw blade should be:', options: ['Used carefully', 'Replaced immediately', 'Repaired by sharpening', 'Used for rough cuts only'], correct: 1 },
      { id: 'post4_18', question: 'For lathe work, a face shield is preferred over glasses because:', options: ['It is cheaper', 'It protects the entire face from flying chips during turning', 'Glasses fog up', 'Face shields are required by law'], correct: 1 },
      { id: 'post4_19', question: 'The depth stop on a drill press ensures:', options: ['Correct bit speed', 'Consistent hole depth across multiple pieces', 'The bit stays sharp', 'The workpiece is clamped'], correct: 1 },
      { id: 'post4_20', question: 'An unbalanced workpiece on a lathe should be:', options: ['Turned at high speed to balance it', 'Removed and balanced before turning', 'Turned with extra care', 'Left as is if small'], correct: 1 },
      { id: 'post4_21', question: 'Resin buildup on saw blades should be removed with:', options: ['Water', 'Blade cleaner solution', 'Sandpaper', 'A wire brush'], correct: 1 },
      { id: 'post4_22', question: 'The jointer\'s reference surface allows:', options: ['Decorative cuts', 'All subsequent cuts to be made square and accurate', 'Faster material removal', 'Longer boards to be processed'], correct: 1 },
      { id: 'post4_23', question: 'Emergency stop buttons in a workshop must be:', options: ['Hidden for safety', 'Accessible from all machine positions', 'Only at the entrance', 'Only on the main panel'], correct: 1 },
      { id: 'post4_24', question: 'More teeth per inch on a band saw blade means:', options: ['Faster cutting', 'Smoother cut but slower feed', 'Wider curves only', 'Less blade tension needed'], correct: 1 },
      { id: 'post4_25', question: 'Machine fences and miter gauges should be calibrated:', options: ['Only when bought new', 'Monthly as part of maintenance', 'Never — they are factory set', 'Only after repair'], correct: 1 }
    ]
  },
  {
    id: 5,
    title: 'Wood Joints',
    icon: '🪵',
    description: 'Learn how to create strong, accurate wood joints for quality carpentry.',
    color: '#8e44ad',
    intro: `Wood joinery is the art and craft of connecting pieces of wood together. The strength, appearance, and durability of any woodworking project depends heavily on the quality of its joints.\n\nDifferent joints are suited to different applications — from simple butt joints in rough construction to elegant dovetails in fine furniture. Understanding the purpose, method, and appropriate use of each joint is a core carpentry skill.`,
    lessons: [
      {
        id: 'l5_1',
        title: 'Simple Joints',
        content: `**Butt Joint**\n- Simplest joint — end of one piece meets the face/edge of another\n- Weak without reinforcement\n- Reinforced with: nails, screws, dowels, pocket screws, or glue\n- Used in: rough framing, box construction, shelving\n\n**Lap Joint**\n- Half the thickness removed from each piece so they sit flush\n- Much stronger than a butt joint\n- Types: full lap, half lap, cross lap, end lap\n- Used in: frames, grids, light furniture\n\n**Miter Joint**\n- Both pieces cut at 45° to form a 90° corner\n- Clean appearance — hides end grain\n- Weak without reinforcement (spline, biscuit, or nail)\n- Used in: picture frames, moldings, cabinet face frames`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Simple Wood Joints'
      },
      {
        id: 'l5_2',
        title: 'Housing Joints — Dado and Rabbet',
        content: `**Dado Joint**\n- A channel cut across the grain of a board\n- Another board fits into the channel\n- Very strong for shelving — resists downward force\n- Cut with: dado blade on table saw or router with straight bit\n- Blind dado: stopped before the front edge (hides joint)\n\n**Rabbet Joint**\n- An L-shaped notch along the edge or end of a board\n- Stronger than a butt joint\n- Used in: drawer backs, cabinet backs, box corners\n- Cut with: table saw, router, or rabbet plane\n\n**Groove Joint**\n- Same as a dado but cut WITH the grain\n- Used for: drawer bottoms and cabinet backs sliding into frames\n- The bottom panel floats in the groove — allows wood movement\n\n**Housing Joint**\n- Full width of one board sits in a dado in another\n- Used for: shelving in bookcases, stair treads`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Dado and Rabbet Joints'
      },
      {
        id: 'l5_3',
        title: 'Mortise and Tenon',
        content: `**The Strongest Traditional Joint**\n\nOne of the oldest and most reliable joints in woodworking.\n\n**Parts:**\n- **Tenon** — rectangular tongue cut on one piece\n- **Mortise** — rectangular pocket cut in the other piece\n\n**Proportions:**\n- Tenon thickness: 1/3 the thickness of the mortise piece\n- Tenon length: 2/3 the thickness of the mortise piece\n\n**Types:**\n- **Through tenon** — tenon passes completely through the mortise piece\n- **Blind tenon** — tenon stops inside the mortise (hidden)\n- **Wedged tenon** — wooden wedges lock the tenon permanently\n- **Drawbored** — offset hole drives peg to pull joint tight\n\n**Used in:**\nFurniture legs, door frames, chair construction, timber framing`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Mortise and Tenon Joint'
      },
      {
        id: 'l5_4',
        title: 'Dovetail and Finger Joints',
        content: `**Dovetail Joint**\n- Interlocking fan-shaped tails and pins\n- Exceptional resistance to pulling apart — mechanical lock\n- The hallmark of quality furniture and drawer construction\n- Requires careful layout and precise cutting\n\n**Types:**\n- **Through dovetail** — joint visible from both sides\n- **Half-blind dovetail** — joint hidden from front (used for drawer fronts)\n- **Full-blind dovetail** — joint completely hidden from outside\n\n**Cutting Methods:**\n- Hand-cut with a dovetail saw and chisels\n- Router with a dovetail jig (faster but less flexible)\n\n**Finger Joint (Box Joint)**\n- Interlocking square fingers\n- Very strong glue surface area\n- Easier to cut than dovetails using a table saw jig\n- Used in: boxes, drawers, light cabinet corners`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Dovetail and Finger Joints'
      },
      {
        id: 'l5_5',
        title: 'Modern Joinery Methods',
        content: `**Pocket Screw Joint**\n- Uses a jig (e.g. Kreg Jig) and special angled screws\n- Fast and practical for face frames, furniture assembly\n- Not as traditional but very strong in shear\n- Best for interior joinery — screws can be seen from one side\n\n**Biscuit Joint**\n- Oval compressed wood biscuits in matching slots\n- Primarily for alignment, adds some strength\n- Good for panel glue-ups and edge joints\n- Cut with a biscuit joiner (plate joiner)\n\n**Domino Joint**\n- Like a biscuit but uses floating tenons\n- Significantly stronger than biscuits\n- Cut with a Festool Domino machine\n\n**Dowel Joint**\n- Round wooden dowels align and reinforce joints\n- Used for: face frames, table aprons, chair rungs\n- Dowel centers help transfer hole positions accurately`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Modern Wood Joinery Methods'
      },
      {
        id: 'l5_6',
        title: 'Gluing and Assembling Joints',
        content: `**Choosing the Right Glue**\n- **PVA (Titebond)** — most common, strong, sandable, water cleanup\n- **Epoxy** — gap-filling, waterproof, for oily woods and outdoor use\n- **Polyurethane** — expands, waterproof, messy if it contacts surfaces\n- **CA Glue** — instant bond, good for small repairs and dry fitting\n\n**Gluing Process:**\n1. Dry-fit all pieces before applying glue\n2. Apply even thin coat to BOTH mating surfaces\n3. Assemble quickly — open time is 5-10 minutes for PVA\n4. Apply clamp pressure evenly across the joint\n5. Check for square immediately after clamping\n6. Wipe squeeze-out with damp cloth before it dries\n\n**Checking for Square:**\n- Measure diagonals — equal diagonals = square\n- Correct by applying clamp diagonally across longer diagonal\n\n**Clamping Rules:**\n- One clamp every 6-8 inches along a glue line\n- Cauls distribute pressure evenly\n- Do not over-clamp — starves the joint of glue`,
        videoUrl: 'https://www.youtube.com/embed/UCBCkVf0pCg',
        videoTitle: 'Gluing and Assembly Techniques'
      }
    ],
    preTest: [
      { id: 'pre5_1', question: 'Which joint is the simplest but weakest without reinforcement?', options: ['Dovetail', 'Mortise and tenon', 'Butt joint', 'Dado joint'], correct: 2 },
      { id: 'pre5_2', question: 'A dado joint is cut in which direction?', options: ['With the grain', 'Across the grain', 'At 45 degrees', 'Diagonally'], correct: 1 },
      { id: 'pre5_3', question: 'The dovetail joint is known for:', options: ['Speed of cutting', 'Exceptional resistance to pulling apart', 'Being the weakest joint', 'Requiring no tools'], correct: 1 },
      { id: 'pre5_4', question: 'In a mortise and tenon, the tenon is:', options: ['The pocket', 'The rectangular tongue', 'The glue', 'The peg'], correct: 1 },
      { id: 'pre5_5', question: 'Difference between a dado and a groove?', options: ['No difference', 'Dado across grain; groove with grain', 'Groove across grain; dado with grain', 'Both at 45 degrees'], correct: 1 },
      { id: 'pre5_6', question: 'A miter joint cuts both pieces at:', options: ['90 degrees', '45 degrees', '30 degrees', '60 degrees'], correct: 1 },
      { id: 'pre5_7', question: 'Pocket screw joints use a special:', options: ['Dovetail saw', 'Jig and angled screws', 'Biscuit cutter', 'Mortising machine'], correct: 1 },
      { id: 'pre5_8', question: 'PVA glue is best cleaned up with:', options: ['Solvent', 'Water', 'Sandpaper', 'Heat'], correct: 1 },
      { id: 'pre5_9', question: 'Biscuit joints are primarily used for:', options: ['Heavy structures', 'Alignment and panel glue-ups', 'Outdoor furniture', 'Curved cuts'], correct: 1 },
      { id: 'pre5_10', question: 'A through tenon is one that:', options: ['Stops inside the mortise', 'Passes completely through the mortise piece', 'Uses wedges', 'Is hidden from view'], correct: 1 },
      { id: 'pre5_11', question: 'Dovetail tails are shaped like:', options: ['Squares', 'Fan shapes — wider at the end', 'Triangles pointing inward', 'Circles'], correct: 1 },
      { id: 'pre5_12', question: 'How is square checked after glue-up?', options: ['Using a level', 'Equal diagonal measurements corner to corner', 'Pressing corners by hand', 'Using a compass'], correct: 1 },
      { id: 'pre5_13', question: 'Finger joints and box joints are:', options: ['The same thing — interlocking square fingers', 'Completely different joints', 'Types of dovetail', 'Mortise and tenon variations'], correct: 0 },
      { id: 'pre5_14', question: 'A lap joint removes material from each piece so they:', options: ['Overlap thickly', 'Sit flush with each other', 'Create a rabbet', 'Form a miter'], correct: 1 },
      { id: 'pre5_15', question: 'Tenon thickness should be approximately:', options: ['Same as full board thickness', '1/3 the thickness of the mortise piece', '2/3 the board thickness', 'Half the board thickness'], correct: 1 }
    ],
    postTest: [
      { id: 'post5_1', question: 'What makes the dovetail joint resist pulling apart?', options: ['Glue only', 'Interlocking fan-shaped tails and pins', 'Metal fasteners', 'Wood species'], correct: 1 },
      { id: 'post5_2', question: 'A rabbet joint has what shape cross-section?', options: ['T-shape', 'L-shape', 'Square channel', 'Diagonal'], correct: 1 },
      { id: 'post5_3', question: 'The main advantage of a pocket screw joint is:', options: ['Strongest joint', 'Most decorative', 'Fast and practical for assembly', 'Needs no fasteners'], correct: 2 },
      { id: 'post5_4', question: 'Biscuit joints primarily serve for:', options: ['Heavy load bearing', 'Alignment and panel glue-ups', 'Outdoor furniture', 'Curved work'], correct: 1 },
      { id: 'post5_5', question: 'Finger joints use interlocking:', options: ['Fan-shaped tails', 'Square fingers', 'Dowels', 'Tenons'], correct: 1 },
      { id: 'post5_6', question: 'A blind dado is:', options: ['A dado that goes all the way through', 'A dado stopped before the front edge — hiding the joint', 'A dado cut with grain', 'A decorative dado'], correct: 1 },
      { id: 'post5_7', question: 'Drawboring a mortise and tenon means:', options: ['Widening the mortise', 'Offset peg hole that pulls joint tight when driven', 'Cutting the tenon through the piece', 'Adding wedges from the top'], correct: 1 },
      { id: 'post5_8', question: 'A half-blind dovetail is used for:', options: ['Visible corner joints', 'Drawer fronts where joint is hidden from the front', 'Rough construction', 'Box lids'], correct: 1 },
      { id: 'post5_9', question: 'Epoxy glue is best for:', options: ['General indoor joinery', 'Oily woods and outdoor waterproof joints', 'Fast assembly always', 'Non-porous surfaces only'], correct: 1 },
      { id: 'post5_10', question: 'A groove joint allows the panel inside to:', options: ['Be glued solidly', 'Float — allowing wood movement with humidity changes', 'Be pinned in place', 'Be removed easily'], correct: 1 },
      { id: 'post5_11', question: 'Domino joints use:', options: ['Round dowels', 'Oval biscuits only', 'Floating rectangular tenons', 'Pocket screws'], correct: 2 },
      { id: 'post5_12', question: 'PVA glue open time is approximately:', options: ['30 seconds', '5-10 minutes', '1 hour', '24 hours'], correct: 1 },
      { id: 'post5_13', question: 'Cauls in a glue-up serve to:', options: ['Apply heat to speed curing', 'Distribute clamp pressure evenly', 'Measure alignment', 'Prevent over-clamping only'], correct: 1 },
      { id: 'post5_14', question: 'The miter joint hides:', options: ['Face grain', 'End grain for a clean appearance', 'Edge grain', 'Nothing'], correct: 1 },
      { id: 'post5_15', question: 'A housing joint differs from a dado because:', options: ['No difference', 'Full width of one board sits in the dado channel', 'Housing joints are always blind', 'Housing joints use glue only'], correct: 1 },
      { id: 'post5_16', question: 'Tenon length should be:', options: ['Same as board width', '2/3 the thickness of the mortise piece', 'As long as possible', 'Equal to tenon thickness'], correct: 1 },
      { id: 'post5_17', question: 'What is the purpose of a rub joint?', options: ['To remove material', 'Edge-to-edge gluing without clamps by rubbing surfaces together', 'A type of rabbet', 'Decorative surface treatment'], correct: 1 },
      { id: 'post5_18', question: 'A wedged tenon is permanently locked by:', options: ['Metal pins', 'Wooden wedges driven into kerfs in the tenon', 'Expanding glue', 'Friction only'], correct: 1 },
      { id: 'post5_19', question: 'Dowel centers are used to:', options: ['Measure dowel diameter', 'Transfer hole positions between mating pieces accurately', 'Center the lathe work', 'Mark center of boards'], correct: 1 },
      { id: 'post5_20', question: 'Squeeze-out from glue should be removed:', options: ['After fully cured with a chisel', 'Immediately with a damp cloth before it dries', 'By sanding only', 'It does not need removal'], correct: 1 },
      { id: 'post5_21', question: 'The cross lap joint connects:', options: ['End to end', 'Two pieces that cross each other in the middle', 'End to face', 'Face to face'], correct: 1 },
      { id: 'post5_22', question: 'Over-clamping a glue joint:', options: ['Makes it stronger', 'Squeezes out too much glue — starving the joint', 'Has no effect', 'Speeds curing time'], correct: 1 },
      { id: 'post5_23', question: 'A full-blind dovetail is:', options: ['Visible from one side', 'Completely hidden from the outside', 'The same as a through dovetail', 'Used for rough work'], correct: 1 },
      { id: 'post5_24', question: 'Polyurethane glue expands when curing — this means:', options: ['Gaps are filled but excess must be cleaned off surfaces', 'It shrinks joints tight', 'It is the cleanest glue to use', 'Expansion means stronger bonds always'], correct: 0 },
      { id: 'post5_25', question: 'The end lap joint connects:', options: ['Middle of two pieces', 'The ends of two pieces in a flat L or T shape', 'Face to face only', 'Two boards along their length'], correct: 1 }
    ]
  },
  {
    id: 6,
    title: 'Building a Stool — Project Module',
    icon: '🪑',
    description: 'Apply your carpentry skills by measuring, cutting, and assembling a wooden stool from scratch.',
    color: '#16a085',
    intro: `This is a practical project module where you will apply everything you have learned about measuring, cutting, and assembly to build a simple wooden stool.\n\nBuilding a stool covers all fundamental carpentry skills — accurate measurement, straight cuts, joint-making, drilling, gluing, and finishing. It is an ideal beginner project that produces a functional, real-world result.\n\nFollow each step carefully, work safely, and take your time with measurements. A well-built stool is a source of pride and a demonstration of your carpentry competence.`,
    lessons: [
      {
        id: 'l6_1',
        title: 'Materials, Tools and Planning',
        content: `**What You Will Build**\n\nA simple 4-legged wooden stool with:\n- 1 square or round seat (top)\n- 4 legs\n- 4 apron rails connecting the legs for stability\n\n**Materials Needed:**\n- **Seat:** 1 piece of 3/4" plywood or solid wood — 12" x 12"\n- **Legs:** 4 pieces of 1.5" x 1.5" square timber — 18" long each\n- **Apron rails:** 4 pieces of 3/4" x 2" timber — 9" long each\n- Wood glue (PVA/Titebond)\n- 1.5" wood screws (for aprons)\n- Sandpaper: 80, 120, 180 grit\n- Wood finish (paint, stain, or varnish)\n\n**Tools Required:**\n- Tape measure and pencil\n- Try square\n- Hand saw or circular saw\n- Drill and bits\n- Clamps (at least 4)\n- Mallet\n- Sandpaper or sander\n\n**Planning:**\n1. Sketch your stool on paper with dimensions\n2. Make a cut list — list every piece with its length\n3. Mark all pieces on the timber before cutting\n4. Double-check all measurements before any cut`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'How to Build a Simple Wooden Stool'
      },
      {
        id: 'l6_2',
        title: 'Measuring and Marking the Wood',
        content: `**Step 1 — Measure and Mark All Pieces**\n\nAccurate marking is the foundation of a well-built stool. Any error here multiplies through the entire project.\n\n**Marking the Legs:**\n1. Hook tape measure on the end of the timber\n2. Mark 18" from the end with a sharp pencil\n3. Use a try square to draw a perfectly straight line across the timber\n4. Mark "WASTE" on the cut-off side\n5. Repeat for all 4 legs\n\n**Marking the Apron Rails:**\n1. Mark 9" lengths on the 3/4" x 2" timber\n2. Use your try square to ensure 90° lines\n3. Mark all 4 apron pieces\n\n**Marking the Seat:**\n1. Mark a 12" x 12" square on your plywood or solid board\n2. Use a try square at all corners to ensure they are truly 90°\n3. Check the diagonal measurements are equal — confirms a true square\n\n**Key Rules:**\n- Always mark on the waste side of the line\n- Use a sharp pencil — thick lines cause inaccuracy\n- Measure twice before making any mark\n- Label each piece (Leg 1, Leg 2, Rail A, etc.)`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'Measuring and Marking Wood for a Stool'
      },
      {
        id: 'l6_3',
        title: 'Cutting the Parts',
        content: `**Step 2 — Cut All Parts to Size**\n\nSafety first — wear safety glasses and ensure workpiece is secure before any cut.\n\n**Cutting the Legs:**\n1. Secure the timber in a vise or with clamps on a workbench\n2. Start the cut with a backstroke to create a starting notch (kerf)\n3. Use long, smooth strokes — let the saw do the work\n4. Keep the saw on the waste side of the line\n5. Support the cut-off piece as you finish — prevents splitting\n6. Cut all 4 legs and check they are equal in length\n\n**Cutting the Apron Rails:**\n1. Same technique as the legs\n2. Cut all 4 apron rails\n3. Check they are equal — mismatched rails cause a wobbly stool\n\n**Cutting the Seat:**\n1. If using a circular saw, clamp a straightedge guide along the cut line\n2. If using a hand saw, clamp the board securely\n3. Cut two sides of the square seat\n\n**After Cutting:**\n- Check all pieces against your cut list\n- Sand end grain smooth with 80-grit sandpaper\n- Label pieces clearly if not already done`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'Cutting Wood Parts for a Stool'
      },
      {
        id: 'l6_4',
        title: 'Drilling and Joining the Frame',
        content: `**Step 3 — Build the Leg and Apron Frame**\n\nThe frame consists of 4 legs connected by 4 apron rails to form a strong rectangular base.\n\n**Marking the Apron Position on Legs:**\n1. Mark 1.5" from the top of each leg (this is where the apron rail will sit)\n2. The apron rail should be flush with the top of the leg or slightly below\n\n**Drilling Pilot Holes:**\n1. Mark screw positions on apron rails — 2 screws per joint\n2. Drill pilot holes through the apron into the leg\n3. Use a bit slightly smaller than your screw diameter\n4. Pilot holes prevent wood splitting\n\n**Assembly:**\n1. Apply wood glue to the end of the apron rail\n2. Press it against the leg at the marked position\n3. Drive screws through pilot holes to clamp the joint tight\n4. Check the joint is square with a try square\n5. Build two side frames (2 legs + 1 apron each)\n6. Connect the two side frames with the remaining 2 apron rails\n7. Check all corners are square and the frame sits flat\n8. Allow glue to cure for at least 1 hour before proceeding`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'Assembling the Stool Frame'
      },
      {
        id: 'l6_5',
        title: 'Attaching the Seat and Finishing',
        content: `**Step 4 — Attach the Seat**\n\n1. Place the seat board centered on top of the leg frame\n2. Mark the center of each apron rail onto the seat from below\n3. Drill pilot holes down through the seat into the apron rails (or up from below)\n4. Apply glue to the top edges of the apron rails\n5. Position seat and drive 4 screws — one into each apron rail\n6. Check the seat is centered and even on all sides\n7. Wipe off any glue squeeze-out immediately with a damp cloth\n\n**Step 5 — Sanding**\n1. Sand all surfaces starting with 80 grit\n2. Remove all rough spots, pencil marks, and mill marks\n3. Progress to 120 grit then 180 grit\n4. Sand in the direction of the grain\n5. Round over all sharp corners and edges slightly — prevents splinters\n6. Wipe with a slightly damp cloth to raise the grain, let dry, sand with 220 grit\n\n**Step 6 — Finishing**\n- **Paint** — prime first, then 2 coats of topcoat\n- **Stain + varnish** — stain first, let dry, apply 2 coats of polyurethane\n- **Oil finish** — wipe on, wipe off, repeat 3-4 coats\n- Sand lightly between coats with 320 grit for smooth results`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'Attaching Seat and Finishing the Stool'
      },
      {
        id: 'l6_6',
        title: 'Quality Check and Troubleshooting',
        content: `**Step 7 — Inspecting Your Stool**\n\n**Stability Check:**\n- Place stool on a flat surface\n- It should not rock or wobble\n- If it wobbles, one leg is too long — find the high leg and trim slightly\n\n**Squareness Check:**\n- Look down from above — the seat should be perfectly centered\n- All four legs should be at equal angles\n- Use a square on the leg-to-apron joints — should be 90°\n\n**Surface Check:**\n- Run your hand over all surfaces — no rough spots\n- Check corners are smooth and slightly rounded\n- No visible glue spots (if so, sand them off before finishing)\n\n**Common Problems and Solutions:**\n\n| Problem | Cause | Solution |\n|---|---|---|\n| Stool wobbles | Uneven legs | Identify high leg, trim slightly |\n| Gaps in joints | Inaccurate cuts | Fill with wood filler, clamp tighter next time |\n| Seat not centered | Marking error | Re-drill and reattach |\n| Finish peeling | Surface not sanded smooth | Sand back and reapply |\n| Screws splitting wood | No pilot holes | Always pre-drill pilot holes |\n\n**Final Inspection:**\nTest the stool by sitting on it carefully. A well-built stool should support weight without creaking, flexing, or wobbling.`,
        videoUrl: 'https://www.youtube.com/embed/Ptg-5y0D0Ac',
        videoTitle: 'Stool Quality Check and Troubleshooting'
      }
    ],
    preTest: [
      { id: 'pre6_1', question: 'How many legs does a standard simple stool have?', options: ['2', '3', '4', '6'], correct: 2 },
      { id: 'pre6_2', question: 'What is the first step before cutting any wood?', options: ['Apply glue', 'Measure and mark accurately', 'Sand the surface', 'Drill pilot holes'], correct: 1 },
      { id: 'pre6_3', question: 'What do apron rails do in a stool?', options: ['Support the seat from above', 'Connect the legs and add stability', 'Decorate the stool', 'Hold the finish coat'], correct: 1 },
      { id: 'pre6_4', question: 'Why are pilot holes drilled before screwing?', options: ['To make the screw look neat', 'To prevent wood from splitting', 'To measure depth', 'To apply glue inside'], correct: 1 },
      { id: 'pre6_5', question: 'What tool checks that corners are exactly 90°?', options: ['Tape measure', 'Try square', 'Marking gauge', 'Chalk line'], correct: 1 },
      { id: 'pre6_6', question: 'What grit sandpaper should you start with?', options: ['220 grit', '180 grit', '80 grit', '400 grit'], correct: 2 },
      { id: 'pre6_7', question: 'How do you check if the seat is a true square?', options: ['Measure all 4 sides only', 'Measure both diagonals — equal = square', 'Use a protractor', 'Check by eye'], correct: 1 },
      { id: 'pre6_8', question: 'Glue squeeze-out should be removed:', options: ['After it fully cures', 'Immediately with a damp cloth', 'By sanding only', 'It does not need removal'], correct: 1 },
      { id: 'pre6_9', question: 'What is the purpose of a cut list?', options: ['A decorative plan', 'A list of every piece needed with dimensions', 'A shopping list for tools', 'A finishing schedule'], correct: 1 },
      { id: 'pre6_10', question: 'How should you start a hand saw cut?', options: ['Full forward stroke immediately', 'Backstroke first to create a starting kerf', 'Pressing hard from the start', 'Tapping with a mallet first'], correct: 1 },
      { id: 'pre6_11', question: 'What PPE must always be worn when cutting wood?', options: ['Gloves only', 'Safety glasses', 'Earmuffs only', 'Apron only'], correct: 1 },
      { id: 'pre6_12', question: 'Why should all 4 legs be equal in length?', options: ['For aesthetics only', 'To prevent the stool from wobbling', 'To make finishing easier', 'To save material'], correct: 1 },
      { id: 'pre6_13', question: 'What should you do before applying finish?', options: ['Wet the wood', 'Sand progressively through grits ending at 180-220', 'Apply glue first', 'Heat the surface'], correct: 1 },
      { id: 'pre6_14', question: 'Raising the grain before final sanding involves:', options: ['Applying oil', 'Wiping with a damp cloth, letting dry, then sanding with 220 grit', 'Heating the surface', 'Applying varnish first'], correct: 1 },
      { id: 'pre6_15', question: 'What is the best way to fix a wobbly stool after assembly?', options: ['Add more glue', 'Identify the high leg and trim it slightly', 'Add rubber feet immediately', 'Disassemble and start over'], correct: 1 }
    ],
    postTest: [
      { id: 'post6_1', question: 'What are the three main structural components of a simple stool?', options: ['Seat, rails, bolts', 'Seat, legs, apron rails', 'Frame, top, dowels', 'Base, column, seat'], correct: 1 },
      { id: 'post6_2', question: 'Standard leg length for a simple stool project is:', options: ['12 inches', '18 inches', '24 inches', '30 inches'], correct: 1 },
      { id: 'post6_3', question: 'The seat size for the project stool is:', options: ['6" x 6"', '10" x 10"', '12" x 12"', '16" x 16"'], correct: 2 },
      { id: 'post6_4', question: 'Two side frames are built first, then:', options: ['The seat is attached immediately', 'Connected with the remaining apron rails', 'Sanded before connecting', 'Finished before connecting'], correct: 1 },
      { id: 'post6_5', question: 'How many screws are recommended per apron-to-leg joint?', options: ['1', '2', '4', '6'], correct: 1 },
      { id: 'post6_6', question: 'When should glue squeeze-out be wiped off?', options: ['After 1 hour', 'After fully cured', 'Immediately with a damp cloth', 'After sanding'], correct: 2 },
      { id: 'post6_7', question: 'What confirms the seat is a perfect square?', options: ['All 4 sides equal length only', 'Equal diagonal measurements corner to corner', 'The square fits inside a template', 'Checking by eye'], correct: 1 },
      { id: 'post6_8', question: 'Sharp corners on the stool should be:', options: ['Left sharp for appearance', 'Slightly rounded to prevent splinters', 'Filled with putty', 'Painted over only'], correct: 1 },
      { id: 'post6_9', question: 'The apron rail position is marked at what distance from the top of each leg?', options: ['0.5 inch', '1.5 inch', '3 inches', '6 inches'], correct: 1 },
      { id: 'post6_10', question: 'For a paint finish, what must be applied first?', options: ['Varnish', 'Stain', 'Primer', 'Oil'], correct: 2 },
      { id: 'post6_11', question: 'What is the correct sanding progression for the stool?', options: ['220 → 80 → 180', '80 → 120 → 180 → 220', '120 → 80 → 220', 'Any order works'], correct: 1 },
      { id: 'post6_12', question: 'Between finish coats, you should sand with:', options: ['80 grit', '120 grit', '180 grit', '320 grit'], correct: 3 },
      { id: 'post6_13', question: 'A stool wobbles after assembly. What should you do?', options: ['Add a rubber foot', 'Identify the high leg and trim it slightly', 'Add more glue to joints', 'Disassemble completely'], correct: 1 },
      { id: 'post6_14', question: 'Gaps in joints are caused by:', options: ['Too much glue', 'Inaccurate cuts', 'Using pilot holes', 'Over-clamping'], correct: 1 },
      { id: 'post6_15', question: 'What material is used for the seat in this project?', options: ['Metal sheet', '3/4" plywood or solid wood', 'Particleboard', 'MDF only'], correct: 1 },
      { id: 'post6_16', question: 'Why must the saw cut be made on the waste side of the line?', options: ['For safety only', 'To preserve the correct dimension — the kerf removes material', 'To make a cleaner cut', 'Waste side does not matter'], correct: 1 },
      { id: 'post6_17', question: 'After cutting all parts, what should you do before assembly?', options: ['Apply finish immediately', 'Check all pieces against the cut list and sand end grain', 'Start drilling immediately', 'Apply glue to all surfaces'], correct: 1 },
      { id: 'post6_18', question: 'Glue should be applied to which surfaces before joining?', options: ['One surface only', 'Both mating surfaces', 'Neither — screws alone are enough', 'Only to end grain'], correct: 1 },
      { id: 'post6_19', question: 'How long should you wait for glue to cure before stress testing?', options: ['5 minutes', '30 minutes', 'At least 1 hour', '24 hours minimum always'], correct: 2 },
      { id: 'post6_20', question: 'A sketch with dimensions before building is important because:', options: ['It is required by law', 'It helps plan cuts, avoid waste, and catch errors before cutting', 'Sketches are only for professionals', 'It is just decoration'], correct: 1 },
      { id: 'post6_21', question: 'To check stability, the finished stool should be placed on:', options: ['A soft surface', 'A flat surface to check for rocking', 'An uneven surface', 'A tilted board'], correct: 1 },
      { id: 'post6_22', question: 'Raising the grain before the final sand coat results in:', options: ['A rougher surface', 'A smoother final finish', 'Faster drying time', 'No difference'], correct: 1 },
      { id: 'post6_23', question: 'The apron rails in the stool connect:', options: ['Seat to floor directly', 'Adjacent legs to form a rigid frame', 'The seat halves together', 'The legs to the seat directly'], correct: 1 },
      { id: 'post6_24', question: 'Oil finish application method is:', options: ['Thick coat brushed on and left', 'Wipe on, wipe off, repeat multiple coats', 'Spray only', 'Applied once and allowed to absorb fully without wiping'], correct: 1 },
      { id: 'post6_25', question: 'Labeling each piece of wood before cutting helps to:', options: ['Make it look professional', 'Avoid confusion during assembly and prevent miscuts', 'Speed up drying of finish', 'Nothing significant'], correct: 1 }
    ]
  }
];







