/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/common/Header';
import NextButton from '@components/common/NextButton';
import Content from '@components/common/Content';
import ImageLabel from '@components/common/ImageLabel';
import Scroll from '@components/common/Scroll';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import { styles } from '@constants/variables';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
  white-space: pre;
`;

const Description = styled.div`
  margin: 0 0 27px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
  white-space: pre;
`;

const StyleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 10px 0;
  margin: 16px 0 0 ${margins.SIDE_SUB_MARGIN};
`;

const ImageLabelContainer = styled.div`
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  border-radius: 8px;
`;

const Test: NextPage = () => {
  const Questions = styles.map((style) => {
    return (
      <ImageLabelContainer key={uuid4()}>
        <ImageLabel
          input={{
            type: 'checkbox',
            name: style.name,
            value: style.value,
          }}
          style={{
            width: '330px',
            height: '106px',
          }}
          image={{
            src: style.src,
            alt: style.alt,
          }}
        />
      </ImageLabelContainer>
    );
  });

  return (
    <>
      <Header title="차량 성향 테스트" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <Title>차량 스타일 선택</Title>
        <Description>선호하는 차량 스타일을 선택해주세요.</Description>
        <Scroll direction="y" height="calc(100% - 113px - 10px)">
          <StyleContainer>{Questions}</StyleContainer>
        </Scroll>
      </Content>
      {/* test 결과로 보내기 */}
      <NextButton title="다음" path={'/result'} />
    </>
  );
};

export default Test;
