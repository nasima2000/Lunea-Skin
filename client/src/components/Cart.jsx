
import { Link } from "react-router-dom";

const Cart = ({ cartItems, setCartItems }) => {

  // Calculate Subtotal
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * (product.quantity || 1),
    0
  );

  // Remove Product
  const removeProduct = (id) => {
    setCartItems(cartItems.filter((product) => product.id !== id));
  };

  // Increase Quantity
  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((product) =>
        product.id === id
          ? { ...product, quantity: (product.quantity || 1) + 1 }
          : product
      )
    );
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max((product.quantity || 1) - 1, 1) }
          : product
      )
    );
  };

  return (
    <section className="min-h-screen bg-[#F8F3E9] px-4 py-12 sm:px-6 sm:py-16">

      <div className="mx-auto max-w-6xl">

        <h1 className="mb-10 text-center font-serif text-3xl text-[#46502F] sm:text-4xl">
          Your Shopping Cart
        </h1>

        {cartItems.length === 0 ? (

          <div className="py-16 text-center">

            <p className="mb-6 text-[#77756D]">
              Your cart is currently empty.
            </p>

            <Link
              to="/shop"
              className="inline-block rounded-full bg-[#46502F] px-8 py-3 text-sm text-white transition hover:bg-[#68734A]"
            >
              Continue Shopping
            </Link>

          </div>

        ) : (

          <div className="grid gap-10 lg:grid-cols-3">

            {/* Cart Products */}
            <div className="space-y-5 lg:col-span-2">

              {cartItems.map((product) => (

                <div
                  key={product.id}
                  className="flex flex-col gap-5 rounded-2xl border border-[#E8DDCC] bg-[#FBF7EF] p-4 sm:flex-row sm:items-center"
                >

                  {/* Product Image */}
                  <div className="h-28 w-full rounded-xl bg-[#F1EAE0] p-3 sm:w-28">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain"
                    />
                  </div>

                  {/* Product Information */}
                  <div className="flex-1">

                    <h2 className="font-serif text-lg text-[#46502F]">
                      {product.name}
                    </h2>

                    <p className="mt-2 text-sm text-[#77756D]">
                      ${product.price}.00
                    </p>

                  </div>

                  {/* Quantity */}
                  <div className="flex items-center gap-3">

                    <button
                      type="button"
                      onClick={() => decreaseQuantity(product.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8CEBD] text-[#46502F]"
                    >
                      -
                    </button>

                    <span className="text-sm text-[#46502F]">
                      {product.quantity || 1}
                    </span>

                    <button
                      type="button"
                      onClick={() => increaseQuantity(product.id)}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-[#D8CEBD] text-[#46502F]"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeProduct(product.id)}
                    className="text-sm text-red-700 transition hover:text-red-900"
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            {/* Order Summary */}
            <div className="h-fit rounded-2xl border border-[#E8DDCC] bg-[#FBF7EF] p-6">

              <h2 className="font-serif text-xl text-[#46502F]">
                Order Summary
              </h2>

              <div className="mt-6 flex justify-between text-sm text-[#77756D]">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="mt-4 flex justify-between border-t border-[#E8DDCC] pt-4 text-sm text-[#46502F]">
                <span>Total</span>
                <span className="font-semibold">
                  ${subtotal.toFixed(2)}
                </span>
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-full bg-[#46502F] py-3 text-sm text-white transition hover:bg-[#68734A]"
              >
                Checkout
              </button>

              <Link
                to="/shop"
                className="mt-4 block text-center text-sm text-[#77756D] underline underline-offset-4"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        )}

      </div>

    </section>
  );
};

export default Cart;
