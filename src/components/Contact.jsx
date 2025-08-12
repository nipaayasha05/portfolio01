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
    <div className="   container mx-auto  sm:text-l">
      <p className="text-3xl text-sky-100 font-bold text-center py-5">
        Contact
      </p>
      <div className="flex    text-white flex-col justify- items-center ">
        <div className="flex  mb-20  flex-col sm:flex-row rounded-md bg-gray-700  items-center p-5  w-10/12  justify-center gap-7 ">
          <div className="space-y-5 flex-1 flex flex-col items-center  ">
            <div className="">
              <div className="flex items-start gap-2">
                <div className="bg-gray-50 rounded-full p-2">
                  <MdEmail size={24} color="gray" />{" "}
                </div>
                <div>
                  {" "}
                  <p className="font-bold">Email :</p>
                  <div className=" "> ayashanipa11@gmail.com</div>
                </div>
              </div>
              {/* <div className="ml-10"> ayashanipa11@gmail.com</div> */}
            </div>

            <div>
              <div className="flex -ml-16 items-start gap-2">
                <div className="bg-gray-50 rounded-full p-2">
                  <FaPhone size={22} color="gray" />{" "}
                </div>
                <div>
                  {" "}
                  <p className="font-bold">Phone Number :</p>
                  <div className=" "> 01763887747</div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <label className="pb-2">Name</label> <br />
              <input
                type="text"
                name="from_name"
                className="border border-white mt-2 w-full h-10 rounded-md"
              />
              <br />
              <label>Email</label> <br />
              <input
                type="email"
                name="from_email"
                className="border border-white mt-2 w-full h-10 rounded-md"
              />
              <br />
              <label>Message</label> <br />
              <textarea
                name="message"
                className="border border-white mt-2 w-full h-20 rounded-md"
              />{" "}
              <br />
              <input
                type="submit"
                value="Send"
                className="btn btn-block text-white  bg-gradient-to-r from-violet-500  to-fuchsia-400"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
