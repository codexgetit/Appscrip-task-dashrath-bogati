const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const res = await fetch(API_URL, { next: { revalidate: 60 } });

    if (!res.ok) {
      throw new Error(`HTTP ${res.status}: ${res.statusText}`);
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Product API Error:", error);
    return [];
  }
}
