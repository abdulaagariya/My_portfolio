import React, { useRef, useState } from "react"; // Import useState
import emailjs from "emailjs-com";
import { BsArrowRight } from "react-icons/bs";
import { RiSendPlaneFill } from "react-icons/ri";

const Contact = () => {
  const form = useRef();
  const [sent, setSent] = useState(false); // State to track whether the email was sent

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit button clicked");
   
    try {
      const result = await emailjs.sendForm(
        "Service_ID",
        "template_ID",
        form.current,
        "Your_public_key"
      );
      console.log(result.text);
      setSent(true); // Update the sent state to true
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <div id="contact" className="container m-auto mt-16">

      {/* heading */}
      <div 
      // data-aos="fade-up"
       className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Contact
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
        <h1 className="text-4xl font-bold sm:text-2xl">You Need</h1>
        <p className=" text-gray-700 font-medium w-[100%]">
        Beautiful design for your website leave a request
        </p>
      </div>

      <div className="right flex-1">

        
        <form
          ref={form}
          onSubmit={handleSubmit}
          data-aos="zoom-in"
          className="flex justify-center items-center flex-col gap-5 w-[70%] md:w-[90%] sm:w-[85%] mx-auto"

        >
          <input type="text" name="user_name" className="user" placeholder="Name" />
          <input type="text" name="user_email" className="user" placeholder="Email" />
          <textarea name="message" className="user" placeholder="Message" />
          <input type="submit" value="Send" className="button" />

          {/* Show a message after sending */}
          {sent && <p>Email sent successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
