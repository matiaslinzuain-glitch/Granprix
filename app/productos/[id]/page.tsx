import { notFound } from "next/navigation";
import products from "@/data/products.json";
import ProductDetail from "@/components/ProductDetail";
import Footer from "@/components/Footer";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) return { title: "Producto no encontrado — Gran Prix" };
  return {
    title: `${product.nombre} — Gran Prix`,
    description: product.descripcion,
  };
}

export default async function ProductoDetallePage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products
    .filter((p) => p.categoria === product.categoria && p.id !== product.id)
    .slice(0, 4);

  return (
    <>
      <ProductDetail product={product} related={related} />
      <Footer />
    </>
  );
}
