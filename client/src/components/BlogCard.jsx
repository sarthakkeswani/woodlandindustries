import { Card, CardBody, Typography } from "@material-tailwind/react";
import { useState } from "react";

export function BlogCard(props) {

  const [hover, setHover] = useState(false);

 const handleMouseClick = () => {
  if(hover === false){
    setHover(true)
  } else {
    setHover(false)
  }
 }
  return (
    <Card className="mt-6 w-96 p-8 hover:scale-125 transition-all duration-500 cursor-pointer m-10 bg-[#ABC4AA] rounded-full drop-shadow-2xl">
      <CardBody onClick={handleMouseClick} className="flex flex-col items-center transition duration-1000 ease-in-out ">
          <div className="m-5">{props.icon}</div>
        <Typography variant="h5" className="mb-2 text-[#675D50] font-extrabold">
          {props.title}
        </Typography>
        {hover && (<div>
        <Typography variant="p" className="flex items-center">
          {props.description}
        </Typography>
        </div>)}
      </CardBody>
    </Card>
  );
}
