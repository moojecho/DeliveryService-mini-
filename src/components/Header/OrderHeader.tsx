import styled from "styled-components";

import {  useAppSelector } from "../../redux/hooks";
import {StatusWindow,OrderHeadInfo,DeliveryPriceOrBtn} from './index'

const OrderHeader = () => {
  const StoreInfo = useAppSelector((state) => state.codeTest);
  
  return (
    <HeaderLayout>
      <StatusWindow />
      <OrderHeadInfo StoreInfo={StoreInfo}/>
      <DeliveryPriceOrBtn StoreInfo={StoreInfo}/>
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
