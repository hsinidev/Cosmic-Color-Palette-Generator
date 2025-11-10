import React, { useState } from 'react';
import ThemeLayout from './components/ThemeLayout';
import ColorPaletteGenerator from './components/ColorPaletteGenerator';
import SeoArticle from './utils/SeoArticle';

const App: React.FC = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);

  return (
    <ThemeLayout>
      <main className="container mx-auto px-4 py-8 md:py-12 flex flex-col items-center">
        <div className="w-full max-w-5xl">
          <ColorPaletteGenerator />
          
          <div className="text-center mt-12">
            <button
              onClick={() => setIsArticleVisible(!isArticleVisible)}
              className="bg-gray-700 bg-opacity-50 hover:bg-opacity-80 text-cyan-300 font-semibold py-3 px-6 rounded-lg border border-gray-600 transition-all duration-300 shadow-md hover:shadow-cyan-500/20 transform hover:-translate-y-0.5"
            >
              {isArticleVisible ? 'Hide Article' : 'Read Our Guide to Color Theory'}
            </button>
          </div>

          {isArticleVisible && <SeoArticle />}
        </div>
      </main>
    </ThemeLayout>
  );
};

export default App;