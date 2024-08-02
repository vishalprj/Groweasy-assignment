import React, { useState } from "react";
import "./banner.css";
import { FaPencil } from "react-icons/fa6";
import { Toaster } from "react-hot-toast";
import EditAdBanner from "../../EditBanner";

export type BannerProps = {
  banner: {
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

const Banner = ({ banner, isEdit, isStyle = false }: BannerProps) => {
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
          style={{ backgroundImage: `url(${banner.background})` }}
        >
          <div className="ad-banner-container">
            <div
              className={
                isStyle ? "edit-ad-banner-content" : "ad-banner-content"
              }
            >
              <h1 className="text-2xl font-bold ml-16 text-white">
                {banner.title}
              </h1>
              <p>{banner.description}</p>
              <div className="ad-banner-image">
                <img
                  className="ad-banner-image"
                  src={banner.image}
                  alt={banner.title}
                />
              </div>
              <button className="ad-banner-cta">{banner.cta}</button>
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
                banner={banner}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
