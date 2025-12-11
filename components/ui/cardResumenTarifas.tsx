"use client";

import { useState, useEffect } from "react";
import ModalEditarTarifa from "./editarTarifa";
import { TarifaDto } from "@/types/tarifa";

interface Props {
  titulo: string;
  tarifas: TarifaDto[];
}

const CardResumenTarifas = ({ titulo, tarifas }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tarifaSeleccionada, setTarifaSeleccionada] = useState<TarifaDto | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // activa animación de entrada
    setMounted(true);
  }, []);

  function abrirModal(tarifa: TarifaDto) {
    setTarifaSeleccionada(tarifa);
    setModalOpen(true);
  }

  return (
    <>
      <div
        className={`w-full bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-400 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* HEADER */}
        <div className="bg-blue-600 text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-inner">
              <img src="/icons/tarifas.svg" className="w-6" alt="tarifas" />
            </div>

            <div>
              <h2 className="text-xl font-bold">{titulo}</h2>
              <p className="text-sm text-blue-100">Tarifas configuradas</p>
            </div>
          </div>
        </div>

        {/* LISTADO */}
        <div className="p-5 bg-white space-y-3 rounded-b-3xl">
          {tarifas.map((t, idx) => (
            <button
              key={t.id}
              className="bg-blue-50 rounded-xl px-4 py-3 w-full flex justify-between text-left hover:bg-blue-100 transition-colors duration-150"
              onClick={() => abrirModal(t)}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              <span className="text-gray-700 font-medium">
                {labelFromTipoCliente(t.tipoCliente)}
              </span>

              <span className="font-semibold text-blue-600">
                ${t.nuevaTarifa.toLocaleString("es-CO")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <ModalEditarTarifa
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        tarifa={tarifaSeleccionada}
      />
    </>
  );
};

function labelFromTipoCliente(tipo: string) {
  switch (tipo.toLowerCase()) {
    case "minuto":
    case "hora":
      return "Por Hora";

    case "dia":
    case "día":
      return "Por Día";

    case "mes":
    case "mensual":
      return "Mensual";

    default:
      return tipo;
  }
}

export default CardResumenTarifas;
