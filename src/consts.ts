// Single source of truth for site-wide metadata and navigation.

// GitHub Actions sets GITHUB_REPOSITORY to "owner/repo", so the repo links below
// follow a rename or account transfer automatically. The fallback is only used
// for local dev (where the links aren't user-facing).
const repoSlug = process.env.GITHUB_REPOSITORY ?? 'duckkyun/lab-website-test';

export const SITE = {
  title: 'Ryu Lab',
  subtitle: 'Department of Biomedical Sciences, Yonsei University College of Medicine',
  description:
    'Ryu Lab studies microbiome, immune homeostasis, and tissue-resident cell biology at Yonsei University College of Medicine.',
  repo: `https://github.com/${repoSlug}`,
  issues: `https://github.com/${repoSlug}/issues/new`,
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
  {
    label: 'News',
    href: 'news/',
    children: [
      { label: 'Updates', href: 'news/' },
      { label: 'Gallery', href: 'gallery/' },
    ],
  },
  { label: 'Contact', href: 'contact/' },
] as const;
