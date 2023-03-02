import { useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { __homeOrMenuInfo } from "../../redux/modules/CodeTestSlice";
import { MenuButtonLayout, MenuWindow } from "./index";

const MenuMiddle = () => {
  const dispatch = useAppDispatch();
  const menuList = useAppSelector((state) => state.codeTest);

  useEffect(() => {
    dispatch(__homeOrMenuInfo());
  }, []);
  console.log(menuList);

  return (
    <FuncWindowLayout>
      <MenuButtonLayout />
      <MenuWindow menu={menuList} />
    </FuncWindowLayout>
  );
};

const FuncWindowLayout = styled.div`
  width: 390px;
  height: 478.5px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default MenuMiddle;
