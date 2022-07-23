/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

interface IProps {
  input: {
    title: string;
    type: 'radio' | 'checkbox';
    name: string;
    id?: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
  };

  style: IStyleProps;
}

interface IStyleProps {
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
  background: #ffffff;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  font: ${(props: IStyleProps) => props.font};
  color: #7a7979;
`;
// normal 500 16.5px / 23px roboto;

const InputLabel: NextPage<IProps> = ({ input, style }) => {
  const { title, type, name, id, value, onChange } = input;
  const { width, height, font } = style;

  return (
    <Wrapper width={width} height={height} font={font}>
      {title}
      <input
        type={type}
        name={name}
        id={id}
        value={value}
        css={css`
          all: unset;
        `}
        onChange={onChange}
      />
    </Wrapper>
  );
};

export default InputLabel;
