/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { useTypedDispatch } from '@hooks/useStore';
import { actions } from '@store/slices/appSlice';
import dealerMatchingImage from '@assets/images/temps/dealer-matching.svg';
import Spinner from 'animations/Spinner';

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
  justify-content: flex-end;
  align-items: center;
  width: calc(100% - 35px - 35px);
  height: 450px;
  margin: 0 auto;
  padding: 0 0 48px 0;
  border-radius: 4px;
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const TextBox = styled.div`
  width: calc(100% - 40px - 40px);
  margin: 41px 0 33px 0;
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
  text-align: center;
  white-space: pre;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 40px - 40px);
  height: 46px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: ${colors.PRIMARY_400};
`;

const ButtonText = styled.div`
  font: ${fonts.BODY_REGULAR_1};
  color: ${colors.SECONDARY_400};
  margin: 0 12px 0 0;
`;

const DealerMatchingModal: React.FC = () => {
  const dispatch = useTypedDispatch();
  const handleClickModal: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (ev.currentTarget !== ev.target) return;
    // dispatch(actions.hideDealerMatchingModal());
  };
  const handleClickButton: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    // dispatch(actions.hideDealerMatchingModal());
  };

  return (
    <Modal onClick={handleClickModal}>
      <Box>
        <Image
          src={dealerMatchingImage}
          alt={'dealer-matching'}
          width="276px"
        />
        <TextBox>{`1600명의 전문가가\n 당신과의 만남을 준비하고 있어요!`}</TextBox>
        <Button onClick={handleClickButton}>
          <ButtonText>매칭 중...</ButtonText>
          <Spinner
            diameter={12}
            lineWidth={2}
            backgroundColor={'rgba(0, 0, 0, 0.3)'}
            lineColor={colors.SECONDARY_REAL_BLACK}
            speed={2}
          />
        </Button>
      </Box>
    </Modal>
  );
};

export default DealerMatchingModal;
