/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import TestStartButton from '@components/home/TestStartButton';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';
import { IS_HIDDEN } from '@constants/variables';

const Title = styled.div`
  width: calc(100% - 22px - 22px);
  margin: 22px 0 32px 27px;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_400};
`;

const ButtonContainer = styled.div`
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto 0 auto;
`;

const Test: NextPage = () => {
  return (
    <>
      <Header type="back" title="차량 구매 성향 테스트" backPath="/" />
      <Content top={HEADER_HEIGHT} bottom="0">
        {/* TODO: 변수로 사용자 이름 넣기 */}
        <Title>
          {IS_HIDDEN ? '' : '성능과 안전 두마리 토끼를 잡으려는 카레님'}
        </Title>
        <ButtonContainer>
          <TestStartButton />
        </ButtonContainer>
      </Content>
    </>
  );
};

export default Test;
