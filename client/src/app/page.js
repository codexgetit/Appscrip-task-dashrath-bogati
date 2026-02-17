import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/plp/Hero";
import PlpSection from "../components/plp/PlpSection";
import ErrorBoundary from "../components/ErrorBoundary";
import { getProducts } from "../lib/api";

export const metadata = {
  title: "Product Listing Page | Appscrip Task",
  description:
    "Discover our products with advanced filtering and modern UI.",
};

export default async function Page() {
  const products = await getProducts();

  return (
    <main>
      <Navbar />
      <Hero />
      <ErrorBoundary>
        {products?.length > 0 ? (
          <PlpSection products={products} />
        ) : (
          <section className="plp-fallback" aria-label="Product listing">
            <p className="plp-fallback__text">Loading products...</p>
          </section>
        )}
      </ErrorBoundary>
      <Footer />
    </main>
  );
}