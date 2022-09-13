/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import Image from '@components/common/Image';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import backImage from '@assets/images/icons/back.svg';
import closeImage from '@assets/images/icons/close.svg';
import { FOOTER_HEIGHT, HEADER_HEIGHT } from '@constants/size';

interface IProps {
  title: string;
  type: 'back' | 'close';
  backPath?: string;
  closePath?: string;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${FOOTER_HEIGHT};
`;

const Title = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.TITLE_T2};
  color: ${colors.SECONDARY_500};
`;

const ImageContainer = styled.div``;

const TermConatiner = styled.div`
  display: flex;
  gap: 0 20px;
  margin: 0 0 0 ${margins.SIDE_MAIN_MARGIN};
`;

const ALink = styled.a`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  font: ${fonts.BODY_REGULAR_2};
  color: ${colors.SECONDARY_400};
  /* text-decoration: underline; */
`;

const Footer: React.FC<any> = () => {
  return (
    <Wrapper>
      <TermConatiner>
        <ALink
          href={
            'https://invited-magic-684.notion.site/92b92d8352b14f53a397f1cf603cc5b8'
          }
          target="_blank"
        >
          개인정보처리방침
        </ALink>
        <ALink
          href={
            'https://invited-magic-684.notion.site/203af742a79e4b65bf68ccd884b7f632'
          }
          target="_blank"
        >
          서비스 약관
        </ALink>
      </TermConatiner>
    </Wrapper>
  );
};

export default Footer;
