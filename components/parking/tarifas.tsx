"use client";

import { useEffect, useState } from "react";
import { listarTarifas, TarifaDto } from "@/types/tarifa";
import { Card, CardContent } from "@/components/ui/card";
import CardResumenTarifas from "@/components/ui/cardResumenTarifas";

const Tarifas = () => {
  const [tarifas, setTarifas] = useState<TarifaDto[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    listarTarifas().then(setTarifas);
    setMounted(true);
  }, []);

  // Agrupar tarifas por vehículo
  const porVehiculo = (vehiculo: string) =>
    tarifas.filter((t) => t.tipoVehiculo === vehiculo);

  const vehiculos = ["Automóvil", "Motocicleta", "Camioneta", "Van"];

  const valoresPorVehiculo = tarifas.map((t) => t.nuevaTarifa ?? 0);
  const tarifaBase = valoresPorVehiculo.length ? Math.min(...valoresPorVehiculo) : 0;
  const tarifaMax = valoresPorVehiculo.length ? Math.max(...valoresPorVehiculo) : 0;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Configuración de Tarifas</h1>
      <p className="text-gray-500 mb-6">
        Administrar precios por tipo de vehículo
      </p>

      {/* CARDS RESUMEN SUPERIORES */}
      <div
        className={`grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 transition-all duration-500 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Tarifa Base</p>
            <p className="text-2xl font-bold">${tarifaBase.toLocaleString()}</p>
            <p className="text-xs text-gray-400">por hora</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Tarifa Mínima</p>
            <p className="text-2xl font-bold">
              ${tarifaBase.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">motocicletas</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Tarifa Máxima</p>
            <p className="text-2xl font-bold">
              ${tarifaMax.toLocaleString()}
            </p>
            <p className="text-xs text-gray-400">vans</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardContent className="p-4">
            <p className="text-gray-500 text-sm">Tipos Configurados</p>
            <p className="text-2xl font-bold">{vehiculos.length}</p>
          </CardContent>
        </Card>
      </div>

      {/* TARJETAS AZULES POR TIPO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {vehiculos.map((vehiculo, idx) => (
          <div
            key={vehiculo}
            className={`transition-all duration-400 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${idx * 60}ms` }}
          >
            <CardResumenTarifas
              titulo={vehiculo}
              tarifas={porVehiculo(vehiculo)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tarifas;
