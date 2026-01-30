/**
 * Single blog post. Replace with your React SingleBlogPage component.
 * Receives blog id via params.
 */
type Props = { params: Promise<{ id: string }> };

export default function SingleBlogPage({ params }: Props) {
  return <main>Blog post</main>;
}
