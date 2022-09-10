/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { useTypedDispatch } from '@hooks/useStore';
import { actions } from '@store/slices/appSlice';

interface IProps {
  title: string;
}

const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 35px - 35px);
  height: 150px;
  margin: 0 auto;
  padding: 25px 0 25px 0;
  border-radius: 4px;
  background-color: ${colors.SECONDARY_REAL_WHITE};
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 46px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${colors.PRIMARY_400};
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.SECONDARY_400};
`;

const InputWarningModal: React.FC<IProps> = ({ title }) => {
  const dispatch = useTypedDispatch();
  const handleClickModal: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (ev.currentTarget !== ev.target) return;
    dispatch(actions.hideInputWariningModal());
  };
  const handleClickButton: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    dispatch(actions.hideInputWariningModal());
  };

  return (
    <Modal onClick={handleClickModal}>
      <Box>
        {title}
        <Button onClick={handleClickButton}>확인</Button>
      </Box>
    </Modal>
  );
};

export default InputWarningModal;
