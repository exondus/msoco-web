# Design Doc: Wedding Pricing Redesign ("Heritage Legacy" Expansion)

## Goal
To implement a comprehensive pricing system for the Wedding division that incorporates "everything" from the client's current website packages, organized into a premium "Heritage Legacy" visual identity.

## User Review Required
> [!IMPORTANT]
> The tiered structure has been consolidated into a tabbed interface (Wedding, Umembeso, 2-Day Union) to handle the 9+ packages without UI clutter.

## Proposed Changes

### 1. Data Model Expansion
We will define a new constant structure in `src/app/weddings/pricing/data.ts` (or similar) to hold all 9 packages extracted from the screenshot.

#### Wedding Tiers
- **The Heritage (R12,000)**: 2 Videographers, 4K, Raw, Highlight, Digital Album, 50km.
- **The Legacy (R15,000)**: Adds 1 Photographer.
- **The Legacy Royale (R18,000)**: Adds 1 Drone Operator.

#### Umembeso Tiers
- **The Heritage (R12,000)**: 2 Videographers, 4K, Raw, Highlight, Digital Album, 50km.
- **The Legacy (R15,000)**: Adds 1 Photographer.
- **The Legacy Royale (R18,000)**: Adds 1 Drone Operator.

#### The Union Suites (2-Day)
- **The Dynasty (R28,000)**: 2 Days, 3 Videographers, 2 Photographers, Drone, USB Box, A4 Book, Live Stream Opt.
- **The Dynasty Royale (R30,000)**: Adds A1 Enlargement, Pre-Wedding Shoot, 100km travel.

### 2. UI Components

#### [NEW] `WeddingPricingTabs`
A "Sovereign" floating toggle component.
- **Visuals**: Cream background, Gold-leaf active state.
- **Logic**: Manages `activeTab` state (`wedding`, `umembeso`, `union`).

#### [MODIFY] `WeddingComparisonTable`
Updated to handle dynamic content based on `activeTab`.
- **Responsive**: Stays in 3-column format for consistency, adjusting the content/prices per tab.

#### [MODIFY] `PricingPage` (`src/app/weddings/pricing/page.tsx`)
- Orchestrates the tab state.
- Includes the "Custom Heirloom" (Custom Package) footer section.

## Success Criteria
- [ ] All 9 packages from the screenshot are accessible.
- [ ] UI remains clean and premium (no scrolling horizontal tables if possible).
- [ ] Smooth transitions between tabs.
- [ ] Correct "Heritage Legacy" styling (Cream/Gold).

## Verification Plan
### Manual Verification
- Test all three tabs on mobile and desktop.
- Verify price accuracy against the client's screenshot.
- Ensure the "Custom" section is visible at the bottom.
