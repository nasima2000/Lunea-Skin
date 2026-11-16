

const SectionInformation = () => {
  return (
    <div>
     
    <section className="w-full bg-[#EAE4D8] px-6 py-20 md:px-12 lg:py-28">

      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">

          <div>
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.25em] text-[#8B805D]">
              Your Skin Deserves Better
            </p>

            <h2 className="max-w-xl font-serif text-4xl leading-tight text-[#46502D] sm:text-5xl md:text-6xl">
              Give Your Skin the Care It Truly Deserves.
            </h2>
          </div>

          <div className="lg:pl-10">
            <p className="text-lg leading-8 text-[#64664F]">
              Healthy-looking skin starts with the right care.
              From deep hydration to daily protection, choosing
              the right skincare essentials can transform the
              way your skin looks and feels.
            </p>

            <p className="mt-5 text-base leading-7 text-[#77745E]">
              Discover how simple, consistent skincare can help
              your skin feel nourished, refreshed, and naturally radiant.
            </p>
          </div>

        </div>

        {/* Product Benefits */}
        <div className="mt-20 border-t border-[#CFC6B5] pt-10">

          <h3 className="mb-10 font-serif text-3xl text-[#46502D] md:text-4xl">
            Hydrate. Brighten. Protect.
          </h3>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">

            <div>
              <span className="text-sm tracking-widest text-[#A18C65]">
                01
              </span>

              <h4 className="mt-4 font-serif text-2xl text-[#46502D]">
                Deep Hydration
              </h4>

              <p className="mt-4 leading-7 text-[#64664F]">
                Hyaluronic Acid helps attract and retain moisture,
                leaving your skin feeling hydrated, smoother,
                and more supple.
              </p>
            </div>

            <div>
              <span className="text-sm tracking-widest text-[#A18C65]">
                02
              </span>

              <h4 className="mt-4 font-serif text-2xl text-[#46502D]">
                Radiant Glow
              </h4>

              <p className="mt-4 leading-7 text-[#64664F]">
                Vitamin C helps brighten the appearance of dull skin
                and improve the look of uneven skin tone.
              </p>
            </div>

            <div>
              <span className="text-sm tracking-widest text-[#A18C65]">
                03
              </span>

              <h4 className="mt-4 font-serif text-2xl text-[#46502D]">
                Daily Protection
              </h4>

              <p className="mt-4 leading-7 text-[#64664F]">
                SPF 50 sunscreen helps protect your skin from harmful
                UV rays and premature signs of skin aging.
              </p>
            </div>

          </div>
        </div>

        {/* Closing Message */}
        <div className="mt-20 rounded-2xl bg-[#46502D] px-6 py-12 text-center md:px-12 md:py-16">

          <h3 className="font-serif text-3xl text-[#FFF8EF] md:text-5xl">
            Make Your Skin a Priority.
          </h3>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#EAE4D8]">
            Discover the essentials your skincare routine has been missing
            and give your skin the attention it deserves.
          </p>

        </div>

      </div>
    </section>
  );

      
    </div>
  )
}

export default SectionInformation
