import { useState, useEffect } from "react";
import styled from "styled-components";

const StatusWindow = () => {
  const [time, setTime] = useState<string>("0:00");

  useEffect(() => {
    const id = setInterval(() => {
      let timer = new Date();
      if (timer.getHours() > 12) {
        setTime(
          `${timer.getHours() - 12}:${
            timer.getMinutes() > 9
              ? timer.getMinutes()
              : "0" + timer.getMinutes()
          }`
        );
      } else {
        setTime(
          `${timer.getHours()}:${
            timer.getMinutes() > 9
              ? timer.getMinutes()
              : "0" + timer.getMinutes()
          }`
        );
      }
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <StatusWindowLayout>
      <Watch>{time}</Watch>
    </StatusWindowLayout>
  );
};

const StatusWindowLayout = styled.div`
  width: 390px;
  height: 46px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Watch = styled.div`
  width: 54px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  margin: 0 0 0 10px;
`;
export default StatusWindow;
