import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import axios from "../configs/axios-config";
import { ITrainApi } from "../types/types";

const Train: NextPage<{ serverProps: ITrainApi }> = ({ serverProps }) => {
  const { emoji } = serverProps;

  return (
    <>
      <Head>
        <title>Train 🚂</title>
        <meta name="description" content="train page ..." />
      </Head>
      <div className="text-base font-mono">{`Train ${emoji}`}</div>
    </>
  );
};

Train.getInitialProps = async (ctx) => {
  const { data } = await axios.get("train");
  return { serverProps: data };
};

export default Train;
