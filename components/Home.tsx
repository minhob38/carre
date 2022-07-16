/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";

const homeCss = css`
  width: 5rem;
  height: 5rem;
  background-color: #b8f5f5;
  font: normal bold 16px / 24x Noto Sans CJK KR;
`;

const Home: React.FC = () => {
  return <div css={homeCss}>Home 🏠</div>;
};

export default Home;
