import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "Home", to: "/" },
  { label: "Shop", to: "/shop" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle cx="10.8" cy="10.8" r="6.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="m16 16 4.2 4.2" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        d="M5.5 8.5h13l1 12h-15l1-12Z"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d="M9 9V6a3 3 0 0 1 6 0v3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MenuIcon({ isOpen }) {
  return isOpen ? (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path
        d="m6 6 12 12M18 6 6 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  ) : (
    <svg aria-hidden="true" className="h-6 w-6" fill="none" viewBox="0 0 24 24">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  const closeMenuOnEscape = (event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
      menuButtonRef.current?.focus();
    }
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative z-20 border-b border-[#e9e5dc] bg-[#fbfaf6] text-[#303c31]">
      <div className="mx-auto grid min-h-[5.5rem] max-w-7xl grid-cols-[1fr_auto] items-center px-5 sm:px-8 lg:grid-cols-[1fr_auto_1fr] lg:px-12">
        <Link
          aria-label="Lunéa Skin home"
          className="flex w-fit items-center rounded-sm transition-opacity duration-200 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69765c]"
          onClick={closeMenu}
          to="/"
        >
          <img
            alt="Lunéa Skin"
            className="h-[4.25rem] w-[4.25rem] object-contain"
            src="/Images/Logo.png"
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 lg:flex"
        >
          {navigationLinks.map(({ label, to }) => (
            <Link
              className="py-2 text-sm tracking-[0.12em] text-[#465044] transition-colors duration-200 hover:text-[#879174] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69765c]"
              key={label}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-4 sm:gap-5">
          <div className="hidden items-center gap-5 md:flex">
            <Link
              aria-label="Search products"
              className="rounded-full p-2 text-[#465044] transition-colors duration-200 hover:bg-[#f0efe8] hover:text-[#879174] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69765c]"
              to="/search"
            >
              <SearchIcon />
            </Link>
            <Link
              aria-label="Shopping bag"
              className="rounded-full p-2 text-[#465044] transition-colors duration-200 hover:bg-[#f0efe8] hover:text-[#879174] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69765c]"
              to="/cart"
            >
              <BagIcon />
            </Link>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="rounded-full p-2 text-[#465044] transition-colors duration-200 hover:bg-[#f0efe8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69765c] lg:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            ref={menuButtonRef}
            type="button"
          >
            <MenuIcon isOpen={isMenuOpen} />
          </button>
        </div>
      </div>

      <div
        className={`overflow-hidden border-t border-[#e9e5dc] bg-[#fbfaf6] transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          isMenuOpen
            ? "visible max-h-80 opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
        id="mobile-navigation"
        onKeyDown={closeMenuOnEscape}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-7xl flex-col px-6 py-3 sm:px-8"
        >
          {navigationLinks.map(({ label, to }) => (
            <Link
              className="border-b border-[#eeece5] py-4 text-sm tracking-[0.12em] text-[#465044] transition-colors duration-200 last:border-b-0 hover:pl-1 hover:text-[#879174] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#69765c]"
              key={label}
              onClick={closeMenu}
              to={to}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
