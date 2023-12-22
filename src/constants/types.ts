export type Link = {
  id: string;
  shortUrl: string;
  url: string;
  isCopy: boolean;
};

export type FeatureType = {
  id: string;
  title: string;
  desc: string;
  img: string;
  extraBorder?: boolean;
};

export type FooterLinkType = {
  id: string;
  title: string;
  links: { id: string; title: string }[];
};
