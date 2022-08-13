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

const Title = styled.div`
  width: calc(100% - 22px - 22px);
  margin: 22px 0 32px 27px;
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_400};
`;

const ButtonContainer = styled.div`
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
`;

const Test: NextPage = () => {
  const genderLabels: { title: string; value: string }[] = [
    { title: '여자', value: 'female' },
    { title: '남자', value: 'male' },
  ];

  return (
    <>
      <Header type="close" title="차량 구매 성향 테스트" backPath="/test" />
      <Content top={HEADER_HEIGHT} bottom="0">
        {/* TODO: 변수로 사용자 이름 넣기 */}
        <Title>성능과 안전 두마리 토끼를 잡으려는 카레님</Title>
        <ButtonContainer>
          <TestStartButton />
        </ButtonContainer>
      </Content>
    </>
  );
};

export default Test;
