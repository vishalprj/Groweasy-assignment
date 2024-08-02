import { useGetAdBanner } from "@/app/store/queries";
import AdBanner from "@/app/components/Banner";
import Banner from "@/app/components/Banner/SecondBanner";

const HomePage = () => {
  const { data } = useGetAdBanner();
  return (
    <div className="ad-banners pt-3">
      <h1 className="text-3xl font-bold text-center	">GrowEasy Assignment</h1>
      {data?.map((banner) => (
        <div key={banner.id} className="ad-banners p-10">
          {banner.type === "banner" ? (
            <AdBanner banner={banner} isEdit={true} isStyle={false} />
          ) : (
            <Banner banner={banner} isEdit={true} isStyle={false} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
