import { Button, Typography } from "@material-tailwind/react";
import React from "react";
import { BlogCard } from "./BlogCard";

import pvcComp from "../assets/pvc-compound.jpg";
import woodenDrum from "../assets/wooden-drums.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
function Products() {
  return (
    <motion.div className="p-10 pt-24 bg-[#F3DEBA] " initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}>
      <div className="flexAll">
        <Typography variant="h1" className="text-[#675D50]">Products</Typography>
        <Typography className="px-20 py-10 text-xl font-semibold items-center text-justify " >
          Welcome to our trusted platform, your one-stop solution for
          top-quality PVC Compounds and finely crafted Wooden Products. Our PVC
          Compounds are highly durable, versatile, and designed to meet the
          exacting standards of a variety of industries. Alongside, we offer a
          unique collection of Wooden Products, elegantly crafted, eco-friendly
          and perfect for elevating the aesthetics of any space. Explore our
          range, experience our commitment to quality and customer service, and
          let us be your partner in bringing your vision to life
        </Typography>
      </div>
      <div className="flexAll lg:flex-row justify-evenly" >
        <div>
          <Typography className="centerAll my-10 lg:my-4 text-[#675D50]" variant="h2">
            PVC
          </Typography>
          <motion.div 
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }} class=" bg-red-100 relative group">
            <img
              className="imgClass"
              width="350rem"
              src={pvcComp}
              alt="PVC"
            />
            <div class="pvcOrWoodDesc">
              PVC compounds are specialized forms of Polyvinyl Chloride that are
              blended with additives like plasticizers, stabilizers, and
              pigments to enhance their properties. They're widely used in
              various industries due to their versatility, durability, and
              cost-effectiveness.
            </div>
          </motion.div>
        </div>
        <div>
          <Typography className="centerAll my-10 lg:my-4 text-[#675D50]" variant="h2">
            Wooden Materials
          </Typography>
          <motion.div whileHover={{
                  scale: 1.2,
                  transition: { duration:0.3 },
                }}
                whileTap={{ scale: 0.9 }} class=" bg-red-100 relative group">
            <img
              className="imgClass"
              width="350rem"
              src={woodenDrum}
              alt="Wooden"
            />
            <div class="pvcOrWoodDesc">
              Wooden materials for drums, pallets, and other industrial uses are
              crafted from high-quality, durable woods like pine and hardwood.
              These materials are chosen for their strength, reliability, and
              natural resistance to wear and tear, making them ideal for robust
              applications.
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="centerAll mt-20">
      <Link to="/products/browse">
      <Button color="brown" ripple={true} size="lg" className="rounded-full bg-[#A9907E]" >Click Here To Browse</Button>
      </Link>
      </div>
      <Typography className="centerAll sm:my-20 lg:my-10 text-[#675D50]" variant="h2">
        Features Of Products
      </Typography>
      <div className="lg:flex-row flexAll justify-evenly">
        <BlogCard
          icon={
            <svg
              class="h-12 w-12 text-[#675D50]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />{" "}
              <polyline points="7.5 4.21 12 6.81 16.5 4.21" />{" "}
              <polyline points="7.5 19.79 7.5 14.6 3 12" />{" "}
              <polyline points="21 12 16.5 14.6 16.5 19.79" />{" "}
              <polyline points="3.27 6.96 12 12.01 20.73 6.96" />{" "}
              <line x1="12" y1="22.08" x2="12" y2="12" />
            </svg>
          }
          title="Robust & Durable"
          description="PVC compounds are robust and durable due to the addition of specific additives that improve their resistance to heat, light, and chemicals. Wood's inherent toughness, combined with expert crafting, makes these products highly durable, capable of bearing heavy loads, and resilient to the rigors of transport and storage."
        />
        <BlogCard
          icon={
            <svg
              class="h-12 w-12 text-[#675D50]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3" />{" "}
              <line x1="1" y1="1" x2="23" y2="23" />
            </svg>
          }
          title="No Smoke"
          description="Our PVC compounds are specifically formulated to minimize the risk of smoke and harmful emissions, making them safer for use. They conform to stringent industry standards and are designed to ensure a lower environmental impact, further underlining our commitment to safety and sustainability."
        />
        <BlogCard
          icon={
            <svg
              class="h-12 w-12 text-[#675D50]"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <path stroke="none" d="M0 0h24v24H0z" />{" "}
              <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />{" "}
              <path
                d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                transform="rotate(120 12 13)"
              />{" "}
              <path
                d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                transform="rotate(240 12 13)"
              />
            </svg>
          }
          title="Recycled Products"
          description="In our commitment to sustainability, we're proud to offer a range of recycled PVC products. These are made from reclaimed and processed PVC, providing the same robust performance and durability as our regular products, but with a significantly reduced environmental impact."
        />
      </div>
    </motion.div>
  );
}

export default Products;
