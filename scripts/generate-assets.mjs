import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicDir = path.resolve(process.cwd(), 'public');
const imagesDir = path.resolve(publicDir, 'images');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Helper to create high-res SVG and convert to PNG via sharp
async function svgToPng(svgString, outputPath, width, height) {
  const buffer = Buffer.from(svgString);
  await sharp(buffer)
    .resize(width, height)
    .png({ quality: 95 })
    .toFile(outputPath);
  console.log(`Generated: ${outputPath}`);
}

// 1. Placeholder Home (900x1950)
const homeSvg = `
<svg width="900" height="1950" viewBox="0 0 900 1950" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <linearGradient id="limeGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B8E234"/>
      <stop offset="100%" stop-color="#96C218"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="900" height="1950" rx="0" fill="url(#gradDark)"/>

  <!-- Status Bar -->
  <text x="70" y="80" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="28" font-weight="600">9:41</text>
  <circle cx="810" cy="70" r="10" fill="#E2E2DC"/>
  <rect x="750" y="62" width="22" height="14" rx="3" fill="#E2E2DC"/>
  <rect x="710" y="65" width="20" height="10" rx="2" fill="#E2E2DC"/>

  <!-- Top App Bar -->
  <g transform="translate(60, 140)">
    <circle cx="20" cy="35" r="12" fill="#B8E234"/>
    <text x="44" y="46" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="38" font-weight="800" letter-spacing="-1">Riffly</text>
    <circle cx="740" cy="35" r="28" fill="#222222"/>
    <text x="740" y="43" fill="#B8E234" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">MC</text>
  </g>

  <!-- Greeting -->
  <g transform="translate(60, 260)">
    <text x="0" y="0" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="24" font-weight="500">Good evening,</text>
    <text x="0" y="44" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="44" font-weight="700" letter-spacing="-1">Your music flow</text>
  </g>

  <!-- Next Gig Card (Hero Card) -->
  <g transform="translate(60, 370)">
    <rect width="780" height="340" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <rect x="36" y="36" width="110" height="34" rx="17" fill="rgba(184, 226, 52, 0.15)"/>
    <text x="91" y="59" fill="#B8E234" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">NEXT GIG</text>
    <text x="36" y="125" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="36" font-weight="700">The Blue Note Club</text>
    <text x="36" y="165" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="24">Friday, Oct 24 • Call 7:00 PM</text>
    
    <line x1="36" y1="210" x2="744" y2="210" stroke="#2A2A2A" stroke-width="2"/>
    <text x="36" y="265" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Setlist</text>
    <text x="36" y="300" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="24" font-weight="600">Main Trio Set (14 songs)</text>
    
    <text x="620" y="265" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Status</text>
    <text x="620" y="300" fill="#B8E234" font-family="system-ui, sans-serif" font-size="24" font-weight="600">Confirmed</text>
  </g>

  <!-- Practice Streak & Goal Card -->
  <g transform="translate(60, 750)">
    <rect width="780" height="260" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <text x="36" y="60" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="600">PRACTICE TRACKER</text>
    <text x="36" y="115" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="36" font-weight="700">5-Day Active Streak</text>
    <text x="36" y="155" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">45m logged today • 4h 15m this week</text>
    
    <!-- Progress bar -->
    <rect x="36" y="195" width="708" height="14" rx="7" fill="#2A2A2A"/>
    <rect x="36" y="195" width="560" height="14" rx="7" fill="url(#limeGlow)"/>
  </g>

  <!-- Quick Action Grid -->
  <g transform="translate(60, 1050)">
    <text x="0" y="30" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="22" font-weight="600">WORKFLOW SHORTCUTS</text>
    
    <!-- Action 1 -->
    <g transform="translate(0, 60)">
      <rect width="375" height="180" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="60" cy="65" r="28" fill="#242424"/>
      <circle cx="60" cy="65" r="8" fill="#B8E234"/>
      <text x="36" y="135" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Add Gig</text>
    </g>

    <!-- Action 2 -->
    <g transform="translate(405, 60)">
      <rect width="375" height="180" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="60" cy="65" r="28" fill="#242424"/>
      <rect x="52" y="57" width="16" height="16" rx="4" fill="#B8E234"/>
      <text x="36" y="135" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Log Practice</text>
    </g>

    <!-- Action 3 -->
    <g transform="translate(0, 270)">
      <rect width="375" height="180" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="60" cy="65" r="28" fill="#242424"/>
      <line x1="50" y1="65" x2="70" y2="65" stroke="#B8E234" stroke-width="3"/>
      <line x1="60" y1="55" x2="60" y2="75" stroke="#B8E234" stroke-width="3"/>
      <text x="36" y="135" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">New Invoice</text>
    </g>

    <!-- Action 4 -->
    <g transform="translate(405, 270)">
      <rect width="375" height="180" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="60" cy="65" r="28" fill="#242424"/>
      <polygon points="56,55 70,65 56,75" fill="#B8E234"/>
      <text x="36" y="135" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Setlists</text>
    </g>
  </g>

  <!-- Bottom Navigation Bar -->
  <g transform="translate(0, 1780)">
    <rect width="900" height="170" fill="#141414" stroke="#242424" stroke-width="1"/>
    <g transform="translate(90, 40)">
      <circle cx="50" cy="20" r="6" fill="#B8E234"/>
      <text x="50" y="55" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Home</text>
    </g>
    <g transform="translate(270, 40)">
      <text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Gigs</text>
    </g>
    <g transform="translate(450, 40)">
      <text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Practice</text>
    </g>
    <g transform="translate(630, 40)">
      <text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Profile</text>
    </g>
    <rect x="330" y="130" width="240" height="6" rx="3" fill="#555555"/>
  </g>
</svg>
`;

