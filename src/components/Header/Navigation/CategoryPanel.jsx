import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { IoCloseSharp } from "react-icons/io5";

import { CategoryCollapse } from "../../CategoryCollapse";

import "./style.css";

const CategoryPanel = ({ isOpenCategoryPanel, setIsOpenCategoryPanel }) => {
  const toggleDrawer = newOpen => () => {
    setIsOpenCategoryPanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation">
      <h3 className="p-3 text-lg font-medium flex items-center justify-between">
        Shop By Categories{" "}
        <IoCloseSharp
          className="cursor-pointer text-xl font-bold"
          onClick={toggleDrawer(false)}
        />
      </h3>

      <CategoryCollapse />
    </Box>
  );

  return (
    <div>
      <Drawer open={isOpenCategoryPanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
