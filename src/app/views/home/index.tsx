import { useGetAdBanner } from "@/app/store/queries";
import AdBanner from "@/components/Banner";

const HomePage = () => {
  const { data } = useGetAdBanner();
  return (
    <div className="ad-banners p-20">
      {data?.map((banner) => (
        <AdBanner
          key={banner.id}
          id={banner.id}
          title={banner.title}
          description={banner.description}
          cta={banner.cta}
          image={banner.image}
          background={banner.background}
          isEdit={true}
          isStyle={false}
        />
      ))}
    </div>
  );
};

export default HomePage;
