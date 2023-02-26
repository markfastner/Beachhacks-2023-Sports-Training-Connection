import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import {
  FaFootballBall,
  FaBasketballBall,
  FaSwimmer,
  FaVolleyballBall,
  FaRunning,
} from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { TbBike } from "react-icons/tb";
import "./dashboard.css";

function dashboard(props) {
  return (
    <>
      <Rect1Row>
        <Rect>
          <DashBoard>DashBoard</DashBoard>
        </Rect>
      </Rect1Row>
      <Rect2Row>
        <Rect2>
          <IconRow>
            <FaFootballBall />
            <IoIosFitness style={{ marginLeft: 38 }} />
            <FaBasketballBall style={{ marginLeft: 38 }} />
            <FaSwimmer style={{ marginLeft: 38 }} />
          </IconRow>
          <Icon5Row>
            <FaVolleyballBall />
            <TbBike style={{ marginLeft: 38 }} />
            <FaRunning style={{ marginLeft: 38 }} />
          </Icon5Row>
        </Rect2>
        <Rect4>
          <p> Discover </p>
        </Rect4>
        <Rect5>
          <p> Connect </p>
        </Rect5>
      </Rect2Row>
      <Rect3Row>
        <Rect3>
          <p>Recent Messages</p>
        </Rect3>
        <Rect6>
          <p>Analytics</p>
        </Rect6>
      </Rect3Row>
    </>
  );
}
const Rect1Row = styled.div`
  height: 212px;
  flex-direction: row;
  display: flex;
  margin-top: 52px;
  margin-left: 234px;
  margin-right: 228px;
  justify-content: center;
`;
const Rect = styled.div`
  width: 461px;
  height: 76px;
  background-color: rgba(37, 32, 32, 1);
  flex-direction: column;
  display: flex;
  margin-top: 80px;
  align-self: center;
`;

const DashBoard = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  margin-top: 14px;
  margin-left: 132px;
`;

const Rect2 = styled.div`
  width: 351px;
  height: 212px;
  background-color: #e6e6e6;
  flex-direction: column;
  display: flex;
`;

const IconRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 46px;
  margin-left: 41px;
  margin-right: 54px;
  font-size: 40px;
`;

const Icon5Row = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  margin-top: 41px;
  margin-left: 41px;
  margin-right: 118px;
  font-size: 40px;
`;

const Rect4 = styled.div`
  width: 230px;
  height: 212px;
  background-color: #e6e6e6;
  margin-left: 78px;
`;

const Rect5 = styled.div`
  width: 199px;
  height: 212px;
  background-color: #e6e6e6;
  margin-left: 46px;
`;

const Rect2Row = styled.div`
  height: 212px;
  flex-direction: row;
  display: flex;
  margin-top: 52px;
  margin-left: 234px;
  margin-right: 228px;
  justify-content: center;
`;

const Rect3 = styled.div`
  width: 351px;
  height: 263px;
  background-color: #e6e6e6;
`;

const Rect6 = styled.div`
  width: 475px;
  height: 256px;
  background-color: #e6e6e6;
  margin-left: 78px;
  margin-top: 4px;
`;

const Rect3Row = styled.div`
  height: 263px;
  flex-direction: row;
  display: flex;
  margin-top: 37px;
  margin-left: 234px;
  margin-right: 228px;
  justify-content: center;
}
`;

export default dashboard;
