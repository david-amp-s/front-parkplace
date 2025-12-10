"use client";

import { useEffect, useState } from "react";
import { ClienteDto, listarClientes } from "@/types/clientes";
import { DataTable } from "./data-table";
import { columns } from "./colums";

export default function TablaCliente() {
  const [data, setData] = useState<ClienteDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await listarClientes();
        setData(result);
      } catch (e) {
        console.error("Error al listar clientes:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
