"use client";

import { useState } from "react";
import { VehiculoDto, VehiculoCreateDto, corregirVehiculo } from "@/types/vehiculos";
import { toast } from "sonner";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

interface Props {
  vehiculo: VehiculoDto;
  onUpdated: (updated: VehiculoDto) => void;
}

export default function ModalEditarVehiculo({ vehiculo, onUpdated }: Props) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState<VehiculoCreateDto>({
    placa: vehiculo.placa,
    tipoVehiculo: vehiculo.tipoVehiculo,
    cedula: vehiculo.cliente.cedula ?? "",
  });

  const handleChange = (field: keyof VehiculoCreateDto, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const updated = await corregirVehiculo(vehiculo.id, form);
      onUpdated(updated);
      toast.success("Vehículo actualizado");
      setOpen(false);
    } catch (e) {
      console.error(e);
      toast.error("Error actualizando vehículo");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-blue-500 hover:underline">
          <img src="/icons/editar.svg" className="w-4 h-4" alt="Editar" />
        </button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Editar vehículo</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Placa</label>
            <Input
              value={form.placa}
              onChange={(e) => handleChange("placa", e.target.value.toUpperCase())}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tipo vehículo</label>
            <Select
              value={form.tipoVehiculo}
              onValueChange={(value) => handleChange("tipoVehiculo", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="CARRO">Carro</SelectItem>
                <SelectItem value="MOTO">Moto</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="text-sm font-medium">Cédula del Cliente</label>
            <Input
              value={form.cedula}
              onChange={(e) => handleChange("cedula", e.target.value)}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancelar
          </Button>

          <Button onClick={handleSubmit} className="bg-blue-600 text-white">
            Guardar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
