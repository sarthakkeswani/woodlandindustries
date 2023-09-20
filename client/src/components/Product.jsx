import { Button, Card, Typography } from "@material-tailwind/react";
import React from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import Carousel from "./Carousel";
import { products } from "../util/productData";
import { FaFacebook } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import FiveStar from "./FiveStar";

function Product(props) {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const slides = product.image;
  const prodTable = product.featureDesc;

  return (
    <motion.div
      className="flex bg-[#F3DEBA] flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-evenly pt-10 mt-9"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <div className="flex items-center lg:w-[120rem] lg:h-[60rem] justify-center p-10 bg-white">
        <div className="flex flex-col">
          <div className="max-w-[45rem]">
            <Carousel>
              {slides.map((s) => (
                <img className="object-cover object-center " src={s} alt="" />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="details  flex flex-col  justify-center px-4">
        <Typography className="m-4 text-[#675D50]" variant="h2">
          {product.title}
        </Typography>
        <FiveStar />
        <Typography className="m-4" variant="h4">
          Rs.{product.price}
        </Typography>

        <table style={{ border: "2px solid black", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "2px solid black", padding: "8px" }}>
                Feature
              </th>
              <th style={{ border: "2px solid black", padding: "8px" }}>
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {prodTable.map((item) => (
              <tr>
                <td
                  style={{
                    border: "2px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {item.feature}
                </td>
                <td
                  style={{
                    border: "2px solid black",
                    padding: "8px",
                    textAlign: "center",
                  }}
                >
                  {item.desc}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-col items-center justify-center">
          <Link to="/contact">
            <Button
              className="mt-10 w-fit text-xl mb-4 flex bg-[#675D50]"
              color="brown"
            >
              <div className="mr-2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              Buy Now
            </Button>{" "}
          </Link>
          <Typography className="text-sm">
            Estimated delivery 2-3 weeks
          </Typography>
        </div>
        <div className="flex flex-col items-center justify-center">
          <hr class="w-full h-[2px] mx-auto  bg-gray-100 border-0 rounded my-4 dark:bg-gray-700" />
          <div className="flex items-center w-full justify-evenly text-gray-500">
            <Typography variant="h6" className="text-black">
              SHARE IT!
            </Typography>
            <div className="flex text-lg gap-4">
              <FaFacebook />
              <FaTelegram />
              <FaLinkedin />
            </div>
          </div>
          <hr class="w-full h-[2px] mx-auto  bg-gray-100 border-0 rounded my-4 dark:bg-gray-700" />
        </div>
      </div>
    </motion.div>
  );
}

export default Product;
