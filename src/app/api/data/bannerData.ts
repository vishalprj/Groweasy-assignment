export type Banner = {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  type?: string;
};

export const bannerData: Banner[] = [
  {
    id: "1",
    title: "Unleash the Flavor",
    description: "New Seasonal Menu",
    cta: "Shop Now",
    image:
      "https://www.bannerbot.xyz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1509631179647-0177331693ae%3Fixid%3DM3w0NTY3MTh8MHwxfHNlYXJjaHwzfHxmYXNoaW9ufGVufDB8fHx8MTcyMjQzNTI3OXww%26ixlib%3Drb-4.0.3%26crop%3Dedges%26fit%3Dcrop%26h%3D100%26w%3D100&w=128&q=75",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/1/square.png",
    type: "banner",
  },
  {
    id: "2",
    title: "Limited Time Offer",
    description: "Explore New Arrivals Before They're Gone!",
    cta: "Browse Now",
    image:
      "https://www.bannerbot.xyz/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1707581471193-183252f0d85b%3Fixid%3DM3w0NTY3MTh8MHwxfHNlYXJjaHw3fHxvbmxpbmUlMjBzaG9wcGluZ3xlbnwwfHx8fDE3MjI1MjM5NzJ8MA%26ixlib%3Drb-4.0.3%26crop%3Dedges%26fit%3Dcrop%26h%3D100%26w%3D100&w=128&q=75",
    background:
      "https://bannerbot-public.s3.ap-south-1.amazonaws.com/templates/15/square.png",
  },
];
