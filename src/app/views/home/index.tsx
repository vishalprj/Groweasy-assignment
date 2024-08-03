import AdBanner from "../../components/banner/index";
import Banner from "../../components/secondBanner/index";
import { useGetAdBanner } from "@/app/store/queries";

const HomePage = () => {
  const { data } = useGetAdBanner();
  return (
    <div className="ad-banners pt-3">
      <h1 className="text-3xl font-bold text-center	">GrowEasy Assignment</h1>
      {data?.map((banner) => (
        <div key={banner.id} className="ad-banners p-10">
          {banner.type === "banner" ? (
            <AdBanner bannerData={banner} isEdit={true} isStyle={false} />
          ) : (
            <Banner bannerData={banner} isEdit={true} isStyle={false} />
          )}
        </div>
      ))}
    </div>
  );
};

export default HomePage;
