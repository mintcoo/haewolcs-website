"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const path = usePathname();

  return (
    <>
      {path !== "/" && (
        <div className="h-64 bg-red-100 lg:text-lg f-c-c-c"></div>
      )}
    </>
  );
}
