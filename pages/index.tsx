/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import Home from "../components/Home";
import Button from "../components/Button";
import landingA from "../assets/images/landing-a.svg";

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

const Index: NextPage = () => {
  return (
    <>
      <div
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;
          margin: 0 0 0 20px;
          /* width: calc(100% - 20px); */
          height: 194px;
          left: 20px;
          top: 452px;
          background: #ffffff;
          box-shadow: 0px 5px 20px rgba(96, 100, 112, 0.04);
          border-radius: 20px 0px 0px 20px;
          filter: drop-shadow(0px 2px 13px rgba(122, 93, 232, 0.04));
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            width: 148px;
          `}
        >
          <Image src={landingA} alt="landing-a" width={85} height={107} />
        </div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
          `}
        >
          <div
            css={css`
              font: normal 700 19px / 27px Roboto;
              color: #515151;
              white-space: pre;
            `}
          >
            {`검증된 데이터를 통한 \n신뢰성 있는 추천`}
          </div>
          <div
            css={css`
              font: normal 500 14px / 20px Roboto;
              color: rgba(65, 65, 65, 0.6);
              white-space: pre;
            `}
          >
            {`구축된 데이터 베이스를 통해 \n전문 분석된 차량을 추천합니다.`}
          </div>
        </div>
      </div>
      {/* <Home />
      <Button />
      <Link href="/plane" passHref={true}>
        <A>/plane 링크 📌</A>
      </Link>
      <Link href="/train">/train 링크 📌</Link> */}
    </>
  );
};

export default Index;
