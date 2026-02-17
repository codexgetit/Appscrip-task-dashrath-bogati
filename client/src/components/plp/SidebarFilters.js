"use client";

import { useState } from "react";
import Image from "next/image";
import "../../styles/filters.css";

const FILTER_SECTIONS = [
  { key: "idealFor", label: "IDEAL FOR", defaultValue: "All" },
  { key: "occasion", label: "OCCASION", defaultValue: "All" },
  { key: "work", label: "WORK", defaultValue: "All" },
  { key: "fabric", label: "FABRIC", defaultValue: "All" },
  { key: "segment", label: "SEGMENT", defaultValue: "All" },
  { key: "suitableFor", label: "SUITABLE FOR", defaultValue: "All" },
  { key: "rawMaterials", label: "RAW MATERIALS", defaultValue: "All" },
  { key: "pattern", label: "PATTERN", defaultValue: "All" },
];

export default function SidebarFilters({ visible }) {
  const [openSections, setOpenSections] = useState({});
  const [customizable, setCustomizable] = useState(false);

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <aside
      id="sidebar-filters"
      className={`filters${visible ? "" : " filters--hidden"}`}
      aria-label="Product filters"
    >
      {/* Customizable checkbox */}
      <label className="filters__checkbox">
        <input
          type="checkbox"
          checked={customizable}
          onChange={() => setCustomizable((v) => !v)}
        />
        <span className="filters__checkbox-label">CUSTOMIZABLE</span>
      </label>

      <hr className="filters__divider" />

      {/* Accordion filter sections */}
      {FILTER_SECTIONS.map(({ key, label, defaultValue }) => {
        const isOpen = !!openSections[key];
        return (
          <div key={key} className="filters__section">
            <button
              className="filters__title"
              onClick={() => toggleSection(key)}
              aria-expanded={isOpen}
              aria-controls={`filter-${key}`}
            >
              <span className="filters__title-text">{label}</span>
              <Image
                src="/images/icons/chevron-down.svg"
                alt=""
                width={16}
                height={16}
                aria-hidden="true"
                className={`filters__chevron ${isOpen ? "filters__chevron--open" : ""}`}
              />
            </button>

            <p className="filters__value">{defaultValue}</p>

            {isOpen && (
              <div id={`filter-${key}`} className="filters__content">
                <ul className="filters__options">
                  <li className="filters__option">
                    <label>
                      <input type="checkbox" /> Option 1
                    </label>
                  </li>
                  <li className="filters__option">
                    <label>
                      <input type="checkbox" /> Option 2
                    </label>
                  </li>
                  <li className="filters__option">
                    <label>
                      <input type="checkbox" /> Option 3
                    </label>
                  </li>
                </ul>
              </div>
            )}

            <hr className="filters__divider" />
          </div>
        );
      })}
    </aside>
  );
}
