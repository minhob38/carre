/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import infoBoxAImg from '@assets/images/info-box-a.svg';
import infoBoxBImg from '@assets/images/info-box-b.svg';
import infoBoxCImg from '@assets/images/info-box-c.svg';
import InfoBoxA from '@components/InfoBoxA';
import BottomTabNavigator from '@components/BottomTabNavigator';
import Scroll from '@components/Scroll';
import Content from '@components/Content';
import TopNavigator from '@components/TopNavigator';

const A = styled.a`
  all: unset;
  display: block;
  background-color: #b6b6b6;
  width: 10rem;
  height: 2rem;
  &:hover {
    background-color: #ecebeb;
    border: none;
  }
  cursor: pointer;
`;

const InfoBoxDataA = {
  image: infoBoxAImg,
  title: `검증된 데이터를 통한 \n신뢰성 있는 추천`,
  description: `구축된 데이터 베이스를 통해 \n전문 분석된 차량을 추천합니다.`,
};

const InfoBoxDataB = {
  image: infoBoxBImg,
  title: `고객의 우선순위 및 \n디테일한 취향 반영`,
  description: `840여개 고객 유형을 통해 \n나의 우선순위와 취향을 반영합니다.`,
};

const InfoBoxDataC = {
  image: infoBoxCImg,
  title: `다양한 브랜드를 \n한 눈에 비교`,
  description: `26개의 다양한 브랜드를 \n한 눈에 비교하고, \n분석 데이터를 통해 나에게 \n꼭 맞는 차량을 찾을 수 있어요.`,
};

const Index: NextPage = () => {
  return (
    <div>
      <TopNavigator />
      <Content top="97px" bottom="0">
        <div>
          <div>20대 여성들이 많이 타는차</div>
          <div>MBTI를 입력하면 나와 유사한 또래들이 타는 차를 보여드려요!</div>
          <Scroll direction="x">
            <Image src={checkImage} alt="check" width="18px" height="18px" />
          </Scroll>
        </div>
      </Content>
    </div>
  );
};

export default Index;
