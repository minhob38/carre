/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { shallowEqual } from 'react-redux';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import * as colors from '@constants/colors';

interface IProps {
  input: {
    title: string;
    type: 'radio' | 'checkbox';
    name: string;
    value: string;
  };

  style: Omit<IStyleProps, 'checked'>;
}

interface IStyleProps {
  checked: boolean;
  width: string;
  height: string;
  font: string;
}

const Wrapper = styled.label`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
  border: ${(props: IStyleProps) =>
    props.checked
      ? `2px solid ${colors.YELLOW1}`
      : `2px solid ${colors.WHITE1}`};
  border-radius: 8px;
  background-color: ${colors.WHITE1};
  font: ${(props: IStyleProps) => props.font};
  color: ${colors.BLACK2};
`;

const InputLabel: React.FC<IProps> = ({ input, style }) => {
  const { title, type, name, value } = input;
  const { width, height, font } = style;

  const dispatch = useTypedDispatch();
  const inputState = useTypedSelector(
    (state) => state.rootReducer.inputReducer,
    shallowEqual,
  );
  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'radio' && name === 'gender' && inputState.gender !== value) {
      setChecked(false);
    }
  }, [inputState.gender, name, value, type]);

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
    <Wrapper checked={checked} width={width} height={height} font={font}>
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
