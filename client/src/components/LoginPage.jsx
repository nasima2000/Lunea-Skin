
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <main className="min-h-screen bg-[#FBF7EF] px-4 py-16 sm:px-6">

      <div className="mx-auto max-w-md">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="text-xs tracking-[0.3em] text-[#77756D]">
            WELCOME BACK
          </p>

          <h1 className="mt-4 font-serif text-4xl text-[#46502F] sm:text-5xl">
            Log In
          </h1>

          <p className="mt-4 text-sm text-[#77756D]">
            Welcome back to your skincare journey.
          </p>
        </div>

        {/* Login Form */}
        <form className="rounded-2xl border border-[#E8DDCC] bg-white p-6 shadow-sm sm:p-8">

          {/* Email */}
          <div className="mb-6">
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
          <div className="mb-4">
            <label
              htmlFor="password"
              className="mb-2 block text-sm text-[#46502F]"
            >
              Password
            </label>

            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-[#E8DDCC] bg-[#FBF7EF] px-4 py-3 text-sm outline-none transition focus:border-[#46502F]"
            />
          </div>

          {/* Forgot Password */}
          <div className="mb-8 text-right">
            <button
              type="button"
              className="text-xs text-[#77756D] underline underline-offset-4 hover:text-[#46502F]"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-full bg-[#46502F] py-3.5 text-sm tracking-wider text-white transition hover:bg-[#68734A] active:scale-95"
          >
            LOG IN
          </button>

          {/* Create Account */}
          <p className="mt-8 text-center text-sm text-[#77756D]">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-medium text-[#46502F] underline underline-offset-4"
            >
              Create Account
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

export default LoginPage;
