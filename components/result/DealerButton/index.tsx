/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import Link from 'next/link';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as margins from '@constants/margins';
import * as fonts from '@constants/fonts';
import { DEALER_BUTTON_HEIGHT } from '@constants/size';
import heartImage from '@assets/images/icons/heart.svg';
import { useTypedDispatch } from '@hooks/useStore';
import { actions } from '@store/slices/appSlice';

interface IProps extends IStyleProps {
  path: string;
}

interface IStyleProps {
  isActive: boolean;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${DEALER_BUTTON_HEIGHT};
  background-color: ${colors.SECONDARY_REAL_WHITE};
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
`;

const Container = styled.div`
  position: relative;
  top: -12px;
  display: flex;
  width: 100%;
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${`calc(100% - ${margins.SIDE_MAIN_MARGIN} - ${margins.SIDE_MAIN_MARGIN})`};
  height: 48px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: ${(props: IStyleProps) =>
    props.isActive ? `${colors.SECONDARY_500}` : `${colors.SECONDARY_300}`};
`;

const Text1 = styled.div`
  font: ${fonts.BUTTON_1};
  color: ${colors.SECONDARY_REAL_WHITE};
  white-space: pre;
`;

const Text2 = styled(Text1)`
  color: ${colors.PRIMARY_400};
`;

const DealerButton: React.FC<IProps> = ({ path, isActive = true }) => {
  const dispatch = useTypedDispatch();

  if (!isActive) {
    return (
      <Wrapper onClick={() => dispatch(actions.showInputWariningModal())}>
        <Container>
          {/* <Image src={heartImage} alt="heart" width="36px" height="36px" /> */}
          <Button isActive={isActive}>
            <Text1>나에게 맞는</Text1>
            <Text2> 딜러 찾기</Text2>
          </Button>
        </Container>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Container>
        {/* <Image src={heartImage} alt="heart" width="36px" height="36px" /> */}
        <Link href={path} passHref={true}>
          <Button isActive={isActive}>
            <Text1>나에게 맞는</Text1>
            <Text2> 딜러 찾기</Text2>
          </Button>
        </Link>
      </Container>
    </Wrapper>
  );
};

export default DealerButton;
