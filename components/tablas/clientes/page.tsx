"use client";

import { useEffect, useState } from "react";
import { ClienteDto, listarClientes, eliminarCliente, editarCliente, ClienteCreateDto } from "@/types/clientes";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { toast } from "sonner";

export default function TablaCliente() {
  const [data, setData] = useState<ClienteDto[]>([]);
  const [loading, setLoading] = useState(true);

  const loadClientes = async () => {
    try {
      const result = await listarClientes();
      setData(result);
    } catch (e) {
      console.error("Error al listar clientes:", e);
      toast.error("Error cargando clientes");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadClientes();
  }, []);

const handleEdit = async (id: number, data: ClienteCreateDto) => {
  try {
    const updated = await editarCliente(id, data);

    setData((prev) =>
      prev.map((c) => (c.id === id ? updated : c))
    );

    toast.success("Cliente actualizado");
  } catch {
    toast.error("Error actualizando cliente");
  }
};


const handleDelete = async (id: number) => {
  try {
    await eliminarCliente(id);
    setData((prev) => prev.filter((c) => c.id !== id));
    toast.success("Cliente eliminado");
  } catch {
    toast.error("Error eliminando cliente");
  }
};


  if (loading) return <p>Cargando clientes...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns(handleDelete, handleEdit)} data={data} />

    </div>
  );
}
