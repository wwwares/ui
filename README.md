# @wwwares/ui

- ridge: components with a 'bubbly' appearance. placed on top of the base surface.
- well: components that appear inset. placed on top of the base surface
- raised: special for buttons since their complex styling (for the "press") doesn't have a natural fit compared to ridge components
- surface colors are limited to a global scope for cohesivness
- `bg.surface.*`: planes named by role (page, nav, card, floating, modal). each theme orders them independently
- `bg.fill.*`: structure within a surface (chrome, band, tray) plus translucent `hover` and `pressed` states
- `item.highlighted` (bg, border, shadow): hovered or focused menu item

18 22 26 30 34 38
