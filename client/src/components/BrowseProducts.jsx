import { Typography } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import pvcComp from "../assets/pvc-compound.jpg";
import woodenDrum from "../assets/wooden-cable-drums.jpg";
import woodenPallet from "../assets/wooden-pallet-bed.jpg";
import woodenBatten from "../assets/wood-batten-500x500.jpg";
import transpvc from '../assets/transparent-pvc-compound.jpg'
import { Link } from "react-router-dom";
import { products } from "../util/productData";

function BrowseProducts() {
  
  return (
    <motion.div
      className="p-10 pt-24 flex flex-col items-center justify-center text-[#675D50] bg-[#F3DEBA]"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Typography variant="h1" className="mb-10">Browse Products</Typography>
      <div className="flex flex-col items-center text-center w-full">
        
        <div className="bg-[#ABC4AA] w-full">
        <Typography className="mt-4" variant="h3">
          PVC
        </Typography>
          <div className="flex flex-col lg:flex-row items-center justify-evenly ">
            <div className="">
              <Link to={`/products/browse/${products[0].slug}`}>
              
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                className="w-[20vw] h-[15vw] m-6 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={pvcComp}
                alt=""
              />
              <Typography variant="h4" className='my-8'>Color</Typography>
              </Link>
            </div>
            <div>
            <Link to={`/products/browse/${products[1].slug}`}>
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                className="w-[20vw] h-[15vw] m-6 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={transpvc}
                alt=""
              />
              <Typography variant="h4" className='my-8'>Transparent</Typography>
              </Link>
            </div>
            
          </div>
        </div>
       
        <div className="bg-[#ABC4AA] w-full mt-10">
        <Typography className="mt-4" variant="h3">
          Wooden Material
        </Typography>
          <div className="flex flex-col lg:flex-row justify-evenly items-center w-full">
          <div>
          <Link to={`/products/browse/${products[2].slug}`}>
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                className="w-[20vw] h-[15vw] m-6 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={woodenDrum}
                alt=""
              />
              <Typography variant="h4" className='my-8'>Drums</Typography>
              </Link>
            </div>
            <div>
            <Link to={`/products/browse/${products[3].slug}`}>
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                className="w-[20vw] h-[15vw] m-6 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={woodenPallet}
                alt=""
              />
              <Typography variant="h4" className='my-8'>Pallets</Typography>
              </Link>
            </div>
            <div>
            <Link to={`/products/browse/${products[4].slug}`}>
              <motion.img
                whileHover={{
                  scale: 1.1,
                }}
                className="w-[20vw] h-[15vw] m-6 rounded-lg object-cover object-center shadow-xl shadow-blue-gray-900/50"
                src={woodenBatten}
                alt=""
              />
              <Typography variant="h4" className='my-8'>Battens</Typography>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default BrowseProducts;
