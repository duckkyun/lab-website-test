// Single source of truth for site-wide metadata and navigation.

export const SITE = {
  title: 'Ryu Lab',
  subtitle: 'Department of Biomedical Sciences, Yonsei University College of Medicine',
  description:
    'Ryu Lab studies microbiome, immune homeostasis, and tissue-resident cell biology at Yonsei University College of Medicine.',
  repo: 'https://github.com/duckkyun/lab-website-test',
  issues: 'https://github.com/duckkyun/lab-website-test/issues/new',
  maintainerEmail: 'duckkyun29@gmail.com',
} as const;

// Paths are relative to the site base; Header prefixes BASE_URL.
// An item with `children` renders as a dropdown; its own href is still the
// landing page, and children jump to in-page anchors on that page.
export const NAV = [
  { label: 'Home', href: '' },
  { label: 'Research', href: 'research/' },
  {
    label: 'People',
    href: 'members/',
    children: [
      { label: 'PI', href: 'members/#pi' },
      { label: 'Lab Members', href: 'members/#members' },
      { label: 'Alumni', href: 'members/#alumni' },
    ],
  },
  { label: 'Publications', href: 'publications/' },
  { label: 'News', href: 'news/' },
  { label: 'Contact', href: 'contact/' },
] as const;
