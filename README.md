Immigration Help – Emergency Assistance Landing Page

This repository contains a fully responsive landing page built as part of the QLO Webmaster Technical Test.
 The project focuses on clarity, conversion, modern front-end practices, SEO optimization and a clean code structure.

Overview

The goal of this assignment was to design and implement a high-quality landing page for an immigration service offering 24/7 emergency support.
 The solution includes a modern layout using TailwindCSS, optimized assets, accessibility improvements and complete metadata for SEO and social sharing.

Features

1. UI and Front-End Architecture

TailwindCSS utility-based workflow
Mobile-first responsive layout
Structured sections: Hero, Benefits, Social Proof, Testimonials, Contact Form, FAQ, Footer
Consistent color system, spacing and typography (Inter)
Lightweight animations implemented through Tailwind keyframes


2. Performance and Optimization

Images resized and compressed
Lazy loading for non-critical media
Minimal external dependencies
Preconnect for Google Fonts
Clean asset structure under /assets

3. SEO and Metadata

Meta title and description
Canonical URL
Robots configuration
Open Graph tags for Facebook / LinkedIn / WhatsApp
Twitter Cards
JSON-LD structured data using LegalService schema

4. Code Structure

/assets
   /css
   /img
   /js
index.html
robots.txt
README.md

Static HTML/CSS/JS structure designed for easy deployment on GitHub Pages or any static hosting provider.

Running the Project Locally

No backend or build steps are required.

Clone the repository and open the file:

git clone https://github.com/alejo21ny/qlo-webmaster-test-landingpage.git
cd qlo-webmaster-test-landingpage

Open index.html directly in the browser.
 (On Windows, double-clicking the file is sufficient.)

Deployment (GitHub Pages)

Go to Settings → Pages
Under Source select:
 Deploy from branch

Choose:
Branch: main
Folder: root
Save

GitHub Pages will generate the public URL automatically, for example:
https://alejo21ny.github.io/qlo-webmaster-test-landingpage/

Notes
All images were optimized to reduce Lighthouse warnings.
Animations were kept lightweight to avoid layout shifts.
The contact form includes basic validation and mock analytics events, as required for the technical test.


Author
David Gomez
 Front-End Developer — TailwindCSS, SEO, UI/UX
 Email: alejo21ny@hotmail.com