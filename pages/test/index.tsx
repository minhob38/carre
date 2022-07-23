/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import React, { useState } from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';
import Image from 'next/image';
import styled from '@emotion/styled';
import InputLabel from '@components/InputLabel';

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

const Title = styled.div`
  margin: 0 0 5px 0;
  font: normal 700 21px / 28px roboto;
  color: #515151;
`;

const Description = styled.div`
  margin: 0 0 35px 0;
  font: normal 400 14.5px / 20px roboto;
  color: rgba(65, 65, 65, 0.8);
`;

const SubTitle = styled.div`
  margin: 0 0 12px 0;
  font: normal 600 17px / 26px roboto;
  color: #515151;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 48px;
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0px 4.43038px 9.72px rgba(96, 100, 112, 0.06);
`;

const Select = styled.select`
  all: unset;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-align: right;
  font: normal 500 15px / 21px roboto;
  color: #7a7979;
`;

const ArrowBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
`;

const YearContainer = styled.div`
  margin: 0 35px 0 0;
`;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 40px 0 0 0;
`;

const Test: NextPage = () => {
  return (
    <div
      css={css`
        margin: 0 0 0 20px;
      `}
    >
      <Title>나의 정보 입력</Title>
      <Description>차량 구매에 필요한 나의 정보를 입력해요</Description>
      <div
        css={css`
          display: flex;
        `}
      >
        <YearContainer>
          <SubTitle>출생연도</SubTitle>
          <SelectContainer>
            <Select>
              <option value="1970">1970</option>
            </Select>
            <ArrowBox>
              <div
                css={css`
                  box-sizing: border-box;
                  width: 8px;
                  height: 8px;
                  border-top: 2px solid #7a7979;
                  border-right: 2px solid #7a7979;
                  transform: rotate(135deg);
                `}
              />
            </ArrowBox>
          </SelectContainer>
        </YearContainer>
        <GenderContainer>
          <SubTitle>성별</SubTitle>
          <div
            css={css`
              display: flex;
              flex-flow: row nowrap;
              gap: 0 15px;
            `}
          >
            <InputLabel
              input={{
                title: '여자',
                type: 'radio',
                name: 'gender',
                value: 'female',
                onChange: () => console.log('여자'),
              }}
              style={{
                width: '100px',
                height: '48px',
                font: 'normal 500 16.5px / 23px roboto',
              }}
            />
            <InputLabel
              input={{
                title: '남자',
                type: 'radio',
                name: 'gender',
                value: 'male',
                onChange: () => console.log('남자'),
              }}
              style={{
                width: '100px',
                height: '48px',
                font: 'normal 500 16.5px / 23px roboto',
              }}
            />
          </div>
        </GenderContainer>
      </div>
      <PurposeContainer>
        <SubTitle>용도</SubTitle>
        <div
          css={css`
            display: flex;
            flex-flow: row wrap;
            gap: 19px 24px;
          `}
        >
          <InputLabel
            input={{
              title: '출퇴근용',
              type: 'checkbox',
              name: 'purpose',
              value: 'work-commuting',
              onChange: () => console.log('남자'),
            }}
            style={{
              width: '163px',
              height: '48px',
              font: 'normal 400 16.5px / 23px roboto',
            }}
          />
          <InputLabel
            input={{
              title: '캠핑/레저',
              type: 'checkbox',
              name: 'purpose',
              value: 'outdoor',
              onChange: () => console.log('캠핑/레저'),
            }}
            style={{
              width: '163px',
              height: '48px',
              font: 'normal 400 16.5px / 23px roboto',
            }}
          />
          <InputLabel
            input={{
              title: '등/하교',
              type: 'checkbox',
              name: 'purpose',
              value: 'school-commuting',
              onChange: () => console.log('등하교'),
            }}
            style={{
              width: '163px',
              height: '48px',
              font: 'normal 400 16.5px / 23px roboto',
            }}
          />

          <InputLabel
            input={{
              title: '영업',
              type: 'checkbox',
              name: 'purpose',
              value: 'sales',
              onChange: () => console.log('영업'),
            }}
            style={{
              width: '163px',
              height: '48px',
              font: 'normal 400 16.5px / 23px roboto',
            }}
          />
        </div>
      </PurposeContainer>
    </div>
  );
};

export default Test;
{
  /* <select name="year">
        <option value="1970">1970</option>
        <option value="1970">1970</option>
        <option value="1970">1970</option>
      </select> */
}