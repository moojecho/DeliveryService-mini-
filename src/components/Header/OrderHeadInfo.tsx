import { useNavigate } from "react-router";
import styled from "styled-components";

import * as storeTypes from "../../redux/type";
import { home, menu, point_chevron_right } from "../../static/index";

const OrderHeadInfo = ({StoreInfo}:{StoreInfo:storeTypes.homeOrMenuProps}) => {
  const navigate = useNavigate();

  const storeName = StoreInfo.menu.properties.store_info.properties.name.example;
  const storePoint = StoreInfo.menu.properties.store_info.properties.point.example;

  return (
    <HeadInfoLayout>
      <TopButtonLayout>
        <HomeOrMenuButton name={home} onClick={()=>navigate('/')} />
        <HomeOrMenuButton name={menu} />
      </TopButtonLayout>
      <NameOrPointLayout>
        <StoreName>{storeName}</StoreName>
        <UserPoint>
          보유포인트 <Point>{storePoint.toLocaleString()}P</Point>  
          <ArrowImage src={point_chevron_right}/>
        </UserPoint>
      </NameOrPointLayout>
    </HeadInfoLayout>
  );
};
const CenterLayout = styled.div`
  display: center;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const HeadInfoLayout = styled.div`
  width: 320px;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 1px 1px -1px gray;
`;

const TopButtonLayout = styled.div`
  width: 320px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const HomeOrMenuButton = styled.div<{ name: string }>`
  width: 19px;
  height: 20px;
  background-image: url(${(props) => props.name});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const NameOrPointLayout = styled(TopButtonLayout)`
  height: 80px;
  flex-direction: column;
  justify-content: center;
`;
const StoreName = styled(TopButtonLayout)`
  height: 21px;
  justify-content: center;
  font-size: 20px;
  font-family: NotoSanskr-Bold;
`;
const UserPoint = styled(CenterLayout)`
  width: 150px;
  height: 20px;
  font-size: 12px;
 margin-top: 10px;
  color: #f95f53;
`;
const Point = styled.span`
  display: inline-block;
  color: #f95f53;
  font-weight: bold;
`;
const ArrowImage = styled.img`
  width: 13px;
  height: 13px;
  margin: 0 0 -2px 3px;
`;
export default OrderHeadInfo;
