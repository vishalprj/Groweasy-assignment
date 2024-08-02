import { useGetAdBanner } from "@/app/store/queries";
import AdBanner from "@/app/components/Banner";

const HomePage = () => {
  const { data } = useGetAdBanner();
  return (
    <div className="ad-banners pt-3">
      <h1 className="text-3xl font-bold text-center	">GrowEasy Assignment</h1>
      {data?.map((banner) => (
        <div key={banner.id} className="ad-banners p-10">
          <AdBanner
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            background={banner.background}
            isEdit={true}
            isStyle={false}
          />
        </div>
      ))}
    </div>
  );
};

export default HomePage;
