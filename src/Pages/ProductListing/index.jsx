import { useState } from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";

import Sidebar from "../../components/Sidebar";
import ProductItem from "../../components/ProductItem";
import ProductItemList from "../../components/ProductItemList";

import { IoGridSharp } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

import "./style.css";

// function handleClick(event) {
//   event.preventDefault();
//   console.info("You clicked a breadcrumb.");
// }

const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section className="py-8">
      <div className="container">
        <div role="presentation" onClick={handleClick}>
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
          </Breadcrumbs>
        </div>
      </div>
      <div className="bg-white p-2 !mt-4">
        <div className="container flex gap-3">
          <div className="sidebarWrapper w-[20%] h-full bg-white">
            <Sidebar />
          </div>

          <div className="rightContent w-[80%]">
            <div className="bg-[#f1f1f1] p-2 w-full mb-3 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center">
                <Button
                  className={`list-btn !w-[40px] !h-[40px] !min-h-[40px] !rounded-full !text-black ${itemView === "list" && "active"}`}
                  onClick={() => setItemView("list")}
                >
                  <LuMenu className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`grid-btn !w-[40px] !h-[40px] !min-h-[40px] !rounded-full !text-black ${itemView === "grid" && "active"}`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-sm font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  There are 27 products.
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end">
                <span className="text-sm font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By:
                </span>
                <div>
                  <Button
                    id="demo-positioned-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="!bg-white !text-xs"
                  >
                    Sales, highest to lowest
                  </Button>
                  <Menu
                    id="basic-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "left",
                    }}
                  >
                    <MenuItem onClick={handleClose}>
                      Sales, highest to lowest
                    </MenuItem>
                    <MenuItem onClick={handleClose}>Relevance</MenuItem>
                    <MenuItem onClick={handleClose}>Name, A to Z</MenuItem>
                    <MenuItem onClick={handleClose}>Name, Z to A</MenuItem>
                    <MenuItem onClick={handleClose}>
                      Price, low to high
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                      Price, high to low
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
            {itemView === "grid" ? (
              <div className="grid grid-cols-4 md:grid-cols-4 gap-4">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
              </div>
            ) : (
              <div className="flex flex-col">
                <ProductItemList />
                <ProductItemList />
                <ProductItemList />
                <ProductItemList />
                <ProductItemList />
              </div>
            )}

            <div className="flex justify-center !my-5">
              <Pagination count={10} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
