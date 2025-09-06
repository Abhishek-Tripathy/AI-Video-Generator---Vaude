import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectDuration({onUserSelect}) {
  return (
    <div className="mt-7">
      <h2 className="font-bold text-2xl text-[#8338ec]">Duration</h2>
      <p className="text-gray-500">Select the duration of your video</p>
      <Select
        onValueChange={(value) => {
          value !== "Custom Prompt" && onUserSelect("duration", value);
        }}
      >
        <SelectTrigger className="w-full m-2 p-5 text-lg cursor-pointer">
          <SelectValue placeholder="Select Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem className="p-2 text-lg cursor-pointer" value={"30 Seconds"}>30 Seconds</SelectItem>
          <SelectItem className="p-2 text-lg cursor-pointer" value={"60 Seconds"}>60 Seconds</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SelectDuration;
