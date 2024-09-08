# @wwwares/ui

1. `pnpm dev`
2. `pnpm -F *ui dev:css`
2. `pnpm -F *system dev:css`

to run local dev server & have both css files building

1. need to look into buildinfo again
   1. integration + generation. --watch?
2. look into order of importing generatead css in storybook vs actual projects
   1. had to reverse the order in storybook from prior commit
3. assess the state of `primary` tokens. We have the technology to animate gradients now, but maybe we can get around that with better shadows?
   1. Not a big deal tbh since buttons already animate gradients


- ridge: components with a 'bubbly' appearance. placed on top of the base surface.
- well: components that appear inset. placed on top of the base surface
- raised: special for buttons since their complex styling (for the "press") doesn't have a natural fit compared to ridge components
- surface colors are limited to a global scope for cohesivness

- conditions need to be added per-config? system pkg doesn't extend from its own preset
