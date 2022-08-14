/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import DropDown from '@components/result/DropDown';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { attractions } from '@constants/variables';

const Wrapper = styled.div``;

const Title = styled.div`
  margin: 24px 0 0 ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.HEADLINE_H2};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const More = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_300};
`;

const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2px 0 20px ${margins.SIDE_MAIN_MARGIN};
  padding: 0 22px 0 0;
`;

const InformationTitle = styled.div`
  margin: 0 0 8px 0;
  font: ${fonts.BODY_EMPHASIS_1};
  color: ${colors.PRIMARY_500};
`;

const InformationDescription = styled.div`
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
`;

const DropDownContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  gap: 8px 0;
  align-items: center;
`;

const InfomationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-self: center;
  width: 100%;
  margin: 0 0 16px 0;
  padding: 0 20px;
`;

const Attractions: React.FC = () => {
  const Attractions = attractions.map((attraction) => {
    return (
      <DropDown title={attraction.value} key={uuid4()}>
        <InfomationContainer>
          <InformationTitle>{attraction.title}</InformationTitle>
          <InformationDescription>
            {attraction.description}
          </InformationDescription>
        </InfomationContainer>
      </DropDown>
    );
  });

  return (
    <Wrapper>
      <Title>이 차량의 매력</Title>
      <DescriptionContainer>
        <Description>가치별 차량 정보를 알 수 있어요</Description>
        <More>{`더보기 >`}</More>
      </DescriptionContainer>
      <DropDownContainer>{Attractions}</DropDownContainer>
    </Wrapper>
  );
};

export default Attractions;
