"use client";

import { useEffect, useState } from "react";
import { UsuarioDto, listarUsuarios } from "@/types/usuarios";
import { DataTable } from "./data-table";
import { columns } from "./colums";

export default function TablaUsuarios() {
  const [data, setData] = useState<UsuarioDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await listarUsuarios();
        setData(result);
      } catch (e) {
        console.error("Error al listar usuarios:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
