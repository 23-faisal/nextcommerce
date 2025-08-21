"use client";

import React from "react";
import Container from "@/components/themes/Container";
import Link from "next/link";
import SocialLInks from "@/components/footer/SocialLInks";
import StayConnected from "@/components/footer/StayConnected";
import Information from "@/components/footer/Information";
import MyAccount from "@/components/footer/MyAccount";
import CopyRightText from "@/components/footer/CopyRightText";

const Footer = () => {
  return (
    <div className="bg-white/80 dark:bg-black/80 py-10 ">
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-4 border-b ">
        <div>
          <Link
            href={"/"}
            className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500   via-red-500 to-purple-500 bg-clip-text text-transparent"
          >
            atoz
          </Link>
          <p className="text-muted-foreground text-base">
            From cart to doorstep—fast and easy.
          </p>
          <SocialLInks />
        </div>

        <div>
          <MyAccount />
        </div>
        <div>
          <Information />
        </div>
        <div>
          <StayConnected />
        </div>
      </Container>
      <CopyRightText />
    </div>
  );
};

export default Footer;
