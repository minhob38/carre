/** @jsxImportSource @emotion/react */
import type { NextPage } from "next";
import Link from "next/link";
import styled from "@emotion/styled";
import Home from "../components/Home";
import Button from "../components/Button";

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
      <Home />
      <Button />
      <Link href="/plane" passHref={true}>
        <A>/plane 링크 📌</A>
      </Link>
      <Link href="/train">/train 링크 📌</Link>
    </>
  );
};

export default Index;
