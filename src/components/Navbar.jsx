import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-12  flex items-center justify-end gap-x-4 bg-slate-800 text-white px-4">
      <Link href="/about">About</Link>
      <Link href="/analysis1">Analysis1</Link>
      <Link href="/analysis2">Analysis2</Link>
    </div>
  );
};

export default Navbar;
