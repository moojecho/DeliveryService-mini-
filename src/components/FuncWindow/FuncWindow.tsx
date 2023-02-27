import styled from "styled-components";

import {UserPointWindow,StoreInfo} from './index'

const FuncWindow = () => {

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
  border-bottom: none;
  display: flex;
  flex-direction:column;
  align-items: center;
  box-shadow: 0 0px 0.5px gray;
`;
export default FuncWindow;
