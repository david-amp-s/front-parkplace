"use client";

import { useEffect, useState } from "react";
import CardGestion from "../ui/cardGestion";
import CrearUsuarioModal from "../ui/crearUsuarioModal"; // si aún no existe, te lo creo luego
import { listarUsuarios, UsuarioDto } from "@/types/usuarios"; // ajusta ruta si cambia
import TablaUsuarios from "../tablas/usuarios/tablaUsuarios"; // tu futura tabla

interface InfoUsuariosDto {
  totalUsuarios: number;
  admins: number;
  usuarios: number;
}

const GestionUsuarios = () => {
  const [infoUsuarios, setInfoUsuarios] = useState<InfoUsuariosDto>({
    totalUsuarios: 0,
    admins: 0,
    usuarios: 0,
  });

  const [usuarios, setUsuarios] = useState<UsuarioDto[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listarUsuarios();
        setUsuarios(data);

        const admins = data.filter(
          (u) => u.rolNombre.toLowerCase() === "admin"
        ).length;

        const usuariosNormales = data.filter(
          (u) => u.rolNombre.toLowerCase() !== "admin"
        ).length;

        setInfoUsuarios({
          totalUsuarios: data.length,
          admins,
          usuarios: usuariosNormales,
        });
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* Top */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Gestión de usuarios</h2>
          <p className="text-gray-500">Administrar usuarios del sistema</p>
        </div>
        <CrearUsuarioModal />
      </div>

      {/* Cards resumen */}
      <div className="mt-4 flex gap-4 justify-between">
        <CardGestion
          color="black"
          titulo="Total usuarios"
          valor={infoUsuarios.totalUsuarios}
        />
        <CardGestion
          color="green"
          titulo="Administradores"
          valor={infoUsuarios.admins}
        />
        <CardGestion
          color="orange"
          titulo="Usuarios"
          valor={infoUsuarios.usuarios}
        />
      </div>

      {/* Tabla contenido */}
      <div className="mt-6">
        <TablaUsuarios />
      </div>
    </div>
  );
};

export default GestionUsuarios;
