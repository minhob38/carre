/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';
import { convertNumberToWon } from '@utils/helpers';
import ComparisonScore from '../ComparisonScore';

const Wrapper = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font: ${fonts.HEADLINE_H2};
  color: ${colors.SECONDARY_500};
`;

const ComparisonTextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100px;
`;

const ComparisonText = styled.div`
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.SECONDARY_500};
  text-align: center;
  white-space: pre;
`;

const ComparisonTextDescription = styled.div`
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Versus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
  background-color: ${colors.SECONDARY_100};
`;

const VersusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 23px 0;
`;

const CarImageContainer = styled.div`
  /* flex: 1; */
`;

const CarContainer = styled.div`
  flex: 1;
`;

const CarName = styled.div`
  text-align: center;
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.SECONDARY_500};
  white-space: pre;
`;

const ComparisonItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ScoreContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 30px 0;
`;

const Comparison: React.FC<any> = ({ first, second }) => {
  const { additionalInfo: firstAdditionalInfo } = first;
  const { additionalInfo: secondAdditionalInfo } = second;

  const {
    carImagePath: firstCarImagePath,
    carImageFileName: firstCarImageFileName,
  } = first;

  const {
    carImagePath: secondCarImagePath,
    carImageFileName: secondCarImageFileName,
  } = second;

  const firstImageSrc = firstCarImagePath + firstCarImageFileName;
  const secondImageSrc = secondCarImagePath + secondCarImageFileName;

  const isFirstFuelConstWin =
    firstAdditionalInfo.fuelCost <= secondAdditionalInfo.fuelCost;
  const isSecondFuelCostWin =
    firstAdditionalInfo.fuelCost >= secondAdditionalInfo.fuelCost;

  const isFirstIqsPointWin =
    firstAdditionalInfo.iqsPoint >= secondAdditionalInfo.iqsPoint;
  const isSecondIqsPointWin =
    firstAdditionalInfo.iqsPoint <= secondAdditionalInfo.iqsPoint;

  const isFirstNvapPointWin =
    firstAdditionalInfo.ncapPoint >= secondAdditionalInfo.ncapPoint;
  const isSecondNvapPointWin =
    firstAdditionalInfo.ncapPoint <= secondAdditionalInfo.ncapPoint;

  const isFirstConsumerPointWin =
    firstAdditionalInfo.consumerReportPoint >=
    secondAdditionalInfo.consumerReportPoint;
  const isSecondConsumerPointWin =
    firstAdditionalInfo.consumerReportPoint <=
    secondAdditionalInfo.consumerReportPoint;

  const isFirstCarTaxWin =
    firstAdditionalInfo.carTax <= secondAdditionalInfo.carTax;
  const isSecondCarTaxWin =
    firstAdditionalInfo.carTax >= secondAdditionalInfo.carTax;

  const isFirstCarPriceWin =
    firstAdditionalInfo.carTotalPrice <= secondAdditionalInfo.carTotalPrice;
  const isSecondCarPriceWin =
    firstAdditionalInfo.carTotalPrice >= secondAdditionalInfo.carTotalPrice;

  const isFirstFuelYearCostWin =
    firstAdditionalInfo.fuelYearCost <= secondAdditionalInfo.fuelYearCost;
  const isSecondFuelYearCostWin =
    firstAdditionalInfo.fuelYearCost >= secondAdditionalInfo.fuelYearCost;

  return (
    <Wrapper>
      <Title>1,2순위 차량비교</Title>
      <VersusContainer>
        <CarContainer>
          <CarImageContainer>
            <Image src={firstImageSrc} alt={'first'} width="100%" />
          </CarImageContainer>
          <CarName>{`${first.brandName} \n${first.carModelName} `}</CarName>
        </CarContainer>
        <Versus>vs</Versus>
        <CarContainer>
          <CarImageContainer>
            <Image src={secondImageSrc} alt={'second'} width="100%" />
          </CarImageContainer>
          <CarName>{`${second.brandName} \n${second.carModelName} `}</CarName>
        </CarContainer>
      </VersusContainer>
      <ScoreContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstFuelConstWin}
            text={convertNumberToWon(firstAdditionalInfo.fuelCost)}
          />
          <ComparisonTextContainer>
            <ComparisonText>유류비</ComparisonText>
            <ComparisonTextDescription>{'서울-부산'}</ComparisonTextDescription>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondFuelCostWin}
            text={convertNumberToWon(secondAdditionalInfo.fuelCost)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstIqsPointWin}
            number={Math.min(firstAdditionalInfo.iqsPoint, 5)}
          />
          <ComparisonTextContainer>
            <ComparisonText>{`신차품질 \n조사`}</ComparisonText>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondIqsPointWin}
            number={Math.min(secondAdditionalInfo.iqsPoint, 5)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstNvapPointWin}
            number={Math.min(firstAdditionalInfo.ncapPoint, 5)}
          />
          <ComparisonTextContainer>
            <ComparisonText>{`안전도 \n평가 NCAP`}</ComparisonText>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondNvapPointWin}
            number={Math.min(secondAdditionalInfo.ncapPoint, 5)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstConsumerPointWin}
            number={Math.min(firstAdditionalInfo.consumerReportPoint, 5)}
          />
          <ComparisonTextContainer>
            <ComparisonText>{`구매자 \n만족지수`}</ComparisonText>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondConsumerPointWin}
            number={Math.min(secondAdditionalInfo.consumerReportPoint, 5)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstCarTaxWin}
            text={convertNumberToWon(firstAdditionalInfo.carTax)}
          />
          <ComparisonTextContainer>
            <ComparisonText>자동차세</ComparisonText>
            <ComparisonTextDescription>만원/년</ComparisonTextDescription>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondCarTaxWin}
            text={convertNumberToWon(secondAdditionalInfo.carTax)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstCarPriceWin}
            text={convertNumberToWon(firstAdditionalInfo.carTotalPrice)}
          />
          <ComparisonTextContainer>
            <ComparisonText>차량가격</ComparisonText>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondCarPriceWin}
            text={convertNumberToWon(secondAdditionalInfo.carTotalPrice)}
          />
        </ComparisonItemContainer>
        <ComparisonItemContainer>
          <ComparisonScore
            isWin={isFirstFuelYearCostWin}
            text={convertNumberToWon(firstAdditionalInfo.fuelYearCost)}
          />
          <ComparisonTextContainer>
            <ComparisonText>연간유류비</ComparisonText>
            <ComparisonTextDescription>만원/년</ComparisonTextDescription>
          </ComparisonTextContainer>
          <ComparisonScore
            isWin={isSecondFuelYearCostWin}
            text={convertNumberToWon(secondAdditionalInfo.fuelYearCost)}
          />
        </ComparisonItemContainer>
      </ScoreContainer>
    </Wrapper>
  );
};

export default Comparison;

// carTax
// :
// 290000
// carTotalPrice
// :
// 31330000
// consumerReportPoint
// :
// 8
// fuelCost
// :
// 102551
// fuelYearCost
// :
// 1160000
// iqsPoint
// :
// 127
// ncapPoint
// :
// 4
