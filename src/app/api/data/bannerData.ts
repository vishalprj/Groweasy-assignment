export interface Banner {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

export const bannerData: Banner[] = [
  {
    id: "1",
    title: "Summer Sale!",
    description: "Get up to 50% off on all summer fashion items.",
    cta: "Shop Now",
    image: "summer-sale.jpg",
    background: "light-blue"
  },
  {
    id: "2",
    title: "New Arrivals",
    description: "Explore our latest collection of fall fashion essentials.",
    cta: "Discover More",
    image: "new-arrivals.jpg",
    background: "light-green"
  },
  {
    id: "3",
    title: "Limited Time Offer",
    description: "Don't miss out on our exclusive discounts this weekend only.",
    cta: "View Deals",
    image: "limited-offer.jpg",
    background: "light-yellow"
  }
];
