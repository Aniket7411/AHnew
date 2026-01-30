/**
 * Single service. Replace with your React ServicesSingle component.
 * Receives service id via params.
 */
type Props = { params: Promise<{ id: string }> };

export default function ServicesSingle({ params }: Props) {
  return <main>Service</main>;
}
