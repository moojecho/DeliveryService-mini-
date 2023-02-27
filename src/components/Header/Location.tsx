import styled from "styled-components";

const Location = () => {
  return (
    <LocationLayout>
      <RealTimeLocation>{`금천구 디지털로 173  >`}</RealTimeLocation>
    </LocationLayout>
  );
};

const LocationLayout = styled.div`
  width: 390px;
  height: 46px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RealTimeLocation = styled.div`
  width: 132px;
  height: 14px;
  color: #9e9e9e;
  display: flex;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
`;
export default Location;
