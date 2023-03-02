import styled from "styled-components";

import { heart } from "../../static/index";

const EventToggle = () => {
  return (
    <EventToggleLayout>
      <EventLayout>
        <Heart src={heart}></Heart>
        쌓인 포인트, 할인 받고 주문하자!
      </EventLayout>
      <ToggleLayout>
        간단히 보기
        <ToggleBackground />
        <ToggleSwitch />
      </ToggleLayout>
    </EventToggleLayout>
  );
};
const EventToggleLayout = styled.div`
  width: 390px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventLayout = styled.div`
  width: 213.8px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9e9e9e;
  font-size: 12px;
  font-weight: bold;
`;
const Heart = styled.img`
  width: 15.2px;
  height: 14px;
  font-size: 18px;
  color: #f95f53;
  margin-top: 2px;
  margin-right: 5px;
`;

const ToggleLayout = styled.div`
  width: 130px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #cecece;
  margin-left: 10px;
`;
const ToggleBackground = styled.div`
  width: 29px;
  height: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-left: 10px;
`;
const ToggleSwitch = styled.div`
  width: 14px;
  height: 14px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 15;
  margin: 0 0 0 45px;
  box-shadow: 0px 0px 3px black;
`;

export default EventToggle;
