/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import * as colors from '@constants/colors';
import * as fonts from '@constants/fonts';
import * as margins from '@constants/margins';
import { FOOTER_HEIGHT } from '@constants/size';

const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  height: ${FOOTER_HEIGHT};
`;

const CompanyInfo = styled.div`
  margin: 0 0 30px ${margins.SIDE_MAIN_MARGIN};
  font: ${fonts.SUBTITLE_T2};
  color: ${colors.SECONDARY_REAL_BLACK};
  font-size: 12px;
  white-space: pre;
`;

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
      <CompanyInfo>
        {`(주) REMY 대표자 : 허장욱 \n인천광역시 연수구 송도미래로 30, D동 909 에이-10호 \n사업자번호 : 633-81-02087 \n이메일 chamadang2022@gmail.com`}
      </CompanyInfo>
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
