"use client";

import { useState } from "react";
import { cambiarTarifaMinuto, cambiarTarifaFija, TarifaDto } from "@/types/tarifa";
import { Button } from "./button";
import { Input } from "./input";


interface Props {
  tarifa: TarifaDto;
  onClose: () => void;
}

const TarifasForm = ({ tarifa, onClose }: Props) => {
  const [valor, setValor] = useState(tarifa.nuevaTarifa);

  async function handleSubmit() {
    const dto = {
      vehiculo: tarifa.tipoVehiculo,
      tipoCliente: tarifa.tipoCliente,
      valorMinuto: valor,
      valorTarifaFija: valor,
    };

    if (tarifa.tipoCliente.toLowerCase() === "minuto") {
      await cambiarTarifaMinuto(dto);
    } else {
      await cambiarTarifaFija(dto);
    }

    onClose();
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm text-gray-700">Nuevo valor</label>
        <Input
          type="number"
          value={valor}
          onChange={(e) => setValor(Number(e.target.value))}
        />
      </div>

      <Button onClick={handleSubmit} className="w-full">
        Guardar cambios
      </Button>
    </div>
  );
};

export default TarifasForm;
