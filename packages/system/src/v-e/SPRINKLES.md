# Rainbow Sprinkles Configuration

This directory contains a complete rainbow-sprinkles setup integrated with vanilla-extract themes.

## Features

- **Theme-aware sprinkles**: All sprinkles properties automatically work with light/dark themes
- **Semantic design tokens**: Access to your design system's semantic colors, shadows, and borders
- **Responsive design**: Built-in breakpoints for mobile, tablet, and desktop
- **Type-safe**: Full TypeScript support with autocomplete
- **React components**: Pre-built components that combine sprinkles with custom styles

## Files

- `sprinkles.css.ts` - Main sprinkles configuration with responsive properties
- `recipes.css.ts` - Vanilla-extract recipes for common components
- `components.tsx` - React components that use sprinkles
- `contract.ts` - Theme contract (already exists)
- `light-theme.ts` / `dark-theme.ts` - Theme implementations (already exist)

## Usage Examples

### Basic Sprinkles Usage

```typescript
import { sprinkles } from '@wwwares/ui-system/v-e';

// Apply utility classes
const className = sprinkles({
  display: 'flex',
  flexDirection: 'column',
  gap: 4,
  padding: 4,
  backgroundColor: 'blue.500',
  color: 'white',
  borderRadius: 'md',
});
```

### Responsive Design

```typescript
const responsiveClassName = sprinkles({
  display: { mobile: 'block', tablet: 'flex' },
  flexDirection: { mobile: 'column', desktop: 'row' },
  padding: { mobile: 2, tablet: 4, desktop: 6 },
});
```

### Using React Components

```typescript
import { Box, Button, Stack, HStack, VStack } from '@wwwares/ui-system/v-e';

function MyComponent() {
  return (
    <Box padding={4} backgroundColor="surface-0">
      <VStack gap={4}>
        <Button variant="primary" size="lg">
          Primary Button
        </Button>

        <HStack gap={2} justifyContent="space-between">
          <Button variant="neutral">Cancel</Button>
          <Button variant="danger">Delete</Button>
        </HStack>
      </VStack>
    </Box>
  );
}
```

### Semantic Design Tokens

```typescript
// Use semantic background colors
const className = sprinkles({
  backgroundColor: 'primary-default', // Uses theme.semantic.bg.raised.interactive.primary.default
  boxShadow: 'raised-primary-default', // Uses theme.semantic.shadows.raised.interactive.primary.default
});
```

### Custom Recipes

```typescript
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { themeContract } from '@wwwares/ui-system/v-e';

const customButton = recipe({
  base: {
    padding: themeContract.spacing[3],
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
  variants: {
    variant: {
      custom: {
        background: `linear-gradient(45deg, ${themeContract.colors.purple[500]}, ${themeContract.colors.pink[500]})`,
        color: themeContract.colors.white,
      },
    },
  },
});
```

### Combining with Sprinkles

```typescript
import { createStyledComponent } from '@wwwares/ui-system/v-e';

function MyStyledComponent() {
  const className = createStyledComponent(
    customButton({ variant: 'custom' }),
    { marginTop: 4, marginBottom: 2 }, // sprinkles props
  );

  return <button className={className}>Custom Button</button>;
}
```

## Available Properties

### Layout
- `display`, `position`, `top`, `right`, `bottom`, `left`
- `width`, `height`, `overflow`, `zIndex`

### Flexbox
- `flexDirection`, `justifyContent`, `alignItems`, `gap`

### Spacing
- `padding`, `paddingX`, `paddingY`, `paddingTop`, etc.
- `margin`, `marginX`, `marginY`, `marginTop`, etc.

### Colors
- All Tailwind colors: `blue.500`, `red.300`, etc.
- Semantic colors: `primary-default`, `surface-0`, etc.

### Typography
- `fontSize`, `fontWeight`, `lineHeight`, `textAlign`
- `textTransform`, `fontStyle`

### Borders & Shadows
- `borderWidth`, `borderStyle`, `borderRadius`, `borderColor`
- `boxShadow` (including semantic shadows)

### Responsive Breakpoints
- `mobile`: default (no media query)
- `tablet`: `@media screen and (min-width: 768px)`
- `desktop`: `@media screen and (min-width: 1024px)`

## Theme Integration

The sprinkles system automatically uses your theme tokens:

```typescript
// This will use the correct color for the current theme (light/dark)
const themeAwareStyle = sprinkles({
  backgroundColor: 'surface-1',
  color: 'text-default',
  borderColor: 'neutral-default',
});
```

## Component Props

All React components accept both sprinkles props and their native HTML props:

```typescript
<Box
  as="section"
  padding={4}
  backgroundColor="surface-0"
  onClick={() => console.log('clicked')}
  aria-label="Main content"
>
  Content
</Box>
```

The components automatically separate sprinkles props from native props, so you get full type safety and functionality.
