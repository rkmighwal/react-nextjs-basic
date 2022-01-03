import { useRouter } from "next/router";

const DetailsPage = () => {
  const router = useRouter();

  return <h1>The Details page : {router.query.newsId}</h1>;
};

export default DetailsPage;
