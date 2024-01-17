import * as React from "react";
import { type HeadFC, type PageProps } from "gatsby";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <div>
      <div>메인페이지</div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
