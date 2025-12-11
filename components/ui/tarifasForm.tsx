import { useState } from "react";
import { TarifaDto, TarifaCreateDto, cambiarTarifaFija, cambiarTarifaMinuto } from "@/types/tarifa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Props {
  tarifa: TarifaDto;
  onClose: () => void;
}

const TarifasForm = ({ tarifa, onClose }: Props) => {
  const [valorMinuto, setValorMinuto] = useState<number>(tarifa.nuevaTarifa);
  const [valorTarifaFija, setValorTarifaFija] = useState<number>(tarifa.nuevaTarifa);
  const [loading, setLoading] = useState(false);

  async function guardar() {
    setLoading(true);

    const dto: TarifaCreateDto = {
      vehiculo: tarifa.tipoVehiculo,
      tipoCliente: tarifa.tipoCliente,
      valorMinuto,
      valorTarifaFija,
    };

    try {
      if (tarifa.tipoCliente.toLowerCase() === "minuto") {
        await cambiarTarifaMinuto(dto);
      } else {
        await cambiarTarifaFija(dto);
      }

      onClose();
      window.location.reload(); // Refresca datos del listado
    } catch (err) {
      console.error("Error actualizando tarifa", err);
    } finally {
      setLoading(false);
    }
  }

  const esMinuto = tarifa.tipoCliente.toLowerCase() === "minuto";

  return (
    <div className="mt-4 space-y-4">
      {esMinuto ? (
        <>
          <label className="text-sm font-semibold">Tarifa por minuto</label>
          <Input
            type="number"
            value={valorMinuto}
            onChange={(e) => setValorMinuto(parseInt(e.target.value))}
          />
        </>
      ) : (
        <>
          <label className="text-sm font-semibold">Tarifa fija</label>
          <Input
            type="number"
            value={valorTarifaFija}
            onChange={(e) => setValorTarifaFija(parseInt(e.target.value))}
          />
        </>
      )}

      <Button className="w-full" onClick={guardar} disabled={loading}>
        {loading ? "Guardando..." : "Guardar cambios"}
      </Button>
    </div>
  );
};

export default TarifasForm;