/****************************************************
             CSS variables and classes
   Many of which are inspired by TailwindCSS classes
*****************************************************/

export const theme = {
    /********************************
     Responsive media query variables
     ********************************/
    screenSm: "640px",
    screenMd: "768px",
    screenLg: "1024px",
    screenXl: "1280px",
    screen2xl: "1536px",
    
    /******
     Colors
     ******/
    
    /* Slate */
    colorSlate50: "#f8fafc",
    colorSlate100: "#f1f5f9",
    colorSlate200: "#e2e8f0",
    colorSlate300: "#cbd5e1",
    colorSlate400: "#94a3b8",
    colorSlate500: "#64748b",
    colorSlate600: "#475569",
    colorSlate700: "#334155",
    colorSlate800: "#1e293b",
    colorSlate900: "#0f172a",
    colorSlate950: "#020617",
    
    /* Gray */
    colorGray50: "#f9fafb",
    colorGray100: "#f3f4f6",
    colorGray200: "#e5e7eb",
    colorGray300: "#d1d5db",
    colorGray400: "#9ca3af",
    colorGray500: "#6b7280",
    colorGray600: "#4b5563",
    colorGray700: "#374151",
    colorGray800: "#1f2937",
    colorGray900: "#111827",
    colorGray950: "#030712",
    
    /* Zinc */
    colorZinc50: "#fafafa",
    colorZinc100: "#f4f4f5",
    colorZinc200: "#e4e4e7",
    colorZinc300: "#d4d4d8",
    colorZinc400: "#a1a1aa",
    colorZinc500: "#71717a",
    colorZinc600: "#52525b",
    colorZinc700: "#3f3f46",
    colorZinc800: "#27272a",
    colorZinc900: "#18181b",
    colorZinc950: "#09090b",
    
    /* Neutral */
    colorNeutral50: "#fafafa",
    colorNeutral100: "#f5f5f5",
    colorNeutral200: "#e5e5e5",
    colorNeutral300: "#d4d4d4",
    colorNeutral400: "#a3a3a3",
    colorNeutral500: "#737373",
    colorNeutral600: "#525252",
    colorNeutral700: "#404040",
    colorNeutral800: "#262626",
    colorNeutral900: "#171717",
    colorNeutral950: "#0a0a0a",
    
    /* Stone */
    colorStone50: "#fafaf9",
    colorStone100: "#f5f5f4",
    colorStone200: "#e7e5e4",
    colorStone300: "#d6d3d1",
    colorStone400: "#a8a29e",
    colorStone500: "#78716c",
    colorStone600: "#57534e",
    colorStone700: "#44403c",
    colorStone800: "#292524",
    colorStone900: "#1c1917",
    colorStone950: "#0c0a09",
    
    /* Red */
    colorRed50: "#fef2f2",
    colorRed100: "#fee2e2",
    colorRed200: "#fecaca",
    colorRed300: "#fca5a5",
    colorRed400: "#f87171",
    colorRed500: "#ef4444",
    colorRed600: "#dc2626",
    colorRed700: "#b91c1c",
    colorRed800: "#991b1b",
    colorRed900: "#7f1d1d",
    colorRed950: "#450a0a",
    
    /* Orange */
    colorOrange50: "#fff7ed",
    colorOrange100: "#ffedd5",
    colorOrange200: "#fed7aa",
    colorOrange300: "#fdba74",
    colorOrange400: "#fb923c",
    colorOrange500: "#f97316",
    colorOrange600: "#ea580c",
    colorOrange700: "#c2410c",
    colorOrange800: "#9a3412",
    colorOrange900: "#7c2d12",
    colorOrange950: "#431407",
    
    /* Amber */
    colorAmber50: "#fffbeb",
    colorAmber100: "#fef3c7",
    colorAmber200: "#fde68a",
    colorAmber300: "#fcd34d",
    colorAmber400: "#fbbf24",
    colorAmber500: "#f59e0b",
    colorAmber600: "#d97706",
    colorAmber700: "#b45309",
    colorAmber800: "#92400e",
    colorAmber900: "#78350f",
    colorAmber950: "#451a03",
    
    /* Yellow */
    colorYellow50: "#fefce8",
    colorYellow100: "#fef9c3",
    colorYellow200: "#fef08a",
    colorYellow300: "#fde047",
    colorYellow400: "#facc15",
    colorYellow500: "#eab308",
    colorYellow600: "#ca8a04",
    colorYellow700: "#a16207",
    colorYellow800: "#854d0e",
    colorYellow900: "#713f12",
    colorYellow950: "#422006",

    /* Lime */
    colorLime50: "#f7fee7",
    colorLime100: "#ecfccb",
    colorLime200: "#d9f99d",
    colorLime300: "#bef264",
    colorLime400: "#a3e635",
    colorLime500: "#84cc16",
    colorLime600: "#65a30d",
    colorLime700: "#4d7c0f",
    colorLime800: "#3f6212",
    colorLime900: "#365314",
    colorLime950: "#1a2e05",

    /* Green */
    colorGreen50: "#f0fdf4",
    colorGreen100: "#dcfce7",
    colorGreen200: "#bbf7d0",
    colorGreen300: "#86efac",
    colorGreen400: "#4ade80",
    colorGreen500: "#22c55e",
    colorGreen600: "#16a34a",
    colorGreen700: "#15803d",
    colorGreen800: "#166534",
    colorGreen900: "#14532d",
    colorGreen950: "#052e16",

    /* Emerald */
    colorEmerald50: "#ecfdf5",
    colorEmerald100: "#d1fae5",
    colorEmerald200: "#a7f3d0",
    colorEmerald300: "#6ee7b7",
    colorEmerald400: "#34d399",
    colorEmerald500: "#10b981",
    colorEmerald600: "#059669",
    colorEmerald700: "#047857",
    colorEmerald800: "#065f46",
    colorEmerald900: "#064e3b",
    colorEmerald950: "#022c22",

    /* Teal */
    colorTeal50: "#f0fdfa",
    colorTeal100: "#ccfbf1",
    colorTeal200: "#99f6e4",
    colorTeal300: "#5eead4",
    colorTeal400: "#2dd4bf",
    colorTeal500: "#14b8a6",
    colorTeal600: "#0d9488",
    colorTeal700: "#0f766e",
    colorTeal800: "#115e59",
    colorTeal900: "#134e4a",
    colorTeal950: "#042f2e",

    /* Cyan */
    colorCyan50: "#ecfeff",
    colorCyan100: "#cffafe",
    colorCyan200: "#a5f3fc",
    colorCyan300: "#67e8f9",
    colorCyan400: "#22d3ee",
    colorCyan500: "#06b6d4",
    colorCyan600: "#0891b2",
    colorCyan700: "#0e7490",
    colorCyan800: "#155e75",
    colorCyan900: "#164e63",
    colorCyan950: "#083344",

    /* Sky */
    colorSky50: "#f0f9ff",
    colorSky100: "#e0f2fe",
    colorSky200: "#bae6fd",
    colorSky300: "#7dd3fc",
    colorSky400: "#38bdf8",
    colorSky500: "#0ea5e9",
    colorSky600: "#0284c7",
    colorSky700: "#0369a1",
    colorSky800: "#075985",
    colorSky900: "#0c4a6e",
    colorSky950: "#082f49",

    /* Blue */
    colorBlue50: "#eff6ff",
    colorBlue100: "#dbeafe",
    colorBlue200: "#bfdbfe",
    colorBlue300: "#93c5fd",
    colorBlue400: "#60a5fa",
    colorBlue500: "#3b82f6",
    colorBlue600: "#2563eb",
    colorBlue700: "#1d4ed8",
    colorBlue800: "#1e40af",
    colorBlue900: "#1e3a8a",
    colorBlue950: "#172554",

    /* Indigo */
    colorIndigo50: "#eef2ff",
    colorIndigo100: "#e0e7ff",
    colorIndigo200: "#c7d2fe",
    colorIndigo300: "#a5b4fc",
    colorIndigo400: "#818cf8",
    colorIndigo500: "#6366f1",
    colorIndigo600: "#4f46e5",
    colorIndigo700: "#4338ca",
    colorIndigo800: "#3730a3",
    colorIndigo900: "#312e81",
    colorIndigo950: "#1e1b4b",

    /* Violet */
    colorViolet50: "#f5f3ff",
    colorViolet100: "#ede9fe",
    colorViolet200: "#ddd6fe",
    colorViolet300: "#c4b5fd",
    colorViolet400: "#a78bfa",
    colorViolet500: "#8b5cf6",
    colorViolet600: "#7c3aed",
    colorViolet700: "#6d28d9",
    colorViolet800: "#5b21b6",
    colorViolet900: "#4c1d95",
    colorViolet950: "#2e1065",

    /* Purple */
    colorPurple50: "#faf5ff",
    colorPurple100: "#f3e8ff",
    colorPurple200: "#e9d5ff",
    colorPurple300: "#d8b4fe",
    colorPurple400: "#c084fc",
    colorPurple500: "#a855f7",
    colorPurple600: "#9333ea",
    colorPurple700: "#7e22ce",
    colorPurple800: "#6b21a8",
    colorPurple900: "#581c87",
    colorPurple950: "#3b0764",

    /* Fuchsia */
    colorFuchsia50: "#fdf4ff",
    colorFuchsia100: "#fae8ff",
    colorFuchsia200: "#f5d0fe",
    colorFuchsia300: "#f0abfc",
    colorFuchsia400: "#e879f9",
    colorFuchsia500: "#d946ef",
    colorFuchsia600: "#c026d3",
    colorFuchsia700: "#a21caf",
    colorFuchsia800: "#86198f",
    colorFuchsia900: "#701a75",
    colorFuchsia950: "#4a044e",

    /* Pink */
    colorPink50: "#fdf2f8",
    colorPink100: "#fce7f3",
    colorPink200: "#fbcfe8",
    colorPink300: "#f9a8d4",
    colorPink400: "#f472b6",
    colorPink500: "#ec4899",
    colorPink600: "#db2777",
    colorPink700: "#be185d",
    colorPink800: "#9d174d",
    colorPink900: "#831843",
    colorPink950: "#500724",

    /* Rose */
    colorRose50: "#fff1f2",
    colorRose100: "#ffe4e6",
    colorRose200: "#fecdd3",
    colorRose300: "#fda4af",
    colorRose400: "#fb7185",
    colorRose500: "#f43f5e",
    colorRose600: "#e11d48",
    colorRose700: "#be123c",
    colorRose800: "#9f1239",
    colorRose900: "#881337",
    colorRose950: "#4c0519",

    /*******
     Spacing
     *******/
    spacing1: "0.25rem",
    spacing2: "0.5rem",
    spacing3: "0.75rem",
    spacing4: "1rem",
    spacing5: "1.25rem",
    spacing6: "1.5rem",
    spacing7: "1.75rem",
    spacing8: "2rem",
    spacing9: "2.25rem",
    spacing10: "2.5rem",
    spacing11: "2.75rem",
    spacing12: "3rem",
    spacing14: "3.5rem",
    spacing16: "4rem",
    spacing20: "5rem",
    spacing24: "6rem",
    spacing28: "7rem",
    spacing32: "8rem",
    spacing36: "9rem",
    spacing40: "10rem",
    spacing44: "11rem",
    spacing48: "12rem",
    spacing52: "13rem",
    spacing56: "14rem",
    spacing60: "15rem",
    spacing64: "16rem",
    spacing72: "18rem",
    spacing80: "20rem",
    spacing96: "24rem",

    /* Fonts */
    fontXs: "0.75rem",
    fontSm: "0.875rem",
    fontBase: "1rem",
    fontLg: "1.125rem",
    fontXl: "1.25rem",
    font2xl: "1.5rem",
    font3xl: "1.875rem",
    font4xl: "2.25rem",
    font5xl: "3rem",
    font6xl: "3.75rem",
    font7xl: "4.5rem",
    font8xl: "6rem",
    font9xl: "8rem",

    /* Border Radius */
    borderRoundedXs: "0.125rem",
    borderRoundedSm: "0.25rem",
    borderRoundedMd: "0.375rem",
    borderRoundedLg: "0.5rem",
    borderRoundedXl: "0.75rem",
    borderRounded2xl: "1rem",
    borderRounded3xl: "1.5rem",
    borderRoundedFull: "9999px",

    /* Box shadow */
    boxShadowXs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    boxShadowSm: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    boxShadowMd: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    boxShadowLg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    boxShadowXl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    boxShadow2xl: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    boxShadowInset: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
}