import { Button } from "@mui/material";
import React, { useState } from "react";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";

export const CategoryCollapse = () => {
  const [submenuIndex, setSubmenuIndex] = useState(null);
  const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

  const openSubmenu = index => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = index => {
    if (innerSubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
  };

  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none relative">
          <Link to="/">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0, 0.8)]">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 0 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px]"
              onClick={() => openSubmenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px]"
              onClick={() => openSubmenu(0)}
            />
          )}

          {submenuIndex === 0 && (
            <ul className="submenu top-[100%] left-[0%] w-full pl-3">
              <li className="list-none relative">
                <Link to="/">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0, 0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innerSubmenuIndex === 0 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px]"
                    onClick={() => openInnerSubmenu(0)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                  />
                )}

                {innerSubmenuIndex === 0 && (
                  <ul className="inner_submenu top-[100%] left-[0%] w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="list-none relative">
          <Link to="/">
            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0, 0.8)]">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 1 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px]"
              onClick={() => openSubmenu(1)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px]"
              onClick={() => openSubmenu(1)}
            />
          )}

          {submenuIndex === 1 && (
            <ul className="submenu top-[100%] left-[0%] w-full pl-3">
              <li className="list-none relative">
                <Link to="/">
                  <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0, 0.8)]">
                    Apparel
                  </Button>
                </Link>
                {innerSubmenuIndex === 1 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px]"
                    onClick={() => openInnerSubmenu(1)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                  />
                )}

                {innerSubmenuIndex === 1 && (
                  <ul className="inner_submenu top-[100%] left-[0%] w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Smart Tablet
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Crepe T-Shirt
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Leather Watch
                      </Link>
                    </li>
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-sm"
                      >
                        Rolling Diamond
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
