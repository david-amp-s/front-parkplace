"use client";

import { useEffect, useState } from "react";
import CardGestion from "../ui/cardGestion";
import { datosCliente, InfoClienteDto } from "@/types/clientes";
import TablaCliente from "../tablas/clientes/page";
import CrearClienteModal from "../ui/crearClienteModal";

const GestionUsuarios = () => {
  const [infoClientes, setInfoClientes] = useState<InfoClienteDto>({
    totalClientes: 0,
    estudiantes: 0,
    cliente: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await datosCliente();
        setInfoClientes(data);
      } catch (error) {
        console.error("Error al cargar info de clientes:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* Top */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">Gestión de usuarios</h2>
          <p className="text-gray-500">Administrar usuarios del sistema</p>
        </div>
          <CrearClienteModal/>
      </div>

      {/* Cards resumen */}
      <div className="mt-4 flex gap-4 justify-between">
        <CardGestion
          color="black"
          titulo="Total usuarios"
          valor={infoClientes.totalClientes}
        />
        <CardGestion
          color="green"
          titulo="Estudiantes"
          valor={infoClientes.estudiantes}
        />
        <CardGestion
          color="orange"
          titulo="Cliente"
          valor={infoClientes.cliente}
        />
      </div>

      {/* Tabla contenido */}
      <div >
        <TablaCliente/>
      </div>
    </div>
  );
};

export default GestionUsuarios;
