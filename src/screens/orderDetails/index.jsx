import React from 'react';
import { CustomButton } from '../../styledComponents';
import OrderHeader from './orderHeader';
import OrderSummary from './orderSummary';
import OrderContents from './orderContents';

const OrderDetailsScreen = () => {
  return (
   <div>
    <OrderHeader />
    <OrderSummary />
    <OrderContents />
   </div>
  )
}

export default OrderDetailsScreen;
