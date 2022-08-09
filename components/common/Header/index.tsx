/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import backImage from '@assets/images/icons/back.svg';
import closeImage from '@assets/images/icons/close.svg';
import { HEADER_HEIGHT } from '@constants/size';

interface IProps {
  title: string;
  type: 'back' | 'close';
  backPath?: string;
  closePath?: string;
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT};
  padding: 0 0 0 20px;
  box-shadow: 0px 1px 10px 1px rgba(96, 100, 112, 0.06);
  background-color: ${colors.SECONDARY_REAL_WHITE};
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: calc(100% - 77px - 77px); */
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const ImageContainer = styled.div``;

const Header: React.FC<IProps> = ({
  title,
  type,
  backPath = '/',
  closePath = '/',
}) => {
  const router = useRouter();

  let src: any;
  let alt: 'back' | 'close';
  let path: string;

  if (type === 'back') {
    src = backImage;
    alt = 'back';
    path = backPath;
  } else {
    src = closeImage;
    alt = 'close';
    path = closePath;
  }

  const handleClick = () => {
    if (!path) return;
    router.push(path);
  };

  return (
    <Wrapper>
      <ImageContainer onClick={handleClick}>
        <Image src={src} alt={alt} width="24px" height="24px" />
      </ImageContainer>
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default Header;
