import { useEffect} from "react";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {__homeOrMenuInfo} from "../../redux/modules/CodeTestSlice";
import * as allTypes from "./type";

import {
  NotDelivery,
  AllStoreOrDelivery,
  LastStore,
  NewStoreOrCafe,
} from "./index";

const StoreInfo = () => {
  const dispatch = useAppDispatch();

  const homeData = useAppSelector((state:any)=> state.codeTest)
  const lastOrder:allTypes.lastOrderType = [homeData.home.properties.last_store];
  const newStore:allTypes.newStoreType = [homeData.home.properties.new_store_list.items];

  console.log(homeData);

  useEffect(()=>{
    dispatch(__homeOrMenuInfo());
  },[])
  
  return (
    <StoreInfoLayout>
      <AllStoreOrDelivery />
      <StoreButtonLayout>
        <NotDelivery />
        <LastStore lastOrder={lastOrder} />
      </StoreButtonLayout>
      <NewStoreOrCafe newStore={newStore} />
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
  padding-bottom: 30px;
`;

const StoreButtonLayout = styled.div`
  width: 340px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
export default StoreInfo;
