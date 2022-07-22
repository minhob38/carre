/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Image from 'next/image';
import bookmarkImage from '@assets/images/bookmark.svg';
import historyImage from '@assets/images/history.svg';
import myImage from '@assets/images/my.svg';
import testImage from '@assets/images/test.svg';

const Wrapper = styled.div`
  width: 100%;
  height: 90px;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 77px;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
  height: 100%;
`;

const BottomTabNavigator: React.FC = () => {
  return (
    <Wrapper>
      <IconContainer>
        <IconBox>
          <Image src={testImage} alt="test" layout="intrinsic" width="57px" />
        </IconBox>
        <IconBox>
          <Image
            src={bookmarkImage}
            alt="bookmark"
            layout="intrinsic"
            width="57px"
          />
        </IconBox>
        <IconBox>
          <Image
            src={historyImage}
            alt="history"
            layout="intrinsic"
            width="57px"
          />
        </IconBox>
        <IconBox>
          <Image src={myImage} alt="my" layout="intrinsic" width="57px" />
        </IconBox>
      </IconContainer>
    </Wrapper>
  );
};

export default BottomTabNavigator;
