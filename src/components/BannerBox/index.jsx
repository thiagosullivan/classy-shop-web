import React from "react";
import { Link } from "react-router-dom";

const BannerBox = ({ img, link }) => {
  return (
    <div className="box bannerBox rounded-lg overflow-hidden group">
      <Link to={link}>
        <img
          src={img}
          className="w-full transition-all group-hover:scale-105"
          alt="Banner"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
