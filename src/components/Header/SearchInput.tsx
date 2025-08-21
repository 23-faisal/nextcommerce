"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const SearchInput = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (data: string) => {
    console.log(data);
    setSearch("");
  };
  return (
    <div className="hidden md:inline-flex flex-1 gap-1">
      <div className="flex-1 relative">
        <Input
          onChange={(e) => setSearch(e.target.value)}
          className=""
          name={"search"}
          value={search}
          type="text"
          placeholder="Search Product Here..."
        />
        {search && (
          <X
            className="  h-6 w-6 text-slate-500 absolute  right-2 top-1.5 cursor-pointer"
            onClick={() => setSearch("")}
          />
        )}
      </div>

      <Button type="submit" onClick={() => handleSubmit(search)}>
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
