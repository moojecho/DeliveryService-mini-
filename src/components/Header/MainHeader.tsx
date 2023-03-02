import { useEffect } from "react";
import {useAppSelector} from "../../redux/hooks";
import styled from "styled-components";

import {StatusWindow,Location} from './index'
import {__homeOrMenuInfo} from "../../redux/modules/CodeTestSlice";

const MainHeader = () => {

  return (
    <HeaderLayout>
      <StatusWindow/>
      <Location/>
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  width: 390px;
  height: 94px;
  background-color: white;
  display: flex;
  flex-direction:column;
  align-items: center;
  position: relative;
  z-index: 15;
  box-shadow: 0 1px 1px -1px gray;
`;
export default MainHeader;