// 2. Placeholder Gigs (900x1950)
const gigsSvg = `
<svg width="900" height="1950" viewBox="0 0 900 1950" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
  </defs>

  <rect width="900" height="1950" fill="url(#gradDark)"/>

  <!-- Status Bar -->
  <text x="70" y="80" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="28" font-weight="600">9:41</text>
  <circle cx="810" cy="70" r="10" fill="#E2E2DC"/>

  <!-- Title & Action -->
  <g transform="translate(60, 140)">
    <text x="0" y="44" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="44" font-weight="800" letter-spacing="-1">Gig Calendar</text>
    <circle cx="740" cy="30" r="28" fill="#B8E234"/>
    <text x="740" y="39" fill="#0F0F0F" font-family="system-ui, sans-serif" font-size="32" font-weight="700" text-anchor="middle">+</text>
  </g>

  <!-- Segmented filter -->
  <g transform="translate(60, 230)">
    <rect width="780" height="70" rx="35" fill="#181818" stroke="#282828" stroke-width="2"/>
    <rect x="8" y="8" width="375" height="54" rx="27" fill="#242424"/>
    <text x="195" y="44" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">Upcoming (4)</text>
    <text x="585" y="44" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="22" font-weight="600" text-anchor="middle">Past Shows</text>
  </g>

  <!-- Month Header -->
  <g transform="translate(60, 350)">
    <text x="0" y="0" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="22" font-weight="700" letter-spacing="1">OCTOBER 2026</text>
  </g>

  <!-- Gig Card 1 -->
  <g transform="translate(60, 390)">
    <rect width="780" height="260" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <rect x="36" y="36" width="80" height="80" rx="20" fill="#222222"/>
    <text x="76" y="70" fill="#B8E234" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">OCT</text>
    <text x="76" y="102" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">24</text>
    
    <text x="140" y="72" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="32" font-weight="700">The Blue Note Club</text>
    <text x="140" y="108" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">8:30 PM • 2 Sets • Trio</text>

    <line x1="36" y1="145" x2="744" y2="145" stroke="#262626" stroke-width="2"/>
    <text x="36" y="195" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Call Time: 7:00 PM</text>
    <text x="36" y="228" fill="#B8E234" font-family="system-ui, sans-serif" font-size="22" font-weight="600">Setlist Attached</text>
    
    <text x="560" y="210" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Invoice: $450</text>
  </g>

  <!-- Gig Card 2 -->
  <g transform="translate(60, 680)">
    <rect width="780" height="260" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <rect x="36" y="36" width="80" height="80" rx="20" fill="#222222"/>
    <text x="76" y="70" fill="#B8E234" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">OCT</text>
    <text x="76" y="102" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">28</text>
    
    <text x="140" y="72" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="32" font-weight="700">Warehouse 5 Live</text>
    <text x="140" y="108" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">9:00 PM • Headline Show</text>

    <line x1="36" y1="145" x2="744" y2="145" stroke="#262626" stroke-width="2"/>
    <text x="36" y="195" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Call Time: 6:30 PM</text>
    <text x="36" y="228" fill="#B8E234" font-family="system-ui, sans-serif" font-size="22" font-weight="600">Full Band Lineup</text>
    
    <text x="560" y="210" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Invoice: $800</text>
  </g>

  <!-- Gig Card 3 -->
  <g transform="translate(60, 970)">
    <rect width="780" height="260" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <rect x="36" y="36" width="80" height="80" rx="20" fill="#222222"/>
    <text x="76" y="70" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="18" font-weight="700" text-anchor="middle">NOV</text>
    <text x="76" y="102" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="30" font-weight="800" text-anchor="middle">04</text>
    
    <text x="140" y="72" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="32" font-weight="700">Riverside Studio Session</text>
    <text x="140" y="108" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">11:00 AM • Recording Session</text>

    <line x1="36" y1="145" x2="744" y2="145" stroke="#262626" stroke-width="2"/>
    <text x="36" y="195" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Tracking Rhythm Section</text>
    <text x="36" y="228" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="22" font-weight="600">4 Tracks Scheduled</text>
    
    <text x="560" y="210" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="22" font-weight="700">Day Rate: $600</text>
  </g>

  <!-- Bottom Navigation Bar -->
  <g transform="translate(0, 1780)">
    <rect width="900" height="170" fill="#141414" stroke="#242424" stroke-width="1"/>
    <g transform="translate(90, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Home</text></g>
    <g transform="translate(270, 40)">
      <circle cx="50" cy="20" r="6" fill="#B8E234"/>
      <text x="50" y="55" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Gigs</text>
    </g>
    <g transform="translate(450, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Practice</text></g>
    <g transform="translate(630, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Profile</text></g>
    <rect x="330" y="130" width="240" height="6" rx="3" fill="#555555"/>
  </g>
</svg>
`;

