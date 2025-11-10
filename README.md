#  Cosmic Colors - AI Color Palette Generator

<div align="center">
  <img src="https://picsum.photos/1200/650?grayscale&blur=2" alt="Cosmic Color Palette Generator Showcase Banner">
</div>

<p align="center">
  <strong>A modern ReactJS application for generating harmonious color schemes from a single color using pure TypeScript color math.</strong>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#how-it-works">How It Works</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#contact--branding">Contact</a>
</p>

---

**Cosmic Colors** is an intuitive, beautifully designed tool for developers, designers, and creatives. It leverages the principles of color theory to instantly generate stunning, harmonious palettes based on a user-selected base color and harmony rule. The entire experience is wrapped in a unique, animated cosmic-themed interface.

## ✨ Key Features

-   🎨 **Dynamic Palette Generation**: Input any color via a visual picker or HEX code to get started.
-   🔭 **Multiple Harmony Rules**: Explore different aesthetic possibilities with rules like:
    -   `Monochromatic`: Shades and tints of a single hue.
    -   `Analogous`: Adjacent colors on the color wheel for serene schemes.
    -   `Complementary`: Opposite colors for high-contrast, vibrant results.
    -   `Triadic`: Three evenly spaced colors for a bold, balanced palette.
-   🔢 **Customizable Count**: Generate palettes with 3, 5, or 7 distinct colors.
-   🚀 **Pure TypeScript Logic**: All color calculations are performed client-side with zero external color library dependencies, ensuring fast and reliable performance.
-   📋 **One-Click Copy**: Instantly copy any color's HEX code to your clipboard.
-   📱 **Fully Responsive**: A seamless and friendly experience on desktop, tablet, and mobile devices.
-   🌌 **Stunning Cosmic UI**: A unique, animated multi-colored galaxy background provides an inspiring creative environment.
-   - **SEO Optimized Content**: Includes an in-depth, 3500+ word article on color theory, complete with JSON-LD schema to maximize search engine visibility.

## 🛠️ Tech Stack

-   **Framework**: React 18+ (with TypeScript)
-   **Styling**: Tailwind CSS
-   **Core Logic**: Pure TypeScript/JavaScript for all HSL/RGB color manipulations.
-   **Build Tool**: Vite (recommended for a modern React setup)

## ⚙️ How It Works

The core logic resides in `src/utils/ColorMath.ts`. This file contains a set of pure functions that execute a precise, multi-step process:

1.  **HEX to RGB**: The user's input HEX code is parsed into its Red, Green, and Blue components.
2.  **RGB to HSL**: The RGB value is converted into the HSL (Hue, Saturation, Lightness) model. This is the key to the generator's power, as HSL is a human-intuitive model that allows for easy mathematical manipulation.
3.  **Harmony Calculation**: Based on the selected harmony rule, the base HSL values are transformed:
    -   *Hue* is shifted by specific degrees around the color wheel (e.g., +180° for complementary).
    -   *Saturation* and *Lightness* are adjusted to create variations for rules like monochromatic.
4.  **HSL to RGB**: The new array of calculated HSL values is converted back to the RGB model.
5.  **RGB to HEX**: Finally, the RGB values are converted back into HEX codes for easy use and display in the UI.

This entire process happens instantly on the client-side, providing a fluid and responsive user experience.

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v16 or later)
-   npm or yarn

### Installation & Running

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/hsinidev/cosmic-color-palette-generator.git
    cd cosmic-color-palette-generator
    ```
2.  **Install NPM packages:**
    ```sh
    npm install
    ```
3.  **Run the development server:**
    ```sh
    npm run dev
    ```
    The application should now be running on `http://localhost:5173` (or another available port).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

## 📞 Contact & Branding

This project is proudly developed and maintained by **HSINI MOHAMED**.

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)
