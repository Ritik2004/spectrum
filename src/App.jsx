import { useState, useEffect } from 'react';
import ColorThief from 'colorthief';
import ImageUpload from './components/ImageUpload';
import ColorPalette from './components/ColorPalette';
import './App.css';

function App() {
  const [image, setImage] = useState(null);
  const [colors, setColors] = useState([]);
  const [theme, setTheme] = useState('light');

  const handleImageUpload = (uploadedImage) => {
    setImage(uploadedImage);
    const img = new Image();
    img.src = uploadedImage;
    img.onload = () => {
      const colorThief = new ColorThief();
      const palette = colorThief.getPalette(img, 8);
      setColors(palette);
    };
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`App ${theme}`}>
      <div className="header-container">
        <header>
          <h1>Spectrum</h1>
          <p>Instantly grab the perfect colors from your images.</p>
        </header>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <p>Upload any photo, and our smart color picker will extract a beautiful palette.</p>
          <p>Whether you're designing, decorating, or just feeling inspired — get color combos that truly match your vibe.</p>
          <ImageUpload onImageUpload={handleImageUpload} />
        </div>
        <div className="right-panel">
          {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
          {colors.length > 0 && <ColorPalette colors={colors} />}
        </div>
      </div>
    </div>
  );
}

export default App;

