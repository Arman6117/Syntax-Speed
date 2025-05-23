"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const FilterSelector = () => {
  return (
    <div className="flex gap-3">
      <Select>
        <SelectTrigger className=" bg-pink-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-800 placeholder:text-black">
          <SelectValue placeholder="Select difficulty" className="" />
        </SelectTrigger>
        <SelectContent className=" w-64  bg-blue-600 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100">
          <SelectGroup className="p-2 space-y-4 ">
            <SelectItem
              className=" focus:bg-white  focus:bg-clip-padding focus:backdrop-filter focus:backdrop-blur-md focus:bg-opacity-30 hover:border hover:border-gray-100  font-bold text-lg text-white focus:text-white cursor-pointer"
              value="easy"
            >
              Easy
            </SelectItem>
            <SelectItem
              className=" focus:bg-white   focus:bg-clip-padding focus:backdrop-filter focus:backdrop-blur-md focus:bg-opacity-30 hover:border hover:border-gray-100   font-bold text-lg text-white focus:text-white cursor-pointer"
              value="medium"
            >
              Medium
            </SelectItem>
            <SelectItem
              className=" focus:bg-white   focus:bg-clip-padding focus:backdrop-filter focus:backdrop-blur-md focus:bg-opacity-30 hover:border hover:border-gray-100 font-bold text-lg text-white focus:text-white cursor-pointer"
              value="hard"
            >
              Hard
            </SelectItem>
            <SelectItem
              className=" focus:bg-white   focus:bg-clip-padding focus:backdrop-filter focus:backdrop-blur-md focus:bg-opacity-30  hover:border hover:border-gray-100  font-bold text-lg text-white focus:text-white cursor-pointer"
              value="hacker"
            >
              Hacker
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export default FilterSelector;
