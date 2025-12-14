import React, { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

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
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  return (
    <div className="  container mx-auto  pb-5  ">
      <p className="text-3xl sm:text-4xl text-blue-200 font-bold text-center py-5">
        Contact
      </p>
      <div className="flex mt-5 mb-5 text-sky-100 flex-col sm:flex-row   ">
        <div className="flex w-10/10 mb-  flex-col sm:flex-row  rounded-xl bg-linear-to-r from-slate-900 to-slate-800   shadow-xl border border-slate-800 items-center md:p-5 p-5  gap-7 ">
          <div className="  space-y-5 py-5   flex-">
            <div className="flex transform sm:m-5 transition duration-300 hover:scale-105 w-[345px] border border-blue-100 rounded-xl p-5 items-center justify-center gap-2">
              <p className="bg-slate-800 rounded-full p-2">
                <MdEmail size={24} color="white" />
              </p>
              <div className=" sm:text-lg">
                <p className="font-bold   ">Email:</p>
                <div className=" "> mst.ayashakter05@gmail.com</div>
              </div>
            </div>
            <div className="flex sm:m-5 transform transition duration-300 hover:scale-105 items-center border border-blue-100 rounded-xl p-5 justify-center gap-2">
              <p className="bg-gray-800 rounded-full p-2">
                <FaPhone size={24} color="white" />
              </p>
              <div className="flex items-start sm:text-lg justify-start mr-9">
                <p className="font-bold">Phone:</p>
                <div className=" "> +8801763887747</div>
              </div>
            </div>
          </div>
          <div className=" sm:py-5  pb-5 sm:pb-0 transform transition duration-300 hover:scale-105  flex-1">
            <div className="border border-blue-100  rounded-xl border-box px-3   py-3   sm:p-5   sm:m-2 ">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-2 sm:space-y-4"
              >
                <label className="pb-2">Name</label> <br />
                <input
                  type="text"
                  name="from_name"
                  className="border p-2 border-blue-100  mt-2 w-[320px]  sm:w-full h-10 rounded-md"
                />
                <br />
                <label>Email</label> <br />
                <input
                  type="email"
                  name="from_email"
                  className="border p-2 border-blue-100  mt-2 w-full h-10 rounded-md"
                />
                <br />
                <label>Message</label> <br />
                <textarea
                  name="message"
                  className="border p-2 border-blue-100  mt-2 w-full h-32 rounded-md"
                />{" "}
                <br />
                <input
                  type="submit"
                  value="Send"
                  className="btn hover:from-blue-500 hover:to-blue-500 border-0 outline-none shadow-none focus:outline-none focus:shadow-none  btn-block text-white  bg-gradient-to-r from-blue-500  to-blue-400"
                />
                {/* dkokedq */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
