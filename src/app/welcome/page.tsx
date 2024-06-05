"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";

function Welcome() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="border border-black w-[70%] bg-white h-[70%] rounded-3xl shadow-lg flex flex-col text-center relative">
        <h2 className="mt-[8%] font-bold text-[32px]">Welcome Arya Soni !</h2>
        <div className="grid grid-rows-3 md:grid-cols-3 gap-[12%] mx-[12%]  mt-[8%]">
          <Button
            variant={selectedOption === "Developer" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("Developer")}
            style={{
               color: selectedOption !== "Developer" ? "black" : "",
               borderColor: selectedOption !== "Developer" ? "black" : ""
             }}
            className="py-3"
           
          >
            Developer
          </Button>
          <Button
            variant={
              selectedOption === "Organisation" ? "contained" : "outlined"
            }
            onClick={() => setSelectedOption("Organisation")}
            style={{
               color: selectedOption !== "Organisation" ? "black" : "",
               borderColor: selectedOption !== "Organisation" ? "black" : ""
             }}
            className="py-3"
          >
            Organisation
          </Button>
          <Button
            variant={selectedOption === "Company" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("Company")}
            style={{
               color: selectedOption !== "Company" ? "black" : "",
               borderColor: selectedOption !== "Company" ? "black" : ""
             }}
            className="py-3"
          >
            Company
          </Button>
        </div>
        {(selectedOption === "Organisation" ||
          selectedOption === "Company") && (
          <div className="mt-[8%] md:mt-[0%] flex flex-col md:flex-row items-center mx-auto space-x-4">
            <TextField
              label={`${selectedOption} Name`}
              variant="outlined"
              className="w-[200px] md:w-[300px]"
              size="small"
            />
            <Button variant="contained"  className="w-[120px] mt-5 md:mt-0 p-2">
              SUBMIT
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
