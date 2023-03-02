import styled from "styled-components";

import {
  history_bottomtab,
  addpoint_bottomtab,
  search_bottomtab,
  mypage_bottomtab,
  home_bottomtab
} from "../../static/index";

const Footer = () => {
  return (
    <FooterLayout>
      <HomeButton>
        <HomeButtonImage src={home_bottomtab}/>
      </HomeButton>
      <ButtonLayout>
        <AccrualLayout>
          <DetailsButton>
            <Detailsimage src={history_bottomtab}></Detailsimage>
            적립내역
          </DetailsButton>
          <DetailsButton>
            <Detailsimage src={addpoint_bottomtab}></Detailsimage>
            적립
          </DetailsButton>
        </AccrualLayout>
        <SearchOrMyInfoLayout>
          <DetailsButton>
            <Detailsimage src={search_bottomtab}></Detailsimage>
            검색
          </DetailsButton>
          <DetailsButton>
            <Detailsimage src={mypage_bottomtab}></Detailsimage>
            MY
          </DetailsButton>
        </SearchOrMyInfoLayout>
      </ButtonLayout>
    </FooterLayout>
  );
};

const FooterLayout = styled.div`
  width: 390px;
  height: 92px;
  border-bottom: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeButton = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f95f53;
  border-radius: 50%;
  position: absolute;
  bottom: 46px;
`;
const HomeButtonImage = styled.img`
  width: 20px;
  height: 22px;
`;

const ButtonLayout = styled.div`
  width: 390px;
  height: 50px;
  display: flex;
  justify-content: space-between;
`;

const AccrualLayout = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const DetailsButton = styled.div`
  width: 40px;
  height: 40px;
  font-size: 10px;
  font-weight: 500;
  color: #cecece;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  cursor: pointer;
`;
const Detailsimage = styled.img`
  width: 30px;
  height: 30px;
  margin: auto;
  cursor: pointer;
`;

const SearchOrMyInfoLayout = styled.div`
  width: 150px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Footer;
