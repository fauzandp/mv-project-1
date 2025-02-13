import { NextPageContext } from "next";
import Detail from "@/components/detail/index";

export default function tvDetail({ slug }: { slug: string }) {
  return (
    <>
      <Detail id={slug} isTvDetail={true}></Detail>
    </>
  );
}

tvDetail.getInitialProps = async (ctx: NextPageContext) => {
  const id = ctx.query.slug;

  return {
    slug: id,
  };
};
