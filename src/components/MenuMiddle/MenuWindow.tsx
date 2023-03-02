import styled from "styled-components";

import { chevron_down } from "../../static/index";

const MenuWindow = () => {
  return (
    <WindowLayout>
      <MenuSlideLayout />
      <MenuLayout>
        <MenuTitleLayout>
          <MenuListTitle>세트메뉴 </MenuListTitle>
          <MenuToggleLayout>
            <MenuToggleArrow src={chevron_down} />
          </MenuToggleLayout>
        </MenuTitleLayout>
        <MenuListLayout>
          <MenuInfoLayout>
            <MenuTitle>에라모르겠다 SET</MenuTitle>
            <MenuInfo>
              피자만 먹긴 아쉽고.. 다 땡길때 에라모르겠다~ 다 시켜자!
            </MenuInfo>
            <MenuPriceLayout>
                <MenuPrice>R:28,500원</MenuPrice>
                <MenuPrice>R:28,500원</MenuPrice>
            </MenuPriceLayout>
          </MenuInfoLayout>
          <MenuImage />
        </MenuListLayout>
        
      </MenuLayout>
    </WindowLayout>
  );
};
const CenterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const WindowLayout = styled(CenterLayout)`
  width: 390px;
  height: 435.5px;
  flex-direction: column;
  overflow: hidden;
`;
const MenuLayout = styled.div`
  width: 390px;
  height: 380.5px;
  display: flex;
  flex-direction: column;
`;
const MenuSlideLayout = styled(CenterLayout)`
  width: 390px;
  height: 55px;
`;

const MenuTitleLayout = styled(CenterLayout)`
  width: 390px;
  height: 50px;
  justify-content: space-between;
  background-color: #f6f6f6;
`;
const MenuListTitle = styled.p`
  width: 313px;
  height: 14px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: NotoSanskr-Bold;
  color: #3f3f3f;
  margin-left: 35px;
`;
const MenuToggleLayout = styled.div`
  width: 47px;
  height: 14px;
`;
const MenuToggleArrow = styled.img`
  width: 13px;
  height: 11px;
  margin-bottom: 6px;
  transform: rotate(0.5turn);
`;

const MenuListLayout = styled(CenterLayout)`
  width: 390px;
  height: 133.5px;
  box-shadow: 0px 0px 1px 0.5px #cecece;
`;
const MenuInfoLayout = styled(CenterLayout)`
  width: 238px;
  height: 81px;
  flex-direction: column;
`;
const MenuTitle = styled.div`
  width: 235px;
  height: 14px;
  font-size: 14px;
  font-family: NotoSanskr-Bold;
  color: #3f3f3f;
`;
const MenuInfo = styled(MenuTitle)`
  font-size: 10px;
  font-family: NotoSanskr;
  color: #9e9e9e;
  margin-top: 6px;
  overflow: hidden;
`;
const MenuPriceLayout = styled(CenterLayout)`
  width: 229px;
  height: 45px;
  flex-direction: column;
  font-size: 12px;
  color: #3f3f3f;
`;
const MenuPrice = styled(MenuTitle)`
  font-size: 12px;
  font-family: NotoSanskr;
`;
const MenuImage = styled.img`
  width: 81px;
  height: 81px;
  background-color: green;
`;
export default MenuWindow;
