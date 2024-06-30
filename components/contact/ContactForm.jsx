import { contactForm } from "@/lib/contentful/contactForm";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const notifySuccess = () => {
    toast.success("Form Submitted", {
      duration: 4000,
      position: "top-center",
    });
  };
  const notifyError = () => {
    toast.error("An unexpected error occured! Please try again.", {
      duration: 4000,
      position: "top-center",
    });
  };
  const notifyWarning = () => {
    toast.promise("Please fill all the details.", {
      duration: 4000,
      position: "top-center",
    });
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      notifyWarning();
    } else {
      const sendData = { name, email, message };
      const response = await contactForm(sendData);
      if (response.status == "OK") {
        notifySuccess();
      } else {
        notifyError();
      }
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="row">
        <div className="col-6">
          <Toaster />

          <div className="single-input">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="What's your name?"
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="col-6">
          <div className="single-input">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="What's your email?"
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="I would like to get in touch with you..."
              cols="30"
              rows="10"
              required
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            ></textarea>
          </div>
        </div>
      </div>
      <div className="btn-area text-center">
        <button type={"submit"} className="cmn-btn">
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
