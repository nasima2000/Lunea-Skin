import React from 'react'

function Contact() {
  return (
    <div>
      

    <main className="bg-[#FAF8F3]">

      {/* Contact Hero */}
      <section className="px-6 py-20 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#85866A]">
          We Are Here For You
        </p>

        <h1 className="mb-6 font-serif text-4xl text-[#46502F] md:text-6xl">
          Contact Us
        </h1>

        <p className="mx-auto max-w-2xl leading-8 text-[#77756D]">
          We would love to hear from you. Whether you have a question
          about our products, your order, or simply want to say hello,
          our team is always happy to help.
        </p>
      </section>

      {/* Contact Content */}
      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">

          {/* Contact Information */}
          <div className="flex flex-col justify-center">

            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#85866A]">
              Get In Touch
            </p>

            <h2 className="mb-6 font-serif text-3xl text-[#46502F] md:text-4xl">
              Let's Talk About Your Skin
            </h2>

            <p className="mb-10 leading-8 text-[#77756D]">
              Your skincare journey matters to us. Send us your
              questions or feedback, and we will be glad to hear
              from you.
            </p>

            <div className="space-y-7">

              <div>
                <h3 className="mb-2 font-medium text-[#46502F]">
                  Email
                </h3>
                <p className="text-[#77756D]">
                  Get in touch with us by email.
                </p>
              </div>

              <div>
                <h3 className="mb-2 font-medium text-[#46502F]">
                  Customer Support
                </h3>
                <p className="text-[#77756D]">
                  We are happy to help with your questions.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-7 shadow-sm md:p-10">

            <h2 className="mb-8 font-serif text-2xl text-[#46502F]">
              Send Us a Message
            </h2>

            <form className="space-y-6">

              <div>
                <label className="mb-2 block text-sm text-[#55554D]">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  required
                  className="w-full border border-[#DEDCD2] bg-transparent px-4 py-3 outline-none transition focus:border-[#85866A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#55554D]">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="w-full border border-[#DEDCD2] bg-transparent px-4 py-3 outline-none transition focus:border-[#85866A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#55554D]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What is your message about?"
                  required
                  className="w-full border border-[#DEDCD2] bg-transparent px-4 py-3 outline-none transition focus:border-[#85866A]"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-[#55554D]">
                  Your Message
                </label>
                <textarea
                  rows="5"
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-none border border-[#DEDCD2] bg-transparent px-4 py-3 outline-none transition focus:border-[#85866A]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#46502F] px-6 py-4 text-sm uppercase tracking-widest text-white transition hover:bg-[#606B43]"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>
      </section>

    </main>

    
{/* Social & Contact Bar */}
<div className="mx-auto mt-20 max-w-6xl border border-[#E3E0D6] px-6 py-12 mb-16">

  <div className="mb-10 text-center">
    <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[#85866A]">
      Stay Connected
    </p>

    <h2 className="font-serif text-3xl text-[#46502F] md:text-4xl">
      We'd Love to Hear From You
    </h2>

    <p className="mt-3 text-sm text-[#77756D]">
      Connect with Lunéa Skin through your favorite channel.
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">

    {/* Email */}
    <a
      href="mailto:YOUR_EMAIL"
      className="group flex flex-col items-center gap-3"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDEFE7] text-2xl text-[#46502F] transition group-hover:bg-[#46502F] group-hover:text-white">
        ✉
      </span>
      <span className="font-medium text-[#46502F]">Email</span>
      <span className="text-sm text-[#77756D]">Write to us</span>
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/YOUR_NUMBER"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-3"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDEFE7] text-2xl text-[#46502F] transition group-hover:bg-[#46502F] group-hover:text-white">
        ☎
      </span>
      <span className="font-medium text-[#46502F]">WhatsApp</span>
      <span className="text-sm text-[#77756D]">Chat with us</span>
    </a>

    {/* Facebook */}
    <a
      href="YOUR_FACEBOOK_LINK"
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col items-center gap-3"
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#EDEFE7] text-2xl font-serif text-[#46502F] transition group-hover:bg-[#46502F] group-hover:text-white">
        f
      </span>
      <span className="font-medium text-[#46502F]">Facebook</span>
      <span className="text-sm text-[#77756D]">Follow our brand</span>
    </a>

  </div>
</div>

  



    </div>
  )
}

export default Contact
