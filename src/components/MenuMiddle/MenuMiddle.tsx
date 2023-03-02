import styled from "styled-components";

import {MenuButtonLayout,MenuWindow} from "./index"

const MenuMiddle = () => {

  return (
    <FuncWindowLayout>
        <MenuButtonLayout/>
        <MenuWindow/>
    </FuncWindowLayout>
  );
};

const FuncWindowLayout = styled.div`
  width: 390px;
  height: 478.5px;
  display: flex;
  flex-direction:column;
  align-items: center;
`;
export default MenuMiddle;
