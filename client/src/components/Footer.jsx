

const Footer = () => {
  return (
<div>
    
     <footer className="w-full bg-[#46502D] px-6 py-14 text-[#FFF8EF]">

      <div className="mx-auto max-w-7xl">

        {/* Brand */}
        <div className="mb-10 max-w-md">
          <h2 className="font-serif text-3xl">
            Lunéa Skin
          </h2>

          <p className="mt-4 leading-7 text-[#EAE4D8]">
            Your beauty, your glow. Discover skincare essentials
            for your daily routine.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-1 gap-10 border-t border-[#747B59] py-10 sm:grid-cols-2 md:grid-cols-3">

          <div>
            <h3 className="mb-5 font-serif text-xl">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-[#EAE4D8]">
              <li><a href="/" className="transition hover:text-white">Home</a></li>
              <li><a href="/shop" className="transition hover:text-white">Shop</a></li>
              <li><a href="/about" className="transition hover:text-white">About Us</a></li>
              <li><a href="/contact" className="transition hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-xl">
              Customer Care
            </h3>

            <ul className="space-y-3 text-sm text-[#EAE4D8]">
              <li><a href="/faq" className="transition hover:text-white">FAQs</a></li>
              <li><a href="/shipping" className="transition hover:text-white">Shipping & Returns</a></li>
              <li><a href="/privacy" className="transition hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-serif text-xl">
              Get in Touch
            </h3>

            <p className="text-sm leading-7 text-[#EAE4D8]">
              Have questions about your skincare routine?
              We'd love to hear from you.
            </p>

            <a
              href="/contact"
              className="mt-4 inline-block border-b border-[#D8C9A7] pb-1 text-sm transition hover:text-white"
            >
              Contact Us →
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-[#747B59] pt-6 text-center">
          <p className="text-xs text-[#EAE4D8]">
            © 2026 Lunéa Skin. All rights reserved.
          </p>
        </div>

      </div>
    </footer>





    </div>
  )
}

export default Footer
