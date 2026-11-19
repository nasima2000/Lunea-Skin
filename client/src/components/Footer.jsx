
import {
  SiInstagram,
  SiFacebook,
  SiPinterest,
  SiTiktok,
} from "react-icons/si";

const Footer = () => {
  const linkStyle =
    "inline-block border-b border-[#B8B2A5]/40 pb-1 text-[#D6D0C4] transition-all duration-300 hover:border-[#E8D8B8] hover:text-[#E8D8B8]";

  return (
    <footer className="w-full bg-[#46502D] px-6 py-14 text-[#FFF8EF]">
      <div className="mx-auto max-w-7xl">

        {/* Brand */}
        <div className="mb-12 flex items-center gap-5">

          {/* Logo */}
          <img
            src="/Images/Logo.png"
            alt="Lunéa Skin Logo"
            className="h-20 w-20 shrink-0 rounded-full bg-[#FFF8EF] object-contain p-2"
          />

          {/* Brand Text */}
          <div className="max-w-md">
            <h2 className="font-serif text-3xl tracking-wide">
              Lunéa Skin
            </h2>

            <p className="mt-3 text-sm leading-7 text-[#EAE4D8]">
              Your beauty, your glow. Discover skincare essentials
              for your daily routine.
            </p>

            {/* Social Media */}
            <div className="mt-5 flex items-center gap-4">
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <SiInstagram size={19} className="text-[#E8A0B5]" />
              </a>

              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <SiFacebook size={19} className="text-[#8DB8E8]" />
              </a>

              <a
                href="https://pinterest.com"
                aria-label="Pinterest"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <SiPinterest size={19} className="text-[#E88B8B]" />
              </a>

              <a
                href="https://tiktok.com"
                aria-label="TikTok"
                className="transition duration-300 hover:-translate-y-1 hover:scale-110"
              >
                <SiTiktok size={19} className="text-[#D6D0C4]" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#747B59] py-10 sm:grid-cols-2 md:grid-cols-3">

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 font-serif text-xl text-[#E8D8B8]">
              Quick Links
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="/" className={linkStyle}>Home</a>
              </li>

              <li>
                <a href="/shop" className={linkStyle}>Shop</a>
              </li>

              <li>
                <a href="/about" className={linkStyle}>About Us</a>
              </li>

              <li>
                <a href="/contact" className={linkStyle}>Contact</a>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="mb-6 font-serif text-xl text-[#E8D8B8]">
              Customer Care
            </h3>

            <ul className="space-y-4 text-sm">
              <li>
                <a href="/faq" className={linkStyle}>FAQs</a>
              </li>

              <li>
                <a href="/shipping" className={linkStyle}>Shipping & Returns</a>
              </li>

              <li>
                <a href="/privacy" className={linkStyle}>Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 font-serif text-xl text-[#E8D8B8]">
              Get in Touch
            </h3>

            <p className="text-sm leading-7 text-[#EAE4D8]">
              Have questions about your skincare routine?
              We'd love to hear from you.
            </p>

            <a
              href="/contact"
              className="mt-5 inline-block border-b border-[#D8C9A7] pb-1 text-sm text-[#E8D8B8] transition duration-300 hover:border-white hover:text-white"
            >
              Contact Us →
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#747B59] pt-6 text-center">
          <p className="text-xs tracking-wide text-[#D6D0C4]">
            © 2026 Lunéa Skin. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
