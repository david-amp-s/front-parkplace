"use client";

import { useEffect, useState } from "react";
import { VehiculoDto, listarVehiculos, eliminarVehiculo } from "@/types/vehiculos";
import { DataTable } from "./data-table";
import { columns } from "./colums";
import { toast } from "sonner";

export default function TablaVehiculos() {
  const [data, setData] = useState<VehiculoDto[]>([]);
  const [loading, setLoading] = useState(true);

  const loadVehiculos = async () => {
    try {
      const result = await listarVehiculos();
      setData(result);
    } catch (e) {
      console.error(e);
      toast.error("Error cargando vehículos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadVehiculos();
  }, []);

  const handleUpdated = (updated: VehiculoDto) => {
    setData((prev) =>
      prev.map((v) => (v.id === updated.id ? updated : v))
    );
  };

  const handleDelete = async (id: number) => {
   try {
  await eliminarVehiculo(id);
  toast.success("Vehículo eliminado");
} catch (e) {
  toast.error("No se puede eliminar: tiene ingresos asociados");
}

  };

  if (loading) return <p>Cargando vehículos...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns(handleUpdated, handleDelete)} data={data} />
    </div>
  );
}
