/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import NextButton from '@components/common/NextButton';
import Banner from '@components/landing/Banner';
import Footer from '@components/common/Footer';
import { useInitialization, useTypedDispatch } from '@hooks/useStore';
import { SIDE_MARGIN } from '@constants/variables';
import { useRouter } from 'next/router';
import { NEXT_BUTTON_HEIGHT } from '@constants/size';

import landingImage from '@assets/images/backgrounds/landing.svg';
import dataBannerImage from '@assets/images/banners/data-banner.svg';
import typeBannerImage from '@assets/images/banners/type-banner.svg';

const Title = styled.div`
  font: normal 600 22px / 35px Pretendard Variable;
  color: ${colors.SECONDARY_500};
  margin: 45px 0 0 ${margins.SIDE_SUB_MARGIN};
  white-space: pre;
`;

const TagContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 4px 0;
  margin: 98px 0 48px ${margins.SIDE_SUB_MARGIN};
`;

const Tag = styled.div`
  font: normal 600 12px / 20px Pretendard Variable;
  color: ${colors.BLACK2};
`;

const BannerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px;
  width: calc(100% - ${SIDE_MARGIN}px - ${SIDE_MARGIN}px);
  margin: 0 auto 80px auto;
`;

const Margin = styled.div`
  flex: 1;
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 97px;
  right: 0;
  z-index: -1;
`;

const Index: NextPage = () => {
  const initializeStore = useInitialization();
  useEffect(() => {
    initializeStore();
  }, [initializeStore]);

  return (
    <>
      <Content top="0px" bottom={NEXT_BUTTON_HEIGHT}>
        <Scroll direction="y" height="100%">
          <ImageContainer>
            <Image src={landingImage} alt="landing" width="213px" />
          </ImageContainer>
          <Title>
            {`내 성향을 분석해서 \n나에게 딱 맞는 차를 찾아주는 \n똑똑한 차량 추천 서비스`}
          </Title>
          <TagContainer>
            <Tag>#내 차량 구매 성향 분석</Tag>
            <Tag>#나에게 Fit한 차량 추천</Tag>
            <Tag>#내게 맞는 차량 검색</Tag>
            <Tag>#전문 딜러에게 간단 견적요청</Tag>
          </TagContainer>
          <BannerContainer>
            <Banner
              image={{
                src: dataBannerImage,
                alt: 'data-banner',
                width: '83px',
              }}
              title={`검증된 데이터를 통한 \n신뢰성있는 추천`}
              description={`구축된 데이터 베이스를 통해 \n전문 분석된 차량을 추천합니다.`}
            />
            <Banner
              image={{
                src: typeBannerImage,
                alt: 'type-banner',
                width: '104px',
              }}
              title={`고객의 우선순위 및 \n디테일한 취향 반영`}
              description={`840여개 고객 유형을 통해 \n나의 우선순위와 취향을 \n반영합니다.`}
            />
          </BannerContainer>
          {/* <Margin /> */}
          <Footer />
        </Scroll>
        <NextButton title="시작하기" path="/home" isActive={true} />
      </Content>
    </>
  );
};

export default Index;