// 3. Placeholder Practice (900x1950)
const practiceSvg = `
<svg width="900" height="1950" viewBox="0 0 900 1950" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
    <linearGradient id="limeGlow" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#B8E234"/>
      <stop offset="100%" stop-color="#96C218"/>
    </linearGradient>
  </defs>

  <rect width="900" height="1950" fill="url(#gradDark)"/>

  <!-- Status Bar -->
  <text x="70" y="80" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="28" font-weight="600">9:41</text>
  <circle cx="810" cy="70" r="10" fill="#E2E2DC"/>

  <!-- Title & Action -->
  <g transform="translate(60, 140)">
    <text x="0" y="44" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="44" font-weight="800" letter-spacing="-1">Practice &amp; Goals</text>
    <rect x="580" y="0" width="190" height="60" rx="30" fill="#B8E234"/>
    <text x="675" y="38" fill="#0F0F0F" font-family="system-ui, sans-serif" font-size="22" font-weight="700" text-anchor="middle">+ Log Time</text>
  </g>

  <!-- Weekly Goal Ring / Card -->
  <g transform="translate(60, 240)">
    <rect width="780" height="340" rx="28" fill="#181818" stroke="#282828" stroke-width="2"/>
    <text x="40" y="60" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="700">WEEKLY GOAL PROGRESS</text>
    <text x="40" y="125" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="52" font-weight="800">4h 15m</text>
    <text x="40" y="165" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="24">of 5h 00m target (85%)</text>
    
    <rect x="40" y="210" width="700" height="16" rx="8" fill="#282828"/>
    <rect x="40" y="210" width="595" height="16" rx="8" fill="url(#limeGlow)"/>

    <!-- Days row -->
    <g transform="translate(40, 260)">
      <text x="20" y="30" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700">M ✓</text>
      <text x="120" y="30" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700">T ✓</text>
      <text x="220" y="30" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700">W ✓</text>
      <text x="320" y="30" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700">T ✓</text>
      <text x="420" y="30" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700">F ✓</text>
      <text x="520" y="30" fill="#555555" font-family="system-ui, sans-serif" font-size="20" font-weight="700">S ·</text>
      <text x="620" y="30" fill="#555555" font-family="system-ui, sans-serif" font-size="20" font-weight="700">S ·</text>
    </g>
  </g>

  <!-- Recent Practice History -->
  <g transform="translate(60, 630)">
    <text x="0" y="0" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="22" font-weight="700" letter-spacing="1">PRACTICE SESSIONS</text>

    <!-- Session 1 -->
    <g transform="translate(0, 30)">
      <rect width="780" height="190" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <text x="36" y="55" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Improvisation &amp; Phrasing</text>
      <text x="36" y="95" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">Focus: Dorian and Mixolydian voice leading</text>
      <text x="36" y="145" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Today, 2:30 PM</text>
      <text x="630" y="70" fill="#B8E234" font-family="system-ui, sans-serif" font-size="32" font-weight="800">45 min</text>
    </g>

    <!-- Session 2 -->
    <g transform="translate(0, 250)">
      <rect width="780" height="190" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <text x="36" y="55" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Set 2 Repertoire Run</text>
      <text x="36" y="95" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">Transitions and tempo consistency</text>
      <text x="36" y="145" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Yesterday, 5:00 PM</text>
      <text x="630" y="70" fill="#B8E234" font-family="system-ui, sans-serif" font-size="32" font-weight="800">60 min</text>
    </g>

    <!-- Session 3 -->
    <g transform="translate(0, 470)">
      <rect width="780" height="190" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <text x="36" y="55" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="28" font-weight="700">Metronome &amp; Finger Mechanics</text>
      <text x="36" y="95" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">120-140 BPM subdivisions</text>
      <text x="36" y="145" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20">Wednesday, 11:15 AM</text>
      <text x="630" y="70" fill="#B8E234" font-family="system-ui, sans-serif" font-size="32" font-weight="800">30 min</text>
    </g>
  </g>

  <!-- Bottom Navigation Bar -->
  <g transform="translate(0, 1780)">
    <rect width="900" height="170" fill="#141414" stroke="#242424" stroke-width="1"/>
    <g transform="translate(90, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Home</text></g>
    <g transform="translate(270, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Gigs</text></g>
    <g transform="translate(450, 40)">
      <circle cx="50" cy="20" r="6" fill="#B8E234"/>
      <text x="50" y="55" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Practice</text>
    </g>
    <g transform="translate(630, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Profile</text></g>
    <rect x="330" y="130" width="240" height="6" rx="3" fill="#555555"/>
  </g>
</svg>
`;

