import { Link } from "react-router-dom";
import { Button } from "@mui/material";

import { GoRocket } from "react-icons/go";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";

import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

const Navigation = () => {
  const [isOpenCategoryPanel, setIsOpenCategoryPanel] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenCategoryPanel(!isOpenCategoryPanel);
  };

  console.log(isOpenCategoryPanel, "PAINEL");

  return (
    <>
      <nav className="py-2">
        <div className="container flex items-center justify-end gap-5">
          <div className="col-1 w-[20%]">
            <Button
              className="!text-black gap-2 !font-bold w-full"
              onClick={() => openCategoryPanel()}
            >
              <RiMenu2Fill className="text-lg" /> Shop by categories
              <LiaAngleDownSolid className="text-lg ml-auto !font-bold cursor-pointer" />
            </Button>
          </div>
          <div className="col-2 w-[60%] nav">
            <ul className="flex items-center gap-5">
              <li className="list-none">
                <Link to="/" className="link transition">
                  <Button className="link transition !text-base !font-medium">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[100%] left-[0%] min-w-[300px] bg-white shadow-md opacity-0">
                  <ul>
                    <li className="list-none relative">
                      <Link to="/product-listing" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Men
                        </Button>

                        {/* Subsubmenu */}
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[300px] bg-white shadow-md opacity-0">
                          <ul>
                            <li className="list-none transition">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  T-Shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  Pents
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none">
                              <Link to="/product-listing" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                                  Suits
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/product-listing" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/product-listing" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/product-listing" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none">
                      <Link to="/product-listing" className="w-full">
                        <Button className="text-[rgba(0,0,0,0.8)] w-full !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Eletronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/product-listing"
                  className="link transition text-base font-medium"
                >
                  <Button className="link transition !text-base !font-medium">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 w-[20%]">
            <p className="text-sm font-medium flex items-center gap-3 mb-0 mt-0">
              <GoRocket className="text-lg" /> Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        isOpenCategoryPanel={isOpenCategoryPanel}
        setIsOpenCategoryPanel={setIsOpenCategoryPanel}
      />
    </>
  );
};

export default Navigation;
