import { useState, useEffect } from 'react';
import './App.css';
import { fetchRandomCatImage } from './services/api';

function App() {
  const [cat, setCat] = useState(null);
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  const loadCat = async () => {
    try {
      setLoading(true);
      const data = await fetchRandomCatImage();
      if (data) {
        setCat(data);
      }
    } catch (error) {
      console.error("Error fetching cat:", error);
    } finally {
      // Small delay for better UX and animation feel
      setTimeout(() => setLoading(false), 300);
    }
  };

  useEffect(() => {
    loadCat();
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  return (
    <div className="glass-card">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
        {theme === 'light' ? '🌙' : '☀️'}
      </button>

      <h1>Cat Explorer</h1>
      
      <div className="cat-image-container">
        {loading ? (
          <div className="skeleton" style={{ width: '100%', height: '100%', borderRadius: '20px' }}></div>
        ) : (
          cat && <img src={cat.image} alt={cat.name} className="cat-image" />
        )}
      </div>

      {!loading && cat && (
        <div className="info-section">
          <div className="cat-name">{cat.name}</div>
          <div className="badge-container">
            <span className="badge">{cat.origin}</span>
            {cat.temperament?.split(',').slice(0, 3).map((t, i) => (
              <span key={i} className="badge" style={{ opacity: 0.8 }}>{t.trim()}</span>
            ))}
          </div>
          <p className="cat-description">{cat.description}</p>
        </div>
      )}

      <button onClick={loadCat} disabled={loading} className="btn-primary">
        {loading ? (
          <>
            <span className="loader-icon">⌛</span> Finding a kitty...
          </>
        ) : (
          <>
            <span>🐾</span> Get Another Cat
          </>
        )}
      </button>
    </div>
  );
}

export default App;