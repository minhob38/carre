/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import InputLabel from '@components/InputLabel';
import Header from '@components/Header';
import Content from '@components/Content';
import * as colors from '@constants/colors';
import Arrow from '@components/Arrow';
import Link from 'next/link';

const Title = styled.div`
  margin: 24px 0 34px 27px;
  font: normal 400 20px / 31px roboto;
  color: ${colors.BLACK4};
`;

const ItemText = styled.div`
  font: 'normal 400 18px / 20px roboto';
  color: ${colors.BLACK1};
`;

const TestItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
  height: 78px;
  border-radius: 8px;
  background-color: ${colors.YELLOW1};
  padding: 0 23px;
`;

const Test: NextPage = () => {
  const genderLabels: { title: string; value: string }[] = [
    { title: '여자', value: 'female' },
    { title: '남자', value: 'male' },
  ];

  return (
    <div>
      <Header title="차량 구매 성향 테스트" />
      <Content top="55px" bottom="0">
        {/* TODO: 변수로 사용자 이름 넣기 */}
        <Title>성능과 안전 두마리 토끼를 잡으려는 카레님</Title>
        <div
          css={css`
            margin: 0 0 0 20px;
          `}
        >
          <Link href="/test/1" passHref={true}>
            <TestItemContainer>
              <ItemText>테스트하러가기</ItemText>
              <Arrow
                length="7px"
                width="2px"
                color={colors.BLACK2}
                direction="right"
                calibrationX="2.5px"
              />
            </TestItemContainer>
          </Link>
        </div>
      </Content>
    </div>
  );
};

export default Test;
