"use client";

import { useEffect, useState } from "react";

import CardResumenTarifas from "@/components/ui/cardResumenTarifas";
import { listarTarifas, TarifaDto } from "@/types/tarifa";

const Tarifas = () => {
  const [tarifas, setTarifas] = useState<TarifaDto[]>([]);

  useEffect(() => {
    listarTarifas().then(setTarifas);
  }, []);

  const tarifasAutomovil = tarifas.filter(t => t.tipoVehiculo === "Automóvil");

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold">Gestión de Tarifas</h2>
      <p className="text-gray-500 mb-4">Administrar precios por tipo de vehículo</p>

      <CardResumenTarifas titulo="Automóvil" tarifas={tarifasAutomovil} />
    </div>
  );
};

export default Tarifas;
