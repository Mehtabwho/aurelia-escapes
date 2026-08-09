# AURELIA — Boutique Retreat

> **Stay somewhere worth remembering.**

AURELIA is a cinematic boutique retreat website designed as a premium digital travel experience. The project combines luxury hospitality aesthetics with editorial-inspired layouts, immersive imagery, smooth animations, and responsive frontend development.

Rather than following the conventions of a typical hotel booking website, AURELIA focuses on **visual storytelling, typography, interaction design, and attention to detail**.

##  Highlights

* Cinematic full-screen hero experience
* Editorial-inspired luxury design
* Responsive layouts across desktop, tablet, and mobile
* Interactive rooms and suites
* Room detail pages with mock availability booking
* Dining, wellness, destination, and journal sections
* Smooth scroll and page transitions
* Scroll-triggered animations and image reveals
* Interactive experience galleries
* Custom desktop cursor interactions
* Mobile-friendly navigation
* Reusable React components
* Frontend-only booking experience

##  Design

AURELIA uses a warm, sophisticated visual language inspired by luxury travel and contemporary editorial design.

### Color Palette

* Warm Ivory
* Soft Sand
* Deep Charcoal
* Muted Olive
* Warm Stone
* Subtle Gold Accents

### Typography

The design combines an elegant serif display typeface with a clean modern sans-serif to create strong editorial contrast and hierarchy.

The overall visual direction emphasizes:

**Typography · Photography · Whitespace · Composition · Motion**

##  Main Sections

### Hero

A full-screen cinematic introduction featuring the AURELIA brand, tagline, atmospheric imagery, and primary CTA.

### The Retreat

An editorial introduction to the property using asymmetric image compositions and subtle scroll movement.

### The Experience

Interactive experiences covering:

* Stay
* Dine
* Restore
* Explore

### Rooms & Suites

Image-led accommodation displays featuring:

* Garden Suite
* Ocean Villa
* Horizon Residence

Each room includes details such as size, bed type, capacity, amenities, and a mock booking interaction.

### Dining

A visual presentation of the restaurant, seasonal cuisine, interiors, and dining experience.

### Wellness

A calm, immersive section highlighting wellness experiences such as yoga, meditation, massage, and private rituals.

### Destination

An interactive exploration section featuring destinations and experiences surrounding the retreat.

### Journal

An editorial-style collection of travel and lifestyle stories.

### Testimonials

A minimal full-width testimonial section designed to maintain the site's editorial aesthetic.

### Final CTA

A cinematic closing section encouraging visitors to plan their stay.

##  Tech Stack

* **React**
* **Vite**
* **Tailwind CSS**
* **Framer Motion**
* **React Router**
* **Lucide React**

##  Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── SectionTitle.jsx
│   ├── Experience.jsx
│   ├── Rooms.jsx
│   ├── RoomCard.jsx
│   ├── Dining.jsx
│   ├── Wellness.jsx
│   ├── Destination.jsx
│   ├── Journal.jsx
│   ├── Testimonials.jsx
│   ├── BookingWidget.jsx
│   └── Footer.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Rooms.jsx
│   ├── RoomDetails.jsx
│   ├── Experience.jsx
│   └── Journal.jsx
│
├── data/
│   ├── rooms.js
│   ├── experiences.js
│   └── journal.js
│
├── assets/
│
├── App.jsx
└── main.jsx
```

Content and data are separated from UI components to keep the application modular and maintainable.

##  Getting Started

### Prerequisites

Make sure you have:

* [Node.js](https://nodejs.org/)
* npm

### Installation

Clone the repository:

```bash
git clone <repository-url>
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The application will be available at the local development URL provided by Vite.

### Deployment

AURELIA is deployed using Vercel.

View Live: https://aurelia-escapes.vercel.app/

The project is connected to the GitHub repository, allowing updates to be deployed from the main branch.

##  Responsive Design

AURELIA is designed to provide a consistent experience across:

* Desktop
* Laptop
* Tablet
* Mobile

Layouts, typography, navigation, and animations adapt to smaller screens rather than simply scaling down the desktop design.

##  Interaction & Animation

Motion is used to enhance the experience without overwhelming the interface.

Key interactions include:

* Page entrance animations
* Image reveal effects
* Scroll-triggered animations
* Parallax movement
* Smooth page transitions
* Image hover effects
* Interactive galleries
* Horizontal desktop experiences
* Animated mobile navigation
* Custom cursor interactions on desktop

##  License

This project is intended for portfolio and educational purposes.
