import { Mail, MapPin } from "lucide-react";
import React from "react";

const StayConnected = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold  mb-2">Stay Connected</h1>
      <div className="my-4 space-y-1">
        <p>Got Question? Call us</p>
        <p className="text-xl font-semibold">01630 285 473</p>
      </div>

      <div className="space-y-1 mt-2">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Mail className="h-5 w-5" /> <span>atoz@support.com</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-5 w-5" /> <span>Dhaka, Bangladesh</span>
        </div>
      </div>
    </div>
  );
};

export default StayConnected;
