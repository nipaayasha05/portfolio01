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
    <div className="   container mx-auto    ">
      <p className="text-4xl text-sky-100 font-bold text-center py-5">
        Contact
      </p>
      <div className="flex gap- text-white flex-col sm:flex-row   ">
        <div className="flex w-10/10 mb-20  flex-col sm:flex-row text-xl rounded-xl bg-linear-to-r from-slate-900 to-slate-800   shadow-xl border border-slate-800 items-center md:p-5 p-5  gap-7 ">
          <div className=" space-y-5 py-5 flex-">
            <div className="flex 0transform transition duration-300 hover:scale-105 border rounded-xl p-5 items-center justify-center gap-2">
              <p className="bg-gray-800 rounded-full p-2">
                <MdEmail size={24} color="gray" />
              </p>
              <div className=" ">
                <p className="font-bold">Email :</p>
                <div className=" "> mst.ayashakter05@gmail.com</div>
              </div>
            </div>
            <div className="flex transform transition duration-300 hover:scale-105 items-center border rounded-xl p-5 justify-center gap-2">
              <p className="bg-gray-800 rounded-full p-2">
                <FaPhone size={24} color="gray" />
              </p>
              <div className="flex items-start justify-start mr-9">
                <p className="font-bold">Phone :</p>
                <div className=" "> +8801763887747</div>
              </div>
            </div>
          </div>
          <div className=" py-5   transform transition duration-300 hover:scale-105  flex-1">
            <div className="border rounded-xl p-5 m-2 ">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <label className="pb-2">Name</label> <br />
                <input
                  type="text"
                  name="from_name"
                  className="border p-2 border-white mt-2 w-full h-10 rounded-md"
                />
                <br />
                <label>Email</label> <br />
                <input
                  type="email"
                  name="from_email"
                  className="border p-2 border-white mt-2 w-full h-10 rounded-md"
                />
                <br />
                <label>Message</label> <br />
                <textarea
                  name="message"
                  className="border p-2 border-white mt-2 w-full h-32 rounded-md"
                />{" "}
                <br />
                <input
                  type="submit"
                  value="Send"
                  className="btn hover:from-violet-700 hover:to-fuchsia-500 border-none btn-block text-white  bg-gradient-to-r from-violet-500  to-fuchsia-400"
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
