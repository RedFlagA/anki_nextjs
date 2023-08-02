import BlogDetailScreen from "@/screens/BlogDetail";
import { getDetailBlog } from "@/services/data";
import { convert } from "html-to-text";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const options = {
    wordwrap: 130,
  };
  const slug = params?.slug;
  const data = await getDetailBlog(slug);
  return {
    title: data[0]?.title?.rendered,
    description: convert(data[0]?.excerpt?.rendered, options),
  };
}
export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  return <BlogDetailScreen params={params} />;
}
