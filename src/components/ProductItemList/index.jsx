import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import { MdOutlineShoppingCart, MdZoomOutMap } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductItemList = () => {
  return (
    <div className="productItem rounded-lg overflow-hidden border-1 border-gray-400 !my-4 shadow-lg">
      <div className="flex">
        <div className="group imgWrapper max-w-[250px] w-full h-[250px] overflow-hidden relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
            alt="Product Item"
            className="w-full"
          />
          <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-md p-1 text-xs font-medium">
            10%
          </span>
          <div className="actions absolute top-[-200px] right-[15px] z-50 flex items-center gap-3 flex-col w-[40px] transition-all duration-500 group-hover:top-[15px]">
            <Tooltip title="Zoom" placement="right">
              <Button className="!w-[40px] !h-[40px] !min-w-[40px] rounded-full !bg-white !hover:bg-primary group">
                <MdZoomOutMap className="text-lg text-black group-hover:text-primary transition-all" />
              </Button>
            </Tooltip>
            <Tooltip title="Compare" placement="right">
              <Button className="!w-[40px] !h-[40px] !min-w-[40px] rounded-full !bg-white !hover:bg-primary group">
                <IoGitCompareOutline className="text-lg text-black group-hover:text-primary transition-all" />
              </Button>
            </Tooltip>
            <Tooltip title="Favorite" placement="right">
              <Button className="!w-[40px] !h-[40px] !min-w-[40px] rounded-full !bg-white !hover:bg-primary group">
                <FaRegHeart className="text-lg text-black group-hover:text-primary transition-all" />
              </Button>
            </Tooltip>
          </div>
        </div>
        <div className="info p-3">
          <h6 className="text-sm">
            <Link to="/" className="text-primary">
              Soylent Green
            </Link>
          </h6>
          <h3 className="text-base title !mt-2 !mb-4 font-medium text-[rgba(0,0,0,0.9)]">
            <Link to="/" className="link">
              Siril Georgette Pink Color Saree with Blouse piece{" "}
            </Link>
          </h3>
          <p>
            We denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the momento,
            so blinded by desire that they cannot.
          </p>
          <Rating name="size-small" defaultValue={4} size="small" readOnly />

          <div className="flex items-center gap-x-2 !mb-2">
            <span className="oldPrice text-sm line-through text-gray-500">
              $58.00
            </span>
            <span className="newPrice text-primary font-bold">$48.00</span>
          </div>

          <div className="flex">
            <Button className="!bg-primary !text-white !py-2 !px-4 !uppercase">
              <MdOutlineShoppingCart className="!mr-2" />
              Add to cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItemList;
