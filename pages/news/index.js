import Link from "next/link";
import React from "react";

const NewsPage = () => {
  return <React.Fragment>
    <h1>The News page</h1>
    <ul>
      <li>
        <Link href="/news/hello">Next JS is a great framework</Link>
      </li>
      <li>Something else</li>
    </ul>
  </React.Fragment>;
};

export default NewsPage;
