"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import EmptyState from "./_component/EmptyState";
import Link from "next/link";

function Dashboard() {
  const [videoList, setVideoList] = useState([]);
  return (
    <div className=" mt-3 mr-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl text-[#8338ec]">Dashboard</h2>
        <Link href={"/dashboard/create-new"}>
          <Button>+ Create New</Button>
        </Link>
      </div>

      {/* EMPTY STATE */}
      {videoList.length === 0 && (
        <div className="m-10">
          <EmptyState />
        </div>
      )}
    </div>
  );
}

export default Dashboard;
