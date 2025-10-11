import { useState } from "react";
import { Link } from "react-router-dom";
import { Breadcrumbs, Button, Rating } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { ProductZoom } from "../../components/ProductZoom";
import QtyBox from "../../components/QtyBox";

import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import ProductsSlider from "../../components/ProductsSlider";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export const ProductDetails = () => {
  const [activeTab, setActiveTab] = useState(1);

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
          <div className="productContent w-[70%] !ml-4">
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
        </div>
      </div>

      <div className="bg-white !py-6">
        <div className="container flex items-center gap-4">
          <Button
            className={`!text-lg !border !border-[rgba(0,0,0,0.3)] ${activeTab === 1 && "!bg-primary !text-white"}`}
            onClick={() => setActiveTab(1)}
          >
            Description
          </Button>
          <Button
            className={`!text-lg !border !border-[rgba(0,0,0,0.3)] ${activeTab === 2 && "!bg-primary !text-white"}`}
            onClick={() => setActiveTab(2)}
          >
            Product Details
          </Button>
          <Button
            className={`!text-lg !border !border-[rgba(0,0,0,0.3)] ${activeTab === 3 && "!bg-primary !text-white"}`}
            onClick={() => setActiveTab(3)}
          >
            Reviews (5)
          </Button>
        </div>
        <div className="!mt-6 rounded-md container border border-[rgba(0,0,0,0.3)] !p-6">
          {activeTab === 1 && (
            <div className="">
              <p className="text-gray-400">
                The best is yet to come! Give your walls a voice with a framed
                poster. This aesthethic, optimistic poster will look great in
                your desk or in an open-space office. Painted wooden frame with
                passe-partout for more depth.
              </p>

              <h4 className="font-bold text-lg !mb-1 !mt-4">
                Lightweight Design
              </h4>
              <p className="text-gray-400">
                Designed with a super light geometric case, the Versa family
                watches are slim, casual and comfortable enough to wear all day
                and night. Switch up your look with classic, leather, metal and
                woven accessory bands. Ut elit tellus, luctus nec ullamcorper
                mattis, pulvinar dapibus leo.
              </p>
              <h4 className="font-bold text-lg !mb-1 !mt-4">
                Free Shipping and Return
              </h4>
              <p className="text-gray-400">
                We offer free shipping for products on orders above $50 and
                offer free delivery for all orders in US.
              </p>
              <h4 className="font-bold text-lg !mb-1 !mt-4">
                Money Back Guarantee
              </h4>
              <p className="text-gray-400">
                We guarantee our products and you could get back all of your
                money anytime you want in 30 days.
              </p>
              <h4 className="font-bold text-lg !mb-1 !mt-4">Online Support</h4>
              <p className="text-gray-400">
                You will get 24 hours support with this purchase product and you
                can return it within 30 days for an exchange.
              </p>
            </div>
          )}

          {activeTab === 2 && (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}

          {activeTab === 3 && (
            <div className="max-w-[40%] w-full">
              <div className="comment">
                <h3 className="font-bold text-lg">
                  Customer questions & answers
                </h3>
                <div className="flex flex-col gap-1 !my-4 border-b border-[rgba(0,0,0,0.3)]">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Rink Verma</p>
                    <Rating
                      name="size-small"
                      defaultValue={5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <p className="text-gray-400">2024-12-01</p>
                  <p className="!my-4 text-gray-600">Very nice Product!</p>
                </div>
                <div className="flex flex-col gap-1 !my-4 border-b border-[rgba(0,0,0,0.3)]">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">Rink Verma</p>
                    <Rating
                      name="size-small"
                      defaultValue={5}
                      size="small"
                      readOnly
                    />
                  </div>
                  <p className="text-gray-400">2024-12-01</p>
                  <p className="!my-4 text-gray-600">Very nice Product!</p>
                </div>
                <div className="comment-form !mt-6">
                  <h3 className="font-bold text-lg !mb-2">Add a review</h3>
                  <form className="w-full">
                    <textarea
                      type="text"
                      placeholder="Write a Review"
                      className="border border-[rgba(0,0,0,0.3)] w-full p-2 resize-none h-[100px]"
                    />
                    <Button className="!bg-primary !text-white !px-6">
                      Send
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="container !my-6">
        <h2 className="text-xl font-bold">Related Products</h2>
        <ProductsSlider items={6} />
      </div>
    </div>
  );
};
