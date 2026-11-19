
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <main className="min-h-screen bg-[#FBF7EF] px-4 py-16 sm:px-6">

      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.3em] text-[#77756D]">
            JOIN OUR COMMUNITY
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#46502F] sm:text-5xl">
            Create Account
          </h1>

          <p className="mt-4 text-sm text-[#77756D]">
            Begin your journey to beautiful, healthy skin.
          </p>
        </div>

        {/* Sign Up Form */}
        <form className="rounded-2xl border border-[#E8DDCC] bg-white p-6 shadow-sm sm:p-8">

          {/* Full Name */}
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="mb-2 block text-sm text-[#46502F]"
            >
              Full Name
            </label>

            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-[#E8DDCC] bg-[#FBF7EF] px-4 py-3 text-sm outline-none transition focus:border-[#46502F]"
            />
          </div>

          {/* Email */}
          <div className="mb-5">
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-[#46502F]"
            >
              Email Address
            </label>

            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-[#E8DDCC] bg-[#FBF7EF] px-4 py-3 text-sm outline-none transition focus:border-[#46502F]"
            />
          </div>

          {/* Password */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-[#46502F]"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Create a password"
              className="w-full rounded-lg border border-[#E8DDCC] bg-[#FBF7EF] px-4 py-3 text-sm outline-none transition focus:border-[#46502F]"
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-7">
            <label
              htmlFor="confirmPassword"
              className="mb-2 block text-sm text-[#46502F]"
            >
              Confirm Password
            </label>

            <input
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              className="w-full rounded-lg border border-[#E8DDCC] bg-[#FBF7EF] px-4 py-3 text-sm outline-none transition focus:border-[#46502F]"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-[#46502F] py-3.5 text-sm tracking-wider text-white transition hover:bg-[#68734A] hover:shadow-md active:scale-95"
          >
            CREATE ACCOUNT
          </button>

          {/* Login Link */}
          <p className="mt-8 text-center text-sm text-[#77756D]">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-[#46502F] underline underline-offset-4"
            >
              Log In
            </Link>
          </p>

        </form>

        {/* Back to Shop */}
        <div className="mt-8 text-center">
          <Link
            to="/shop"
            className="text-sm text-[#77756D] transition hover:text-[#46502F]"
          >
            ← Continue Shopping
          </Link>
        </div>

      </div>
    </main>
  );
};

export default SignUp;
