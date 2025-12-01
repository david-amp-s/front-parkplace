"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SideBar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [openOps, setOpenOps] = useState(true);
  const [openGest, setOpenGest] = useState(true);
  const [openConf, setOpenConf] = useState(true);

  const linkBaseStyle =
    "flex items-center gap-3 px-4 py-2 cursor-pointer text-sm hover:bg-gray-100 rounded-lg";
  const activeStyle = "bg-blue-100 text-blue-600 font-semibold";

  const LinkItem = ({ href, icon, label }: any) => (
    <div
      onClick={() => router.push(href)}
      className={`${linkBaseStyle} ${
        pathname === href ? activeStyle : "text-gray-700"
      }`}
    >
      <img src={icon} className="w-5 h-5" alt="" />
      <span>{label}</span>
    </div>
  );

  return (
    <div className="w-72 h-screen border-r bg-white flex flex-col p-4">

      {/* Contenedor que separa contenido superior e inferior */}
      <div className="flex-1 flex flex-col gap-6">

        {/* HEADER */}
        <div className="flex items-center gap-4 pb-4 border-b">
          <img src="/icons/parkplace.png" className="w-10 h-10" alt="" />
          <div>
            <h1 className="text-xl font-bold">Parkplace</h1>
            <h3 className="text-gray-500 text-sm">Administrador</h3>
          </div>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-3 flex-1">

          <LinkItem
            href="/dashboard"
            label="Dashboard"
            icon="/icons/dashboard.svg"
          />

          {/* OPERACIONES */}
          <div>
            <button
              onClick={() => setOpenOps(!openOps)}
              className="flex items-center justify-between w-full px-3 text-sm font-semibold text-gray-500"
            >
              <span className="flex items-center gap-2">
                <img src="/icons/operaciones.svg" className="w-5 h-5" alt="" />
                Operaciones
              </span>
              <span>{openOps ? "▾" : "▸"}</span>
            </button>

            {openOps && (
              <div className="ml-6 mt-2 flex flex-col gap-1">
                <LinkItem href="/ingreso" label="Ingreso" icon="/icons/ingreso.svg" />
                <LinkItem href="/salida" label="Salida" icon="/icons/salida.svg" />
                <LinkItem href="/vehiculos-dentro" label="Vehículos Dentro" icon="/icons/lista.svg" />
              </div>
            )}
          </div>

          {/* GESTIÓN */}
          <div>
            <button
              onClick={() => setOpenGest(!openGest)}
              className="flex items-center justify-between w-full px-3 text-sm font-semibold text-gray-500"
            >
              <span className="flex items-center gap-2">
                <img src="/icons/gestion.svg" className="w-5 h-5" alt="" />
                Gestión
              </span>
              <span>{openGest ? "▾" : "▸"}</span>
            </button>

            {openGest && (
              <div className="ml-6 mt-2 flex flex-col gap-1">
                <LinkItem href="/usuarios" label="Usuarios" icon="/icons/usuarios.svg" />
                <LinkItem href="/vehiculos" label="Vehículos" icon="/icons/vehiculo.svg" />
                <LinkItem href="/clientes" label="Clientes" icon="/icons/clientes.svg" />
                <LinkItem href="/operadores" label="Operadores" icon="/icons/operador.svg" />
              </div>
            )}
          </div>

          {/* CONFIGURACIONES */}
          <div>
            <button
              onClick={() => setOpenConf(!openConf)}
              className="flex items-center justify-between w-full px-3 text-sm font-semibold text-gray-500"
            >
              <span className="flex items-center gap-2">
                <img src="/icons/config.svg" className="w-5 h-5" alt="" />
                Configuraciones
              </span>
              <span>{openConf ? "▾" : "▸"}</span>
            </button>

            {openConf && (
              <div className="ml-6 mt-2 flex flex-col gap-1">
                <LinkItem href="/tarifas" label="Tarifas" icon="/icons/tarifas.svg" />
                <LinkItem href="/espacios" label="Espacios" icon="/icons/espacios.svg" />
                <LinkItem href="/tipos-pago" label="Tipos de Pago" icon="/icons/pago.svg" />
                <LinkItem href="/tipos-vehiculo" label="Tipos de Vehículo" icon="/icons/tipo-vehiculo.svg" />
              </div>
            )}
          </div>

          <LinkItem href="/facturacion" label="Facturación" icon="/icons/factura.svg" />
          <LinkItem href="/reportes" label="Reportes" icon="/icons/reportes.svg" />
        </nav>
      </div>

      {/* PARTE INFERIOR FIJA — USUARIO */}
      <div className="border-t pt-4 mt-4">

        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-xl">
            <img src="/icons/user.svg" className="w-6 h-6 text-blue-600" alt="" />
          </div>

          <div>
            <p className="font-semibold text-gray-900 leading-tight">
              Carlos Administrador
            </p>
            <p className="text-sm text-gray-500 leading-tight">Administrador</p>
          </div>
        </div>

        <button
          className="flex items-center gap-3 w-full px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-xl text-sm font-medium text-gray-700 mt-4"
          onClick={() => router.push("/logout")}
        >
          <img src="/icons/logout.svg" className="w-5 h-5" alt="" />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
};

export default SideBar;
