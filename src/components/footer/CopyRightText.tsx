"use client";

import React from "react";

const CopyRightText = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="text-muted-foreground text-center mt-6">
      <p>© {year} atoz | All rights reserved</p>
    </div>
  );
};

export default CopyRightText;
