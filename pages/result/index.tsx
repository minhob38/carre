/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Header from '@components/Header';
import Content from '@components/Content';
import * as colors from '@constants/colors';
import Arrow from '@components/Arrow';
import Link from 'next/link';

const Title = styled.div`
  margin: 39px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 30px / 39px roboto;
  color: ${colors.WHITE1};
`;

const SubTitle = styled.div`
  margin: 2px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 24px / 39px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 2px auto 32px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 42px - 42px);
  font: normal 400 16px / 28px roboto;
  color: ${colors.BLACK5};
`;

const NextButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 80px;
  margin: auto;
  border-radius: 8px;
  background-color: ${colors.BLACK1};
  font: normal 400 20px / 32px roboto;
  color: ${colors.WHITE1};
`;

const Result: NextPage = () => {
  return (
    <>
      <Header title="나의 취향 결과" backPath="/test" />
      <Content top="55px" bottom="0" backgroudColor={colors.YELLOW3}>
        {/* TODO: 변수로 사용자 이름 넣기 */}
        <Title>성능과 안전 두마리</Title>
        <SubTitle>토끼를 잡으려는 카레님</SubTitle>
        <Description>
          당신은 안전과 편의성을 중시하며 실속을 챙기는 합리적인 실속파입니다.
        </Description>
        <Link href="/result" passHref={true}>
          <NextButton>내 취향의 차량 보기</NextButton>
        </Link>
      </Content>
    </>
  );
};

export default Result;
