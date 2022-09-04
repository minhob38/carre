/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { v4 as uuid4 } from 'uuid';
import Scroll from '@components/common/Scroll';
import InputLabel from '@components/common/InputLabel';
import NextButton from '@components/common/NextButton';
import Header from '@components/common/Header';
import Content from '@components/common/Content';
import ProgressBar from '@components/test/ProgressBar';
import InputWarning from '@modals/InputWarning';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { HEADER_HEIGHT, NEXT_BUTTON_HEIGHT } from '@constants/size';
import {
  MIN_YEAR,
  MAX_YEAR,
  MIN_PERSON,
  MAX_PERSON,
  MIN_DISTANCE_UNIT,
  MAX_DISTANCE_UNIT,
  UNIT_DISTANCE,
  genderLabels,
  purposeLabels,
} from '@constants/variables';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import { useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { actions as surveyActions } from '@store/slices/surveySlice';

const Title = styled.div`
  margin: 28px 0 4px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.TITLE_T1};
  color: ${colors.SECONDARY_500};
`;

const Description = styled.div`
  margin: 0 0 20px ${margins.SIDE_MAIN_MARGIN};
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

const YearGenderContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 20px 10px;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
`;

const YearContainer = styled.div``;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 20px 0 0 0;
`;

const PersonDistanceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 0 0;
`;

const PersonContainer = styled.div`
  margin: 0 44px 0 0;
`;

const DistanceContainer = styled.div``;

const Test: NextPage = () => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const dispatch = useTypedDispatch();
  const isInputWarningModal = useTypedSelector(
    (state) => state.rootReducer.appReducer.isInputWarningModal,
  );
  const birthYear = useTypedSelector(
    (state) => state.rootReducer.inputReducer.birthYear,
  );
  const passengerCount = useTypedSelector(
    (state) => state.rootReducer.inputReducer.passengerCount,
  );
  const drivenDistanceInYear = useTypedSelector(
    (state) => state.rootReducer.inputReducer.drivenDistanceInYear,
  );
  const gender = useTypedSelector(
    (state) => state.rootReducer.inputReducer.gender,
  );
  const carUsagePurpose = useTypedSelector(
    (state) => state.rootReducer.inputReducer.carUsagePurpose,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(surveyActions.createSurveyTokenAsync());
  }, [dispatch]);

  useEffect(() => {
    if (
      birthYear &&
      passengerCount &&
      drivenDistanceInYear &&
      gender &&
      carUsagePurpose
      // carUsagePurpose.length > 0
    ) {
      setIsActive(true);
      return;
    }

    setIsActive(false);
  }, [
    birthYear,
    passengerCount,
    drivenDistanceInYear,
    gender,
    carUsagePurpose,
  ]);

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
          type: 'radio',
          name: 'carUsagePurpose',
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
      {isInputWarningModal && <InputWarning />}
      <Header title="나의 정보 입력" type="back" closePath="/" />
      <Content
        top={HEADER_HEIGHT}
        bottom={`calc(${NEXT_BUTTON_HEIGHT} + 50px)`}
      >
        <Title>나의 정보 입력</Title>
        <Description>차량 구매에 필요한 나의 정보를 입력해요.</Description>
        <Scroll
          direction="y"
          width={`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`}
          height="calc(100% - 130px)"
        >
          <YearGenderContainer>
            <YearContainer>
              <SubTitle>출생연도</SubTitle>
              <SelectContainer>
                <Select
                  name="birthYear"
                  value={birthYear}
                  onChange={(ev) =>
                    dispatch(actions.setSelectOption(ev.target))
                  }
                >
                  {YearOptions}
                </Select>
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
          </YearGenderContainer>
          <PurposeContainer>
            <SubTitle>용도</SubTitle>
            <div
              css={css`
                /* display: grid;
                grid-template-columns: repeat(2, 1fr);
                justify-content: start;
                align-items: flex-start;
                justify-items: self-start;
                row-gap: 20px;
                column-gap: 10px; */
                display: flex;
                flex-flow: row wrap;
                justify-content: space-between;
                gap: 20px 10px;
              `}
            >
              {PurposeLabels}
            </div>
          </PurposeContainer>
          <PersonDistanceContainer>
            <PersonContainer>
              <SubTitle>탑승인원</SubTitle>
              <SelectContainer>
                <Select
                  name="passengerCount"
                  value={passengerCount}
                  onChange={(ev) =>
                    dispatch(actions.setSelectOption(ev.target))
                  }
                >
                  {PersonOptions}
                </Select>
              </SelectContainer>
            </PersonContainer>
            <DistanceContainer>
              <SubTitle>연주행거리</SubTitle>
              <SelectContainer>
                <Select
                  name="drivenDistanceInYear"
                  value={drivenDistanceInYear}
                  onChange={(ev) =>
                    dispatch(actions.setSelectOption(ev.target))
                  }
                >
                  {DistanceOptions}
                </Select>
              </SelectContainer>
            </DistanceContainer>
          </PersonDistanceContainer>
        </Scroll>
      </Content>
      <ProgressBar stage={1} />
      <NextButton title="다음" path={'/test/3'} isActive={isActive} />
    </>
  );
};

export default Test;
