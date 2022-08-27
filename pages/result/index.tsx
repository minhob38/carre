/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import Link from 'next/link';
import styled from '@emotion/styled';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import Scroll from '@components/common/Scroll';
import ScoreCard from '@components/result/ScoreCard';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT } from '@constants/size';
import { useTypedSelector } from '@hooks/useStore';

const Title = styled.div`
  margin: 22px 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const SubTitle = styled.div`
  margin: 4px 0 20px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Description = styled.div`
  margin: 40px auto 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 52px - 52px);
  text-align: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
  white-space: pre;
`;

const NextButton = styled.div`
  position: fixed;
  left: 50%;
  bottom: 78px;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 70px;
  border-radius: 8px;
  background-color: ${colors.SECONDARY_REAL_BLACK};
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_WHITE};
`;

const BUTTON_POSTION = '78px';
const BUTTON_HEIGHT = '70px';

const Result: NextPage = () => {
  const tendency = useTypedSelector((state) => {
    return state.rootReducer.resultReducer.tendency;
  });

  if (!tendency) {
    return <div>loading...</div>;
  }

  const { userTendencySentence } = tendency;

  return (
    <>
      <Header title="나의 취향 결과" type="close" closePath="/" />
      <Content
        top={HEADER_HEIGHT}
        bottom={'0'}
        // bottom={`(${BUTTON_HEIGHT} + ${BUTTON_POSTION})px`}
        backgroudColor={colors.PRIMARY_400}
      >
        <Scroll
          direction="y"
          height={`calc(100% - ${BUTTON_HEIGHT} - ${BUTTON_POSTION} - 15px)`}
        >
          {/* TODO: 변수로 사용자 이름 넣기 */}
          <Title>성능과 안전</Title>
          <SubTitle>두마리 토끼를 잡으려는 당신!</SubTitle>
          <ScoreCard type="static" />
          <Description>{userTendencySentence}</Description>
        </Scroll>
        <Link href="/result/1" passHref={true}>
          <NextButton>내 취향의 차량 보기</NextButton>
        </Link>
      </Content>
    </>
  );
};

export default Result;

// carFactor: {
// factorBaseAge: 3
// factorBaseCarSentiment: 2
// factorBaseDesign: 3
// factorBaseEconomics: 0
// factorBaseNewTechnology: 4
// factorBasePerformance: 6
// factorBaseReliability: 5
// factorBaseSafety: 1
// }
// carUsagePurpose: "SCHOOL"
// drivenDistanceInYear: 10000
// gender: "FEMALE"
// passengerCount: 1
// userBudgetMax: 80000000
// userBudgetMin: 40000000
// userId: 123
// userTendencySentence: "잘 달리면서 잔고장도 적은\n 자동차가 어울리는 당신은 욕심쟁이"
