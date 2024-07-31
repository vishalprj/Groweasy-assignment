'use client'
import { Banner } from "./api/data/bannerData";
import { useQuery } from 'react-query';

const fetchBannerData = async () => {
  const response = await fetch('/api/banner');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export default function Home() {
    const { data, error, isLoading } = useQuery<Banner[]>('bannerData', fetchBannerData);
    console.log("🚀 ~ Home ~ data:", data)
  return (
    <>
    <h1>knjnj</h1>
    {
        data?.map((i) => (
            <h1 key={i.title}>{i.title}</h1>
        ))
    }
    </>
  );
}


