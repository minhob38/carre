/** @jsxImportSource @emotion/react */
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import rightArrowImage from '@assets/images/icons/small-black-right-arrow.svg';
import { actions } from '@store/slices/surveySlice';

import { useTypedDispatch } from '@hooks/useStore';
import { useInitialization } from '@hooks/useStore';
import { useEffect } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 78px;
  border-radius: 8px;
  background-color: ${colors.PRIMARY_400};
  padding: 0 20px; ;
`;

const ItemText = styled.div`
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const TestStartButton: React.FC = () => {
  const router = useRouter();
  const dispatch = useTypedDispatch();
  const initializeStore = useInitialization();
  const handleButtonClick = () => {
    dispatch(actions.createSurveyTokenAsync());
    router.push('/test/2');
  };

  useEffect(() => {
    initializeStore();
  }, []);

  return (
    <Wrapper onClick={handleButtonClick}>
      <ItemText>테스트하러가기</ItemText>
      <Image
        src={rightArrowImage}
        alt="right-arrow"
        width="20px"
        height="20px"
      />
    </Wrapper>
  );
};

export default TestStartButton;
