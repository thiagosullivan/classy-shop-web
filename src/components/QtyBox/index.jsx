import React, { useState } from "react";

const QtyBox = () => {
  const [qtyVal, setQtyVal] = useState(0);

  const plusQty = () => {
    setQtyVal(qtyVal + 1);
  };

  const minusQty = () => {
    if (qtyVal === 0) {
      setQtyVal(0);
    } else {
      setQtyVal(qtyVal - 1);
    }
  };

  return (
    <div className="qtyBox">
      <div className="relative">
        <input
          type="number"
          className="qty-btn w-full h-[50px] p-2 focus:outline-none border border-[rgba(0,0,0,0.2) rounded-md]"
          value={qtyVal}
        />
        <div className="flex flex-col absolute top-0 right-0">
          <button
            className="border-1 border-[rgba(0,0,0,0.2) !h-[25px] !w-[25px]"
            onClick={() => plusQty()}
          >
            +
          </button>
          <button
            className="border-1 border-[rgba(0,0,0,0.2) !h-[25px] !w-[25px]"
            onClick={() => minusQty()}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default QtyBox;
