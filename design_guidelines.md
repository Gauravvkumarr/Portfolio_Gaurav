# Personal Portfolio Website - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern portfolio leaders like Linear (for typography), Stripe (for restraint and professionalism), and Framer (for animation elegance). This creates a sophisticated, contemporary portfolio that balances creativity with professionalism.

## Core Design Principles
1. **Professional Minimalism**: Clean, spacious layouts that let content breathe
2. **Purposeful Motion**: Animations enhance UX, never distract
3. **Visual Hierarchy**: Clear distinction between primary and secondary content
4. **Dynamic Elegance**: Modern gradients and subtle effects create depth without overwhelming

---

## Typography System

**Primary Font**: Inter (clean, modern, highly readable)
**Secondary Font**: Poppins (for headings and emphasis)

**Type Scale**:
- Hero Heading: 64px (desktop) / 40px (mobile), Poppins SemiBold
- Section Headings: 48px (desktop) / 32px (mobile), Poppins SemiBold
- Subsection Headings: 32px (desktop) / 24px (mobile), Poppins Medium
- Body Large: 20px, Inter Regular
- Body Regular: 16px, Inter Regular
- Body Small: 14px, Inter Regular
- Labels/Tags: 12px, Inter Medium, uppercase, letter-spacing: 0.05em

**Line Heights**: 1.5 for body text, 1.2 for headings

---

## Layout System

**Spacing Units**: Consistent use of Tailwind units 2, 4, 8, 12, 16, 20, 24, 32
- Micro spacing: 2, 4
- Component spacing: 8, 12, 16
- Section spacing: 20, 24, 32

**Container Widths**:
- Max content width: `max-w-7xl` (1280px)
- Narrow content: `max-w-4xl` (896px) for text-heavy sections
- Full-width sections with inner constraints

**Grid System**:
- Projects: 2 columns on desktop, 1 on mobile
- Skills/Tech Stack: 3-4 columns desktop, 2 tablet, 1 mobile
- Achievements: 3 columns desktop, masonry-style layout

---

## Component Library

### Navigation
- Fixed header with blur backdrop (backdrop-blur-lg)
- Logo/name on left, navigation links on right
- Mobile: Hamburger menu with slide-in drawer
- Active section indicator with smooth underline animation
- Height: 80px with py-6 padding

### Hero Section (Home)
**Layout**: Full viewport height (min-h-screen) with centered content
- Large hero image: Abstract gradient mesh or professional headshot with soft gradient overlay
- Image placement: Full background with subtle parallax effect
- Content positioned center-left or centered
- Name: Hero heading size with gradient text effect
- Tagline: Body large, slightly reduced opacity
- CTA button: Primary style with blur background, icon (arrow right)
- Scroll indicator: Animated chevron at bottom

**Image Description**: Professional headshot against a soft gradient background (navy to slate blue), or abstract gradient mesh with flowing shapes in navy blue, cyan, and purple tones

### About Me Section
**Layout**: Two-column grid on desktop (40/60 split)
- Left: Professional photo in rounded container with subtle shadow
- Right: Content with heading, paragraphs, and skill tags
- Background: Subtle gradient overlay
- Section padding: py-24

**Image Description**: Professional portrait photo, well-lit, casual-professional attire, against neutral background

### Projects Showcase
**Layout**: Grid with 2 columns (desktop), staggered/masonry effect
- Project cards: Rounded corners (rounded-2xl), shadow-lg
- Each card includes:
  - Project thumbnail/preview image at top
  - Tech stack badges (pill-shaped, small text)
  - Title: Subsection heading size
  - Description: Body regular, 3-4 lines max
  - Action buttons: GitHub + Demo (icon + text)
- Hover effect: Subtle lift (translate-y) and enhanced shadow
- Cards have gradient border on hover

**Image Descriptions**: 
- Project 1: Dashboard UI screenshot with charts/graphs
- Project 2: E-commerce interface with product grid
- Project 3: Mobile app mockup on device frame
- Project 4: Web application with modern interface

