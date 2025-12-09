"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Car } from "lucide-react";
import { EspacioDto, listarEspaciosOcupados } from "@/types/espacios";

export default function ListadoVehiculos() {
  const [vehiculos, setVehiculos] = useState<EspacioDto[]>([]);
  const [filtro, setFiltro] = useState("");

  useEffect(() => {
    const cargarEspacios = async () => {
      try {
        const data = await listarEspaciosOcupados();
        setVehiculos(data);
      } catch (error) {
        console.error("Error al cargar los espacios ocupados:", error);
      }
    };

    cargarEspacios();
  }, []);

  const filtrados = vehiculos.filter((v) =>
    v.codigo.toLowerCase().includes(filtro.toLowerCase())
  );

  return (
    <div className="w-full p-6 flex flex-col gap-4">
      <div className="bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-6 text-white shadow">
        <h1 className="text-2xl font-semibold">Vehículos Dentro</h1>
        <p className="text-sm opacity-80">{vehiculos.length} vehículos actualmente</p>
      </div>

      <Input
        placeholder="Buscar por placa, marca o modelo..."
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
                <h2 className="text-lg font-semibold">{v.codigo}</h2>
              </div>

              <p className="text-sm text-gray-700">
                Tipo espacio: <span className="font-medium">{v.tipoEspacio}</span>
              </p>
              <p className="text-sm text-gray-700">
                Vehículo permitido: <span className="font-medium">{v.tipoVehiculoPermitido}</span>
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
