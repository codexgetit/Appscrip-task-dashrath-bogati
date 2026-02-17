"use client";

import { useState } from "react";
import Image from "next/image";
import "../../styles/product-card.css";

export default function ProductCard({ product, badge }) {
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <article className="product-card">
      <figure className="product-card__figure">
        {badge && (
          <span
            className={`product-card__badge ${
              badge === "OUT OF STOCK"
                ? "product-card__badge--out"
                : "product-card__badge--new"
            }`}
          >
            {badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={400}
          className="product-card__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </figure>

      <div className="product-card__info">
        <div className="product-card__details">
          <h3 className="product-card__title">{product.title}</h3>
          <p className="product-card__price">
            <a href="/signin" className="product-card__price-link">
              Sign in
            </a>{" "}
            or{" "}
            <a href="/register" className="product-card__price-link">
              Create an account
            </a>{" "}
            to see pricing
          </p>
        </div>

        <button
          className="product-card__wishlist"
          onClick={() => setWishlisted((v) => !v)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          suppressHydrationWarning
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={wishlisted ? "#e74c3c" : "none"}
            stroke={wishlisted ? "#e74c3c" : "#000"}
            strokeWidth="1.5"
            aria-hidden="true"
          >
            <path d="M12 21C12 21 3 14.5 3 8.5C3 5.42 5.42 3 8.5 3C10.24 3 11.91 3.81 12 5C12.09 3.81 13.76 3 15.5 3C18.58 3 21 5.42 21 8.5C21 14.5 12 21 12 21Z" />
          </svg>
        </button>
      </div>
    </article>
  );
}
