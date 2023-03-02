import styled from "styled-components";
import { useAppSelector } from "../../redux/hooks";
import { __homeOrMenuInfo } from "../../redux/modules/CodeTestSlice";

import * as allTypes from "./type";
import { EventToggle } from "./index";

const UserPointWindow = () => {
  const homeData: allTypes.homeInfoProps = useAppSelector((state: any) => state.codeTest);
  
  const point: number = homeData.home.properties.point.example;
  const nickName: string = homeData.home.properties.grade.properties.name.example;
  const userImg: string = homeData.home.properties.grade.properties.img.example;

  return (
    <UserPointWindowLayout>
      <PointGradeLayout>
        <UserPointLayout>
          <UserPoint>
            사용가능한 내 포인트
            <Point>{point.toLocaleString()}P</Point> 있어요!
          </UserPoint>
        </UserPointLayout>
        <UserGradeLayout>
          <Grade>
            내등급
            <br />
            <p id="UserName">{nickName}</p>
            <br />
            <Heart>♥</Heart>
          </Grade>
          <UserImageWindow>
            <UserImage src={userImg} />
          </UserImageWindow>
        </UserGradeLayout>
      </PointGradeLayout>
      <EventToggle />
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
  width: 220px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  padding-left: 15px;
`;
const UserPoint = styled.p`
  width: 197px;
  height: 80px;
  padding-top: 25px;
  color: #3f3f3f;
`;
const Point = styled.span`
  font-weight: bold;
`;
const Heart = styled.p`
  width: 7px;
  height: 7px;
  color: #f9dedd;
  margin-top: -25px;
  margin-right: 5px;
`;

const UserGradeLayout = styled.div`
  width: 138px;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grade = styled.div`
  width: 30px;
  height: 120px;
  font-size: 10px;
  font-weight: 500;
  font-style: normal;
  color: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  #UserName {
    margin-top: 0px;
    color: #9e9e9e;
  }
  margin: auto;
`;
const UserImageWindow = styled.div`
  width: 72px;
  height: 120px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
const UserImage = styled.img`
  width: 71px;
  height: 71px;
  border-radius: 50%;
  overflow: hidden;
  margin: auto;
`;

export default UserPointWindow;
