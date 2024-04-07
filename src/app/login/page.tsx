"use client";
import React from "react";
import { signIn } from "next-auth/react";
function page() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-center">Login with GitHub</h1>

        <button
          className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-full mt-10 mx-auto my-auto"
          onClick={async () => {
            const result = await signIn("github", {
              callbackUrl: "/dashboard",
              redirect: false,
            });
            console.log(result);
          }}
        >
          Login!
        </button>
      </div>
    </div>
  );
}

export default page;
