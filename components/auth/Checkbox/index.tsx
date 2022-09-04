/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import Scroll from '@components/common/Scroll';
import activeCheckImage from '@assets/images/icons/big-active-check.svg';
import inactiveCheckImage from '@assets/images/icons/big-inactive-check.svg';
import upArrowImage from '@assets/images/icons/small-black-up-arrow.svg';
import downArrowImage from '@assets/images/icons/small-black-down-arrow.svg';
import * as fonts from '@constants/fonts';
import * as colors from '@constants/colors';

interface IProps {
  input: {
    name: string;
    value: string;
  };
  title: string;
  link: string;
  description: string;
  category?: string;
  checked: boolean;
  onChange: any;
  // onChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface IStyleProps {
  checked: boolean;
  width: string;
  height?: string;
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: calc(100% - 46px - 46px);
  border-radius: 8px;
`;

const Header = styled.label`
  position: relative;
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  overflow: hidden;
`;

const ImageContainer = styled.div``;

const Description = styled.div`
  width: 100%;
  font: ${fonts.SUBTITLE_T1};
  background-color: ${colors.SECONDARY_100};
  padding: 10px;
`;

const Title = styled.div`
  margin: 0 0 0 14px;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
`;

const ImageTitleContainer = styled.label`
  display: flex;
  align-items: center;
`;

const ScrollContainer = styled.div`
  max-height: 300px;
  width: 100%;
`;

const ALink = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font: ${fonts.SUBTITLE_T1};
  background-color: ${colors.SECONDARY_100};
  padding: 10px;
  text-decoration: underline;
`;

const ImageLabel: React.FC<IProps> = ({
  input,
  title,
  link,
  category,
  checked,
  onChange,
  description,
}) => {
  const [isDown, setIsDown] = useState<boolean>(false);
  const { name, value } = input;
  // TODO: input 넣으면 범위가 이상해짐 : (
  return (
    <Wrapper>
      <Header>
        <ImageTitleContainer>
          {/* <input
            type="checkbox"
            name={name}
            value={value}
            css={css`
              all: unset;
              width: '10px';
            `}
            onClick={() => console.log('!!!!')}
            onChange={onChange}
            checked={checked}
          /> */}
          <ImageContainer onClick={onChange}>
            <Image
              src={checked ? activeCheckImage : inactiveCheckImage}
              alt={checked ? 'activeCheckImage' : 'inactiveCheckImage'}
              width="30px"
            />
          </ImageContainer>
          <Title>{title}</Title>
        </ImageTitleContainer>
        {description && (
          <ImageContainer onClick={() => setIsDown(!isDown)}>
            <Image
              src={isDown ? upArrowImage : downArrowImage}
              // src={isDown ? downArrowImage : upArrowImage}
              alt={isDown ? 'up-arrow' : 'down-arrow'}
              // alt={isDown ? 'down-arrow' : 'up-arrow'}
              width="20px"
              height="20px"
            />
          </ImageContainer>
        )}
      </Header>
      {isDown && (
        <ScrollContainer>
          <Scroll direction="y" height="100%" width="100%">
            {/* <Description>{description}</Description> */}
            <ALink href={link} target="_blank">
              {description}
            </ALink>
          </Scroll>
        </ScrollContainer>
      )}
    </Wrapper>
  );
};

export default ImageLabel;
