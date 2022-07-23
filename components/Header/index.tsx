/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/Arrow';
import { useRouter } from 'next/router';

const STAGE_COUNT = 5;
const STAGE = 4;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 38px;
  padding: 0 0 0 20px;
  position: relative;
`;

const ProgressBar = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% - 77px - 77px);
  height: 4px;
  background-color: #e6e3f1;
  border-radius: 100px;
  margin: auto;
`;

const CurrentStage = styled.div`
  position: absolute;
  transform: translate(calc(100% * ${STAGE - 1}), 0);
  width: calc(100% / ${STAGE_COUNT});
  height: 4px;
  background-color: #a289ff;
  border-radius: 100px;
  margin: auto;
  z-index: 1000;
`;

const Header: React.FC = () => {
  const router = useRouter();
  const handleArrorClick = () => router.back();

  return (
    <Wrapper>
      <Arrow
        length="13.5px"
        width="2px"
        color="rgba(204, 210, 227, 1)"
        direction="left"
        calibration="2.5px"
        onClick={handleArrorClick}
      />
      <ProgressBar>
        <CurrentStage />
      </ProgressBar>
    </Wrapper>
  );
};

export default Header;
