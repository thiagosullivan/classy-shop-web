import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { BiX } from "react-icons/bi";
import { ProductZoom } from "../ProductZoom";
import { ProductDetailsComp } from "../ProductDetails";
import { useModal } from "../../hooks/use-modal";

export const DialogProductDetails = () => {
  const { openProductDetailsModal, CloseProductDetailsModalFunction } =
    useModal();

  return (
    <div className="!w-[80%]">
      <Dialog
        open={openProductDetailsModal}
        onClose={CloseProductDetailsModalFunction}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex items-center justify-between">
          <DialogTitle id="alert-dialog-title">
            <p>Product Details:</p>
          </DialogTitle>
          <DialogActions>
            <Button
              className="!w-[30px] !h-[30px]"
              onClick={CloseProductDetailsModalFunction}
            >
              <BiX className="text-3xl" />
            </Button>
          </DialogActions>
        </div>
        <DialogContent>
          <div className="flex">
            <div className="w-[300px]">
              <ProductZoom />
            </div>
            <ProductDetailsComp />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
