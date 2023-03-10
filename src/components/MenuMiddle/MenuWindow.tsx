import { useState } from "react";
import styled from "styled-components";

import * as menuTypes from "../../redux/type";
import { chevron_down, home_delivery_menu } from "../../static/index";

const MenuWindow = ({ menu }: { menu: menuTypes.homeOrMenuProps }) => {
  const [menuToggle, setMenuToggle] = useState(true);
  const [topMenu, setTopMenu] = useState(1);

  const menuInfoBtnToggle = menu.menuInfoButtonToggle.toggle;
  const menuList = [menu.menu.properties.menu_group_info.properties];

  const changToggle = () => {
    if (menuToggle) {
      setMenuToggle(false);
    } else {
      setMenuToggle(true);
    }
  };

  return (
    <WindowLayout>
      {menuInfoBtnToggle ? (
        <NullInfoLayout>
          <NullInfoImage src={home_delivery_menu} />
          죄송해요.. 준비중인 서비스에요..
        </NullInfoLayout>
      ) : (
        <>
          <MenuSlideLayout>
            {menuList.map((list) => {
              return (
                <SlideMenu key={list.sort.example}>
                  <SlideMenuName
                    topMenuNum={list.sort.example}
                    topMenu={topMenu}
                  >
                    {list.name.example}
                  </SlideMenuName>
                  <SlideMenuUnderBar
                    topMenuNum={list.sort.example}
                    topMenu={topMenu}
                  />
                </SlideMenu>
              );
            })}
            <SlideMenu>
              <SlideMenuName topMenuNum={2} topMenu={topMenu}>
                {"테스트용메뉴"}
              </SlideMenuName>
              <SlideMenuUnderBar topMenuNum={2} topMenu={topMenu} />
            </SlideMenu>
          </MenuSlideLayout>

          <MenuLayout>
            {menuList.map((list) => {
              return (
                <MenuGroupLayout key={list.sort.example}>
                  <MenuTitleLayout onClick={changToggle}>
                    <MenuListTitle>{list.name.example} </MenuListTitle>
                    <MenuToggleLayout>
                      <MenuToggleArrow
                        menuToggle={menuToggle}
                        src={chevron_down}
                      />
                    </MenuToggleLayout>
                  </MenuTitleLayout>
                  {menuToggle ? (
                    <MenuListLayout>
                      <MenuInfoLayout>
                        <MenuTitle>
                          {list.menu_info.items.properties.name.example}
                        </MenuTitle>
                        <MenuInfo>
                          {list.menu_info.items.properties.description.example}
                        </MenuInfo>
                        <MenuPriceLayout>
                          {list.menu_info.items.properties.sold_out.example ? (
                            "품절 됐습니다."
                          ) : (
                            <MenuPrice>
                              {
                                list.menu_info.items.properties.price.items
                                  .properties.name.example
                              }
                              :
                              {
                                list.menu_info.items.properties.price.items
                                  .properties.price.example
                              }
                              원
                            </MenuPrice>
                          )}
                        </MenuPriceLayout>
                      </MenuInfoLayout>
                      <MenuImage
                        menuImg={list.menu_info.items.properties.img.example}
                      />
                    </MenuListLayout>
                  ) : null}
                </MenuGroupLayout>
              );
            })}
          </MenuLayout>
        </>
      )}
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
  overflow: scroll;
  overflow-x: hidden;
`;
const MenuSlideLayout = styled.div`
  width: 390px;
  height: 55px;
  display: flex;
  overflow: hidden;
  overflow: auto;
  overflow-y: hidden;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const SlideMenu = styled(CenterLayout)`
  height: 55px;
  flex-direction: column;
  margin: 0 0 0 40px;
  cursor: pointer;
`;
const SlideMenuName = styled(CenterLayout)<{
  topMenuNum: number;
  topMenu: number;
}>`
  height: 52px;
  font-size: 12px;
  font-family: NotoSanskr-Bold;
  color: ${(props) =>
    props.topMenuNum === props.topMenu ? "#3f3f3f" : "#9e9e9e"};
`;
const SlideMenuUnderBar = styled.div<{ topMenuNum: number; topMenu: number }>`
  width: 100%;
  height: 3px;
  background-color: ${(props) =>
    props.topMenuNum === props.topMenu ? "#3f3f3f" : "white"};
`;

const MenuGroupLayout = styled(CenterLayout)`
  width: 390px;
  flex-direction: column;
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
const MenuToggleArrow = styled.img<{ menuToggle: boolean }>`
  width: 13px;
  height: 11px;
  margin-bottom: 6px;
  transform: ${(props) => (props.menuToggle ? `rotate(0.5turn)` : null)};
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
const MenuImage = styled.div<{ menuImg: string }>`
  width: 81px;
  height: 81px;
  background-image: url(${(props) => props.menuImg});
  background-size: cover;
  border: 1px solid #ddd;
`;

const NullInfoLayout = styled(CenterLayout)`
  width: 390px;
  height: 435.5px;
  flex-direction: column;
`;
const NullInfoImage = styled.img`
  width: 100px;
  height: 100px;
`;
export default MenuWindow;
