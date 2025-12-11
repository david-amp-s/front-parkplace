"use client";

import { useEffect, useState } from "react";
import CardGestion from "../ui/cardGestion";
import TablaVehiculos from "../tablas/vehiculos/page";
import CrearVehiculoModal from "../ui/crearVehiculoModal";

import { listarVehiculos, VehiculoDto } from "@/types/vehiculos";

interface InfoVehiculosDto {
  totalVehiculos: number;
  carros: number;
  motos: number;
}

const GestionVehiculos = () => {
  const [vehiculos, setVehiculos] = useState<VehiculoDto[]>([]);
  const [infoVehiculos, setInfoVehiculos] = useState<InfoVehiculosDto>({
    totalVehiculos: 0,
    carros: 0,
    motos: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await listarVehiculos();
        setVehiculos(data);

        const carros = data.filter(v => v.tipoVehiculo === "CARRO").length;
        const motos = data.filter(v => v.tipoVehiculo === "MOTO").length;

        setInfoVehiculos({
          totalVehiculos: data.length,
          carros,
          motos,
        });
      } catch (error) {
        console.error("Error al cargar vehículos:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-4">
      {/* Top */}
      <div className="flex justify-between">
        <div>
          <h2 className="text-xl font-bold">Gestión de vehículos</h2>
          <p className="text-gray-500">Administrar vehículos del sistema</p>
        </div>
        <CrearVehiculoModal />
      </div>

      {/* Cards resumen */}
      <div className="mt-4 flex gap-4 justify-between">
        <CardGestion
          color="black"
          titulo="Total vehículos"
          valor={infoVehiculos.totalVehiculos}
        />
        <CardGestion
          color="green"
          titulo="Carros"
          valor={infoVehiculos.carros}
        />
        <CardGestion
          color="orange"
          titulo="Motos"
          valor={infoVehiculos.motos}
        />
      </div>

      {/* Tabla contenido */}
      <div className="mt-6">
        <TablaVehiculos  />
      </div>
    </div>
  );
};

export default GestionVehiculos;
