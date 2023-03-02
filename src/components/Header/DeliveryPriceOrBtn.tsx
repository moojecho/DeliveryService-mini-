import { useState } from "react";
import styled from "styled-components";

import * as storeTypes from "../../redux/type";
import {
  menu_chevron_right,
  share,
  phone,
} from "../../static/index";

const DeliveryPriceOrBtn = ({
  StoreInfo,
}: {
  StoreInfo: storeTypes.homeOrMenuProps;
}) => {
  const [statusToggle, setStatusToggle] = useState("delivery");
  const deliveryFee =
    StoreInfo.menu.properties.store_info.properties.delivery_fee.example;
  const minPrice =
    StoreInfo.menu.properties.store_info.properties.min_price.example;

  const toggle = () => {
    if (statusToggle === "delivery") {
      setStatusToggle("takeOut");
    } else {
      setStatusToggle("delivery");
    }
  };

  return (
    <DeliveryPriceBtnLayout>
      <DeliveryLayout>
        <DeliveryPriceLayout>
          <DeliveryPrice>
            <ArrowImage src={menu_chevron_right} />
            <BoldPrice>배달비</BoldPrice> {deliveryFee.toLocaleString()}원
            <MoreBtn>자세히</MoreBtn>
          </DeliveryPrice>
          <DeliveryPrice>
            <ArrowImage src={menu_chevron_right} />
            <BoldPrice>최소주문금액</BoldPrice> {minPrice.toLocaleString()}원
          </DeliveryPrice>
        </DeliveryPriceLayout>
        <DeliveryStatus>
          <StatusButton
            onClick={toggle}
            name={"delivery"}
            statusToggle={statusToggle}
          >
            배달
          </StatusButton>
          <StatusButton
            onClick={toggle}
            name={"takeOut"}
            statusToggle={statusToggle}
          >
            포장
          </StatusButton>
        </DeliveryStatus>
      </DeliveryLayout>
      <BtnLayout>
        <ShareBtn>
          <ShareImg src={share} />
          공유하기
        </ShareBtn>
        <ShareBtn>
          <PhoneImg src={phone} />
          전화하기
        </ShareBtn>
      </BtnLayout>
    </DeliveryPriceBtnLayout>
  );
};
const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DeliveryPriceBtnLayout = styled(CenterLayout)`
  width: 320px;
  height: 110px;
  flex-direction: column;
  justify-content: space-between;
`;

const DeliveryLayout = styled(CenterLayout)`
  width: 320px;
  height: 70px;
`;
const DeliveryPriceLayout = styled.div`
  width: 320px;
  height: 40px;
  flex-direction: column;
`;
const ArrowImage = styled.img`
  width: 10px;
  height: 10px;
`;
const DeliveryPrice = styled.div`
  width: 200px;
  height: 20px;
  font-size: 12px;
  color: #3f3f3f;
`;
const BoldPrice = styled.span`
  font-weight: bold;
`;
const MoreBtn = styled(CenterLayout)`
  width: 28px;
  height: 13px;
  opacity: 0.6;
  background-color: white;
  border: 1px solid #cecece;
  margin: -12px auto auto 95px;
  margin-top: -15px;
  border-radius: 1px;
  color: #cecece;
  font-family: NotoSanskr-Regular;
  font-size: 8px;
`;

const DeliveryStatus = styled(CenterLayout)`
  width: 85px;
  height: 17px;
`;
const StatusButton = styled.button<{ name: string; statusToggle: string }>`
  width: 31px;
  height: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.name === props.statusToggle ? `#f95f53` : `#cecece`};
  border: none;
  margin: auto;
  border-radius: 3px;
  color: white;
  font-family: NotoSanskr;
  font-size: 10px;
`;

const BtnLayout = styled(CenterLayout)`
  width: 320px;
  height: 40px;
`;
const ShareBtn = styled(CenterLayout)`
  width: 160px;
  height: 40px;
  background-color: white;
  border: 1px solid #cecece;
  color: #3f3f3f;
  font-family: NotoSanskr-Bold;
  font-size: 12px;
  cursor: pointer;
`;
const ShareImg = styled.img`
  width: 18px;
  height: 18px;
  margin: 0px 2px 0 0;
`;
const PhoneImg = styled.img`
  width: 13px;
  height: 13px;
  margin: 3px 3px 0 0;
`;

export default DeliveryPriceOrBtn;
