const API_URL = "https://fakestoreapi.com/products";

export async function getProducts() {
  try {
    const res = await fetch(API_URL, { cache: "no-store" });

    if (!res.ok) {
      console.error(`Failed to fetch products: ${res.status} ${res.statusText}`);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
