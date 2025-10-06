import { Link } from "react-router-dom";

import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";

import Navigation from "./Navigation";
import Search from "../Searcher";

// import storeLogo from "../../assets/logo.svg";
import storeLogo from "../../assets/styleshop-logo-2.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "&.MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export const Header = () => {
  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-b-[1px] border-gray-300 bg-primary">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col-1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time
              </p>
            </div>
            <div className="flex items-center justify-end col-2">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-[500] transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-[500] transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b-[1px] border-gray-300">
        <div className="container flex items-center justify-between">
          <div className="col-1 w-[25%]">
            <Link to="/">
              <img src={storeLogo} className="w-[90%]" alt="Style Shop" />
            </Link>
          </div>
          <div className="col-2 w-[45%]">
            <Search />
          </div>
          <div className="col-3 w-[30%] flex items-center pl-7">
            <ul className="flex items-center justify-end gap-3 w-full">
              <li className="list-none">
                <Link
                  className="link transition font-[500] text-sm"
                  to="/login"
                >
                  Login
                </Link>{" "}
                | &nbsp;{" "}
                <Link
                  className="link transition font-[500] text-sm"
                  to="/register"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart" placement="top">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
