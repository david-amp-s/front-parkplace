"use client";

import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import IconosImg from "../ui/iconosImg";
import { toast } from "sonner";

import {
  cancelarSalida,
  registrarSalida,
  SalidaDto,
} from "@/types/salidaVehiculo";

import { generarFactura, imprimirFactura } from "@/types/factura";
import { obtenerFormaPago, FormaPagoDto } from "@/types/formaPago";
import { DetallePagoInput } from "@/types/detallesPagos";

const Salida = () => {
  const [placa, setPlaca] = useState("");
  const [salida, setSalida] = useState<SalidaDto | null>(null);
  const [formasPago, setFormasPago] = useState<FormaPagoDto[]>([]);
  const [formaSeleccionada, setFormaSeleccionada] = useState<number | null>(
    null
  );

  // CARGA FORMAS DE PAGO
  useEffect(() => {
    const cargarFormasPago = async () => {
      try {
        const data = await obtenerFormaPago();
        setFormasPago(data);

        if (data.length > 0) {
          setFormaSeleccionada(data[0].id);
        }
      } catch {
        toast.error("No se pudieron cargar las formas de pago");
      }
    };

    cargarFormasPago();
  }, []);

  // BUSCAR VEHÍCULO
  const buscarSalida = async () => {
    if (!placa.trim()) return toast.warning("Ingresa una placa válida");

    try {
      const data = await registrarSalida({ placa: placa.trim() });
      setSalida(data);
      toast.success("Vehículo encontrado");
    } catch {
      toast.error("Vehículo no encontrado");
    }
  };

  // CONFIRMAR PAGO
  const confirmarPago = async () => {
  if (!salida) return toast.warning("No hay datos de salida");
  if (!formaSeleccionada) return toast.warning("Selecciona una forma de pago");

  const pagos: DetallePagoInput[] = [
    {
      formaPagoId: formaSeleccionada,
      pago: salida.total,
    },
  ];

  const factura = {
    placa,
    usuario_id: Number(localStorage.getItem("idUser")),
    pagos,
  };

  try {
    // 1. Crear factura y obtener ID
    const nuevaFactura = await generarFactura(factura);

    // 2. Descargar PDF automáticamente
    await imprimirFactura(nuevaFactura.id);

    toast.success("Factura generada y descargada");

    // Reset
    setSalida(null);
    setPlaca("");
  } catch (error) {
    toast.error("Error al generar o descargar la factura");
  }
};


  // CANCELAR SALIDA
  const eliminarSalida = async () => {
    if (!placa.trim()) return;

    try {
      await cancelarSalida(placa.trim());
      toast.success("Salida cancelada");

      setSalida(null);
      setPlaca("");
    } catch (e) {
      toast.error("Error al cancelar salida");
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen px-4 py-8">
      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="bg-orange-500 p-8 text-white flex items-start gap-4 rounded-t-3xl">
          <div className="bg-white/20 p-4 rounded-2xl">
            <IconosImg ruta="SalidaVehiculo" color="#fff" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Salida de Vehículo</h2>
            <p className="text-sm opacity-90">Registrar salida y generar pago</p>
          </div>
        </div>

        {/* BUSQUEDA */}
        <div className="p-8 space-y-3">
          <h3 className="font-medium">Buscar por Placa</h3>

          <div className="flex gap-3">
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value.toUpperCase())}
              placeholder="ABC123"
              className="w-full border rounded-2xl px-5 py-3 bg-gray-50 focus:ring-2 focus:ring-orange-400 outline-none"
            />

            <Button
              onClick={buscarSalida}
              className="rounded-2xl px-6 bg-orange-500 text-white"
            >
              Buscar
            </Button>
          </div>
        </div>

        {/* RESULTADO */}
        {salida && (
          <div className="p-8 border-t space-y-6">
            {/* CARD 1 */}
            <div className="flex justify-between bg-orange-50 p-5 rounded-2xl shadow-sm">
              <div>
                <p className="text-xs text-gray-600">Ingreso N°</p>
                <strong className="text-sm">{salida.ingreso_Id}</strong>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-600">Salida</p>
                <strong className="text-sm">{salida.fechaSalida}</strong>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="flex justify-between bg-blue-50 p-5 rounded-2xl shadow-sm">
              <div>
                <p className="text-xs text-gray-600">Tiempo Total</p>
                <strong className="text-sm">Calculado por el backend</strong>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-600">Total a Pagar</p>
                <strong className="text-green-600 text-xl">
                  ${salida.total}
                </strong>
              </div>
            </div>

            {/* SELECT PAGO */}
            <select
              value={formaSeleccionada ?? ""}
              onChange={(e) => setFormaSeleccionada(Number(e.target.value))}
              className="w-full border rounded-2xl p-3 bg-gray-50 shadow-sm focus:ring-2 focus:ring-orange-400 outline-none"
            >
              {formasPago.map((fp) => (
                <option key={fp.id} value={fp.id}>
                  {fp.descripcion}
                </option>
              ))}
            </select>

            {/* BOTONES */}
           <div className="flex gap-4 pt-2">
  <Button
    variant="secondary"
    className="flex-1 rounded-2xl"
    onClick={eliminarSalida}
  >
    Cancelar
  </Button>

  <Button
    onClick={confirmarPago}
    className="flex-1 rounded-2xl bg-orange-500 text-white"
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
