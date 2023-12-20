import { FeatureType, Link } from './types';

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
  },
  {
    id: '2c',
    title: 'Detailed Records',
    desc: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    id: '3c',
    title: 'Fully Customizable',
    desc: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];
