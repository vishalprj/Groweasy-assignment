import React, { useState } from "react";
import "./banner.css";
import { FaPencil } from "react-icons/fa6";
import EditAdBanner from "../EditBanner";
import { Toaster } from "react-hot-toast";

export type AdBannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  isEdit: boolean;
  isStyle: boolean;
  id?: String;
};

const AdBanner = ({
  title,
  description,
  cta,
  image,
  background,
  isEdit,
  id,
  isStyle = false,
}: AdBannerProps) => {
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
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="ad-banner-container">
            <div
              className={
                isStyle ? "edit-ad-banner-content" : "ad-banner-content"
              }
            >
              <h1 className="text-2xl font-bold">{title}</h1>
              <p>{description}</p>
              <div className="ad-banner-image">
                <img className="ad-banner-image" src={image} alt={title} />
              </div>
              <button className="ad-banner-cta">{cta}</button>
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
                bannerId={id}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdBanner;
