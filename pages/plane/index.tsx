/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import React from "react";
import Link from "next/link";
import { css } from "@emotion/react";
import Image from "next/image";
import styled from "@emotion/styled";
import kfx from "../../assets/images/kfx.jpeg";

const CSS = css`
  font: normal normal 16px / 30px Noto Sans CJK KR;
`;

const A = styled.a`
  all: unset;
  display: block;
  background-color: #b6b6b6;
  width: 10rem;
  height: 2rem;
  &:hover {
    background-color: #ecebeb;
    border: none;
  }
  cursor: pointer;
`;

const Plane: NextPage = () => {
  return (
    <>
      <div css={CSS}>Plane 🛩</div>
      <Image src={kfx} alt="kfx" width={150} height={112} />
      <Link href="/plane/f16" passHref={true}>
        <A>f16</A>
      </Link>
      <Link href="/plane/f22" passHref={true}>
        <A>f22</A>
      </Link>
      <Link href="/plane/f35?type=a" passHref={true}>
        <A>f35</A>
      </Link>
    </>
  );
};

export default Plane;
