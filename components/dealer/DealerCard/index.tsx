/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import { css } from '@emotion/react';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';
import hyundaiCi from '@assets/images/temps/hyundai-ci.png';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { shallowEqual } from 'react-redux';
import { actions } from '@store/slices/dealerSlice';

interface IProps {
  description: string;
  chips: string[];
  src: any;
  value: string;
}

interface IStyleProps {
  checked: boolean;
}

const Wrapper = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  margin: 0 auto;
  padding: 10px;
  border: ${(props: IStyleProps) =>
    props.checked ? `2px solid ${colors.PRIMARY_400}` : `none`};
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

const INPUT_NAME = 'dealer';
const DealerCard: React.FC<IProps> = ({ description, chips, src, value }) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const Chips = chips.map((chip) => {
    return <Chip key={uuid4()}>{chip}</Chip>;
  });
  const dealerState = useTypedSelector(
    (state) => state.rootReducer.dealerReudcer,
    shallowEqual,
  );
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    for (const key in dealerState) {
      if (key !== INPUT_NAME) continue;
      if (Array.isArray(dealerState[key])) continue;
      const isName = dealerState[key] === value;
      if (isName) {
        setChecked(true);
        continue;
      }
      setChecked(false);
    }
  }, [dealerState, value]);

  const handleChange = (ev) => {
    if (ev.target.checked) {
      dispatch(actions.setRadioBoxValue(ev.target));
      setChecked(true);
      return;
    }
  };

  const handleClick = () => {
    dispatch(actions.findDealerAsync());
  };

  return (
    <Wrapper checked={checked}>
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
      <input
        type="radio"
        name={INPUT_NAME}
        value={value}
        css={css`
          all: unset;
        `}
        onChange={handleChange}
        onClick={handleClick}
        checked={checked}
      />
    </Wrapper>
  );
};

export default DealerCard;
