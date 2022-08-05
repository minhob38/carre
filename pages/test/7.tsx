/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/Header';
import NextButton from '@components/NextButton';
import Content from '@components/Content';
import ImageLabel from '@components/ImageLabel';
import * as colors from '@constants/colors';
import { styles } from '@constants/variables';

const Title = styled.div`
  margin: 20px 0 2px 20px;
  font: normal 400 20px / 32px roboto;
  color: ${colors.BLACK1};
  white-space: pre;
`;

const Description = styled.div`
  margin: 0 0 0 20px;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
  white-space: pre;
`;

const StyleContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  gap: 8px 0;
  margin: 16px 0 0 30px;
`;

const Test: NextPage = () => {
  const MAX_PAGE = 21;
  const [page, setPage] = useState<number>(0);
  const handleImageClick = async (ev) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(''), 1500);
    });
    setPage(page + 1);
  };

  const Questions = styles.map((style) => {
    return (
      <ImageLabel
        key={uuid4()}
        input={{
          type: 'checkbox',
          name: style.name,
          value: style.value,
        }}
        style={{
          width: '330px',
          height: '105px',
        }}
        image={{
          src: style.src,
          alt: style.alt,
        }}
        onClick={handleImageClick}
      />
    );
  });

  return (
    <>
      <Header title="차량 성향 테스트" backPath="/test/4" />
      <Content top="55px" bottom="72px">
        <Title>차량 스타일 선택</Title>
        <Description>선호하는 차량 스타일을 선택해주세요.</Description>
        <StyleContainer>{Questions}</StyleContainer>
      </Content>
      {/* test 결과로 보내기 */}
      <NextButton title="다음" path={'/result'} />
    </>
  );
};

export default Test;
