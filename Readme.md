# Cat Energy - Premium Cat Nutrition  
A fully responsive e-commerce website for premium cat nutrition products, built with mobile-first approach using BEM methodology and modern frontend tooling. This project demonstrates professional web development practices with a focus on performance, accessibility, and responsive design.  

## 🎯 Project Overview
Cat Energy is a two-page responsive website (homepage + product catalog) developed as the capstone project for Bootcamp's "Adaptive Layout and Automation" intensive. The project showcases advanced CSS techniques, build automation, and pixel-perfect implementation across three viewports.  

### Key Features  
✅ **Mobile-first responsive design** (320px → 768px → 1440px)  
✅ **BEM methodology** for scalable and maintainable CSS  
✅ **Sass preprocessing** with organized partials and mixins  
✅ **Gulp automation** for development workflow  
✅ **Retina-ready graphics** with SVG sprites and responsive images  
✅ **Interactive components** with proper state management  
✅ **Accessibility-focused** semantic markup  

## 🚀 Tech Stack & Architecture
### Core Technologies
|Technology|Purpose|Implementation|
|:---------:|:----------:|:---------------:| 
|HTML|Semantic markup|BEM naming convention|
|Sass/SCSS|CSS preprocessing|7-1 pattern architecture|
|JavaScript|Interactive features|Vanilla ES6+|
|Gulp|Build automation|Task runner for development|  

### Methodologies & Standards  
•	**BEM (Block, Element, Modifier)** for CSS architecture  
•	**Mobile-First Approach** progressive enhancement  
•	**Pixel-Perfect Implementation** across breakpoints  
•	**Cross-Browser Compatibility** (Chrome, Firefox, Safari)  
•	**Performance Optimization** with image optimization and code minification  

## 📱 Responsive Breakpoints
|Viewport|Width|Key Features|
|:---------|:----------|:-------------|  
|Mobile|	320px - 767px|	Navigation toggle, stacked layout, touch-friendly UI|  
|Tablet|	768px - 1439px|	Enhanced navigation, multi-column layouts|  
|Desktop|	1440px+|	Full navigation, complex grid systems, decorative elements|  

## 🏗️ Project Structure  
<pre>
text
cat-energy/
├── src/
│   ├── fonts/                # Custom fonts (Oswald, Lato)
│   ├── img/                  # Images (content, decorative, icons)
│   │   ├── content/          # Content images
│   │   ├── icons/            # SVG icons and sprites
│   │   └── retina/           @2x images for high-DPI displays
│   ├── js/                   # JavaScript modules
│   │   ├── modules/          # Feature modules
│   │   ├── vendor/           # Third-party libraries
│   │   └── main.js           # Entry point
│   ├── scss/                 # Sass source files (7-1 pattern)
│   │   ├── abstracts/        # Variables, mixins, functions
│   │   ├── base/             # Reset, typography, base styles
│   │   ├── components/       # BEM blocks/components
│   │   ├── layout/           # Major layout sections
│   │   ├── pages/            # Page-specific styles
│   │   ├── themes/           # Theme variations
│   │   ├── vendors/          # Third-party styles
│   │   └── main.scss         # Main Sass file
│   └── *.html                # HTML templates
├── gulpfile.js               # Gulp configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation  
</pre>

## 🛠️ Development Setup
### Prerequisites  
•	Node.js (v14+)  
•	npm or yarn  
•	Gulp CLI (npm install --global gulp-cli)  

### Installation
```bash
# Clone repository
git clone https://github.com/yourusername/cat-energy.git
cd cat-energy

# Install dependencies
npm install

# Development mode with live reload
npm run dev

# Production build
npm run build

# Launch local server
npm run start  
```

### Gulp Tasks
```bash
npm run clean          # Clean build directory
npm run styles         # Compile Sass with autoprefixer
npm run scripts        # Bundle and minify JavaScript
npm run images         # Optimize images (PNG, JPG, SVG)
npm run webp           # Convert to WebP format
npm run sprite         # Generate SVG sprite
npm run copy           # Copy static files
npm run server         # Launch BrowserSync server
npm run build          # Full production build
```

## 🎨 Design Implementation  

### Typography System  
•	Primary Font: Oswald (headings, navigation)  
•	Secondary Font: Lato (body text, paragraphs)  
•	Responsive Typography: Fluid font sizes with clamp()  
•	Vertical Rhythm: Consistent spacing with modular scale   

### Color Palette
|Color|	Hex|	Usage|
|:---------:|:----------:|:-------------:| 
|Primary Green |	#68B738	|Buttons, highlights|
|Dark Green	|#5EAA2F	|Hover states|
|Gray	|#F2F2F2	|Backgrounds|
|Dark Gray	|#444444	|Text, borders|
|Error Red |	#FF8282	|Form validation|  

### Component Library  
•	Navigation: Responsive navigation toggle menu with two implementation options  
•	Cards: Product cards with hover states and transitions  
•	Forms: Accessible forms with validation and feedback  
•	Buttons: Primary, secondary, and ghost button variants  
•	Slider: CSS-based slider for "Live Example" section  
•	Map: Interactive Google/Yandex maps with custom marker  

