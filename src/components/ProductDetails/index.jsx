import QtyBox from "../../components/QtyBox";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { Button, Rating } from "@mui/material";

export const ProductDetailsComp = () => {
  return (
    <div className="productContent w-[70%] !ml-4">
      <h1 className="text-2xl">Chikankari Woven Kurta</h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-sm">
          Brands:{" "}
          <span className="font-medium opacity-75">House of Chikankari</span>
        </span>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />
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
      <p className="!mt-4 text-gray-500 max-w-[500px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
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

      <p className="!mt-4">Free Shipping (Est. Delivery Time 2-3 Days)</p>
      <div className="flex items-center !mt-4 gap-2">
        <div className="qtyBoxWrapper w-[80px]">
          <QtyBox />
        </div>

        <Button className="!bg-primary flex gap-2 !text-white h-[45px]">
          <MdOutlineShoppingCart className="text-xl" />
          Add to Cart
        </Button>
      </div>

      <div className="flex items-center gap-4 !mt-4">
        <span className="flex items-center gap-2 link cursor-pointer">
          <FaRegHeart className="text-lg" />
          Add to Wishlist
        </span>
        <span className="flex items-center gap-2 link cursor-pointer">
          <IoGitCompareOutline />
          Add to Compare
        </span>
      </div>
    </div>
  );
};
