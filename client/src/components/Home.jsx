import React from "react";
import hProduct from "../assets/highlighted-product.jpg";
import drum from "../assets/drumroll.jpg";
import home from "../assets/home.jpg";
import home1 from "../assets/home1.jpg";
import home2 from "../assets/home2.jpg";
import home3 from "../assets/home3.jpg";
import { Typography } from "@material-tailwind/react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Home() {
  return (
    <motion.div
      className="flexAll bg-[#F3DEBA] px-4 pt-10"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <motion.div className="flexAll lg:flex-row text-center h-[40rem]">
        <Typography
          variant="h1"
          className="my-10 relative text-[#675D50] uppercase text-[5rem] font-800 "
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Woodland Industries")
                .callFunction(() => {
                  // console.log("String typed out!");
                })
                .pauseFor(2500)
                .deleteAll()
                .callFunction(() => {
                  // console.log("All strings were deleted");
                })
                .start();
            }}
          />
        </Typography>
      </motion.div>
      <div className="container">
        <div className="flexAllRev lg:flex-row justify-evenly text-center my-12">
          <div className="w-[450px] h-[400px] imgDiv1 group">
            <div className="imgDiv2 ">
              <div className="imgDiv3">
                <img
                  src={home1}
                  alt="drum"
                  className="imgClass"
                />
              </div>
              <div className=" w-[300px] left-20 centerAll imgDiv4">
                <img
                  src={home}
                  alt="hProduct"
                  className="imgClass"
                />
              </div>
            </div>
          </div>
          <Typography variant="h2" className="ml-5">
            <span className="spanTitle">
              Unveiling Craftsmanship
            </span>
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              className="block my-5"
            >
              {" "}
              {/* <---------  This helps us to run the above animation */}
              Here Excellence Meets Wood
            </motion.span>
          </Typography>
        </div>
        <div className="flexAll lg:flex-row justify-evenly text-center  my-12">
          <motion.div>
            <Typography variant="h2">
              <span className="spanTitle">
                Nature's Artistry
              </span>{" "}
              <motion.span
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
                className="block my-5"
              >
                {" "}
                Bespoke Wooden Creations Tailored for You
              </motion.span>
            </Typography>
          </motion.div>
          <div className="w-[450px] h-[400px] group imgDiv1">
            <div className="imgDiv2">
              <div className="imgDiv3">
                <img
                  src={home2}
                  alt="drum"
                  className="imgClass"
                />
              </div>
              <div className="imgDiv4">
                <img
                  src={home3}
                  alt="hProduct"
                  className="imgClass"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flexAllRev lg:flex-row  justify-evenly text-center my-12">
          <div className="w-[320px] h-[400px] group imgDiv1">
            <div className="imgDiv2">
              <div className="imgDiv3">
                <img
                  src={drum}
                  alt="drum"
                  className="imgClass"
                />
              </div>
              <div className="imgDiv4">
                <img
                  src={hProduct}
                  alt="hProduct"
                  className="imgClass"
                />
              </div>
            </div>
          </div>
          <Typography variant="h2">
            <span className="spanTitle">
              Beyond Expectations
            </span>{" "}
            <motion.span
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
              className="block my-4"
            >
              {" "}
              Our Spectrum of Services Crafted for You
            </motion.span>
          </Typography>
        </div>
      </div>
    </motion.div>
  );
}

export default Home;
