/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shallowEqual } from 'react-redux';
import Image from '@components/common/Image';
import Scroll from '@components/common/Scroll';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import activeCheckImage from '@assets/images/icons/big-active-check.svg';
import inactiveCheckImage from '@assets/images/icons/big-inactive-check.svg';
import upArrowImage from '@assets/images/icons/small-black-up-arrow.svg';
import downArrowImage from '@assets/images/icons/small-black-down-arrow.svg';
import * as fonts from '@constants/fonts';
import * as colors from '@constants/colors';

interface IProps {
  input: {
    name: string;
    value: string;
  };
  title: string;
  description: string;
  category?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

interface IStyleProps {
  checked: boolean;
  width: string;
  height?: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: calc(100% - 46px - 46px);
  border-radius: 8px;
`;

const Header = styled.label`
  position: relative;
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
`;

const ImageContainer = styled.div``;

const Description = styled.div`
  width: 100%;
  font: ${fonts.SUBTITLE_T1};
  background-color: ${colors.SECONDARY_100};
  padding: 10px;
`;

const Title = styled.div`
  margin: 0 0 0 14px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
`;

const ImageTitleContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ScrollContainer = styled.div`
  max-height: 300px;
`;

const ImageLabel: React.FC<IProps> = ({
  input,
  title,
  description,
  category,
  onClick,
}) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const { name, value } = input;
  const dispatch = useTypedDispatch();
  const inputState = useTypedSelector(
    (state) => state.rootReducer.inputReducer,
    shallowEqual,
  );
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    // for (const key in inputState) {
    //   if (key !== name) continue;
    //   if (!Array.isArray(inputState[key])) continue;
    //   const hasName = inputState[key].indexOf(value) !== -1;
    //   if (hasName) {
    //     setChecked(true);
    //     continue;
    //   }
    //   setChecked(false);
    // }
  }, [inputState, name, value, category]);

  const handleChange = (ev) => {
    // if (ev.target.checked) {
    //   dispatch(actions.addCheckBoxItem(ev.target));
    //   setChecked(true);
    //   return;
    // }
    // dispatch(actions.deleteCheckBoxItem(ev.target));
    // setChecked(false);
  };

  return (
    <Wrapper>
      <Header>
        <ImageTitleContainer>
          <input
            type="checkbox"
            name={name}
            value={value}
            css={css`
              all: unset;
            `}
            onChange={handleChange}
            onClick={onClick}
            checked={checked}
          />
          <ImageContainer>
            <Image
              src={checked ? activeCheckImage : inactiveCheckImage}
              alt={checked ? 'activeCheckImage' : 'inactiveCheckImage'}
              width="30px"
            />
          </ImageContainer>
          <Title>{title}</Title>
        </ImageTitleContainer>
        <ImageContainer onClick={() => setIsDown(!isDown)}>
          <Image
            src={isDown ? upArrowImage : downArrowImage}
            // src={isDown ? downArrowImage : upArrowImage}
            alt={isDown ? 'up-arrow' : 'down-arrow'}
            // alt={isDown ? 'down-arrow' : 'up-arrow'}
            width="20px"
            height="20px"
          />
        </ImageContainer>
      </Header>
      {isDown && (
        <ScrollContainer>
          <Scroll direction="y" height="100%">
            <Description>{description}</Description>
          </Scroll>
        </ScrollContainer>
      )}
    </Wrapper>
  );
};

export default ImageLabel;
