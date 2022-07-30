/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Header from '@components/Header';
import Content from '@components/Content';
import ImageLabel from '@components/ImageLabel';
import * as colors from '@constants/colors';
import { questions } from '@constants/variables';
import { css } from '@emotion/react';

const Description = styled.div`
  margin: 0 0 16px 30px;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK1};
  white-space: pre;
`;

const QuetsionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 12px 0;
`;

const Test: NextPage = () => {
  const [page, setPage] = useState<number>(0);
  const handleImageClick = async (ev) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => resolve(''), 1500);
    });
    setPage(page + 1);
  };

  const Questions = questions[page].map((question) => {
    return (
      <ImageLabel
        key={uuid4()}
        input={{
          type: 'radio',
          name: question.name,
          value: question.value,
        }}
        style={{
          width: '330px',
          height: '258px',
        }}
        image={{
          src: question.src,
          alt: question.alt,
        }}
        onClick={handleImageClick}
      />
    );
  });

  return (
    <>
      <Header title="차량 성향 테스트" backPath="/test/4" />
      <Content top="55px" bottom="0">
        {/* <Container> */}
        <Description>
          {`다음 두 가지의 상황 중 자신에게 더 잘 맞다고 \n느껴지는 상황을 선택해주세요.`}
        </Description>
        <QuetsionContainer>{Questions}</QuetsionContainer>
      </Content>
    </>
  );
};

export default Test;