// 4. Placeholder Profile (900x1950)
const profileSvg = `
<svg width="900" height="1950" viewBox="0 0 900 1950" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradDark" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#121212"/>
      <stop offset="100%" stop-color="#0A0A0A"/>
    </linearGradient>
  </defs>

  <rect width="900" height="1950" fill="url(#gradDark)"/>

  <!-- Status Bar -->
  <text x="70" y="80" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="28" font-weight="600">9:41</text>
  <circle cx="810" cy="70" r="10" fill="#E2E2DC"/>

  <!-- Profile Card -->
  <g transform="translate(60, 150)">
    <rect width="780" height="420" rx="32" fill="#181818" stroke="#282828" stroke-width="2"/>
    <circle cx="100" cy="110" r="60" fill="#242424" stroke="#B8E234" stroke-width="3"/>
    <text x="100" y="125" fill="#B8E234" font-family="system-ui, sans-serif" font-size="44" font-weight="800" text-anchor="middle">MC</text>
    
    <text x="190" y="95" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="36" font-weight="800">Marcus Cole</text>
    <text x="190" y="135" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="22">Guitarist &amp; Vocalist • London</text>

    <!-- Tags -->
    <g transform="translate(40, 200)">
      <rect x="0" y="0" width="180" height="46" rx="23" fill="#242424"/>
      <text x="90" y="30" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Lead Guitar</text>
      
      <rect x="195" y="0" width="140" height="46" rx="23" fill="#242424"/>
      <text x="265" y="30" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Vocals</text>

      <rect x="350" y="0" width="180" height="46" rx="23" fill="#242424"/>
      <text x="440" y="30" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Neo-Soul / Jazz</text>
    </g>

    <!-- Stats row -->
    <line x1="40" y1="280" x2="740" y2="280" stroke="#262626" stroke-width="2"/>
    <g transform="translate(40, 310)">
      <text x="60" y="40" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">48</text>
      <text x="60" y="75" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle">Gigs Played</text>

      <text x="350" y="40" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">24</text>
      <text x="350" y="75" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle">Connections</text>

      <text x="620" y="40" fill="#B8E234" font-family="system-ui, sans-serif" font-size="34" font-weight="800" text-anchor="middle">120h</text>
      <text x="620" y="75" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="18" text-anchor="middle">Practice Logged</text>
    </g>
  </g>

  <!-- Musician Network / Connections Section -->
  <g transform="translate(60, 610)">
    <text x="0" y="0" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="22" font-weight="700" letter-spacing="1">DISCOVER &amp; CONNECT</text>

    <!-- Connection 1 -->
    <g transform="translate(0, 30)">
      <rect width="780" height="150" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="70" cy="75" r="40" fill="#262626"/>
      <text x="70" y="85" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">SK</text>
      <text x="135" y="65" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Sarah Kim</text>
      <text x="135" y="98" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="20">Session Drummer • London</text>
      
      <rect x="580" y="50" width="160" height="50" rx="25" fill="#242424"/>
      <text x="660" y="82" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Connected</text>
    </g>

    <!-- Connection 2 -->
    <g transform="translate(0, 200)">
      <rect width="780" height="150" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="70" cy="75" r="40" fill="#262626"/>
      <text x="70" y="85" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">DA</text>
      <text x="135" y="65" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">David Adebayo</text>
      <text x="135" y="98" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="20">Bass / Producer • Manchester</text>
      
      <rect x="580" y="50" width="160" height="50" rx="25" fill="#B8E234"/>
      <text x="660" y="82" fill="#0F0F0F" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">+ Connect</text>
    </g>

    <!-- Connection 3 -->
    <g transform="translate(0, 370)">
      <rect width="780" height="150" rx="24" fill="#181818" stroke="#282828" stroke-width="2"/>
      <circle cx="70" cy="75" r="40" fill="#262626"/>
      <text x="70" y="85" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="24" font-weight="700" text-anchor="middle">EL</text>
      <text x="135" y="65" fill="#FFFFFF" font-family="system-ui, sans-serif" font-size="26" font-weight="700">Elena Laurent</text>
      <text x="135" y="98" fill="#B9B9B2" font-family="system-ui, sans-serif" font-size="20">Keys &amp; Synths • Bristol</text>
      
      <rect x="580" y="50" width="160" height="50" rx="25" fill="#B8E234"/>
      <text x="660" y="82" fill="#0F0F0F" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">+ Connect</text>
    </g>
  </g>

  <!-- Bottom Navigation Bar -->
  <g transform="translate(0, 1780)">
    <rect width="900" height="170" fill="#141414" stroke="#242424" stroke-width="1"/>
    <g transform="translate(90, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Home</text></g>
    <g transform="translate(270, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Gigs</text></g>
    <g transform="translate(450, 40)"><text x="50" y="55" fill="#8D8D86" font-family="system-ui, sans-serif" font-size="20" font-weight="500" text-anchor="middle">Practice</text></g>
    <g transform="translate(630, 40)">
      <circle cx="50" cy="20" r="6" fill="#B8E234"/>
      <text x="50" y="55" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Profile</text>
    </g>
    <rect x="330" y="130" width="240" height="6" rx="3" fill="#555555"/>
  </g>
</svg>
`;

