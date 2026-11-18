

function ShopHeader() {
  const categories = [
    "All Products",
    "Cleansers",
    "Serums",
    "Moisturizers",
    "Sun Care",
  ];

  return (
    <section className="bg-[#F8F3E9] px-6 py-10 text-center">

      <p className="mb-3 text-xs tracking-[0.3em] text-[#85866A]">
        DISCOVER OUR COLLECTION
      </p>

      <h1 className="mb-3 font-serif text-4xl text-[#46502F] md:text-5xl">
        Our Shop
      </h1>

      <p className="mb-8 text-sm text-[#77756D]">
        Explore our skincare essentials, made for your daily ritual.
      </p>


      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category, index) => (
          <button
            key={category}
            className={`rounded-full border border-[#46502F] px-5 py-2 text-xs transition-colors duration-300
              ${
                index === 0
                  ? "bg-[#46502F] text-white"
                  : "bg-transparent text-[#46502F] hover:bg-[#46502F] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

    </section>
  );
}

export default ShopHeader;
