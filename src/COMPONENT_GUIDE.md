# Jared Williams Website Component Guide

This document provides an overview of the shared component system used across the website. These components were designed to maintain a consistent visual language, reduce code duplication, and make future updates easier.

## Core Layout Components

### PageLayout

The `PageLayout` component serves as the foundation for all pages. It provides:

- Consistent background styling
- Navigation components (header nav and corner logo)
- Side navigation with scroll tracking for larger screens
- Title and subtitle section
- Footer inclusion

```jsx
<PageLayout 
  title="Page Title" 
  subtitle="Optional subtitle text"
  sideNavItems={[
    { id: "section1", label: "Section 1" },
    { id: "section2", label: "Section 2" }
  ]}
  showCornerLogo={true} // default
>
  {/* Page content */}
</PageLayout>
```

## Content Components

### Section

The `Section` component provides consistent section styling with optional container backgrounds and standardized spacing.

```jsx
<Section 
  id="sectionId" 
  label="// section label" 
  title="Section Title"
  withContainer={true} // default - adds background and border
  className="additional-classes"
  containerClassName="container-specific-classes"
>
  {/* Section content */}
</Section>
```

### SectionGrid

Creates a responsive grid layout for cards or other content.

```jsx
<SectionGrid columns={3}> {/* 1, 2, or 3 columns */}
  {/* Grid items */}
</SectionGrid>
```

### Card

Provides consistent card styling with optional icons and hover effects.

```jsx
<Card 
  title="Card Title" 
  icon="🔧"
  withHoverEffect={true} // default
  link="/optional-link"
  className="additional-classes"
>
  Card content goes here
</Card>
```

### TextBlock

Standardizes paragraph styling with optional emphasis.

```jsx
<TextBlock highlight={false}> {/* true for more prominent text */}
  Text content goes here
</TextBlock>
```

### CTABox

Creates a standardized call-to-action box.

```jsx
<CTABox
  title="Ready to Get Started?"
  description="Let's talk about your project."
  buttonText="Contact Me"
  buttonHref="/contact"
  className="additional-classes"
/>
```

## Design Principles

1. **Consistent Section Styling**: 
   - All sections use the same spacing (mb-24)
   - Section headers use consistent styling with labels and titles

2. **Container Styling**:
   - Background: `bg-[#0e1117]/50`
   - Border: `border border-gray-800/30`
   - Shadow: `shadow-sm`
   - Rounded corners: `rounded-lg`

3. **Typography**:
   - Section labels: `text-sm text-blue-400 font-mono uppercase tracking-wider`
   - Section titles: `text-2xl font-bold`
   - Card titles: `text-xl font-semibold text-slate-300`
   - Highlighted text: `text-slate-300`
   - Regular text: `text-slate-400 leading-relaxed`

4. **Side Navigation**:
   - Fixed position on left side of screen
   - Active section highlighting with blue accent
   - Subtle hover animation
   - Only shown on larger screens (lg breakpoint)

## Adding New Pages

When adding new pages:

1. Import the necessary components:
   ```jsx
   import PageLayout from "@/components/PageLayout";
   import Section, { SectionGrid, Card, TextBlock, CTABox } from "@/components/ui/Section";
   ```

2. Use the PageLayout component as your base
3. Create page sections using the Section component
4. Use other UI components as needed to maintain consistency

## Responsive Design

The component system is built with mobile-first design principles:
- Side navigation only appears on larger screens (lg breakpoint)
- Grid layouts adjust based on screen size
- Text sizes are responsive
- Spacing is consistent across all screen sizes 