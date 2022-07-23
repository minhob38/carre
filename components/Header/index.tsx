/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/Arrow';
import { css } from '@emotion/react';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 0 0 20px;
  position: relative;
`;

const Header: React.FC = () => {
  return (
    <Wrapper>
      <Arrow
        length="13.5px"
        width="2px"
        color="rgba(204, 210, 227, 1)"
        direction="left"
        calibration="2.5px"
      />
      <div
        css={css`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: calc(100% - 77px - 77px);
          height: 4px;
          background-color: #e6e3f1;
          border-radius: 100px;
          margin: auto;
        `}
      />
    </Wrapper>
  );
};

export default Header;
