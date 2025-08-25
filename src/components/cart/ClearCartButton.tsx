"use client";

import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { toast } from "sonner";

interface Props {
  reset: () => void;
}

const ClearCartButton = ({ reset }: Props) => {
  const resetCart = () => {
    reset();
    toast("Cart cleared successfully");
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>Clear Cart</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px] ">
          <DialogTitle></DialogTitle>
          <p>Do you want to clear the cart</p>

          <div className="flex items-center justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button onClick={resetCart} variant={"destructive"}>
              Save
            </Button>
          </div>
        </DialogContent>
        <DialogFooter></DialogFooter>
      </Dialog>
    </div>
  );
};

export default ClearCartButton;
