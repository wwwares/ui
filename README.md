# @wwwares/ui

<!-- 1. `pnpm dev`
2. `pnpm -F *ui dev:css`
2. `pnpm -F *system dev:css` -->

- system package needs to manually run build to pick up on recipe changes in storybook
  - something about storybook hmr
- changes to /system need a rebuild to be picked up by storybook
- seeing changes in storybook/consumer ui:
  - including buildinfo or node_modules/src for /ui to enable consumer css generation for atomic styles
  - all recipes should still be defined on the preset level


- ridge: components with a 'bubbly' appearance. placed on top of the base surface.
- well: components that appear inset. placed on top of the base surface
- raised: special for buttons since their complex styling (for the "press") doesn't have a natural fit compared to ridge components
- surface colors are limited to a global scope for cohesivness

- conditions need to be added per-config? system pkg doesn't extend from its own preset

18 22 26 30 34 38
