import Detail from "@/components/detail/index";
import { NextPageContext } from "next";

export default function movieDetail({ slug }: { slug: string }) {
  return <Detail id={slug} isTvDetail={false} />;
}

movieDetail.getInitialProps = async (ctx: NextPageContext) => {
  const id = ctx.query.slug;

  return {
    slug: id,
  };
};
