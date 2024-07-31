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
