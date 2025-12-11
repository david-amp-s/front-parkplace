"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import { IngresoDto, espaciosOcupados } from "@/types/ingresoVehiculo";

export default function ListadoVehiculos() {
  const [vehiculos, setVehiculos] = useState<IngresoDto[]>([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const cargarVehiculos = async () => {
      try {
        const data = await espaciosOcupados();
        setVehiculos(data);
      } catch (error) {
        console.error("Error al cargar los ingresos ocupados:", error);
      }
    };

    cargarVehiculos();
  }, []);

  const filtrados = vehiculos.filter((v) =>
    v.placa.toLowerCase().includes(filtro.toLowerCase()) ||
    v.tipoVehiculo.toLowerCase().includes(filtro.toLowerCase()) ||
    v.espacio.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="w-full p-6 flex flex-col gap-4">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 text-white shadow">
        <h1 className="text-2xl font-semibold">Vehículos Dentro</h1>
        <p className="text-sm opacity-80">{vehiculos.length} vehículos actualmente</p>
      </div>

      <Input
        placeholder="Buscar por placa, tipo o espacio..."
        className="rounded-xl shadow"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtrados.map((v) => (
          <Card key={v.id} className="rounded-xl border shadow-sm">
            <CardContent className="p-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="bg-purple-200 text-purple-700 p-2 rounded-full">
                  <Car size={18} />
                </div>
                <h2 className="text-lg font-semibold">{v.placa}</h2>
              </div>

              <p className="text-sm text-gray-700">
                Tipo vehículo: <span className="font-medium">{v.tipoVehiculo}</span>
              </p>
              <p className="text-sm text-gray-700">
                Espacio: <span className="font-medium">{v.espacio}</span>
              </p>
              <p className="text-sm text-gray-700">
                Fecha ingreso: <span className="font-medium">{v.fecha_ingreso}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
