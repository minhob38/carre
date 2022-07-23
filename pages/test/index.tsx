/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import kfx from '../../assets/images/kfx.jpeg';

const CSS = css`
  font: normal normal 16px / 30px Noto Sans CJK KR;
`;

const A = styled.a`
  all: unset;
  display: block;
  background-color: #b6b6b6;
  width: 10rem;
  height: 2rem;
  &:hover {
    background-color: #ecebeb;
    border: none;
  }
  cursor: pointer;
`;

const Plane: NextPage = () => {
  return (
    <>
      <div
        css={css`
          font: normal 700 21px / 28px roboto;
          color: #515151;
          margin: 0 0 5px 0;
        `}
      >
        나의 정보 입력
      </div>
      <div
        css={css`
          font: normal 400 14.5px / 20px roboto;
          color: rgba(65, 65, 65, 0.8);
        `}
      >
        차량 구매에 필요한 나의 정보를 입력해요
      </div>
      <div>
        <div
          css={css`
            font: normal 600 17px / 26px roboto;
            color: #515151;
          `}
        >
          출생연도
        </div>
        <select name="year">
          <option value="1970">1970</option>
          <option value="1971">1971</option>
          <option value="1972">1972</option>
          <option value="1973">1973</option>
        </select>
      </div>
      <div>
        <div
          css={css`
            margin: 0 0 12px 0;
            font: normal 600 17px / 26px roboto;
            color: #515151;
          `}
        >
          성별
        </div>
        <fieldset
          css={css`
            display: flex;
            width: 215px;
            justify-content: space-between;
          `}
        >
          <label
            css={css`
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
            `}
          >
            남자
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              css={css`
                all: unset;
              `}
              onChange={() => console.log('!!!')}
            />
          </label>
          <label
            css={css`
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
              &:checked {
                background-color: yellow;
              }
            `}
          >
            여자
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              css={css`
                all: unset;
              `}
              onChange={() => console.log('@@@')}
            />
          </label>
        </fieldset>
      </div>
      <div>용도</div>
    </>
  );
};

export default Plane;
