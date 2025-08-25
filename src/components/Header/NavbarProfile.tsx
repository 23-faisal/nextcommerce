import { User } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarProfile = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 border-2 shadow  rounded-full  ">
        <User className="h-6 w-6 " />
      </div>
      <div>
        <p className="text-sm font-medium">Guest!</p>
        <Button className="w-full " size={"sm"} variant={'outline'}>
          <Link
            className="font-semibold"
            href="/login"
          >
            Log In
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NavbarProfile;
