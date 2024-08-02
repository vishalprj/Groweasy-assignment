import React, { useState } from "react";
import "./banner.css";
import { FaPencil } from "react-icons/fa6";
import EditAdBanner from "../EditBanner";
import { Toaster } from "react-hot-toast";
import Image from "next/image";

export type AdBannerProps = {
  isEdit: boolean;
  isStyle: boolean;
  bannerData: {
    id: string;
    title: string;
    description: string;
    cta: string;
    image: string;
    background: string;
  };
};

const AdBanner = ({ isEdit, bannerData, isStyle = false }: AdBannerProps) => {
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
              <h1 className="text-2xl font-bold">{bannerData.title}</h1>
              <p>{bannerData.description}</p>
              <div className="ad-banner-image">
                <Image
                  className="ad-banner-image"
                  src={bannerData.image}
                  alt={bannerData.title}
                  height={206}
                  width={187}
                />
              </div>
              <button className="ad-banner-cta">{bannerData.cta}</button>
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

export default AdBanner;
