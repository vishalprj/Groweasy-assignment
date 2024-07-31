'use client'
import { Banner } from "./api/data/bannerData";
import { useQuery } from 'react-query';
import { fetchBannerData } from "./store/queries";
import AdBanner from "@/components/Banner";
export default function Home() {
    const { data, error, isLoading } = useQuery<Banner[]>('bannerData', fetchBannerData);
    console.log("🚀 ~ Home ~ data:", data)
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


