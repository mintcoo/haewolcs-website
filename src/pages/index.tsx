import React from "react";
import { HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Therapylist from "../components/main/therapylist";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div>메인페이지</div>
      <Therapylist />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
