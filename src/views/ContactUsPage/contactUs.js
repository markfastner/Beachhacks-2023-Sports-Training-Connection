import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled1(props) {
  return (
    <>
      <ContactUs>Contact Us!</ContactUs>
      <LoremIpsum>
        If you have any issues with the website, contact us at
        NucleiSupport@nuclei.com.
      </LoremIpsum>
    </>
  );
}

const ContactUs = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 98px;
  margin-top: 204px;
  margin-left: 394px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  font-size: 30px;
  margin-top: 43px;
  margin-left: 150px;
`;

export default Untitled1;
