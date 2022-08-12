/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import { useTypedDispatch, useTypedSelector } from '@hooks/useStore';
import { actions } from '@store/slices/inputSlice';
import * as fonts from '@constants/fonts';
import * as colors from '@constants/colors';
import activeCheckImage from '@assets/images/icons/small-active-check.svg';
import inactiveCheckImage from '@assets/images/icons/small-inactive-check.svg';

const Wrapper = styled.label`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
`;

const Title = styled.div`
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_250};
  margin: 0 0 0 13px;
`;

const Toggle: React.FC = () => {
  const similarBudget = useTypedSelector(
    (state) => state.rootReducer.inputReducer.similarBudget,
  );
  const dispatch = useTypedDispatch();
  const handleChange = (ev) => {
    dispatch(actions.clickToggle(ev.target));
  };

  return (
    <Wrapper>
      <Image
        src={similarBudget ? activeCheckImage : inactiveCheckImage}
        alt={similarBudget ? 'activeCheckImage' : 'inactiveCheckImage'}
        width="30px"
        height="30px"
      />
      <Input
        type="checkbox"
        name="similarBudget"
        value={`${similarBudget}`}
        onChange={handleChange}
      ></Input>
      <Title>비슷한 가격대 차량도 함께 보기</Title>
    </Wrapper>
  );
};

export default Toggle;
