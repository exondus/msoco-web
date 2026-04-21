# Msoco Rockers Redesign Specification (2026-04-21)

## Goal
Redesign the Corporate division pages (Main, Services, Pricing) and the Weddings Pricing page to improve design quality, premium feel, and conversion rates. The redesign will establish two distinct but equally premium personalities: the "Technical Backbone" (Corporate) and the "Heritage Legacy" (Weddings).

## Visual Identity & Design System

### Corporate Division (Midnight Copper)
*   **Background**: Deep Black (`#0A0A0A`)
*   **Accent Colors**: Burnt Orange (`#CC5500`) and Copper (`#B87333`)
*   **Surface Styles**: Dark glassmorphism (`bg-white/5` with `backdrop-blur-xl`)
*   **Typography**: Preserve bold, solid "font-black" headers; add radial glows in Copper behind key headlines.
*   **Aesthetics**: High-end technical, "engineered" look, authoritative and modern.

### Weddings Division (Heritage Gold)
*   **Background**: Wedding Cream (`#FDFCF0`)
*   **Accent Colors**: Wedding Gold (`#D4AF37`) and Wedding Charcoal (`#1A1A1A`)
*   **Aesthetics**: Elegant, classic, "Playfair Display" (serif) focus, soft shadows, and generous whitespace.

---

## Page-Specific Changes

### 1. Corporate Main & Services Pages (`/corporate`, `/corporate/services`)
*   **Background Shift**: Migrate from White to Midnight Black.
*   **Color Shift**: Remove all Blue (`#0052FF`) and replace with Copper/Burnt Orange accents.
*   **Copy Transformation**:
    *   **Headline**: "The Technical Backbone of KZN's Biggest Events."
    *   **Subheadline**: "260+ Productions. 100% On-Time. Zero Technical Anxiety. We engineered the standard so you don't have to."
    *   **CTAs**: "Partner with the Authority."
*   **Components**: Update `ServiceCard` and `TechInfrastructure` components to use the new Midnight Copper theme.

### 2. Corporate Pricing Page (`/corporate/pricing`)
*   **Layout Fix**: Unify card heights and use a "Technical Specification" categorization (Capture, Broadcast, Audio).
*   **Visuals**: Glowing Copper border for the "Professional Broadcast" (middle) tier.
*   **Naming**: Rename tiers to "Standard Production", "Professional Broadcast", and "Enterprise Suite".

### 3. Weddings Pricing Page (`/weddings/pricing`)
*   **Layout Redesign**: Replace the grid with a **"Heritage Comparison Table"**.
*   **Structure**: 
    *   Horizontal comparison for desktop; elegant stacked view for mobile.
    *   Rows compare Coverage Hours, Team Size, Film Duration, Drone Ops, and Delivery.
*   **Style**: Gold hairlines, Serif headers, and a "Best Value" highlight for the Signature tier using a soft cream background.
*   **Naming Upgrade**:
    *   "The Essentials" -> **"Intimate Legacy"**
    *   "The Signature" -> **"The KZN Masterpiece"**
    *   "The Presidential" -> **"The Royal Heritage"**

### 4. Global Conversion Elements
*   **Authority Badges**: Add subtle badges like "KZN Authority" or "260+ Productions" near CTAs.
*   **Sticky Navbar**: Division-specific themes (Midnight Copper for Corporate, Heritage Gold for Weddings).
*   **CTAs**: Benefit-driven copy (e.g., "Reserve Your Legacy" vs "Book Now").

---

## Verification Plan
*   **Visual Audit**: Ensure no "Corporate Blue" remains in the Corporate division.
*   **Responsive Check**: Verify the new Wedding Comparison Table is readable and elegant on mobile.
*   **Accessibility**: Ensure contrast levels on the new Midnight Black background meet AA standards for Copper/White text.
*   **Copy Check**: Ensure all "Authority" and "Legacy" keywords are correctly implemented across all updated pages.
