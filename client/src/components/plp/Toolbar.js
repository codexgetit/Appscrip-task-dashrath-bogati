"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import "../../styles/toolbar.css";

const SORT_OPTIONS = [
  "RECOMMENDED",
  "NEWEST FIRST",
  "POPULAR",
  "PRICE : HIGH TO LOW",
  "PRICE : LOW TO HIGH",
];

export default function Toolbar({ onToggleFilters, filtersVisible }) {
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("RECOMMENDED");
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortDropdownOpen(false);
      }
    };

    if (sortDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sortDropdownOpen]);

  const handleSortSelect = (option) => {
    setSelectedSort(option);
    setSortDropdownOpen(false);
  };

  return (
    <section className="toolbar" aria-label="Product listing controls">
      <div className="toolbar__inner">
        <p className="toolbar__left">
          <strong>3425 ITEMS</strong>
        </p>

        <button
          className="toolbar__center"
          onClick={onToggleFilters}
          aria-expanded={filtersVisible}
          aria-controls="sidebar-filters"
        >
          <Image
            src="/images/icons/chevron-down.svg"
            alt=""
            width={16}
            height={16}
            aria-hidden="true"
            className={`toolbar__arrow ${filtersVisible ? "" : "toolbar__arrow--rotated"}`}
          />
          <span className="toolbar__filter-text">
            {filtersVisible ? "HIDE FILTER" : "SHOW FILTER"}
          </span>
        </button>

        <div className="toolbar__right" ref={dropdownRef}>
          <button
            className="toolbar__sort-button"
            onClick={() => setSortDropdownOpen((prev) => !prev)}
            aria-expanded={sortDropdownOpen}
            aria-haspopup="true"
          >
            <span className="toolbar__sort-label">{selectedSort}</span>
            <Image
              src="/images/icons/chevron-down.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
              className={`toolbar__sort-chevron ${sortDropdownOpen ? "toolbar__sort-chevron--open" : ""}`}
            />
          </button>

          {sortDropdownOpen && (
            <div className="toolbar__dropdown">
              {SORT_OPTIONS.map((option) => (
                <button
                  key={option}
                  className={`toolbar__dropdown-item ${selectedSort === option ? "toolbar__dropdown-item--selected" : ""}`}
                  onClick={() => handleSortSelect(option)}
                >
                  {selectedSort === option && (
                    <span className="toolbar__dropdown-check">✓</span>
                  )}
                  <span>{option}</span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <hr className="toolbar__divider" />
    </section>
  );
}
