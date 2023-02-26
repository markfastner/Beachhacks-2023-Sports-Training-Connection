import React, { Component } from "react";
import styled, { css } from "styled-components";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import { Link } from "react-router-dom";
import {
  FaFootballBall,
  FaBasketballBall,
  FaSwimmer,
  FaVolleyballBall,
  FaRunning,
  FaMap,
} from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { TbBike } from "react-icons/tb";
import { BsGraphUp, BsGlobe } from "react-icons/bs";
import { AiOutlineWechat } from "react-icons/ai";
import "./dashboard.css";
import Navbar from "../../navbar/NavBar";

function dashboard(props) {
  return (
    <>
      <Navbar />
      <Rect1Row>
        <Rect style={{ borderRadius: "50px", color: "white" }}>
          <DashBoard>DashBoard</DashBoard>
        </Rect>
      </Rect1Row>
      <Rect2Row>
        <Rect2 style={{ borderRadius: "50px", color: "white" }}>
          <p>Categories</p>
          <IconRow>
            <Link to="/Categories">
              <button>
                <FaFootballBall />
              </button>
            </Link>
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
        <Link to="/Discover">
          <Rect4 style={{ borderRadius: "50px", color: "white" }}>
            <button>Discover</button>
            <FaMap style={{ fontSize: 80, borderRadius: "10px" }} />
          </Rect4>
        </Link>

        <Link to="/Connect">
          <Rect5 style={{ borderRadius: "50px", color: "white" }}>
            <button>Connect</button>
            <BsGlobe style={{ fontSize: 80 }} />
          </Rect5>
        </Link>
      </Rect2Row>
      <Rect3Row>
        <Link to="/Messages">
          <Rect3 style={{ borderRadius: "50px", color: "white" }}>
            <button>Messages</button>
            <AiOutlineWechat style={{ fontSize: 120 }} />
          </Rect3>
        </Link>
        <Link to="/Analytics">
          <Rect6 style={{ borderRadius: "50px", color: "white" }}>
            <p>Analytics</p>
            <BsGraphUp style={{ fontSize: 80 }} />
          </Rect6>
        </Link>
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
  display: grid;
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  font-size: 40px;
  margin-top: 5px;
  justify-content: center;
`;

const Rect2 = styled.div`
  width: 351px;
  height: 212px;
  background-color: rgba(37, 32, 32, 1);
  flex-direction: column;
  display: flex;
`;

const IconRow = styled.div`
  height: 44px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  margin-left: 41px;
  margin-right: 54px;
  font-size: 40px;
`;

const Icon5Row = styled.div`
  height: 43px;
  flex-direction: row;
  display: flex;
  margin-top: 20px;
  margin-left: 41px;
  margin-right: 118px;
  font-size: 40px;
`;

const Rect4 = styled.div`
  width: 230px;
  height: 212px;
  background-color: rgba(37, 32, 32, 1);
  margin-left: 78px;
  display grid;
  display-direction: column;
  justify-content: center;
`;

const Rect5 = styled.div`
  width: 199px;
  height: 212px;
  background-color: rgba(37, 32, 32, 1);
  margin-left: 46px;
  display grid;
  justify-content: center;
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
  background-color: rgba(37, 32, 32, 1);
  display: grid;
  justify-content: center;
`;

const Rect6 = styled.div`
  width: 475px;
  height: 263px;
  background-color: rgba(37, 32, 32, 1);
  margin-left: 78px;
  margin-top: 4px;
  display: grid;
  justify-items: center;
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
