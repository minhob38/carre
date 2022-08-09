/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Arrow from '@components/common/Arrow';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 184px;
  height: 36px;
  padding: 0 12px;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_350};
`;

const MbtiText = styled.div`
  font: ${fonts.BUTTON_2};
  color: ${colors.SECONDARY_500};
`;

const MbtiButton: React.FC = () => {
  return (
    <Wrapper>
      <MbtiText>나의 MBTI 적용하기</MbtiText>
      <Arrow
        length="8.5px"
        width="1.5px"
        color={colors.SECONDARY_500}
        direction="right"
        calibrationX="1.5px"
      />
    </Wrapper>
  );
};

export default MbtiButton;
