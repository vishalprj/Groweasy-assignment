import React from 'react';
import './banner.css';
import Image from 'next/image';
import { FaPencil } from "react-icons/fa6";

interface AdBannerProps {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
}

const AdBanner = ({ title, description, cta, image, background }: AdBannerProps) => {
  return (
    <div className="ad-banner" style={{ backgroundImage: `url(${background})` }}>
      <div className="ad-banner-container">
        <div className='ad-banner-content'>
        <h1 className='text-2xl font-bold'>{title}</h1>
        <p>{description}</p>
        <div className='ad-banner-image'>
             <img className=" ad-banner-image" src={image} alt={title} />
        </div>
        <button className="ad-banner-cta">{cta}</button>
         </div>
          <div className='edit-icon'>
            <FaPencil/>
            </div>
      </div>
    </div>
  );
};

export default AdBanner;
