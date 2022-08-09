/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Link from 'next/link';
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
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
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
  return (
    <>
      <TopNavigator />
      <Content top="105px" bottom="0">
        <Scroll direction="y" height={`calc(100%)`}>
          <Title>20대 여성들이 많이 타는차</Title>
          <Description>
            MBTI를 입력하면 나와 유사한 또래들이 타는 차를 보여드려요!
          </Description>
          <Scroll
            direction="x"
            width={`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`}
            height="190px"
          >
            <CardContainer>
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </CardContainer>
          </Scroll>
          <SubContainer>
            <TagContainer>
              <Tag># 20대</Tag>
              <Tag># 여성</Tag>
            </TagContainer>
            <MbtiButton />
          </SubContainer>
          <BannerContainer>
            <Banner type="test" />
            <Banner type="dealer" />
          </BannerContainer>
        </Scroll>
      </Content>
    </>
  );
};

export default Index;
