import React from "react";
import { getServerSession } from "next-auth";
import Image from "next/image";
import ButtonSignOut from "./ButtonSignOut";

async function Dashboard() {
  const session = await getServerSession();

  console.log(session);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-slate-300 p-10 m-20 rounded-2xl text-center">
        <h1>Wellcome to my app </h1>
        <p className="">User: {session?.user?.name}</p>
        <Image
          src={session?.user?.image || ""}
          alt="Profile icon"
          width={200}
          height={200}
          className="rounded-full"
        />

        <ButtonSignOut />
      </div>
    </div>
  );
}

export default Dashboard;
