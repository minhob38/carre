/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';
import upArrowImage from '@assets/images/icons/small-black-up-arrow.svg';
import downArrowImage from '@assets/images/icons/small-black-down-arrow.svg';

import dealer1Image from '@assets/images/temps/dealer-1.png';
import hyundaiCi from '@assets/images/temps/hyundai-ci.png';

interface IProps {
  description: string;
  chips: string[];
  src: any;
}

interface IStyleProps {
  isDown: boolean;
}

// const Wrapper = styled.div`
//   display: flex;
//   flex-flow: column nowrap;
//   justify-content: center;
//   align-items: center;
//   width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
//   border-radius: 8px;
//   background-color: ${(props: IStyleProps) =>
//     props.isDown ? colors.SECONDARY_100 : colors.SECONDARY_REAL_WHITE};
//   box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   width: calc(100% - 20px - 20px);
//   height: 70px;
//   margin: auto;
//   border-bottom: ${(props: IStyleProps) =>
//     props.isDown ? `solid 1px ${colors.SECONDARY_200}` : 'none'};
// `;

// const Title = styled.div`
//   margin: 0 0 0 16px;
//   font: ${fonts.TITLE_T2};
//   color: ${colors.SECONDARY_400};
// `;

// const ItemContainer = styled.div`
//   display: ${(props: IStyleProps) => (props.isDown ? 'grid' : 'none')};
//   grid-template-columns: repeat(3, 1fr);
//   justify-content: start;
//   align-items: center;
//   justify-items: center;
//   row-gap: 8px;
//   width: 100%;
//   padding: 14px 20px;
// `;

// const Container = styled.div`
//   display: flex;
// `;

// const ImageContainer = styled.div`
//   display: flex;
// `;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const ImageContainer = styled.div`
  margin: 0 26px 0 0;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 8px 0;
`;

const Description = styled.div`
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const ChipContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;
`;

const Chip = styled.div`
  font: ${fonts.BUTTON_3};
  color: ${colors.SECONDARY_400};
  background-color: ${colors.PRIMARY_350};
  padding: 5.5px 12px;
  border-radius: 4px;
`;

const DealerCard: React.FC<IProps> = ({ description, chips, src }) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const Chips = chips.map((chip) => {
    return <Chip key={uuid4()}>{chip}</Chip>;
  });

  return (
    <Wrapper>
      <ImageContainer>
        <Image src={src} alt={'dealer'} width="74px" />
      </ImageContainer>
      <div>
        <DescriptionContainer>
          <Description>{description}</Description>
          <Image src={hyundaiCi} alt={'company'} width="49px" />
        </DescriptionContainer>
        <ChipContainer>{Chips}</ChipContainer>
      </div>
    </Wrapper>
  );
};

export default DealerCard;
