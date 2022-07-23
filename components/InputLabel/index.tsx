/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import { shallowEqual } from 'react-redux';

interface IProps {
  input: {
    title: string;
    type: 'radio' | 'checkbox';
    name: string;
    id?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props: IStyleProps) => props.width};
  height: ${(props: IStyleProps) => props.height};
  border-radius: 20px;
  border: ${(props: IStyleProps) =>
    props.checked ? 'solid 2px rgba(122, 93, 232, 1)' : 'none'};
  border-color: 'red';
  background: '#ffffff';
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  font: ${(props: IStyleProps) => props.font};
  color: ${(props: IStyleProps) =>
    props.checked ? 'rgba(122, 93, 232, 1)' : '#7a7979'};
`;

const InputLabel: NextPage<IProps> = ({ input, style }) => {
  const { title, type, name, id, value, onChange } = input;
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

  return (
    <Wrapper checked={checked} width={width} height={height} font={font}>
      {title}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        css={css`
          all: unset;
        `}
        onChange={(ev) => {
          dispatch(actions.changeInput(ev.target));
          setChecked(ev.target.checked);
        }}
        checked={checked}
      />
    </Wrapper>
  );
};

export default InputLabel;
