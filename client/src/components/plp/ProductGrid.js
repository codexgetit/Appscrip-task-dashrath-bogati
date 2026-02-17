import ProductCard from "./ProductCard";
import "../../styles/product-grid.css";

function getBadge(index) {
  if (index === 0) return "NEW PRODUCT";
  if (index === 3) return "OUT OF STOCK";
  return null;
}

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return (
      <div className="product-grid product-grid--empty">
        <p className="product-grid__empty-state">No products available</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {products.map((product, index) => (
        <ProductCard
          key={product?.id ?? index}
          product={product}
          badge={getBadge(index)}
        />
      ))}
    </div>
  );
}
