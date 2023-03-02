import styled from "styled-components";

import * as allTypes from "./type";
import { add, cake } from "../../static/index";

const NewStoreOrCafe = ({ newStore }: { newStore: allTypes.newStoreType }) => {
  return (
    <StoreButtonLayout>
      <NewStoreButton>
        <ButtonTitleGary>새로 생겼어요!</ButtonTitleGary>
        <ButtonCommentLayout>
          {newStore.map((list, idx) => {
            return (
              <ButtonCommentGrayLi key={idx}>
                {list.properties.name.example}
              </ButtonCommentGrayLi>
            );
          })}
        </ButtonCommentLayout>
        <MoreListButton>
          <Addimage src={add} />
          내주변 오픈매장 더보기
        </MoreListButton>
      </NewStoreButton>
      <CafeButton>
        <ButtonTitleGary>카페 추천</ButtonTitleGary>
        <ButtonCommentGray>
          밥먹었으면 디저트는 필수!
          <br />내 주변 디저트 카페
        </ButtonCommentGray>
        <CafeImage src={cake} />
      </CafeButton>
    </StoreButtonLayout>
  );
};

const StoreButtonLayout = styled.div`
  width: 340px;
  height: 156px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;
const NewStoreButton = styled.div`
  width: 155px;
  height: 156px;
  box-shadow: 0px 0px 2px gray;
  border-radius: 20px;
  margin: auto;
  overflow: hidden;
`;
const CafeButton = styled.div`
  width: 155px;
  height: 156px;
  box-shadow: 0px 0px 2px gray;
  border-radius: 20px;
  background-color: #f9f9f9;
  margin: auto;
  overflow: hidden;
`;
const ButtonTitleGary = styled.p`
  width: 86px;
  height: 17px;
  font-size: 14px;
  color: #9e9e9e;
  font-family: NotoSanskr-Bold;
  margin: 15px 0px 0px 20px;
`;
const ButtonCommentLayout = styled.div`
  width: 132px;
  height: 68px;
  display: flex;
  flex-direction: column;
  margin: 5px 0px 0px 20px;
  overflow: hidden;
`;
const ButtonCommentGrayLi = styled.li`
  width: 130px;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  color: #9e9e9e;
  font-family: NotoSanskr-Regular;
  margin-top: 5px;
  word-break: keep-all;
  ::marker {
    color: #f95f53;
  }
`;
const ButtonCommentGray = styled.p`
  width: 130px;
  font-size: 10px;
  font-weight: normal;
  font-style: normal;
  color: #9e9e9e;
  font-family: NotoSanskr-Regular;
  margin: 10px 0 0 20px;
  word-break: keep-all;
`;

const Addimage = styled.img`
  width: 10px;
  height: 10px;
  color: gray;
  margin: 2px 3px 0 -2px;
`;
const MoreListButton = styled.div`
  width: 154px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  color: #cecece;
  cursor: pointer;
`;

const CafeImage = styled.img`
  width: 80px;
  height: 65px;
  float: right;
  margin-top: 10px;
`;

export default NewStoreOrCafe;
