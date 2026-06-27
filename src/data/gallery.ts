export interface GalleryPhoto {
  src: string; // file name inside public/images/gallery/  (e.g. 'ksim-2025.jpg')
  alt: string; // accessible description of the photo
  caption?: string; // short line shown under the photo
  event?: string; // e.g. conference or outing name
  date?: string; // YYYY-MM-DD
}

// Lab photos, newest first. To add one:
//   1. Drop the image into  public/images/gallery/
//   2. Add an entry below — `src` is just the file name.
// Example:
//   {
//     src: 'ksim-2025.jpg',
//     alt: 'Ryu Lab members at the 2025 KSIM annual meeting',
//     caption: 'Group photo at the KSIM annual meeting',
//     event: 'KSIM 2025',
//     date: '2025-11-01',
//   },
export const GALLERY: GalleryPhoto[] = [];
