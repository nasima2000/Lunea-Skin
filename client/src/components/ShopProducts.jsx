
const products = [
  {
    id: 1,
    name: "Hydrating Face Toner",
    price: 24,
    image: "/Images/product-1.png",
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    price: 32,
    image: "/Images/product-2.png",
  },
  {
    id: 3,
    name: "SPF 50 Sunscreen",
    price: 28,
    image: "/Images/product-3.png",
  },
  {
    id: 4,
    name: "Night Repair Cream",
    price: 36,
    image: "/Images/product-4.png",
  },
  {
    id: 5,
    name: "Hyaluronic Acid Serum",
    price: 30,
    image: "/Images/product-5.png",
  },
  {
    id: 6,
    name: "Eye Cream",
    price: 26,
    image: "/Images/product-6.png",
  },
];

function ShopProducts() {
  return (
    <section className="bg-[#F8F3E9] px-4 py-12 sm:px-6 sm:py-16">

      <div className="mx-auto max-w-7xl">

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-[#E8DDCC] bg-[#FBF7EF] p-3 transition-shadow duration-300 hover:shadow-md sm:p-4"
            >

              {/* Product Image */}
              <div className="aspect-square overflow-hidden rounded-xl bg-[#F1EAE0] p-4 sm:p-5">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />

              </div>

              {/* Product Information */}
              <div className="mt-4 text-center">

                <h3 className="font-serif text-sm text-[#46502F] sm:text-base">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm text-[#77756D]">
                  ${product.price}.00
                </p>

                {/* Add to Cart Button */}
                <button
                  type="button"
                  className="mt-3 rounded-full bg-[#46502F] px-6 py-2.5 text-xs text-white transition-all duration-300 hover:bg-[#68734A] hover:shadow-md active:scale-95"
                >
                  Add to Cart
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default ShopProducts;
