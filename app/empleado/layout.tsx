"use client";

import { Button } from "@/components/ui/button";
import IconosImg from "@/components/ui/iconosImg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const EmpleadoLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const rol = localStorage.getItem("rol");

    // ❌ Si no hay token o no es EMPLEADO → fuera
    if (!token || rol !== "EMPLEADO") {
      localStorage.clear();
      router.replace("/");
      return;
    }

    // ✅ Autorizado
    setIsAuthorized(true);
  }, [router]);

  const handleLogout = () => {
    localStorage.clear();
    router.replace("/");
  };

  // ⛔ Evita render mientras valida
  if (!isAuthorized) return null;

  return (
    <>
      {/* Header */}
      <div className="w-full h-20 flex items-center justify-between shadow-md px-10 fixed top-0 left-0 bg-white z-50">
        {/* Logo y título */}
        <div className="flex items-center gap-4">
          <IconosImg ruta="ParkPlace" color="bg-blue-600" />
          <div>
            <h1 className="text-3xl font-bold">Parkplace</h1>
            <h3 className="text-gray-400">Panel operador</h3>
          </div>
        </div>

        {/* Usuario + cerrar sesión */}
        <div className="flex items-center gap-4">
          <div>
            <h2>NOMBRE USUARIO</h2>
            <h3 className="text-gray-400">Operador</h3>
          </div>
          <Button onClick={handleLogout}>Cerrar sesión</Button>
        </div>
      </div>

      {/* Body */}
      <section className="p-8 bg-gradient-to-br from-blue-50 via-sky-50 to-blue-100 w-full h-screen mt-20">
        {children}
      </section>
    </>
  );
};

export default EmpleadoLayout;
