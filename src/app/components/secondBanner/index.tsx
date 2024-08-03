import React, { useState } from "react";
import "./banner.css";
import { FaPencil } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import EditAdBanner from "../editBanner";
import Image from "next/image";

export type BannerProps = {
  bannerData: {
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
    id: string;
  };
  isEdit: boolean;
  isStyle: boolean;
};

const Banner = ({ bannerData, isEdit, isStyle = false }: BannerProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      <Toaster position="top-right" />
      <div className={isStyle ? "container" : ""}>
        <div
          className="ad-banner"
          style={{ backgroundImage: `url(${bannerData.background})` }}
        >
          <div className="ad-banner-container">
            <div
              className={
                isStyle ? "edit-ad-banner-content" : "ad-banner-content"
              }
            >
              <h1 className="text-2xl font-bold ml-16 text-white">
                {bannerData.title}
              </h1>
              <p className="ad-banner-info">{bannerData.description}</p>
              <div className="ad-banner-images">
                <Image
                  className="ad-banner-images"
                  src={bannerData.image}
                  alt={bannerData.title}
                  height={187}
                  width={185}
                />
              </div>
              <button className="ad-banners-cta">{bannerData.cta}</button>
            </div>
            {isEdit && (
              <div className="edit-icon">
                <button onClick={toggleDrawer}>
                  <FaPencil />
                </button>
              </div>
            )}
            {isDrawerOpen && (
              <EditAdBanner
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                banner={bannerData}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
