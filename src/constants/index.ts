import { FeatureType, FooterLinkType, Link } from './types';

export const navLinks = [
  {
    id: 1,
    label: 'Features',
  },
  {
    id: 2,
    label: 'Pricing',
  },
  {
    id: 3,
    label: 'Resources',
  },
];

export const sampleLinks: Link[] = [
  {
    id: '1b',
    shortUrl: 'https://rel.ink/k4lKyk',
    url: 'https://www.frontendmentor.io',
    isCopy: false,
  },
  {
    id: '2b',
    shortUrl: 'https://rel.ink/k4lKyk',
    url: 'https://www.frontendmentor.io',
    isCopy: true,
  },
];

export const sampleFeature: FeatureType[] = [
  {
    id: '1c',
    title: 'Brand Recognition',
    desc: 'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
    img: '/images/icon-brand-recognition.svg',
  },
  {
    id: '2c',
    title: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
    img: '/images/icon-detailed-records.svg',
    extraBorder: true,
  },
  {
    id: '3c',
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
    img: '/images/icon-fully-customizable.svg',
  },
];

export const footerLinks: FooterLinkType[] = [
  {
    id: '1d',
    title: 'Features',
    links: [
      {
        id: '1d-a',
        title: 'Link Shortening',
      },
      {
        id: '1d-b',
        title: 'Branded Links',
      },
      {
        id: '1d-c',
        title: 'Analytics',
      },
    ],
  },
  {
    id: '2d',
    title: 'Resources',
    links: [
      {
        id: '2d-a',
        title: 'Blog',
      },
      {
        id: '2d-b',
        title: 'Developers',
      },
      {
        id: '2d-c',
        title: 'Support',
      },
    ],
  },
  {
    id: '3d',
    title: 'Company',
    links: [
      {
        id: '3d-a',
        title: 'About',
      },
      {
        id: '3d-b',
        title: 'Our Team',
      },
      {
        id: '3d-c',
        title: 'Careers',
      },
      {
        id: '3d-d',
        title: 'Contact',
      },
    ],
  },
];

export const footerSocials = [
  {
    id: '4a',
    image: '/images/icon-facebook.svg',
    alt: 'facebook',
  },
  {
    id: '4b',
    image: '/images/icon-twitter.svg',
    alt: 'twitter',
  },
  {
    id: '4c',
    image: '/images/icon-pinterest.svg',
    alt: 'pinterest',
  },
  {
    id: '4d',
    image: '/images/icon-instagram.svg',
    alt: 'instagram',
  },
];
