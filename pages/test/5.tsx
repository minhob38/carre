/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Header from '@components/Header';
import Content from '@components/Content';
import LinkButton from '@components/LinkButton';
import * as colors from '@constants/colors';

const Title = styled.div`
  margin: 212px 0 0 0;
  font: normal 400 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 2px 0 16px 0;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Test: NextPage = () => {
  return (
    <>
      <Header title="차량 성향 테스트" backPath="/test/4" />
      <Content top="55px" bottom="0">
        <Container>
          <Title>차량 성향 테스트하기</Title>
          <Description>당신에게 맞는 차량을 전문 분석해 알려드려요</Description>
          <LinkButton
            path="/test/5"
            title="시작하기"
            width="275px"
            height="48px"
          />
        </Container>
      </Content>
    </>
  );
};

export default Test;
