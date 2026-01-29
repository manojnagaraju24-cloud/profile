# Manoj's React Portfolio

A modern, responsive portfolio website built with React, Vite, HTML, CSS, and JavaScript.

## Features

- **Header/Navigation**: Sticky navigation with hamburger menu for mobile
- **Hero Section**: Eye-catching hero section with call-to-action button
- **About Section**: About me with contact information
- **Projects Section**: Showcase of 6 projects with technologies used
- **Skills Section**: Organized skills by categories (Frontend, Backend, Tools)
- **Contact Section**: Contact form and social links
- **Footer**: Footer with quick links and copyright information
- **Responsive Design**: Fully mobile-friendly layout
- **Modern UI**: Beautiful gradients, smooth animations, and hover effects

## Project Structure

```
src/
├── components/
│   ├── Header.jsx (+ Header.css)
│   ├── Hero.jsx (+ Hero.css)
│   ├── About.jsx (+ About.css)
│   ├── Projects.jsx (+ Projects.css)
│   ├── Skills.jsx (+ Skills.css)
│   ├── Contact.jsx (+ Contact.css)
│   └── Footer.jsx (+ Footer.css)
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## Technologies Used

- **React** - JavaScript library for building UI
- **Vite** - Modern build tool and dev server
- **CSS3** - Styling with gradients, animations, and flexbox/grid
- **JavaScript** - Interactivity and form handling

## Installation

1. Make sure you have Node.js installed (v14 or higher)
2. Navigate to the project directory
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Portfolio

The portfolio is already running on **http://localhost:5173/**

To start the development server manually:
```bash
npm run dev
```

The dev server will automatically reload when you make changes.

## Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` directory.

## Preview Production Build

To preview the production build locally:
```bash
npm run preview
```

## Customization

### Update Your Information
- Open `src/components/Hero.jsx` and update the name and title
- Open `src/components/About.jsx` to update about information
- Open `src/components/Contact.jsx` to update contact details

### Add Your Projects
Edit `src/components/Projects.jsx` and modify the `projects` array with your own projects.

### Update Skills
Edit `src/components/Skills.jsx` and update the `skillsData` array with your skills.

### Change Colors
The portfolio uses a purple gradient (`#667eea` to `#764ba2`). You can change these colors in the CSS files:
- Search and replace `#667eea` with your primary color
- Search and replace `#764ba2` with your secondary color

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized with Vite for fast development and production builds
- CSS animations use GPU acceleration for smooth performance
- Responsive images and lazy loading ready

## Available Scripts

In the project directory, you can run:

### `npm run dev`
Runs the app in development mode at http://localhost:5173/

### `npm run build`
Builds the app for production to the `dist` folder

### `npm run preview`
Preview the production build locally

### `npm run lint`
Run ESLint to check code quality

## License

This portfolio template is open source and available for personal use.

