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
  message?: string;
  resultMessage?: string;
}

const ClearFavoriteButton = ({ reset, message, resultMessage }: Props) => {
  const resetCart = () => {
    reset();
    toast(resultMessage);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"destructive"}>Clear Favorite</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[400px] ">
          <DialogTitle></DialogTitle>
          <p>{message}</p>

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

export default ClearFavoriteButton;
