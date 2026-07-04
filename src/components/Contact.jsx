import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaWhatsapp } from "react-icons/fa6"; // Added WhatsApp icon
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_tub25ft", "template_q4vi23f", form.current, {
        publicKey: "iPhPRq5eF7TUB9Ggs",
      })
      .then(
        () => {
          form.current.reset();
          toast.success("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Message not sent!");
        },
      );
  };

  useEffect(() => {
    document.title = "Portfolio | Contact";
  }, []);

  return (
    <div className="max-w-7xl container mx-auto px- pb-16 pt-10">
      {/* Section Header */}
      <div className="flex items-center gap-4 mb-12">
        <div className="flex-1 h-[1px] bg-slate-800"></div>
        <h2 className="text-3xl sm:text-4xl text-blue-200 text-center font-bold tracking-widest uppercase">
          Contact Me
        </h2>
        <div className="flex-1 h-[1px] bg-slate-800"></div>
      </div>

      {/* Main Container */}
      <div className=" mx-auto rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 p-6 sm:p-10 shadow-2xl border border-slate-800/60 text-sky-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          {/* Left Side: Contact Info Info Cards */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-blue-300">
                Let's Connect
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Have a project in mind or looking to hire? Feel free to reach
                out through any of these channels or drop a message here!
              </p>
            </div>

            <div className="space-y-4 pt-4">
              {/* Email Card */}
              <div className="flex items-center gap-4 border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 shadow-md">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <MdEmail size={24} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                    Email
                  </p>
                  <a
                    href="mailto:mst.ayashakter05@gmail.com"
                    className="text-sm sm:text-base hover:text-blue-300 transition-colors break-all"
                  >
                    mst.ayashakter05@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="flex items-center gap-4 border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 shadow-md">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  <FaPhone size={22} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                    Phone
                  </p>
                  <a
                    href="tel:+8801763887747"
                    className="text-sm sm:text-base hover:text-blue-300 transition-colors"
                  >
                    +8801763887747
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="flex items-center gap-4 border border-slate-800 bg-slate-900/40 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-300 hover:scale-[1.02] hover:border-blue-500/40 shadow-md">
                <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400">
                  {/* Import loop-e 'IoLocationSharp' use korte paro from 'react-icons/io5' */}
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
                    Location
                  </p>
                  <p className="text-sm sm:text-base text-slate-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Message Form */}
          <div className="border border-slate-800 bg-slate-900/20 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-inner flex flex-col justify-between">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-slate-300 block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  name="from_name"
                  placeholder="your Name..."
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-lg h-11 px-4 text-sky-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 block mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  name="from_email"
                  placeholder="example@email.com"
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-lg h-11 px-4 text-sky-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-300 block mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Type your message here..."
                  className="w-full bg-slate-900/60 border border-slate-800 rounded-lg h-32 p-4 text-sky-100 placeholder-slate-600 focus:outline-none focus:border-blue-500/80 focus:ring-1 focus:ring-blue-500/30 transition-all text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="group mt-6 text-center hover:from-blue-600 hover:to-sky-500 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 rounded-lg bg-gradient-to-r from-sky-500 to-blue-600 px-5 py-2 text-white  w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
