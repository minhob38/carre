/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import TopNavigator from '@components/common/TopNavigator';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import Card from '@components/home/Card';
import Tag from '@components/home/Tag';
import MbtiButton from '@components/home/MbtiButton';
import Banner from '@components/home/Banner';
import casperImage from '@assets/images/casper.svg';
import cClassImage from '@assets/images/c-class.webp';
import bmw3Series from '@assets/images/bmw-3-series.png';
import kiaRay from '@assets/images/kia-ray.webp';
import miniCooper from '@assets/images/mini-cooper.png';
import { useInitialization, useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import NotServiceModal from '@modals/NotService.tsx';

const Title = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
  margin: 30px 3px 0 ${margins.SIDE_MAIN_MARGIN};
`;

const Description = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
  margin: 0 0 20px ${margins.SIDE_MAIN_MARGIN};
`;

const TagContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 6px;
`;

const BannerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 20px 0;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 20px auto;
`;

const CardContainer = styled.div`
  display: flex;
  gap: 0 14px;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 20px auto 40px auto;
`;

const Index: NextPage = () => {
  const initializeStore = useInitialization();
  const isNotServiceModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isNotServiceModal,
  );

  useEffect(() => {
    initializeStore();
  }, [initializeStore]);

  return (
    <>
      {isNotServiceModal && <NotServiceModal />}
      <TopNavigator />
      <Content top="105px" bottom="0">
        <Scroll direction="y" height="100%">
          <div>
            <Title>20대 여성들이 많이 찾는 차</Title>
            <Description>
              {IS_HIDDEN
                ? ''
                : 'MBTI를 입력하면 나와 유사한 또래들이 타는 차를 보여드려요!'}
            </Description>
            <Scroll
              direction="x"
              width={`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`}
              height="190px"
            >
              <CardContainer>
                <Card
                  title="현대 아반떼"
                  src="https://static.carre.kr/home_main/hyundae_avante.png"
                />
                <Card
                  title="벤츠 C-Class"
                  src="https://static.carre.kr/home_main/benz_c_class_ver4.png"
                />
                <Card
                  title="bmw 3 Series"
                  src="https://static.carre.kr/home_main/bmw_3_serise_ver2.png"
                />
                <Card
                  title="기아 레이"
                  src="https://static.carre.kr/home_main/kia_ray_ver3.png"
                />
                <Card
                  title="미니 쿠퍼"
                  src="https://static.carre.kr/home_main/mini_cooper_ver2.png"
                />
              </CardContainer>
            </Scroll>
            <SubContainer>
              <TagContainer>
                <Tag># 20대</Tag>
                <Tag># 여성</Tag>
              </TagContainer>
              {!IS_HIDDEN && <MbtiButton />}
            </SubContainer>
            <BannerContainer>
              <Banner type="test" />
              {!IS_HIDDEN && <Banner type="dealer" />}
            </BannerContainer>
          </div>
        </Scroll>
      </Content>
    </>
  );
};

export default Index;
