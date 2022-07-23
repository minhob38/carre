/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import { shallowEqual } from 'react-redux';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80px;
  border-radius: 20px 20px 0px 0px;
  font: 'normal 400 15.5px / 20px roboto';
  color: rgba(255, 255, 255, 0.84);
  background-color: #1536ff;
  opacity: 0.8;
  box-shadow: 0px 4.43038px 17.7215px rgba(96, 100, 112, 0.07);
`;

const NextButton: React.FC = () => {
  return <Wrapper>다음</Wrapper>;
};

export default NextButton;
