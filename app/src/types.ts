export type ErrCallback = (error: string | undefined) => void;

export type Settings = {
  title?: string;
  description?: string;
  author?: string;
  keywords?: string[];
  logoUrl?: string;
  maxLogoHeightRem?: number;
  faviconUrl?: string;
  homeGallery?: GalleryI;
  pageGalleries?: GalleryI[];
  palette?: Palette;
  socials?: Socials;
  email?: string;
  aboutPage?: AboutPage;
  font?: string;
  storeLinks?: { link: string; headerText: string }[];
};

export interface AboutPage {
  blerbOne?: string;
  blerbTwo?: string;
  optionalTopImageUrl?: string;
  blerbThree?: string;
  optionalBottomImageUrl?: string;
  optionalMiddleImageUrl?: string;
  optionalSecondMiddleImageUrl?: string;
}

export interface GalleryI {
  _id: string;
  _type: "gallery";
  title: string;
  images: Image[];
}

export interface Image {
  alt?: string;
  caption?: string;
  url: string;
}

export interface Palette {
  _id: string;
  _type: "palette";
  name: string;
  lightest?: string;
  darkest?: string;
  dark?: string;
  light?: string;
  base?: string;
}

export interface Socials {
  _id: string;
  _type: "socials";
  bluesky?: string;
  twitter?: string;
  instagram?: string;
  mastodon?: string;
  linkedin?: string;
  github?: string;
  youtube?: string;
  tumblr?: string;
  email?: string;
}
