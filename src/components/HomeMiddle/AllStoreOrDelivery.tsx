import styled from "styled-components";

import { store, home_delivery_menu } from "../../static/index";

const AllStoreOrDelivery = () => {
  return (
    <FiratStoreButtonLayout>
      <AllStoreInfo>
        <StoreCommentLayout>
          <ButtonTitleWhite>모든 매장</ButtonTitleWhite>
          <ButtonCommentWhite>
            내 주변에 있는
            <br />
            모든 매장을 볼래요!
          </ButtonCommentWhite>
        </StoreCommentLayout>
        <StoreImage src={store} />
      </AllStoreInfo>
      <DeliveryButton>
        <StoreCommentLayout>
          <ButtonTitleRed>배달</ButtonTitleRed>
          <ButtonCommentGray>
            안전하고 빠르게
            <br />
            배달해주세요!
          </ButtonCommentGray>
        </StoreCommentLayout>
        <DeliveryImage src={home_delivery_menu} />
      </DeliveryButton>
    </FiratStoreButtonLayout>
  );
};
const FiratStoreButtonLayout = styled.div`
  width: 340px;
  height: 121px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const AllStoreInfo = styled.div`
  width: 155px;
  height: 120px;
  background-color: #f95f53;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  overflow: hidden;
`;
const StoreCommentLayout = styled.div`
  width: 73px;
  height: 120px;
  margin-left: 15px;
`;
const StoreImage = styled.img`
  width: 54px;
  height: 81px;
  margin-top: 40px;
`;
const DeliveryButton = styled.div`
  width: 155px;
  height: 120px;
  box-shadow: 0px 0px 1px gray;
  color: #f95f53;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: auto;
  overflow: hidden;
`;
const DeliveryImage = styled.img`
  width: 47px;
  height: 79px;
  margin: 30px 10px 0 0;
`;
const ButtonTitleWhite = styled.p`
  width: 55px;
  height: 15px;
  font-size: 14px;
  color: white;
  font-family: NotoSanskr-Bold;
`;
const ButtonCommentWhite = styled.p`
  width: 82px;
  height: 30px;
  font-size: 10px;
  color: white;
  font-family: NotoSanskr-Regular;
  word-break: keep-all;
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
export default AllStoreOrDelivery;
