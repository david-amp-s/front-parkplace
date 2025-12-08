"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import IconosImg from "../ui/iconosImg";
import { registrarSalida, SalidaDto } from "@/types/salidaVehiculo";
import { generarFactura } from "@/types/factura";



const Salida = () => {
  const [placa, setPlaca] = useState("");
  const [salida, setSalida] = useState<SalidaDto | null>(null);
  const [metodoPago, setMetodoPago] = useState("EFECTIVO");

  const buscarSalida = async () => {
    try {
      const data = await registrarSalida({ placa });
      setSalida(data);
    } catch (error) {
      alert("Vehículo no encontrado");
    }
  };

  const confirmarPago = async () => {
    if (!salida) return;

    const factura = {
      placa,
      usuario_id: 1, // ⚠️ aquí debes poner el usuario real logueado
      pagos: [
        {
          metodo: metodoPago,
          monto: salida.total,
        },
      ],
    };

    try {
      await generarFactura(factura);
      alert("Factura generada correctamente");
      setSalida(null);
      setPlaca("");
    } catch (error) {
      alert("Error al generar factura");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white flex items-start gap-4">
          <div className="bg-white/20 p-4 rounded-2xl">
            <IconosImg ruta="SalidaVehiculo" color="#fff" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Salida de Vehículo</h2>
            <p className="text-sm">Registrar salida y generar cobro</p>
          </div>
        </div>

        {/* BUSQUEDA */}
        <div className="p-8">
          <h3 className="mb-2 font-medium">Buscar por Placa</h3>

          <div className="flex gap-3">
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="ABC123"
              className="w-full border rounded-full px-5 py-3 bg-gray-50"
            />

            <Button
              onClick={buscarSalida}
              className="rounded-full px-6 bg-orange-500"
            >
              Buscar
            </Button>
          </div>
        </div>

        {/* ✅ PARTE INFERIOR SOLO SI EXISTE salida */}
        {salida && (
          <div className="p-8 border-t space-y-6">

            <div className="flex justify-between bg-orange-50 p-4 rounded-xl">
              <div>
                <p className="text-sm">Hora de Ingreso</p>
                <strong>{salida.ingreso_Id}</strong>
              </div>

              <div>
                <p className="text-sm">Hora de Salida</p>
                <strong>{salida.fechaSalida}</strong>
              </div>
            </div>

            <div className="flex justify-between bg-blue-50 p-4 rounded-xl">
              <div>
                <p className="text-sm">Tiempo Total</p>
                <strong>Calculado por backend</strong>
              </div>

              <div className="text-right">
                <p className="text-sm">Total a Pagar</p>
                <strong className="text-green-600 text-xl">
                  ${salida.total}
                </strong>
              </div>
            </div>

            {/* MÉTODO DE PAGO */}
            <select
              value={metodoPago}
              onChange={(e) => setMetodoPago(e.target.value)}
              className="w-full border rounded-xl p-3"
            >
              <option value="EFECTIVO">Efectivo</option>
              <option value="TARJETA">Tarjeta</option>
              <option value="TRANSFERENCIA">Transferencia</option>
            </select>

            {/* BOTONES */}
            <div className="flex gap-4">
              <Button
                variant="secondary"
                className="w-full"
                onClick={() => setSalida(null)}
              >
                Cancelar
              </Button>

              <Button
                onClick={confirmarPago}
                className="w-full bg-orange-500"
              >
                Confirmar Salida
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default Salida;
