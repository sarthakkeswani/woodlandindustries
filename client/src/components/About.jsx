import { Typography } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import home from "../assets/home.jpg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import logo from "../assets/logo.png"
function About() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center bg-[#F3DEBA] p-10 pt-24"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Typography variant="h1" className="mt-8 text-[#675D50]">
        About Us
      </Typography>
      <div className="flex flex-col items-center justify-evenly">
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly mx-10 px-10 lg:w-full bg-white my-10 rounded-2xl p-6">
        <img className="w-[40vw] lg:w-[100vh] h-[30vh] bg-[#ABC4AA]  rounded-full " src={logo} alt="Ok" />
        <Typography className="my-10 lg:ml-16" variant="h4">
          Founded in 2008, Woodland Industries started humbly with a passionate
          team of 8 to 10 individuals and has since grown into a dynamic
          workforce of 30-35 dedicated professionals. At our peak in 2015-18,
          our team expanded to over 40 members as we managed maximum orders.
        </Typography>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly mx-10 px-10 lg:w-full bg-white my-10 rounded-2xl p-6">
        <Typography className="my-10 lg:mr-16" variant="h4">
          Our office houses an expert team of eight individuals, while the
          remainder of our staff comprises skilled workers who bring our
          products to life. We source high-quality wood from regulated suppliers
          in Uttar Pradesh. The raw wood is processed in-house to create planks,
          the first step in our manufacturing process. These planks, which we
          can also sell separately, are then crafted into specific shapes and
          assembled into the final products. Each piece is finished to
          perfection before being billed and dispatched for transport.
        </Typography>
        <img className="w-[100vw] h-[40vh] imgClass" src={ home2} alt="ok" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly mx-10 px-10 lg:w-full bg-white my-10 rounded-2xl p-6">
        <img className="w-[100vw] h-[40vh] imgClass" src={home1} alt="ok" />
        <Typography className="my-10 lg:ml-16" variant="h4">
          We have always believed in treating our workers fairly, providing them
          with comfortable accommodation within our factory premises and
          managing all their expenses.
        </Typography>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly mx-10 px-10 lg:w-full bg-white my-10 rounded-2xl p-6">
        <Typography className="my-10 lg:mr-16" variant="h4">
          Our philosophy at Woodland Industries is simple: Quality over
          Quantity. We take the time needed to deliver only the best products.
          Our wooden drums, crafted with precision, are robust and designed for
          damage-free transportation.
        </Typography>
        <img className="w-[100vw] h-[40vh] imgClass" src={home} alt="ok" />
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly mx-10 px-10 lg:w-full bg-white my-10 rounded-2xl p-6">
        <img className="w-[100vw] h-[40vh] imgClass" src={home3} alt="ok" />
        <Typography className="my-10 lg:ml-16" variant="h4">
          Over the years, Woodland Industries has become a symbol of reliability
          and commitment. Our journey continues, driven by the same passion that
          started it all - to deliver excellence in every product. Join us in
          this journey as we continue to craft quality into every piece of wood.
        </Typography>
      </div>
      </div>
    </motion.div>
  );
}

export default About;
