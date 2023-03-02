import styled from "styled-components";

import {
  history_bottomtab,
  addpoint_bottomtab,
  search_bottomtab,
  mypage_bottomtab,
  home_bottomtab,
} from "../../static/index";

const MenuFooter = () => {
  return (
    <FooterLayout>
      <CartLayout>
        <CartList>장바구니 보기</CartList>
        <CartListQuantity>1</CartListQuantity>
      </CartLayout>
    </FooterLayout>
  );
};
const CenterLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterLayout = styled(CenterLayout)`
  width: 390px;
  height: 84px;
  flex-direction: column;
  background-color: #f95f53;
`;
const CartLayout = styled(CenterLayout)`
  width: 120px;
  height: 22px;
  margin-top: -40px;
`;
const CartList = styled.p`
  width: 92px;
  height: 22px;
  font-size: 16px;
  font-family: NotoSanskr-Bold;
  color: white;
  margin: auto;
`;
const CartListQuantity = styled(CenterLayout)`
  width: 19px;
  height: 19px;
  border-radius: 50%;
  text-align: center;
  background-color: white;
  font-size: 14px;
  font-family: NotoSanskr-Bold;
  color: #f95f53;
  margin: 4px 0 0 0;
`;

export default MenuFooter;
