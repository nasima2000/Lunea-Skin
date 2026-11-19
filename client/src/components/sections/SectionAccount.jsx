
import { Link } from "react-router-dom";
function SectionAccount() {
  return (
    <section className="w-full bg-[#FFF8EF] px-4 py-20">

      <div className="mx-auto max-w-4xl text-center">

        <h2 className="font-serif text-3xl text-[#4F5B2C] md:text-5xl">
          Your Skincare Journey Starts Here
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-7 text-[#77745E]">
          Join Lunéa Skin and discover a more personalized
          skincare experience.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">


     {/*  Button */}
          <Link
               to="/loginPage"
            className="rounded-full bg-[#4F5B2C] px-10 py-3 text-white transition hover:bg-[#687344]"
              >
               Log In
          </Link>

        <Link
        to="/signup"
          className="rounded-full border border-[#4F5B2C] px-10 py-3 text-[#4F5B2C] transition hover:bg-[#4F5B2C] hover:text-white"
         >
        Create Account
        </Link>

        </div>

      </div>
      
    </section>
    
  );
}

export default SectionAccount;
