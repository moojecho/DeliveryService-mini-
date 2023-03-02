import styled from "styled-components";

import * as allTypes from "./type";

const LastStore = ({ lastOrder }: { lastOrder: allTypes.lastOrderType }) => {
  return (
    <LastOrderStore lastOrder={lastOrder[0].properties.img.example}>
      <ButtonTitleWhite>최근 주문 매장</ButtonTitleWhite>
      <ButtonCommentFirstWhite>
        {lastOrder[0].properties.name.example}
      </ButtonCommentFirstWhite>
      <OrderButton>주문하러가기 →</OrderButton>
      <PagenationLayout>
        <PagenationBox>
          <Pagenation />
        </PagenationBox>
      </PagenationLayout>
    </LastOrderStore>
  );
};

const LastOrderStore = styled.div<{ lastOrder: string }>`
  width: 155px;
  height: 156px;
  box-shadow: 0px 0px 1px gray;
  border-radius: 20px;
  margin: auto;
  background-image: url(${(props) => props.lastOrder});
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
`;
const ButtonTitleWhite = styled.p`
  width: 84px;
  height: 15px;
  font-size: 14px;
  color: white;
  font-family: NotoSanskr-Bold;
  margin: 20px 0px 0px 20px;
`;
const ButtonCommentFirstWhite = styled.p`
  width: 82px;
  height: 30px;
  font-size: 12px;
  color: white;
  font-family: NotoSanskr-Regular;
  word-break: keep-all;
  margin: 10px 0px 0px 20px;
`;
const OrderButton = styled.div`
  width: 80px;
  height: 12px;
  font-size: 10px;
  color: white;
  font-family: NotoSanskr-Regular;
  margin: 35px 0px 0px 20px;
  cursor: pointer;
`;
const PagenationLayout = styled.div`
  width: 154px;
  height: 15px;
  margin: 20px 0px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PagenationBox = styled.div`
  width: 30px;
  height: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Pagenation = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: white;
  margin: auto;
`;

export default LastStore;
