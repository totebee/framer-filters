import * as React from "react";
import { FramerFilters } from "./FramerFilters";

export function Demo() {
  const [currentImage, setCurrentImage] = React.useState(0);
  
  const demoImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
    "https://images.unsplash.com/photo-1518837695005-2083093ee35b"
  ];

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: "0 auto", 
      padding: "40px 20px",
      fontFamily: "Inter, sans-serif"
    }}>
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h1 style={{ fontSize: 48, marginBottom: 16, color: "#1a1a1a" }}>
          Framer Filters
        </h1>
        <p style={{ fontSize: 20, color: "#666", marginBottom: 32 }}>
          Professional image filters for Framer - 30+ effects with live preview
        </p>
        
        {/* Image selector */}
        <div style={{ marginBottom: 32 }}>
          <p style={{ marginBottom: 16, fontSize: 16 }}>Choose a demo image:</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            {demoImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                style={{
                  width: 80,
                  height: 60,
                  border: currentImage === i ? "3px solid #0070f3" : "2px solid #ddd",
                  borderRadius: 8,
                  overflow: "hidden",
                  cursor: "pointer",
                  background: "none"
                }}
              >
                <img 
                  src={img} 
                  alt={`Demo ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main plugin */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <FramerFilters imageUrl={demoImages[currentImage]} />
      </div>

      {/* Features section */}
      <div style={{ marginTop: 60 }}>
        <h2 style={{ textAlign: "center", marginBottom: 40, fontSize: 32 }}>
          Features
        </h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
          gap: 32 
        }}>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎨</div>
            <h3 style={{ marginBottom: 12 }}>30+ Professional Filters</h3>
            <p style={{ color: "#666" }}>
              From basic effects to premium stylized presets like Vintage, Cinematic, and Cyberpunk.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>⚡</div>
            <h3 style={{ marginBottom: 12 }}>Live Preview</h3>
            <p style={{ color: "#666" }}>
              See changes instantly as you apply filters and adjust values in real-time.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🎛️</div>
            <h3 style={{ marginBottom: 12 }}>Adjustable Sliders</h3>
            <p style={{ color: "#666" }}>
              Fine-tune filter parameters with intuitive sliders for perfect results.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>💾</div>
            <h3 style={{ marginBottom: 12 }}>Custom Presets</h3>
            <p style={{ color: "#666" }}>
              Save and reuse your own filter combinations for consistent branding.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📤</div>
            <h3 style={{ marginBottom: 12 }}>Export Functionality</h3>
            <p style={{ color: "#666" }}>
              Download filtered images as high-quality PNG files for use in other projects.
            </p>
          </div>
          <div style={{ textAlign: "center", padding: 24 }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>📱</div>
            <h3 style={{ marginBottom: 12 }}>Responsive Design</h3>
            <p style={{ color: "#666" }}>
              Works perfectly on desktop and mobile devices with accessible controls.
            </p>
          </div>
        </div>
      </div>

      {/* Usage section */}
      <div style={{ marginTop: 60, textAlign: "center" }}>
        <h2 style={{ marginBottom: 32, fontSize: 32 }}>How to Use</h2>
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", 
          gap: 24,
          maxWidth: 800,
          margin: "0 auto"
        }}>
          <div style={{ padding: 20, background: "#f8f9fa", borderRadius: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>1</div>
            <h4 style={{ marginBottom: 8 }}>Select a Filter</h4>
            <p style={{ fontSize: 14, color: "#666" }}>
              Choose from 30+ predefined filters or start with Custom to build your own.
            </p>
          </div>
          <div style={{ padding: 20, background: "#f8f9fa", borderRadius: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>2</div>
            <h4 style={{ marginBottom: 8 }}>Adjust Values</h4>
            <p style={{ fontSize: 14, color: "#666" }}>
              Use sliders to fine-tune filter parameters and see changes instantly.
            </p>
          </div>
          <div style={{ padding: 20, background: "#f8f9fa", borderRadius: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>3</div>
            <h4 style={{ marginBottom: 8 }}>Save Presets</h4>
            <p style={{ fontSize: 14, color: "#666" }}>
              Create and save your own custom filter combinations for reuse.
            </p>
          </div>
          <div style={{ padding: 20, background: "#f8f9fa", borderRadius: 12 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>4</div>
            <h4 style={{ marginBottom: 8 }}>Export</h4>
            <p style={{ fontSize: 14, color: "#666" }}>
              Download the filtered image as a PNG file for use in other projects.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ 
        marginTop: 60, 
        textAlign: "center", 
        padding: "40px 0", 
        borderTop: "1px solid #eee",
        color: "#666"
      }}>
        <p style={{ marginBottom: 8 }}>
          Created with ❤️ by <a href="https://github.com/totebee" style={{ color: "#0070f3" }}>Bills Walls</a>
        </p>
        <p style={{ fontSize: 14 }}>
          Available on the <a href="https://www.framer.com/community/" style={{ color: "#0070f3" }}>Framer Community Marketplace</a>
        </p>
      </div>
    </div>
  );
} 