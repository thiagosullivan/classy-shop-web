import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

import { LiaShippingFastSolid, LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from "react-icons/pi";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { IoChatboxOutline } from "react-icons/io5";
import { FaFacebookF, FaPinterestP, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div>
      <footer className="py-6">
        <div className="container">
          <div className="flex items-center justify-center gap-2">
            <div className="col flex items-center justify-center flex-col w-[20%]">
              <LiaShippingFastSolid className="text-5xl" />
              <h3 className="text-lg font-bold mt-3">Free Shipping</h3>
              <p className="text-xs font-medium">For all Orders Over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col w-[20%]">
              <PiKeyReturnLight className="text-5xl" />
              <h3 className="text-lg font-bold mt-3">30 Days Returns</h3>
              <p className="text-xs font-medium">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col w-[20%]">
              <BsWallet2 className="text-5xl" />
              <h3 className="text-lg font-bold mt-3">Secured Payment</h3>
              <p className="text-xs font-medium">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col w-[20%]">
              <LiaGiftSolid className="text-5xl" />
              <h3 className="text-lg font-bold mt-3">Special Gifts</h3>
              <p className="text-xs font-medium">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col w-[20%]">
              <BiSupport className="text-5xl" />
              <h3 className="text-lg font-bold mt-3">Suport 24/7</h3>
              <p className="text-xs font-medium">Contact us Anytime</p>
            </div>
          </div>
          <div className="footer flex !py-8 gap-2">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="pb-4 font-bold">Contact Us</h2>
              <p className="pb-4">
                Classyshop - Mega Super Store
                <br />
                507-Union Trade Centre
                <br />
                France
              </p>

              <Link to="mailto:someone@example.com">sales@yourcompany.com</Link>
              <span className="text-2xl font-bold block w-full mt-3 text-primary">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2 pt-4">
                <IoChatboxOutline className="text-4xl text-primary" />
                <span className="font-bold">
                  Online Chat <br />
                  Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%] border-r border-[rgba(0,0,0,0.1)]">
                <h2 className="pb-4 font-bold">Products</h2>

                <ul className="list">
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">Prices drops</Link>
                  </li>
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">New products</Link>
                  </li>
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">Best sales</Link>
                  </li>
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">Contact us</Link>
                  </li>
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">Sitemap</Link>
                  </li>
                  <li className="list-none text-sm w-full !mb-2">
                    <Link to="/">Stores</Link>
                  </li>
                </ul>
              </div>
              <div className="part2 w-[50%] flex pl-8 border-r border-[rgba(0,0,0,0.1)]">
                <div className="part2_col1">
                  <h2 className="pb-4 font-bold">Our company</h2>

                  <ul className="list">
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">Delivery</Link>
                    </li>
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">Legal Notice</Link>
                    </li>
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">Terms and conditions of use</Link>
                    </li>
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">About us</Link>
                    </li>
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">Secure payment</Link>
                    </li>
                    <li className="list-none text-sm w-full !mb-2">
                      <Link to="/">Login</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="parte3 w-[35%] flex pl-8 flex-col">
              <h2 className="text-lg font-bold mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-sm">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="!mt-5">
                <input
                  type="text"
                  className="w-full h-[35px] border outline-none px-4 rounded-sm !mb-2"
                  placeholder="Your Email Address"
                />
                <Button className="!bg-primary !text-white !px-4 !uppercase">
                  Subscribe
                </Button>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="I agree to the terms and conditions and the privacy policy"
                />
              </form>
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.2)] py-3">
        <div className="container flex items-center justify-between">
          <ul className="flex items-center gap-2">
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center"
              >
                <FaFacebookF className="" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center"
              >
                <AiOutlineYoutube className="" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center"
              >
                <FaPinterestP className="" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/"
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center"
              >
                <FaInstagram className="" />
              </Link>
            </li>
          </ul>
          <p className="text-sm">&copy; 2025 - Ecommerce Template</p>
          <img src="/payment-1.png" alt="Payments" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
