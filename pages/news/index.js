import Link from "next/link";

const News = () => {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS is a great Framework
          </Link>
        </li>
        <li>Allah is amazing</li>
      </ul>
    </>
  );
};

export default News;
