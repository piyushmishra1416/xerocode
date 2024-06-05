import { Button } from "@mui/material";
import React from "react";

function Welcome() {
  return (
    <div className="h-screen flex items-center  justify-center ">
      <div className="border border-black w-[70%] bg-white h-[70%]  rounded-3xl shadow-lg flex flex-col text-center items-center relative">
        <h2 className=" mt-[8%] font-bold">Welcome Arya Soni !</h2>
        <div className="flex space-x-20 mt-[8%] ">
          <Button variant="outlined">
            Developer
          </Button>
          <Button variant="outlined">Organisation</Button>
          <Button variant="outlined">Company</Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
