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

const Title = styled.div`
  margin: 30px 0 2px 20px;
  font: normal 700 20px / 32px roboto;
  color: ${colors.BLACK1};
`;

const Description = styled.div`
  margin: 0 0 30px 20px;
  font: normal 400 14px / 23px roboto;
  color: ${colors.GRAY1};
`;

const SubTitle = styled.div`
  margin: 0 0 12px 0px;
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
  margin: 0 42px 0 30px;
`;

const GenderContainer = styled.div``;

const PurposeContainer = styled.div`
  margin: 40px 0 0 30px;
`;

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
        style={{
          width: '75px',
          height: '48px',
          font: 'normal 400 12px / 26px roboto',
        }}
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
        style={{
          width: '159px',
          height: '48px',
          font: 'normal 400 12px / 26px roboto',
        }}
      />
    );
  });

  return (
    <>
      <Header title="나의 정보 입력" backPath="/test/1" />
      <Content top="55px" bottom="0">
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
                <option value="1980">1980</option>
                <option value="1981">1981</option>
                <option value="1982">1982</option>
                <option value="1983">1983</option>
                <option value="1984">1984</option>
                <option value="1985">1985</option>
                <option value="1986">1986</option>
                <option value="1987">1987</option>
                <option value="1988">1988</option>
                <option value="1989">1989</option>
                <option value="1990">1990</option>
                <option value="1991">1991</option>
                <option value="1992">1992</option>
                <option value="1993">1993</option>
                <option value="1994">1994</option>
                <option value="1995">1995</option>
                <option value="1996">1996</option>
                <option value="1997" selected={true}>
                  1997
                </option>
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
              gap: 19px 12px;
            `}
          >
            {PurposeLabels}
          </div>
        </PurposeContainer>
      </Content>
      <ProgressBar stage={1} />
      <NextButton title="다음" path={'/test/3'} />
    </>
  );
};

export default Test;
