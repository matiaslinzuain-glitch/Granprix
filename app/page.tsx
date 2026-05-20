import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import CategoryGrid from "@/components/CategoryGrid";
import ProductGrid from "@/components/ProductGrid";
import PickupBanner from "@/components/PickupBanner";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <CategoryGrid />

      {/* Productos destacados */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <ProductGrid
          products={products}
          title="DESTACADOS"
          showFilters={true}
          showSort={false}
          limit={8}
        />
      </section>

      <PickupBanner />
      <NewsletterSection />
      <Footer />
    </>
  );
}
