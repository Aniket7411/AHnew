import SingleBlogPage from "@/components/pages/blogsSingle/BlogsSingle";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: `Blog | ${id}` };
}

export default async function BlogPostRoute({ params }: Props) {
  const { id } = await params;
  return <SingleBlogPage id={id} />;
}
