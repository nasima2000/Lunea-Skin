
const products = [
  {
    id: 1,
    name: "Hydrating Face Toner",
    image: "/Images/product-1.png",
      price: 18.99,
  },
  {
    id: 2,
    name: "Vitamin C Serum",
    image: "/Images/product-2.png" ,
      price:24.99,
  },
  {
    id: 3,
    name: "Hyaluronic Acid Serum",
    image: "/Images/product-3.png",
      price:22.99,
  },
  {
    id: 4,
    name: "Night Repair Cream",
    image:"/Images/product-4.png",
      price:19.99,
  },
  {
    id: 5,
    name: "SPF 50 Sunscreen",
    image: "/Images/product-5.png",
      price:21.99,
  },
  {
    id: 6,
    name: "Eye Cream",
    image:  "/Images/product-6.png",
      price: 23.99,
  },
];










function SectionHome() {
  return (
    <div>
       <section className="w-full bg-[#FFF8EF] px-4 py-12">
        

      

        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4F5B2C]">
            Our Best Sellers
          </h2>

          <p className="mt-2 text-[#6B7048]">
            Radiant skin, naturally
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

       {products.map((product) => (
    <div key={product.id}>
      <img
        src={product.image}
        alt={product.name}
       className="w-full h-64 object-contain p-4 transition duration-500 group-hover:scale-105"
      />

      <h3 className="px-4 py-4 text-center font-medium text-[#4F5B2C]">
       {product.name}</h3>
      <p className="pb-4 text-center font-semibold text-[#4F5B2C]">${product.price}

        <div className="flex justify-center gap-1 pb-4 text-[#C49A45]">
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span>
  <span>★</span> 
  <span>(4,8)</span> 
  
  






</div>
      </p>
      
    </div>
  ))}

</div>

    

    </section>






    </div>
  )
}

export default SectionHome
