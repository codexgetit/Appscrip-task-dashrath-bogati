"use client";

import Image from "next/image";
import "../../styles/footer.css";

const METTA_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Stories", href: "/stories" },
  { label: "Artisans", href: "/artisans" },
  { label: "Boutiques", href: "/boutiques" },
  { label: "Contact Us", href: "/contact" },
  { label: "EU Compliances Docs", href: "/eu-compliance" },
];

const QUICK_LINKS = [
  { label: "Orders & Shipping", href: "/orders" },
  { label: "Join/Login as a Seller", href: "/seller" },
  { label: "Payment & Pricing", href: "/payment" },
  { label: "Return & Refunds", href: "/returns" },
  { label: "FAQs", href: "/faqs" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

const SOCIAL_LINKS = [
  { icon: "/images/icons/instagram.svg", label: "Instagram", href: "#" },
  { icon: "/images/icons/linkedin.svg", label: "LinkedIn", href: "#" },
];

const PAYMENT_ICONS = [
  { src: "/images/payments/gpay.svg", alt: "Google Pay" },
  { src: "/images/payments/mastercard.svg", alt: "Mastercard" },
  { src: "/images/payments/paypal.svg", alt: "PayPal" },
  { src: "/images/payments/amex.svg", alt: "American Express" },
  { src: "/images/payments/applepay.svg", alt: "Apple Pay" },
  { src: "/images/payments/shoppay.svg", alt: "Shop Pay" },
];

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* ── Top Section: Newsletter + Contact ── */}
      <section className="footer__top" aria-label="Footer newsletter and contact">
        <div className="footer__top-inner">
          {/* Left – Newsletter */}
          <div className="footer__newsletter">
            <h2 className="footer__heading">BE THE FIRST TO KNOW</h2>
            <p className="footer__text">
              Sign up for updates from mettā muse.
            </p>
            <form
              className="footer__form"
              onSubmit={(e) => e.preventDefault()}
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                className="footer__input"
                placeholder="Enter your e-mail..."
                aria-label="Email address"
                required
              />
              <button type="submit" className="footer__button">
                SUBSCRIBE
              </button>
            </form>
          </div>

          {/* Right – Contact & Currency */}
          <div className="footer__right">
            <div className="footer__contact">
              <h2 className="footer__heading">CONTACT US</h2>
              <p className="footer__text">+44 221 133 5360</p>
              <p className="footer__text">
                customercare@mettamuse.com
              </p>
            </div>

            <div className="footer__currency">
              <h2 className="footer__heading">CURRENCY</h2>
              <div className="footer__currency-row">
                <Image
                  src="/images/icons/us-flag.svg"
                  alt="US flag"
                  width={28}
                  height={20}
                />
                <span className="footer__currency-code">&bull; USD</span>
              </div>
              <p className="footer__currency-note">
                Transactions will be completed in Euros and a currency reference
                is available on hover.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="footer__divider" />

      {/* ── Bottom Section: Links, Social, Payments ── */}
      <section className="footer__bottom" aria-label="Footer navigation">
        <div className="footer__bottom-inner">
          {/* Column 1 – mettā muse */}
          <nav className="footer__column" aria-label="mettā muse links">
            <h3 className="footer__column-title">mettā muse</h3>
            <ul className="footer__links">
              {METTA_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 2 – Quick Links */}
          <nav className="footer__column" aria-label="Quick links">
            <h3 className="footer__column-title">QUICK LINKS</h3>
            <ul className="footer__links">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="footer__link">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 – Follow Us + Accepts */}
          <div className="footer__column footer__column--right">
            <div className="footer__social">
              <h3 className="footer__column-title">FOLLOW US</h3>
              <ul className="footer__social-list">
                {SOCIAL_LINKS.map(({ icon, label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="footer__social-link"
                      aria-label={label}
                    >
                      <Image src={icon} alt={label} width={32} height={32} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__payments">
              <h3 className="footer__column-title footer__column-title--accepts">
                mettā muse ACCEPTS
              </h3>
              <ul className="footer__payments-list">
                {PAYMENT_ICONS.map(({ src, alt }) => (
                  <li key={alt}>
                    <Image
                      src={src}
                      alt={alt}
                      width={56}
                      height={32}
                      className="footer__payment-icon"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Copyright ── */}
      <div className="footer__copyright">
        <p>Copyright &copy; 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
