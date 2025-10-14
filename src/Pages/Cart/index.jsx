import React from "react";
import { Link } from "react-router-dom";
import { Button, Rating } from "@mui/material";

import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";
import { BsFillBagCheckFill } from "react-icons/bs";

export const CartPage = () => {
  return (
    <div className="section py-5">
      <div className="container flex w-full">
        <div className="">
          <h2>Your Cart</h2>
          <p className="mt-0 !mb-4">
            There are <span className="font-bold text-primary">2</span> products
            in your cart
          </p>
          <div className="flex justify-between w-full gap-6">
            {/* ITEMS */}
            <div className="flex flex-col gap-y-4 leftPart w-[70%]">
              <div className="shadow-md rounded-md p-5 bg-white">
                <div className="cartItem w-full p-3 flex items-center gap-4">
                  <div className="img w-[15%]">
                    <Link to="/">
                      <img
                        src="https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg"
                        className="w-full"
                      />
                    </Link>
                  </div>

                  <div className="info w-[90%] relative">
                    <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-xl" />
                    <span className="text-sm">Sangria</span>
                    <h3 className="">
                      <Link className="link">
                        A-Line Kurti With Sharara & Dupatta
                      </Link>
                    </h3>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                      className="!mt-2 !mb-3"
                    />
                    <div className="flex gap-2 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Size S <GoTriangleDown />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Qty: 1 <GoTriangleDown />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 !my-2">
                      <div className="price text-sm font-bold">$58.00</div>
                      <div className="oldPrice line-through text-gray-500 text-sm font-medium">
                        $58.00
                      </div>
                      <div className="price text-primary text-sm font-bold">
                        55% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md p-5 bg-white">
                <div className="cartItem w-full p-3 flex items-center gap-4">
                  <div className="img w-[15%]">
                    <Link to="/">
                      <img
                        src="https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg"
                        className="w-full"
                      />
                    </Link>
                  </div>

                  <div className="info w-[90%] relative">
                    <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-xl" />
                    <span className="text-sm">Sangria</span>
                    <h3 className="">
                      <Link className="link">
                        A-Line Kurti With Sharara & Dupatta
                      </Link>
                    </h3>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                      className="!mt-2 !mb-3"
                    />
                    <div className="flex gap-2 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Size S <GoTriangleDown />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Qty: 1 <GoTriangleDown />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 !my-2">
                      <div className="price text-sm font-bold">$58.00</div>
                      <div className="oldPrice line-through text-gray-500 text-sm font-medium">
                        $58.00
                      </div>
                      <div className="price text-primary text-sm font-bold">
                        55% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md p-5 bg-white">
                <div className="cartItem w-full p-3 flex items-center gap-4">
                  <div className="img w-[15%]">
                    <Link to="/">
                      <img
                        src="https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg"
                        className="w-full"
                      />
                    </Link>
                  </div>

                  <div className="info w-[90%] relative">
                    <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-xl" />
                    <span className="text-sm">Sangria</span>
                    <h3 className="">
                      <Link className="link">
                        A-Line Kurti With Sharara & Dupatta
                      </Link>
                    </h3>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                      className="!mt-2 !mb-3"
                    />
                    <div className="flex gap-2 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Size S <GoTriangleDown />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Qty: 1 <GoTriangleDown />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 !my-2">
                      <div className="price text-sm font-bold">$58.00</div>
                      <div className="oldPrice line-through text-gray-500 text-sm font-medium">
                        $58.00
                      </div>
                      <div className="price text-primary text-sm font-bold">
                        55% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shadow-md rounded-md p-5 bg-white">
                <div className="cartItem w-full p-3 flex items-center gap-4">
                  <div className="img w-[15%]">
                    <Link to="/">
                      <img
                        src="https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_shock_matelasse_cinza_7011_1_2e01bb2707da32f4832791271694fa24.jpg"
                        className="w-full"
                      />
                    </Link>
                  </div>

                  <div className="info w-[90%] relative">
                    <IoCloseSharp className="cursor-pointer absolute top-[15px] right-[15px] text-xl" />
                    <span className="text-sm">Sangria</span>
                    <h3 className="">
                      <Link className="link">
                        A-Line Kurti With Sharara & Dupatta
                      </Link>
                    </h3>
                    <Rating
                      name="size-small"
                      defaultValue={4}
                      size="small"
                      readOnly
                      className="!mt-2 !mb-3"
                    />
                    <div className="flex gap-2 mb-2">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Size S <GoTriangleDown />
                        </div>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center bg-[#e4e4e4] text-xs font-bold py-1 px-2 rounded-md cursor-pointer">
                          Qty: 1 <GoTriangleDown />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 !my-2">
                      <div className="price text-sm font-bold">$58.00</div>
                      <div className="oldPrice line-through text-gray-500 text-sm font-medium">
                        $58.00
                      </div>
                      <div className="price text-primary text-sm font-bold">
                        55% OFF
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rightPart w-[30%]">
              <div className="shadow-md rounded-md bg-white p-6">
                <h3 className="pb-3 font-bold">Cart Totals</h3>
                <hr />
                <div className="flex flex-col gap-y-4 !my-4">
                  <p className="flex items-center justify-between">
                    <span className="text-sm">Subtotal</span>
                    <span className="font-bold text-primary">1,300.00</span>
                  </p>

                  <p className="flex items-center justify-between">
                    <span className="text-sm">Shipping</span>
                    <span className="font-bold">Free</span>
                  </p>

                  <p className="flex items-center justify-between">
                    <span className="text-sm">Estimate for</span>
                    <span className="font-bold">United Kingdom</span>
                  </p>

                  <p className="flex items-center justify-between">
                    <span className="text-sm">Total</span>
                    <span className="font-bold text-primary">1,300.00</span>
                  </p>
                </div>

                <Button className="!bg-primary !text-white w-full">
                  <BsFillBagCheckFill className="text-xl !mr-2" />
                  Checkout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
