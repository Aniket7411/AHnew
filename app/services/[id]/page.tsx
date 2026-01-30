import ServicesSingle from "@/components/pages/ServicesSingle/ServicesSingle";
import type { Metadata } from "next";

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: `Service | ${id}` };
}

export default async function ServiceRoute({ params }: Props) {
  const { id } = await params;
  return <ServicesSingle id={id} />;
}
