import React from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

//import "./ContactUs.css";

const ContactCard=()=> {
  const sendEmail=e=> {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cm1sxnv",
        "template_o3xsjln",
        e.target,
        "WHgGEbicS-hDOuHEa"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Your Message Sent Successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Message not Sent. Try again");
        }
        
      );
      e.target.reset()
  }

  return (
    <div className="container ">
      <h3 className=" text-center">       
        Message to HF Consultancy
      </h3>
      <form className="contact-form" onSubmit={sendEmail}>
        {/* <input type="hidden" name="contact_number" /> */}
        <label
          htmlFor="exampleFormControlInput1"
          className="form-label text-light"
        >
          Name
        </label>
        <input
          type="text"
          name="user_name"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="your name"
          required
        />
        <div className="">
          <label
            htmlFor="exampleFormControlInput2"
            className="form-label text-light"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="youremail@example.com"
            required
          />
        </div>
        <div className="">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-light"
          >
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="15"
            name="message"
            placeholder="your Message"
            required
          />
          <input type="submit" value="Send" className="btn reg-btn mb-2 w-100" />
        </div>
      </form>
    </div>
  );
}

export default ContactCard;
