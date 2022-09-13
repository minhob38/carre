/** @jsxImportSource @emotion/react */
import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import { useTypedDispatch } from '@hooks/useStore';
import { actions } from '@store/slices/appSlice';
import dealerMatchedImage from '@assets/images/temps/dealer-matched.svg';

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

const DealerMatchedModal: React.FC = () => {
  const dispatch = useTypedDispatch();
  const handleClickModal: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    if (ev.currentTarget !== ev.target) return;
    // dispatch(actions.hideDealerMatchedModal());
  };
  const handleClickButton: React.MouseEventHandler<HTMLDivElement> = (ev) => {
    dispatch(actions.hideDealerMatchedModal());
    // router.push('/result/1');
    router.push('/');
  };
  const router = useRouter();

  return (
    <Modal onClick={handleClickModal}>
      <Box>
        <Image src={dealerMatchedImage} alt={'dealer-matched'} width="276px" />
        <TextBox>{`딜러와의 상담 요청이\n 완료되었습니다.`}</TextBox>
        <Button onClick={handleClickButton}>
          <ButtonText>확인</ButtonText>
        </Button>
      </Box>
    </Modal>
  );
};

export default DealerMatchedModal;
