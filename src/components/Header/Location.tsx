import React from "react";
import styled from "styled-components";

import { address_pin,chevron_right } from "../../static/index";

const Location = () => {
  return (
    <LocationLayout>
      <RealTimeLocation>
        <PinImage src={address_pin}/>
        {`금천구 디지털로 173`}
        <ArrowImage src={chevron_right}/>
        </RealTimeLocation>
    </LocationLayout>
  );
};

const LocationLayout = styled.div`
  width: 390px;
  height: 46px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RealTimeLocation = styled.div`
  width: 132px;
  height: 14px;
  color: #9e9e9e;
  display: flex;
  justify-content: center;
  font-size: 12px;
  font-weight: normal;
`;

const PinImage = styled.img`
  width: 8px;
  height: 12px;
  margin: 3px 5px 0 0;
`;

const ArrowImage = styled.img`
width: 7px;
height: 10px;
margin: 4px 0 0 5px;
`;
export default Location;
