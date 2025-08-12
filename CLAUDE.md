# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a GitHub Pages repository for "King's High Digitech" (KHSDigitech.github.io) - the Digital Technology department website for King's High School. The site provides curriculum information and resources for students across Years 9-13, covering programming, game development, digital media, and other technology subjects.

## Repository Structure

This is a static HTML/CSS/JavaScript website with the following structure:
- `index.html` - Main homepage with year level overview
- `styles.css` - Global stylesheet with CSS custom properties and responsive design
- `geometric-background.js` - Animated background system (currently inline in HTML)
- `year[N].html` - Year level overview pages (9-13)
- `year[N]/` - Subject-specific pages for each year level
- `year10/gamedev/` - Complete game development course including overview page and 8 tutorial modules using Godot engine
- `Images/` - Static assets including parallax background images

## Architecture

### Styling System
- Uses CSS custom properties for consistent theming (dark theme with gradients)
- Inter font family from Google Fonts
- Responsive card-based layouts
- Animated geometric background with mouse/scroll interaction
- Modern glassmorphism effects and shadows

### Navigation Structure
- Hierarchical navigation: Home → Year Level → Subject → Content
- Consistent header/footer across all pages
- Year-based curriculum organization (Years 9-13)

### Content Areas
- **Year 9**: Digital literacy, programming fundamentals, digital media, basic game development
- **Year 10**: Web development, databases, 3D modeling, Python programming
- **Year 11-13**: Advanced programming, specialized pathways, NCEA preparation
- **Game Development**: Dedicated Godot engine tutorial modules

## Development Notes

This is a pure static website designed for GitHub Pages deployment:
- No build process or package manager required
- Direct HTML/CSS/JavaScript without frameworks
- All dependencies loaded via CDN (Google Fonts)
- Geometric background animation system implemented in vanilla JavaScript

## Common Tasks

Since this is a static site:
- Content updates involve editing HTML files directly
- Style changes go in `styles.css` using the existing CSS custom property system
- New pages should follow existing template patterns
- Image assets go in appropriate subdirectories under `Images/`
- The site deploys automatically via GitHub Pages from the main branch