import { useState } from "react";
import { Collapse } from "react-collapse";
import Rating from "@mui/material/Rating";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

import { CategoryCollapse } from "../CategoryCollapse";

const Sidebar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] = useState(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState(true);
  const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

  return (
    <aside className="sidebar py-5">
      <div className="box scroll-behavior-div">
        <div className="box !mb-4">
          <h3 className="!mb-3 text-base font-bold flex items-center">
            Shop by category
            <Button
              onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto"
            >
              {isOpenCategoryFilter ? <FaAngleDown /> : <FaAngleUp />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenCategoryFilter}>
            <div className="px-3 relative">
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Fashion"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Electronics"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Bags"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Footwear"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Groceries"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Beauty"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Wellness"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Jewellery"
              />
            </div>
          </Collapse>
        </div>
        <div className="box !mb-4">
          <h3 className="!mb-3 text-base font-bold flex items-center">
            Availability
            <Button
              onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto"
            >
              {isOpenAvailFilter ? <FaAngleDown /> : <FaAngleUp />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenAvailFilter}>
            <div className="px-3 relative">
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Available (17)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="In stock (10)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Not available (10)"
              />
            </div>
          </Collapse>
        </div>
        <div className="box !mb-4">
          <h3 className="!mb-3 text-base font-bold flex items-center">
            Size
            <Button
              onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}
              className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full ml-auto"
            >
              {isOpenSizeFilter ? <FaAngleDown /> : <FaAngleUp />}
            </Button>
          </h3>
          <Collapse isOpened={isOpenSizeFilter}>
            <div className="px-3 relative">
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Small (17)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Medium (10)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="Large (12)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="XL (9)"
              />
              <FormControlLabel
                control={<Checkbox />}
                className="w-full"
                size="small"
                label="XXL (4)"
              />
            </div>
          </Collapse>
        </div>

        <div className="box !mb-4">
          <h3 className="w-full font-bold flex items-center pr-5 !mb-4">
            Filter by price
          </h3>

          <RangeSlider />
          <div className="flex pt-2 pb-2 priceRange">
            <span>
              From: <strong className="text-dark">Rs: {100}</strong>
            </span>
            <span className="ml-auto">
              To: <strong className="text-dark">Rs: {500}</strong>
            </span>
          </div>
        </div>

        <div className="box !mb-4">
          <h3 className="w-full font-bold flex items-center pr-5 !mb-4">
            Filter by rating
          </h3>
          <div className="flex flex-col">
            <Rating name="size-small" defaultValue={5} size="small" readOnly />
            <Rating name="size-small" defaultValue={4} size="small" readOnly />
            <Rating name="size-small" defaultValue={3} size="small" readOnly />
            <Rating name="size-small" defaultValue={2} size="small" readOnly />
            <Rating name="size-small" defaultValue={1} size="small" readOnly />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
