import React from "react";
import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: 559px;
`;

const BannerImage = styled.img`
  position: absolute;
`;

const BannerBox = styled.div`
  background-color: hsla(0, 0%, 100%, 0.9);
  padding: 16px 32px;
  text-align: center;
  position: relative;
  left: 50%;
  top: 50%;
  bottom: auto;
  transform: translate(-50%, -50%);
  width: 50%;
`;

const BannerHeader = styled.h1`
  font-family: DSG-Sans-Bold, sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 8px;
`;

const BannerSubtext = styled.h2`
  font-family: Archivo;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
`;

const BannerLinks = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerLink = styled.a`
  font-family: Archivo;
  font-size: 14px;
  font-weight: 700;
  margin: 0 8px;
  padding: 8px 24px;
  border: 2px solid black;
  text-transform: uppercase;
  background-color: white;
  width: 204px;

  &:hover {
    background-color: #ededed;
  }
`;

export default function CssInJsBanner() {
  return (
    <Banner>
      <BannerImage src="https://images.dickssportinggoods.com/marketing/DSG_HomR_MarWk3_Hero_Fitness0407101659.jpg?herow=1600px" />
      <BannerBox>
        <BannerHeader>Commit To Fit</BannerHeader>
        <BannerSubtext>Check out the latest equipment and gear to achieve all your goals.</BannerSubtext>
        <BannerLinks>
          <BannerLink href="#">Fitness</BannerLink>
          <BannerLink href="#">Cardio</BannerLink>
          <BannerLink href="#">Strength</BannerLink>
        </BannerLinks>
      </BannerBox>
    </Banner>
  );
}
