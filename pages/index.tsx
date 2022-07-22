/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import Home from '../components/Home';
import Button from '../components/Button';
import infoBoxAImg from '../assets/images/info-box-a.svg';
import infoBoxCImg from '../assets/images/info-box-c.svg';
import InfoBoxA from '../components/InfoBoxA';

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
  image: infoBoxAImg,
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
    <>
      <InfoBoxA data={InfoBoxDataA} />
      <InfoBoxA data={InfoBoxDataB} />
      <InfoBoxA data={InfoBoxDataC} />

      {/* <Home />
      <Button />
      <Link href="/plane" passHref={true}>
        <A>/plane 링크 📌</A>
      </Link>
      <Link href="/train">/train 링크 📌</Link> */}
    </>
  );
};

export default Index;
