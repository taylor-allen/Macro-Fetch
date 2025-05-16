"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ABeeZee } from "next/font/google";

const abeezee = ABeeZee({ subsets: ["latin"], weight: "400" });

export const Navigation = () => {
  const pathname = usePathname();

  return (
    <nav
      className={`flex justify-between items-end p-2 m-5 ${abeezee.className}`}
    >
      <div className="flex items-center justify-center">
        <Link href="/">
          <h4 className={`mt-5 text-[#FAF9F6] text-xl`}>Macro Fetch</h4>
        </Link>
      </div>
      <div className="flex">
        <Link
          href="/"
          className={
            pathname === "/"
              ? "font-bold mr-4 hover:bg-sky-700"
              : "text-[#FAF9F6] mr-4 hover:bg-sky-700"
          }
        >
          Home
        </Link>
        <a
          href="https://platform.fatsecret.com/docs/v1/foods.search"
          className={
            pathname === "/api-docs"
              ? "font-bold mr-4 hover:bg-sky-700"
              : "text-[#FAF9F6] mr-4 hover:bg-sky-700"
          }
          target="_blank"
        >
          API Documentation
        </a>
      </div>
    </nav>
  );
};
