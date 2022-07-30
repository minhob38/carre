/** @jsxImportSource @emotion/react */

import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Header from '@components/Header';
import Content from '@components/Content';
import LinkButton from '@components/LinkButton';
import ImageLabel from '@components/ImageLabel';
import q1_1Image from '@assets/images/questions/1-1.svg';
import q1_2Image from '@assets/images/questions/1-2.svg';
import * as colors from '@constants/colors';

const Question = styled.div`
  margin: 0 0 16px 30px;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK1};
  white-space: pre;
`;

const Description = styled.div`
  margin: 2px 0 16px 0;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const QuetsionContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 12px 0;
`;

const Test: NextPage = () => {
  let i = 0;
  return (
    <>
      <Header title="차량 성향 테스트" />
      <Content top="55px" bottom="0">
        {/* <Container> */}
        <Question>
          {`다음 두 가지의 상황 중 자신에게 더 잘 맞다고 \n느껴지는 상황을 선택해주세요.`}
        </Question>
        <QuetsionContainer>
          <ImageLabel
            input={{
              type: 'checkbox',
              name: 'purpose',
              value: 'sales',
            }}
            style={{
              width: '330px',
              height: '258px',
            }}
            image={{
              src: q1_1Image,
              alt: 'question1-1',
            }}
          />

          <div onClick={() => console.log(i++)}>
            <ImageLabel
              input={{
                type: 'checkbox',
                name: 'purpose',
                value: 'sales',
              }}
              style={{
                width: '330px',
                height: '258px',
              }}
              image={{
                src: q1_2Image,
                alt: 'question1-2',
              }}
            />
          </div>
        </QuetsionContainer>
      </Content>
    </>
  );
};

export default Test;
