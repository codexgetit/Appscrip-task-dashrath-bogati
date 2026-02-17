"use client";

import { useState } from "react";
import Image from "next/image";
import "../../styles/navbar.css";

const NAV_LINKS = [
  { label: "SHOP", href: "/shop" },
  { label: "SKILLS", href: "/skills" },
  { label: "STORIES", href: "/stories" },
  { label: "ABOUT", href: "/about" },
  { label: "CONTACT US", href: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="navbar" role="banner">
      {/* Top Bar */}
      <div className="navbar__top">
        <div className="navbar__top-left">
          <button
            className="navbar__hamburger"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <Image
              src="/images/icons/hamburger.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <a href="/" className="navbar__brand" aria-label="Home">
            <Image
              src="/Web/PLP/Logo.png"
              alt="Brand logo"
              width={36}
              height={36}
              priority
            />
          </a>
        </div>

        <a href="/" className="navbar__logo" aria-label="Home">
          LOGO
        </a>

        <div className="navbar__icons">
          <button className="navbar__icon-btn" aria-label="Search products">
            <Image
              src="/images/icons/search.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <button className="navbar__icon-btn" aria-label="Wishlist">
            <Image
              src="/images/icons/wishlist.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <button className="navbar__icon-btn" aria-label="Shopping cart">
            <Image
              src="/images/icons/cart.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <button className="navbar__icon-btn navbar__icon-btn--desktop" aria-label="User profile">
            <Image
              src="/images/icons/profile.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden="true"
            />
          </button>
          <div className="navbar__lang navbar__lang--desktop">
            <span className="navbar__lang-text">ENG</span>
            <Image
              src="/images/icons/chevron-down.svg"
              alt=""
              width={16}
              height={16}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation Menu */}
      <nav
        className={`navbar__menu${mobileMenuOpen ? " navbar__menu--open" : ""}`}
        aria-label="Main navigation"
      >
        <ul className="navbar__menu-list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label} className="navbar__menu-item">
              <a href={href} className="navbar__menu-link">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
