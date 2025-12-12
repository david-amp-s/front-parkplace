"use client";

import { useEffect, useState } from "react";
import { UsuarioDto, listarUsuarios, eliminarUsuario } from "@/types/usuarios";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { toast } from "sonner";

export default function TablaUsuarios() {
  const [data, setData] = useState<UsuarioDto[]>([]);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const result = await listarUsuarios();
      setData(result);
    } catch (e) {
      toast.error("Error al cargar usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await eliminarUsuario(id);
      setData((prev) => prev.filter((u) => u.id !== id));
      toast.success("Usuario eliminado");
    } catch {
      toast.error("Error eliminando usuario");
    }
  };

  const handleUpdate = (updated: UsuarioDto) => {
    setData((prev) => prev.map((u) => (u.id === updated.id ? updated : u)));
  };

  if (loading) return <p>Cargando usuarios...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns(handleDelete, handleUpdate)} data={data} />
    </div>
  );
}
