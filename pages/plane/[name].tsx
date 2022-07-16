import type { NextPage } from "next";
import { useRouter } from "next/router";

const Name: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  console.log(router.query);
  return <div>{name} 🛩</div>;
};

export default Name;
