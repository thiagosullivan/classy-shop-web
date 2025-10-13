import { Link } from "react-router-dom";

import { useCart } from "../../hooks/use-cart";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";

import { IoCloseSharp } from "react-icons/io5";
import { MdOutlineDeleteOutline } from "react-icons/md";

export const Cart = () => {
  const { OpenCartFunction, CloseCartFunction, openCart } = useCart();

  return (
    <div>
      <Button onClick={OpenCartFunction}>Open drawer</Button>
      <Drawer
        open={openCart}
        onClose={CloseCartFunction}
        anchor={"right"}
        className="cartPanel"
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-between !py-2 gap-2">
              <h4 className="font-medium">Shopping Cart (1)</h4>
              <Button
                onClick={CloseCartFunction}
                className="!w-[20px] !h-[20px] !min-w-[20px] !p-0"
              >
                <IoCloseSharp className="text-xl" />
              </Button>
            </div>
            {/* Items */}
            <div className="scroll w-full max-h-[600px] overflow-y-scroll overflow-x-hidden !py-4 border-b border-gray-300 flex flex-col gap-y-4">
              {/* item */}
              <div className="cartItem w-full flex items-center gap-4 relative">
                <div className="img w-[120px] h-[120px] rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                    className="w-full"
                  />
                </div>

                <div className="info w-[70%]">
                  <h4 className="font-medium">
                    A-Line Kurti With Sharara & Dupatta
                  </h4>
                  <p className="flex items-center gap-5 mt-2 mb-2">
                    <span>
                      Qty: <span>2</span>
                    </span>
                    <span className="text-primary font-bold">Price: $25</span>
                  </p>
                  <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-xl !hover:text-primary" />
                </div>
              </div>
              <div className="cartItem w-full flex items-center gap-4 relative">
                <div className="img w-[120px] h-[120px] rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                    className="w-full"
                  />
                </div>

                <div className="info w-[70%]">
                  <h4 className="font-medium">
                    A-Line Kurti With Sharara & Dupatta
                  </h4>
                  <p className="flex items-center gap-5 mt-2 mb-2">
                    <span>
                      Qty: <span>2</span>
                    </span>
                    <span className="text-primary font-bold">Price: $25</span>
                  </p>
                  <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-xl !hover:text-primary" />
                </div>
              </div>
              <div className="cartItem w-full flex items-center gap-4 relative">
                <div className="img w-[120px] h-[120px] rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                    className="w-full"
                  />
                </div>

                <div className="info w-[70%]">
                  <h4 className="font-medium">
                    A-Line Kurti With Sharara & Dupatta
                  </h4>
                  <p className="flex items-center gap-5 mt-2 mb-2">
                    <span>
                      Qty: <span>2</span>
                    </span>
                    <span className="text-primary font-bold">Price: $25</span>
                  </p>
                  <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-xl !hover:text-primary" />
                </div>
              </div>
              <div className="cartItem w-full flex items-center gap-4 relative">
                <div className="img w-[120px] h-[120px] rounded-md overflow-hidden">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                    className="w-full"
                  />
                </div>

                <div className="info w-[70%]">
                  <h4 className="font-medium">
                    A-Line Kurti With Sharara & Dupatta
                  </h4>
                  <p className="flex items-center gap-5 mt-2 mb-2">
                    <span>
                      Qty: <span>2</span>
                    </span>
                    <span className="text-primary font-bold">Price: $25</span>
                  </p>
                  <MdOutlineDeleteOutline className="absolute top-[10px] right-[10px] cursor-pointer text-xl !hover:text-primary" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium">1 item</span>
                <span className="text-primary font-bold">$86.00</span>
              </div>

              <div className="flex items-center justify-between w-full">
                <span className="flex items-center justify-between w-full">
                  Shipping
                </span>
                <span className="text-primary font-bold">$8.00</span>
              </div>
            </div>

            <div className="bottomInfo py-3 px-4 w-full border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
              <div className="flex items-center justify-between w-full">
                <span className="text-sm font-medium">Total (tax excl.)</span>
                <span className="text-primary font-bold">$93.00</span>
              </div>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Link className="w-full" to="/cart">
                <Button className="!bg-primary !text-white w-full !py-3">
                  View Cart
                </Button>
              </Link>
              <Link className="w-full" to="/checkout">
                <Button className="!bg-primary !text-white w-full !py-3">
                  Checkout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
