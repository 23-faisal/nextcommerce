import React from "react";
import NavbarProfile from "@/components/Header/NavbarProfile";
import HeaderIcons from "@/components/Header/HeaderIcons";

const NavigationMenu = () => {
  return (
    <div className="flex items-center gap-6">
      <NavbarProfile />
      <HeaderIcons />
    </div>
  );
};

export default NavigationMenu;
