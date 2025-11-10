import React, { useState } from 'react';

interface ModalProps {
  title: string;
  content: React.ReactNode;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, content, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 bg-opacity-80 backdrop-blur-md rounded-lg shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-gray-600">
        <div className="flex justify-between items-center p-4 border-b border-gray-600 sticky top-0 bg-gray-800 bg-opacity-80 backdrop-blur-md">
          <h2 className="text-xl font-bold text-white">{title}</h2>
          <button onClick={onClose} className="text-gray-300 hover:text-white text-2xl">&times;</button>
        </div>
        <div className="p-6 text-gray-300">
          {content}
        </div>
      </div>
    </div>
  );
};


const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const modalContent: { [key: string]: { title: string, content: React.ReactNode } } = {
    'About': { title: 'About Us', content: <p>This Color Palette Generator is a modern tool built with React and Tailwind CSS, designed to help creatives and developers discover beautiful and harmonious color schemes. All color calculations are performed using pure JavaScript color math.</p> },
    'Contact': { title: 'Contact Information', content: <p>For inquiries, please reach out via email at <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a> or visit <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">doodax.com</a>.</p> },
    'Guide': { title: 'How to Use', content: <div><p>1. Select a base color using the color picker or by entering a HEX code.</p><p>2. Choose a color harmony rule from the dropdown (e.g., Monochromatic, Complementary).</p><p>3. Select the number of colors you want in your palette.</p><p>4. Click "Generate Palette" to see the results.</p><p>5. Click on any color's HEX code to copy it to your clipboard.</p></div> },
    'Privacy Policy': { title: 'Privacy Policy', content: <p>This application operates entirely on the client-side. We do not collect, store, or transmit any personal data. Your color selections and generated palettes are not saved or tracked.</p> },
    'Terms of Service': { title: 'Terms of Service', content: <p>This tool is provided for free and "as is" without any warranty. You are free to use the generated color palettes for personal and commercial projects. The creators are not liable for any issues arising from its use.</p> },
    'DMCA': { title: 'DMCA Policy', content: <p>All content and tools on this website are original creations. If you believe any content infringes on your copyright, please contact us with detailed information, and we will address the issue promptly.</p> },
  };

  const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

  return (
    <div className="bg-gray-900 text-white min-h-screen cosmic-background">
      <div className="stars">
        <header className="bg-black bg-opacity-30 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-40">
          <nav className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight text-white">
              Cosmic<span className="text-cyan-400">Colors</span>
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 sm:mt-0">
              {navLinks.map(link => (
                <button key={link} onClick={() => setActiveModal(link)} className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  {link}
                </button>
              ))}
            </div>
          </nav>
        </header>
        
        {children}

        <footer className="bg-black bg-opacity-30 backdrop-blur-sm border-t border-gray-700 mt-16">
          <div className="container mx-auto px-4 py-6 text-center text-gray-400 text-sm">
            <p className="mb-2">
              <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold" style={{color: '#FFD700'}}>
                Powered by HSINI MOHAMED
              </a>
            </p>
            <p>
              <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
              <span className="mx-2">|</span>
              <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
            </p>
          </div>
        </footer>

        {activeModal && modalContent[activeModal] && (
          <Modal 
            title={modalContent[activeModal].title}
            content={modalContent[activeModal].content}
            onClose={() => setActiveModal(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeLayout;