"use client";
import { getServerSession } from "next-auth";

export default async function Home() {
  return (
    <main className="flex ">
      <h1>home</h1>
    </main>
  );
}
