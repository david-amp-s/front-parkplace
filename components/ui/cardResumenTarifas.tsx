"use client";

import { useState } from "react";

import ModalEditarTarifa from "./editarTarifa";
import { TarifaDto } from "@/types/tarifa";

interface Props {
  titulo: string;
  tarifas: TarifaDto[];
}

const CardResumenTarifas = ({ titulo, tarifas }: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tarifaSeleccionada, setTarifaSeleccionada] = useState<TarifaDto | null>(null);

  function abrirModal(tarifa: TarifaDto) {
    setTarifaSeleccionada(tarifa);
    setModalOpen(true);
  }

  return (
    <>
      <div className="w-full max-w-md bg-white rounded-3xl shadow-md overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-blue-600 text-white px-6 py-5 flex items-center justify-between rounded-t-3xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <img src="/icons/tarifas.svg" className="w-6" />
            </div>

            <div>
              <h2 className="text-xl font-semibold">{titulo}</h2>
              <p className="text-sm opacity-80">Tarifas configuradas</p>
            </div>
          </div>
        </div>

        {/* LISTADO */}
        <div className="bg-white rounded-b-3xl p-5 space-y-3">
          {tarifas.map((t) => (
            <button
              key={t.id}
              className="bg-blue-50 rounded-xl px-4 py-3 flex justify-between w-full text-left hover:bg-blue-100"
              onClick={() => abrirModal(t)}
            >
              <span>{labelFromTipoCliente(t.tipoCliente)}</span>
              <span className="font-semibold">${t.nuevaTarifa.toLocaleString("es-CO")}</span>
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
    case "minuto": return "Por Hora";
    case "dia": return "Por Día";
    case "mes": return "Mensual";
    default: return tipo;
  }
}

export default CardResumenTarifas;
