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
export const NAV = [
  { label: 'Home', href: '' },
  { label: 'Research', href: 'research/' },
  { label: 'Members', href: 'members/' },
  { label: 'Publications', href: 'publications/' },
  { label: 'News', href: 'news/' },
  { label: 'Contact', href: 'contact/' },
] as const;
