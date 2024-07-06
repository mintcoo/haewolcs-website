import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};
export default function Home() {
  return (
    <main className="flex flex-grow flex-col items-center justify-between p-24 bg-sky-200"></main>
  );
}