// 5. OG Image (1200x630)
const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0F0F0F"/>
      <stop offset="100%" stop-color="#181818"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bgGrad)"/>
  
  <!-- Subtle border -->
  <rect x="24" y="24" width="1152" height="582" rx="20" fill="none" stroke="#222222" stroke-width="2"/>

  <!-- Logo Mark -->
  <g transform="translate(100, 130)">
    <circle cx="36" cy="48" r="22" fill="#B8E234"/>
    <text x="76" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="64" font-weight="800" letter-spacing="-2">Riffly</text>
  </g>

  <!-- Tagline -->
  <g transform="translate(100, 270)">
    <text x="0" y="0" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="56" font-weight="800" letter-spacing="-1.5">Your music life, finally in flow.</text>
    <text x="0" y="60" fill="#B9B9B2" font-family="system-ui, -apple-system, sans-serif" font-size="28" font-weight="400">Gigs, setlists, practice and invoices built for working musicians.</text>
  </g>

  <!-- Capability Badges -->
  <g transform="translate(100, 440)">
    <rect x="0" y="0" width="160" height="52" rx="26" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="1.5"/>
    <text x="80" y="33" fill="#B8E234" font-family="system-ui, sans-serif" font-size="20" font-weight="700" text-anchor="middle">Gig Calendar</text>

    <rect x="180" y="0" width="140" height="52" rx="26" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="1.5"/>
    <text x="250" y="33" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Setlists</text>

    <rect x="340" y="0" width="180" height="52" rx="26" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="1.5"/>
    <text x="430" y="33" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Practice Goals</text>

    <rect x="540" y="0" width="150" height="52" rx="26" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="1.5"/>
    <text x="615" y="33" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Invoices</text>

    <rect x="710" y="0" width="180" height="52" rx="26" fill="#1C1C1C" stroke="#2C2C2C" stroke-width="1.5"/>
    <text x="800" y="33" fill="#E2E2DC" font-family="system-ui, sans-serif" font-size="20" font-weight="600" text-anchor="middle">Musician Profile</text>
  </g>
</svg>
`;

// 6. Favicon / Apple Touch Icon (512x512)
const iconSvg = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <rect width="512" height="512" rx="110" fill="#0F0F0F"/>
  <circle cx="160" cy="256" r="48" fill="#B8E234"/>
  <text x="240" y="295" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="140" font-weight="800" letter-spacing="-5">R</text>
</svg>
`;

async function main() {
  await svgToPng(homeSvg, path.join(imagesDir, 'placeholder-home.png'), 900, 1950);
  await svgToPng(gigsSvg, path.join(imagesDir, 'placeholder-gigs.png'), 900, 1950);
  await svgToPng(practiceSvg, path.join(imagesDir, 'placeholder-practice.png'), 900, 1950);
  await svgToPng(profileSvg, path.join(imagesDir, 'placeholder-profile.png'), 900, 1950);
  await svgToPng(ogSvg, path.join(imagesDir, 'og-riffly.png'), 1200, 630);
  await svgToPng(iconSvg, path.join(publicDir, 'apple-touch-icon.png'), 180, 180);
  await svgToPng(iconSvg, path.join(publicDir, 'favicon.ico'), 64, 64);
  console.log('All image assets generated successfully.');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
