import styled from "styled-components";

import {UserPointWindow,StoreInfo} from './index'

const HomeMiddle = () => {

  return (
    <FuncWindowLayout>
      <UserPointWindow/>
      <StoreInfo/>
    </FuncWindowLayout>
  );
};

const FuncWindowLayout = styled.div`
  width: 390px;
  height: 658px;
  display: flex;
  flex-direction:column;
  align-items: center;
  box-shadow: 0 1px 1px -1px gray;
`;
export default HomeMiddle;
