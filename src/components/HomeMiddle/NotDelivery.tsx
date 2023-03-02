import styled from "styled-components";

import { home_takeout_menu, home_store_menu } from "../../static/index";

const NotDelivery = () => {
  
  return (
    <NotDeliveryLayout>
      <NotDeliveryButton>
        <NotDeliveryCommentLayout>
          <ButtonTitleRed>포장</ButtonTitleRed>
          <ButtonCommentGray>직접 가져갈게요!</ButtonCommentGray>
        </NotDeliveryCommentLayout>
        <TakeOutImage src={home_takeout_menu} />
      </NotDeliveryButton>
      <NotDeliveryButton>
        <NotDeliveryCommentLayout>
          <ButtonTitleRed>매장</ButtonTitleRed>
          <ButtonCommentGray>매장에서 먹고가요!</ButtonCommentGray>
        </NotDeliveryCommentLayout>
        <InStoreImage src={home_store_menu} />
      </NotDeliveryButton>
    </NotDeliveryLayout>
  );
};

const NotDeliveryLayout = styled.div`
  width: 155px;
  height: 156px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const NotDeliveryButton = styled.div`
  width: 155px;
  height: 73px;
  border-radius: 20px;
  box-shadow: 0px 0px 1px gray;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  overflow: hidden;
`;
const NotDeliveryCommentLayout = styled.div`
  width: 73px;
  height: 73px;
  margin-left: 15px;
`;
const TakeOutImage = styled.img`
  width: 45px;
  height: 53px;
  margin: 10px 10px 0 0;
`;
const InStoreImage = styled.img`
  width: 36px;
  height: 53px;
  margin: 10px 10px 0 0;
`;
const ButtonTitleRed = styled.p`
  width: 55px;
  height: 15px;
  font-size: 14px;
  color: #f95f53;
  font-family: NotoSanskr-Bold;
`;
const ButtonCommentGray = styled.p`
  width: 82px;
  font-size: 10px;
  color: #9e9e9e;
  font-family: NotoSanskr-Regular;
  word-break: keep-all;
`;
export default NotDelivery;
