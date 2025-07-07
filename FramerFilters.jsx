import * as React from "react";
import { FILTERS } from "./filters";

// Helper: parse CSS filter string into an object
function parseFilterString(str) {
  const regex = /(\w+)-?(\w+)?\(([^)]+)\)/g;
  let match, result = {};
  while ((match = regex.exec(str))) {
    const key = match[2] ? `${match[1]}-${match[2]}` : match[1];
    result[key] = match[3];
  }
  return result;
}

// Helper: build CSS filter string from values
function buildFilterString(values) {
  return Object.entries(values)
    .map(([k, v]) => `${k}(${v})`)
    .join(" ");
}

const SLIDER_CONFIG = {
  blur: { min: 0, max: 20, step: 0.1, unit: "px", label: "Blur" },
  brightness: { min: 0, max: 3, step: 0.01, unit: "", label: "Brightness" },
  contrast: { min: 0, max: 300, step: 1, unit: "%", label: "Contrast" },
  saturate: { min: 0, max: 300, step: 1, unit: "%", label: "Saturation" },
  "hue-rotate": { min: 0, max: 360, step: 1, unit: "deg", label: "Hue Rotate" },
  sepia: { min: 0, max: 100, step: 1, unit: "%", label: "Sepia" },
  grayscale: { min: 0, max: 100, step: 1, unit: "%", label: "Grayscale" },
  invert: { min: 0, max: 100, step: 1, unit: "%", label: "Invert" },
  opacity: { min: 0, max: 1, step: 0.01, unit: "", label: "Opacity" }
};

