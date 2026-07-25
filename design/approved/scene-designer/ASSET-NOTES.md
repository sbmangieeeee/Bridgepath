# Scene Designer source assets

These files preserve the founder-approved mentor and Corner Shop exports.

## Mentor sources

- `mentors/ms-leela-maharaj-source.png`
- `mentors/mr-kareem-joseph-source.png`
- `mentors/mr-ali-source.png`
- `mentors/auntie-joy-source.png`
- `mentors/coach-devon-source.png`
- `mentors/ms-alana-pierre-source.png`

The mentor exports are 1024 × 1536 RGB source images. They must not be used as
runtime transparent character layers until their backgrounds are removed and
the resulting alpha edges are visually approved.

## Corner Shop sources

- `market/products/rice-source.png`
- `market/products/flour-source.png`
- `market/corner-shop-register-cashier-view-transparent.png`

The rice and flour exports are 1672 × 941 RGB source images and still contain
their generated background. The cashier-view counter is a genuine RGBA export.
Runtime product assets should be cropped to the product, converted to genuine
alpha transparency, and approved before being wired into an activity.
