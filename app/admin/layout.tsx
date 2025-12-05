"use client";

import SideBar from "@/components/layout/sideBar";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  useEffect(() => {
    const rol = localStorage.getItem("rol");

    if (rol !== "ADMIN") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex w-full">
      {/* Sidebar */}
      <SideBar />

      {/* contenido */}
      <div className="bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-full">
        <div className="sticky top-0 border-2 w-full h-10 bg-white z-10" />

        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
