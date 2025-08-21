import { navItem } from "@/constants";
import { Dot } from "lucide-react";
import Link from "next/link";
import React from "react";

const Information = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold  mb-2">Information</h1>

      <div className="flex flex-col gap-2">
        {navItem?.map((item) => (
          <Link
            className="text-slate-700 text-base underline flex items-center  "
            href={item.href}
            key={item.href}
          >
            <span>
              <Dot className="h-8 w-8" />
            </span>
            <span>{item.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Information;
