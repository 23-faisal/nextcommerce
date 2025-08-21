"use client";

import React from "react";
import { FaFacebookF, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <div className="flex items-center gap-4 mt-6">
      <a
        href="https://facebook.com/r.faisAL007"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebookF className="h-5 w-5 text-[#1877F2] hover:opacity-80 transition" />
      </a>
      <a
        href="https://x.com/faisalahmed_23"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsTwitterX className="h-5 w-5 text-black hover:opacity-80 transition" />
      </a>
      <a
        href="https://www.instagram.com/23.faisal_"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="h-5 w-5 text-[#E4405F] hover:opacity-80 transition" />
      </a>
      <a
        href="https://www.linkedin.com/in/faisalahmed23/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="h-5 w-5 text-[#0A66C2] hover:opacity-80 transition" />
      </a>
      <a
        href="https://github.com/23-faisal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="h-5 w-5 text-[#333] hover:opacity-80 transition" />
      </a>
    </div>
  );
};

export default SocialLinks;
