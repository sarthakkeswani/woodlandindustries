import { Typography } from "@material-tailwind/react";
import logo from "../assets/logo.png"
 
export function Footer() {
  return (
    <footer className="w-full bg-white p-4">
      <div className="flex  flex-wrap items-center justify-evenly gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={logo} alt="logo-ct" className="w-20" />
       
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2008 Woodland Industries
      </Typography>
      </div>
    </footer>
  );
}