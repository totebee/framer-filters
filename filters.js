export const FILTERS = [
  // Custom Filter (for building from scratch)
  { name: "Custom", css: "" },
  // Basic Filters
  { name: "Grayscale", css: "grayscale(100%)" },
  { name: "Sepia", css: "sepia(100%)" },
  { name: "Blur", css: "blur(5px)" },
  { name: "Brightness", css: "brightness(1.5)" },
  { name: "Contrast", css: "contrast(150%)" },
  { name: "Saturation", css: "saturate(200%)" },
  { name: "Hue Rotate", css: "hue-rotate(45deg)" },
  { name: "Invert", css: "invert(100%)" },
  { name: "Opacity", css: "opacity(0.6)" },
  { name: "Drop Shadow", css: "drop-shadow(2px 4px 6px black)" },
  // Stylized Presets
  { name: "Vintage", css: "sepia(40%) contrast(90%) brightness(1.1)" },
  { name: "Cinematic", css: "contrast(120%) brightness(1.2) saturate(150%)" },
  { name: "Cool Mist", css: "grayscale(30%) hue-rotate(190deg) blur(2px)" },
  { name: "Golden Hour", css: "sepia(60%) brightness(1.3) saturate(120%)" },
  { name: "Night Mode", css: "brightness(0.6) contrast(130%)" },
  { name: "Matte Film", css: "contrast(90%) brightness(0.95) saturate(80%)" },
  { name: "Aqua Glow", css: "hue-rotate(180deg) saturate(140%)" },
  { name: "Deep Fade", css: "grayscale(50%) brightness(0.85) contrast(120%)" },
  { name: "Retro Pop", css: "sepia(20%) hue-rotate(45deg) saturate(250%)" },
  { name: "Black & White", css: "grayscale(100%) contrast(120%)" },
  // Premium/Invented
  { name: "Dream Blur", css: "blur(10px) brightness(1.2)" },
  { name: "Ghost Light", css: "opacity(0.5) contrast(80%)" },
  { name: "Frosted Glass", css: "blur(8px) brightness(1.1)", backdrop: true },
  { name: "Cyberpunk", css: "hue-rotate(270deg) saturate(300%) contrast(130%)" },
  { name: "Rose Tint", css: "sepia(10%) hue-rotate(-30deg) saturate(140%)" },
  { name: "Neon Pop", css: "contrast(140%) brightness(1.4) saturate(200%)" },
  { name: "Monochrome Dust", css: "grayscale(100%) blur(2px) opacity(0.8)" },
  { name: "Lucid Dream", css: "hue-rotate(90deg) brightness(1.5) saturate(180%)" },
  { name: "Ocean Breeze", css: "hue-rotate(170deg) blur(1px) saturate(120%)" },
  { name: "Vignette Frame", css: "", vignette: true }
]; 