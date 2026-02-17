"use client";

import { useState } from "react";
import Toolbar from "./Toolbar";
import SidebarFilters from "./SidebarFilters";
import ProductGrid from "./ProductGrid";
import "../../styles/plp-section.css";

export default function PlpSection({ products }) {
  const [filtersVisible, setFiltersVisible] = useState(true);

  return (
    <>
      <Toolbar
        onToggleFilters={() => setFiltersVisible((v) => !v)}
        filtersVisible={filtersVisible}
      />
      <section className="plp" aria-label="Product listing">
        <SidebarFilters visible={filtersVisible} />
        <ProductGrid products={products} />
      </section>
    </>
  );
}