export function FramerFilters({ imageUrl }) {
  const [selected, setSelected] = React.useState(0);
  const [imageError, setImageError] = React.useState(false);
  const filter = FILTERS[selected];
  
  // Check if filter has adjustable values
  const hasAdjustableValues = (filter) => {
    const values = parseFilterString(filter.css);
    return Object.keys(values).some(key => SLIDER_CONFIG[key]);
  };
  
  const isCustomizable = hasAdjustableValues(filter);

  // State for adjustable values
  const [customValues, setCustomValues] = React.useState(() => parseFilterString(filter.css));

  // Presets state (localStorage)
  const [presets, setPresets] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem("framerFilterPresets") || "[]");
    } catch {
      return [];
    }
  });
  const [presetName, setPresetName] = React.useState("");

  React.useEffect(() => {
    setCustomValues(parseFilterString(filter.css));
    setImageError(false);
  }, [selected]);

  // Build filter string
  const filterString = isCustomizable ? buildFilterString(customValues) : filter.css;

  // Handle image error
  const handleImageError = () => {
    setImageError(true);
  };

  // Sliders for adjustable filters
  const sliders = Object.entries(customValues)
    .filter(([k]) => SLIDER_CONFIG[k])
    .map(([k, v]) => {
      const config = SLIDER_CONFIG[k];
      // Remove unit for slider value
      let value = v.replace(config.unit, "");
      return (
        <div key={k} style={{ margin: "8px 0" }}>
          <label style={{ fontSize: 13 }} htmlFor={`slider-${k}`}>
            {config.label}: {value}{config.unit}
          </label>
          <input
            id={`slider-${k}`}
            type="range"
            min={config.min}
            max={config.max}
            step={config.step}
            value={value}
            onChange={e => {
              const newVal = e.target.value + config.unit;
              setCustomValues(cv => ({ ...cv, [k]: newVal }));
            }}
            style={{ width: 180, marginLeft: 8 }}
            aria-label={`Adjust ${config.label}`}
          />
        </div>
      );
    });

  // Export filtered image as PNG
  const handleExport = async () => {
    if (imageError) {
      alert("Cannot export: Image failed to load");
      return;
    }
    
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.src = imageUrl;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx.filter = filterString;
      ctx.drawImage(img, 0, 0);
      canvas.toBlob(blob => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "filtered-image.png";
        a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    };
    img.onerror = () => {
      alert("Cannot export: Image failed to load");
    };
  };

  // Save preset
  const handleSavePreset = () => {
    if (!presetName.trim()) return;
    const newPreset = { name: presetName.trim(), values: { ...customValues } };
    const updated = [...presets, newPreset];
    setPresets(updated);
    localStorage.setItem("framerFilterPresets", JSON.stringify(updated));
    setPresetName("");
  };

  // Load preset
  const handleLoadPreset = (preset) => {
    setCustomValues(preset.values);
  };

  return (
    <div style={{ 
      width: "100%", 
      maxWidth: 400, 
      margin: "0 auto", 
      fontFamily: "Inter, sans-serif",
      padding: "0 16px"
    }}>
      <h2 style={{ textAlign: "center", marginBottom: 16 }}>Framer Filters</h2>
      <div style={{ 
        display: "flex", 
        gap: 8, 
        flexWrap: "wrap", 
        marginBottom: 16, 
        justifyContent: "center" 
      }}>
        {FILTERS.map((f, i) => (
          <button
            key={f.name}
            style={{
              padding: "6px 12px",
              border: selected === i ? "2px solid #0070f3" : "1px solid #ccc",
              borderRadius: 6,
              background: selected === i ? "#eaf4ff" : "#fff",
              cursor: "pointer",
              fontWeight: selected === i ? 600 : 400,
              fontSize: 14
            }}
            onClick={() => setSelected(i)}
            aria-label={`Apply ${f.name} filter`}
            aria-pressed={selected === i}
          >
            {f.name}
          </button>
        ))}
      </div>
      {isCustomizable && (
        <div style={{ marginBottom: 12 }}>
          {sliders}
        </div>
      )}
      <div style={{ 
        position: "relative", 
        width: "100%", 
        maxWidth: 320, 
        height: 240, 
        margin: "0 auto", 
        borderRadius: 12, 
        overflow: "hidden", 
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        background: "#f5f5f5"
      }}>
        {imageError ? (
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            color: "#666",
            fontSize: 14
          }}>
            Image failed to load
          </div>
        ) : (
          <img
            src={imageUrl}
            alt="Preview"
            onError={handleImageError}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: filterString,
              ...(filter.backdrop ? { backdropFilter: filterString } : {}),
              opacity: filterString.includes("opacity") ? undefined : 1,
              transition: "filter 0.3s, opacity 0.3s"
            }}
          />
        )}
        {filter.vignette && !imageError && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              borderRadius: 12,
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.5) 100%)"
            }}
          />
        )}
      </div>
      <div style={{ textAlign: "center", marginTop: 16 }}>
        <button
          onClick={handleExport}
          disabled={imageError}
          style={{
            padding: "8px 18px",
            background: imageError ? "#ccc" : "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: 6,
            fontWeight: 600,
            fontSize: 15,
            cursor: imageError ? "not-allowed" : "pointer",
            boxShadow: "0 1px 4px rgba(0,0,0,0.07)"
          }}
          aria-label="Export filtered image as PNG"
        >
          Export as PNG
        </button>
      </div>
      {/* Preset Save/Load UI */}
      {isCustomizable && (
        <div style={{ marginTop: 18, textAlign: "center" }}>
          <div style={{ marginBottom: 8 }}>
            <input
              type="text"
              placeholder="Preset name"
              value={presetName}
              onChange={e => setPresetName(e.target.value)}
              style={{ padding: 6, borderRadius: 4, border: "1px solid #ccc", width: 140, marginRight: 8 }}
              aria-label="Enter preset name"
            />
            <button
              onClick={handleSavePreset}
              disabled={!presetName.trim()}
              style={{ 
                padding: "6px 12px", 
                borderRadius: 4, 
                border: "none", 
                background: presetName.trim() ? "#222" : "#ccc", 
                color: "#fff", 
                fontWeight: 500, 
                cursor: presetName.trim() ? "pointer" : "not-allowed" 
              }}
              aria-label="Save current filter settings as preset"
            >
              Save Preset
            </button>
          </div>
          {presets.length > 0 && (
            <div style={{ marginTop: 8 }}>
              <div style={{ fontSize: 13, marginBottom: 4 }}>Saved Presets:</div>
              {presets.map((p, i) => (
                <button
                  key={p.name + i}
                  onClick={() => handleLoadPreset(p)}
                  style={{
                    margin: 2,
                    padding: "4px 10px",
                    borderRadius: 4,
                    border: "1px solid #aaa",
                    background: "#f7f7f7",
                    fontSize: 13,
                    cursor: "pointer"
                  }}
                  aria-label={`Load preset: ${p.name}`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
} 