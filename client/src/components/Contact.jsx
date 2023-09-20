import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [form, setForm] = useState({});
  const [success, setSuccess] = useState(false);

  const handleSuccess = () => setSuccess(!success);

  const handleForm = (e) => {
    console.log(e.target.value, e.target.name);
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="flex flex-col items-center justify-center p-10 pt-24"
    >
      {success && (
        <div
          class="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md w-full"
          role="alert"
        >
          <div class="flex">
            <div class="py-1">
              <svg
                class="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p class="font-bold">Thank you for contacting us.</p>
              <p class="text-sm">
                Your details have been successfully submitted and we will reach
                out to you in no time.
              </p>
            </div>
          </div>
        </div>
      )}
      <Typography variant="h1" className="my-1 text-[#675D50]">
        Get in Touch with Us
      </Typography>
      <Typography className=" font-semibold mx-10 p-4" variant="lead">
        Have questions, inquiries, or looking to place an order? Our team is
        here to assist you. Reach out to us through the provided contact details
        or the convenient online form. We value your feedback and are committed
        to delivering exceptional customer service. Let's connect and explore
        how Woodland Industries can meet your wooden product needs.
      </Typography>
      <Card color="transparent" shadow={false}>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-4 flex flex-col gap-6">
            <Input
              required
              size="lg"
              name="username"
              onChange={handleForm}
              label="Name"
            />
            <Input
              required
              type="email"
              onChange={handleForm}
              name="email"
              size="lg"
              label="Email"
            />
            <Input
              required
              type="tel"
              onChange={handleForm}
              name="phno"
              maxLength="12"
              size="lg"
              label="Phone Number"
            />
            <Textarea
              onChange={handleForm}
              name="message"
              size="lg"
              label="Message"
            />
          </div>
          {/* <DialogCustomAnimation/> */}
          <Button
            onClick={handleSuccess}
            type="submit"
            color="brown"
            className="mt-6 bg-[#675D50]"
            fullWidth
          >
            Submit
          </Button>
        </form>
      </Card>
    </motion.div>
  );
}

export default Contact;
