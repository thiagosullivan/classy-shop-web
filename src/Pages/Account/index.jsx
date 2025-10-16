import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button, Rating, TextField } from "@mui/material";

import { FaRegUser } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";
import { IoCloseSharp } from "react-icons/io5";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <div sx={{ p: 3 }}>{children}</div>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export const AccountPage = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="container bg-white p-5 !my-8 rounded-md !w-[60%]">
      <h1 className="font-bold text-lg !mb-4">My Account</h1>
      <div className="flex gap-6">
        <div className="w-[200px] flex flex-col items-center border border-gray-300 p-4">
          <div className="!mb-4">
            <img
              src="https://media.istockphoto.com/id/1181396841/photo/trendy-african-man.jpg?s=612x612&w=0&k=20&c=89F1KJHsttzyiuaJ5M0Rd4tLgiX7ooYDoPw7oNYZ5UI="
              className="w-[150px] h-[150px] rounded-full overflow-hidden object-cover"
            />
          </div>
          <div
            sx={{ borderBottom: 1, borderColor: "divider" }}
            className="w-full"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              className="tabAccount"
            >
              <Tab label="My Profile" {...a11yProps(0)} />
              <Tab label="Favorites" {...a11yProps(1)} />
              <Tab label="My Orders" {...a11yProps(2)} />
              <Button>Logout</Button>
            </Tabs>
          </div>
        </div>
        <div className="w-[80%]">
          <CustomTabPanel value={value} index={0}>
            <div>
              <h3 className="font-medium !mb-4">My Profile</h3>
              <form className="flex flex-col gap-3">
                <div className="flex gap-x-3">
                  <TextField
                    className="w-[50%]"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                  />
                  <TextField
                    className="w-[50%]"
                    label="Email"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="flex gap-x-3">
                  <TextField
                    className="w-[50%]"
                    label="Phone Number"
                    variant="outlined"
                    size="small"
                  />
                </div>
                <div className="flex gap-3">
                  <Button className="!bg-primary w-[100px] !text-white">
                    Save
                  </Button>
                  <Button className="!border !border-primary w-[100px] !text-primary">
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div className="">
              <h3 className="font-medium !mb-4">Favorites</h3>
              <p className="mt-0 !mb-4">
                There are <span className="font-bold text-primary">4</span>{" "}
                products in your list
              </p>
              <div className="flex justify-between w-full gap-6">
                {/* ITEMS */}
                <div className="flex flex-col gap-y-4 leftPart w-full">
                  <div className="border border-gray-300 rounded-md p-2 bg-white">
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
                  <div className="border border-gray-300 rounded-md p-2 bg-white">
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
                  <div className="border border-gray-300 rounded-md p-2 bg-white">
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
                  <div className="border border-gray-300 rounded-md p-2 bg-white">
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
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <div>
              <h3 className="font-medium !mb-4">My Orders</h3>
              <div class="relative overflow-x-auto w-[85%]">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-3 py-3">
                        Order ID
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Payment ID
                      </th>
                      <th scope="col" class="px-3 py-3">
                        User ID
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Name
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Total Amount
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Phone Number
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Address
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Email
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Order Status
                      </th>
                      <th scope="col" class="px-3 py-3">
                        Date
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        class="px-3 py-2 font-medium text-gray-900"
                      >
                        1234
                      </th>
                      <td class="px-3 py-2">7894</td>
                      <td class="px-3 py-2">159753</td>
                      <td class="px-3 py-2">Rajesh Sharma</td>
                      <td class="px-3 py-2">R$ 1.000,00</td>
                      <td class="px-3 py-2">(43) 98989-8989</td>
                      <td class="px-3 py-2">Rua 1, 111, Centro</td>
                      <td class="px-3 py-2">rajeshsharma@email.com</td>
                      <td class="px-3 py-2">Pending</td>
                      <td class="px-3 py-2">16/10/2025</td>
                    </tr>
                    <tr class="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        class="px-3 py-2 font-medium text-gray-900"
                      >
                        1234
                      </th>
                      <td class="px-3 py-2">7894</td>
                      <td class="px-3 py-2">159753</td>
                      <td class="px-3 py-2">Rajesh Sharma</td>
                      <td class="px-3 py-2">R$ 1.000,00</td>
                      <td class="px-3 py-2">(43) 98989-8989</td>
                      <td class="px-3 py-2">Rua 1, 111, Centro</td>
                      <td class="px-3 py-2">rajeshsharma@email.com</td>
                      <td class="px-3 py-2">Pending</td>
                      <td class="px-3 py-2">16/10/2025</td>
                    </tr>
                    <tr class="bg-white border-b  border-gray-200">
                      <th
                        scope="row"
                        class="px-3 py-2 font-medium text-gray-900"
                      >
                        1234
                      </th>
                      <td class="px-3 py-2">7894</td>
                      <td class="px-3 py-2">159753</td>
                      <td class="px-3 py-2">Rajesh Sharma</td>
                      <td class="px-3 py-2">R$ 1.000,00</td>
                      <td class="px-3 py-2">(43) 98989-8989</td>
                      <td class="px-3 py-2">Rua 1, 111, Centro</td>
                      <td class="px-3 py-2">rajeshsharma@email.com</td>
                      <td class="px-3 py-2">Pending</td>
                      <td class="px-3 py-2">16/10/2025</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CustomTabPanel>
        </div>
      </div>
    </div>
  );
};
