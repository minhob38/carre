/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shallowEqual } from 'react-redux';
import Image from '@components/common/Image';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import activeCheckImage from '@assets/images/icons/big-active-check.svg';
import inactiveCheckImage from '@assets/images/icons/big-inactive-check.svg';
import * as colors from '@constants/colors';

interface IProps {
  input: {
    type: 'radio' | 'checkbox';
    name: string;
    value: string;
  };
  style: Omit<IStyleProps, 'checked'>;
  image: {
    src: any;
    alt: string;
  };
  category?: string;
  onClick?: React.MouseEventHandler<HTMLInputElement>;
}

interface IStyleProps {
  checked: boolean;
  width: string;
  height?: string;
}

const Wrapper = styled.label`
  position: relative;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IStyleProps) => props.width};
  /* height: ${(props: IStyleProps) => props.height}; */
  border: ${(props: IStyleProps) =>
    props.checked ? `2px solid ${colors.PRIMARY_400}` : `none`};
  border-radius: 8px;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  overflow: hidden;
`;

const ImageContainer = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const ImageLabel: React.FC<IProps> = ({
  input,
  style,
  image,
  category,
  onClick,
}) => {
  const { type, name, value } = input;
  const { width, height } = style;
  const { src, alt } = image;
  const dispatch = useTypedDispatch();
  const inputState = useTypedSelector(
    (state) => state.rootReducer.inputReducer,
    shallowEqual,
  );
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'checkbox') {
      for (const key in inputState) {
        if (key !== name) continue;
        if (!Array.isArray(inputState[key])) continue;
        const hasName = inputState[key].indexOf(value) !== -1;
        if (hasName) {
          setChecked(true);
          continue;
        }
        setChecked(false);
      }
    }

    if (type === 'radio') {
      for (const key in inputState) {
        /* category되어 있는 input 정리 */
        if (category) {
          /* 현재 input의 category가 아니면 continue */
          if (key !== category) continue;
          const isName = inputState[key][name] === value;
          if (isName) {
            setChecked(true);
            continue;
          }
          setChecked(false);
          continue;
        }

        /* 현재 input의 관련 정보가 아니면 continue */
        if (key !== name) continue;
        if (Array.isArray(inputState[key])) continue;

        const isName = inputState[key] === value;
        if (isName) {
          setChecked(true);
          continue;
        }
        setChecked(false);
      }
    }
  }, [inputState, name, type, value, category]);

  const handleChange = (ev) => {
    if (type === 'checkbox') {
      if (ev.target.checked) {
        dispatch(actions.addCheckBoxItem(ev.target));
        setChecked(true);
        return;
      }
      dispatch(actions.deleteCheckBoxItem(ev.target));
      setChecked(false);
    }

    if (type === 'radio') {
      if (ev.target.checked) {
        if (category) {
          dispatch(
            actions.setCategoryRadioBoxValue({
              eventTarget: ev.target,
              category,
            }),
          );
        } else {
          dispatch(actions.setRadioBoxValue(ev.target));
        }
        return setChecked(true);
      }
      return setChecked(true);
    }
  };

  return (
    <Wrapper checked={checked} width={width}>
      <Image src={src} alt={alt} width={width} height={height} />
      <input
        type={type}
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
    </Wrapper>
  );
};

export default ImageLabel;
