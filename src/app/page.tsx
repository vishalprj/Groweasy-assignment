'use client'
import { useGetAdBanner } from "./store/queries";
import AdBanner from "@/components/Banner";
export default function Home() {
    const { data } = useGetAdBanner();
  return (
    <>
    <h1>knjnj</h1>
     <div className="ad-banners">
        {data?.map((banner) => (
          <AdBanner
            key={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
          />
        ))}
      </div>
    </>
  );
}


