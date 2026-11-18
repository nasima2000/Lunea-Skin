
import { Link } from "react-router-dom";

const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Hydrating Face Toner",
      size: "250ml",
      price: 24,
      image: "/Images/product-1.png",
      quantity: 1,
    },
    {
      id: 2,
      name: "Vitamin C Serum",
      size: "30ml",
      price: 32,
      image: "/Images/product-2.png",
      quantity: 1,
    },
  ];

  const subtotal = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <main className="min-h-screen bg-[#FBF7EF]">

      {/* Cart Header */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="text-center">
          <p className="text-xs tracking-[0.3em] text-[#77756D]">
            YOUR SELECTION
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#46502F] sm:text-5xl">
            Shopping Bag
          </h1>

          <p className="mt-4 text-sm text-[#77756D]">
            Your skincare essentials, all in one place.
          </p>
        </div>

        {/* Cart Content */}
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* Products */}
          <div className="space-y-6 lg:col-span-2">

            {products.map((product) => (
              <div
                key={product.id}
                className="flex flex-col gap-5 rounded-2xl border border-[#E8DDCC] bg-white p-5 sm:flex-row sm:items-center"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-36 w-full rounded-xl bg-[#F1EAE0] object-contain p-4 sm:w-36"
                />

                <div className="flex-1">
                  <h3 className="font-serif text-lg text-[#46502F]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm text-[#77756D]">
                    {product.size}
                  </p>

                  <p className="mt-3 font-medium text-[#46502F]">
                    ${product.price}.00
                  </p>
                </div>

                <div className="flex items-center justify-between sm:flex-col sm:items-end sm:gap-5">
                  <div className="flex items-center gap-4 rounded-full border border-[#E8DDCC] px-4 py-2">
                    <button className="text-[#46502F]">−</button>
                    <span className="text-sm">{product.quantity}</span>
                    <button className="text-[#46502F]">+</button>
                  </div>

                  <button className="text-xs text-[#77756D] underline underline-offset-4 hover:text-[#46502F]">
                    Remove
                  </button>
                </div>
              </div>
            ))}

            <Link
              to="/shop"
              className="inline-block pt-3 text-sm text-[#46502F] underline underline-offset-4"
            >
              ← Continue Shopping
            </Link>
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-[#E8DDCC] bg-white p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#46502F]">
              Order Summary
            </h2>

            <div className="mt-8 flex justify-between border-b border-[#E8DDCC] pb-5 text-sm">
              <span className="text-[#77756D]">Subtotal</span>
              <span className="text-[#46502F]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex justify-between border-b border-[#E8DDCC] py-5 text-sm">
              <span className="text-[#77756D]">Shipping</span>
              <span className="text-[#77756D]">Calculated at checkout</span>
            </div>

            <div className="mt-6 flex justify-between">
              <span className="font-medium text-[#46502F]">Total</span>
              <span className="font-medium text-[#46502F]">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="mt-8 w-full rounded-full bg-[#46502F] py-4 text-sm tracking-wider text-white transition-all duration-300 hover:bg-[#68734A] hover:shadow-md active:scale-95"
            >
              PROCEED TO CHECKOUT
            </button>

            <p className="mt-5 text-center text-xs leading-6 text-[#77756D]">
              A little self-care goes a long way.
              Thank you for choosing Lunéa Skin.
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default Cart;
