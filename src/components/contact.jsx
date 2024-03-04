import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSuccess, setIsSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nftchtg", "template_yik5rvs", form.current, {
        publicKey: "2xtScK7c5j30aKnHL",
      })
      .then(
        () => {
          setIsSuccess(true);
          setTimeout(() => {
            setIsSuccess(null);
          }, 3000);
        },
        (error) => {
          console.error(error);
          setIsSuccess(false);
          setTimeout(() => {
            setIsSuccess(null);
          }, 3000);
        }
      );
  };
  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto flex-col flex lg:flex-row">
        <div className="flex-1 flex-col lg:flex-row">
          <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">
            Get in touch
          </h4>
          <h2 className="text-[45px] lg:text-[90px] leading-none mb-12">
            Let's work <br /> together!
          </h2>
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
        >
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="text"
            placeholder="Your name"
            name="from_name"
          />
          <input
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
            type="email"
            placeholder="Your email"
            name="from_email"
          />
          <textarea
            className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
            placeholder="Your message"
            name="message"
          ></textarea>
          <button type="submit" value="Send" className="btn btn-lg">
            Send message
          </button>
        </form>
      </div>
      {isSuccess !== null && (
        <div
          className={`toast toast-end ${
            isSuccess ? "toast-success" : "toast-error"
          }`}
        >
          <div
            className={`alert ${isSuccess ? "alert-success" : "alert-error"}`}
          >
            <span>
              {isSuccess
                ? "Message sent successfully."
                : "Error sending message."}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
