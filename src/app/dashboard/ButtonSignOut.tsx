"use client";
import React from "react";
import { signOut } from "next-auth/react";

function ButtonSignOut() {
  return (
    <div className="flex justify-center items-center  h-20">
      <button
        onClick={() => {
          signOut();
        }}
        className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full"
      >
        cerrar sesion
      </button>
    </div>
  );
}

export default ButtonSignOut;
