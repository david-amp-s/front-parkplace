"use client";

import SideBar from "@/components/layout/sideBar";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");

    // ❌ Si no hay token o no es ADMIN → fuera
    if (!token || rol !== "ADMIN") {
      router.replace("/"); // replace evita volver con "atrás"
      return;
    }

    // ✅ Está autenticado y autorizado
    setIsAuthorized(true);
  }, [router]);

  // ⛔ Evita que se renderice mientras valida
  if (!isAuthorized) return null;

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
