"use client";
import { Button } from "@mui/material";
import React, { useState } from "react";

function DeployApplication() {
  const [selectedOption, setSelectedOption] = useState("");

  return (
    <div className="h-screen flex items-center justify-center bg-blue-100">
      <div className="border border-black w-[90%] bg-white h-[90%] rounded-3xl shadow-lg flex flex-col text-center relative">
        <h2 className="mt-8 font-bold text-[24px] md:text-[32px]">Choose A Template To Deploy An Application 🚀</h2>
        <p className="text-gray-600">Import Your Existing App Or Create A New One With Our Ready-Made Templates.</p>
        <button className="absolute top-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-lg" onClick={() => alert("Logged Out")}>
          Log Out
        </button>
        <div className="grid grid-rows-3 md:grid-cols-3 gap-4 mx-4 md:mx-12 mt-12">
          <Button
            variant={selectedOption === "ImportExistingApp1" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp1")}
            style={{
              color: selectedOption !== "ImportExistingApp1" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp1" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
          <Button
            variant={selectedOption === "ImportExistingApp2" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp2")}
            style={{
              color: selectedOption !== "ImportExistingApp2" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp2" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
          <Button
            variant={selectedOption === "ImportExistingApp3" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp3")}
            style={{
              color: selectedOption !== "ImportExistingApp3" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp3" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
          <Button
            variant={selectedOption === "ImportExistingApp4" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp4")}
            style={{
              color: selectedOption !== "ImportExistingApp4" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp4" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
          <Button
            variant={selectedOption === "ImportExistingApp5" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp5")}
            style={{
              color: selectedOption !== "ImportExistingApp5" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp5" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
          <Button
            variant={selectedOption === "ImportExistingApp6" ? "contained" : "outlined"}
            onClick={() => setSelectedOption("ImportExistingApp6")}
            style={{
              color: selectedOption !== "ImportExistingApp6" ? "black" : "",
              borderColor: selectedOption !== "ImportExistingApp6" ? "black" : ""
            }}
            className="py-3"
          >
            Import Existing App
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeployApplication;
