/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { v4 as uuid4 } from 'uuid';
import styled from '@emotion/styled';
import Scroll from '@components/common/Scroll';
import Content from '@components/common/Content';
import TopNavigator from '@components/common/TopNavigator';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import Card from '@components/home/Card';
import Tag from '@components/home/Tag';
import MbtiButton from '@components/home/MbtiButton';
import Banner from '@components/home/Banner';
import Footer from '@components/common/Footer';
import {
  useInitialization,
  useTypedDispatch,
  useTypedSelector,
} from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import NotServiceModal from '@modals/NotServiceModal';
import rightArrowImage from '@assets/images/icons/big-gray-right-arrow.svg';
import letArrowImage from '@assets/images/icons/big-gray-left-arrow.svg';
import { useRouter } from 'next/router';
import { FOOTER_HEIGHT } from '@constants/size';

interface IStyleProps {
  isHidden: boolean;
}

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
  align-self: flex-end;
  justify-self: flex-end;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 14px;
  /* width: 100%; */
  flex: 1;
`;

const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 20px auto 40px auto;
`;

const ArrowContainer = styled.div`
  padding: 0 15px;
  visibility: ${(props: IStyleProps) => (props.isHidden ? 'hidden' : 'block')};
`;

const Margin = styled.div`
  flex: 1;
`;

const Home: NextPage = () => {
  const initializeStore = useInitialization();
  const dispatch = useTypedDispatch();
  const [carPage, setCarPage] = useState<number>(1);
  const router = useRouter();
  const isNotServiceModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isNotServiceModal,
  );

  const recommendCarInfoList = [
    {
      title: '현대 아반떼',
      src: 'https://static.carre.kr/home_main/hyundae_avante.png',
      api: 'https://api.carre.kr/api/v1/recommends/recom_main_1',
    },
    {
      title: '벤츠 C-Class',
      src: 'https://static.carre.kr/home_main/benz_c_class_ver4.png',
      api: 'https://api.carre.kr/api/v1/recommends/recom_main_2',
    },
    {
      title: 'bmw 3 Series',
      src: 'https://static.carre.kr/home_main/bmw_3_serise_ver2.png',
      api: 'https://api.carre.kr/api/v1/recommends/recom_main_3',
    },
    {
      title: '기아 레이',
      src: 'https://static.carre.kr/home_main/kia_ray_ver3.png',
      api: 'https://api.carre.kr/api/v1/recommends/recom_main_4',
    },
    {
      title: '미니 쿠퍼',
      src: 'https://static.carre.kr/home_main/mini_cooper_ver2.png',
      api: 'https://api.carre.kr/api/v1/recommends/recom_main_5',
    },
  ];
  const minCarPage = 1;
  const maxCarPage = recommendCarInfoList.length;

  const Cards = recommendCarInfoList.map((item, index) => {
    return (
      <Card
        key={uuid4()}
        title={item.title}
        src={item.src}
        onClick={() => {
          const api = item.api;
          router.push({
            pathname: '/result/1',
            query: { is_survey: false, page: index },
          });
          // dispatch(actions.getRecomAsync(api));
        }}
      />
    );
  });

  // useEffect(() => {
  //   initializeStore();
  // }, [initializeStore]);

  const handleLeftArrowClick = () => {
    if (carPage === minCarPage) return;
    setCarPage(carPage - 1);
  };

  const handleRightArrowClick = () => {
    if (carPage === maxCarPage) return;
    setCarPage(carPage + 1);
  };

  return (
    <>
      {isNotServiceModal && <NotServiceModal />}
      <TopNavigator />
      <Content top="105px" bottom={'0px'}>
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
                {/* <ArrowContainer
                isHidden={carPage === minCarPage}
                onClick={handleLeftArrowClick}
              >
                <Image
                  src={letArrowImage}
                  alt="left-arrow"
                  width="20px"
                  height="20px"
                />
              </ArrowContainer>
              <Card
                title={recommendCarInfoList[carPage - 1].title}
                src={recommendCarInfoList[carPage - 1].src}
                onClick={() => {
                  const api = recommendCarInfoList[carPage - 1].api;
                  router.push({
                    pathname: '/result/1',
                    query: { is_survey: false, page: carPage - 1 },
                  });
                  // dispatch(actions.getRecomAsync(api));
                }}
              /> */}
                {Cards}
                {/* <ArrowContainer
                isHidden={carPage === maxCarPage}
                onClick={handleRightArrowClick}
              >
                <Image
                  src={rightArrowImage}
                  alt="right-arrow"
                  width="20px"
                  height="20px"
                />
              </ArrowContainer> */}
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
          {/* <Margin />
          <Footer /> */}
        </Scroll>
      </Content>
    </>
  );
};

export default Home;
