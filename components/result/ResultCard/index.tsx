/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Link from 'next/link';
import { v4 as uuid4 } from 'uuid';
import Image from '@components/common/Image';
import Chip from '@components/result/SmallChip';
import infoImage from '@assets/images/icons/info.svg';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import rightArrorImage from '@assets/images/icons/small-black-right-arrow.svg';
import { useTypedSelector } from '@hooks/useStore';
import { IS_HIDDEN } from '@constants/variables';
import { insertCommaToNumber } from '@utils/helpers';

const Wrapper = styled.div`
  flex-shrink: 0;
  width: 324px;
  margin: 0 12px 0 0;
  padding: 16px 20px 21px 20px;
  border-radius: 8px;
  background-color: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

const RankContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 10px 0;
`;

const Rank = styled.div`
  margin: 0 10px 0 0;
  font: ${fonts.TITLE_T2};
  color: ${colors.PRIMARY_500};
`;

const CarName = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 10px 0;
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 8px 0 0 0;
`;

const Detail = styled.div`
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.SECONDARY_400};
`;

const TermContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Term = styled.div`
  margin: 0 0 0 12px;
  padding: 1px 0 0 0;
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_300};
`;

const TrimContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 18px 0 0 0;
`;

const TrimTitle = styled.div`
  display: flex;
  align-items: center;
  width: 43px;
  height: 32px; // Chip 높이와 같아야 함
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.SECONDARY_400};
  flex-shrink: 0;
`;

const Trim = styled.div`
  display: flex;
  flex: 1;
  flex-flow: row wrap;
  align-items: center;
  gap: 8px 8px;
`;

const OptionContainer = styled(TrimContainer)``;

const OptionTitle = styled(TrimTitle)``;

const Option = styled(Trim)``;

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 10px 0 0 0;
`;

const PriceTitle = styled.div`
  margin: 0 16px 0 0;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const Price = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const ResultCard: React.FC<any> = ({ data }) => {
  const {
    rankingInfoText,
    brandName,
    carModelName,
    carImagePath,
    carImageFileName,
    carTotalPrice,
    trimList: trims,
  } = data;

  const imageSrc = carImagePath + carImageFileName;
  const rank = rankingInfoText.slice(0, -2);

  const TrimChips = trims.map((trim) => {
    const { trimName, recommend } = trim;
    return (
      <Chip
        key={uuid4()}
        type={recommend ? 'yes' : 'no'}
        title={trimName}
        maxWidth="100px"
      />
    );
  });

  const options = trims.find((trim) => trim.recommend).optionList;

  const OptionsChips = options.map((option) => {
    const { optionName, recommend } = option;
    return (
      <Chip
        key={uuid4()}
        type={recommend ? 'yes' : 'no'}
        title={optionName}
        maxWidth="100px"
      />
    );
  });

  return (
    <>
      <Wrapper>
        <RankContainer>
          <Rank>{rankingInfoText}</Rank>
          <CarName>{`${brandName} ${carModelName}`}</CarName>
        </RankContainer>
        <Description>
          {IS_HIDDEN
            ? ''
            : '지프 그랜드 체로키는 성능이 어쭈구 좋고 안전은 또 이렇게 막 이렇게 좋은 대표 차량입니다.'}
        </Description>
        <Image src={imageSrc} alt={carModelName} width="271px" />
        {!IS_HIDDEN && (
          <DetailContainer>
            <Link href={`/result/detail/${rank}`} passHref={true}>
              <Detail>차량 상세보기</Detail>
            </Link>
            <Image src={rightArrorImage} alt="right-arrow" width="20px" />
          </DetailContainer>
        )}
        {!IS_HIDDEN && (
          <TermContainer>
            <Image src={infoImage} alt="info" width="12px" />
            <Term>차량 용어 바로 알아보기</Term>
          </TermContainer>
        )}
        <TrimContainer>
          <TrimTitle>트림</TrimTitle>
          <Trim>{TrimChips}</Trim>
        </TrimContainer>
        <OptionContainer>
          <OptionTitle>옵션</OptionTitle>
          <Option>
            {OptionsChips.length === 0 ? (
              <Chip key={uuid4()} type="no" title="N/A" maxWidth="100px" />
            ) : (
              OptionsChips
            )}
          </Option>
        </OptionContainer>
        <PriceContainer>
          <PriceTitle>총 차량 가격</PriceTitle>
          <Price>{`${insertCommaToNumber(carTotalPrice)} 원`}</Price>
        </PriceContainer>
      </Wrapper>
    </>
  );
};

export default ResultCard;
