import Map from "./map";
import "./discover.css";
import styled from "styled-components";
import {
  FaFootballBall,
  FaBasketballBall,
  FaSwimmer,
  FaVolleyballBall,
  FaRunning,
} from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { TbBike } from "react-icons/tb";

const discover = () => {
  const Container = styled.div`
    display: flex;
    background-color: #212121;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    border-radius: 2px;
    min-width: 88px;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: 0px 1px 5px 0.35px #000;
    height: 36px;
    margin: 10px;
  `;

  const Caption = styled.span`
    font-family: Roboto;
    color: #fff;
    font-size: 20px;
  `;

  return (
    <section className="discover-container">
      <div className="map-container">
        <Map />
      </div>
      <div className="discover-categories">
        <Container>
          <Caption>
            <FaFootballBall />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <FaBasketballBall />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <FaSwimmer />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <FaVolleyballBall />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <FaRunning />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <IoIosFitness />
          </Caption>
        </Container>

        <Container>
          <Caption>
            <TbBike />
          </Caption>
        </Container>
      </div>
    </section>
  );
};

export default discover;
