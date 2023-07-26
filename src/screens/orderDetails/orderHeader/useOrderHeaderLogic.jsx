import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveOrder } from "../../../redux/orderSlice";

export const useOrderHeaderLogic = () => {

  const [isLoading, setIsLoading] = React.useState(false);
  const isOrderApproved = useSelector((state) => state.orders.isOrderApproved);
  const isOrdersLoading = useSelector(
    (state) => state.orders.loadingStatus.orderDetails
  );
  
  const dispatch = useDispatch();

  const handleApproveOrder = () => {
    setIsLoading(true);
    setTimeout(() => {
      dispatch(approveOrder());
      setIsLoading(false);
    }, 1000);
  };

  return {
  isLoading,
  handleApproveOrder,
  isOrderApproved,
  isOrdersLoading
  }
}