"use client";

import { useState } from "react";
import { ClienteDto, ClienteCreateDto } from "@/types/clientes";
import { editarCliente } from "@/types/clientes";
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
  cliente: ClienteDto;
  onUpdated: (updated: ClienteDto) => void;
}

export default function ModalEditarCliente({ cliente, onUpdated }: Props) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<ClienteCreateDto>({
    nombre: cliente.nombre,
    correo: cliente.correo,
    cedula: cliente.cedula,
    tipoCliente: cliente.tipoCliente,
  });

  const handleChange = (field: keyof ClienteCreateDto, value: string) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const updated = await editarCliente(cliente.id, form);
      onUpdated(updated);
      toast.success("Cliente actualizado");
      setOpen(false);
    } catch (e) {
      console.error(e);
      toast.error("Error actualizando cliente");
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
          <DialogTitle>Editar cliente</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Nombre</label>
            <Input
              value={form.nombre}
              onChange={(e) => handleChange("nombre", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Correo</label>
            <Input
              value={form.correo}
              onChange={(e) => handleChange("correo", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Cédula</label>
            <Input
              value={form.cedula}
              onChange={(e) => handleChange("cedula", e.target.value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium">Tipo de cliente</label>
            <Select
              value={form.tipoCliente}
              onValueChange={(value) => handleChange("tipoCliente", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar tipo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ESTUDIANTE">Estudiante</SelectItem>
                <SelectItem value="CLIENTE">Cliente</SelectItem>
              </SelectContent>
            </Select>
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
