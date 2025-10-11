import { Breadcrumbs, Button, Rating } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { ProductZoom } from "../../components/ProductZoom";
import QtyBox from "../../components/QtyBox";

export const ProductDetails = () => {
  return (
    <div className="py-5 pb-0">
      <div className="container !mb-4">
        <div role="presentation">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Fashion
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/"
              className="link transition"
            >
              Cropped Satin Bomber Dress
            </Link>
          </Breadcrumbs>
        </div>
      </div>

      <div className="bg-white">
        <div className="container flex gap-4 py-6 px-2">
          <div className="productZoomContainer w-[30%]">
            <ProductZoom />
          </div>
          <div className="productContent w-[70%]">
            <h1 className="text-2xl">Chikankari Woven Kurta</h1>
            <div className="flex items-center gap-3">
              <span className="text-gray-400 text-sm">
                Brands:{" "}
                <span className="font-medium opacity-75">
                  House of Chikankari
                </span>
              </span>
              <Rating
                name="size-small"
                defaultValue={4}
                size="small"
                readOnly
              />
            </div>
            <div className="flex items-center gap-4 !my-4">
              <span className="oldPrice line-through text-gray-500 text-lg font-medium">
                $58.00
              </span>
              <div className="price text-primary text-lg font-bold">$58.00</div>
            </div>
            <span className="text-sm">
              Available In Stock:{" "}
              <span className="text-green-600 font-bold">147 Items</span>
            </span>
            <br />
            <p className="!mt-4 text-gray-500">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <div className="flex items-center gap-3 !my-2 size-btn">
              <span>Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button>S</Button>
                <Button>M</Button>
                <Button>L</Button>
                <Button>XXL</Button>
              </div>
            </div>
            <div className="flex items-center">
              <div>
                <QtyBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
