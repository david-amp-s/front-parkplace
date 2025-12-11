"use client";

import { useEffect, useState } from "react";
import { VehiculoDto, listarVehiculos } from "@/types/vehiculos";
import { DataTable } from "./data-table";
import { columns } from "./colums";

export default function TablaVehiculos() {
  const [data, setData] = useState<VehiculoDto[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await listarVehiculos();
        setData(result);
      } catch (e) {
        console.error("Error al listar vehículos:", e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <p>Cargando vehículos...</p>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
