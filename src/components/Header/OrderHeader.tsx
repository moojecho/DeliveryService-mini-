import styled from "styled-components";

import {StatusWindow,HeadInfo,DeliveryPriceOrBtn} from './index'

const OrderHeader = () => {
  
  return (
    <HeaderLayout>
      <StatusWindow/>
      <HeadInfo/>
      <DeliveryPriceOrBtn/>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  width: 390px;
  height: 281.5px;
  background-color: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  position: relative;
  z-index: 15;
`;
export default OrderHeader;
