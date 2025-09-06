
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function EmptyState() {
  return (
    <div className="flex items-center p-5 flex-col border-3 border-dotted py-24 mt-10">
      <h2>You Dont Have Any Short Video Created</h2>
      <Link href={"/dashboard/create-new"}>
        <Button>Create New Shorts</Button>
      </Link>
    </div>
  );
}

export default EmptyState;
