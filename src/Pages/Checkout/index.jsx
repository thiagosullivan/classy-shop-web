import React from "react";
import { Button, TextField } from "@mui/material";

import { BsFillBagCheckFill } from "react-icons/bs";

export const CheckoutPage = () => {
  return (
    <section className="py-10">
      <div className="container flex gap-5">
        <div className="leftCol w-[70%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h1 className="font-bold !mb-4">Billing Details</h1>

            <form className="w-full mt-5 flex flex-col gap-y-5">
              <div className="flex items-center gap-3">
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="col w-[50%]">
                  <TextField
                    className="w-full"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>

              <div>
                <h5 className="font-medium !mb-2">Street address *</h5>
                <div className="flex flex-col gap-y-4">
                  <div className="col w-full">
                    <TextField
                      className="w-full"
                      label="House No. and Street Name"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="col w-full">
                    <TextField
                      className="w-full"
                      label="Apartament, suite, unit, etc (optional)"
                      variant="outlined"
                      size="small"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="col w-[50%]">
                      <TextField
                        className="w-full"
                        label="Town / City *"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                    <div className="col w-[50%]">
                      <TextField
                        className="w-full"
                        label="State / Country *"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h5 className="font-medium !mb-2">Postcode / ZIP *</h5>
                <div className="col w-full">
                  <TextField
                    className="w-full"
                    label="Zip Code"
                    variant="outlined"
                    size="small"
                  />
                </div>
              </div>
              <div>
                <h5 className="font-medium !mb-2">Contact infos *</h5>
                <div className="flex flex-col gap-y-4">
                  <div className="flex items-center gap-3">
                    <div className="col w-[50%]">
                      <TextField
                        className="w-full"
                        label="Phone Number"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                    <div className="col w-[50%]">
                      <TextField
                        className="w-full"
                        label="Email Address"
                        variant="outlined"
                        size="small"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="rightCol w-[30%]">
          <div className="card bg-white shadow-md p-5 rounded-md w-full">
            <h2 className="font-bold !mb-4">Your Order</h2>

            <div className="flex items-center justify-between py-3 !mb-2 border-t border-b border-[rgba(0,0,0,0.1)]">
              <span className="text-sm font-medium">Product</span>
              <span className="text-sm font-medium">Subtotal</span>
            </div>

            {/* ITEMS */}
            <div className="max-h-[300px] overflow-y-scroll flex flex-col gap-y-2 !mb-6">
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
              <div className="flex items-center justify-between border-b border-[rgba(0,0,0,0.1)] pb-2">
                <div className="part1 flex items-center justify-between gap-3">
                  <div className="img w-[80px] h-[80px] object-cover overflow-hidden rounded-md group">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvl0zUYiUExb40GaRUddIVUrx3zg3-EZ6yQA&s"
                      className="w-full"
                    />
                  </div>
                  <div className="info">
                    <h4 className="text-sm font-medium">
                      A-Line Kurti With Sh...
                    </h4>
                    <span className="text-sm">Qty: 1</span>
                  </div>
                </div>
                <span className="text-sm font-bold">R$ 1,300.00</span>
              </div>
            </div>

            <Button className="!bg-primary !text-white w-full !py-2">
              Payment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
