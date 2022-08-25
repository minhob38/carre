/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import InputLabel from '@components/common/InputLabel';
import NextButton from '@components/common/NextButton';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import ProgressBar from '@components/test/ProgressBar';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import {
  MIN_YEAR,
  MAX_YEAR,
  DEFAULT_YEAR,
  MIN_PERSON,
  MAX_PERSON,
  DEFAULT_PERSON,
  MIN_DISTANCE_UNIT,
  MAX_DISTANCE_UNIT,
  DEFAULT_DISTANCE,
  UNIT_DISTANCE,
} from '@constants/variables';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 32px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T1};
  color: ${colors.SECONDARY_300};
`;

const SubTitle = styled.div`
  margin: 0 0 12px 0px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_400};
`;

const SelectContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 48px;
  border-radius: 8px;
  background: ${colors.SECONDARY_REAL_WHITE};
`;

const Select = styled.select`
  all: unset;
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.SECONDARY_400};
`;

const YearContainer = styled.div`
  margin: 0 42px 0 ${margins.SIDE_SUB_MARGIN};
`;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 40px 0 0 ${margins.SIDE_SUB_MARGIN};
`;

const PersonContainer = styled.div`
  margin: 0 44px 0 0;
`;

const DistanceContainer = styled.div``;

const Test: NextPage = () => {
  const genderLabels: { title: string; value: string }[] = [
    { title: '여자', value: 'female' },
    { title: '남자', value: 'male' },
  ];

  const purposeLabels: { title: string; value: string }[] = [
    { title: '출퇴근용', value: 'work-commuting' },
    { title: '등/하교', value: 'school-commuting' },
    { title: '캠핑/레저', value: 'outdoor' },
    { title: '영업', value: 'sales' },
  ];

  const GenderLabels = genderLabels.map((label) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: label.title,
          type: 'radio',
          name: 'gender',
          value: label.value,
        }}
        size="narrow"
      />
    );
  });

  const PurposeLabels = purposeLabels.map((label) => {
    return (
      <InputLabel
        key={uuid4()}
        input={{
          title: label.title,
          type: 'checkbox',
          name: 'purpose',
          value: label.value,
        }}
        size="long"
      />
    );
  });

  const years: number[] = [];
  for (let i = MIN_YEAR; i < MAX_YEAR; i++) {
    years.push(i);
  }

  const persons: number[] = [];
  for (let i = MIN_PERSON; i < MAX_PERSON; i++) {
    persons.push(i);
  }

  const distances: number[] = [];
  for (let i = MIN_DISTANCE_UNIT; i < MAX_DISTANCE_UNIT; i++) {
    distances.push(i * UNIT_DISTANCE);
  }

  const YearOptions = years.map((year) => {
    return (
      <option key={uuid4()} value={year}>
        {year}
      </option>
    );
  });

  const PersonOptions = persons.map((person) => {
    return (
      <option key={uuid4()} value={person}>
        {person}
      </option>
    );
  });

  const DistanceOptions = distances.map((distance) => {
    return (
      <option key={uuid4()} value={distance}>
        {distance}
      </option>
    );
  });

  return (
    <>
      <Header title="나의 정보 입력" type="close" closePath="/" />
      <Content top={HEADER_HEIGHT} bottom={NEXT_BUTTON_HEIGHT}>
        <Title>나의 정보 입력</Title>
        <Description>차량 구매에 필요한 나의 정보를 입력해요.</Description>
        <div
          css={css`
            display: flex;
          `}
        >
          <YearContainer>
            <SubTitle>출생연도</SubTitle>
            <SelectContainer>
              <Select defaultValue={DEFAULT_YEAR}>{YearOptions}</Select>
            </SelectContainer>
          </YearContainer>
          <GenderContainer>
            <SubTitle>성별</SubTitle>
            <div
              css={css`
                display: flex;
                flex-flow: row nowrap;
                gap: 0 9px;
              `}
            >
              {GenderLabels}
            </div>
          </GenderContainer>
        </div>
        <PurposeContainer>
          <SubTitle>용도</SubTitle>
          <div
            css={css`
              display: flex;
              flex-flow: row wrap;
              gap: 20px 10px;
            `}
          >
            {PurposeLabels}
          </div>
        </PurposeContainer>
        <div
          css={css`
            display: flex;
            margin: 40px 0 0 ${margins.SIDE_SUB_MARGIN};
          `}
        >
          <PersonContainer>
            <SubTitle>탑승인원</SubTitle>
            <SelectContainer>
              <Select defaultValue={DEFAULT_PERSON}>{PersonOptions}</Select>
            </SelectContainer>
          </PersonContainer>
          <DistanceContainer>
            <SubTitle>연주행거리</SubTitle>
            <SelectContainer>
              <Select defaultValue={DEFAULT_DISTANCE * UNIT_DISTANCE}>
                {DistanceOptions}
              </Select>
            </SelectContainer>
          </DistanceContainer>
        </div>
      </Content>
      <ProgressBar stage={1} />
      <NextButton title="다음" path={'/test/3'} />
    </>
  );
};

export default Test;