### Achievements Section
**Layout**: 3-column grid with icon cards
- Cards: Square/portrait aspect ratio with rounded-2xl
- Icon at top (large, gradient-filled)
- Achievement title: Subsection heading
- Date/credential info: Body small
- Staggered animation on scroll

### Experience Timeline
**Layout**: Vertical timeline with alternating sides (desktop) / linear (mobile)
- Timeline line: Gradient stroke down center
- Experience nodes: Circular indicators with company logo
- Content cards: 
  - Company name: Subsection heading
  - Role: Body large, medium weight
  - Duration: Body small
  - Description: Body regular, bullet points
- Cards alternate left/right with connecting lines

### Contact Section
**Layout**: Split design with form on left, info on right
- Form fields: 
  - Modern input styling with floating labels
  - Focus state: Gradient border
  - Spacing: mb-6 between fields
  - Submit button: Full width, primary style
- Right side:
  - Social icons (large, with hover scale effect)
  - Email, location (if included)
  - Background: Subtle gradient card

### Footer
**Layout**: Full-width with py-12 padding
- Social links: Horizontal row with spacing
- Copyright: Center-aligned, body small
- Divider line above with reduced opacity

---

## Animation Guidelines

**Scroll Animations** (Framer Motion):
- Fade-up: opacity 0→1, y: 50→0, duration 0.6s
- Stagger children: 0.1s delay between items
- Trigger: when element enters 20% of viewport

**Hover Interactions**:
- Cards: translateY(-8px) + enhanced shadow
- Buttons: Scale 1.02 + brightness increase
- Links: Gradient underline expansion
- Duration: 0.2s ease-out

**Page Transitions**:
- Route changes: Fade with 0.3s duration
- Section navigation: Smooth scroll with easing

**Button States**:
- Hover: Transform and shadow enhancement (let Tailwind handle)
- Active: Slight scale down (transform: scale(0.98))
- Focus: Gradient ring outline

---

## Images

**Hero Section**: 
- Large background image with gradient overlay
- Full viewport coverage with object-cover
- Subtle parallax scroll effect
- Overlay: Gradient from navy (60% opacity) to transparent

**About Me**:
- Professional portrait, 400x500px aspect ratio
- Rounded corners with shadow
- Positioned left side of content

**Projects** (4 images):
- Screenshot/mockup images for each project
- 16:9 aspect ratio
- High quality, showing interface/design

**Achievements**:
- Icon-based (no photos needed)
- Use gradient-filled icons from Heroicons

**Experience**:
- Company logos in timeline nodes (optional)
- If no logos, use gradient circles with initials

---

## Gradient Palette

**Primary Gradients**:
- Hero: `from-navy-900 via-slate-800 to-cyan-900`
- Cards: `from-slate-800/50 to-slate-900/50`
- Buttons: `from-cyan-500 to-blue-600`
- Text accents: `from-cyan-400 to-purple-400`

**Overlay Effects**:
- Glass morphism: `bg-white/10 backdrop-blur-lg`
- Section backgrounds: Alternating subtle gradients

---

## Responsive Behavior

**Breakpoints**:
- Mobile: < 768px (single column, stacked navigation)
- Tablet: 768px - 1024px (2-column where appropriate)
- Desktop: > 1024px (full layout)

**Mobile Optimizations**:
- Navigation: Full-screen drawer menu
- Hero text: Reduced sizes, centered
- Projects: Single column, full-width cards
- Timeline: Linear, left-aligned
- Spacing: Reduced py values (py-12 vs py-24)

**Scroll-to-Top Button**:
- Fixed position, bottom-8 right-8
- Circular with gradient background
- Fade in after scrolling 500px
- Smooth scroll to top on click

This design creates a sophisticated, modern portfolio that balances professional minimalism with engaging visual elements and smooth interactions. Every section is purposeful, the layout provides excellent visual hierarchy, and the animation system enhances without overwhelming.