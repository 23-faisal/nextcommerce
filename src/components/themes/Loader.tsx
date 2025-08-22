"use client";
import React from "react";

const InfinityLoader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      <svg
        className="w-32 h-16"
        viewBox="0 0 120 60"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        strokeWidth="8"
      >
        {/* Background gray path */}
        <path
          d="M10,30 C10,10 50,10 60,30 C70,50 110,50 110,30 C110,10 70,10 60,30 C50,50 10,50 10,30 Z"
          stroke="#e5e7eb" /* Tailwind gray-200 */
          strokeLinecap="round"
        />

        {/* Animated gradient path */}
        <path
          d="M10,30 C10,10 50,10 60,30 C70,50 110,50 110,30 C110,10 70,10 60,30 C50,50 10,50 10,30 Z"
          stroke="url(#gradient)"
          strokeLinecap="round"
          className="animate-[dash_1.5s_linear_infinite]"
        />

        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="120" y2="0">
            <stop offset="0%" stopColor="#0ea5e9" /> {/* sky-500 */}
            <stop offset="100%" stopColor="#3b82f6" /> {/* blue-500 */}
          </linearGradient>
        </defs>
      </svg>

      <p className="mt-4 text-lg font-semibold tracking-wide text-slate-700">
        Loading...
      </p>

      <style jsx>{`
        @keyframes dash {
          0% {
            stroke-dasharray: 1, 400;
            stroke-dashoffset: 0;
          }
          50% {
            stroke-dasharray: 240, 400;
            stroke-dashoffset: -120;
          }
          100% {
            stroke-dasharray: 1, 400;
            stroke-dashoffset: -360;
          }
        }
        path {
          stroke-dasharray: 400;
          stroke-dashoffset: 0;
        }
      `}</style>
    </div>
  );
};

export default InfinityLoader;
