/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Content from '@components/Content';
import * as colors from '@constants/colors';
import Link from 'next/link';
import Banner from '@components/Banner';
import Scroll from '@components/Scroll';
import bannerAImage from '@assets/images/banner-a.svg';
import bannerBImage from '@assets/images/banner-b.svg';

const Title = styled.div`
  margin: 45px 0 0 20px;
  font: normal 600 22px / 35px roboto;
  color: ${colors.BLACK1};
  white-space: pre;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 4px 0;
  margin: 98px 0 0 30px;
`;

const Description = styled.div`
  font: normal 600 12px / 20px roboto;
  color: ${colors.BLACK2};
`;

const BannerContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px 0;
  align-items: center;
  margin: 48px 0 0 0;
`;

const Test: NextPage = () => {
  const banners = [
    {
      image: {
        src: bannerAImage,
        alt: 'banner-a',
        width: '83px',
        height: '104px',
      },
      title: `검증된 데이터를 통한 \n신뢰성있는 추천`,
      description: `구축된 데이터 베이스를 통해 \n전문 분석된 차량을 추천합니다.`,
    },
    {
      image: {
        src: bannerBImage,
        alt: 'banner-b',
        width: '104px',
        height: '104px',
      },
      title: `고객의 우선순위 및 \n디테일한 취향 반영`,
      description: `840여개 고객 유형을 통해 \n나의 우선순위와 취향을 반영합니다.`,
    },
  ];

  const Banners = banners.map((banner) => {
    return <Banner key={uuid4()} data={banner} />;
  });

  return (
    <Content top="0" bottom="72px">
      <Scroll direction="y" height="100%">
        <Title>
          {`내 성향을 분석해서 \n나에게 딱 맞는 차를 찾아주는 \n똑똑한 차량 추천 서비스`}
        </Title>
        <DescriptionContainer>
          <Description>#내 차량 구매 성향 분석</Description>
          <Description>#나에게 Fit한 차량 추천</Description>
          <Description>#내게 맞는 차량 검색</Description>
          <Description>#전문 딜러에게 간단 견적요청</Description>
        </DescriptionContainer>
        <BannerContainer>{Banners}</BannerContainer>
      </Scroll>
    </Content>
  );
};

export default Test;
