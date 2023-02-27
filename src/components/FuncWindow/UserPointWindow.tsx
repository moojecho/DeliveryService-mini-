import styled from "styled-components";

import {} from "./index";

const UserPointWindow = () => {
  return (
    <UserPointWindowLayout>
      <PointGradeLayout>
        <UserPointLayout>
          <UserPoint>{`사용가능한 내 포인트 39,480P 있어요!`}</UserPoint>
        </UserPointLayout>
        <UserGradeLayout></UserGradeLayout>
      </PointGradeLayout>
      <EventToggleLayout>
        <EventLayout>
            <Heart>❤</Heart>
            쌓인 포인트, 할인 받고 주문하자!
            </EventLayout>
        <ToggleLayout>
          간단히 보기 
          <ToggleBackground />
          <ToggleSwitch />
        </ToggleLayout>
      </EventToggleLayout>
    </UserPointWindowLayout>
  );
};

const UserPointWindowLayout = styled.div`
  width: 390px;
  height: 160px;
  background-color: white;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0px 0.5px gray;
`;
const PointGradeLayout = styled.div`
  display: flex;
  flex-direction: row;
`;
const UserPointLayout = styled.div`
  width: 242px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;
const UserPoint = styled.div`
  width: 197px;
  height: 80px;
  display: flex;
  align-items: center;
`;


const UserGradeLayout = styled.div`
  width: 148px;
  height: 120px;
  background-color: green;
`;



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
  margin-right: 30px;
`;
const Heart =  styled.div`
    width: 15.2px;
    height: 14px;
    font-size: 18px;
    color: #f95f53;
    margin-top: -11px;
    margin-right: 7px;
`;



const ToggleLayout = styled.div`
  width: 130px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 11px;
  color: #cecece;
  margin-right: -20px;
`;
const ToggleBackground = styled.div`
  width: 29px;
  height: 16px;
  background-color: #f5f5f5;
  border-radius: 10px;
  margin-left: 10px;
`;
const ToggleSwitch = styled.div`
  width: 17px;
  height: 17px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  z-index: 15;
  top: 26.5%;
  right: 7%;
  box-shadow: 0px 0px 4px black;
`;
export default UserPointWindow;
