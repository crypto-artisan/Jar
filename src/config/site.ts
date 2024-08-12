export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Jar",
  description: "Make beautiful websites regardless of your design experience.",
};

export const Config = {
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || '',
}
