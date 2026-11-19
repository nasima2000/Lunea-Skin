import ShopHeader from "./ShopHeader";
import ShopProducts from "./ShopProducts";
import ShopBanner from "./ShopBanner";

function Shop({ cartItems, setCartItems }) {
  return (
    <div>
      <ShopHeader />
      <ShopProducts
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <ShopBanner />
    </div>
  );
}

export default Shop;