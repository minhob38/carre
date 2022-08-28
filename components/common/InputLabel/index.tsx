/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shallowEqual } from 'react-redux';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

interface IProps {
  input: {
    title: string;
    type: 'radio' | 'checkbox';
    name: string;
    value: string;
  };
  size: 'narrow' | 'medium' | 'long' | 'drop-down';
}

interface IStyleProps extends Pick<IProps, 'size'> {
  checked: boolean;
}

const Wrapper = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IStyleProps) => {
    if (props.size === 'narrow') {
      return '80px';
    } else if (props.size === 'medium') {
      return '130px';
    } else if (props.size === 'long') {
      return '159px';
    } else if (props.size === 'drop-down') {
      return '96px';
    }
  }};
  height: 48px;
  border: ${(props: IStyleProps) =>
    props.checked ? `2px solid ${colors.PRIMARY_400}` : `none`};
  border-radius: 8px;
  background-color: ${colors.SECONDARY_REAL_WHITE};
  font: ${(props: IStyleProps) => {
    if (props.size === 'narrow') {
      return fonts.BODY_REGULAR_1;
    } else if (props.size === 'long') {
      return fonts.BODY_REGULAR_1;
    } else if (props.size === 'drop-down') {
      return fonts.LABEL_2;
    }
  }};
  color: ${colors.SECONDARY_400};
`;

const InputLabel: React.FC<IProps> = ({ input, size }) => {
  const { title, type, name, value } = input;

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
  }, [inputState, type, name, value]);

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
        dispatch(actions.setRadioBoxValue(ev.target));
        setChecked(true);
        return;
      }
    }
  };

  return (
    <Wrapper checked={checked} size={size}>
      {title}
      <input
        type={type}
        name={name}
        value={value}
        css={css`
          all: unset;
        `}
        onChange={handleChange}
        checked={checked}
      />
    </Wrapper>
  );
};

export default InputLabel;
