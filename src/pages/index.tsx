import React from "react";
import { HeadFC, type PageProps } from "gatsby";
import Layout from "../components/layout";
import Therapylist from "../components/main/therapylist";
import FacilityCarousel from "../components/main/facilitycarousel";
import MainCarousel from "../components/main/maincarousel";
import NaverMap from "../components/main/navermap";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <MainCarousel />
      <div>메인페이지</div>
      <Therapylist />
      <FacilityCarousel />
      <NaverMap />
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
