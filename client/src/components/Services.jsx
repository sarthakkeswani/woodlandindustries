import { Typography } from "@material-tailwind/react";
import s1 from "../assets/service-1.jpg";
import s2 from "../assets/service-2.jpg";
import s3 from "../assets/wooden-drums.jpg";
import React from "react";
import { motion } from "framer-motion";
function Services() {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="bg-[#F3DEBA] p-10 pt-24 h-auto"
    >
      <div className="flex flex-col items-center justify-center text-center">
        <Typography variant="h1" className="my-1  text-[#675D50]">
          Services
        </Typography>
        <Typography className=" font-semibold px-20 py-2" variant="lead">
          Woodland Industries offers top-quality PVC compounds and durable
          wooden products, including drums and pallets. Our services include
          standard and recycled PVC compounds, custom solutions, and exceptional
          customer support, all with a strong focus on sustainability. Choose
          Woodland Industries for reliable solutions and a commitment to your
          success and the environment.
        </Typography>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row items-center text-center justify-evenly m-4 my-11">
          <img
            className="w-[100vh] h-[50vh] mx-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src={s1}
            alt="Service1"
          />
          <div>
          <Typography variant="h2" className="mt-10">
            <span className="text-white text-7xl hover:text-brown-800 transition ease-in-out duration-500 cursor-default ">
              {" "}
              Crafting Excellence{" "}
            </span>{" "}
      
            Customized Wooden and PVC Solutions
          </Typography>
          <Typography variant="lead" className="mt-4">At Woodland Industries, we're also proud to offer tailored wooden products. Our skilled craftsmen can create custom-made items that meet your specific requirements, ensuring the perfect fit for your project. Choose Woodland for uniquely crafted, high-quality wooden solutions designed with your needs in mind.
</Typography>
</div>
        </div>
        <div className="flex flex-col-reverse lg:flex-row items-center text-center justify-evenly m-4 my-11">
          <div>
          <Typography variant="h2" className="mt-10">
            {" "}
            <span className="text-white text-7xl block hover:text-brown-800 transition ease-in-out duration-500 cursor-default ">
              {" "}
              Moving Forward Seamless{" "}
            </span>{" "}
            Transportation Services
          </Typography>
          <Typography variant="lead" className="mt-4">
            Woodland Industries is not only a manufacturer but also a reliable
            partner in transporting your goods. We provide seamless and
            efficient transportation services, ensuring your products reach
            their destination on time and in perfect condition. Our expert
            logistics team handles everything, allowing you to focus on what
            matters most - your business. With Woodland Industries, moving
            forward has never been easier.
          </Typography>
          </div>
          <img
            className="w-[100vh] h-[50vh] mx-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src={s2}
            alt="Service2"
          />
          
        </div>
        <div className="flex flex-col lg:flex-row items-center text-center justify-evenly m-4 my-11">
          <img
            className="w-[100vh] h-[50vh] mx-20 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
            src={s3}
            alt="Service3"
          />
          <div>
          <Typography variant="h2" className="mt-10">
            {" "}
            <span className="text-white  text-7xl block hover:text-brown-800 transition ease-in-out duration-500 cursor-default ">
              {" "}
              Secure and Identified{" "}
            </span>{" "}
            Premium Packaging and Labeling of Wooden Drums
          </Typography>
          <Typography variant="lead" className="mt-4" >
            At Woodland Industries, we ensure our wooden drums are packaged and
            labeled meticulously for safe transit and easy identification. Our
            packaging process involves using robust materials that protect the
            drums from any potential damage. Each drum is then labeled clearly,
            providing all necessary information like contents, weight, and
            handling instructions. Our attention to detail in packaging and
            labeling safeguards your product and provides peace of mind.
          </Typography>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
