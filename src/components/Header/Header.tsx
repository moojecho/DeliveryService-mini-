import styled from "styled-components";

import {StatusWindow,Location} from './index'

const Header = () => {

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
  border-bottom: none;
  display: flex;
  flex-direction:column;
  align-items: center;
  box-shadow: 0 0px 0.5px gray;
`;
export default Header;
