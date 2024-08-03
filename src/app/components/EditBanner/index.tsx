import { useEditBanner } from "@/app/store/queries";
import { useState } from "react";
import { Toaster } from "react-hot-toast";
import "./EditBanner.css";
import { SilderImageData } from "./constants";
import Drawer from "../drawer";
import Image from "next/image";
import Banner from "../secondBanner";
import AdBanner from "../banner";

export type EditAdBannerProps = {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  banner: {
    id: string;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    type?: string;
  };
};

const EditAdBanner = ({
  isDrawerOpen,
  toggleDrawer,
  banner,
}: EditAdBannerProps) => {
  const [bannerState, setBannerState] = useState({ ...banner });
  const { mutate: updatedData } = useEditBanner();

  const handleSubmit = () => {
    updatedData(bannerState);
    toggleDrawer();
  };

  const handleClick = (img: string) => {
    setBannerState((prev) => {
      return { ...prev, image: img };
    });
  };
  return (
    <>
      <Toaster position="top-right" />
      <Drawer isOpen={isDrawerOpen} onClose={toggleDrawer}>
        <div className="grid gap-4 py-4">
          {bannerState.type === "banner" ? (
            <AdBanner bannerData={bannerState} isEdit={false} isStyle={true} />
          ) : (
            <Banner bannerData={bannerState} isEdit={false} isStyle={true} />
          )}
          <div className="grid grid-cols-1 gap-2 pt-2">
            <label>Image</label>
            <div className="image-sider">
              {SilderImageData?.map((img) => (
                <button key={img} onClick={() => handleClick(img)}>
                  <Image src={img} alt="alt" width={80} height={50} />
                </button>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Title</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter title"
              defaultValue={banner.title}
              onChange={(e) => {
                setBannerState((prev) => {
                  return { ...prev, title: e.target.value };
                });
              }}
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Description</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter description"
              defaultValue={banner.description}
              onChange={(e) =>
                setBannerState((prev) => {
                  return { ...prev, description: e.target.value };
                })
              }
            />
          </div>
          <div className="grid grid-cols-1 gap-2">
            <label>Button Text</label>
            <input
              className="border rounded p-2"
              type="text"
              placeholder="Enter Button Text"
              defaultValue={banner.cta}
              onChange={(e) =>
                setBannerState((prev) => {
                  return { ...prev, cta: e.target.value };
                })
              }
            />
          </div>
        </div>
        <div className="flex">
          <button
            type="submit"
            className="bg-green-500 text-white rounded p-2 w-full"
            onClick={handleSubmit}
          >
            Done
          </button>
        </div>
      </Drawer>
    </>
  );
};

export default EditAdBanner;
