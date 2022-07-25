/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import InputLabel from '@components/InputLabel';
import NextButton from '@components/NextButton';
import Canvas from '@components/Canvas';
import Header from '@components/Header';
import Arrow from '@components/Arrow';
import ProgressBar from '@components/ProgressBar';
import * as colors from '@constants/colors';

const Title = styled.div`
  margin: 30px 0 2px 0;
  font: normal 700 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 30px 0;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const SubTitle = styled.div`
  margin: 0 0 12px 0;
  font: normal 400 16px / 27px roboto;
  color: ${colors.BLACK2};
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 48px;
  border-radius: 8px;
  background: ${colors.WHITE1};
  border: 2px solid ${colors.WHITE1};
`;

const Select = styled.select`
  all: unset;
  flex: 1;
  text-align: center;
  font: normal 400 12px / 26px roboto;
  color: ${colors.BLACK2};
`;

const YearContainer = styled.div`
  margin: 0 42px 0 10px;
`;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 40px 0 0 10px;
`;

const Test: NextPage = () => {
  return (
    <>
      <Header title="나의 정보 입력" />
      <Canvas>
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
            </SelectContainer>
          </YearContainer>
          <GenderContainer>
            <SubTitle>성별</SubTitle>
            <div
              css={css`
                display: flex;
                flex-flow: row nowrap;
                gap: 0 33px;
              `}
            >
              <InputLabel
                input={{
                  title: '여자',
                  type: 'radio',
                  name: 'gender',
                  value: 'female',
                }}
                style={{
                  width: '75px',
                  height: '48px',
                  font: 'normal 400 12px / 26px roboto',
                }}
              />
              <InputLabel
                input={{
                  title: '남자',
                  type: 'radio',
                  name: 'gender',
                  value: 'male',
                }}
                style={{
                  width: '75px',
                  height: '48px',
                  font: 'normal 400 12px / 26px roboto',
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
              gap: 19px 12px;
            `}
          >
            <InputLabel
              input={{
                title: '출퇴근용',
                type: 'checkbox',
                name: 'purpose',
                value: 'work-commuting',
              }}
              style={{
                width: '159px',
                height: '48px',
                font: 'normal 400 12px / 26px roboto',
              }}
            />
            <InputLabel
              input={{
                title: '캠핑/레저',
                type: 'checkbox',
                name: 'purpose',
                value: 'outdoor',
              }}
              style={{
                width: '159px',
                height: '48px',
                font: 'normal 400 12px / 26px roboto',
              }}
            />
            <InputLabel
              input={{
                title: '등/하교',
                type: 'checkbox',
                name: 'purpose',
                value: 'school-commuting',
              }}
              style={{
                width: '159px',
                height: '48px',
                font: 'normal 400 12px / 26px roboto',
              }}
            />
            <InputLabel
              input={{
                title: '영업',
                type: 'checkbox',
                name: 'purpose',
                value: 'sales',
              }}
              style={{
                width: '159px',
                height: '48px',
                font: 'normal 400 12px / 26px roboto',
              }}
            />
          </div>
        </PurposeContainer>
      </Canvas>
      <ProgressBar stage={2} />
      <Link href={'/page/2'} passHref={true}>
        <NextButton />
      </Link>
    </>
  );
};

export default Test;
