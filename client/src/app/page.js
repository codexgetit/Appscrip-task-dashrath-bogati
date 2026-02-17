import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/plp/Hero";
import PlpSection from "../components/plp/PlpSection";
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
      <PlpSection products={products} />
      <Footer />
    </main>
  );
}