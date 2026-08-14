<div align="center">
# 🚀 Cosmic Color Palette Generator
### *Modern, High-Performance JavaScript Solution & Developer Suite*

<p align="center">
  [![Architect](https://img.shields.io/badge/Architect-Hsini%20Mohamed-0055ff?style=for-the-badge&logo=github&logoColor=white)](https://hsini.dev)
  [![Portfolio](https://img.shields.io/badge/Portfolio-hsini.dev-00c853?style=for-the-badge&logo=google-chrome&logoColor=white)](https://hsini.dev)
  [![Language](https://img.shields.io/badge/Language-TypeScript-3178C6?style=for-the-badge)](https://github.com/hsinidev)
  [![Framework](https://img.shields.io/badge/Framework-JavaScript-6366f1?style=for-the-badge)](https://github.com/hsinidev)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</p>

<img src="https://picsum.photos/1200/650?grayscale&blur=2" alt="Cosmic Color Palette Generator Showcase Banner">

</div>

---
## 🌟 Executive Overview

**Cosmic Color Palette Generator** is a production-grade **TypeScript** platform engineered for high reliability, clean architectural separation, and frictionless developer workflow.

## ⚡ Key Highlights & Capabilities

- **Scalable Architecture**: Modular, decoupled components adhering to clean code principles.
- **Optimized Runtime**: Ultra-fast execution with minimal memory and CPU overhead.
- **Developer Tooling**: Standardized linting, formatting, and rapid local iteration setup.
- **Production Ready**: Built-in error resilience, validation, and structured logging.

---
## 🏗️ Architecture & Technology Stack

- **Primary Language**: `TypeScript`
- **Framework / Runtime**: `JavaScript`
- **Design Pattern**: Modular Clean Architecture / Domain-Driven Design
- **License**: MIT Open Source Attribution

## 📖 Deep-Dive Technical Documentation

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



## 📞 Contact & Branding

This project is proudly developed and maintained by **HSINI MOHAMED**.

-   **GitHub**: [@hsinidev](https://github.com/hsinidev)
-   **Website**: [doodax.com](https://doodax.com)
-   **Email**: [hsini.web@gmail.com](mailto:hsini.web@gmail.com)

---
## 🚀 Quick Start & Installation

### 1. Clone the Repository
```bash
git clone https://github.com/hsinidev/Cosmic-Color-Palette-Generator.git
cd Cosmic-Color-Palette-Generator
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Launch the Application
```bash
npm run dev
```


---

## 👨‍💻 System Architect & Author

<table align="center" style="border: none; background: transparent; width: 100%;">
  <tr>
    <td align="center" width="160" style="border: none; padding: 12px;">
      <img src="https://avatars.githubusercontent.com/u/232697467?v=4" width="120" height="120" style="border-radius: 50%; box-shadow: 0 8px 24px rgba(99,102,241,0.3); border: 2.5px solid #6366f1;" alt="Hsini Mohamed" />
      <br /><br />
      <b>Hsini Mohamed</b><br />
      <sub>Morocco 🇲🇦</sub>
    </td>
    <td style="border: none; padding: 12px; vertical-align: middle;">
      <h3 style="margin-top: 0;">🚀 System Architect & Full-Stack Engineer</h3>
      <p style="font-size: 0.95rem; line-height: 1.6; color: #475569;">
        Specializing in high-performance autonomous AI systems, deterministic multi-agent swarms, enterprise cloud architecture, and modern full-stack engineering.
      </p>
      <p>
        <a href="https://hsini.dev"><img src="https://img.shields.io/badge/Portfolio-hsini.dev-2563eb?style=flat-square&logo=google-chrome&logoColor=white" alt="Portfolio" /></a>
        <a href="mailto:contact@hsini.dev"><img src="https://img.shields.io/badge/Email-contact@hsini.dev-ea4335?style=flat-square&logo=gmail&logoColor=white" alt="Email" /></a>
        <a href="https://github.com/hsinidev"><img src="https://img.shields.io/badge/GitHub-@hsinidev-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub" /></a>
        <a href="https://linkedin.com/in/hsinidev/"><img src="https://img.shields.io/badge/LinkedIn-hsinidev-0077b5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" /></a>
      </p>
    </td>
  </tr>
</table>

---

## 📄 License & Attribution

This project is distributed under the **MIT License**. See [`LICENSE`](LICENSE) for complete terms.

<div align="center">
  <sub>⚡ Designed, architected, and maintained with engineering precision by <b><a href="https://hsini.dev">Hsini Mohamed</a></b>.</sub>
</div>
