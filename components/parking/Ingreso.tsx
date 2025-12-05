"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import IconosImg from "../ui/iconosImg";
import { ingresarVehiculo } from "@/types/ingresoVehiculo";


export default function Ingreso() {
  const [placa, setPlaca] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleBuscar() {
    if (!placa.trim()) {
      alert("Ingrese una placa");
      return;
    }

    setLoading(true);

    try {
      const data = await ingresarVehiculo(placa);
      console.log("Respuesta backend:", data);
      alert(`Vehículo ingresado: ${data.placa}`);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER VERDE */}
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-8 text-white flex items-start gap-4 rounded-t-3xl">
          <div className="bg-white/20 p-4 rounded-2xl flex items-center justify-center">
            <IconosImg ruta="IngresoVehiculo" color="#fff" />
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Ingreso de Vehículo</h2>
            <p className="text-white/90 text-sm">Registrar entrada al parqueadero</p>
          </div>
        </div>

        {/* CONTENIDO */}
        <div className="p-8">
          <h3 className="text-gray-700 mb-2 font-medium">Buscar por Placa</h3>

          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="ABC123"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
              className="w-full border rounded-full px-5 py-3 bg-gray-50 outline-none focus:ring-2 focus:ring-green-400"
            />

            <Button
              onClick={handleBuscar}
              disabled={loading}
              className="rounded-full px-6 bg-green-500 hover:bg-green-600"
            >
              {loading ? "Cargando..." : "Buscar"}
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
}