## 📄 Page Specifications  
### Homepage (index.html)  
#### Mobile (320px)  
•	Simplified logo (icon + text)  
•	Navigation toggle menu (JS or CSS implementation)  
•	"Choose Program" button linking to form page  
•	Program cards ("Weight Loss", "Mass Gain") with catalog links  
•	"Live Example" section with before/after comparison  
•	Interactive map with custom marker  
#### Tablet (768px)  
•	Enhanced logo with additional elements  
•	Always-visible main navigation  
•	Multi-column layouts for program sections  
•	Expanded "Live Example" with statistics  
•	Improved product showcase  
#### Desktop (1440px)  
•	Full logo complexity with all elements  
•	Split hero section (white background + green with cat image)  
•	Complex grid layouts for all sections  
•	Enhanced typography and spacing  
•	Decorative background elements  
### Catalog Page (catalog.html)  
#### Mobile (320px)  
•	Breadcrumb navigation with home link  
•	Product cards with image, title, and "Order" button  
•	"Show All" button (JS-dependent behavior)  
•	Additional product information section  
#### Tablet (768px)  
•	Multi-column product grid  
•	Enhanced product card layout  
•	Improved filter and sort options  
#### Desktop (1440px)  
•	Full-width product showcase  
•	Sidebar navigation for categories  
•	Advanced filtering options  
•	Enhanced visual hierarchy  

## 🔧 Technical Challenges & Solutions
### 1. Responsive Navigation  
**Challenge:** Implement navigation toggle menu with two possible approaches (with/without JS)  
**Solution:** Created CSS-only toggle using checkbox hack, with JavaScript enhancement for better UX  
```scss
// CSS-only implementation
.main-nav__toggle {
  display: none;
  
  &:checked ~ .main-nav__list {
    display: block;
  }
}

// JavaScript enhancement adds smooth animations  
```

### 2. Retina Images  
**Challenge:** Serve appropriate images for different screen densities  
**Solution:** Implemented srcset with WebP fallbacks  
```html
<picture>
  <source type="image/webp" srcset="img/photo@1x.webp 1x, img/photo@2x.webp 2x">
  <img src="img/photo@1x.jpg" srcset="img/photo@2x.jpg 2x" alt="Cat Energy product">
</picture>  
```

### 3. Performance Optimization
**Challenge:** Maintain performance across all viewports  
**Solution:**  
•	Critical CSS inlining for above-the-fold content  
•	Lazy loading for images and iframes  
•	SVG sprites for icons  
•	Code splitting for JavaScript    

### 4. Cross-browser Compatibility  
**Challenge:** Ensure consistent experience across Chrome, Firefox, Safari  
**Solution:**  
•	Feature detection with @supports  
•	Vendor prefixes via Autoprefixer  
•	Progressive enhancement approach  
•	Regular testing on BrowserStack   

## 🧪 Testing & Quality Assurance  

### Browser Compatibility  
| Browser | Version | Status | Notes |
|:--------|:--------|:-------|:------|
| Chrome | 90+ | ✅ Perfect | All features working |
| Firefox | 88+ | ✅ Perfect | All features working |
| Safari | 14+ | ✅ Perfect | All features working |
| Edge | 90+ | ✅ Perfect | Chromium-based |

### Accessibility Audit  
✅ Semantic HTML elements  
✅ ARIA labels for interactive elements  
✅ Keyboard navigation support  
✅ Screen reader compatibility  

## 📈 Development Workflow  
1.	**Design Analysis** - Review mockups and style guides  
2.	**Mobile-first Development** - Start with smallest viewport  
3.	**Progressive Enhancement** - Add features for larger screens  
4.	**Cross-browser Testing** - Ensure compatibility  
5.	**Performance Optimization** - Audit and improve metrics  
6.	**Code Review** - Mentor feedback incorporation  
7.	**Final Polish** - Pixel-perfect adjustments  
   
## 🎓 Learning Outcomes  
### Technical Skills Mastered  
•	**Advanced CSS:** Grid, Flexbox, CSS Custom Properties  
•	**Sass Architecture:** 7-1 pattern, mixins, functions  
•	**Build Automation:** Gulp configuration and optimization  
•	**Responsive Design:** Fluid layouts, responsive images  
•	**Performance Optimization:** Bundle optimization, lazy loading  
### Professional Practices  
•	**BEM Methodology:** Scalable and maintainable CSS  
•	**Mobile-First Development:** Progressive enhancement  
•	**Cross-browser Testing:** Compatibility strategies  
•	**Code Quality:** Linting, formatting, and documentation   

## 👨‍💻 Author  
Frontend Software Developer - Student  

________________________________________
Note: This project was developed as part of Bootcamp's "Adaptive Layout and Automation" intensive. All designs and specifications were provided as part of the educational curriculum, with implementation focusing on modern web development best practices.
