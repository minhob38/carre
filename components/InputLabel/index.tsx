/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const Wrapper = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
  font: normal 500 16.5px / 23px roboto;
  color: #7a7979;
`;

interface IProps {
  title: string;
  type: 'radio' | 'checkbox';
  name: string;
  id?: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const InputLabel: NextPage<IProps> = ({
  title,
  type,
  name,
  id,
  value,
  onChange,
}) => {
  return (
    <Wrapper>
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
