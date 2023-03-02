import { useState } from "react";
import styled from "styled-components";

const MenuButtonLayout = () => {
  const [menuToggle, setMenuToggle] = useState("menu");

  const toggle = () => {
    if (menuToggle === "menu") {
      setMenuToggle("info");
    } else {
      setMenuToggle("menu");
    }
  };

  return (
    <MenuWindowLayout>
      <BorderToplayout>
        <BorderTopColor toggle={"menu"} menuToggle={menuToggle} />
        <BorderTopColor toggle={"info"} menuToggle={menuToggle} />
      </BorderToplayout>
      <MenuToggleLayout>
        <MenuToggleButton
          toggle={"menu"}
          menuToggle={menuToggle}
          onClick={toggle}
        >
          메뉴
        </MenuToggleButton>
        <InfoToggleButton
          toggle={"info"}
          menuToggle={menuToggle}
          onClick={toggle}
        >
          정보
        </InfoToggleButton>
      </MenuToggleLayout>
    </MenuWindowLayout>
  );
};

const CenterLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWindowLayout = styled(CenterLayout)`
  width: 390px;
  height: 45px;
  flex-direction: column;
`;

const BorderToplayout = styled.div`
  width: 390px;
  height: 3px;
  display: flex;
`;
const BorderTopColor = styled.div<{toggle: string, menuToggle: string}>`
  width: 197px;
  height: 3px;
  background-color: ${(props) =>
    props.toggle === props.menuToggle ? "#f95f53" : "white"};
  display: flex;
  float: left;
`;
const MenuToggleLayout = styled(CenterLayout)`
  width: 390px;
  height: 43px;
`;
const InfoToggleButton = styled(CenterLayout)<{toggle: string, menuToggle: string}>`
  width: 390px;
  height: 43px;
  border-bottom: ${(props) =>
    props.toggle !== props.menuToggle ? "1px solid #cecece" : null};
  color: ${(props) =>
    props.toggle === props.menuToggle ? "#f95f53" : "#9e9e9e"};
`;
const MenuToggleButton = styled(InfoToggleButton)<{toggle: string, menuToggle: string}>`
  border-right: 1px solid #cecece;
`;
export default MenuButtonLayout;
