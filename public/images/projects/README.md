# Project screenshots

Drop real screenshots here, e.g.:

- `coding-contest-platform.png`
- `efficient-transformer.png`
- `multimodal-species-recognition.png`

Then in `lib/data.ts`, update each project's `image` field to point at the
new file, and swap `ProjectImagePlaceholder` in `components/Projects.tsx`
for a real `next/image` `<Image src={project.image} ... />`.

Recommended size: 1200×750px (16:10), PNG or WebP, under 500KB.
