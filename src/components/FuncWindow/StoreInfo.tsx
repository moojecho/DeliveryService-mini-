import styled from "styled-components";

const StoreInfo = () => {
  return (
    <StoreInfoLayout>
      <StoreButtonLayout>
        <AllStoreInfo />
        <DeliveryButton />
      </StoreButtonLayout>
      <StoreButtonLayout>
        <NotDeliveryLayout>
          <NotDeliveryButton />
          <NotDeliveryButton />
        </NotDeliveryLayout>
        <LastOrderStore />
      </StoreButtonLayout>
      <StoreButtonLayout>
        <AllStoreInfo />
      </StoreButtonLayout>
    </StoreInfoLayout>
  );
};

const StoreInfoLayout = styled.div`
  width: 390px;
  height: 498px;
  background-color: white;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0px 0.5px gray;
`;

const StoreButtonLayout = styled.div`
  width: 340px;
  height: 165px;
  border: 1px solid blue;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const AllStoreInfo = styled.div`
  width: 155px;
  height: 120px;
  background-color: #f95f53;
  border-radius: 25px;
  margin: auto;
`;
const DeliveryButton = styled.div`
  width: 155px;
  height: 120px;
  box-shadow: 0px 0px 2px gray;
  color: #f95f53;
  border-radius: 25px;
  margin: auto;
`;

const LastOrderStore = styled.div`
  width: 155px;
  height: 156px;
  box-shadow: 0px 0px 2px gray;
  border-radius: 25px;
  margin: auto;
`;

const NotDeliveryLayout = styled.div`
  width: 155px;
  height: 156px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const NotDeliveryButton = styled.div`
  width: 155px;
  height: 73px;
  border-radius: 25px;
  box-shadow: 0px 0px 2px gray;
  margin: auto;
`;

export default StoreInfo;
