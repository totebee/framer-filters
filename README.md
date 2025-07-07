# Framer Filters

A powerful visual image filter toolkit for Framer that lets you apply 30+ beautiful CSS-based filters to images directly on the canvas — just like in Figma or Canva, but without any coding required.

**Created by [Bills Walls](https://github.com/totebee)**

## ✨ Features

- **30+ Professional Filters**: From basic effects to premium stylized presets
- **Live Preview**: See changes instantly as you apply filters
- **Adjustable Sliders**: Fine-tune filter values with real-time updates
- **Export Functionality**: Download filtered images as high-quality PNG files
- **Custom Presets**: Save and reuse your own filter combinations
- **Modern UI**: Clean, intuitive interface designed for designers

## 🎨 Filter Categories

### Basic Filters
- Grayscale, Sepia, Blur, Brightness, Contrast
- Saturation, Hue Rotate, Invert, Opacity, Drop Shadow

### Stylized Presets
- Vintage, Cinematic, Cool Mist, Golden Hour
- Night Mode, Matte Film, Aqua Glow, Deep Fade
- Retro Pop, Black & White

### Premium Effects
- Dream Blur, Ghost Light, Frosted Glass
- Cyberpunk, Rose Tint, Neon Pop
- Monochrome Dust, Lucid Dream, Ocean Breeze
- Vignette Frame

## 🚀 Installation

### Option 1: Framer Community Marketplace (Recommended)
1. Open your Framer project
2. Go to the Community tab
3. Search for "Framer Filters"
4. Click "Add to Project"

### Option 2: Manual Installation
```bash
npm install framer-filters
```

### Option 3: Direct Copy
Copy `FramerFilters.jsx` and `filters.js` directly into your project.

## 📖 Usage

### Basic Usage
```jsx
import { FramerFilters } from "framer-filters";

export default function App() {
  return (
    <FramerFilters 
      imageUrl="https://images.unsplash.com/photo-1506744038136-46273834b3fb" 
    />
  );
}
```

### With Custom Image
```jsx
import { FramerFilters } from "framer-filters";

export default function MyComponent() {
  return (
    <FramerFilters 
      imageUrl="/path/to/your/image.jpg" 
    />
  );
}
```

## 🎛️ How to Use

1. **Select a Filter**: Choose from 30+ predefined filters
2. **Adjust Values**: Use sliders to fine-tune filter parameters
3. **Save Presets**: Create and save your own custom filter combinations
4. **Export**: Download the filtered image as a PNG file

## 🔧 Customization

The component is fully customizable and can be styled to match your design system. All styles are inline and can be easily modified.

## 📱 Browser Support

- Chrome 53+
- Firefox 35+
- Safari 9.1+
- Edge 79+

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request to [the repository](https://github.com/totebee/framer-filters).

## 📄 License

MIT License - feel free to use this in your personal and commercial projects.

## 🙏 Acknowledgments

Inspired by the filter capabilities of Figma and Canva, built for the Framer community.

---

**Made with ❤️ by [Bills Walls](https://github.com/totebee) for the Framer community** 