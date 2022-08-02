/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import casperImage from '@assets/images/casper.svg';
import infoBoxBImg from '@assets/images/info-box-b.svg';
import infoBoxCImg from '@assets/images/info-box-c.svg';
import InfoBoxA from '@components/InfoBoxA';
import BottomTabNavigator from '@components/BottomTabNavigator';
import Scroll from '@components/Scroll';
import Content from '@components/Content';
import TopNavigator from '@components/TopNavigator';
import Image from '@components/Image';
import * as colors from '@constants/colors';
import Arrow from '@components/Arrow';

const Recommendation = styled.div``;

const Title = styled.div`
  font: normal 400 20px / 27px roboto;
  color: ${colors.BLACK6};
  margin: 30px 3px 0 20px;
`;

const Description = styled.div`
  font: normal 400 12px / 20px roboto;
  color: ${colors.GRAY1};
  margin: 0 0 0 20px;
`;

const ImageContainer = styled.div`
  position: relative;
`;

const CarName = styled.div`
  position: absolute;
  top: 27px;
  left: 36px;
  font: normal 400 18px / 27px roboto;
  color: ${colors.BLACK6};
  z-index: 1;
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 6px;
`;

const Tag = styled.div`
  font: normal 400 12px / 24px roboto;
  color: ${colors.BLACK2};
  border: 0.5px solid ${colors.BLACK2};
  border-radius: 10px;
  padding: 0 10px;
`;

const MbtiButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 184px;
  height: 36px;
  border-radius: 8px;
  background-color: ${colors.YELLOW3};
`;
const MbtiText = styled.div`
  margin: 0 14px 0 0;
`;

const Index: NextPage = () => {
  return (
    <div>
      <TopNavigator />
      <Content top="97px" bottom="0">
        <Recommendation>
          <Title>20대 여성들이 많이 타는차</Title>
          <Description>
            MBTI를 입력하면 나와 유사한 또래들이 타는 차를 보여드려요!
          </Description>
          <Scroll direction="x" width="100%" height="212px">
            <ImageContainer>
              <CarName>캐스퍼</CarName>
              <Image
                src={casperImage}
                alt="casper"
                width="346px"
                height="212px"
              />
            </ImageContainer>
            <ImageContainer>
              <CarName>캐스퍼</CarName>
              <Image
                src={casperImage}
                alt="casper"
                width="346px"
                height="212px"
              />
            </ImageContainer>
            <ImageContainer>
              <CarName>캐스퍼</CarName>
              <Image
                src={casperImage}
                alt="casper"
                width="346px"
                height="212px"
              />
            </ImageContainer>
          </Scroll>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              width: calc(100% - 20px - 20px);
              margin: 20px 20px 0 20px;
            `}
          >
            <TagContainer>
              <Tag># 20대</Tag>
              <Tag># 여성</Tag>
            </TagContainer>
            <MbtiButton>
              <MbtiText>나의 MBTI 적용하기</MbtiText>
              <Arrow
                length="8.5px"
                width="1.5px"
                color={colors.BLACK1}
                direction="right"
                calibrationX="1.5px"
              />
            </MbtiButton>
          </div>
        </Recommendation>
      </Content>
    </div>
  );
};

export default Index;
