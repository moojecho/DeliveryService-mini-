import { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../../redux/hooks";

import {changeToggle} from "../../redux/modules/CodeTestSlice"

const MenuButtonLayout = () => {
  const dispatch = useAppDispatch();
  const [menuToggle, setMenuToggle] = useState(true);

  const toggle = () => {
    if (menuToggle) {
      setMenuToggle(false)
      dispatch(changeToggle(false))
    } else {
      setMenuToggle(true)
      dispatch(changeToggle(true))
    }
  };

  return (
    <MenuWindowLayout>
      <BorderToplayout>
        <BorderTopColor toggle={true} menuToggle={menuToggle} />
        <BorderTopColor toggle={false} menuToggle={menuToggle} />
      </BorderToplayout>
      <MenuToggleLayout>
        <MenuToggleButton
          toggle={true}
          menuToggle={menuToggle}
          onClick={toggle}
        >
          메뉴
        </MenuToggleButton>
        <InfoToggleButton
          toggle={false}
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
const BorderTopColor = styled.div<{toggle: boolean, menuToggle: boolean}>`
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
const InfoToggleButton = styled(CenterLayout)<{toggle: boolean, menuToggle: boolean}>`
  width: 390px;
  height: 43px;
  border-bottom: ${(props) =>
    props.toggle !== props.menuToggle ? "1px solid #cecece" : null};
  color: ${(props) =>
    props.toggle === props.menuToggle ? "#f95f53" : "#9e9e9e"};
`;
const MenuToggleButton = styled(InfoToggleButton)<{toggle: boolean, menuToggle: boolean}>`
  border-right: 1px solid #cecece;
`;
export default MenuButtonLayout;
